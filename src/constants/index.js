import Img1 from "../assets/1 (2).jpg";
import Img2 from "../assets/2 (2).jpg";
import Img3 from "../assets/3 (2).jpg";
import Img4 from "../assets/4 (2).jpg";
import Img5 from "../assets/5 (2).jpg";
import Surfer1 from "../assets/surfer1.jpg";
import Surfer2 from "../assets/surfer2.jpg";
import Surfer3 from "../assets/surfer3.jpg";
import Surfer4 from "../assets/surfer4.jpg";
import Prt from "../assets/portugal.jpg";
import Bra from "../assets/brazil.webp";
import Aus from "../assets/australia.webp";
import Usa from "../assets/usa.webp";
import Pasta from "../assets/pasta.png";
import Sushi from "../assets/sushi.png";
import Taco from "../assets/taco.png";
import Chef1 from "../assets/chef1.jpg";
import Chef2 from "../assets/chef2.jpg";
import Chef3 from "../assets/chef3.jpg";
import FoodTruck1 from "../assets/foodtruck1.jpg";
import FoodTruck2 from "../assets/foodtruck2.jpg";
import FoodTruck3 from "../assets/foodtruck3.jpg";
import FoodTruck4 from "../assets/foodtruck4.jpg";
import FoodTruck5 from "../assets/foodtruck5.jpg";
import Pop from "../assets/pop.jpg";
import Rock from "../assets/rock.jpg";
import Electronic from "../assets/eletronicmusic.jpg";
import Alternative from "../assets/alternativemusic.jpg";
import Jazz from "../assets/jazz.jpg";
import Indie from "../assets/indie.jpg";

export const scheduleInfo = [
  {
    name: "Classic Surf Session",
    image: Img1,
    date: "April 1, 2023",
    time: "10:00 AM - 12:30 PM",
    type: "Surfing Session",
  },
  {
    name: "Ice Cream Workshop",
    image: FoodTruck1,
    date: "April 2, 2023",
    time: "2:00 PM - 4:30 PM",
    type: "Food Workshop",
  },
  {
    name: "Summer Night Concert",
    image: Img3,
    date: "April 3, 2023",
    time: "7:00 PM - 10:30 PM",
    type: "Concert",
  },
  {
    name: "Dessert Delights Workshop",
    image: Img4,
    date: "April 1, 2023",
    time: "8:30 AM - 11:00 AM",
    type: "Food Workshop",
  },
  {
    name: "Sunset Serenade Concert",
    image: Img2,
    date: "April 2, 2023",
    time: "6:30 PM - 9:00 PM",
    type: "Concert",
  },
  {
    name: "Flavorful Creations Workshop",
    image: Img5,
    date: "April 3, 2023",
    time: "11:30 AM - 2:00 PM",
    type: "Food Workshop",
  },
];

export const artistsCards = [
  {
    name: "Celestial Rhythms",
    image: Pop,
    genre: "Pop",
    origin: "UK",
  },
  {
    name: "Solar Flare Syndicate",
    image: Rock,
    genre: "Rock",
    origin: "United States",
  },
  {
    name: "Lunar Dreamscape",
    image: Alternative,
    genre: "Alternative",
    origin: "Canada",
  },
  {
    name: "Electric Nebula Orchestra",
    image: Electronic,
    genre: "Electronic",
    origin: "Germany",
  },
  {
    name: "Crimson Tide Quartet",
    image: Jazz,
    genre: "Jazz",
    origin: "France",
  },
  {
    name: "Aurora Pulse Collective",
    image: Indie,
    genre: "Indie",
    origin: "Australia",
  },
];

export const foodtruckCards = [
  {
    header: "Sweet Sensations Scoop Truck",
    image: FoodTruck1,
    text: `Decadent desserts and ice cream. Dive into the Double Chocolate Fudge Sundae.`,
  },
  {
    header: "Taco Town Express",
    image: FoodTruck2,
    text: `Authentic Mexican street tacos. Savor Al Pastor Tacos with Pineapple Salsa.`,
  },
  {
    header: "Burger Bliss Bistro",
    image: FoodTruck3,
    text: `Artisanal burgers and loaded fries. Relish The Ultimate BBQ Bacon Burger.`,
  },
  {
    header: "Sushi Street Fusion",
    image: FoodTruck4,
    text: `Creative sushi rolls. Must-try: Dragon Roll Tacos with a Japanese twist.`,
  },
  {
    header: "Gourmet Grub Hub",
    image: FoodTruck5,
    text: `Upscale comfort food. Try the Truffle Mac 'n' Cheese for a taste of luxury.`,
  },
];

export const foodTrucksData = [
  {
    id: 0,
    name: "Sweet Sensations Scoop Truck",
    cuisine: "Desserts",
    location: "Main Street",
    menu: [
      { item: "Ice Cream Sundae", price: "$4.50" },
      { item: "Chocolate Brownie", price: "$3.00" },
      { item: "Fruit Parfait", price: "$5.00" },
    ],
  },
  {
    id: 1,
    name: "Taco Town Express",
    cuisine: "Mexican",
    location: "Oak Street",
    menu: [
      { item: "Taco", price: "$3.50" },
      { item: "Burrito", price: "$5.00" },
      { item: "Quesadilla", price: "$4.00" },
    ],
  },
  {
    id: 2,
    name: "Burger Bliss Bistro",
    cuisine: "American",
    location: "Maple Avenue",
    menu: [
      { item: "Cheeseburger", price: "$6.00" },
      { item: "Chicken Burger", price: "$5.50" },
      { item: "Vegetarian Burger", price: "$5.00" },
    ],
  },
  {
    id: 3,
    name: "Sushi Street Fusion",
    cuisine: "Japanese",
    location: "Cedar Lane",
    menu: [
      { item: "Sushi Roll Combo", price: "$10.00" },
      { item: "Sashimi Platter", price: "$12.50" },
      { item: "Miso Soup", price: "$3.50" },
    ],
  },
  {
    id: 4,
    name: "Gourmet Grub Hub",
    cuisine: "Various",
    location: "Pine Street",
    menu: [
      { item: "Gourmet Salad", price: "$8.00" },
      { item: "Panini Sandwich", price: "$7.50" },
      { item: "Fruit Smoothie", price: "$5.00" },
    ],
  },
];

export const chefsInfo = [
  {
    name: "Alessandro Rossi",
    imageProfile: Chef1,
    description:
      "An accomplished surfer known for conquering some of the most challenging waves around the world. With a remarkable ability to read the ocean, this surfer fearlessly tackles colossal waves. Their unwavering dedication and love for the sport shine through every wave they ride.",
    imageType: Pasta,
  },
  {
    name: "Himura Kenshin",
    imageProfile: Chef2,
    description:
      "A world-renowned sushi chef with a passion for crafting the most exquisite and authentic sushi dishes. With years of experience, this chef brings the taste of Japan to your plate.",
    imageType: Sushi,
  },
  {
    name: "Gustavo Morales",
    imageProfile: Chef3,
    description:
      "An expert in Mexican cuisine, known for creating mouthwatering dishes filled with flavors and spices. This chef's culinary skills bring the taste of Mexico right to your table.",
    imageType: Taco,
  },
];

export const SurferCards = [
  {
    name: "Olivia Mitchell",
    age: 25,
    country: Aus,
    imageUrl: Surfer2,
    description:
      "A passionate surfer with a deep connection to the ocean. Known for riding the biggest waves and pushing the limits of the sport. Embraces the thrill of the surf and the freedom of the sea.",
  },
  {
    name: "Daniel Johnson",
    age: 30,
    country: Usa,
    imageUrl: Surfer1,
    description:
      "An accomplished surfer known for conquering some of the most challenging waves around the world. With a remarkable ability to read the ocean, this surfer fearlessly tackles colossal waves. Their unwavering dedication and love for the sport shine through every wave they ride.",
  },
  {
    name: "Miguel Silva",
    age: 22,
    country: Prt,
    imageUrl: Surfer3,
    description:
      "An emerging talent in the world of surfing, showcasing exceptional skills and style. This surfer's journey is just beginning, but their determination and natural talent make them a rising star in the surf community.",
  },
  {
    name: "Matheus Santos",
    age: 32,
    country: Bra,
    imageUrl: Surfer4,
    description:
      "A seasoned surfer with years of experience in chasing waves around the globe. Embraces a holistic approach to surfing, connecting with nature and the ocean's energy in every ride.",
  },
];

export const ticketTypes = [
  {
    ticketName: "Daily Ticket",
    ticketDescription:
      "A ticket that grants access only to the venue on the corresponding day. It does not provide access to the campsite. After leaving the venue, re-entry is not allowed.",
    priceRows: [
      { dateLimit: "Until January 1st", price: "55$" },
      { dateLimit: "Until January 15th", price: "65$" },
      { dateLimit: "Until January 30th", price: "75$" },
      { dateLimit: "Until February 15th", price: "100$" },
    ],
  },
  {
    ticketName: "Full-Ticket",
    ticketDescription:
      "Experience the event in style with our VIP ticket, which includes exclusive access and perks.",
    priceRows: [
      { dateLimit: "Until January 1st", price: "100$" },
      { dateLimit: "Until January 15th", price: "125$" },
      { dateLimit: "Until January 30th", price: "150$" },
      { dateLimit: "Until February 15th", price: "175$" },
    ],
  },
  {
    ticketName: "VIP Daily Ticket",
    ticketDescription:
      "Experience the event in style with our VIP ticket, which includes exclusive access and perks.",
    priceRows: [
      { dateLimit: "Until January 1st", price: "75$" },
      { dateLimit: "Until January 15th", price: "110$" },
      { dateLimit: "Until January 30th", price: "125$" },
      { dateLimit: "Until February 15th", price: "150$" },
    ],
  },
  {
    ticketName: "VIP Full-Ticket",
    ticketDescription:
      "Experience the event in style with our VIP ticket, which includes exclusive access and perks.",
    priceRows: [
      { dateLimit: "Until January 1st", price: "150$" },
      { dateLimit: "Until January 15th", price: "175$" },
      { dateLimit: "Until January 30th", price: "200$" },
      { dateLimit: "Until February 15th", price: "250$" },
    ],
  },
];

export const localSellers = [
  {
    name: "MEO BlueTicket",
    website: "https://blueticket.meo.pt/",
  },
  {
    name: "Fnac",
    website: "https://www.fnac.com",
  },
  {
    name: "Worten",
    website: "https://www.worten.com",
  },
  {
    name: "Fnac",
    website: "https://www.fnac.com",
  },
];

export const foreignSellers = [
  {
    name: "SeeTickets",
    website: "https://www.seetickets.com",
  },
  {
    name: "Másqueticket",
    website: "https://www.masqueticket.com",
  },
];
