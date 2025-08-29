import StreamLabsLogo from "../assets/streamlabs-logo.png";
import BroadcastlyLogo from "../assets/broadcastly-logo.png";
import LiveStreamerLogo from "../assets/livestreamer-logo.png";
import CloudCastLogo from "../assets/cloudcast-logo.png";

import yellowConsole from "../assets/yellow.webp";
import midnightConsole from "../assets/midnight.webp";
import crimsonConsole from "../assets/crimson.webp";
import blueConsole from "../assets/blue.webp";
import orangeConsole from "../assets/orange.webp";
import purpleConsole from "../assets/purple.webp";
import whiteConsole from "../assets/white.webp";
import emeraldConsole from "../assets/emerald.webp";

import applePay from "../assets/apple_pay.svg"
import amex from "../assets/amex.svg"
import googlePay from "../assets/google_pay.svg"
import masterCard from "../assets/mastercard.svg"
import shop from "../assets/shop.svg"
import unionPay from "../assets/union_pay.svg"
import visa from "../assets/visa.svg"

import review_1 from "../assets/review_1.jpeg";
import review_2 from "../assets/review_2.jpeg";
import review_3 from "../assets/review_3.jpeg";
import review_4 from "../assets/review_4.jpeg";
import review_5 from "../assets/review_5.jpeg";
import review_6 from "../assets/review_6.jpeg";
import review_7 from "../assets/review_7.jpeg";
import review_8 from "../assets/review_8.jpeg";
import review_9 from "../assets/review_9.jpeg";
import review_10 from "../assets/review_10.jpeg";

import avatar_1 from "../assets/avatar_1.jpeg";
import avatar_2 from "../assets/avatar_2.jpeg";
import avatar_3 from "../assets/avatar_3.webp";
import avatar_4 from "../assets/avatar_4.jpg";
import avatar_5 from "../assets/avatar_5.webp";
import avatar_6 from "../assets/avatar_6.jpg";
import avatar_7 from "../assets/avatar_7.jpg";
import avatar_8 from "../assets/avatar_8.jpg";
import avatar_9 from "../assets/avatar_9.jpeg";
import avatar_10 from "../assets/avatar_10.jpg";

import { FaMicrochip } from "react-icons/fa6";
import { FaMemory } from "react-icons/fa";
import { BsGpuCard } from "react-icons/bs";
import { BiSolidMemoryCard } from "react-icons/bi";
import { FaBatteryThreeQuarters } from "react-icons/fa6";
import { MdSmartDisplay } from "react-icons/md";
import { FaStar } from "react-icons/fa6";



import { code } from "framer-motion/client";

export const HERO_CONTENT = {
  badgeText: "🔥 Save an Extra 50% Limited Time Option 🔥",
  mainHeading: "All Your Favorite Games. \n One Epic Console.",
  subHeading:
    "15,000 legendary games & 20+ classic consoles in one powerful mini device. All your favorite 2000s hits—nostalgia in your hands!",
  callToAction: {
    primary: "Shop Now",
    secondary: "Full Game List",
  },
  trustedByText: "Trusted by Leading Streaming Brands & Creators",
};

export const BRAND_LOGOS = [
  { src: StreamLabsLogo, alt: "StreamLabs" },
  { src: BroadcastlyLogo, alt: "Broadcastly" },
  { src: LiveStreamerLogo, alt: "LiveStreamer" },
  { src: CloudCastLogo, alt: "CloudCast" },
];

export const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "Pick Yours!",
  sectionDescription:
    "Gaming is personal. \n Your console, your colours, your style. \n Choose your style from our range of vibrant designs.",
  steps: [
    {
      title: "Electric Yellow",
      imageSrc: yellowConsole,
      imageAlt: "Yellow",
      color: "#f3ac14",
      code: "Yellow",
    },
    {
      title: "Engage with Your Audience",
      imageSrc: midnightConsole,
      imageAlt: "Midnight",
      color: "#24282e",
      code: "Midnight",
    },
    {
      title: "Track and Analyze Performance",
      imageSrc: crimsonConsole,
      imageAlt: "Crimson",
      color: "#e80b1a",
      code: "Crimson",
    },
    {
      title: "Optimize Your Stream Settings",
      imageSrc: blueConsole,
      imageAlt: "Blue",
      color: "#2f82fa",
      code: "Blue",
    },
    {
      title: "Monetize Your Streams",
      imageSrc: orangeConsole,
      imageAlt: "Orange",
      color: "#de4905",
      code: "Orange",
    },
    {
      title: "Automate Your Workflows",
      imageSrc: purpleConsole,
      imageAlt: "Purple",
      color: "#a38df8",
      code: "Purple",
    },
    {
      title: "Automate Your Workflows",
      imageSrc: whiteConsole,
      imageAlt: "White",
      color: "#dee1e7",
      code: "White",
    },
    {
      title: "Automate Your Workflows",
      imageSrc: emeraldConsole,
      imageAlt: "Emerald",
      color: "#13ead9",
      code: "Emerald",
    },
  ],
};

export const KEY_FEATURES_CONTENT = {
  sectionTitle: "Non Stop Action. Infinite Games.",
  sectionDescription:
    "Everything you need to enhance your streaming experience, all in one place.",
  features: [
    {
      id: 1,
      icon: <FaMemory className="w-8 h-8" />,
      title: "RAM",
      description:
        "1GB DDR3L",
    },
    {
      id: 2,
      icon: <FaMicrochip className="w-8 h-8" />,
      title: "CPU",
      description:
        "RK3326 640bit Quad-Core 1.5GHz",
    },
    {
      id: 3,
      icon: <BsGpuCard className="w-8 h-8" />,
      title: "GPU",
      description:
        "Mali-G31 MP2",
    },
    {
      id: 4,
      icon: <BiSolidMemoryCard className="w-8 h-8" />,
      title: "Storage",
      description:
        "64GB + MicroSD Slot",
    },
    {
      id: 5,
      icon: <FaBatteryThreeQuarters className="w-8 h-8" />,
      title: "Battery",
      description:
        "12 Hours of Gameplay",
    },
    {
      id: 6,
      icon: <MdSmartDisplay className="w-8 h-8" />,
      title: "Display",
      description:
        "3.5-inch Bright LCD Screen",
    },
  ],
};

export const PLANS_CONTENT = {
  sectionTitle: "Choose Your Plan",
  sectionDescription:
    "Streamerzz offers flexible pricing plans to fit every streamer’s needs, from beginner to pro.",
  popularBadge: "Most Popular",
  ctaText: "Get Started",
  plans: [
    {
      name: "Basic",
      price: "$9.99/month",
      description:
        "Perfect for beginners just starting their streaming journey.",
      features: [
        "Basic analytics",
        "Custom overlays",
        "Viewer engagement tools",
        "Stream up to 720p",
      ],
    },
    {
      name: "Pro",
      price: "$19.99/month",
      description:
        "For streamers who want more advanced tools to grow their audience.",
      features: [
        "Advanced analytics",
        "Custom alerts & notifications",
        "HD streaming up to 1080p",
        "Real-time audience insights",
        "Unlimited support",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "$49.99/month",
      description:
        "For professional streamers who need cutting-edge tools and insights.",
      features: [
        "Premium analytics & reporting",
        "4K Ultra HD streaming",
        "Dedicated account manager",
        "Full API access",
        "Custom branding & overlays",
      ],
    },
  ],
};

export const TESTIMONIALS_CONTENT = {
  sectionTitle: "Reviews ",
  sectionDescription:
    "Hear from some of the top streamers who use Streamerzz to engage with their audience and grow their channels.",
  reviews: [
    {
      name: "Lukas Schneider",
      title: <FaStar className="w-3 h-3"/>,
      review:
        "Was meant to wrap it up for my nephew.... Ended up \"testing\" it all night. 10/10",
      image: review_1,
      avatar: avatar_1,
    },
    {
      name: "Oliver Johansson",
      title: <FaStar className="w-3 h-3"/>,
      review:
        "Really cool little emulator box. I expected it to be a lot worse than it is. Great choice of emulator software and interface for newbies to emulation. Defo worth the price, I've had to give it to my kids because they won't stop pastering for it. Will order another one I guess :)",
      image: review_2,
      avatar: avatar_2,
    },
    {
      name: "Mateo Rossi",
      title: <FaStar className="w-3 h-3"/>,
      review:
        "Honestly couldn't be anymore impressed by this console! Was slightly sceptical before placing the order but so glad I did! I've spent every day playing it re-living my childhood with the older games. Quality is superb, graphics are amazing - recommeded it to a mate of mine and as purchased another one for my boy! Great value for money!",
      image: review_3,
      avatar: avatar_3,
    },
    {
      name: "Elena Dimitrova",
      title: <FaStar className="w-3 h-3"/>,
      review:
        "I ordered two console, one white, one blue. For me and my little brother. I like those transparent designs so much that I had to swap mine with my little brothers one. Love these.",
      image: review_4,
      avatar: avatar_4,
    },
    {
      name: "Andrei Petrescu",
      title: <FaStar className="w-3 h-3"/>,
      review:
        "I'm loving the device. There are plenty of games to choose from. Great idea to bring those games back. Thank You!",
      image: review_5,
      avatar: avatar_5,
    },
    {
      name: "Tomás Duarte",
      title: <FaStar className="w-3 h-3"/>,
      review:
        "Came today, we leave for a vacation soon so we ordered 2 for our kids for a bit of fun on the plane and they arrived very quickly. First impressions are WOW! Loads of retro games that I loved back in days. Little nostalgia.",
      image: review_6,
      avatar: avatar_6,
    },
    {
      name: "Nicolas Lefèvre",
      title: <FaStar className="w-3 h-3"/>,
      review:
        "Amazing little emulator with 20,000+ games. The screen is sharper than most of my kitchen knifes and bigger than a gameboy or DS. You even got the option to add more Roms to it. And the playtime for your next charge is alot. So so happy with the console and would recommend it definitely",
      image: review_7,
      avatar: avatar_7,
    },
    {
      name: "Sofia Novak",
      title: <FaStar className="w-3 h-3"/>,
      review:
        "Bought this for my boyfriend and myself to keep us occupied whilst flying, there's so many games to choose from and the battery life lasts for ages, highly recommend purchasing as it value for money.",
      image: review_8,
      avatar: avatar_8,
    },
    {
      name: "William Carter",
      title: <FaStar className="w-3 h-3"/>,
      review:
        "I was very sceptical the first but once it arrived it proved me wrong it's great so many games I honestly don't I'll ever get through all of them. I've let all my friends try it and they all going to get one too. Thanks",
      image: review_9,
      avatar: avatar_10,
    },
    {
      name: "Jakub Kowalski",
      title: <FaStar className="w-3 h-3"/>,
      review:
        "It's got all the old school Sonic games and  MARIO!?!?!? Mate I'm set for the weekend. Bit of a pain sharing it with the kids though, might grab another one for personal use ONLY",
      image: review_10,
      avatar: avatar_9,
    },
  ],
};

export const FOOTER_CONTENT = {
  sections: [
    {
      title: "Quick Links",
      links: [
        { text: "Product", url: "#product" },
        { text: "Colors", url: "#gallery" },
        { text: "Details", url: "#fullDetails" },
        { text: "Reviews", url: "#testimonials" },
      ],
    },
    // {
    //   title: "SUPPORT & RESOURCES",
    //   links: [
    //     { text: "Subscription Plans", url: "#" },
    //     { text: "Affiliate Program", url: "#" },
    //     { text: "Frequently Asked Questions", url: "#" },
    //     { text: "Company Blog", url: "#" },
    //     { text: "Subscribe to Newsletter", url: "#" },
    //     { text: "Latest Features", url: "#" },
    //     { text: "Merchandise Store", url: "#" },
    //     { text: "Workshops & Events", url: "#" },
    //   ],
    // },
    // {
    //   title: "CONNECT WITH US",
    //   links: [
    //     { text: "Twitter", url: "#" },
    //     { text: "Facebook", url: "#" },
    //     { text: "TikTok", url: "#" },
    //     { text: "LinkedIn", url: "#" },
    //     { text: "YouTube", url: "#" },
    //     { text: "Twitch", url: "#" },
    //     { text: "Discord", url: "#" },
    //   ],
    // },
    // {
    //   title: "LEARN & EXPLORE",
    //   links: [
    //     { text: "Engage Viewers with Custom Alerts", url: "#" },
    //     { text: "Top Streaming Strategies for New Streamers", url: "#" },
    //     { text: "How to Stream in 4K for Maximum Quality", url: "#" },
    //     { text: "Efficient Stream Scheduling Techniques", url: "#" },
    //     { text: "Using Analytics to Boost Engagement", url: "#" },
    //     { text: "Create Stunning Overlays for Streams", url: "#" },
    //     { text: "Advanced Analytics for Streamers: A Guide", url: "#" },
    //   ],
    // },
  ],
  paymentMethods: [
    applePay, amex, googlePay, masterCard, shop, unionPay, visa
  ],
  platformsText:
    "Streaming Platforms | Twitch | YouTube | Discord | Facebook Gaming",
  copyrightText: "© 2025 PlayCore All rights reserved.",
};
