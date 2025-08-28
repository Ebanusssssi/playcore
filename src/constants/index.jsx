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
import chart from "../assets/chart.png";
import optimize from "../assets/optimize.jpeg";
import audienceEngagementImage from "../assets/audience.jpeg";
import monetizeImage from "../assets/monetize.jpeg";
import automationImage from "../assets/automation.jpeg";
import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";
import user4 from "../assets/user4.jpeg";
import user5 from "../assets/user5.jpeg";
import user6 from "../assets/user6.jpeg";

import { FaMicrochip } from "react-icons/fa6";
import { FaMemory } from "react-icons/fa";
import { BsGpuCard } from "react-icons/bs";
import { BiSolidMemoryCard } from "react-icons/bi";
import { FaBatteryThreeQuarters } from "react-icons/fa6";
import { MdSmartDisplay } from "react-icons/md";


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
      icon: <FaMicrochip className="w-8 h-8" />,
      title: "RAM",
      description:
        "1GB DDR3L",
    },
    {
      id: 2,
      icon: <FaMemory className="w-8 h-8" />,
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
  sectionTitle: "What Our Streamers Say",
  sectionDescription:
    "Hear from some of the top streamers who use Streamerzz to engage with their audience and grow their channels.",
  reviews: [
    {
      name: "Alice Johnson",
      title: "Content Creator",
      review:
        "Streamerzz has revolutionized the way we manage our content subscriptions. The intuitive dashboard and real-time analytics have made it easier to track our progress and optimize our offerings. Highly recommended!",
      image: user1,
    },
    {
      name: "Bob Smith",
      title: "Marketing Specialist",
      review:
        "The team at Streamerzz has been fantastic! Their support is responsive and knowledgeable. The platform itself is versatile and has helped us streamline our subscription management, saving us time and increasing efficiency.",
      image: user2,
    },
    {
      name: "Carla Mendes",
      title: "Product Manager",
      review:
        "Streamerzz's automated billing and comprehensive analytics have been game-changers for our product team. We can now easily track user engagement and make data-driven decisions to enhance our service offerings.",
      image: user3,
    },
    {
      name: "David Lee",
      title: "Customer Success Manager",
      review:
        "Using Streamerzz, we’ve been able to increase our customer retention rates. The platform's user-friendly interface and powerful features have provided our customers with a seamless experience, leading to higher satisfaction.",
      image: user4,
    },
    {
      name: "Ella Fernandez",
      title: "UX Designer",
      review:
        "Streamerzz's flexibility and ease of use have made it a key tool in our design process. We can quickly adjust our subscription plans and monitor the impact on user engagement, allowing for a more responsive approach.",
      image: user5,
    },
    {
      name: "Frank Wilson",
      title: "Data Analyst",
      review:
        "Streamerzz provides us with detailed insights into our subscription metrics. The advanced reporting tools have enabled us to identify trends and make informed decisions to optimize our growth strategy.",
      image: user6,
    },
  ],
};

export const FOOTER_CONTENT = {
  sections: [
    {
      title: "TOOLS & SERVICES",
      links: [
        { text: "Real-time Analytics", url: "#" },
        { text: "Customizable Alerts", url: "#" },
        { text: "Integrated Chat Systems", url: "#" },
        { text: "Instant Notifications", url: "#" },
        { text: "Overlays & Visuals", url: "#" },
        { text: "Mobile Streaming Support", url: "#" },
        { text: "4K Stream Capabilities", url: "#" },
        { text: "Stream Scheduling Tool", url: "#" },
      ],
    },
    {
      title: "SUPPORT & RESOURCES",
      links: [
        { text: "Subscription Plans", url: "#" },
        { text: "Affiliate Program", url: "#" },
        { text: "Frequently Asked Questions", url: "#" },
        { text: "Company Blog", url: "#" },
        { text: "Subscribe to Newsletter", url: "#" },
        { text: "Latest Features", url: "#" },
        { text: "Merchandise Store", url: "#" },
        { text: "Workshops & Events", url: "#" },
      ],
    },
    {
      title: "CONNECT WITH US",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Facebook", url: "#" },
        { text: "TikTok", url: "#" },
        { text: "LinkedIn", url: "#" },
        { text: "YouTube", url: "#" },
        { text: "Twitch", url: "#" },
        { text: "Discord", url: "#" },
      ],
    },
    {
      title: "LEARN & EXPLORE",
      links: [
        { text: "Engage Viewers with Custom Alerts", url: "#" },
        { text: "Top Streaming Strategies for New Streamers", url: "#" },
        { text: "How to Stream in 4K for Maximum Quality", url: "#" },
        { text: "Efficient Stream Scheduling Techniques", url: "#" },
        { text: "Using Analytics to Boost Engagement", url: "#" },
        { text: "Create Stunning Overlays for Streams", url: "#" },
        { text: "Advanced Analytics for Streamers: A Guide", url: "#" },
      ],
    },
  ],
  platformsText:
    "Streaming Platforms | Twitch | YouTube | Discord | Facebook Gaming",
  copyrightText: "© 2024 Streamerzz, Inc. All rights reserved.",
};
