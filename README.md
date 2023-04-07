
//API KEY : 9529e22fdc814764bec8ead681fc3c12
//https://newsapi.org/v2/everything?q=apple&from=2023-04-05&to=2023-04-05&sortBy=popularity&apiKey=9529e22fdc814764bec8ead681fc3c12
//https://newsapi.org/v2/top-headlines?country=in&category=sports&sortBy=popularity&apiKey=9529e22fdc814764bec8ead681fc3c12
//business 
//entertainment
//sports
//general
//health
//technology
//science
const articles = [


      {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "tmohamed@insider.com (Theron Mohamed)",
        "title": "'Big Short' investor Michael Burry says Jerome Powell should butt out and let markets set asset prices",
        "description": "Michael Burry called for Fed Chair Jerome Powell to stop sharing his thoughts and interfering in markets, suggesting that distorts asset prices.",
        "url": "https://markets.businessinsider.com/news/stocks/big-short-michael-burry-fed-powell-asset-prices-interest-rates-2023-3",
        "urlToImage": "https://i.insider.com/64109b5f9aa2e6001956d8d4?width=1200&format=jpeg",
        "publishedAt": "2023-03-27T15:16:56Z",
        "content": "Jerome Powell should stop sharing his views and interfering in markets, Michael Burry has said.\r\n\"Powell should have just said 'I don't know,'\" the investor of \"The Big Short\" fame tweeted on Saturda… [+2983 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Carla Mozée",
        "title": "Block gave a 'robust' response to brutal short-seller report, and shares of the CashApp parent are looking at 40% upside, Bank of America says",
        "description": "Block stock could climb to $96 on fundamentals as well as the Cash App parent's response to Hindenburg Research's report, says BofA.",
        "url": "https://markets.businessinsider.com/news/stocks/cash-app-block-stock-price-outlook-short-seller-hindenburg-report-2023-3",
        "urlToImage": "https://i.insider.com/5df2ac22fd9db217471a1a66?width=1200&format=jpeg",
        "publishedAt": "2023-03-31T17:31:19Z",
        "content": "Square\r\n<ul>\n<li>Shares of Block could rise 40% from recent levels, Bank of America said Friday. </li>\n<li>Block gave a \"robust\" response to Hindenburg Research's report raising fraud concerns at the… [+2753 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Phil Rosen",
        "title": "US stocks climb on cooler inflation data as the S&P 500 heads for a winning quarter",
        "description": "The Fed's preferred inflation gauge came in cooler than expected on Friday, giving investors reason to cheer at the end of a chaotic first quarter.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-economy-winning-quarter-fed-rate-hikes-2023-3",
        "urlToImage": "https://i.insider.com/63b4716edb9ee80019386a2e?width=1200&format=jpeg",
        "publishedAt": "2023-03-31T13:36:40Z",
        "content": "Traders work on the floor at the New York Stock Exchange (NYSE) in New York, U.S., March 2, 2020.Brendan McDermid/Reuters\r\n<ul>\n<li>US stocks climbed on Friday, with the S&P 500 and Nasdaq on pace fo… [+2881 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "mfox@businessinsider.com (Matthew Fox)",
        "title": "The SEC's recent moves against Coinbase and celebrity endorsers show the agency is getting serious about clamping down on crypto",
        "description": "The SEC said it's \"neutral about the technologies at issue\" but added it's \"anything but neutral when it comes to investor protection.\"",
        "url": "https://markets.businessinsider.com/news/currencies/crypto-industry-sec-investigations-coinbase-lindsay-lohan-jake-paul-charges-2023-3",
        "urlToImage": "https://i.insider.com/641c5a87b7834100191aedd4?width=1200&format=jpeg",
        "publishedAt": "2023-03-23T15:21:53Z",
        "content": "A flurry of action in a single day this week show the Securities and Exchange Commission is getting serious about regulating the cryptocurrency industry. \r\nThe SEC charged Justin Son of Tron, BitTorr… [+3248 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIYphotography"
        },
        "author": "Dunja Djudjic",
        "title": "Photographer builds 11-foot electronic waste skull to show Bitcoin’s impact on climate change",
        "description": "Photographer and activist Benjamin (Ben) Von Wong is well known for his work that raises awareness of various environmental and sociological issues. In his latest project Skull of Satoshi, Ben points out to the massive impact Bitcoin has had on climate change…",
        "url": "https://www.diyphotography.net/skull-of-satoshi-benjamin-von-wong-bitcoin/",
        "urlToImage": "https://www.diyphotography.net/wp-content/uploads/2023/03/VonWong_SkullOfSatoshi_Greenpeace_Bitcoin_Horizontal-5-1920x1280.jpg",
        "publishedAt": "2023-03-23T14:10:54Z",
        "content": "Photographer and activist Benjamin (Ben) Von Wong is well known for his work that raises awareness of various environmental and sociological issues. In his latest project Skull of Satoshi, Ben points… [+4627 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MakeUseOf"
        },
        "author": "Katie Rees",
        "title": "$1.5 Million in Crypto Stolen via General Bytes Bitcoin ATM Hack",
        "description": "Hackers have stolen over $1.5 million in crypto from General Bytes ATMs.",
        "url": "https://www.makeuseof.com/1-5-million-in-crypto-stolen-general-bytes-bitcoin-atm-hack/",
        "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/yellow-bitcoin-atm.jpg",
        "publishedAt": "2023-03-21T09:12:22Z",
        "content": "Over $1.5 million in crypto has been stolen via a General Bytes Bitcoin ATM exploit. Hackers abused a zero-day flaw in order to steal the funds. \r\n General Bytes Bitcoin ATMs Have Been Hacked \r\nOn Ma… [+3094 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Space.com"
        },
        "author": "stingrayghost@gmail.com (Jeff Spry)",
        "title": "Launch of private moon rover this year will kick off lunar Bitcoin treasure hunt",
        "description": "LunarCrush plans to send a Bitcoin bounty to the moon aboard Lunar Outpost's MAPP rover in 2023.",
        "url": "https://www.space.com/bitcoin-treasure-hunt-moon-lunar-rover",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/kZhYcJ4CrE5eBgEk2Jt69D-1200-80.jpg",
        "publishedAt": "2023-04-03T13:00:49Z",
        "content": "Cryptocurrency is going to the moon.\r\nPartnering with the planetary mobility firm Lunar Outpost, the California-based social intelligence company LunarCrush plans to deliver a treasure chest of 62 Bi… [+3510 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iMore"
        },
        "author": "oliver@monkeymanmedia.com (Oliver Haslam)",
        "title": "Your Mac has had a hidden Bitcoin whitepaper since 2018",
        "description": "Every Mac with macOS Mojave or later installed also has a copy of the Bitcoin whitepaper and nobody knows why.",
        "url": "https://www.imore.com/mac/your-mac-has-had-a-hidden-bitcoin-whitepaper-since-2018",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/mseVjihpSxetGKA9824BeH-1200-80.png",
        "publishedAt": "2023-04-06T15:11:06Z",
        "content": "If you've used a Mac with macOS Mojave or later installed you've probably also used a Mac with the Bitcoin whitepaper on it as well.\r\nThat doesn't mean that you or the Mac's owner is a Bitcoin truthe… [+1644 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "Steve Goldstein",
        "title": ": Cathie Wood’s internet fund make its first Microsoft purchase",
        "description": "Cathie Wood on Monday bought a stock she doesn't trade very much -- Microsoft.",
        "url": "https://www.marketwatch.com/story/cathie-woods-internet-fund-make-its-first-microsoft-purchase-edafe7a",
        "urlToImage": "https://images.mktw.net/im-745473/social",
        "publishedAt": "2023-03-21T07:52:00Z",
        "content": "Cathie Wood on Monday bought a stock she doesnt trade very much Microsoft \r\n MSFT,\r\n -2.58%\r\n.The ARK Next Generation Internet ETF \r\n ARKW,\r\n -0.88%\r\nbought $11 million worth of Microsoft, selling th… [+720 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "PetaPixel"
        },
        "author": "Jeremy Gray",
        "title": "Von Wong’s Giant ‘Skull of Satoshi’ Aims to Expose Bitcoin’s Dangers",
        "description": "Benjamin Von Wong, acclaimed photographer, multimedia artist, and activist, built an 11-foot tall skull, the \"Skull of Satoshi,\" covered in electronic waste (E-waste) to \"expose Bitcoin's impact on climate change.\"\n[Read More]",
        "url": "https://petapixel.com/2023/03/23/von-wongs-giant-skull-of-satoshi-aims-to-expose-bitcoins-dangers/",
        "urlToImage": "https://petapixel.com/assets/uploads/2023/03/skull-of-satoshi-von-wong-featured.jpg",
        "publishedAt": "2023-03-23T16:20:11Z",
        "content": "Benjamin Von Wong, acclaimed photographer, multimedia artist, and activist, built an 11-foot tall skull, the “Skull of Satoshi,” covered in electronic waste (E-waste) to “expose Bitcoin’s impact on c… [+3386 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Theregister.com"
        },
        "author": "Jeff Burt",
        "title": "Attackers hit Bitcoin ATMs to steal $1.5 million in crypto cash",
        "description": "Terminal maker General Bytes shutters its cloud business after second breach in seven months\nUnidentified miscreants have siphoned cryptocurrency valued at more than $1.5 million from Bitcoin ATMs by exploiting an unknown flaw in digicash delivery systems.…<!…",
        "url": "https://www.theregister.com/2023/03/23/general_bytes_crypto_atm/",
        "urlToImage": "https://regmedia.co.uk/2019/10/21/shutterstock_bitcoin_atm.jpg",
        "publishedAt": "2023-03-23T09:02:06Z",
        "content": "Unidentified miscreants have siphoned cryptocurrency valued at more than $1.5 million from Bitcoin ATMs by exploiting an unknown flaw in digicash delivery systems.\r\nAccording to General Bytes, the ou… [+4494 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MakeUseOf"
        },
        "author": "David Lyangenda",
        "title": "8 Crowdfunding Platforms That Accept Crypto Payments",
        "description": "Many online platforms accept crypto as a payment method, but how about crowdfunding sites? Here are eight crowdfunding platforms that accept crypto.",
        "url": "https://www.makeuseof.com/crowdfunding-platforms-accept-crypto/",
        "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/hands-holding-various-cryptocurrency-coins.jpg",
        "publishedAt": "2023-03-31T12:30:17Z",
        "content": "Cryptocurrency has been gaining more and more popularity in recent years, not only as a form of investment but also as a means of payment for goods and services. Crowdfunding, on the other hand, has … [+10200 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MakeUseOf"
        },
        "author": "Oluwademilade Afolabi",
        "title": "What Is Double Spending in Blockchain and How Is It Prevented?",
        "description": "Double spending can erode all trust in a cryptocurrency, which is why so much effort has gone into making sure this type of fraud doesn't happen.",
        "url": "https://www.makeuseof.com/what-is-double-spending-in-blockchain-and-how-is-it-prevented/",
        "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/blockchain-1.jpg",
        "publishedAt": "2023-03-24T14:00:17Z",
        "content": "Cryptocurrency transactions are secure and trustworthy thanks to blockchain technology. However, as with most innovative systems, the blockchain has exploitable vulnerabilities, which can lead to dou… [+7645 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Tim Hardwick",
        "title": "Apple Has Included Bitcoin Whitepaper in Every Version of macOS Since 2018",
        "description": "In every copy of macOS that has shipped since 2018, Apple has included the original Bitcoin whitepaper by Satoshi Nakamoto. But why?\n\n\n\n\n\nThe baffling discovery (or rediscovery - see below) was recently made by developer and waxy.org writer Andy Baio, who stu…",
        "url": "https://www.macrumors.com/2023/04/06/macos-includes-bitcoin-whitepaper/",
        "urlToImage": "https://images.macrumors.com/t/20FlNNhHoggoDgosXqCzX6i29Do=/1920x/article-new/2020/07/apple-bitcoin-hack.jpg",
        "publishedAt": "2023-04-06T09:38:50Z",
        "content": "In every copy of macOS that has shipped since 2018, Apple has included the original Bitcoin whitepaper by Satoshi Nakamoto, but no-one seems to know why. \r\nThe baffling discovery (or rediscovery - se… [+1880 chars]"
        }
    ];