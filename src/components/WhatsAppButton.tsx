import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppButton = ({ 
  phoneNumber = "916363150891",
  message = "Hi! I'm interested in booking a tour with Travo Tedunn. Can you help me?"
}: WhatsAppButtonProps) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-24 md:bottom-24 right-4 md:right-8 z-[60] h-14 w-14 md:h-16 md:w-16 rounded-full shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-110 bg-[#25D366] hover:bg-[#20BA5A] text-white border-0"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
      <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-pulse" />
    </Button>
  );
};
