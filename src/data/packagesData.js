import gifting from "../assets/images/gifting.png";
import airtel from "../assets/images/airtel-logo.png";
import mtn from "../assets/images/mtn-logo.svg";
import smile from "../assets/images/smile-logo.svg";
import glo from "../assets/images/glo-logo.svg";
import ipnx from "../assets/images/ipnx-logo.svg";
import spectranet from "../assets/images/spectranet-logo.png";
import nineMobile from "../assets/images/9mobile-logo.svg";
import { randomizeArray } from "../utils/randomizeArray";

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
                    {
                        benefits: "350MB + 3 Mins + 350MB YT",
                        price: "N350",
                        duration: "1 week"
                    },
                    {
                        benefits: "600MB + 3 Mins",
                        price: "N500",
                        duration: "1 week"
                    },
                    {
                        benefits: "750MB + 1 Hr YT Daily",
                        price: "N500",
                        duration: "1 week"
                    },
                    {
                        benefits: "1GB + 5 Mins",
                        price: "N700",
                        duration: "1 week"
                    },
                    {
                        benefits: "1.5GB + 10 Mins + 1.4GB YT Night",
                        price: "N1000",
                        duration: "1 week"
                    },
                    {
                        benefits: "5GB",
                        price: "N1500",
                        duration: "1 week"
                    },
                    {
                        benefits: "5GB",
                        price: "N2000",
                        duration: "1 week"
                    },
                ]
            },
            {
                packageName: "Monthly",
                dataOptions: [
                    {
                        benefits: "1.2GB + 5 Mins + 2GB YT",
                        price: "N1000",
                        duration: "1 month"
                    },
                    {
                        benefits: "1.5GB + 5 Mins + 3GB YT",
                        price: "N1200",
                        duration: "1 month"
                    },
                    {
                        benefits: "3GB + 5 Mins + 2GB YT",
                        price: "N1600",
                        duration: "1 month"
                    },
                    {
                        benefits: "4GB + 10 Mins + 2GB YT",
                        price: "N2000",
                        duration: "1 month"
                    },
                    {
                        benefits: "8GB + 15 Mins + 2GB YT",
                        price: "N3000",
                        duration: "1 month"
                    },
                    {
                        benefits: "10GB + 20 Mins + 2GB YT",
                        price: "N3500",
                        duration: "1 month"
                    },
                    {
                        benefits: "11GB + 20 Mins",
                        price: "N3500",
                        duration: "1 month"
                    },
                    {
                        benefits: "12GB + 25 Mins + 2GB YT",
                        price: "N4000",
                        duration: "1 month"
                    },
                    {
                        benefits: "13GB + 25 Mins + 2GB",
                        price: "N4000",
                        duration: "1 month"
                    },
                    {
                        benefits: "20GB + 25 Mins + 2GB YT",
                        price: "N5500",
                        duration: "1 month"
                    },
                    {
                        benefits: "25GB + 25 Mins + 2GB YT",
                        price: "N6500",
                        duration: "1 month"
                    },
                    {
                        benefits: "27GB + 25 Mins",
                        price: "N6500",
                        duration: "1 month"
                    },
                    {
                        benefits: "40GB + 40 Mins",
                        price: "N11000",
                        duration: "1 month"
                    }
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
                packageName: "Monthly",
                dataOptions: []
            },
        ]
    },
    {
        providerName: "GLO",
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
                packageName: "Monthly",
                dataOptions: [
                    {
                        benefits: "8GB",
                        price: "N3700",
                        duration: "1 month"
                    },
                    {
                        benefits: "10GB",
                        price: "N4200",
                        duration: "1 month"
                    },
                    {
                        benefits: "15GB",
                        price: "N5900",
                        duration: "1 month"
                    },
                    {
                        benefits: "18GB",
                        price: "N7050",
                        duration: "1 month"
                    },
                    {
                        benefits: "25GB",
                        price: "N8250",
                        duration: "1 month"
                    },
                    {
                        benefits: "35GB",
                        price: "N11500",
                        duration: "1 month"
                    },
                    {
                        benefits: "50GB",
                        price: "N14200",
                        duration: "1 month"
                    },
                    {
                        benefits: "75GB",
                        price: "N16700",
                        duration: "1 month"
                    }
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
                packageName: "Monthly",
                dataOptions: []
            },
        ]
    },
];

export const providerImages = internetProviders.reduce((acc, curr) => {
    acc[curr.providerName] = curr.icon;
    return acc;
}, {})

export const ALL_PLANS_ORDERLY = internetProviders.map((network, nidx) => {

    return network.dataPackages.map((packageType, pidx) => {

        return packageType.dataOptions.map(option => ({
            providerIcon: network.icon,
            networkIndex: String(nidx),
            packageIndex: String(pidx),
            packageType: packageType.packageName,
            network: network.providerName,
            price: option.price,
            duration: option.duration,
            benefits: option.benefits
        }))
    })
}).flat(2);

export const ALL_PLANS = randomizeArray(ALL_PLANS_ORDERLY);

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

// export const sitePlans = [
//     {
//         icon: up, 
//         heading: "Basic", 
//         data: "20", 
//         price: "5399", 
//         duration: "month", 
//         text: "Everything in the Free plan, plus", 
//         perks: [
//             "Everything in the Free plan, plus",
//             "Reliable Connection",
//             "Smooth Video Streaming",
//             "Lag-Free Online Gaming",
//             "Efficient Web Browsing",
//             "Cost-Effective"
//         ],
//     },
//     {
//         icon: up1, 
//         heading: "Basic", 
//         data: "20", 
//         price: "5399", 
//         duration: "month", 
//         text: "Everything in the Free plan, plus", 
//         perks: [
//             "Everything in the Free plan, plus",
//             "Reliable Connection",
//             "Smooth Video Streaming",
//             "Lag-Free Online Gaming",
//             "Efficient Web Browsing",
//             "Cost-Effective"
//         ],
//     },
//     {
//         icon: up2, 
//         heading: "Basic", 
//         data: "20", 
//         price: "5399", 
//         duration: "month", 
//         text: "Everything in the Free plan, plus", 
//         perks: [
//             "Everything in the Free plan, plus",
//             "Reliable Connection",
//             "Smooth Video Streaming",
//             "Lag-Free Online Gaming",
//             "Efficient Web Browsing",
//             "Cost-Effective"
//         ],
//     },
// ]

export const cashback = {
    image: gifting,
    heading: "Get N100 Cashback Each Time You Refer A Friend",
    text: "Of course, we are not joking! So tell your friends about us.",
    btnText: "Get Started"
}