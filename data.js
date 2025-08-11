const gamesData = {
    "PUBG": {
        title: "PUBG Mobile",
        background: "./Games/pubg/cover.jpg",
        image: "./Games/pubg/photo.png",
        buyCoins: [
            { name: "60 UC", price: "40 EGP", image: "./Games/pubg/coins_.png" },
            { name: "325 UC", price: "235 EGP", image: "./Games/pubg/coins_.png" },
            { name: "660 UC", price: "465 EGP", image: "./Games/pubg/coins_.png" },
            { name: "1800 UC", price: "1,150 EGP", image: "./Games/pubg/coins_.png" },
            { name: "3850 UC", price: "2,280 EGP", image: "./Games/pubg/coins_.png" },
            { name: "8100 UC", price: "4,570 EGP", image: "./Games/pubg/coins_.png" }
        ],
        specialOffers: [
            { name: "Elite Pass", price: "$9.99", image: "./Games/pubg/pubg-elitepass.png" },
            { name: "Royal Pass", price: "$24.99", image: "./Games/pubg/pubg-royalpass.png" }
        ]
    },
    "FORTNITE": {
    title: "Fortnite",
    background: "./Games/fortnite/cover.jpg",
    image: "./Games/fortnite/photo.jpg",
    buyCoins: [
        { name: "1000 V-Bucks", price: "380 EGP", image: "./Games/fortnite/coins.png" },
        { name: "2800 V-Bucks", price: "810 EGP", image: "./Games/fortnite/coins.png" },
        { name: "5000 V-Bucks", price: "1300 EGP", image: "./Games/fortnite/coins.png" },
        { name: "13,500 V-Bucks", price: "2900 EGP", image: "./Games/fortnite/coins.png" }
    ],
    specialOffers: [
        { name: "Battle Pass", price: "$9.50", image: "./Games/fortnite/coins_.png" },
        { name: "Crew Pack", price: "$11.99", image: "./Games/fortnite/coins_.png" }
    ]
    },
    "XBOX": {
        title: "Xbox Live",
        background: "./Games/xbox/cover.jpg",
        image: "./Games/xbox/photo.jpg",
        buyCoins: [
            { name: "10 USD Gift Card", price: "520 EGP", image: "./Games/xbox/10.png" },
            { name: "15 USD Gift Card", price: "770 EGP", image: "./Games/xbox/15.png" },
            { name: "20 USD Gift Card", price: "1020 EGP", image: "./Games/xbox/20.png" },
            { name: "25 USD Gift Card", price: "1270 EGP", image: "./Games/xbox/25.png" },
            { name: "50 USD Gift Card", price: "2520 EGP", image: "./Games/xbox/50.png" },
            { name: "100 USD Gift Card", price: "5020 EGP", image: "./Games/xbox/100.png" }
        ],
        specialOffers: [
            { name: "1 Month Membership", price: "520 EGP", image: "./Games/xbox/coins_.png" },
            { name: "3 Months Membership", price: "3020 EGP", image: "./Games/xbox/coins_.png" },
            { name: "2 Months Membership", price: "1270 EGP", image: "./Games/xbox/coins_.png" },
        ]
    },
    "EAFC": {
        title: "EA Sports FC™ Mobile",
        background: "./Games/eafc/cover.jpg",
        image: "./Games/eafc/photo.jpg",
        buyCoins: [
            { name: "40 FC Points", price: "EGP19.99", image: "./Games/eafc/coins fifa.png" },
            { name: "100 FC Points", price: "EGP49.99", image: "./Games/eafc/coins fifa.png" },
            { name: "520 FC Points", price: "EGP249.99", image: "./Games/eafc/coins fifa.png" },
            { name: "1070 FC Points", price: "EGP499.99", image: "./Games/eafc/coins fifa.png" },
            { name: "2200 FC Points", price: "EGP999.99", image: "./Games/eafc/coins fifa.png" },
            { name: "39 Silver", price: "EGP19.99", image: "./Games/eafc/coins silver.png" },
            { name: "99 Silver", price: "EGP49.99", image: "./Games/eafc/coins silver.png" },
            { name: "499 Silver", price: "EGP249.99", image: "./Games/eafc/coins silver.png" },
            { name: "999 Silver", price: "EGP499.99", image: "./Games/eafc/coins silver.png" },
            { name: "1999 Silver", price: "EGP999.99", image: "./Games/eafc/coins silver.png" }
        ],
        specialOffers: []
    },
    "PES": {
        title: "eFootball",
        background: "./Games/pes/cover.jpg",
        image: "./Games/pes/photo.jpg",
        buyCoins: [
            { name: "130 Coins", price: "90 EGP", image: "./Games/pes/coins.png" },
            { name: "300 Coins", price: "180 EGP", image: "./Games/pes/coins.png" },
            { name: "750 Coins", price: "EGP349.99", image: "./Games/pes/coins.png" },
            { name: "1,040 Coins", price: "EGP479.99", image: "./Games/pes/coins.png" },
            { name: "2,130 Coins", price: "EGP949.99", image: "./Games/pes/coins.png" },
            { name: "3,250 Coins", price: "EGP1,399.99", image: "./Games/pes/coins.png" },
            { name: "5,700 Coins", price: "EGP2,399.99", image: "./Games/pes/coins.png" },
            { name: "12,800 Coins", price: "EGP5,099.99", image: "./Games/pes/coins.png" }
        ],
        specialOffers: [
            { name: "Starter Set 1 (50 Coins + DMF 83)", price: "50 EGP", image: "./Games/pes/coins_.png" },
            { name: "Starter Set 2 (100 Coins + CF 83)", price: "125 EGP", image: "./Games/pes/coins_.png" }
        ]
    },
    "MOBILE_LEGENDS": {
        title: "Mobile Legends",
        background: "./Games/mobile_legends/cover.jpg",
        image: "./Games/mobile_legends/photo.jpg",
        buyCoins: [
            { name: "22 Diamonds", price: "40 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "11 Diamonds", price: "20 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "86 Diamonds", price: "70 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "172 Diamonds", price: "120 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "257 Diamonds", price: "175 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "343 Diamonds", price: "235 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "429 Diamonds", price: "300 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "514 Diamonds", price: "355 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "600 Diamonds", price: "420 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "706 Diamonds", price: "470 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "878 Diamonds", price: "590 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "963 Diamonds", price: "640 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "1135 Diamonds", price: "755 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "1220 Diamonds", price: "875 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "1412 Diamonds", price: "930 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "1584 Diamonds", price: "1070 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "2195 Diamonds", price: "1395 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "3073 Diamonds", price: "1970 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "3688 Diamonds", price: "2300 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "5532 Diamonds", price: "3470 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "6238 Diamonds", price: "3920 EGP", image: "./Games/mobile_legends/coins_.png" },
            { name: "8433 Diamonds", price: "5295 EGP", image: "./Games/mobile_legends/coins_.png" }
        ],
        specialOffers: [
            { name: "Weekly Pass", price: "75 EGP", image: "./Games/mobile_legends/weekly pass_.png" }
        ]
    },
    "ROBLOX": {
        title: "Roblox",
        background: "./Games/roblox/cover_.jpg",
        image: "./Games/roblox/photo.jpg",
        buyCoins: [
            { name: "40 Robux", price: "50 EGP", image: "./Games/roblox/coins.png" },
            { name: "80 Robux", price: "75 EGP", image: "./Games/roblox/coins.png" },
            { name: "400 Robux", price: "280 EGP", image: "./Games/roblox/coins.png" },
            { name: "800 Robux", price: "500 EGP", image: "./Games/roblox/coins.png" },
            { name: "1700 Robux", price: "920 EGP", image: "./Games/roblox/coins.png" },
            { name: "4500 Robux", price: "2520 EGP", image: "./Games/roblox/coins.png" },
            { name: "10,000 Robux", price: "4615 EGP", image: "./Games/roblox/coins.png" },
            { name: "22,500 Robux", price: "9500 EGP", image: "./Games/roblox/coins.png" }
        ],
        specialOffers: []
    },
    "YALLA_LUDO": {
        title: "Yalla Ludo",
        background: "./Games/yalla_ludo/cover_.jpg",
        image: "./Games/yalla_ludo/photo.png",
        buyCoins: [
            { name: "68,500 Gold", price: "130 EGP", image: "./Games/yalla_ludo/coins gold.png" },
            { name: "223,700 Gold", price: "270 EGP", image: "./Games/yalla_ludo/coins gold.png" },
            { name: "1,463,320 Gold", price: "495 EGP", image: "./Games/yalla_ludo/coins gold.png" },
            { name: "1,687,020 Gold", price: "735 EGP", image: "./Games/yalla_ludo/coins gold.png" },
            { name: "3,666,470 Gold", price: "1200 EGP", image: "./Games/yalla_ludo/coins gold.png" },
            { name: "9,973,990 Gold", price: "2390 EGP", image: "./Games/yalla_ludo/coins gold.png" },
            { name: "25,236,460 Gold", price: "4620 EGP", image: "./Games/yalla_ludo/coins gold.png" },
            { name: "830 Diamonds", price: "130 EGP", image: "./Games/yalla_ludo/coins diamond_.png" },
            { name: "2320 Diamonds", price: "270 EGP", image: "./Games/yalla_ludo/coins diamond_.png" },
            { name: "5150 Diamonds", price: "495 EGP", image: "./Games/yalla_ludo/coins diamond_.png" },
            { name: "7470 Diamonds", price: "735 EGP", image: "./Games/yalla_ludo/coins diamond_.png" },
            { name: "13,580 Diamonds", price: "1200 EGP", image: "./Games/yalla_ludo/coins diamond_.png" },
            { name: "27,640 Diamonds", price: "2390 EGP", image: "./Games/yalla_ludo/coins diamond_.png" },
            { name: "55,800 Diamonds", price: "4620 EGP", image: "./Games/yalla_ludo/coins diamond_.png" }
        ],
        specialOffers: []
    },
    "FREE_FIRE": {
        title: "Free Fire",
        background: "./Games/free fire/cover.jpg",
        image: "./Games/free fire/photo.jpg",
        buyCoins: [
            { name: "110 Diamonds", price: "50 EGP", image: "./Games/free fire/coins.png" },
            { name: "231 Diamonds", price: "100 EGP", image: "./Games/free fire/coins.png" },
            { name: "565 Diamonds", price: "250 EGP", image: "./Games/free fire/coins.png" },
            { name: "1288 Diamonds", price: "500 EGP", image: "./Games/free fire/coins.png" }
        ],
        specialOffers: []
    },
    "PLAYSTATION": {
        title: "PlayStation Card US (uae store)",
        background: "./Games/playstation/cover.jpg",
        image: "./Games/playstation/photo.jpg",
        buyCoins: [
            { name: "PSN Card 10 USD", price: "EGP478.80", image: "./Games/playstation/10.png" },
            { name: "PSN Card 25 USD", price: "EGP1,197.00", image: "./Games/playstation/25.png" },
            { name: "PSN Card 50 USD", price: "EGP2,394.00", image: "./Games/playstation/50.png" },
            { name: "PSN Card 75 USD", price: "EGP3,591.00", image: "./Games/playstation/75.png" },
            { name: "PSN Card 100 USD", price: "EGP4,788.00", image: "./Games/playstation/100.png" }
        ],
        specialOffers: []
    }
};