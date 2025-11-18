import delhiImage from "@/assets/delhi.jpg";
import mathuraImage from "@/assets/mathura.jpg";
import dehradunImage from "@/assets/dehradun.jpg";
import goaImage from "@/assets/goa.jpg";

// Gallery images
import delhi1 from "@/assets/hero/delhi-1.jpg";
import delhi2 from "@/assets/hero/delhi-2.jpg";
import delhi3 from "@/assets/hero/delhi-3.jpg";
import delhi4 from "@/assets/hero/delhi-4.jpg";
import delhi5 from "@/assets/hero/delhi-5.jpg";
import delhi6 from "@/assets/hero/delhi-6.jpg";

import mathura1 from "@/assets/hero/mathura-1.jpg";
import mathura2 from "@/assets/hero/mathura-2.jpg";
import mathura3 from "@/assets/hero/mathura-3.jpg";
import mathura4 from "@/assets/hero/mathura-4.jpg";
import mathura5 from "@/assets/hero/mathura-5.jpg";
import mathura6 from "@/assets/hero/mathura-6.jpg";

import dehradun1 from "@/assets/hero/dehradun-1.jpg";
import dehradun2 from "@/assets/hero/dehradun-2.jpg";
import dehradun3 from "@/assets/hero/dehradun-3.jpg";
import dehradun4 from "@/assets/hero/dehradun-4.jpg";
import dehradun5 from "@/assets/hero/dehradun-5.jpg";
import dehradun6 from "@/assets/hero/dehradun-6.jpg";
import dehradun7 from "@/assets/hero/dehradun-7.jpg";
import dehradun8 from "@/assets/hero/dehradun-8.jpg";

import goa1 from "@/assets/hero/goa-1.jpg";
import goa2 from "@/assets/hero/goa-2.jpg";
import goa3 from "@/assets/hero/goa-3.jpg";
import goa4 from "@/assets/hero/goa-4.jpg";
import goa5 from "@/assets/hero/goa-5.jpg";
import goa6 from "@/assets/hero/goa-6.jpg";
import goa7 from "@/assets/hero/goa-7.jpg";
import goa8 from "@/assets/hero/goa-8.jpg";

export interface DestinationDetail {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  image: string;
  gallery: { image: string; caption: string }[];
  priceFrom: number;
  duration: string;
  tags: string[];
  overview: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  included: string[];
  excluded: string[];
  mapLink: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const destinations: DestinationDetail[] = [
  {
    id: "4",
    name: "Goa",
    slug: "goa",
    tagline: "🌴 Goa Bliss: 3 Days, 3 Nights - Limited Slots for Nov 28, 2025",
    image: goaImage,
    gallery: [
      { image: goa1, caption: "Baga Beach - Vibrant beach life with water sports" },
      { image: goa2, caption: "Basilica of Bom Jesus - UNESCO World Heritage Site" },
      { image: goa3, caption: "Dudhsagar Waterfall - Majestic four-tiered falls" },
      { image: goa4, caption: "Anjuna Flea Market - Colorful shopping paradise" },
      { image: goa5, caption: "Fort Aguada - Historic Portuguese fort at sunset" },
      { image: goa6, caption: "Goan Cuisine - Fresh seafood and local delicacies" },
      { image: goa7, caption: "Palolem Beach - Peaceful crescent beach paradise" },
      { image: goa8, caption: "Beach Nightlife - Vibrant parties under the stars" },
    ],
    priceFrom: 6599,
    duration: "3 days",
    tags: ["Beach", "Culture", "Wellness", "Comfort", "Limited Offer"],
    overview:
      "🗓️ EXCLUSIVE SLOTS: November 28, 2025 Only\n\nStep into serenity with our handcrafted 3-day Goa escape — designed for soulful travelers who crave comfort, clarity, and connection. Experience coastal comfort with premium stays, wholesome meals, and personalized exploration of Goa's hidden gems and vibrant culture. This special limited slots offer provides an intimate group experience with personalized attention.",
    highlights: [
      "⭐ Exclusive slots starting November 28, 2025",
      "3 Nights Premium Stay with coastal comfort",
      "2 wholesome meals per day included",
      "Up to 100 km customized local transportation",
      "Airport & Railway Station pick-up and drop",
      "Complete Goa guide with personalized itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Coastal Unwind (Nov 28, 2025)",
        description:
          "Airport & Railway Station Pick-up: Welcome to Goa! Our team greets you with ease and warmth. Check-in to your premium stay with soft linens, coastal breeze, and a space to breathe. Sunset Walk at nearby beach (like Candolim or Colva) for golden hour magic. Enjoy a comforting local meal with Goan curry, rice, and coconut-infused warmth. Optional add-on: Bonfire or storytelling circle by the beach.",
      },
      {
        day: 2,
        title: "Culture, Color & Connection (Nov 29, 2025)",
        description:
          "Start with fresh fruits, local breads, and chai. Explore Old Goa including Basilica of Bom Jesus, Fontainhas Latin Quarter, and vibrant markets. Savor a thali at a heritage café or beach shack for lunch. Custom Ride (within 100 km): Choose your vibe - spice plantation, flea markets, or hidden waterfalls. Evening: Attend a local music or art event (optional), or relax with journaling and quiet time.",
      },
      {
        day: 3,
        title: "Soulful Farewell (Nov 30, 2025)",
        description:
          "Morning Beach Time for swimming, meditation, or wave watching. Light, nourishing brunch before checkout. Local Shopping or Café Stop to pick up souvenirs or sip one last coconut water. Drop to Airport & Railway Station with heart full and mind clear.",
      },
    ],
    included: [
      "3 Nights Premium Stay",
      "2 wholesome meals per day",
      "Customized local transportation (up to 100 km)",
      "Airport & Railway Station pick-up & drop",
      "Complete Goa guide with tailored itinerary",
      "Registration fees (₹599 included in package)",
    ],
    excluded: [
      "Travel from your city to Goa (package begins after arrival)",
      "Additional meals beyond included breakfast and dinner",
      "Water sports and adventure activities",
      "Shopping and personal expenses",
      "Optional activities and add-ons",
    ],
    mapLink: "https://maps.google.com/?q=Goa,India",
    faqs: [
      {
        question: "When is this package available?",
        answer: "This is an exclusive limited slots offer available ONLY for November 28, 2025. The trip starts on November 28th and concludes on November 30th, 2025. Book early as spots are limited!",
      },
      {
        question: "What are the pricing options for this package?",
        answer: "₹6,599 for Single Person | ₹10,999 for Couples | ₹15,599 for Three Person. Registration fees of ₹599 is included in the full price.",
      },
      {
        question: "When does the package begin?",
        answer: "This package begins after your arrival in Goa on November 28, 2025. Transportation from your city to Goa is not included. Transportation is provided only on arrival at airport or railway station.",
      },
      {
        question: "Can the itinerary be customized?",
        answer: "Absolutely! Packages can be modified according to your requests. We offer personalized local transportation up to 100 km to explore your preferred destinations.",
      },
      {
        question: "What happens in case of weather issues?",
        answer: "Itinerary and activities are subject to weather and local availability. Travo Tedunu may adjust plans for safety or operational reasons. Your safety and satisfaction is our main priority.",
      },
      {
        question: "What meals are included?",
        answer: "The package includes 2 wholesome meals per day, curated to energize your mornings and soothe your evenings. Additional meals and dining experiences can be arranged at your preference.",
      },
      {
        question: "Is transportation included?",
        answer: "Yes, the transportation is included for all sightseeing activities.",
      },
    ],
  },
  {
    id: "1",
    name: "Delhi",
    slug: "delhi",
    tagline: "Monuments, street food & city secrets",
    image: delhiImage,
    gallery: [
      { image: delhi1, caption: "India Gate - The iconic war memorial at sunset" },
      { image: delhi2, caption: "Red Fort - Magnificent Mughal architecture" },
      { image: delhi3, caption: "Chandni Chowk - Bustling streets of Old Delhi" },
      { image: delhi4, caption: "Qutub Minar - UNESCO World Heritage Site" },
      { image: delhi5, caption: "Lotus Temple - Architectural marvel of peace" },
      { image: delhi6, caption: "Jama Masjid - One of India's largest mosques" },
    ],
    priceFrom: 2499,
    duration: "2 days",
    tags: ["Culture", "History", "Food"],
    overview:
      "Experience the vibrant capital of India where ancient history meets modern life. From the majestic Red Fort to the bustling streets of Chandni Chowk, Delhi offers an unforgettable journey through time.",
    highlights: [
      "India Gate at sunset",
      "Red Fort guided tour",
      "Street food walk in Old Delhi",
      "Qutub Minar exploration",
      "Lotus Temple visit",
    ],
    itinerary: [
      {
        day: 1,
        title: "Old Delhi Heritage Walk",
        description:
          "Start your journey at the iconic Red Fort, followed by a rickshaw ride through Chandni Chowk. Experience authentic street food and visit Jama Masjid, one of India's largest mosques.",
      },
      {
        day: 2,
        title: "New Delhi & Modern Culture",
        description:
          "Visit India Gate, explore Qutub Minar, and witness the architectural marvel of Lotus Temple. End your day at Connaught Place for shopping and dining.",
      },
    ],
    included: [
      "2 nights accommodation",
      "Daily breakfast",
      "All entry fees",
      "Local guide",
      "Transportation included",
    ],
    excluded: ["Flights", "Lunch & Dinner", "Personal expenses", "Tips"],
    mapLink: "https://maps.google.com/?q=Delhi,India",
    faqs: [
      {
        question: "What's the best time to visit Delhi?",
        answer: "October to March offers pleasant weather, perfect for sightseeing.",
      },
      {
        question: "Is transportation included?",
        answer: "Yes, the transportation is included for all sightseeing activities.",
      },
      {
        question: "Are meals included?",
        answer: "Daily breakfast is included. Lunch and dinner can be arranged at an additional cost.",
      },
    ],
  },
  {
    id: "2",
    name: "Mathura",
    slug: "mathura",
    tagline: "Sacred ghats, rituals and timeless devotion",
    image: mathuraImage,
    gallery: [
      { image: mathura1, caption: "Krishna Janmabhoomi - Birthplace of Lord Krishna" },
      { image: mathura2, caption: "Vishram Ghat - Sacred bathing ghat on Yamuna" },
      { image: mathura3, caption: "Evening Aarti - Divine ritual ceremony" },
      { image: mathura4, caption: "Govardhan Hill - Sacred pilgrimage site" },
      { image: mathura5, caption: "Dwarkadhish Temple - Ancient Krishna temple" },
      { image: mathura6, caption: "Yamuna River - Peaceful boat ride at dawn" },
    ],
    priceFrom: 1199,
    duration: "2 days",
    tags: ["Spiritual", "Culture", "Pilgrimage"],
    overview:
      "Immerse yourself in the spiritual heart of India. Mathura, the birthplace of Lord Krishna, offers a divine experience with its ancient temples, sacred ghats, and evening aarti ceremonies along the Yamuna River.",
    highlights: [
      "Krishna Janmabhoomi Temple",
      "Evening aarti at Vishram Ghat",
      "Govardhan Hill visit",
      "Traditional prasad tasting",
      "Boat ride on Yamuna",
    ],
    itinerary: [
      {
        day: 1,
        title: "Spiritual Awakening",
        description:
          "Begin with Krishna Janmabhoomi Temple, the birthplace of Lord Krishna. Visit Dwarkadhish Temple and witness the mesmerizing evening aarti at Vishram Ghat.",
      },
      {
        day: 2,
        title: "Pilgrimage Circuit",
        description:
          "Explore Govardhan Hill with its sacred parikrama. Visit Barsana village and experience local culture. Conclude with a peaceful boat ride on the Yamuna River.",
      },
    ],
    included: [
      "2 nights accommodation near temple",
      "Daily vegetarian breakfast",
      "Temple entry with guide",
      "Aarti ceremony participation",
      "All transfers",
    ],
    excluded: ["Flights", "Lunch & Dinner", "Donations", "Personal expenses"],
    mapLink: "https://maps.google.com/?q=Mathura,India",
    faqs: [
      {
        question: "What should I wear for temple visits?",
        answer: "Modest clothing covering shoulders and knees. Remove footwear before entering temples.",
      },
      {
        question: "Can I participate in the aarti?",
        answer: "Yes, you can participate in the evening aarti ceremony. Our guide will help you.",
      },
      {
        question: "Is this tour suitable for families?",
        answer: "Absolutely! This spiritual journey is perfect for families and solo travelers alike.",
      },
    ],
  },
  {
    id: "3",
    name: "Dehradun",
    slug: "dehradun",
    tagline: "Riverside trails, mountain air, gentle escapes",
    image: dehradunImage,
    gallery: [
      { image: dehradun1, caption: "Robber's Cave - Natural cave formation" },
      { image: dehradun2, caption: "Sahastradhara - Therapeutic sulphur springs" },
      { image: dehradun3, caption: "Forest Research Institute - Colonial architecture" },
      { image: dehradun4, caption: "Mussoorie Hills - Queen of the Hills" },
      { image: dehradun5, caption: "Cable Car Ride - Spectacular mountain views" },
      { image: dehradun6, caption: "Kempty Falls - Scenic waterfall trek" },
      { image: dehradun7, caption: "Lakshman Jhula - Iconic suspension bridge" },
      { image: dehradun8, caption: "Ganga Aarti - Evening spiritual ceremony" },
    ],
    priceFrom: 3999,
    duration: "3 days",
    tags: ["Adventure", "Nature", "Mountains"],
    overview:
      "Discover the gateway to the Himalayas. Nestled in the Doon Valley, Dehradun offers lush landscapes, colonial charm, and adventure activities amidst pine forests and misty mountains.",
    highlights: [
      "Robber's Cave exploration",
      "Sahastradhara waterfall trek",
      "Forest Research Institute tour",
      "Cable car ride to Mussoorie",
      "River rafting in Rishikesh",
    ],
    itinerary: [
      {
        day: 1,
        title: "Valley Exploration",
        description:
          "Visit the majestic Forest Research Institute and explore Robber's Cave. Enjoy local cuisine and evening walk at Paltan Bazaar.",
      },
      {
        day: 2,
        title: "Mountain Adventure",
        description:
          "Take a cable car to nearby Mussoorie. Enjoy panoramic views of the Himalayas. Trek to Kempty Falls and experience mountain life.",
      },
      {
        day: 3,
        title: "River & Spirituality",
        description:
          "Day trip to Rishikesh for river rafting adventure. Visit iconic Lakshman Jhula and attend evening Ganga Aarti before returning to Dehradun.",
      },
    ],
    included: [
      "3 nights mountain resort stay",
      "Daily breakfast & dinner",
      "Adventure activities",
      "Cable car tickets",
      "Private transport",
      "Professional guide",
    ],
    excluded: ["Flights", "Lunches", "Rafting photos", "Personal gear", "Tips"],
    mapLink: "https://maps.google.com/?q=Dehradun,India",
    faqs: [
      {
        question: "What's the difficulty level for activities?",
        answer: "Most activities are moderate difficulty, suitable for reasonably fit individuals. Adventure activities are optional.",
      },
      {
        question: "What should I pack?",
        answer: "Comfortable walking shoes, light jacket, sunscreen, and camera. We provide safety gear for adventure activities.",
      },
      {
        question: "Can I customize the itinerary?",
        answer: "Yes! We can adjust activities based on your preferences and fitness level.",
      },
    ],
  },
];
