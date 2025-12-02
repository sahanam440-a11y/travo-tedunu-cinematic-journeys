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
    tagline: "🎄✨ GOA CHRISTMAS & NEW YEAR SPECIAL PACKAGE 2025–26",
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
    priceFrom: 6099,
    duration: "3 days",
    tags: ["Beach", "Festive", "Christmas", "New Year", "Premium"],
    overview:
      "🎄✨ Celebrate the most magical days of the year in Goa! A perfect blend of premium stay, delicious food, warm experiences, and flexible travel options—designed specially for solo travellers, couples, and friend groups. ❤🌴✨\n\n✨ IT'S AN ON ARRIVAL PACKAGE - Package starts after reaching Goa on December 24, 2025\n\n💸 PACKAGE PRICES (ONE ROOM FOR ALL)\n🎁 Solo Traveller: ₹6,099\n🎁 Couple Package: ₹11,149\n🎁 3 Friends Group: ₹15,199",
    highlights: [
      "🎄 Festive Christmas & New Year celebration starting December 24",
      "🏨 Premium AC Room (3 nights) - One room for entire group",
      "🍽️ 6 Meals Included (Breakfast + Dinner daily)",
      "✈️🚆 Full Flight & Train Booking Support (fare not included)",
      "🚗 Airport/Railway pickup & drop + Light sightseeing",
      "🎁 Welcome Kit + Beach Bonfire OR Guided Market Walk",
      "📍 Calangute, Baga, Aguada, Candolim, Miramar visits",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Day - December 24 (Christmas Eve)",
        description:
          "📍 Airport OR Railway pickup by our team. Check-in to Premium AC Room with festive ambience. 🎄 Welcome Kit: Tote bag, water bottle, snack, itinerary card. Evening: Beach walk at Calangute/Baga OR relax at property. 🍛 Dinner included - festive meal with veg & non-veg options.",
      },
      {
        day: 2,
        title: "Christmas Day - December 25 (Sightseeing & Celebration)",
        description:
          "🍛 Breakfast included. 🚙 Sightseeing: Visit Calangute/Baga Beach, Aguada View Point, Candolim, Miramar. 🛍️ Local market walk for shopping and exploration. Evening: 🔥 Beach Bonfire OR Guided Market Walk (special festive experience). 🍛 Dinner included with festive vibes.",
      },
      {
        day: 3,
        title: "December 26 - Relaxation & Beach Time",
        description:
          "🍛 Breakfast included. Free time for beach activities, swimming, or personal exploration. Optional: Shopping, café hopping, or relaxing at property. 🍛 Dinner included - enjoy your last festive evening in Goa.",
      },
      {
        day: 4,
        title: "Departure Day - December 27 (Check-out)",
        description:
          "Final breakfast (if time permits). Check-out from property. 📍 Drop to Airport OR Railway Station. Depart with memories, new friends, and festive joy! ✨",
      },
    ],
    included: [
      "✅ Premium AC Room for 3 nights (One room for solo/couple/group)",
      "✅ 6 Meals per person (Breakfast + Dinner × 3 days)",
      "✅ Airport/Railway pickup & drop",
      "✅ Short sightseeing (Calangute, Baga, Aguada, Candolim, Miramar)",
      "✅ Welcome Kit (Tote bag, water bottle, snack, itinerary)",
      "✅ Beach Bonfire OR Guided Market Walk",
      "✅ Personalized itinerary & 24/7 support",
      "✅ No hidden charges",
    ],
    excluded: [
      "❌ Train/Flight tickets (only booking support provided - must book 5+ days before)",
      "❌ Lunch meals",
      "❌ Alcohol & beverages",
      "❌ Adventure sports & water activities",
      "❌ Shopping & personal expenses",
      "❌ Extra kilometers beyond included sightseeing",
    ],
    mapLink: "https://maps.google.com/?q=Goa,India",
    faqs: [
      {
        question: "When does this festive package start?",
        answer: "The package starts on December 24, 2025 (Christmas Eve) and continues through December 27, 2025. It's an ON ARRIVAL package, meaning it begins after you reach Goa.",
      },
      {
        question: "What are the package prices?",
        answer: "Solo Traveller: ₹6,099 | Couple Package: ₹11,149 | 3 Friends Group: ₹15,199. Each price includes ONE premium AC room for the entire group, with room setup adjusted for group size (private for solo, double-bed for couples, triple-sharing for 3 friends).",
      },
      {
        question: "Is train/flight booking included?",
        answer: "We provide FULL BOOKING SUPPORT for both flights and trains, but the ticket fare is NOT included in the package price. Fares vary by city and dates. You must book at least 5 days before the event. We ensure best available fare and timing.",
      },
      {
        question: "What meals are included?",
        answer: "6 meals total: Breakfast + Dinner for 3 days. Meals are homely, tasty, hygienic with both veg and non-veg options. Lunch is not included.",
      },
      {
        question: "What's included in sightseeing?",
        answer: "Short-distance sightseeing includes: Calangute/Baga Beach, Aguada View Point, Candolim, Miramar, and local market walk. Plus one special evening experience: Beach Bonfire OR Guided Market Walk.",
      },
      {
        question: "What is the room arrangement?",
        answer: "ONE premium AC room provided for all: Solo → Entire room private | Couple → Double-bed setup in same room | 3 Friends → Triple-sharing/extra mattress in same room. Super clean, safe & festive ambience near market, cafés & beach areas.",
      },
      {
        question: "What's NOT included in the package?",
        answer: "Not included: Train/flight tickets (only booking support), lunch meals, alcohol, adventure sports, extra kilometers, shopping expenses. Always confirm taxi prices before starting and be aware of common Goa scams.",
      },
      {
        question: "What documents do I need?",
        answer: "Valid Government ID is required at check-in. For flight/train booking support, you need to book at least 5 days before December 24th.",
      },
      {
        question: "Can I customize the itinerary?",
        answer: "The festive package has a set itinerary optimized for Christmas & New Year celebration. However, you have free time on Day 3 for personal exploration. Sightseeing is subject to festive-season availability and weather conditions.",
      },
      {
        question: "What about weather or schedule changes?",
        answer: "Itinerary may change due to weather/local conditions. Travo Tedunu may adjust plans for safety or operational reasons. Your safety and satisfaction is our priority. Rooms and sightseeing depend on festive availability.",
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
