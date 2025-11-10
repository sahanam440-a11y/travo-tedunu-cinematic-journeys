import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Users, Package, IndianRupee, Sparkles, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  destination: z.string().min(1, "Please select a destination"),
  startDate: z.date({
    required_error: "Start date is required",
  }),
  endDate: z.date({
    required_error: "End date is required",
  }),
  adults: z.number().min(1, "At least 1 adult required").max(20),
  children: z.number().min(0).max(20),
  packageType: z.enum(["budget", "standard", "premium", "luxury"]),
  accommodationType: z.enum(["3star", "4star", "5star", "resort"]),
  addons: z.array(z.string()).default([]),
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone must be at least 10 digits").max(15),
  specialRequests: z.string().max(500).optional(),
});

type BookingFormValues = z.infer<typeof formSchema>;

interface Destination {
  id: string;
  name: string;
  priceFrom: number;
  duration: string;
}

interface BookingFormProps {
  destinations: Destination[];
  preSelectedDestination?: string;
}

const packagePricing = {
  budget: { multiplier: 1, label: "Budget", description: "Essential experiences" },
  standard: { multiplier: 1.3, label: "Standard", description: "Comfortable journey" },
  premium: { multiplier: 1.6, label: "Premium", description: "Enhanced comfort" },
  luxury: { multiplier: 2, label: "Luxury", description: "Ultimate experience" },
};

const accommodationPricing = {
  "3star": { price: 0, label: "3-Star Hotel" },
  "4star": { price: 1500, label: "4-Star Hotel" },
  "5star": { price: 3500, label: "5-Star Hotel" },
  resort: { price: 5000, label: "Premium Resort" },
};

const availableAddons = [
  { id: "guide", label: "Private Guide", price: 2000 },
  { id: "photos", label: "Professional Photography", price: 3500 },
  { id: "meals", label: "All Meals Included", price: 1500 },
  { id: "airport", label: "Airport Transfers", price: 1000 },
  { id: "insurance", label: "Travel Insurance", price: 800 },
];

export function BookingForm({ destinations, preSelectedDestination }: BookingFormProps) {
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const { toast } = useToast();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: preSelectedDestination || "",
      adults: 2,
      children: 0,
      packageType: "standard",
      accommodationType: "3star",
      addons: [],
      name: "",
      email: "",
      phone: "",
      specialRequests: "",
    },
  });

  const watchedValues = form.watch();

  useEffect(() => {
    calculatePrice();
  }, [watchedValues]);

  const calculatePrice = () => {
    const destination = destinations.find((d) => d.id === watchedValues.destination);
    if (!destination) {
      setCalculatedPrice(0);
      return;
    }

    let basePrice = destination.priceFrom;

    // Apply package multiplier
    const packageMultiplier = packagePricing[watchedValues.packageType].multiplier;
    basePrice *= packageMultiplier;

    // Calculate per person (adults + children with 50% discount)
    const totalPersons = watchedValues.adults + watchedValues.children * 0.5;
    let totalPrice = basePrice * totalPersons;

    // Add accommodation costs
    const accommodationCost = accommodationPricing[watchedValues.accommodationType].price;
    totalPrice += accommodationCost * totalPersons;

    // Add addons
    watchedValues.addons.forEach((addonId) => {
      const addon = availableAddons.find((a) => a.id === addonId);
      if (addon) {
        totalPrice += addon.price;
      }
    });

    // Calculate days difference if dates selected
    if (watchedValues.startDate && watchedValues.endDate) {
      const days = Math.ceil(
        (watchedValues.endDate.getTime() - watchedValues.startDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (days > 0) {
        totalPrice *= (days / parseInt(destination.duration.split(" ")[0]));
      }
    }

    setCalculatedPrice(Math.round(totalPrice));
  };

  const onSubmit = async (data: BookingFormValues) => {
    try {
      // Check if user is authenticated
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Authentication required",
          description: "Please login to make a booking.",
          variant: "destructive",
        });
        window.location.href = "/auth";
        return;
      }

      const destination = destinations.find((d) => d.id === data.destination);
      
      // Save booking to database
      const { data: bookingData, error } = await supabase
        .from("bookings")
        .insert({
          user_id: user.id,
          user_email: data.email,
          user_name: data.name,
          user_phone: data.phone,
          destination_id: data.destination,
          destination_name: destination?.name || "",
          check_in: format(data.startDate, "yyyy-MM-dd"),
          check_out: format(data.endDate, "yyyy-MM-dd"),
          adults: data.adults,
          children: data.children,
          package_type: data.packageType,
          accommodation: data.accommodationType,
          add_ons: data.addons,
          total_price: calculatedPrice,
          payment_status: "pending",
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Booking Created! 🎉",
        description: "Redirecting to checkout...",
      });
      
      // Redirect to checkout page
      setTimeout(() => {
        window.location.href = `/checkout?bookingId=${bookingData.id}`;
      }, 1000);
    } catch (error: any) {
      console.error("Error creating booking:", error);
      toast({
        title: "Error",
        description: "Failed to create booking. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Main Form */}
      <div className="lg:col-span-2">
        <Card className="glass-card border-2 border-border/40">
          <CardHeader>
            <CardTitle className="text-3xl font-serif">Book Your Journey</CardTitle>
            <CardDescription className="text-base">
              Customize your perfect travel experience with instant pricing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Destination Selection */}
                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold">Select Destination</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Choose your destination" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {destinations.map((dest) => (
                            <SelectItem key={dest.id} value={dest.id} className="text-base">
                              {dest.name} - {dest.duration} (From ₹{dest.priceFrom.toLocaleString()})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Date Selection */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-base font-semibold">Start Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "h-12 pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick start date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date()}
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-base font-semibold">End Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "h-12 pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick end date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => 
                                date < (form.getValues("startDate") || new Date())
                              }
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Travelers */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="adults"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          Adults (13+)
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="1"
                            max="20"
                            className="h-12 text-base"
                            {...field}
                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="children"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold flex items-center gap-2">
                          <Users className="h-4 w-4 text-accent" />
                          Children (0-12)
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="0"
                            max="20"
                            className="h-12 text-base"
                            {...field}
                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                          />
                        </FormControl>
                        <FormDescription className="text-xs">
                          50% discount for children
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Package Type */}
                <FormField
                  control={form.control}
                  name="packageType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold flex items-center gap-2">
                        <Package className="h-4 w-4 text-secondary" />
                        Package Type
                      </FormLabel>
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(packagePricing).map(([key, value]) => (
                          <Card
                            key={key}
                            className={cn(
                              "cursor-pointer transition-all duration-300 border-2",
                              field.value === key
                                ? "border-primary bg-primary/5 shadow-elevated"
                                : "border-border/40 hover:border-primary/50"
                            )}
                            onClick={() => field.onChange(key)}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-bold text-base mb-1">{value.label}</h4>
                                  <p className="text-sm text-muted-foreground">
                                    {value.description}
                                  </p>
                                </div>
                                {field.value === key && (
                                  <Check className="h-5 w-5 text-primary" />
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Accommodation */}
                <FormField
                  control={form.control}
                  name="accommodationType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold">Accommodation</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Choose accommodation" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.entries(accommodationPricing).map(([key, value]) => (
                            <SelectItem key={key} value={key} className="text-base">
                              {value.label} {value.price > 0 && `(+₹${value.price.toLocaleString()})`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Add-ons */}
                <FormField
                  control={form.control}
                  name="addons"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-accent" />
                        Enhance Your Experience
                      </FormLabel>
                      <div className="space-y-3">
                        {availableAddons.map((addon) => (
                          <FormField
                            key={addon.id}
                            control={form.control}
                            name="addons"
                            render={({ field }) => (
                              <FormItem
                                className="flex items-center space-x-3 space-y-0 rounded-lg border p-4 hover:bg-accent/5 transition-colors"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(addon.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, addon.id])
                                        : field.onChange(
                                            field.value?.filter((value) => value !== addon.id)
                                          );
                                    }}
                                  />
                                </FormControl>
                                <div className="flex-1">
                                  <FormLabel className="font-medium cursor-pointer">
                                    {addon.label}
                                  </FormLabel>
                                </div>
                                <Badge variant="outline" className="font-semibold">
                                  +₹{addon.price.toLocaleString()}
                                </Badge>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                    </FormItem>
                  )}
                />

                <Separator />

                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-serif font-bold">Your Information</h3>
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="h-12 text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              type="email"
                              className="h-12 text-base"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Phone</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+91 98765 43210"
                              type="tel"
                              className="h-12 text-base"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="specialRequests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Special Requests (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Dietary requirements, accessibility needs, etc."
                            className="h-12 text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Maximum 500 characters
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg shadow-elevated hover:shadow-glow transition-all duration-300 font-bold text-amber-900"
                  style={{ background: '#fef3c7' }}
                >
                  Confirm Booking - ₹{calculatedPrice.toLocaleString()}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      {/* Price Summary Sidebar */}
      <div className="lg:col-span-1">
        <Card className="glass-card border-2 border-primary/30 sticky top-24 shadow-elevated">
          <CardHeader className="text-amber-900" style={{ background: '#fef3c7' }}>
            <CardTitle className="text-2xl font-serif flex items-center gap-2">
              <IndianRupee className="h-6 w-6" />
              Price Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            {watchedValues.destination && (
              <>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Destination</span>
                    <span className="font-semibold">
                      {destinations.find((d) => d.id === watchedValues.destination)?.name}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Package</span>
                    <span className="font-semibold">
                      {packagePricing[watchedValues.packageType].label}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Travelers</span>
                    <span className="font-semibold">
                      {watchedValues.adults} Adult{watchedValues.adults > 1 ? "s" : ""}
                      {watchedValues.children > 0 && `, ${watchedValues.children} Child${watchedValues.children > 1 ? "ren" : ""}`}
                    </span>
                  </div>

                  {watchedValues.startDate && watchedValues.endDate && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-semibold">
                        {Math.ceil(
                          (watchedValues.endDate.getTime() - watchedValues.startDate.getTime()) /
                            (1000 * 60 * 60 * 24)
                        )}{" "}
                        days
                      </span>
                    </div>
                  )}

                  {watchedValues.addons.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-sm text-muted-foreground">Add-ons:</span>
                      {watchedValues.addons.map((addonId) => {
                        const addon = availableAddons.find((a) => a.id === addonId);
                        return (
                          <div key={addonId} className="flex justify-between text-xs pl-4">
                            <span className="text-muted-foreground">{addon?.label}</span>
                            <span className="font-medium">+₹{addon?.price.toLocaleString()}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold">Total Amount</span>
                  <span className="text-3xl font-bold text-primary">
                    ₹{calculatedPrice.toLocaleString()}
                  </span>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check className="h-3 w-3 text-accent" />
                    <span>Instant price calculation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check className="h-3 w-3 text-accent" />
                    <span>Flexible cancellation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check className="h-3 w-3 text-accent" />
                    <span>24/7 support included</span>
                  </div>
                </div>
              </>
            )}

            {!watchedValues.destination && (
              <div className="text-center py-8 text-muted-foreground">
                <Package className="h-12 w-12 mx-auto mb-3 opacity-30" />
                <p className="text-sm">Select a destination to see pricing</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
