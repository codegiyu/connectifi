import facebook from "../assets/footer-facebook.svg";
import instagram from "../assets/footer-instagram.svg";
import google from "../assets/footer-google.svg";
import twitter from "../assets/footer-twitter.svg";

export const socialMediaIconsData = [
    {
        icon: google,
        link: "https://www.google.com"
    },
    {
        icon: facebook,
        link: "https://www.facebook.com"
    },
    {
        icon: twitter,
        link: "https://www.twitter.com"
    },
    {
        icon: instagram,
        link: "https://www.instagram.com"
    },
]

export const footerLinksData = [
    {
        heading: "Company",
        links: [
            {
                text: "About",
                link: "#"
            },
            {
                text: "Products",
                link: "/products-and-services"
            },
            {
                text: "Services",
                link: "/packages"
            },
            {
                text: "Terms and Conditions",
                link: "#"
            }
        ]
    },
    {
        heading: "Support",
        links: [
            {
                text: "Contact Us",
                link: "/contact-us"
            },
            {
                text: "Privacy Policy",
                link: "/privacy-policy"
            },
            {
                text: "Feedbacks",
                link: "#"
            },
            {
                text: "FAQs",
                link: "/contact-us/#faqs"
            }
        ]
    }
]