
import { Tour, Testimonial, TransferOption } from './types';

export const BRAND_NAME = "Zanzibar Best One";
export const WHATSAPP_NUMBER = "255777707010"; 
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const CONTACT_EMAIL = "info@tripmatezanzibar.com";
export const CONTACT_PHONE_1 = "+255 777 707 010";
export const CONTACT_PHONE_2 = "+255 777 987 654";
export const OFFICE_ADDRESS = "Mwanakwerekwe, Zanzibar, Tanzania";

export const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1534764432322-3d5d84498c09?q=80&w=2670&auto=format&fit=crop",
    title: "Discover Paradise",
    subtitle: "Turquoise waters await"
  },
  {
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg",
    title: "Wild Safaris",
    subtitle: "Witness the Great Migration"
  },
  {
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/dc/04/45.jpg",
    title: "Sandbank Picnics",
    subtitle: "Luxury dining in the ocean"
  },
  {
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/30/34/de/caption.jpg?w=500&h=400&s=1",
    title: "Historic Stone Town",
    subtitle: "Walk through history"
  }
];

export const GALLERY_IMAGES = [
  "https://images.pexels.com/photos/2524368/pexels-photo-2524368.jpeg?auto=compress&cs=tinysrgb&w=800", // Stone Town
  "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800", // Spices
  "https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg?auto=compress&cs=tinysrgb&w=800", // Dhow
  "https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=800", // Blue Water
  "https://images.pexels.com/photos/10463796/pexels-photo-10463796.jpeg?auto=compress&cs=tinysrgb&w=800", // Starfish
  "https://images.pexels.com/photos/11644224/pexels-photo-11644224.jpeg?auto=compress&cs=tinysrgb&w=800"  // Sunset
];

export const TOURS: Tour[] = [
  // --- DAY TOURS ---
  {
    id: 'd1',
    title: 'Safari Blue Full Day Experience',
    slug: 'safari-blue-full-day',
    category: 'day',
    price: 65,
    priceLabel: '/ person',
    duration: 'Full Day (8 Hours)',
    rating: 4.9,
    reviews: 128,
    badge: 'BESTSELLER',
    shortDescription: 'The #1 sea adventure. Sail, snorkel, and feast on seafood in the Menai Bay.',
    longDescription: 'The original Safari Blue experience is Zanzibar’s most popular boat excursion. Departing from Fumba, you will sail in a traditional dhow to the Menai Bay Conservation Area. The day includes guided snorkeling on vibrant coral reefs, swimming in a mangrove lagoon, and a delicious seafood barbecue lunch (lobster, shrimp, calamari, fish) on Kwale Island. Relax on the sandbank and taste exotic tropical fruits.',
    highlights: ['Traditional Dhow Sailing', 'Seafood BBQ Lunch with Lobster', 'Snorkeling in Menai Bay', 'Mangrove Lagoon Swim', 'Tropical Fruit Tasting'],
    includes: ['Hotel Pickup/Drop-off', 'Snorkeling Equipment', 'Seafood Lunch & Drinks', 'Park Fees', 'Professional Guide', 'Boat Ride'],
    whatToBring: ['Swimwear', 'Towel', 'Sunscreen', 'Water shoes', 'Waterproof Camera'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b3/b1/c3/the-original-safari-blue.jpg?w=1200&h=900&s=1',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHJGlwh-SzvJN5vP51hsISJsFyR8BKmZqnA&s',
      'https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg'
    ]
  },
  {
    id: 'd2',
    title: 'Stone Town Private Walking Tour',
    slug: 'stone-town-private',
    category: 'day',
    price: 40,
    priceLabel: '/ person',
    duration: '3 Hours',
    rating: 4.7,
    reviews: 84,
    badge: 'CULTURAL',
    shortDescription: 'A sensory journey through history, architecture, and local life.',
    longDescription: 'Immerse yourself in the history of UNESCO-listed Stone Town. Visit the House of Wonders, the Old Fort, and the former Slave Market. Wander through narrow winding streets, admire the carved Zanzibar doors, and visit the bustling Darajani Market.',
    highlights: ['Stone Town Walking Tour', 'House of Wonders', 'Freddie Mercury House', 'Darajani Market', 'Old Fort'],
    includes: ['Private Guide', 'Entrance Fees', 'Water'],
    whatToBring: ['Comfortable walking shoes', 'Camera', 'Modest clothing (covers shoulders/knees)'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/30/34/de/caption.jpg?w=500&h=400&s=1',
    gallery: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/32/a7/81/caption.jpg?w=500&h=400&s=1',
      'https://travel-buddies.com/wp-content/uploads/2024/11/1_private-city-tour-in-stone-town.jpg'
    ]
  },
  {
    id: 'd3',
    title: 'Mnemba Atoll Snorkeling',
    slug: 'mnemba-snorkeling',
    category: 'day',
    price: 45,
    priceLabel: '/ person',
    duration: 'Half Day',
    rating: 4.8,
    reviews: 92,
    badge: 'POPULAR',
    shortDescription: 'Swim with dolphins and snorkel in crystal clear turquoise waters.',
    longDescription: 'Mnemba Atoll offers the best snorkeling in Zanzibar. The surrounding reef is teeming with marine life. Expect to see wild dolphins playing near the boat, colorful fish, and pristine coral. Includes a fruit snack on the boat and a stop at the Muyuni Beach.',
    highlights: ['Crystal clear blue water', 'Dolphin spotting', 'Pristine coral reefs', 'Tropical Fruits'],
    includes: ['Boat transport', 'Snorkel gear', 'Fruits & Water', 'Marine Park Fees'],
    whatToBring: ['Swimsuit', 'Towel', 'Sunscreen', 'Underwater camera'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/ff/7d/42/caption.jpg?w=1200&h=-1&s=1',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGBXPgIR-ampNqlEGIwxP3_8t2EXLEiaPjQ&s',
      'https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg'
    ]
  },
  {
    id: 'd4',
    title: 'Jozani Forest & Red Colobus',
    slug: 'jozani-forest',
    category: 'day',
    price: 40,
    priceLabel: '/ person',
    duration: '3 Hours',
    rating: 4.6,
    reviews: 45,
    badge: 'NATURE',
    shortDescription: 'Encounter the rare Red Colobus Monkeys indigenous to Zanzibar.',
    longDescription: 'Visit Jozani Chwaka Bay National Park, the only home of the rare Red Colobus Monkeys. Walk through the mahogany forest and the mangrove boardwalk. It is a great short trip for nature lovers.',
    highlights: ['Red Colobus Monkeys', 'Mahogany Forest', 'Mangrove Boardwalk', 'Nature Walk'],
    includes: ['Transport', 'Guide', 'Park Fees'],
    whatToBring: ['Walking Shoes', 'Camera', 'Insect Repellent'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://www.exploretanzaniatours.com/wp-content/uploads/2022/02/Jozani-Chwaka-Bay-National-park.jpg',
    gallery: [
      'https://www.zanzibar-tours.co.tz/wp-content/uploads/2024/11/tour_gallery_42.jpg',
      'https://images.pexels.com/photos/4577816/pexels-photo-4577816.jpeg'
    ]
  },
  {
    id: 'd5',
    title: 'Prison Island Tour',
    slug: 'prison-island',
    category: 'day',
    price: 35,
    priceLabel: '/ person',
    duration: 'Half Day',
    rating: 4.7,
    reviews: 110,
    badge: 'HISTORY',
    shortDescription: 'Visit giant tortoises and explore the old prison ruins.',
    longDescription: 'Take a short boat ride from Stone Town to Changuu Island (Prison Island). Feed the giant Aldabra tortoises, some over 100 years old. Explore the old prison ruins and swim in the crystal clear water surrounding the island.',
    highlights: ['Giant Tortoises', 'Prison Ruins', 'Boat Ride', 'Swimming'],
    includes: ['Boat Transfer', 'Entrance Fees', 'Guide'],
    whatToBring: ['Swimsuit', 'Sunscreen', 'Hat', 'Camera'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/8a/85/05.jpg',
    gallery: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/fb/f4/56/prison-island.jpg?w=500&h=300&s=1',
      'https://www.tanzaniatourism.com/images/uploads/Zanzibar_Prison_Island_01.jpg'
    ]
  },
  {
    id: 'd6',
    title: 'Nakupenda Sandbank Tour',
    slug: 'nakupenda-sandbank',
    category: 'day',
    price: 50,
    priceLabel: '/ person',
    duration: 'Full Day',
    rating: 4.9,
    reviews: 150,
    badge: 'MUST DO',
    shortDescription: 'Relax on the vanishing sandbank with a seafood lunch.',
    longDescription: 'Sail to the beautiful Nakupenda (I Love You) Sandbank. Relax on the white sands in the middle of the ocean, swim in turquoise waters, and enjoy a freshly prepared seafood lunch with tropical fruits.',
    highlights: ['Nakupenda Sandbank', 'Seafood Lunch', 'Snorkeling', 'Sunbathing'],
    includes: ['Boat', 'Lunch', 'Drinks', 'Snorkeling Gear'],
    whatToBring: ['Swimsuit', 'Towel', 'Sunscreen'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/dc/04/45.jpg',
    gallery: [
      'https://zanzibarstartours.net/wp-content/uploads/2023/06/Screenshot1686934046054.jpg',
      'https://zanzibarstartours.net/wp-content/uploads/2023/06/Screenshot1686934031246.jpg'
    ]
  },
  {
    id: 'd7',
    title: 'Zanzibar Spice Tour',
    slug: 'spice-tour',
    category: 'day',
    price: 35,
    priceLabel: '/ person',
    duration: '3 Hours',
    rating: 4.5,
    reviews: 95,
    badge: 'AROMATIC',
    shortDescription: 'Smell, taste, and see why Zanzibar is the Spice Island.',
    longDescription: 'Visit a local organic spice farm. Walk through the plantation to see, smell, and taste different spices and fruits like cloves, nutmeg, cinnamon, vanilla, and jackfruit. Watch a coconut climber and buy fresh spices to take home.',
    highlights: ['Spice Tasting', 'Tropical Fruits', 'Coconut Climber', 'Farm Walk'],
    includes: ['Transport', 'Guide', 'Entrance Fee', 'Fruit Tasting'],
    whatToBring: ['Walking shoes', 'Cash for spices'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LOjo6A1pvnvysGaS_pMeZGYCzYT6VjAoxg&s',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXq6ijO6Z7EfDCQlCBo1eiTyNPyn3cQUxbA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51ofb8BalKEKkZxJUsL88B9pU3YOwGwWGcw&s'
    ]
  },
  {
    id: 'd8',
    title: 'Dolphin Tour Kizimkazi',
    slug: 'dolphin-kizimkazi',
    category: 'day',
    price: 40,
    priceLabel: '/ person',
    duration: 'Half Day',
    rating: 4.3,
    reviews: 22,
    badge: 'ADVENTURE',
    shortDescription: 'Early morning boat trip to spot magnificent dolphins.',
    longDescription: 'Head to the south coast village of Kizimkazi. Board a motorized boat to search for bottle-nose and humpback dolphins. If you are lucky, you can swim near them.',
    highlights: ['Dolphin Spotting', 'Open Ocean Swim', 'Kizimkazi Village'],
    includes: ['Boat', 'Guide', 'Fruits', 'Transport'],
    whatToBring: ['Swimsuit', 'Towel'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKf9J7jUoEO5ifwNmFYgtvytKTNw9bkVnfgA&s',
    gallery: [
      'https://zanzibarworld.com/wp-content/uploads/2021/01/boat-rentals-kizimkazi-mtendeni-zanzibar-central-south-region-processed.jpg',
      'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg'
    ]
  },
  {
    id: 'd9',
    title: 'Nungwi & Kendwa Beach Tour',
    slug: 'nungwi-kendwa-beach',
    category: 'day',
    price: 45,
    priceLabel: '/ person',
    duration: 'Full Day',
    rating: 4.8,
    reviews: 60,
    badge: 'RELAX',
    shortDescription: 'Explore the best beaches in the north, visit the turtle aquarium.',
    longDescription: 'Travel to the northern tip of Zanzibar. Swim in the crystal clear waters of Nungwi and Kendwa. Visit the Mnarani Turtle Aquarium to feed and swim with sea turtles. Watch the dhow builders and enjoy a sunset on the beach.',
    highlights: ['Nungwi Beach', 'Kendwa Beach', 'Turtle Aquarium', 'Sunset'],
    includes: ['Transport', 'Aquarium Fee', 'Guide'],
    whatToBring: ['Swimsuit', 'Towel', 'Sunscreen'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/d8/e4/cd.jpg',
    gallery: [
       'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/92/41/82.jpg',
       'https://www.easytravel.co.tz/wp-content/uploads/2023/06/Nungwi-Beach-Zanzibar.jpg'
    ]
  },
  {
    id: 'd10',
    title: 'Quad Bike Adventure',
    slug: 'quad-bike-adventure',
    category: 'day',
    price: 55,
    priceLabel: '/ person',
    duration: 'Half Day',
    rating: 4.9,
    reviews: 34,
    badge: 'THRILL',
    shortDescription: 'Off-road adventure through local villages and farm lands.',
    longDescription: 'Drive your own Quad Bike (ATV) through the wild landscapes of Zanzibar. Pass through remote villages, farmlands, and spice plantations. A thrilling way to see the "real" Zanzibar off the beaten path.',
    highlights: ['Off-road driving', 'Village visit', 'Rice plantations', 'Mud tracks'],
    includes: ['Quad Bike', 'Helmet', 'Guide', 'Training'],
    whatToBring: ['Closed shoes', 'Clothes you dont mind getting dirty', 'Sunglasses'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2GaFVE4bGqH31qTYYT2J6AY_nrtx8ArhMcQ&s',
    gallery: [
      'https://tuliazanzibar.com/wp-content/uploads/2019/09/01222E32A478423CB60DBA681674DE77.jpg',
      'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg'
    ]
  },
  {
    id: 'd11',
    title: 'Kuza Cave Culture Centre',
    slug: 'kuza-cave',
    category: 'day',
    price: 30,
    priceLabel: '/ person',
    duration: '3 Hours',
    rating: 4.8,
    reviews: 41,
    badge: 'HIDDEN GEM',
    shortDescription: 'Swim in sacred healing waters and enjoy Swahili culture.',
    longDescription: 'Discover an ancient limestone jungle cave with crystal clear turquoise fresh water. Locals believe the water has healing properties. After swimming, enjoy a drumming and dancing session with the local artists.',
    highlights: ['Freshwater Cave Swim', 'Swahili Drumming', 'Jungle Walk', 'Cultural Show'],
    includes: ['Entrance Fee', 'Guide', 'Cultural Performance'],
    whatToBring: ['Swimsuit', 'Towel', 'Water shoes (optional)'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrxPEFPBN4oGZZrFszPYMh3udN4LesvE2Yw&s',
    gallery: [
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/84/ce/fc.jpg',
      'https://www.travelnotesonline.com/wp-content/uploads/2019/11/img_20190908_123604-scaled.jpg'
    ]
  },
  {
    id: 'd12',
    title: 'Mtende Secret Beach',
    slug: 'mtende-beach',
    category: 'day',
    price: 45,
    priceLabel: '/ person',
    duration: 'Half Day',
    rating: 4.7,
    reviews: 29,
    badge: 'SCENIC',
    shortDescription: 'Visit the stunning cove beach surrounded by rock cliffs.',
    longDescription: 'Mtende is one of the most unique beaches in Zanzibar. During low tide, you can walk far out between the rocks. During high tide, the water fills the cove creating a stunning natural swimming pool. Great for photos.',
    highlights: ['Rock Cliffs', 'Natural Pool', 'Scenic Views', 'Restaurant on Rock'],
    includes: ['Transport', 'Entrance Fee', 'Driver'],
    whatToBring: ['Camera', 'Swimsuit', 'Towel'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://static.wixstatic.com/media/646042_0fafc3060fdb405c8e350eac60693e1d~mv2.jpg/v1/fill/w_187,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/mtende-beach.jpg',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_TkBZtFnm3ZbSGJfshMoK6nUXVsrk1QLMw&s',
      'https://cdn.getyourguide.com/img/tour/c94e8969f6279020b91e41f1ee15315ef44395c11a40fb9a3f5d8cb566f249a1.jpg/146.jpg'
    ]
  },
  {
    id: 'd13',
    title: 'Maalum Cave',
    slug: 'maalum-cave',
    category: 'day',
    price: 35,
    priceLabel: '/ person',
    duration: '2 Hours',
    rating: 4.9,
    reviews: 25,
    badge: 'NEW',
    shortDescription: 'A unique natural swimming pool experience in Paje.',
    longDescription: 'Maalum is a unique natural swimming pool in Paje. It is a special place to reconnect with nature, explore the underground life, and relax. The water is crystal clear and refreshing.',
    highlights: ['Natural Swimming Pool', 'Underground Cave', 'Relaxation'],
    includes: ['Entrance Fee', 'Towel Rental', 'Equipment'],
    whatToBring: ['Swimsuit', 'Camera'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://maalumzanzibar.com/images/instagram-2.jpg',
    gallery: [
      'https://zanzibarstartours.net/wp-content/uploads/2023/10/1000029754-scaled.jpg',
      'https://worldoflina.com/wp-content/uploads/2024/09/DSC_0789-1-850x680.jpg'
    ]
  },
  {
    id: 'd14',
    title: 'Village Cultural Tour',
    slug: 'village-cultural-tour',
    category: 'day',
    price: 30,
    priceLabel: '/ person',
    duration: 'Half Day',
    rating: 4.6,
    reviews: 18,
    badge: 'AUTHENTIC',
    shortDescription: 'Experience the daily life of local Zanzibar villagers.',
    longDescription: 'Step away from the tourist trail and visit a local village. See how women make rope from coconut husks, how men climb palms, visit a local school, and learn about seaweed farming. A truly grounding experience.',
    highlights: ['Local School Visit', 'Seaweed Farming', 'Coconut Rope Making', 'Traditional Cooking'],
    includes: ['Guide', 'Donation to Village', 'Transport'],
    whatToBring: ['Modest clothing', 'Candy/Pens for kids (optional)'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://zanzibarleisuretours.co.tz/wp-content/uploads/2020/11/villagetour2.jpg',
    gallery: [
      'https://zanzibarstartours.net/wp-content/uploads/2018/11/102.jpg',
      'https://minneriyasafari.com/wp-content/uploads/2023/08/Sigiriya_Village_Tour-600x600.jpg'
    ]
  },

  // --- PACKAGE TOURS ---
  {
    id: 'p1',
    title: 'Stone Town + Spice + Prison Island',
    slug: 'stone-spice-prison',
    category: 'package',
    price: 90,
    priceLabel: '/ person',
    duration: 'Full Day',
    rating: 4.8,
    reviews: 15,
    badge: 'VALUE',
    shortDescription: 'Three major attractions in one action-packed day.',
    longDescription: 'Start with the tortoises at Prison Island, return for a Stone Town history walk, and finish with the aromas of a Spice Farm. The most efficient way to see the classics.',
    highlights: ['3-in-1 Tour', 'Tortoises', 'History', 'Spices'],
    includes: ['All Entrance Fees', 'Private Transport', 'Guide', 'Lunch'],
    whatToBring: ['Walking shoes', 'Sunscreen', 'Camera'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://serengetinationalparksafaris.com/wp-content/uploads/2022/10/Stone-Town-Zanzibar-zanzibar-tourists-800x450-1-750x450.jpg',
    gallery: [
      'https://www.tanzaniatourism.com/images/uploads/Zanzibar_Prison_Island.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/eb/2c/52/jozan-forest-is-a-national.jpg?w=900&h=500&s=1'
    ]
  },
  {
    id: 'p2',
    title: 'Prison Island + Nakupenda',
    slug: 'prison-island-nakupenda',
    category: 'package',
    price: 80,
    priceLabel: '/ person',
    duration: 'Full Day',
    rating: 4.9,
    reviews: 28,
    badge: 'AQUATIC',
    shortDescription: 'Tortoises and Sandbank relaxation combo.',
    longDescription: 'Combine the history of Prison Island with the luxury of Nakupenda Sandbank. Start with the tortoises and ruins, then take the boat to the sandbank for a seafood lunch and swimming.',
    highlights: ['Giant Tortoises', 'Sandbank', 'Seafood Lunch', 'Snorkeling'],
    includes: ['Boat', 'Snorkel Gear', 'Entrance Fees', 'Lunch'],
    whatToBring: ['Swimsuit', 'Towel', 'Change of clothes'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://cdn.getyourguide.com/img/location/5c4def5d967c6.jpeg/99.jpg',
    gallery: [
      'https://www.tanzaniatourism.com/images/uploads/Zanzibar_Prison_Island.jpg',
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/dc/04/45.jpg'
    ]
  },
  {
    id: 'p3',
    title: 'Jozani + Spice + Stone Town',
    slug: 'jozani-spice-stone',
    category: 'package',
    price: 85,
    priceLabel: '/ person',
    duration: 'Full Day',
    rating: 4.7,
    reviews: 18,
    badge: 'POPULAR',
    shortDescription: 'Nature, Culture, and History in one day.',
    longDescription: 'Visit the Red Colobus monkeys in Jozani Forest, smell the spices at a local farm, and explore the winding streets of Stone Town. A complete overview of Zanzibar terrestrial attractions.',
    highlights: ['Red Colobus Monkeys', 'Spice Tasting', 'Stone Town Tour'],
    includes: ['Transport', 'Park Fees', 'Guide', 'Lunch'],
    whatToBring: ['Camera', 'Walking shoes'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://www.exploretanzaniatours.com/wp-content/uploads/2022/02/Jozani-Chwaka-Bay-National-park.jpg',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LOjo6A1pvnvysGaS_pMeZGYCzYT6VjAoxg&s',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/30/34/de/caption.jpg?w=500&h=400&s=1'
    ]
  },
  {
    id: 'p4',
    title: 'Salam Cave + Jozani + Spice',
    slug: 'salam-jozani-spice',
    category: 'package',
    price: 80,
    priceLabel: '/ person',
    duration: 'Full Day',
    rating: 4.6,
    reviews: 12,
    badge: 'NATURE',
    shortDescription: 'Caves, Monkeys, and Spices.',
    longDescription: 'Start with a refreshing swim in Salam Cave (similar to Kuza/Maalum), then head to Jozani Forest for the monkeys, and finish with a Spice Tour.',
    highlights: ['Cave Swim', 'Red Colobus Monkeys', 'Spice Farm'],
    includes: ['Transport', 'Entrance Fees', 'Guide'],
    whatToBring: ['Swimsuit', 'Towel', 'Walking shoes'],
    cancellationPolicy: 'Full refund for cancellations made at least 24 hours before the tour departure time.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrxPEFPBN4oGZZrFszPYMh3udN4LesvE2Yw&s',
    gallery: [
      'https://www.exploretanzaniatours.com/wp-content/uploads/2022/02/Jozani-Chwaka-Bay-National-park.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LOjo6A1pvnvysGaS_pMeZGYCzYT6VjAoxg&s'
    ]
  },

  // --- SAFARI TOURS ---
  {
    id: 's1',
    title: 'Mikumi National Park (Day Trip)',
    slug: 'mikumi-day-trip',
    category: 'safari',
    price: 450,
    priceLabel: '/ person',
    duration: '1 Day',
    rating: 4.8,
    reviews: 65,
    badge: 'FLY-IN',
    shortDescription: 'Fly early morning, see lions and elephants, return for dinner.',
    longDescription: 'The most popular short safari. Take a 07:00 AM flight to Mikumi National Park. Enjoy a full day game drive in an open 4x4 vehicle. Spot lions, giraffes, elephants, buffaloes, and zebras. Enjoy a bush lunch. Fly back to Zanzibar at 16:00.',
    highlights: ['Scenic Flight', 'Big 4 Spotting', 'Bush Lunch', 'Full Day Game Drive'],
    includes: ['Return Flights', 'Park Fees', 'Game Drive', 'Lunch', 'Guide'],
    whatToBring: ['Passport', 'Camera', 'Sunglasses', 'Hat'],
    cancellationPolicy: 'Full refund if cancelled 7 days prior. 50% refund if cancelled 48 hours prior. No refund for cancellations within 48 hours due to flight bookings.',
    image: 'https://www.ngorongorocratertanzania.org/wp-content/uploads/2023/03/1-Day-Trip-Mikumi-National-Park-1.jpg',
    gallery: [
      'https://www.focuseastafricatours.com/wp-content/uploads/Mikumi-National-Park-1.jpg',
      'https://www.leopard-tours.com/wp-content/uploads/2015/12/Mikumi-National-Park-4-1024x680.jpg'
    ]
  },
  {
    id: 's2',
    title: 'Selous (Nyerere) 2 Days',
    slug: 'selous-2-days',
    category: 'safari',
    price: 850,
    priceLabel: '/ person',
    duration: '2 Days / 1 Night',
    rating: 4.9,
    reviews: 40,
    badge: 'WILDERNESS',
    shortDescription: 'Boat safari and game drives in Africa’s largest reserve.',
    longDescription: 'Nyerere National Park (Selous) offers a unique mix of boat and vehicle safaris. Day 1: Fly in, Lunch, Boat Safari on Rufiji River (Hippos/Crocs). Overnight in a river camp. Day 2: Full morning game drive, then fly back to Zanzibar.',
    highlights: ['Rufiji River Boat Safari', 'Bush Camp Stay', 'Walking Safari Option', 'Diverse Wildlife'],
    includes: ['Flights', 'Accommodation', 'All Meals', 'Park Fees', 'Activities'],
    whatToBring: ['Passport', 'Overnight bag', 'Insect Repellent'],
    cancellationPolicy: 'Full refund if cancelled 7 days prior. 50% refund if cancelled 48 hours prior. No refund for cancellations within 48 hours.',
    image: 'https://www.tanzaniaodyssey.com/site/odyssey-image-proxy/park/selous=401199-320.jpg',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrpXhIynX1HELPZ7J5Ei-Ezzk6SSmO-jsVw&s',
      'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg'
    ]
  },
  {
    id: 's3',
    title: 'Serengeti National Park (3 Days)',
    slug: 'serengeti-3-days',
    category: 'safari',
    price: 1400,
    priceLabel: '/ person',
    duration: '3 Days',
    rating: 5.0,
    reviews: 15,
    badge: 'BUCKET LIST',
    shortDescription: 'The ultimate safari experience: The Endless Plains.',
    longDescription: 'Fly to Seronera Airstrip in the heart of the Serengeti. Spend 3 days exploring the endless plains, chasing the Great Migration (seasonal), and spotting the Big 5 in their natural habitat. Stay in a luxury tented camp.',
    highlights: ['Serengeti Plains', 'Big 5', 'Luxury Camp', 'Great Migration'],
    includes: ['Flights', 'Lodge Accommodation', 'Meals', 'Park Fees', '4x4 Cruiser'],
    whatToBring: ['Passport', 'Warm clothes for evening', 'Zoom Lens'],
    cancellationPolicy: 'Full refund if cancelled 14 days prior. 50% refund if cancelled 7 days prior. No refund for cancellations within 7 days.',
    image: 'https://www.greatadventuresafaris.com/wp-content/uploads/Safaro-tours-to-serengeti-national-park.jpg',
    gallery: [
      'https://www.safariventures.com/wp-content/uploads/Untitled-design-1-1.png',
      'https://roamwildadventure.com/wp-content/uploads/2021/02/5-day-safari-tarangire-ngorongoro-serengeti-manyara-olduvai-gallery-09-blurred-1-1024x654.jpg'
    ]
  },
  {
    id: 's4',
    title: 'Ngorongoro Crater Day Trip',
    slug: 'ngorongoro-crater-day',
    category: 'safari',
    price: 950,
    priceLabel: '/ person',
    duration: '1 Day',
    rating: 5.0,
    reviews: 20,
    badge: 'WONDER',
    shortDescription: 'Fly to Arusha and descend into the 8th wonder of the world.',
    longDescription: 'A whirlwind adventure to the Ngorongoro Crater. Fly early from Zanzibar to Arusha. Drive to the Crater rim and descend 600m to the floor. The crater has the highest density of wildlife in Africa. You have a high chance of seeing Rhinos here. Return flight in the evening.',
    highlights: ['Ngorongoro Crater', 'Black Rhino', 'Scenic Views', 'Picnic Lunch'],
    includes: ['Return Flights', 'Crater Fees', '4x4 Game Drive', 'Lunch'],
    whatToBring: ['Passport', 'Jacket (it gets cold)', 'Camera'],
    cancellationPolicy: 'Full refund if cancelled 7 days prior. No refund within 48 hours due to flight costs.',
    image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/ngorongoro-crater-floor-teaming-with-game.jpg',
    gallery: [
      'https://abundadiscoveriesuganda.com/wp-content/uploads/2025/01/Ngorongoro-National-Park-Tanzania-by-Licious-Adventure-%E2%80%94-YouPic.jpg',
      'https://www.ngorongorocratertanzania.org/wp-content/uploads/2020/02/asas-1.jpg'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    country: "United Kingdom",
    text: "Zanzibar Best One made our honeymoon magical. The Safari Blue tour was the highlight—fresh seafood on a sandbank!",
    rating: 5
  },
  {
    id: 2,
    name: "Mohammed Al-Fayed",
    country: "UAE",
    text: "Professional drivers and excellent cars. Used them for airport transfers and the Stone Town tour. Highly recommended.",
    rating: 5
  },
  {
    id: 3,
    name: "Jessica & Tom",
    country: "USA",
    text: "We did the Mikumi day trip. It was seamless. Picked up from our hotel, flew out, saw lions, and were back for dinner.",
    rating: 4
  }
];

export const TRANSFERS: TransferOption[] = [
  {
    id: 't1',
    route: 'Airport ⇄ Stone Town',
    vehicleType: 'Private Taxi',
    capacity: '1-6 Pax',
    price: 27,
    features: ['Meet & Greet', 'AC Vehicle', 'Water Bottle']
  },
  {
    id: 't2',
    route: 'Airport ⇄ Stone Town (Group)',
    vehicleType: 'Private Minivan',
    capacity: '7-12 Pax',
    price: 54,
    features: ['Luggage Assistance', 'AC Minivan', 'Professional Driver']
  },
  {
    id: 't3',
    route: 'Airport ⇄ Nungwi / Kendwa',
    vehicleType: 'Private Taxi',
    capacity: '1-6 Pax',
    price: 60,
    features: ['1.5 Hour Drive', 'Scenic Route', 'AC Vehicle']
  },
  {
    id: 't4',
    route: 'Airport ⇄ Nungwi / Kendwa (Group)',
    vehicleType: 'Private Minivan',
    capacity: '7-12 Pax',
    price: 115,
    features: ['Comfortable Seating', 'AC', 'Fixed Price']
  },
  {
    id: 't5',
    route: 'Airport ⇄ Paje / Jambiani',
    vehicleType: 'Private Taxi',
    capacity: '1-6 Pax',
    price: 50,
    features: ['1 Hour Drive', 'Kite Center Drop-off', 'AC']
  },
  {
    id: 't6',
    route: 'Airport ⇄ Paje / Jambiani (Group)',
    vehicleType: 'Private Minivan',
    capacity: '7-12 Pax',
    price: 90,
    features: ['AC Minivan', 'Water', 'Music']
  },
  {
    id: 't7',
    route: 'Stone Town ⇄ Nungwi',
    vehicleType: 'Private Taxi',
    capacity: '1-6 Pax',
    price: 50,
    features: ['Hotel to Hotel', 'AC', 'Any Time']
  },
  {
    id: 't8',
    route: 'Full Day Driver Hire',
    vehicleType: 'Private SUV',
    capacity: '1-4 Pax',
    price: 100,
    features: ['8 Hours', 'Unlimited Stops', 'Fuel Included']
  }
];
