import delhiImage from "@/assets/delhi.jpg";
import mathuraImage from "@/assets/mathura.jpg";
import dehradunImage from "@/assets/dehradun.jpg";

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

export interface DestinationDetail {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  image: string;
  gallery: string[];
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
    id: "1",
    name: "Delhi",
    slug: "delhi",
    tagline: "Monuments, street food & city secrets",
    image: delhiImage,
    gallery: [delhi1, delhi2, delhi3, delhi4, delhi5, delhi6],
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
    gallery: [mathura1, mathura2, mathura3, mathura4, mathura5, mathura6],
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
    gallery: [dehradun1, dehradun2, dehradun3, dehradun4, dehradun5, dehradun6, dehradun7, dehradun8],
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
