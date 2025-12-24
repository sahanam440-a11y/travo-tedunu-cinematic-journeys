import delhiImage from "@/assets/delhi.jpg";
import mathuraImage from "@/assets/mathura.jpg";
import dehradunImage from "@/assets/dehradun.jpg";
import goaImage from "@/assets/goa.jpg";
import manaliImage from "@/assets/manali.jpg";

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

import manali1 from "@/assets/hero/manali-1.jpg";
import manali2 from "@/assets/hero/manali-2.jpg";
import manali3 from "@/assets/hero/manali-3.jpg";
import manali4 from "@/assets/hero/manali-4.jpg";
import manali5 from "@/assets/hero/manali-5.jpg";
import manali6 from "@/assets/hero/manali-6.jpg";

import shimlaImage from "@/assets/shimla.jpg";
import shimla1 from "@/assets/hero/shimla-1.jpg";
import shimla2 from "@/assets/hero/shimla-2.jpg";
import shimla3 from "@/assets/hero/shimla-3.jpg";
import shimla4 from "@/assets/hero/shimla-4.jpg";
import shimla5 from "@/assets/hero/shimla-5.jpg";
import shimla6 from "@/assets/hero/shimla-6.jpg";

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
    priceFrom: 8099,
    duration: "3 Days / 3 Nights",
    tags: ["Beach", "Festive", "Christmas", "New Year", "Premium"],
    overview:
      "🎄✨ Celebrate the most magical days of the year in Goa!\n\nA perfect blend of premium stay, delicious food, warm experiences, and flexible travel options—designed specially for solo travellers, couples, and friend groups. ❤🌴✨\n\n✨ IT'S AN ON ARRIVAL PACKAGE - Package starts after reaching Goa\n\n💸 PACKAGE PRICES (ONE ROOM FOR ALL)\n🎁 Solo Traveller: ₹8,099\n🎁 Couple Package: ₹14,149\n🎁 3 Friends Group: ₹20,199\n\n✔ One premium AC room included\n✔ Room arranged according to group size\n✔ Super clean, safe & festive ambience",
    highlights: [
      "🏨 Premium AC Room (3 nights) - One room for entire group",
      "🍽️ 6 Meals Included (Breakfast + Dinner × 3 days)",
      "✈️🚆 Full Flight & Train Booking Support (fare not included)",
      "🚗 Airport/Railway pickup & drop included",
      "🎁 Welcome Kit (Tote bag, water bottle, snack, itinerary card)",
      "🔥 Beach Bonfire OR Guided Market Walk included",
      "📍 Calangute, Baga, Aguada, Candolim, Miramar sightseeing",
      "📞 24/7 support & personalized itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival + Check-in + Beach Vibes",
        description:
          "✨ Relax • Explore nearby beaches • Settle into festive mood\n\n🚗 PICKUP & CHECK-IN\n• Airport OR Railway Station pickup\n• Welcome kit provided (tote bag, snack, water bottle, itinerary card)\n• Check-in and freshen up in your premium AC room\n\n🍽️ MEAL 1: Dinner (Day 1)\n• Homely veg/non-veg dinner served at stay\n\n🌴 EVENING PLAN\n• Visit Calangute Beach or Candolim Beach (whichever is closer)\n• Free time to enjoy: Beach walk, street snacks, live music cafés (optional, self-pay)\n\n✨ NIGHT ACTIVITY\n• Relax at stay or enjoy nearby night market\n• Early sleep for a refreshing Day 2",
      },
      {
        day: 2,
        title: "Sightseeing + Bonfire/Market Walk",
        description:
          "✨ Explore Goa's classic spots + festive add-on\n\n🍽️ MEAL 2: Breakfast (Day 2)\n\n🚙 LOCAL SIGHTSEEING (4-5 hours)\n• Aguada View Point\n• Baga Beach\n• Calangute Beach\n• Miramar Beach\n• Local Market Walk (Light sightseeing)\n📌 Photography time at each location, calm & relaxed experience\n\n✨ FREE TIME (Afternoon)\n• Rest in room\n• Roam nearby cafés\n• Shopping (self-pay)\n\n🍽️ MEAL 3: Dinner (Day 2)\n\n🔥 EVENING FESTIVE ACTIVITY\nChoose ONE (included in package):\n• Beach Bonfire (cozy & peaceful) OR\n• Guided Market Walk (local Christmas/New Year vibe)",
      },
      {
        day: 3,
        title: "Self-Explore + Sunset + Chill Day",
        description:
          "✨ Chill day to enjoy Goa your own way\n\n🍽️ MEAL 4: Breakfast (Day 3)\n\n🌴 SELF-EXPLORE DAY\nRecommended activities (free time):\n• Visit nearby cafés\n• Explore flea markets\n• Sunset at Candolim or Anjuna\n• Relax on beach benches\n📌 No rush, full chill day for solo/couple/friends\n\n🍽️ MEAL 5: Dinner (Day 3)\n• Comfort meal before the next day's departure",
      },
      {
        day: 4,
        title: "Departure Day",
        description:
          "(Not counted inside 3-day sightseeing but included due to 3 nights stay)\n\n🍽️ MEAL 6: Breakfast (Day 4)\n• Light, fresh meal before checkout\n\n🚗 DROP SERVICE\n• Airport or Railway Station drop\n\n(End of package)",
      },
    ],
    included: [
      "✅ Premium AC Room (3 nights) - One room for solo/couple/group",
      "✅ 6 meals per person (Breakfast + Dinner daily)",
      "✅ Airport/Railway pickup & drop",
      "✅ Light sightseeing (Calangute, Baga, Aguada, Candolim, Miramar)",
      "✅ Welcome kit (Tote bag, water bottle, snack, itinerary card)",
      "✅ Beach Bonfire OR Guided Market Walk",
      "✅ Personalized itinerary",
      "✅ 24/7 support",
      "✅ No hidden charges",
    ],
    excluded: [
      "❌ Lunch meals",
      "❌ Alcohol",
      "❌ Train/Flight ticket charges (only booking support provided)",
      "❌ Adventure sports & water activities",
      "❌ Extra kilometers beyond included sightseeing",
      "❌ Shopping expenses",
    ],
    mapLink: "https://maps.google.com/?q=Goa,India",
    faqs: [
      {
        question: "What are the package prices?",
        answer: "🎁 Solo Traveller: ₹8,099 | 🎁 Couple Package: ₹14,149 | 🎁 3 Friends Group: ₹20,199. One premium AC room included for all. Room arranged according to group size.",
      },
      {
        question: "How is the room arranged?",
        answer: "👤 Solo → Entire room private | ❤ Couple → Double-bed setup in same room | 👥 3 Friends → Triple-sharing / extra mattress in same room. Super clean, safe & festive ambience near market, cafés & beach areas.",
      },
      {
        question: "Is train/flight booking included?",
        answer: "We offer FULL ASSISTANCE for both travel types. ✈️ FLIGHT: We help book flight tickets to/from Goa. 🚆 TRAIN: We assist in booking train tickets (Sleeper/3AC/2AC available). ⚠️ Fare NOT included in package price. Prices vary by city & date. Must book 5+ days before the event.",
      },
      {
        question: "What meals are included?",
        answer: "🍽️ 6 MEALS INCLUDED: Breakfast + Dinner (2 meals × 3 days). 🔥 Homely, tasty, hygienic meals. 🌿 Veg & non-veg options available. Festive-friendly & fulfilling. Lunch is NOT included.",
      },
      {
        question: "What transport is included?",
        answer: "🚗 Airport OR Railway pickup on arrival. 📍 Drop on the last day. 🚙 Short sightseeing included: Calangute/Baga Beach, Aguada View Point, Candolim/Miramar, Local market walk.",
      },
      {
        question: "What festive add-ons are included?",
        answer: "🎁 Welcome Kit: Tote bag, water bottle, snack, itinerary card. 🔥 Beach Bonfire OR Guided Market Walk - A special evening experience full of festive vibes ✨",
      },
      {
        question: "What is NOT included?",
        answer: "❌ Lunch ❌ Alcohol ❌ Train/Flight ticket charges ❌ Adventure sports ❌ Extra kilometers ❌ Shopping expenses",
      },
      {
        question: "What are the important notes & disclaimers?",
        answer: "📌 Train/flight tickets not included - only booking support provided. 📌 Must book travel 5 days before event. 📌 One premium room for solo/couple/group. 📌 Sightseeing is short-distance only. 📌 Govt ID required at check-in. 📌 Itinerary may change due to weather/local conditions.",
      },
      {
        question: "Any safety tips for Goa?",
        answer: "⚠️ Confirm taxi prices before starting. 📸 Take photos of rental bikes to avoid fake fees. 🏖️ Avoid random beach sellers for water sports. 📞 No dealing with strangers claiming to be hotel staff — use our official number only.",
      },
      {
        question: "When does the package start?",
        answer: "✨ IT'S AN ON ARRIVAL PACKAGE - The package starts after you reach Goa. We'll pick you up from the airport or railway station.",
      },
    ],
  },
  {
    id: "5",
    name: "Manali",
    slug: "manali",
    tagline: "🌄 Premium Budget Package - Snow, Mountains & Adventure",
    image: manaliImage,
    gallery: [
      { image: manali1, caption: "Hadimba Temple - Ancient wooden temple in cedar forest" },
      { image: manali2, caption: "Solang Valley - Snow adventures and winter sports" },
      { image: manali3, caption: "Atal Tunnel - World's longest highway tunnel" },
      { image: manali4, caption: "Mall Road - Bustling shopping street with mountain views" },
      { image: manali5, caption: "Sissu Lake - Serene glacial lake surrounded by mountains" },
      { image: manali6, caption: "Naggar Castle - Historic heritage castle with panoramic views" },
    ],
    priceFrom: 9999,
    duration: "7 days",
    tags: ["Adventure", "Snow", "Mountains", "Premium"],
    overview:
      "🌄 MANALI PREMIUM BUDGET PACKAGE\n\n7 Days / 6 Nights • ₹9,999 Per Person\n\nExperience the magic of Manali with our all-inclusive premium budget package. From snow-capped mountains to ancient temples, adventure activities to scenic valleys - this package covers it all!\n\n✨ All Inclusive • No Hidden Charges • Premium Experience",
    highlights: [
      "🚌 Delhi → Manali → Delhi AC Travel included",
      "🏨 Premium Stay for 6 Nights with daily breakfast & dinner",
      "🍿 Unlimited Evening Snacks throughout the trip",
      "🚗 Local Sightseeing Transportation included",
      "📸 7 Days Complete Sightseeing coverage",
      "❄️ 3 Snow Games Included (Tube Sliding, Snow Scooter, Snow Play Zone)",
      "🔙 Return Drop to Delhi + 24/7 Trip Assistance",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Manali (Overnight Journey)",
        description:
          "Overnight AC Volvo/Traveller journey from Delhi. Morning arrival in Manali. Hotel check-in and relaxation time. Evening visit to Mall Road for shopping and local food exploration.",
      },
      {
        day: 2,
        title: "Manali Local Tour",
        description:
          "Visit iconic Hadimba Temple surrounded by cedar forest. Experience Vashisht Hot Spring's therapeutic waters. Enjoy Club House Activities and Van Vihar park. Explore Tibetan Monastery and end with evening Mall Road shopping.",
      },
      {
        day: 3,
        title: "Solang Valley Adventure Day",
        description:
          "Full day at Solang Valley with 3 included snow games: Snow Tube Sliding, Snow Scooter Ride, and Snow Play Zone. Optional activities available: Zorbing, Ropeway View, Valley Photo Points. Return with memories of snow-filled adventures!",
      },
      {
        day: 4,
        title: "Atal Tunnel & Sissu Exploration",
        description:
          "Drive through the engineering marvel - Atal Tunnel (world's longest highway tunnel). Visit serene Sissu Lake and majestic Sissu Waterfall. Enjoy breathtaking Glacier Viewpoints throughout the journey.",
      },
      {
        day: 5,
        title: "Naggar & Jana Waterfall",
        description:
          "Explore historic Naggar Castle with panoramic valley views. Visit Roerich Art Gallery showcasing Russian artist's work. Mini trek to beautiful Jana Waterfall. Scenic drive through Apple Orchard Route.",
      },
      {
        day: 6,
        title: "Kullu Valley Day",
        description:
          "Visit River Rafting Point for adventure seekers. Optional Paragliding experience at Paragliding Valley. Shop for authentic Kullu Shawls at local factory. Evening at leisure to explore local markets.",
      },
      {
        day: 7,
        title: "Manali → Delhi (Return Journey)",
        description:
          "Enjoy final breakfast in the mountains. Hotel check-out with fond memories. Return journey to Delhi by AC Volvo/Traveller. Depart with unforgettable Himalayan experiences!",
      },
    ],
    included: [
      "✅ Delhi → Manali → Delhi AC Volvo/Traveller Travel",
      "✅ Premium Stay for 6 Nights",
      "✅ Daily Breakfast & Dinner (12 meals)",
      "✅ Unlimited Evening Snacks",
      "✅ Local Sightseeing Transportation",
      "✅ 7 Days Complete Sightseeing",
      "✅ 3 Snow Games (Tube Sliding, Snow Scooter, Snow Play Zone)",
      "✅ Return Drop to Delhi",
      "✅ 24/7 Trip Assistance",
      "✅ All Inclusive • No Hidden Charges",
    ],
    excluded: [
      "❌ Lunch meals",
      "❌ Personal expenses & shopping",
      "❌ Optional adventure activities (Paragliding, River Rafting)",
      "❌ Ropeway tickets",
      "❌ Any activity not mentioned in inclusions",
      "❌ Travel insurance",
    ],
    mapLink: "https://maps.google.com/?q=Manali,Himachal+Pradesh,India",
    faqs: [
      {
        question: "What is the package price?",
        answer: "₹9,999 Per Person - All Inclusive with no hidden charges. This is a premium budget package offering excellent value.",
      },
      {
        question: "What travel is included?",
        answer: "Delhi to Manali and return journey by AC Volvo/Traveller bus is included. The overnight journey takes approximately 12-14 hours each way.",
      },
      {
        question: "What meals are included?",
        answer: "Daily Breakfast & Dinner for all 6 nights (12 meals total) plus unlimited evening snacks. Lunch is not included.",
      },
      {
        question: "What snow activities are included?",
        answer: "3 Snow Games are included: Snow Tube Sliding, Snow Scooter Ride, and Snow Play Zone at Solang Valley. Other activities like Zorbing and Ropeway are optional.",
      },
      {
        question: "What should I pack for Manali?",
        answer: "Warm clothing (jackets, thermals, gloves, caps), comfortable walking shoes, sunscreen, sunglasses, and personal medications. We recommend layered clothing.",
      },
      {
        question: "What's the best time to visit Manali?",
        answer: "December to February for snow activities, March to June for pleasant weather and adventure sports, September to November for clear mountain views.",
      },
      {
        question: "Are adventure activities like paragliding included?",
        answer: "Paragliding and River Rafting are optional activities at additional cost. The package includes visits to these points but activities are not included.",
      },
      {
        question: "What documents are required?",
        answer: "Valid Government ID proof is required for all travelers. Keep it handy during travel and hotel check-ins.",
      },
    ],
  },
  {
    id: "6",
    name: "Shimla",
    slug: "shimla",
    tagline: "🏔️ Queen of Hills - Colonial Charm & Himalayan Beauty",
    image: shimlaImage,
    gallery: [
      { image: shimla1, caption: "The Ridge & Christ Church - Heart of Shimla" },
      { image: shimla2, caption: "Kufri - Snow activities and horse riding" },
      { image: shimla3, caption: "Jakhu Temple - Ancient Hanuman temple on hilltop" },
      { image: shimla4, caption: "Toy Train - UNESCO Heritage Kalka-Shimla Railway" },
      { image: shimla5, caption: "Mall Road - Bustling evening shopping street" },
      { image: shimla6, caption: "Scandal Point - Panoramic mountain viewpoint" },
    ],
    priceFrom: 8499,
    duration: "5 days",
    tags: ["Hill Station", "Colonial", "Heritage", "Nature"],
    overview:
      "🏔️ SHIMLA PREMIUM HILL STATION PACKAGE\n\n5 Days / 4 Nights • ₹8,499 Per Person\n\nDiscover the 'Queen of Hills' with our all-inclusive Shimla package. Experience colonial charm, breathtaking Himalayan views, toy train rides, and snow-capped adventures in this beautiful hill station!\n\n✨ All Inclusive • No Hidden Charges • Premium Experience",
    highlights: [
      "🚌 Delhi → Shimla → Delhi AC Travel included",
      "🏨 Premium Stay for 4 Nights with daily breakfast & dinner",
      "🚂 Toy Train Ride Experience (Kalka-Shimla Heritage Railway)",
      "🚗 Complete Local Sightseeing Transportation",
      "📸 5 Days Extensive Sightseeing coverage",
      "🐴 Kufri Horse Riding & Snow Activities included",
      "🔙 Return Drop to Delhi + 24/7 Trip Assistance",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi → Shimla (Overnight Journey)",
        description:
          "Overnight AC Volvo/Traveller journey from Delhi. Morning arrival in Shimla. Hotel check-in and relaxation. Evening visit to The Mall Road for shopping, local food, and city exploration.",
      },
      {
        day: 2,
        title: "Shimla Local Sightseeing",
        description:
          "Visit the iconic Ridge with panoramic views. Explore Christ Church - second oldest church in North India. Walk to Scandal Point for Himalayan panorama. Visit Lakkar Bazaar for wooden crafts. Evening Mall Road stroll with local delicacies.",
      },
      {
        day: 3,
        title: "Kufri Adventure Day",
        description:
          "Full day excursion to Kufri hill station. Enjoy horse riding through snow trails (included). Snow activities and photography at Kufri slopes. Visit Himalayan Nature Park for wildlife. Return via scenic apple orchards.",
      },
      {
        day: 4,
        title: "Jakhu Temple & Toy Train Experience",
        description:
          "Morning trek or ropeway to Jakhu Temple with 108ft Hanuman statue. Enjoy breathtaking valley views. Afternoon: Heritage Toy Train ride on UNESCO Kalka-Shimla Railway. Experience 102 tunnels and 800+ bridges. Return to hotel.",
      },
      {
        day: 5,
        title: "Shimla → Delhi (Return Journey)",
        description:
          "Enjoy final breakfast with mountain views. Optional visit to Chadwick Falls or Prospect Hill. Hotel check-out with fond memories. Return journey to Delhi by AC Volvo/Traveller.",
      },
    ],
    included: [
      "✅ Delhi → Shimla → Delhi AC Volvo/Traveller Travel",
      "✅ Premium Stay for 4 Nights",
      "✅ Daily Breakfast & Dinner (8 meals)",
      "✅ Local Sightseeing Transportation",
      "✅ 5 Days Complete Sightseeing",
      "✅ Kufri Horse Riding included",
      "✅ Toy Train Heritage Ride",
      "✅ Return Drop to Delhi",
      "✅ 24/7 Trip Assistance",
      "✅ All Inclusive • No Hidden Charges",
    ],
    excluded: [
      "❌ Lunch meals",
      "❌ Personal expenses & shopping",
      "❌ Jakhu Temple Ropeway (optional)",
      "❌ Adventure sports at Kufri (skiing, etc.)",
      "❌ Any activity not mentioned in inclusions",
      "❌ Travel insurance",
    ],
    mapLink: "https://maps.google.com/?q=Shimla,Himachal+Pradesh,India",
    faqs: [
      {
        question: "What is the package price?",
        answer: "₹8,499 Per Person - All Inclusive with no hidden charges. This is a premium hill station package offering excellent value.",
      },
      {
        question: "What travel is included?",
        answer: "Delhi to Shimla and return journey by AC Volvo/Traveller bus is included. The overnight journey takes approximately 8-10 hours each way.",
      },
      {
        question: "What meals are included?",
        answer: "Daily Breakfast & Dinner for all 4 nights (8 meals total). Lunch is not included but you can explore local cafes and restaurants.",
      },
      {
        question: "Is Toy Train ride included?",
        answer: "Yes! The heritage Toy Train ride on the UNESCO World Heritage Kalka-Shimla Railway is included. Experience 102 tunnels and 800+ bridges on this scenic journey.",
      },
      {
        question: "What should I pack for Shimla?",
        answer: "Warm clothing (jackets, sweaters, thermals), comfortable walking shoes, sunscreen, sunglasses, and personal medications. Layered clothing is recommended.",
      },
      {
        question: "What's the best time to visit Shimla?",
        answer: "December to February for snowfall experience, March to June for pleasant weather, September to November for clear views and autumn colors.",
      },
      {
        question: "Are Kufri activities included?",
        answer: "Horse riding at Kufri is included. Other activities like skiing, yak rides are optional at additional cost.",
      },
      {
        question: "What documents are required?",
        answer: "Valid Government ID proof is required for all travelers. Keep it handy during travel and hotel check-ins.",
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
