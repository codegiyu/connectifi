import gifting from "../assets/images/gifting.png";
import airtel from "../assets/images/airtel-logo-square.png";
import mtn from "../assets/images/mtn-logo-fill.svg";
import smile from "../assets/images/smile-logo.svg";
import glo from "../assets/images/glo-logo.svg";
import ipnx from "../assets/images/ipnx-logo.svg";
import spectranet from "../assets/images/spectranet-logo.png";
import nineMobile from "../assets/images/9mobile-logo.svg";
import up from "../assets/up.svg";
import up2 from "../assets/up-2.svg";
import up1 from "../assets/up-1.svg";

export const internetProviders = [
    {
        providerName: "Airtel",
        icon: airtel,
        dataPackages: [
            {
                packageName: "Daily",
                dataOptions: []
            },
            {
                packageName: "Weekly",
                dataOptions: []
            },
            {
                packageName: "Bi-weekly",
                dataOptions: []
            },
            {
                packageName: "Monthly",
                dataOptions: []
            },
        ]
    },
    {
        providerName: "MTN",
        icon: mtn,
        dataPackages: [
            {
                packageName: "Daily",
                dataOptions: []
            },
            {
                packageName: "Weekly",
                dataOptions: [
                    "350MB + 3 Mins + 350MB YouTube - (N350)",
                    "600MB + 3 Mins - (N500)",
                    "750MB + 1 Hr YouTube Daily - (N500)",
                    "1GB + 5 Mins - (N700)",
                    "1.5GB + 10 Mins + 1.4GB YouTube Night - (N1000)",
                    "5GB (N1500)",
                    "7GB (N2000)"
                ]
            },
            {
                packageName: "Bi-weekly",
                dataOptions: []
            },
            {
                packageName: "Monthly",
                dataOptions: [
                    "1.2GB + 5 Mins + 2GB YouTube (N1000)",
                    "1.5GB + 5 Mins + 3GB YouTube (N1200)",
                    "3GB + 5 Mins + 2GB YouTube (N1600)",
                    "4GB + 10 Mins + 2GB YouTube (N2000)",
                    "8GB + 15 Mins + 2GB YouTube (N3000)",
                    "10GB + 20 Mins + 2GB YouTube (N3500)",
                    "11GB + 20 Mins (N3500)",
                    "12GB + 25 Mins + 2GB YouTube (N4000)",
                    "13GB + 25 Mins + 2GB (N4000)",
                    "20GB + 25 Mins + 2GB YouTube (N5500)",
                    "25GB + 25 Mins + 2GB YouTube (N6500)",
                    "27GB + 25 Mins (N6500)",
                    "40GB + 40 Mins (N11000)"
                ]
            },
        ]
    },
    {
        providerName: "Smile",
        icon: smile,
        dataPackages: [
            {
                packageName: "Daily",
                dataOptions: []
            },
            {
                packageName: "Weekly",
                dataOptions: []
            },
            {
                packageName: "Bi-weekly",
                dataOptions: []
            },
            {
                packageName: "Monthly",
                dataOptions: []
            },
        ]
    },
    {
        providerName: "Globacom",
        icon: glo,
        dataPackages: [
            {
                packageName: "Daily",
                dataOptions: []
            },
            {
                packageName: "Weekly",
                dataOptions: []
            },
            {
                packageName: "Bi-weekly",
                dataOptions: []
            },
            {
                packageName: "Monthly",
                dataOptions: []
            },
        ]
    },
    {
        providerName: "ipNX",
        icon: ipnx,
        dataPackages: [
            {
                packageName: "Daily",
                dataOptions: []
            },
            {
                packageName: "Weekly",
                dataOptions: []
            },
            {
                packageName: "Bi-weekly",
                dataOptions: []
            },
            {
                packageName: "Monthly",
                dataOptions: []
            },
        ]
    },
    {
        providerName: "Spectranet",
        icon: spectranet,
        dataPackages: [
            {
                packageName: "Daily",
                dataOptions: []
            },
            {
                packageName: "Weekly",
                dataOptions: []
            },
            {
                packageName: "Bi-weekly",
                dataOptions: []
            },
            {
                packageName: "Monthly",
                dataOptions: [
                    "8GB (N3700)",
                    "10GB (N4200)",
                    "15GB (N5900)",
                    "18GB (N7050)",
                    "25GB (N8250)",
                    "35GB (N11500)",
                    "50GB (N14200)",
                    "75GB (N16700)"
                ]
            },
        ]
    },
    {
        providerName: "9mobile",
        icon: nineMobile,
        dataPackages: [
            {
                packageName: "Daily",
                dataOptions: []
            },
            {
                packageName: "Weekly",
                dataOptions: []
            },
            {
                packageName: "Bi-weekly",
                dataOptions: []
            },
            {
                packageName: "Monthly",
                dataOptions: []
            },
        ]
    },
];

export const autoRenewalOptions = [
    {
        text: "Yes",
        value: "Yes"
    },
    {
        text: "No",
        value: "No"
    },
]

export const sitePlans = [
    {
        icon: up, 
        heading: "Basic", 
        data: "20", 
        price: "5399", 
        duration: "month", 
        text: "Everything in the Free plan, plus", 
        perks: [
            "Everything in the Free plan, plus",
            "Reliable Connection",
            "Smooth Video Streaming",
            "Lag-Free Online Gaming",
            "Efficient Web Browsing",
            "Cost-Effective"
        ],
    },
    {
        icon: up1, 
        heading: "Basic", 
        data: "20", 
        price: "5399", 
        duration: "month", 
        text: "Everything in the Free plan, plus", 
        perks: [
            "Everything in the Free plan, plus",
            "Reliable Connection",
            "Smooth Video Streaming",
            "Lag-Free Online Gaming",
            "Efficient Web Browsing",
            "Cost-Effective"
        ],
    },
    {
        icon: up2, 
        heading: "Basic", 
        data: "20", 
        price: "5399", 
        duration: "month", 
        text: "Everything in the Free plan, plus", 
        perks: [
            "Everything in the Free plan, plus",
            "Reliable Connection",
            "Smooth Video Streaming",
            "Lag-Free Online Gaming",
            "Efficient Web Browsing",
            "Cost-Effective"
        ],
    },
]

export const cashback = {
    image: gifting,
    heading: "Get N100 Cashback Each Time You Refer A Friend",
    text: "Of course, we are not joking! So tell your friends about us.",
    btnText: "Get Started"
}