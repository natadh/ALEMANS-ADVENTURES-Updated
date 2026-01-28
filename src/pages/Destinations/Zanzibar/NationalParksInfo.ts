export interface ParkSubsection {
    subheader: string;
    content?: string;
}

export interface ParkSection {
    id: string;
    header: string;
    image?: string;            
    gallery?: string[];
    content?: string;
    subsections: ParkSubsection[];
}

export const zanzibarNationalParksData: ParkSection[] = [
    {
        id: "bwindi-full",
        image: "/images/uganda/bwindi.jpg",
        gallery: [
            "/images/uganda/bwindi1.jpg",
            "/images/uganda/bwindi2.jpg",
            "/images/uganda/bwindi3.jpg"
        ],
        header: "Bwindi Impenetrable National Park",
        content: `Covering 128 sq km, Bwindi contains roughly half of the world's mountain gorilla population. The park has several habituated groups and it is the best place for gorilla trekking in Uganda. This biologically diverse region is home to further 120 mammals including several primates as well as elephants and antelopes. There are about 350 bird species including 23 Albertine Rift endemics. Bwindi Impenetrable National Park lies in southwestern Uganda on the edge of the Rift Valley. Its mist-covered hillsides are blanketed by one of Uganda's oldest and most biologically diverse rainforests, which dates back over 25,000 years and contains almost 400 species of plants. More famously, this "impenetrable forest" also protects an estimated 320 mountain gorillas – roughly half of the world's population, including several habituated groups, which can be tracked.`,
        subsections: [
            {
                subheader: "Wildlife and Biodiversity",
                content: "This biologically diverse region also provides shelter to a further 120 mammals, including several primate species such as baboons and chimpanzees, as well as elephants and antelopes. There are around 350 species of birds hosted in this forest, including 23 Albertine Rift endemics."
            },
            {
                subheader: "Accommodation and Cultural Experiences",
                content: "The neighboring towns of Buhoma and Nkuringo both have an impressive array of luxury lodges, rustic bandas and budget campsites, as well as restaurants, craft stalls and guiding services. Opportunities abound to discover the local Bakiga and Batwa Pygmy cultures through performances, workshops and village walks."
            },
            {
                subheader: "Park Sectors",
                content: "The park has four main sectors: Buhoma in the north, Ruhija in the east, Nkuringo in the southwest, and Rushaga located in the south. The rain forest is also a sanctuary for chimpanzees, forest elephants, and 350+ bird species."
            }
        ]
    },
    {
        id: "murchison-full",
        image: "/images/uganda/murchison.jpg",
        gallery: [
            "/images/uganda/murchison1.jpg",
            "/images/uganda/murchison2.jpg",
            "/images/uganda/murchison3.jpg"
        ],
        header: "Murchison Falls National Park",
        content: `Covering over 3480 sq km, Murchison Falls is not only the oldest but also the largest national park in Uganda. The park hosts 76 mammal species and 451 bird species. Murchison Falls National Park lies at the northern end of the Albertine Rift Valley, where the sweeping Bunyoro escarpment tumbles into vast, palm-dotted savanna. First gazetted as a game reserve in 1926, it is Uganda's largest and oldest conservation area, hosting 76 species of mammals and 451 birds.`,
        subsections: [
            {
                subheader: "The Magnificent Falls",
                content: "The park is bisected by the Victoria Nile, which plunges 45m over the remnant rift valley wall, creating the dramatic Murchison Falls, the centerpiece of the park and the final event in an 80km stretch of rapids. The mighty cascade drains the last of the river's energy, transforming it into a broad, placid stream that flows quietly across the rift valley floor into Lake Albert."
            },
            {
                subheader: "Wildlife Spectacles",
                content: "This stretch of river provides one of Uganda's most remarkable wildlife spectacles. Regular visitors to the riverbanks include elephants, giraffes and buffaloes; while hippos, Nile crocodiles and aquatic birds are permanent residents."
            }
        ]
    },
    {
        id: "queen-elizabeth-full",
        image: "/images/uganda/queen-elizabeth.jpg",
        gallery: [
            "/images/uganda/queen-elizabeth1.jpg",
            "/images/uganda/queen-elizabeth2.jpg",
            "/images/uganda/queen-elizabeth3.jpg"
        ],
        header: "Queen Elizabeth National Park",
        content: `Covering 1978 sq km, Queen Elizabeth National Park is the most visited national park. It hosts traditional big game plus 10 primates and over 600 species of birds. Queen Elizabeth National Park is understandably Uganda's most popular tourist destination. The park's diverse ecosystems, which include sprawling savanna, shady, humid forests, sparkling lakes and fertile wetlands, make it the ideal habitat for classic big game, ten primate species including chimpanzees and over 600 species of birds.`,
        subsections: [
            {
                subheader: "Scenic Beauty",
                content: "Set against the backdrop of the jagged Ruwenzori Mountains, the park's magnificent vistas include dozens of enormous craters carved dramatically into rolling green hills, panoramic views of the Kazinga Channel with its banks lined with hippos, buffalo and elephants, and the endless Ishasha plains, whose fig trees hide lions ready to pounce on herds of unsuspecting Uganda Cob."
            },
            {
                subheader: "Cultural Significance",
                content: "As well as its outstanding wildlife attractions, Queen Elizabeth National Park has a fascinating cultural history. There are many opportunities for visitors to meet the local communities and enjoy storytelling, dance, music and more. The gazettal of the park has ensured the conservation of its ecosystems, which in turn benefits the surrounding communities."
            }
        ]
    },
    {
        id: "kidepo-full",
        image: "/images/uganda/kidepo.jpg",
        gallery: [
            "/images/uganda/kidepo1.jpg",
            "/images/uganda/kidepo2.jpg",
            "/images/uganda/kidepo3.jpg"
        ],
        header: "Kidepo Valley National Park",
        content: `Covering 1442 sq km, Kidepo is Uganda's most isolated national park on the border with South Sudan and contiguous with the Kidepo Game Reserve. The remote park is home to plenty of big game and contains 77 mammal and 475 bird species. There is one lodge within the park, plus a camp and campsite. Kidepo Valley National Park lies in the rugged, semi arid valleys between Uganda's borders with Sudan and Kenya, some 700km from Kampala. Gazetted as a national park in 1962, it has a profusion of big game and hosts over 77 mammal species as well as around 475 bird species.`,
        subsections: [
            {
                subheader: "A Magnificent Wilderness",
                content: "Kidepo is Uganda's most isolated national park, but the few who make the long journey north through the wild frontier region of Karamoja would agree that it is also the most magnificent, for Kidepo ranks among Africa's finest wildernesses. From Apoka, in the heart of the park, a savannah landscape extends far beyond the gazetted area, towards horizons outlined by distant mountain ranges."
            },
            {
                subheader: "Prime Game Viewing",
                content: "During the dry season, the only permanent water in the park is found in wetlands and remnant pools in the broad Narus Valley near Apoka. These seasonal oases, combined with the open, savannah terrain, make the Narus Valley the park's prime game viewing location."
            }
        ]
    },
    {
        id: "mount-elgon",
        image: "/images/uganda/elgon.jpg",
        gallery: [
            "/images/uganda/elgon1.jpg",
            "/images/uganda/elgon2.jpg"
        ],
        header: "Mount Elgon National Park",
        content: `Close to the border with Kenya lies Mount Elgon National Park. Covering 1279 sq km, as its name suggests the park is dominated by Mount Elgon, an extinct volcanic mountain. The park protects some wildlife and 144 recorded bird species. Notable attractions in the park are Sipi Falls, Syisi Falls, and more. At 4,000km² Mt. Elgon has the largest volcanic base in the world. Located on the Uganda-Kenya border it is also the oldest and largest solitary, volcanic mountain in East Africa. Its vast form, 80km in diameter, rises more than 3,000m above the surrounding plains.`,
        subsections: [
            {
                subheader: "Wildlife and Flora",
                content: "The mountain's cool heights offer respite from the hot plains below, with the higher altitudes providing a refuge for flora and fauna. Mount Elgon National Park is home to over 300 species of birds, including the endangered Lammergeyer. Small antelopes, forest monkeys, elephants and buffalos also live on the mountainside."
            },
            {
                subheader: "Climbing Experience",
                content: "The higher slopes are protected by national parks in Uganda and Kenya, creating an extensive trans-boundary conservation area that has been declared a UNESCO Man & Biosphere Reserve. A climb on Mt. Elgon's deserted moorlands unveils a magnificent and uncluttered wilderness without the summit-oriented approach common to many mountains: the ultimate goal on reaching the top of Mt. Elgon is not the final ascent to the 4321m Wagagai Peak, but the descent into the vast 40km² caldera."
            }
        ]
    },
    {
        id: "kibale-full",
        image: "/images/uganda/kibale.jpg",
        gallery: [
            "/images/uganda/kibale1.jpg",
            "/images/uganda/kibale2.jpg",
            "/images/uganda/kibale3.jpg"
        ],
        header: "Kibale Forest National Park",
        content: `This tropical rain forest is home to 766 sq km. Adjoining Queen Elizabeth Park, this park contains about 70 mammals including 13 species of primates and 375 bird species. Kibale National Park contains one of the loveliest and most varied tracts of tropical forest in Uganda. Forest cover, interspersed with patches of grassland and swamp, dominates the northern and central parts of the park on an elevated plateau.`,
        subsections: [
            {
                subheader: "Primate Paradise",
                content: "The park is home to a total of 70 mammal species, most famously 13 species of primate including the chimpanzee. It also contains over 375 species of birds. Kibale adjoins Queen Elizabeth National Park to the south to create a 180km-long corridor for wildlife between Ishasha, the remote southern sector of Queen Elizabeth National Park, and Sebitoli in the north of Kibale National Park."
            },
            {
                subheader: "Exploration Opportunities",
                content: "The Kibale-Fort Portal area is one of Uganda's most rewarding destinations to explore."
            }
        ]
    },
    {
        id: "lake-mburo-full",
        image: "/images/uganda/lake-mburo.jpg",
        gallery: [
            "/images/uganda/lake-mburo1.jpg",
            "/images/uganda/lake-mburo2.jpg",
            "/images/uganda/lake-mburo3.jpg"
        ],
        header: "Lake Mburo National Park",
        content: `Covering 260 sq km, Lake Mburo National Park is the smallest of the savanna parks. It contains a good number of mammals and 350 bird species. Its broad section of plains hosts wild game including Zebras, impala, elands, buffaloes, oribi, Defassa waterbuck, topi and reedbuck as well as predators such as leopard and hyena. In the wetland part of the park, hippos and water animals can be seen in the park. Lake Mburo National Park (LMNP) is the smallest of Uganda's savannah national parks and is located in Kiruhura District in Western Uganda.`,
        subsections: [
            {
                subheader: "Location and Accessibility",
                content: "The park is situated about 30 kilometers by road, east of Mbarara, the largest city in the sub-region. This location is approximately 240 kilometers by road, west of Kampala, Uganda's capital and largest city. The coordinates of the park are: 00 36S, 30 57E (Latitude: 0.6000; Longitude: 30.9500)."
            },
            {
                subheader: "Unique Characteristics",
                content: "LMNP is home to 350 bird species as well as zebra, impala, eland, buffalo, oribi, defassa waterbuck, leopard, hippo, hyena, topi and reedbuck. Once continuous with the plains of Northern Tanzania, Lake Mburo National Park hosts diversity found nowhere else in Uganda. The Ruizi River feeds 14 lakes and wetlands that support abundant herds of antelope. Enchanting Acacia woodland is increasingly a major part of the landscape."
            },
            {
                subheader: "Cultural Integration",
                content: "Alongside all the wildlife, LMNP is home to the Ankole cattle cared for traditionally by the Bahima pastoralists. Magnificent herds graze peacefully alongside the wildlife. There are distinct dry and wet seasons that determine animal movements."
            }
        ]
    },
    {
        id: "semuliki",
        image: "/images/uganda/semuliki.jpg",
        gallery: [
            "/images/uganda/semuliki1.jpg",
            "/images/uganda/semuliki2.jpg"
        ],
        header: "Semuliki National Park",
        content: `A central African forest reserve rather than an East African one, Semuliki National Park is a unique forest covering 220 sq km. Notable attractions in the park include hotsprings. Semuliki National Park sprawls across the floor of the Semuliki Valley on the remote, western side of the Ruwenzori. The park is dominated by the easternmost extension of the great Ituri Forest of the Congo Basin. This is one of Africa's most ancient and bio-diverse forests; one of the few to survive the last ice age, 12-18,000 years ago.`,
        subsections: [
            {
                subheader: "Central African Character",
                content: "The Semuliki Valley contains numerous features associated with central rather than eastern Africa. Thatched huts are shaded by West African oil palms; the Semuliki River (which forms the international boundary) is a miniature version of the Congo River, the forest is home to numerous Central African wildlife species, and the local population include a Batwa pygmy community that originated from the Ituri. As a result, this park provides a taste of Central Africa without having to leave Uganda."
            },
            {
                subheader: "Ancient Geological Features",
                content: "While Semuliki's species have been accumulating for over 25,000 years, the park contains evidence of even older processes. Hot springs bubble up from the depths to demonstrate the powerful subterranean forces that have been shaping the rift valley during the last 14 million years."
            }
        ]
    },
    {
        id: "mgahinga",
        image: "/images/uganda/mgahinga.jpg",
        gallery: [
            "/images/uganda/mgahinga1.jpg",
            "/images/uganda/mgahinga2.jpg"
        ],
        header: "Mgahinga Gorilla National Park",
        content: `This is Uganda's smallest national park covering 33.7 sq km. This visually stunning park is the lesser known of Uganda's two mountain gorilla parks. It is also home to the golden monkey and golden monkey tracking is one of the popular activities that bring tourists to the park. Mgahinga Gorilla National Park sits high in the clouds, at an altitude of between 2,227m and 4,127m. As its name suggests, it was created to protect the rare mountain gorillas that inhabit its dense forests, and it is also an important habitat for the endangered golden monkey.`,
        subsections: [
            {
                subheader: "Cultural Significance",
                content: "As well as being important for wildlife, the park also has a huge cultural significance,in particular for the indigenous Batwa pygmies. This tribe of hunter-gatherers was the forest's \"first people\", and their ancient knowledge of its secrets remains unrivalled."
            },
            {    
                subheader: "The Virunga Volcanoes",
                content: "Mgahinga's most striking features are its three conical, extinct volcanoes, part of the spectacular Virunga Range that lies along the border region of Uganda, Congo and Rwanda. Mgahinga forms part of the much larger Virunga Conservation area that includes adjacent parks in these countries. The volcanoes' slopes contain various ecosystems and are biologically diverse, and their peaks provide a striking backdrop to this gorgeous scenery."
            }
        ]
    },
    {
        id: "rwenzori",
        image: "/images/uganda/rwenzori.jpg",
        gallery: [
            "/images/uganda/rwenzori1.jpg",
            "/images/uganda/rwenzori2.jpg"
        ],
        header: "Rwenzori Mountains National Park",
        content: `Rwenzori Mountains National Park is a forest reserve in western Uganda, covering 79,800 hectares. It is home to over 130 species of birds and 13 species of mammals, including the red colobus monkey and the black-and-white colobus monkey. The park is also known for its tree-climbing chimpanzees and its diverse ecosystems.`,
        subsections: [
            {
                subheader: "Chimpanzee Tracking",
                content: "This high altitude national park covers 1,000 sq km. The park protects the Rwenzori Mountain ranges, some 70 mammals and a recorded 217 bird species including 19 Albertine Rift Endemics as well as some of the world's rarest vegetation. The Ruwenzori's – the fabled Mountains of the Moon – lie in western Uganda along the Uganda-Congo border. The equatorial snow peaks include the third highest point in Africa, while the lower slopes are blanketed in moorland, bamboo and rich, moist montane forest."
            },
            {
                subheader: "Unique Flora",
                content: "Huge tree-heathers and colorful mosses are draped across the mountainside with giant lobelias and \"everlasting flowers\", creating an enchanting, fairytale scene."
            },
            {
                subheader:"Biodiversity and Hiking",
                content:"Ruwenzori Mountains National Park protects the highest parts of the 120km-long and 65km-wide Ruwenzori mountain range. The national park hosts 70 mammals and 217 bird species including 19 Albertine Rift endemics, as well as some of the rarest vegetation in the world. The Ruwenzori's are a world-class hiking and mountaineering destination. A nine- to twelve-day trek will get skilled climbers to the summit of Margherita – the highest peak – though shorter, non-technical treks are possible to scale the surrounding peaks."
            }
        ]
    }
];