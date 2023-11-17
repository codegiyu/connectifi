import gifting from "../assets/images/gifting.png";
import airtel from "../assets/images/airtel-logo.png";
import mtn from "../assets/images/mtn-logo.svg";
import smile from "../assets/images/smile-logo.svg";
import glo from "../assets/images/glo-logo.svg";
// import ipnx from "../assets/images/ipnx-logo.svg";
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
                dataOptions: [
                    {
                        benefits: "40MB",
                        price: 50,
                        duration: "1 day"
                    },
                    {
                        benefits: "100MB",
                        price: 100,
                        duration: "1 day"
                    },
                    {
                        benefits: "1GB",
                        price: 300,
                        duration: "1 day"
                    }
                ]
            },
            {
                packageName: "Weekly",
                dataOptions: [
                    {
                        benefits: "350MB",
                        price: 300,
                        duration: "7 days"
                    },
                    {
                        benefits: "1GB + 1GB YouTube Night",
                        price: 500,
                        duration: "7 days"
                    },
                    {
                        benefits: "6GB",
                        price: 1500,
                        duration: "7 days"
                    }
                ]
            },
            {
                packageName: "Monthly",
                dataOptions: [
                    {
                        benefits: "1.5GB + 2GB YT",
                        price: 1000,
                        duration: "30 days"
                    },
                    {
                        benefits: "2GB + 4GB YT",
                        price: 1200,
                        duration: "30 days"
                    },
                    {
                        benefits: "3GB + 4GB YT",
                        price: 1500,
                        duration: "30 days"
                    },
                    {
                        benefits: "4.5GB + 4GB YT",
                        price: 2000,
                        duration: "30 days"
                    },
                    {
                        benefits: "6GB + 4GB YT",
                        price: 2500,
                        duration: "30 days"
                    },
                    {
                        benefits: "10GB + 4GB YT",
                        price: 3500,
                        duration: "30 days"
                    },
                    {
                        benefits: "11GB + 4GB YT",
                        price: 4000,
                        duration: "30 days"
                    },
                    {
                        benefits: "20GB + 4GB YT",
                        price: 5000,
                        duration: "30 days"
                    },
                    {
                        benefits: "30GB",
                        price: 8000,
                        duration: "30 days"
                    },
                    {
                        benefits: "40GB",
                        price: 10000,
                        duration: "30 days"
                    },
                    {
                        benefits: "75GB",
                        price: 15000,
                        duration: "30 days"
                    },
                    {
                        benefits: "120GB",
                        price: 20000,
                        duration: "30 days"
                    },
                    {
                        benefits: "240GB",
                        price: 30000,
                        duration: "30 days"
                    },
                    {
                        benefits: "280GB",
                        price: 36000,
                        duration: "30 days"
                    }
                ]
            },
            {
                packageName: "Quarterly/Yearly",
                dataOptions: [
                    {
                        benefits: "400GB",
                        price: 50000,
                        duration: "90 days"
                    },
                    {
                        benefits: "500GB",
                        price: 60000,
                        duration: "120 days"
                    },
                    {
                        benefits: "1TB",
                        price: 100000,
                        duration: "365 days"
                    }
                ]
            }
        ]
    },
    {
        providerName: "MTN",
        icon: mtn,
        dataPackages: [
            {
                packageName: "Daily",
                dataOptions: [
                    {
                        benefits: "40MB",
                        price: 50,
                        duration: "1 day"
                    },
                    {
                        benefits: "100MB",
                        price: 100,
                        duration: "1 day"
                    },
                    {
                        benefits: "1GB + 3 Mins",
                        price: 350,
                        duration: "1 day"
                    },
                    {
                        benefits: "1.5GB",
                        price: 400,
                        duration: "1 day"
                    },
                    {
                        benefits: "2.5GB",
                        price: 500,
                        duration: "1 day"
                    }
                ]
            },
            {
                packageName: "Weekly",
                dataOptions: [
                    {
                        benefits: "350MB + 3 Mins + 350MB YT",
                        price: 350,
                        duration: "7 days"
                    },
                    {
                        benefits: "600MB + 3 Mins",
                        price: 500,
                        duration: "7 days"
                    },
                    {
                        benefits: "750MB + 1 Hr YT Daily",
                        price: 500,
                        duration: "7 days"
                    },
                    {
                        benefits: "1GB + 5 Mins",
                        price: 700,
                        duration: "7 days"
                    },
                    {
                        benefits: "1.5GB + 10 Mins + 1.4GB YT Night",
                        price: 1000,
                        duration: "7 days"
                    },
                    {
                        benefits: "5GB",
                        price: 1500,
                        duration: "7 days"
                    },
                    {
                        benefits: "5GB",
                        price: 2000,
                        duration: "7 days"
                    },
                ]
            },
            {
                packageName: "Monthly",
                dataOptions: [
                    {
                        benefits: "1.2GB + 5 Mins + 2GB YT",
                        price: 1000,
                        duration: "30 days"
                    },
                    {
                        benefits: "1.5GB + 5 Mins + 3GB YT",
                        price: 1200,
                        duration: "30 days"
                    },
                    {
                        benefits: "3GB + 5 Mins + 2GB YT",
                        price: 1600,
                        duration: "30 days"
                    },
                    {
                        benefits: "4GB + 10 Mins + 2GB YT",
                        price: 2000,
                        duration: "30 days"
                    },
                    {
                        benefits: "8GB + 15 Mins + 2GB YT",
                        price: 3000,
                        duration: "30 days"
                    },
                    {
                        benefits: "10GB + 20 Mins + 2GB YT",
                        price: 3500,
                        duration: "30 days"
                    },
                    {
                        benefits: "11GB + 20 Mins",
                        price: 3500,
                        duration: "30 days"
                    },
                    {
                        benefits: "12GB + 25 Mins + 2GB YT",
                        price: 4000,
                        duration: "30 days"
                    },
                    {
                        benefits: "13GB + 25 Mins + 2GB YT",
                        price: 4000,
                        duration: "30 days"
                    },
                    {
                        benefits: "20GB + 25 Mins + 2GB YT",
                        price: 5500,
                        duration: "30 days"
                    },
                    {
                        benefits: "25GB + 25 Mins + 2GB YT",
                        price: 6500,
                        duration: "30 days"
                    },
                    {
                        benefits: "27GB + 25 Mins",
                        price: 6500,
                        duration: "30 days"
                    },
                    {
                        benefits: "40GB + 40 Mins",
                        price: 11000,
                        duration: "30 days"
                    },
                    {
                        benefits: "75GB + 40 Mins",
                        price: 16000,
                        duration: "30 days"
                    },
                    {
                        benefits: "120GB + 80 Mins",
                        price: 22000,
                        duration: "30 days"
                    },
                    {
                        benefits: "200GB",
                        price: 30000,
                        duration: "30 days"
                    },
                    {
                        benefits: "30GB",
                        price: 8000,
                        duration: "60 days"
                    },
                    {
                        benefits: "100GB",
                        price: 20000,
                        duration: "60 days"
                    },
                    {
                        benefits: "160GB",
                        price: 30000,
                        duration: "60 days"
                    }
                ]
            },
            {
                packageName: "Yearly",
                dataOptions: [
                    {
                        benefits: "1TB",
                        price: 100000,
                        duration: "365 days"
                    },
                    {
                        benefits: "2.5TB",
                        price: 250000,
                        duration: "365 days"
                    },
                    {
                        benefits: "4.5TB",
                        price: 450000,
                        duration: "365 days"
                    }
                ]
            }
        ]
    },
    {
        providerName: "Smile",
        icon: smile,
        dataPackages: [
            {
                packageName: "Daily",
                dataOptions: [
                    {
                        benefits: "1GB",
                        price: 330,
                        duration: "1 day"
                    },
                    {
                        benefits: "3GB Weekend Only",
                        price: 1650,
                        duration: "3 days"
                    }
                ]
            },
            {
                packageName: "Weekly",
                dataOptions: [
                    {
                        benefits: "1GB Flexi Weekly",
                        price: 550,
                        duration: "7 days"
                    },
                    {
                        benefits: "2GB Flexi Weekly",
                        price: 1100,
                        duration: "7 days"
                    },
                    {
                        benefits: "2GB MidNite",
                        price: 1100,
                        duration: "7 days"
                    },
                    {
                        benefits: "3GB MidNite",
                        price: 1650,
                        duration: "7 days"
                    },
                    {
                        benefits: "6GB Flexi Weekly",
                        price: 1650,
                        duration: "7 days"
                    }
                ]
            },
            {
                packageName: "Monthly",
                dataOptions: [
                    {
                        benefits: "1.5GB",
                        price: 1100,
                        duration: "30 days"
                    },
                    {
                        benefits: "2GB",
                        price: 1320,
                        duration: "30 days"
                    },
                    {
                        benefits: "5GB",
                        price: 2200,
                        duration: "30 days"
                    },
                    {
                        benefits: "6.5GB",
                        price: 2750,
                        duration: "30 days"
                    },
                    {
                        benefits: "10GB",
                        price: 3300,
                        duration: "30 days"
                    },
                    {
                        benefits: "15GB",
                        price: 4400,
                        duration: "30 days"
                    },
                    {
                        benefits: "20GB",
                        price: 5500,
                        duration: "30 days"
                    },
                    {
                        benefits: "25GB",
                        price: 6600,
                        duration: "30 days"
                    },
                    {
                        benefits: "30GB",
                        price: 8800,
                        duration: "30 days"
                    },
                    {
                        benefits: "40GB",
                        price: 11000,
                        duration: "30 days"
                    },
                    {
                        benefits: "60GB",
                        price: 14850,
                        duration: "30 days"
                    },
                    {
                        benefits: "75GB",
                        price: 16500,
                        duration: "30 days"
                    },
                    {
                        benefits: "100GB",
                        price: 19800,
                        duration: "30 days"
                    },
                    {
                        benefits: "130GB",
                        price: 21780,
                        duration: "30 days"
                    }
                ]
            },
        ]
    },
    {
        providerName: "GLO",
        icon: glo,
        dataPackages: [
            {
                packageName: "Daily",
                dataOptions: [
                    {
                        benefits: "8GB",
                        price: 3700,
                        duration: "1 day"
                    },
                    {
                        benefits: "8GB",
                        price: 3700,
                        duration: "1 day"
                    },
                    {
                        benefits: "8GB",
                        price: 3700,
                        duration: "1 day"
                    }
                ]
            },
            {
                packageName: "Weekly",
                dataOptions: [
                    {
                        benefits: "7GB",
                        price: 1500,
                        duration: "7 days"
                    }
                ]
            },
            {
                packageName: "Monthly",
                dataOptions: [
                    {
                        benefits: "3.9GB",
                        price: 1000,
                        duration: "30 days"
                    },
                    {
                        benefits: "7.5GB",
                        price: 1500,
                        duration: "30 days"
                    },
                    {
                        benefits: "9.2GB",
                        price: 2000,
                        duration: "30 days"
                    },
                    {
                        benefits: "10.8GB",
                        price: 2500,
                        duration: "30 days"
                    },
                    {
                        benefits: "14GB",
                        price: 3000,
                        duration: "30 days"
                    },
                    {
                        benefits: "18GB",
                        price: 4000,
                        duration: "30 days"
                    },
                    {
                        benefits: "24GB",
                        price: 5000,
                        duration: "30 days"
                    },
                    {
                        benefits: "29.5GB",
                        price: 8000,
                        duration: "30 days"
                    },
                    {
                        benefits: "50GB",
                        price: 10000,
                        duration: "30 days"
                    },
                    {
                        benefits: "93GB",
                        price: 15000,
                        duration: "30 days"
                    },
                    {
                        benefits: "119GB",
                        price: 18000,
                        duration: "30 days"
                    },
                    {
                        benefits: "138GB",
                        price: 20000,
                        duration: "30 days"
                    },
                    {
                        benefits: "225GB",
                        price: 30000,
                        duration: "30 days"
                    },
                    {
                        benefits: "300GB",
                        price: 36000,
                        duration: "30 days"
                    },
                    {
                        benefits: "425GB",
                        price: 50000,
                        duration: "30 days"
                    }
                ]
            },
            {
                packageName: "Quarterly/Yearly",
                dataOptions: [
                    {
                        benefits: "525GB",
                        price: 60000,
                        duration: "120 days"
                    },
                    {
                        benefits: "675GB",
                        price: 75000,
                        duration: "120 days"
                    },
                    {
                        benefits: "1TB",
                        price: 100000,
                        duration: "365 days"
                    }
                ]
            }
        ]
    },
    // {
    //     providerName: "ipNX",
    //     icon: ipnx,
    //     dataPackages: [
    //         {
    //             packageName: "Daily",
    //             dataOptions: []
    //         },
    //         {
    //             packageName: "Bi-weekly",
    //             dataOptions: []
    //         },
    //         {
    //             packageName: "Monthly",
    //             dataOptions: []
    //         },
    //     ]
    // },
    {
        providerName: "Spectranet",
        icon: spectranet,
        dataPackages: [
            {
                packageName: "Daily",
                dataOptions: [
                    {
                        benefits: "1GB",
                        price: 300,
                        duration: "1 day"
                    }
                ]
            },
            {
                packageName: "Weekly",
                dataOptions: [
                    {
                        benefits: "6GB",
                        price: 1500,
                        duration: "7 days"
                    }
                ]
            },
            {
                packageName: "Monthly",
                dataOptions: [
                    {
                        benefits: "8GB",
                        price: 3700,
                        duration: "30 days"
                    },
                    {
                        benefits: "10GB",
                        price: 4200,
                        duration: "30 days"
                    },
                    {
                        benefits: "15GB",
                        price: 5900,
                        duration: "30 days"
                    },
                    {
                        benefits: "18GB",
                        price: 7050,
                        duration: "30 days"
                    },
                    {
                        benefits: "25GB",
                        price: 8250,
                        duration: "30 days"
                    },
                    {
                        benefits: "35GB",
                        price: 11500,
                        duration: "30 days"
                    },
                    {
                        benefits: "50GB",
                        price: 14200,
                        duration: "30 days"
                    },
                    {
                        benefits: "75GB",
                        price: 16700,
                        duration: "30 days"
                    },
                    {
                        benefits: "80GB",
                        price: 18699,
                        duration: "30 days"
                    },
                    {
                        benefits: "150GB",
                        price: 24199,
                        duration: "30 days"
                    },
                    {
                        benefits: "175GB",
                        price: 27499,
                        duration: "30 days"
                    },
                    {
                        benefits: "200GB",
                        price: 30799,
                        duration: "30 days"
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
                dataOptions: [
                    {
                        benefits: "50MB",
                        price: 50,
                        duration: "1 day"
                    },
                    {
                        benefits: "100MB",
                        price: 100,
                        duration: "1 day"
                    },
                    {
                        benefits: "300MB + 300 Secs",
                        price: 150,
                        duration: "1 day"
                    },
                    {
                        benefits: "650MB",
                        price: 200,
                        duration: "1 day"
                    },
                    {
                        benefits: "1GB",
                        price: 300,
                        duration: "1 day"
                    }
                ]
            },
            {
                packageName: "Weekly",
                dataOptions: [
                    {
                        benefits: "250MB",
                        price: 200,
                        duration: "7 days"
                    },
                    {
                        benefits: "1GB + Social",
                        price: 500,
                        duration: "7 days"
                    },
                    {
                        benefits: "7GB + Social",
                        price: 1500,
                        duration: "7 days"
                    }
                ]
            },
            {
                packageName: "Monthly",
                dataOptions: [
                    {
                        benefits: "500MB",
                        price: 500,
                        duration: "30 days"
                    },
                    {
                        benefits: "4.2GB",
                        price: 1000,
                        duration: "30 days"
                    },
                    {
                        benefits: "6.5GB",
                        price: 1200,
                        duration: "30 days"
                    },
                    {
                        benefits: "8GB",
                        price: 1500,
                        duration: "30 days"
                    },
                    {
                        benefits: "9.5GB",
                        price: 2000,
                        duration: "30 days"
                    },
                    {
                        benefits: "11GB",
                        price: 2500,
                        duration: "30 days"
                    },
                    {
                        benefits: "12GB",
                        price: 3000,
                        duration: "30 days"
                    },
                    {
                        benefits: "18.5GB",
                        price: 4000,
                        duration: "30 days"
                    },
                    {
                        benefits: "24GB",
                        price: 5000,
                        duration: "30 days"
                    },
                    {
                        benefits: "35GB",
                        price: 7000,
                        duration: "30 days"
                    },
                    {
                        benefits: "50GB",
                        price: 10000,
                        duration: "30 days"
                    },
                    {
                        benefits: "80GB",
                        price: 15000,
                        duration: "30 days"
                    },
                    {
                        benefits: "125GB",
                        price: 20000,
                        duration: "30 days"
                    }
                ]
            },
            {
                packageName: "Quarterly",
                dataOptions: [
                    {
                        benefits: "225GB",
                        price: 30000,
                        duration: "60 days"
                    },
                    {
                        benefits: "75GB",
                        price: 25000,
                        duration: "90 days"
                    },
                    {
                        benefits: "425GB",
                        price: 50000,
                        duration: "90 days"
                    }
                ]
            }
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