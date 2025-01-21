import { Service } from '../../types/services';

const ServicesData: Service[] = [
  {
    id: "artificial-intelligence-ml",
    title: "AI & ML",
    heading: "AI & ML",
    description: "Harness the transformative power of Artificial Intelligence (AI) and Machine Learning (ML) with our cutting-edge solutions. We integrate intelligent algorithms into your applications to enhance functionality through predictive analytics, automation, and personalized experiences. ",
    mobileDesc: "Transform your business with our AI and ML solutions! We integrate intelligent algorithms into your applications for predictive analytics, automation, and personalized experiences—enabling data-driven decisions that keep you ahead of the competition.",
    // buttonLabels: ["Machine Learning Solutions","Custom Computer Vision Solutions", "AI Strategy And Consultation", "Natural Language Processing", "Custom Chatbots" ],
    buttonLabels: [],
    subCategories: ["Machine Learning Solutions","Custom Computer Vision Solutions", "AI Strategy And Consultation", "Natural Language Processing", "AI Model Training & Deployment", "AI Integration with Existing Systems", "AI for Personalization", "Custom Chatbots" ],
    icon: "BrainCircuit",
    // Single Service Page Data
    imagePath: "/images/services/ai-service-hero-Img.webp",
    pageTitle: "Next-Gen AI & ML Development Solutions",
  },
  {
    id: "data-science",
    title: "Data Science",
    heading: "Data Science",
    description: "By leveraging advanced analytics techniques, we help organizations uncover trends, forecast outcomes, and optimize performance. Partner with us to unlock the full potential of your data and gain a competitive edge in your industry. ",
    mobileDesc: "Our data science services turn raw data into actionable insights that drive strategic decision-making.",
    // buttonLabels: ["Business Intelligence (BI) Solutions", "Data Analytics with AI", "Data Cleaning & Preprocessing", "Big Data Solutions" , "Customer & Market Analytics", "Data Science Consultation" ],
    buttonLabels: [],    
    subCategories: ["Business Intelligence (BI) Solutions", "Data Analytics with AI", "Data Cleaning & Preprocessing", "Big Data Solutions" , "Descriptive Data Analysis", "Predictive Analytics", "Data Visualization" , "Customer & Market Analytics", "Data Warehousing & ETL Services", "Data Science Consultation" ],
    icon: "Atom", // Store the icon name as a string or path
    // Single Service Page Data
    imagePath: "/images/services/DataScienceHero.jpg",
    pageTitle:"Future-Ready AI & Data Science Solutions",
  },
  {
    id: "website-development",
    title: "Website Development",
    heading: "Website Development",
    description: "We specialize in creating responsive, scalable, and secure websites and web applications that ensure a high-quality user experience across devices. Our comprehensive services include front-end and back-end development using the latest web technologies, whether you need a simple landing page or a complex e-commerce platform.",
    // description: "We specialize in the creation of responsive, scalable, and secure websites and web applications, ensuring a high-quality user experience across devices. Our services encompass comprehensive front-end and back-end development using the latest web technologies. Whether you need a simple landing page or a complex e-commerce platform, our expert team is dedicated to delivering innovative solutions that meet your business goals.",
    mobileDesc: "We specialize in the creation of responsive, scalable, and secure websites and web applications, ensuring a high-quality user experience across devices.",
    // buttonLabels: ["Custom Website Development", "CMS Website Development", "SaaS Website Development", "Enterprise Web Development", "Website Redesign and Revamp", "Progressive Web App (PWA)", "Web Portal Development", ],
    buttonLabels: [],    
    subCategories: ["Custom Website Development", "CMS Website Development", "SaaS Website Development", "Enterprise Web Development", "Website Redesign and Revamp", "Progressive Web App (PWA)", "Web Portal Development", "Educational and eLearning Website Development"],
    icon: "MonitorSmartphone", // Store the icon name as a string or path
    // Single Service Page Data
    imagePath: "/images/services/website-development-hero.jpg",
    pageTitle:"Innovative Website Solutions for Modern Business Success",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    heading: "UI/UX Design",
    description: "Our UI/UX design services focus on crafting intuitive and engaging user experiences. Through thorough user research and usability testing, we ensure that each design decision enhances functionality and aesthetic appeal. From wireframing to prototyping, we create visually stunning interfaces that drive user satisfaction.",
    mobileDesc: "Our UI/UX design services focus on creating engaging, user-friendly experiences. We design visually appealing interfaces that enhance usability and keep users returning.",
    // buttonLabels: ["Custom UI Design", "Responsive Design", "Wireframes & Prototyping", "Visual Design", "Mobile App Design", "User Research & Testing"],
    buttonLabels: [],
    subCategories: ["Custom UI Design", "Responsive Design", "Wireframes & Prototyping", "Visual Design", "Mobile App Design", "User Research & Testing", "UX Strategy & Consultation", "UI/UX for Web Applications"],
    icon: "DraftingCompass", // Store the icon name as a string or path
    // Single Service Page Data
    imagePath: "/images/services/uiux-design-hero.jpg",
    pageTitle:"Future-Proof UI/UX Designs for Modern Businesses",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    heading: "Mobile App Development",
    description: "We excel in developing high-performance mobile applications tailored to your business needs. Our team combines creativity and technical expertise to create native and cross-platform apps that deliver seamless user experiences while focusing on security and scalability.",
    // description: "We excel in developing high-performance mobile applications tailored to meet the unique needs of your business. Our team combines creativity and technical expertise to create native and cross-platform apps that deliver seamless user experiences. With a focus on security and scalability, we help you reach your audience on their preferred devices while driving engagement and growth.",
    mobileDesc: "We develop high-performance mobile apps tailored to your business needs. Our skilled team creates native and cross-platform applications that deliver seamless experiences on smartphones and tablets—connecting you with users wherever they are.",
    // buttonLabels: ["Custom Website Development", "Custom Software Development", "Software Quality Assurance", "Web App Development", "Revamp Existing Website"],
    buttonLabels: [],
    subCategories: ["IOS / Android App Development", "Native App Development", "Ecommerce App Development", "Cross-Platform App Development", "Mobile App Testing & QA", "Mobile App Maintenance & Support", "Mobile App Consultation", "UI/UX Design for Mobile Apps"],
    icon: "TabletSmartphone", // Store the icon name as a string or path
    // Single Service Page Data
    imagePath: "/images/services/mobile-development-Img.jpg",
    pageTitle:"Scalable Mobile App Development for Tomorrow's Businesses",
  },
  {
    id: "ecommerce-dev",
    title: "Ecormmerce Development",
    heading: "Ecormmerce Development",
    description: "We build ecommerce platforms that boost sales and engage customers. Our services include custom stores and secure payments, optimized for a smooth mobile shopping experience. These descriptions are now very brief while still conveying the essential information about ecommerce development.",
    mobileDesc: "We create user-friendly ecommerce platforms that drive sales. Our services include custom online stores, secure payment integrations, and effective inventory management, ensuring a seamless shopping experience.",
    // buttonLabels: ["Custom eCommerce Website Development", "Multi-Vendor Marketplace Development", "B2B and B2C eCommerce Solutions", "eCommerce Marketing Services", "eCommerce SEO Services", "eCommerce Maintenance & Support"],
    buttonLabels: [],
    subCategories: ["Custom eCommerce Website Development", "Multi-Vendor Marketplace Development", "B2B and B2C eCommerce Solutions" , "Platform-Based eCommerce Development", "Mobile eCommerce Solutions", "eCommerce Marketing Services", "eCommerce SEO Services", "eCommerce Maintenance & Support"],
    icon: "ShoppingCart", // Store the icon name as a string or path
    // Single Service Page Data
    imagePath: "images/services/ecommerce-development.JPEG",
    pageTitle:"Building Scalable E-Commerce Platforms for Tomorrow's Market",
  }
  
];

export default ServicesData;
