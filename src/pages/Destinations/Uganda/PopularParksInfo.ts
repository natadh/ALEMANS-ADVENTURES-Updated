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

export const ugandaPopularParksData: ParkSection[] = [
    {
        id: "bwindi",
        image: "/images/safaris/uganda/bwindi/forest.jpg",
        gallery: [
            "/images/safaris/uganda/bwindi/tracking.jpg",
            "/images/safaris/uganda/bwindi/gorilla1.jpg"
        ],
        header: "Bwindi Impenetrable National Park",
        content: `Bwindi Impenetrable National Park, located in south-western Uganda on the edge of the Rift Valley, is one of Africa's most ancient and biologically diverse rainforests. Dating back over 25,000 years, this mist-covered jungle is home to an incredible 400 plant species and provides refuge to some of the world's rarest wildlife. Most famously, Bwindi protects approximately 459 mountain gorillas—almost half of the world's remaining population. This "impenetrable forest" is one of the best places on earth to experience gorilla trekking, offering visitors the chance to come face-to-face with these majestic primates in their natural habitat.`,
        subsections: [
            {
                subheader: "A Pioneering Gorilla Tourism Destination",
                content: "The Mubare gorilla group was the first to be habituated for tourism in Uganda in April 1993, opening the door to sustainable gorilla trekking experiences. Today, Bwindi boasts 25 habituated gorilla groups, with nine available for tourism and one dedicated to research."
            },
            {
                subheader: "A Land of Rivers and Ridges",
                content: "Bwindi is spread across a landscape of steep ridges and deep valleys, forming the watershed for five major rivers, which flow into Lake Edward. This diverse terrain enhances the park's rich ecosystems, supporting a wide array of flora and fauna."
            },
            {
                subheader: "A Wildlife Haven Beyond Gorillas",
                content: "While gorillas are the main attraction, Bwindi also shelters 120 species of mammals, including chimpanzees, baboons, elephants, and forest antelopes. Over 350 bird species feature 23 Albertine Rift endemics such as the African green broadbill and Shelley's crimsonwing. The park is home to 200+ species of butterflies, including eight Albertine Rift endemics, along with a variety of reptiles and amphibians."
            },
            {
                subheader: "Cultural Encounters in Buhoma & Nkuringo",
                content: "The neighboring towns of Buhoma and Nkuringo provide an immersive cultural experience, offering visitors a chance to interact with the Bakiga people, known for their rich traditions and storytelling, and the Batwa (Pygmies), the forest's original inhabitants, who share their hunter-gatherer heritage through performances, workshops, and village walks. These towns also feature a range of accommodations, from luxury lodges to budget-friendly bandas and campsites, as well as restaurants, craft markets, and guiding services."
            }
        ]
    },
    {
        id: "kibale",
        image: "/images/safaris/uganda/kibale/chimps.jpg",
        gallery: [
        ],
        header: "Kibale Forest National Park",
        content: `Kibale National Park is renowned for its extraordinary primate diversity, and the Kanyanchu Primate Walk stands as the park's flagship experience. This immersive trek offers visitors a rare chance to encounter 13 different primate species, with diurnal monkeys such as red colobus, black-and-white colobus, L'Hoest's monkey, and grey-cheeked mangabey frequently spotted in the forest canopy. However, the undisputed highlight of this walk is the Kibale chimpanzees—one of Uganda's greatest wildlife spectacles.`,
        subsections: [
            {
                subheader: "Guided Chimpanzee Tracking Walks",
                content: "Since 1993, the Kanyanchu chimpanzee community has been intensively monitored and habituated to human presence, significantly improving the chances of sightings. With a sighting success rate of over 90%, visitors are almost guaranteed an unforgettable encounter. Guided chimpanzee tracking walks are conducted daily at 8:00 AM, 11:00 AM, and 2:00 PM, starting from the Kanyanchu Visitor Centre. These treks typically last between two to five hours. Upon finding the chimpanzees, visitors are allowed one hour in their presence to observe their social interactions, playfulness, and feeding habits."
            },
            {
                subheader: "Kibale's Remarkable Biodiversity",
                content: "Beyond its renowned primates, Kibale National Park boasts an astonishing biodiversity. The park is home to over 120 other mammal species, including olive baboons, forest elephants, bush pigs, duikers, and rare antelope species. Bird enthusiasts will be equally delighted, as Kibale shelters approximately 370 bird species, with 23 Albertine Rift endemics such as Nahan's francolin, Cassin's spinetail, Blue-headed bee-eater, and Lowland masked apalis."
            },
            {
                subheader: "Kibale's Thriving Chimpanzee Population",
                content: "Kibale supports one of the largest populations of wild chimpanzees in Uganda, estimated at over 1,500 individuals, distributed across at least 12 distinct communities. Four of these communities have been habituated for tourism and research, with the Kanyantale chimpanzee community being the most prominent for visitor tracking. This group has been open to tourists daily since 1993, making it one of the longest-running chimpanzee tracking programs in the world."
            }
        ]
    },
    {
        id: "queen-elizabeth",
        image: "/images/safaris/uganda/queen/mweya.jpg",
        gallery: [
        ],
        header: "Queen Elizabeth National Park",
        content: `Queen Elizabeth National Park is Uganda's most popular and biodiverse safari destination, offering breathtaking landscapes, abundant wildlife, and rich cultural heritage. Straddling the equator, the park features monuments marking the exact spot where it crosses latitude 00. Originally founded as Kazinga National Park in 1952, it was renamed in 1954 to commemorate a visit by Queen Elizabeth II of England. Today, it stands as one of Africa's greatest wildlife havens, home to over 95 mammal species and an astonishing 600+ bird species.`,
        subsections: [
            {
                subheader: "A Landscape of Stunning Diversity",
                content: "Set against the majestic backdrop of the Rwenzori Mountains, the park boasts an incredible variety of ecosystems, including vast savannas teeming with classic big game, lush, humid forests harboring primates like chimpanzees, sparkling lakes and the Kazinga Channel, bustling with hippos, buffaloes, and elephants, and fertile wetlands, a sanctuary for migratory birds and other aquatic life."
            },
            {
                subheader: "Wildlife Encounters Like No Other",
                content: "Queen Elizabeth National Park offers some of the best game viewing in Uganda. The park is one of the few places in the world where lions climb trees, particularly in Ishasha, where they perch in fig trees, waiting to ambush unsuspecting Uganda kobs. Notable wildlife includes elephants, buffaloes, hippos, Uganda kobs, waterbucks, lions, leopards, spotted hyenas, side-striped jackals, chimpanzees, black-and-white colobus monkeys, vervet monkeys, olive baboons, and over 600 bird species."
            },
            {
                subheader: "The Kazinga Channel: A Wildlife Spectacle",
                content: "One of the park's most iconic attractions, the Kazinga Channel, connects Lake Edward and Lake George. This 40km-long waterway is a magnet for wildlife, where visitors can witness hundreds of hippos basking in the waters, massive Nile crocodiles lurking on the shores, herds of elephants and buffaloes quenching their thirst, and scores of water birds, including pink-backed pelicans and saddle-billed storks."
            },
            {
                subheader: "The Ishasha Sector: Home of the Tree-Climbing Lions",
                content: "While lions are usually found on the ground, the Ishasha Sector of Queen Elizabeth is famous for its tree-climbing lions. These unique predators spend their days lounging on fig trees, scanning the vast savanna plains for prey. This behavior is rare globally, making Ishasha a must-visit for safari enthusiasts."
            }
        ]
    },
    {
        id: "murchison-falls",
        image: "/images/safaris/uganda/murchison/falls.jpg",
        gallery: [
        ],
        header: "Murchison Falls National Park",
        content: `Murchison Falls National Park is Uganda's oldest and largest conservation area, covering vast expanses of savanna, woodland, and riverine forests. Originally gazetted as a game reserve in 1926, the park was officially designated as one of Uganda's first national parks in 1952. It lies at the northern end of the Albertine Rift Valley, where the Bunyoro escarpment descends into rolling, palm-dotted plains, offering one of the most dramatic landscapes in East Africa.`,
        subsections: [
            {
                subheader: "The Iconic Murchison Falls",
                content: "At the heart of the park is Murchison Falls, one of Africa's most powerful waterfalls. Here, the mighty Victoria Nile is forced through a narrow 8-meter-wide gorge, before plunging 45 meters into the Devil's Cauldron below, sending up a thunderous roar and a permanent rainbow mist. This breathtaking natural wonder marks the final act in an 80km stretch of rapids, after which the river calms into a broad, tranquil flow as it meanders toward Lake Albert."
            },
            {
                subheader: "Remarkable Wildlife",
                content: "Murchison Falls National Park is home to 144 mammal species, 556 bird species, 51 reptiles, and 51 amphibians. Key wildlife highlights include over 900 African elephants, thriving giraffe populations (historically exclusive to the northern sector), over 10,000 buffaloes, 35,000 Uganda kobs, and numerous Nile crocodiles and hippos along the riverbanks, especially near the Albert Delta."
            },
            {
                subheader: "A Birdwatcher's Paradise",
                content: "With over 556 recorded bird species, Murchison Falls is a must-visit destination for bird enthusiasts. The shoebill stork, one of Africa's most sought-after birds, is commonly spotted along the Albert Delta. Other notable birds include white-crested turaco, red-winged grey warbler, African fish eagle, Goliath heron, and the saddle-billed stork."
            }
        ]
    },
    {
        id: "lake-mburo",
        image: "/images/safaris/uganda/semuliki/3.jpg",
        gallery: [
        ],
        header: "Lake Mburo National Park",
        content: `Lake Mburo National Park may be Uganda's smallest savanna park, but it is rich in biodiversity, scenic beauty, and cultural significance. Conveniently located near the highway linking Kampala to western Uganda, the park offers an accessible yet immersive safari experience. Despite its size, wetlands cover 20% of the park's surface, forming part of a 50km-long wetland system connected by swamps and five lakes within the park's borders.`,
        subsections: [
            {
                subheader: "A Park with a Resilient Past",
                content: "Lake Mburo National Park has faced several challenges throughout its history, with wildlife being nearly wiped out multiple times due to attempts to eliminate tsetse flies, conversion of land into ranches, and subsistence poaching. However, conservation efforts have restored the park, ensuring its survival. Today, 20% of the park's entrance fees are reinvested into local community projects, funding schools, health clinics, and infrastructure development."
            },
            {
                subheader: "A Haven for Wildlife and Birds",
                content: "Lake Mburo's mosaic of woodlands, savannas, lakes, and rocky outcrops provides a unique habitat for wildlife. Key species include zebras (one of Uganda's best places to see them), impalas (Uganda's only population), elands (Africa's largest antelope), buffaloes, Defassa waterbucks, reedbucks, hippos, crocodiles, leopards, hyenas, bushpigs, warthogs, and topis. The park is home to over 315 bird species."
            },
            {
                subheader: "A Landscape Shaped by Time",
                content: "Unlike Uganda's other savanna parks, Lake Mburo lacks elephants, allowing woodlands to thrive. The park features expansive savanna dotted with rocky ridges and forested gorges in the west, lush riparian woodlands along the lakes and rivers, and patches of papyrus swamp, providing habitat for wetland species."
            }
        ]
    },
    {
        id: "kidepo-valley",
        image: "/images/safaris/uganda/kidepo/1.jpg",
        gallery: [
            "/images/safaris/uganda/kidepo/2.jpg"
        ],
        header: "Kidepo Valley National Park",
        content: `Kidepo Valley National Park is Uganda's most remote and least explored national park, yet it is widely regarded as one of Africa's most breathtaking wilderness areas. Located in the semi-arid valleys of Karamoja, the park borders South Sudan to the northwest and Kenya just 5km to the east, sitting approximately 700km from Kampala. First gazetted as a national park in 1962, Kidepo is a true safari gem, boasting an incredible variety of big game, unique landscapes, and rich birdlife. It is home to over 77 mammal species and an impressive 476 bird species.`,
        subsections: [
            {
                subheader: "A Landscape of Untamed Beauty",
                content: "From Apoka, at the heart of the park, the vast golden savanna extends far beyond the protected area, framed by distant mountain ranges that dominate the horizon. The park's two main rivers, Kidepo and Narus, dry up during the harsh dry season, leaving behind scattered pools that become lifelines for wildlife. During the dry months, the Narus Valley is the park's prime game-viewing area, attracting large concentrations of lions, buffaloes (10,000 to 15,000 individuals), elephants (650 to 1,000 today, up from just 200 in the 1990s), zebras, hartebeests, and many antelope species."
            },
            {
                subheader: "Birdwatching in Kidepo: A Paradise for Ornithologists",
                content: "With a bird checklist of over 476 species, Kidepo is a dream destination for birdwatchers, featuring several species not found in any other Ugandan park. Notable birds include ostriches (the only place in Uganda where they roam freely), secretary birds, northern carmine bee-eaters, little green bee-eaters, and Abyssinian scimitarbill."
            },
            {
                subheader: "A Unique Cultural Experience",
                content: "Beyond its natural wonders, Kidepo is home to two fascinating indigenous communities: the Karamojong, a semi-nomadic pastoralist group culturally similar to the Maasai of Kenya, known for their cattle-keeping traditions and warrior heritage, and the Ik people, a small, hunter-gatherer tribe living in the mountains bordering Kenya, whose traditional way of life is under threat. Visitors can interact with these communities, gaining insight into their traditions, storytelling, and daily survival techniques."
            }
        ]
    }
];