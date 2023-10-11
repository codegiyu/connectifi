import handsome from "../assets/images/handsome.png";
import pleasant from "../assets/images/pleasant.png";
import router from "../assets/images/router.png";
import stylish from "../assets/images/stylish.png";
import circles from "../assets/concentric-circles.svg";

const heroData = {
    packages: {
        heading: "Internet Subscription Should Be The Least Of Your Worries",
        text: "With our auto-renewal system, you have nothing to worry\
        about. For every purchase, you also enjoy 3% cashback.",
        headingWidth: "535px",
        textWidth: "500px",
        heroImg: {
            src: handsome,
            width: 574,
            height: 538
        }
    },
    products: {
        heading: "Big Savings With 10% Off Our Premium Deals",
        text: "Creating safer, smarter, more secure, more spectacular experiences for you.",
        headingWidth: "535px",
        textWidth: "510px",
        heroImg: {
            src: router,
            width: 567,
            height: 452
        },
        sideIcon: {
            src: circles,
            width: 245,
            height: 174
        }
    },
    contact: {
        heading: "Get in Touch with Us",
        text: "At Connectifi, we value your input and are committed to providing you with the best possible support and assistance.",
        headingWidth: "580px",
        textWidth: "520px",
        heroImg: {
            src: stylish,
            width: 551,
            height: 510
        }
    },
    home: {
        heading: "",
        text: "Welcome to Connectifi, where we redefine data and network solutions.",
        heroImg: {
            src: pleasant,
            width: 583,
            height: 568
        },
        stats: [
            {
                heading: "2M +",
                value: "Users"
            },
            {
                heading: "250 +",
                value: "Partnerships"
            },
            {
                heading: "20 +",
                value: "States"
            },
        ]
    },
}

export default heroData;