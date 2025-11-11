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
  coordinates: {
    origin: { lat: number; lng: number; name: string };
    destination: { lat: number; lng: number; name: string };
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const destinations: DestinationDetail[] = [
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
      "Private transport",
    ],
    excluded: ["Flights", "Lunch & Dinner", "Personal expenses", "Tips"],
    mapLink: "https://maps.google.com/?q=Delhi,India",
    coordinates: {
      origin: { lat: 12.9716, lng: 77.5946, name: "Bangalore" },
      destination: { lat: 28.6139, lng: 77.2090, name: "Delhi" },
    },
    faqs: [
      {
        question: "What's the best time to visit Delhi?",
        answer: "October to March offers pleasant weather, perfect for sightseeing.",
      },
      {
        question: "Is transportation included?",
        answer: "Yes, private AC transport is included for all sightseeing activities.",
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
    coordinates: {
      origin: { lat: 12.9716, lng: 77.5946, name: "Bangalore" },
      destination: { lat: 27.4924, lng: 77.6737, name: "Mathura" },
    },
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
    coordinates: {
      origin: { lat: 12.9716, lng: 77.5946, name: "Bangalore" },
      destination: { lat: 30.3165, lng: 78.0322, name: "Dehradun" },
    },
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
  {
    id: "4",
    name: "Goa",
    slug: "goa",
    tagline: "Sun, sand, sea, and endless serenity",
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
    priceFrom: 4999,
    duration: "4 days",
    tags: ["Beach", "Adventure", "Nightlife", "Food"],
    overview:
      "Discover India's tropical paradise where golden beaches meet Portuguese heritage. Goa offers the perfect blend of relaxation, adventure, culture, and vibrant nightlife amidst swaying palms and turquoise waters.",
    highlights: [
      "Beach hopping from North to South Goa",
      "UNESCO heritage churches in Old Goa",
      "Dudhsagar Waterfall trekking",
      "Water sports and boat cruises",
      "Beach shack dining and nightlife",
    ],
    itinerary: [
      {
        day: 1,
        title: "North Goa Beach Explorer",
        description:
          "Arrive and check into your beach resort. Explore famous Baga Beach with water sports activities. Visit the vibrant Calangute Beach and enjoy sunset at Anjuna Beach. Evening at your leisure to explore beach shacks and local cuisine.",
      },
      {
        day: 2,
        title: "Heritage & Culture Trail",
        description:
          "Visit the historic Old Goa with its magnificent Portuguese churches including Basilica of Bom Jesus and Se Cathedral. Explore Fort Aguada and its lighthouse. Evening visit to Anjuna Flea Market for shopping. Sunset dinner cruise on the Mandovi River.",
      },
      {
        day: 3,
        title: "Adventure & Nature",
        description:
          "Full day trip to Dudhsagar Waterfall with jungle jeep safari. Experience spice plantation tour with traditional Goan lunch. Visit butterfly conservatory. Return to beach for relaxation and water sports at Palolem or Agonda Beach.",
      },
      {
        day: 4,
        title: "South Goa Serenity",
        description:
          "Explore peaceful South Goa beaches - Palolem, Agonda, and Cabo de Rama Fort. Visit local markets and try authentic Goan seafood. Optional: Dolphin spotting tour or yoga session. Evening beach party experience before departure.",
      },
    ],
    included: [
      "4 nights beachside resort stay",
      "Daily breakfast buffet",
      "Waterfall jeep safari",
      "Sunset river cruise",
      "Spice plantation tour with lunch",
      "All transfers and sightseeing",
      "Professional guide",
    ],
    excluded: [
      "Flights",
      "Lunches & Dinners (except plantation lunch)",
      "Water sports activities",
      "Nightclub entry fees",
      "Shopping and personal expenses",
    ],
    mapLink: "https://maps.google.com/?q=Goa,India",
    coordinates: {
      origin: { lat: 12.9716, lng: 77.5946, name: "Bangalore" },
      destination: { lat: 15.2993, lng: 74.1240, name: "Goa" },
    },
    faqs: [
      {
        question: "What's the best time to visit Goa?",
        answer: "November to February offers perfect beach weather with pleasant temperatures. October and March are also good for fewer crowds.",
      },
      {
        question: "Are water sports included in the package?",
        answer: "Basic beach activities are included, but premium water sports like parasailing, jet skiing, and scuba diving can be arranged at additional cost.",
      },
      {
        question: "Is this tour suitable for families?",
        answer: "Absolutely! Goa offers something for everyone - peaceful beaches for relaxation, adventure activities for thrill-seekers, and cultural sites for history buffs.",
      },
      {
        question: "What should I pack for Goa?",
        answer: "Light cotton clothes, swimwear, sunscreen, hat, sunglasses, comfortable sandals, and a light jacket for evenings. Don't forget your camera!",
      },
    ],
  },
];
