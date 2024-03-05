import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// for lms : 
import mainLms from "@/public/LMS/lms1.png";
import lms2 from "@/public/LMS/lms2.png" ; 
import lms3 from "@/public/LMS/lms3.png" ; 
import lms4 from "@/public/LMS/lms4.png" ; 
import lms5 from "@/public/LMS/lms5.png" ; 
import lms6 from "@/public/LMS/lms6.png" ; 
import lms7 from "@/public/LMS/lms7.png" ; 

// for auth : 
import mainAuth from "@/public/Auth/auth1.png";
import auth2 from "@/public/Auth/auth2.png"
import auth3 from "@/public/Auth/auth3.png"
import auth4 from "@/public/Auth/auth4.png"
import auth5 from "@/public/Auth/auth5.png"
import auth6 from "@/public/Auth/auth6.png"
import auth7 from "@/public/Auth/auth7.png"

// for football : 
import mainFootApp from "@/public/FootbalApp/foot1.png";
import foot2 from '@/public/FootbalApp/foot2.png'
import foot3 from '@/public/FootbalApp/foot3.png'
import foot4 from '@/public/FootbalApp/foot4.png'

// for admin
import mainAdmin from "@/public/AdminEcom/admin3.png"
import admin1 from "@/public/AdminEcom/admin1.png"
import admin2 from "@/public/AdminEcom/admin2.png"
import admin4 from "@/public/AdminEcom/admin4.png"
import admin5 from "@/public/AdminEcom/admin5.png"
import admin6 from "@/public/AdminEcom/admin6.png"
import admin7 from "@/public/AdminEcom/admin7.png"
import admin8 from "@/public/AdminEcom/admin8.png"
import admin9 from "@/public/AdminEcom/admin9.png"
import admin10 from "@/public/AdminEcom/admin10.png"
import admin11 from "@/public/AdminEcom/admin11.png"

// for store : 
import mainStore from "@/public/StoreEcom/store4.png"
import store1 from "@/public/StoreEcom/store1.png"
import store2 from "@/public/StoreEcom/store2.png"
import store3 from "@/public/StoreEcom/store3.png"
import store5 from "@/public/StoreEcom/store5.png"



export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Get First Job",
    location: "Mostaqil",
    description:
      "I get my first job as a freenlacer in Mostaqil And Khamsat platforms after 1 year of studying as a front-end developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Front-End Developer",
    location: "Algiers",
    description:
      "I worked as a front-end developer for in 6 month in a private algerian company called BigMama.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "First Full-Stack Job",
    location: "Freelance",
    description:
      "I did a my first full stack job as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to part-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - ",
  },
] as const;

export const projectsData = [
  {
    id : "1" , 
    title: "E-Learning Application",
    descriptionShort:
      "Create, manage, and monetize courses effortlessly with our e-learning application. Utilizing Next.js 14, TypeScript, Mongoose, and MongoDB,and upload images, files, and videos.",
    descriptionLong : 
      "Welcome to our innovative e-learning application, where education meets convenience. Powered by Next.js 14, TypeScript, Mongoose, and MongoDB, our platform revolutionizes the teaching and learning experience. Seamlessly upload diverse content formats including images, files, and videos, facilitating an enriching educational journey. In the user mode, learners can browse a plethora of courses, purchasing their desired ones with ease. Once purchased, courses are accessible for continual learning, with progress tracking and course completion indicators enhancing user engagement and motivation. The user-centric design ensures a personalized experience tailored to individual learning needs.Transitioning to the teacher mode, educators are empowered to effortlessly create and manage courses. Whether it is designing curriculum, uploading content, or monitoring course performance, our platform streamlines the entire process. Teachers gain valuable insights into course revenue, enabling informed decision-making and optimization strategies. With intuitive features and robust functionality, educators can focus on what truly matters – delivering quality education.Our application represents a dynamic ecosystem where knowledge is cultivated, shared, and monetized. By harnessing cutting-edge technologies and user-centric design principles, we've redefined the boundaries of online education. Whether you're a learner seeking to expand your horizons or an educator eager to inspire minds, join us on this journey of learning and growth. Together, let's shape the future of education, one course at a time." , 
    tags: ["React", "Next.js", "MongoDB", "TailwindCSS","TypeScript"],
    imageMain: mainLms,
    images : [
      {
      id : "1" , 
      url : mainLms} 
      , 
      {
      id : "2" , 
      url : lms2} 
      , 
      {
      id : "3" , 
      url : lms3} 
      , 
      {
      id : "4" , 
      url : lms4} 
      , 
      {
      id : "5" , 
      url : lms5} 
      , 
      {
      id : "6" , 
      url : lms6} 
      , 
      {
      id : "7" , 
      url : lms7} 
      , 
      ] ,
    youtube : "https://www.youtube.com/watch?v=rAgcKn2zHyI" , 
    github : "https://github.com/imadeddineD/Elearning" , 
    link : "https://elearning-xi.vercel.app"
  },
  {
    id : "2" , 
    title: "Football Calendar App",
    descriptionShort:
      "Explore real-time football standings and upcoming matches from top leagues worldwide on our Next.js 14 powered application..",
    descriptionLong : 
      "Immerse yourself in the dynamic world of football with our meticulously crafted application, leveraging Next.js 14, Tailwind CSS, and TypeScript to deliver a seamless user experience. Powered by Rapid API, we provide real-time access to comprehensive football data, ensuring visitors stay informed about the latest standings and upcoming matches across prominent leagues including the Premier League, La Liga, Ligue 1, Serie A, and Bundesliga. From avid fans to casual enthusiasts, our platform caters to the diverse needs of football aficionados, offering a centralized hub for accessing vital information. Whether you're tracking your favorite team's progress or staying updated on league standings, our intuitive interface empowers users to effortlessly navigate through the vast array of data. Delving into the heart of the application, visitors can explore detailed standings for each league, gaining insights into team rankings, points, and recent performances. Additionally, our platform provides comprehensive information on upcoming matches, enabling users to plan ahead and never miss a game. By offering insights into both league-wide fixtures and individual team schedules, we ensure that football enthusiasts are always one step ahead.Driven by a commitment to excellence, we continuously strive to enhance the user experience, incorporating feedback and iterating on our features to meet the evolving needs of our audience. Whether you're a die-hard supporter following every match or a casual observer keeping tabs on the latest standings, our football application promises an immersive and engaging experience for fans of the beautiful game. Join us on this thrilling journey through the world of football, where passion meets innovation, and every match brings new excitement. With our application as your guide, dive into the exhilarating realm of football and experience the thrill of the game like never before." , 
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS", "Api"],
    imageMain: mainFootApp,
    images : [
      {
      id : "1" , 
      url : mainFootApp} 
      , 
      {
      id : "2" , 
      url : foot2} 
      , 
      {
      id : "3" , 
      url : foot3} 
      , 
      {
      id : "4" , 
      url : foot4} 
      , 
      ] ,
    youtube : "https://www.youtube.com/watch?v=jAnBHnZWzbs&t=1s" , 
    github : "https://github.com/imadeddineD/freekick" , 
    link : "https://freekick-imadeddined.vercel.app/"
  },
  {
    id : "3" , 
    title: "NextJS Authentication version5",
    descriptionShort:
      "Discover the authentication with our Next.js application, offering registration, login via credentials, password management, email verification, and 2-factor authentication.",
    descriptionLong : 
      "Elevate your user authentication experience with our meticulously crafted Next.js application, seamlessly blending robust security features with user-friendly interfaces. Built upon Next.js and Tailwind CSS, our platform offers a comprehensive suite of authentication functionalities to meet the diverse needs of our users.From the outset, users can effortlessly register accounts, providing essential credentials for access. Additionally, we integrate third-party authentication providers such as Google and GitHub, enabling a seamless login experience that caters to diverse user preferences. Whether it's traditional credentials or trusted external platforms, our application ensures a frictionless onboarding process for all users.Security remains paramount, with our platform offering robust password management capabilities. Users can easily reset or change their passwords as needed, ensuring continuous access to their accounts with minimal hassle. Moreover, our email verification feature, powered by Resend platform, adds an extra layer of security by verifying user identities and preventing unauthorized access.For users seeking enhanced security measures, our application offers two-factor authentication (2FA), bolstering account protection against unauthorized access. By leveraging additional verification steps beyond passwords, such as SMS codes or authentication apps, we prioritize user security without compromising usability.At the core of our application is a commitment to user empowerment and convenience. Through intuitive interfaces and seamless integration of authentication features, we strive to enhance the user experience at every interaction point. Whether it's streamlining account creation, ensuring robust security measures, or facilitating hassle-free password management, our platform is designed to meet the evolving needs of our users.Join us on this journey towards secure and seamless authentication experiences. With our Next.js application as your trusted ally, rest assured that your data and identity are in safe hands, empowering you to engage with confidence in the digital realm." , 
    tags: ["React", "Next.js",  "TailwindCSS", "TypeScript"],
    imageMain: mainAuth,
    images : [
      {
      id : "1" , 
      url : mainAuth} 
      , 
      {
      id : "2" , 
      url : auth2} 
      , 
      {
      id : "3" , 
      url : auth3} 
      , 
      {
      id : "4" , 
      url : auth4} 
      , 
      {
      id : "5" , 
      url : auth5} 
      , 
      {
      id : "6" , 
      url : auth6} 
      , 
      {
      id : "7" , 
      url : auth7} 
      , 
      ] ,
    youtube : "https://www.youtube.com/watch?v=lMrJw5GY21U" , 
    github : "https://github.com/imadeddineD/Next14authentication" , 
    link : "https://next14authentication.vercel.app"
  },
  {
    id : "4" , 
    title: "Ecommerce Admin Dashboard",
    descriptionShort:
      "Manage your ecommerce empire with our Next.js 14 admin dashboard. Create products, manage category billboards, track orders ...",
    descriptionLong: 
      "Welcome to the ultimate solution for ecommerce management – our Next.js 14 powered admin dashboard. With a seamless integration of TypeScript, Tailwind CSS, Prisma, and MySQL, our platform offers unparalleled control over every aspect of your online store.Central to our dashboard's functionality is its ability to create and manage products with ease. From adding new listings to updating existing ones, our intuitive interface streamlines the product management process, ensuring that your store's inventory remains up-to-date and vibrant.But that's not all – our dashboard also empowers you to curate the perfect shopping experience by managing category billboards. Whether you're highlighting new arrivals, seasonal promotions, or best-selling items, our platform allows for dynamic billboard creation and management, ensuring that your store's offerings are showcased in their best light.In addition to product and category management, our admin dashboard provides invaluable insights into your store's performance. Track orders in real-time, monitor total revenue, and gain visibility into remaining product inventory – all from a centralized, user-friendly interface. With this comprehensive view of your store's operations, you can make informed decisions and optimize your ecommerce strategy for success.Built upon a foundation of reliability and scalability, our platform leverages Prisma and MySQL to ensure robust data management and seamless performance. Whether you're managing a small boutique or a thriving online marketplace, our admin dashboard offers the tools and flexibility you need to grow and thrive in the competitive world of ecommerce.Join countless entrepreneurs and businesses who have chosen our Next.js 14 admin dashboard to power their ecommerce ventures. With its powerful features, intuitive design, and robust performance, our platform is your key to unlocking the full potential of your online store." , 
    tags: ["React", "Next.js", "SQL", "TailwindCSS", "Prisma"],
    imageMain: mainAdmin,
    images : [
      {
      id : "1" , 
      url : admin1} 
      , 
      {
      id : "2" , 
      url : admin2} 
      , 
      {
      id : "3" , 
      url : mainAdmin} 
      , 
      {
      id : "4" , 
      url : admin4} 
      , 
      {
      id : "5" , 
      url : admin5} 
      , 
      {
      id : "6" , 
      url : admin6} 
      , 
      {
      id : "7" , 
      url : admin7} 
      , 
      {
        id : "8" , 
        url : admin8} 
        , 
        {
        id : "9" , 
        url : admin9} 
        , 
        {
        id : "10" , 
        url : admin10} 
        , 
        {
        id : "11" , 
        url : admin11} 
        , 
      ] ,
    youtube : "https://www.youtube.com/watch?v=J9Qu5UPsOk8" , 
    github : "https://github.com/imadeddineD/ecommerce-admin" , 
    link : ""
  },
  {
    id : "5" , 
    title: "Ecommerce Official Store",
    descriptionShort:
      "Discover seamless shopping with our official store, powered by Next.js 14 and Tailwind CSS. Browse categories, products, add to cart, and checkout securely with Stripe.",
    descriptionLong : 
      "Welcome to our official store, where shopping meets simplicity and security. Crafted using Next.js 14 and Tailwind CSS, our platform offers a seamless and intuitive shopping experience for users of all levels.Navigating through our store is a breeze, with easy access to categories, billboards, and a wide range of products. Explore curated collections and discover new arrivals with just a few clicks, thanks to our user-friendly interface.Each product page is designed to provide detailed information, enabling users to make informed purchasing decisions. From product specifications to customer reviews, we empower shoppers with the knowledge they need to find the perfect item.Ready to make a purchase? Our streamlined checkout process, powered by the Stripe gateway, ensures a secure and hassle-free transaction every time. With encrypted payment processing and seamless integration, users can shop with confidence, knowing that their sensitive information is protected.But the convenience doesn't end there. Our platform also features a dynamic shopping cart, allowing users to easily add or remove items as they browse. With real-time updates and a sleek interface, managing your shopping list has never been easier.Whether you're searching for the latest fashion trends, tech gadgets, or home decor essentials, our official store has something for everyone. With its blend of cutting-edge technology and user-centric design, our platform sets the standard for modern online shopping experiences.Join us on a journey of discovery and convenience, where every click brings you one step closer to finding the perfect item. With our Next.js 14 and Tailwind CSS powered store, shopping has never been more enjoyable or effortless" , 
    tags: ["React", "Next.js", "TailwindCSS", "Stripe"],
    imageMain: mainStore,
    images : [{
      id : "1" , 
      url : store1} 
      , 
      {
      id : "2" , 
      url : store2} 
      , 
      {
      id : "3" , 
      url : store3} 
      , 
      {
      id : "4" , 
      url : mainStore} 
      , 
      {
      id : "5" , 
      url : store5} 
      , 
    ] , 
        youtube : "https://www.youtube.com/watch?v=J9Qu5UPsOk8" , 
    github : "https://github.com/imadeddineD/ecommerce-store" , 
    link : ""
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Reactjs",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
] as const;