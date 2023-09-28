import React, { useContext, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import useSixSec from "../HooksFile/useSixSec";
import { AuthContext } from "../HooksFile/AuthContextProvider";
import { Link } from "react-router-dom";
import SixSecModal from "../SixSecModal";
import useSixSecAllProjectData from "../HooksFile/useSixSecAllProjectData";

const SixSecScrollNew = () => {

const data = [
    {
        "projectTitle" : "UI/UX Design",
        "displayTitle": "DopeCast - Podcast Platform 1",
        "displayDiscreption": "DopeCast is an On-Demand-Podcast service platform concept for focused listening. Our main goal of the platform is to design elegant, modern & focused client-side UI for mobile, desktop, watch & web with the most enhanced user experience possible around the world. It’s made for pure podcast listening without any distractions.",
        "displayImage": "https://colorlib.com/wp/wp-content/uploads/sites/2/job-board-wordpress-themes.jpg",
        "SecondSecTitle": "Product Challenges",
        "secondSecFirstLi": "It’s hard to give the feel and taste of food through a website that lives in a digital device.",
        "secondSecSecondLi": "Apart from cooking the food, from order to deliver to enjoy the food is a difficult experience to design. Everything has to go perfect and quick.",
        "secondSecImage": "https://www.shutterstock.com/shutterstock/photos/1938744685/display_1500/stock-vector-concept-web-design-website-page-development-the-working-process-template-landing-page-for-1938744685.jpg",
        "thirdSecTitle": "Our Solutions",
        "thirdSecFirstLi": "Make the website and food vibrant and colorful so that customers can visually feel it.",
        "thirdSecSecondLi": "Make it easier to order a product with little to no effort and design the delivery system for efficiency.",
        "thirdSecImage": "https://i.ibb.co/5cCdNTq/image3.jpg",
        "forthSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "forthSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "forthSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "forthSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "forthSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "forthSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "FifthSecTitle": "What customers want?",
        "fifthSecDescription": "People want good quality and healthy foods at an affordable cost that can be delivered to them quickly, when they need or want.",
        "fifthSecImage": "https://www.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9.png",
        "sixSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "sixSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "sixSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "sixSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "sixSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "sixSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "sevenSectionTitle": "When will you build your Spicyy brand?",
        "sevenSectionImage": "https://developclicks.com/wp-content/uploads/2021/11/Web-Design-and-Development-Thumbnail-2.jpg",
        "time" : "1-1-23",
        "siteLink" : ""
    },
    {
        "projectTitle" : "Website",
        "displayTitle": "DopeCast - Podcast Platform 2",
        "displayDiscreption": "DopeCast is an On-Demand-Podcast service platform concept for focused listening. Our main goal of the platform is to design elegant, modern & focused client-side UI for mobile, desktop, watch & web with the most enhanced user experience possible around the world. It’s made for pure podcast listening without any distractions.",
        "displayImage": "https://colorlib.com/wp/wp-content/uploads/sites/2/job-board-wordpress-themes.jpg",
        "SecondSecTitle": "Product Challenges",
        "secondSecFirstLi": "It’s hard to give the feel and taste of food through a website that lives in a digital device.",
        "secondSecSecondLi": "Apart from cooking the food, from order to deliver to enjoy the food is a difficult experience to design. Everything has to go perfect and quick.",
        "secondSecImage": "https://www.shutterstock.com/shutterstock/photos/1938744685/display_1500/stock-vector-concept-web-design-website-page-development-the-working-process-template-landing-page-for-1938744685.jpg",
        "thirdSecTitle": "Our Solutions",
        "thirdSecFirstLi": "Make the website and food vibrant and colorful so that customers can visually feel it.",
        "thirdSecSecondLi": "Make it easier to order a product with little to no effort and design the delivery system for efficiency.",
        "thirdSecImage": "https://i.ibb.co/5cCdNTq/image3.jpg",
        "forthSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "forthSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "forthSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "forthSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "forthSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "forthSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "FifthSecTitle": "What customers want?",
        "fifthSecDescription": "People want good quality and healthy foods at an affordable cost that can be delivered to them quickly, when they need or want.",
        "fifthSecImage": "https://www.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9.png",
        "sixSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "sixSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "sixSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "sixSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "sixSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "sixSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "sevenSectionTitle": "When will you build your Spicyy brand?",
        "sevenSectionImage": "https://developclicks.com/wp-content/uploads/2021/11/Web-Design-and-Development-Thumbnail-2.jpg",
        "time" : "1-1-23",
        "siteLink" : ""
    },
    {
      "projectTitle" : "Apps",
        "displayTitle": "DopeCast - Podcast Platform 3",
        "displayDiscreption": "DopeCast is an On-Demand-Podcast service platform concept for focused listening. Our main goal of the platform is to design elegant, modern & focused client-side UI for mobile, desktop, watch & web with the most enhanced user experience possible around the world. It’s made for pure podcast listening without any distractions.",
        "displayImage": "https://colorlib.com/wp/wp-content/uploads/sites/2/job-board-wordpress-themes.jpg",
        "SecondSecTitle": "Product Challenges",
        "secondSecFirstLi": "It’s hard to give the feel and taste of food through a website that lives in a digital device.",
        "secondSecSecondLi": "Apart from cooking the food, from order to deliver to enjoy the food is a difficult experience to design. Everything has to go perfect and quick.",
        "secondSecImage": "https://www.shutterstock.com/shutterstock/photos/1938744685/display_1500/stock-vector-concept-web-design-website-page-development-the-working-process-template-landing-page-for-1938744685.jpg",
        "thirdSecTitle": "Our Solutions",
        "thirdSecFirstLi": "Make the website and food vibrant and colorful so that customers can visually feel it.",
        "thirdSecSecondLi": "Make it easier to order a product with little to no effort and design the delivery system for efficiency.",
        "thirdSecImage": "https://i.ibb.co/5cCdNTq/image3.jpg",
        "forthSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "forthSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "forthSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "forthSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "forthSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "forthSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "FifthSecTitle": "What customers want?",
        "fifthSecDescription": "People want good quality and healthy foods at an affordable cost that can be delivered to them quickly, when they need or want.",
        "fifthSecImage": "https://www.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9.png",
        "sixSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "sixSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "sixSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "sixSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "sixSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "sixSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "sevenSectionTitle": "When will you build your Spicyy brand?",
        "sevenSectionImage": "https://developclicks.com/wp-content/uploads/2021/11/Web-Design-and-Development-Thumbnail-2.jpg",
        "time" : "1-1-23",
        "siteLink" : ""
    },
    {
      "projectTitle" : "Website",
        "displayTitle": "DopeCast - Podcast Platform 4",
        "displayDiscreption": "DopeCast is an On-Demand-Podcast service platform concept for focused listening. Our main goal of the platform is to design elegant, modern & focused client-side UI for mobile, desktop, watch & web with the most enhanced user experience possible around the world. It’s made for pure podcast listening without any distractions.",
        "displayImage": "https://colorlib.com/wp/wp-content/uploads/sites/2/job-board-wordpress-themes.jpg",
        "SecondSecTitle": "Product Challenges",
        "secondSecFirstLi": "It’s hard to give the feel and taste of food through a website that lives in a digital device.",
        "secondSecSecondLi": "Apart from cooking the food, from order to deliver to enjoy the food is a difficult experience to design. Everything has to go perfect and quick.",
        "secondSecImage": "https://www.shutterstock.com/shutterstock/photos/1938744685/display_1500/stock-vector-concept-web-design-website-page-development-the-working-process-template-landing-page-for-1938744685.jpg",
        "thirdSecTitle": "Our Solutions",
        "thirdSecFirstLi": "Make the website and food vibrant and colorful so that customers can visually feel it.",
        "thirdSecSecondLi": "Make it easier to order a product with little to no effort and design the delivery system for efficiency.",
        "thirdSecImage": "https://i.ibb.co/5cCdNTq/image3.jpg",
        "forthSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "forthSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "forthSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "forthSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "forthSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "forthSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "FifthSecTitle": "What customers want?",
        "fifthSecDescription": "People want good quality and healthy foods at an affordable cost that can be delivered to them quickly, when they need or want.",
        "fifthSecImage": "https://www.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9.png",
        "sixSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "sixSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "sixSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "sixSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "sixSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "sixSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "sevenSectionTitle": "When will you build your Spicyy brand?",
        "sevenSectionImage": "https://developclicks.com/wp-content/uploads/2021/11/Web-Design-and-Development-Thumbnail-2.jpg",
        "time" : "1-1-23",
        "siteLink" : ""
    },
    {
      "projectTitle" : "Branding",
        "displayTitle": "DopeCast - Podcast Platform 5",
        "displayDiscreption": "DopeCast is an On-Demand-Podcast service platform concept for focused listening. Our main goal of the platform is to design elegant, modern & focused client-side UI for mobile, desktop, watch & web with the most enhanced user experience possible around the world. It’s made for pure podcast listening without any distractions.",
        "displayImage": "https://colorlib.com/wp/wp-content/uploads/sites/2/job-board-wordpress-themes.jpg",
        "SecondSecTitle": "Product Challenges",
        "secondSecFirstLi": "It’s hard to give the feel and taste of food through a website that lives in a digital device.",
        "secondSecSecondLi": "Apart from cooking the food, from order to deliver to enjoy the food is a difficult experience to design. Everything has to go perfect and quick.",
        "secondSecImage": "https://www.shutterstock.com/shutterstock/photos/1938744685/display_1500/stock-vector-concept-web-design-website-page-development-the-working-process-template-landing-page-for-1938744685.jpg",
        "thirdSecTitle": "Our Solutions",
        "thirdSecFirstLi": "Make the website and food vibrant and colorful so that customers can visually feel it.",
        "thirdSecSecondLi": "Make it easier to order a product with little to no effort and design the delivery system for efficiency.",
        "thirdSecImage": "https://i.ibb.co/5cCdNTq/image3.jpg",
        "forthSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "forthSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "forthSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "forthSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "forthSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "forthSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "FifthSecTitle": "What customers want?",
        "fifthSecDescription": "People want good quality and healthy foods at an affordable cost that can be delivered to them quickly, when they need or want.",
        "fifthSecImage": "https://www.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9.png",
        "sixSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "sixSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "sixSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "sixSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "sixSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "sixSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "sevenSectionTitle": "When will you build your Spicyy brand?",
        "sevenSectionImage": "https://developclicks.com/wp-content/uploads/2021/11/Web-Design-and-Development-Thumbnail-2.jpg",
        "time" : "1-1-23",
        "siteLink" : ""
    },
    {
      "projectTitle" : "UI/UX Design",
        "displayTitle": "DopeCast - Podcast Platform 6",
        "displayDiscreption": "DopeCast is an On-Demand-Podcast service platform concept for focused listening. Our main goal of the platform is to design elegant, modern & focused client-side UI for mobile, desktop, watch & web with the most enhanced user experience possible around the world. It’s made for pure podcast listening without any distractions.",
        "displayImage": "https://colorlib.com/wp/wp-content/uploads/sites/2/job-board-wordpress-themes.jpg",
        "SecondSecTitle": "Product Challenges",
        "secondSecFirstLi": "It’s hard to give the feel and taste of food through a website that lives in a digital device.",
        "secondSecSecondLi": "Apart from cooking the food, from order to deliver to enjoy the food is a difficult experience to design. Everything has to go perfect and quick.",
        "secondSecImage": "https://www.shutterstock.com/shutterstock/photos/1938744685/display_1500/stock-vector-concept-web-design-website-page-development-the-working-process-template-landing-page-for-1938744685.jpg",
        "thirdSecTitle": "Our Solutions",
        "thirdSecFirstLi": "Make the website and food vibrant and colorful so that customers can visually feel it.",
        "thirdSecSecondLi": "Make it easier to order a product with little to no effort and design the delivery system for efficiency.",
        "thirdSecImage": "https://i.ibb.co/5cCdNTq/image3.jpg",
        "forthSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "forthSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "forthSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "forthSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "forthSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "forthSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "FifthSecTitle": "What customers want?",
        "fifthSecDescription": "People want good quality and healthy foods at an affordable cost that can be delivered to them quickly, when they need or want.",
        "fifthSecImage": "https://www.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9.png",
        "sixSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "sixSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "sixSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "sixSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "sixSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "sixSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "sevenSectionTitle": "When will you build your Spicyy brand?",
        "sevenSectionImage": "https://developclicks.com/wp-content/uploads/2021/11/Web-Design-and-Development-Thumbnail-2.jpg",
        "time" : "1-1-23",
        "siteLink" : ""
    },
    {
      "projectTitle" : "Branding",
        "displayTitle": "DopeCast - Podcast Platform 7",
        "displayDiscreption": "DopeCast is an On-Demand-Podcast service platform concept for focused listening. Our main goal of the platform is to design elegant, modern & focused client-side UI for mobile, desktop, watch & web with the most enhanced user experience possible around the world. It’s made for pure podcast listening without any distractions.",
        "displayImage": "https://colorlib.com/wp/wp-content/uploads/sites/2/job-board-wordpress-themes.jpg",
        "SecondSecTitle": "Product Challenges",
        "secondSecFirstLi": "It’s hard to give the feel and taste of food through a website that lives in a digital device.",
        "secondSecSecondLi": "Apart from cooking the food, from order to deliver to enjoy the food is a difficult experience to design. Everything has to go perfect and quick.",
        "secondSecImage": "https://www.shutterstock.com/shutterstock/photos/1938744685/display_1500/stock-vector-concept-web-design-website-page-development-the-working-process-template-landing-page-for-1938744685.jpg",
        "thirdSecTitle": "Our Solutions",
        "thirdSecFirstLi": "Make the website and food vibrant and colorful so that customers can visually feel it.",
        "thirdSecSecondLi": "Make it easier to order a product with little to no effort and design the delivery system for efficiency.",
        "thirdSecImage": "https://i.ibb.co/5cCdNTq/image3.jpg",
        "forthSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "forthSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "forthSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "forthSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "forthSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "forthSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "FifthSecTitle": "What customers want?",
        "fifthSecDescription": "People want good quality and healthy foods at an affordable cost that can be delivered to them quickly, when they need or want.",
        "fifthSecImage": "https://www.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9.png",
        "sixSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "sixSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "sixSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "sixSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "sixSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "sixSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "sevenSectionTitle": "When will you build your Spicyy brand?",
        "sevenSectionImage": "https://developclicks.com/wp-content/uploads/2021/11/Web-Design-and-Development-Thumbnail-2.jpg",
        "time" : "1-1-23",
        "siteLink" : ""
    },
    {
      "projectTitle" : "Apps",
        "displayTitle": "DopeCast - Podcast Platform 8",
        "displayDiscreption": "DopeCast is an On-Demand-Podcast service platform concept for focused listening. Our main goal of the platform is to design elegant, modern & focused client-side UI for mobile, desktop, watch & web with the most enhanced user experience possible around the world. It’s made for pure podcast listening without any distractions.",
        "displayImage": "https://colorlib.com/wp/wp-content/uploads/sites/2/job-board-wordpress-themes.jpg",
        "SecondSecTitle": "Product Challenges",
        "secondSecFirstLi": "It’s hard to give the feel and taste of food through a website that lives in a digital device.",
        "secondSecSecondLi": "Apart from cooking the food, from order to deliver to enjoy the food is a difficult experience to design. Everything has to go perfect and quick.",
        "secondSecImage": "https://www.shutterstock.com/shutterstock/photos/1938744685/display_1500/stock-vector-concept-web-design-website-page-development-the-working-process-template-landing-page-for-1938744685.jpg",
        "thirdSecTitle": "Our Solutions",
        "thirdSecFirstLi": "Make the website and food vibrant and colorful so that customers can visually feel it.",
        "thirdSecSecondLi": "Make it easier to order a product with little to no effort and design the delivery system for efficiency.",
        "thirdSecImage": "https://i.ibb.co/5cCdNTq/image3.jpg",
        "forthSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "forthSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "forthSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "forthSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "forthSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "forthSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "FifthSecTitle": "What customers want?",
        "fifthSecDescription": "People want good quality and healthy foods at an affordable cost that can be delivered to them quickly, when they need or want.",
        "fifthSecImage": "https://www.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9.png",
        "sixSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "sixSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "sixSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "sixSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "sixSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "sixSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "sevenSectionTitle": "When will you build your Spicyy brand?",
        "sevenSectionImage": "https://developclicks.com/wp-content/uploads/2021/11/Web-Design-and-Development-Thumbnail-2.jpg",
        "time" : "1-1-23",
        "siteLink" : ""
    },
    {
      "projectTitle" : "UI/UX Design",
        "displayTitle": "DopeCast - Podcast Platform 9",
        "displayDiscreption": "DopeCast is an On-Demand-Podcast service platform concept for focused listening. Our main goal of the platform is to design elegant, modern & focused client-side UI for mobile, desktop, watch & web with the most enhanced user experience possible around the world. It’s made for pure podcast listening without any distractions.",
        "displayImage": "https://colorlib.com/wp/wp-content/uploads/sites/2/job-board-wordpress-themes.jpg",
        "SecondSecTitle": "Product Challenges",
        "secondSecFirstLi": "It’s hard to give the feel and taste of food through a website that lives in a digital device.",
        "secondSecSecondLi": "Apart from cooking the food, from order to deliver to enjoy the food is a difficult experience to design. Everything has to go perfect and quick.",
        "secondSecImage": "https://www.shutterstock.com/shutterstock/photos/1938744685/display_1500/stock-vector-concept-web-design-website-page-development-the-working-process-template-landing-page-for-1938744685.jpg",
        "thirdSecTitle": "Our Solutions",
        "thirdSecFirstLi": "Make the website and food vibrant and colorful so that customers can visually feel it.",
        "thirdSecSecondLi": "Make it easier to order a product with little to no effort and design the delivery system for efficiency.",
        "thirdSecImage": "https://i.ibb.co/5cCdNTq/image3.jpg",
        "forthSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "forthSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "forthSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "forthSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "forthSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "forthSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "FifthSecTitle": "What customers want?",
        "fifthSecDescription": "People want good quality and healthy foods at an affordable cost that can be delivered to them quickly, when they need or want.",
        "fifthSecImage": "https://www.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9.png",
        "sixSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "sixSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "sixSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "sixSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "sixSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "sixSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "sevenSectionTitle": "When will you build your Spicyy brand?",
        "sevenSectionImage": "https://developclicks.com/wp-content/uploads/2021/11/Web-Design-and-Development-Thumbnail-2.jpg",
        "time" : "1-1-23",
        "siteLink" : ""
    },
    {
        "projectTitle" : "Apps",
        "displayTitle": "DopeCast - Podcast Platform 10",
        "displayDiscreption": "DopeCast is an On-Demand-Podcast service platform concept for focused listening. Our main goal of the platform is to design elegant, modern & focused client-side UI for mobile, desktop, watch & web with the most enhanced user experience possible around the world. It’s made for pure podcast listening without any distractions.",
        "displayImage": "https://colorlib.com/wp/wp-content/uploads/sites/2/job-board-wordpress-themes.jpg",
        "SecondSecTitle": "Product Challenges",
        "secondSecFirstLi": "It’s hard to give the feel and taste of food through a website that lives in a digital device.",
        "secondSecSecondLi": "Apart from cooking the food, from order to deliver to enjoy the food is a difficult experience to design. Everything has to go perfect and quick.",
        "secondSecImage": "https://www.shutterstock.com/shutterstock/photos/1938744685/display_1500/stock-vector-concept-web-design-website-page-development-the-working-process-template-landing-page-for-1938744685.jpg",
        "thirdSecTitle": "Our Solutions",
        "thirdSecFirstLi": "Make the website and food vibrant and colorful so that customers can visually feel it.",
        "thirdSecSecondLi": "Make it easier to order a product with little to no effort and design the delivery system for efficiency.",
        "thirdSecImage": "https://i.ibb.co/5cCdNTq/image3.jpg",
        "forthSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "forthSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "forthSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "forthSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "forthSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "forthSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "FifthSecTitle": "What customers want?",
        "fifthSecDescription": "People want good quality and healthy foods at an affordable cost that can be delivered to them quickly, when they need or want.",
        "fifthSecImage": "https://www.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9.png",
        "sixSecVideoUrl": "https://www.youtube.com/embed/l5sgIqzlPXc?si=5i6ql4PyJPzF5ojh",
        "sixSecFirstImage": "https://i.pinimg.com/736x/66/e5/fb/66e5fbc59b9980b69f2d02b558cc930d--about-page-website-design.jpg",
        "sixSecSecondImage": "https://i.pinimg.com/736x/a4/97/4c/a4974c1ef5d4b6f5967ca709d006b893.jpg",
        "sixSecThirdImage": "https://i.pinimg.com/736x/53/5b/e7/535be74f7e2bdbb9240a21c97f397230.jpg",
        "sixSecForthImage": "https://i.pinimg.com/736x/27/35/59/27355942cf63befc777f18e9c02194fd.jpg",
        "sixSecFifthImage": "https://i.pinimg.com/736x/35/0b/e6/350be6b904f20a8a881a566fa3b6e3ab.jpg",
        "sevenSectionTitle": "When will you build your Spicyy brand?",
        "sevenSectionImage": "https://developclicks.com/wp-content/uploads/2021/11/Web-Design-and-Development-Thumbnail-2.jpg",
        "time" : "1-1-23",
        "siteLink" : "",
        "ViewAllProjects" : "View All Projects"
    }
    
]


  return (
    <div>
        <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-83%"]);
  const [sixSecAllProjectData, isLoading, refetch] = useSixSecAllProjectData();

  return (
    <section ref={targetRef} className="relative h-[300vh]  ">

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {sixSecAllProjectData?.slice(sixSecAllProjectData.length - 4 , sixSecAllProjectData.length )?.map((product) => {
            return <Card product={product} key={product?._id} />;
          })}
        </motion.div>
      </div>               
      
    </section>
  );
};

const Card = ({ product, index }) => {
  return (
    <div key={product.id}
      className="group relative h-[90vh] overflow-hidden flex ps-10" >

                <div key={product._id} className="product-card">
                    <div className="w-[40em]">
                      <h2 className="text-[56px] font-[400] ">{product.displayTitle}</h2>
                      <p className="font-sans">{product.displayDiscreption}</p>

                      <div className='flex justify-between items-center mt-10'>
                      <div className="arothmatic  ">
                        <Link
                          to={`/CaseStudy/${product._id}`}
                          className="font-sans hover:cursor-wait flex items-center relative"
                        >
                          <span className="dig font-sans">DIG DEEPER</span>{" "}
                          <img
                            className="ml-4 h-[8px] "
                            src="images/right_arrow.png"
                            alt="right arrow"
                          />
                        </Link>
                      </div>
                      </div>

                    </div>
                    <img className='h-[88vh] rounded-3xl' src={product.displayImage} alt={`Product Image ${index}`} />
                    <img className="-ml-10 mr-10" src="images/linker.svg" alt={`Linker Image ${index}`} />

                    {
                      product.ViewAllProjects && <div className=" w-44"> <Link to="/portfolio " className="font-sans w-[10em] px-6 py-3 rounded-full border-2 border-black/20 hover:border-black/70 hover:bg-black/5">{product?.ViewAllProjects}</Link> </div>
                    }
                  </div>    

    </div>
  );
};

export default SixSecScrollNew;
