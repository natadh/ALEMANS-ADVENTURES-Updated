export interface ParkSubsection {
    subheader: string;
    content?: string;
    table?: {
        area: string;
        altitude: string;
        rain: string;
        temperature: string;
    }[];
}

export interface ParkSection {
    id: string;
    header: string;
    image?: string;            
    gallery?: string[];
    content?: string;
    subsections: ParkSubsection[];
}

export const nationalParksData: ParkSection[] = [
    {
        id:"abardares",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Aberdare Ranges National Park",
        content: `The Aberdare Ranges lie at an altitude of about 2134-4268 meters and covering 767 sq Kms. It is home to the first tree hotel in Africa and harbors significant memories in world history. In 1952, Queen Elizabeth II learnt of accession to the British throne while she was a guest at the Treetop Lodge following the death of her father, King George VI. It is also at the nearby town of Nyeri that lays the remains of the tomb of Lord Baden Powel, the founder of the Worldwide Boy Scouts Movement.`,
        subsections: []
    },
    {
        id:"amboseli",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],       
        header: "Amboseli National Park",
        content: `This park is 392 sq kms and also referred to as the foot of Mount Kilimanjaro the highest standing mountain in the world at 5900 meters. The park is at an attitude of about 1200m – 1400m. The park is very famous in Kenya as it holds the biggest number of Elephants due to its swampy grasslands. The park is more open with no forests and thus easier to sport the wild animals including the Lions. During the dry season a captivating feature is the simmering dry lake bed where false mirages of populated horizons, interspersed with herds of zebra, vast herds of elephants, wildebeest, giraffe, impala and other many animals are a main attraction. The nomadic, richly decorated Maasai warriors who are deeply steeped in traditional culture entertain visitors with enchanting dances of ageless Africa.. The park is about 270 km south of Nairobi and about 4 hours drive.`,
        subsections: []
    },
    {
        id:"chulu",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],       
        header: "Chulu Hills",
        content: `The park has well over 500 species of birds and which include the ostrich and migratory kestrel. Some specific areas are ideal for walking safaris as there are many Nature trails and also the Chaimu volcanic craters. 

`,
        subsections: []
    },
    {
        id:"baringo",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Lake Baringo",
        content: `This is also one of the Great Rift Valley lakes. The waters are flesh due to the fact that the lake depends on rainfall and rivers. This has the largest bird’s concentration in Kenya recording over 600 species. There are the aquatic kinds of animals including Hippos and crocodiles. The lake is about 9 meters deep. The area has a lot of rock formation.`,
        subsections: []
    },
    {
        id:"bogoria",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Lake Bogoria",
        content: `This lake is 30 sq kms and is famous for Hot springs and geysers. It supports a lot of flamingos from Nakuru during migration. The water is warm due to the hot springs found inside the lake waters.`,
        subsections: []
    },
    {
        id:"magadi",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Lake Magadi",
        content: `This the most southern park in Kenya. It is rarely visited by tourist due to its remoteness and difficult to access. It’s a semi desert with more than 37 degrees centigrade temperatures. There is a series of hot springs, antelopes, flamingos and can be visited as a day trip from Nairobi.`,
        subsections: []
    },
    {
        id:"naivasha",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Lake Naivasha",
        content: `This is a fresh water lake. The lake is approximately 139 sq kms and it’s the highest of the rift valley lakes at1,884 m ( 6,180 ft).The lake has an average depth of 6m ( 20 ft ), with the deepest area being at crescent island at 30m (100ft). It is also home to a big number of about 400 bird species. The surrounding farms are the vineyard of Kenya and a lot of flower farming. There is a small beautiful crater lake to the western shores of the lake. The lake is very close to hells Gate Park which is the only park in Kenya whereby you can walk among the wild animals without to worry.
 `,
        subsections: []
    },
    {
        id:"nakuru",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Lake Nakuru",
        content: `Created in 1961 This Park covers some 200 sq kms. It is a shallow about 4 meters deep soda lake. It is commonly referred to as the words biggest birds spectacle for it holds some 2 million flamingos (both greater and lesser) all year round along with about 450 species of other birds. The park also holds thousands of other wildlife except the Elephants because of its closeness to Nakuru town and Kenya s 4 th biggest cities. This park has also the famous Rhino sanctuary (both Black and white) that holds about 60 animals.
 Pre- historic Museums around Nakuru include Kariandusi, Hyrax Hill, Olorgesailie.
`,
        subsections: []
    },
    {
        id:"elementaita",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Lake Elementaita",
        content: `Located 40 km from Nakuru town and about 100 km from Nairobi, this alkaline lake is 18 sq kms and lies on the eastern side of the great rift valley. Attractions here include: flamingoes, Great white pelicans, Crested grebe, Rothschild giraffe and aardvarks. `,
        subsections: []
    },
    {
        id:"longonot",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Longonot and Hell's Gate",
        content: `Mount Longonot is 40 kms from Nairobi and 2760metre high. This is a dormant volcano with a smoking crater in the centre. This takes only some 4 to 5 hours hike.
Hells gate is a walking park at an altitude of 1560 – 2187 meters and covering an area of 68 sq Kms. Places of interest include the central tower, Fischer’s tower and the Jorowa gorges. Nearby is the Olkaria geothermal power project as this is an area of still volcanic active underground.
`,
        subsections: []
    },
    {
        id:"marsabit",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Marsabit",
        content: `The park is home to a wide variety of the larger mammals. Reason is because the area is much forested and is like an oasis in a desert. However you won’t see too much game unless you spend some time here. There is lake paradise which is formed in a crater.`,
        subsections: []
    },
    {
        id:"masaimara",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Masai Mara Game Reserve",
        content: ` This is the most famous park in Kenya and is about 280 kms from Nairobi. The park is 1320 sq kms and on the northern Serengeti Making a total of 25,000 sq kms when both Mara and Serengeti are combined. It is slab of open grasslands dotted with acacia trees. It is watered by the tree lined Mara River and its tributary Talek river. On the western side is the Oloololo Escapment and where a lot of Game is concentrated. This area is also swampy and difficult to access during the rainy season.
This is also a park with high concentration of Animals of all kinds Both herbivorous and Cats, Monkeys, predators, solitary, diurnal animals and you can be able to see all of this including about 300 species of birds. The highlight of Mara is definitely the yearly Wildebeest migration that takes place in July / August Tanzania’s Serengeti National Park as estimated 2 million wildebeest accompanied by half a million zebra and thousands of gazelle move steadily north into Kenya’s Masai Mara reserve in search of the rush grass and water that they need to survive. There they grace till October when they start heading back. The great migration presents a truly awesome spectacle as the ungainly but strangely beautiful wildebeest lollop across the plains In myriad single file and swarm into the swollen waters behind their leaders in such vast and titanic numbers and at such precipitate pace that many of them perish. Many others die in the course of the great trek too. Because it’s all down to the inevitable survival for the fittest and following closely the migration are the predators taking advantage of every situation.
A visit to the Mara is not complete without a visit to the Maasai tribesmen villages or Manyattas as they are referred to and see their culture and traditions as they are among the only remaining people who practice their forefather’s tradition and have not been westernized yet. 
Main attractions here include: The big five animals, Hot air ballooning, Huge savannahs of golden grasslands, Big skies, Rift valley escarpment and The Mara river with its hippos and crocodiles. Visit Narok Museum for culture and heritage
`,
        subsections: []
    },
    {
        id:"meru",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "MERU NATIONAL PARK / MWINGI /KORA /BISANADI / RAHORE GAME RESERVES",
        content: `This park at an attitude of between 366-914 meters and covering an area of 870 sq Kms has abundant rainfall and numerous permanent springs flowing down from Mount Kenya. The park is partly covered by forest, tall grasslands and swampy. This park is home to all the animals including the white Rhino, Elephants, Grevy zebra. The park is also home to Joy and George Adamson where they raised the orphaned lion and leopard cubs until they were old enough to be returned. The tracks through the park are well maintained.
Have numerous permanent springs and a wealth of birdlife, which includes Leopards, Hippos, Elephants, Lions, reticulated Giraffes, grevy Zebras, Bongos and Crocodiles in the UasoNyiro River. Over three hundred and sixty five species have been identified in these sanctuaries. The Shaba National Reserve is home to the monument of Joy Adamson, who together with her husband George contributed greatly to Kenyans wildlife as an author, conservationist and artist. The film “Born Free” is based on Joy’s book of the same title. Shaba National Reserve was the setting for the film “Sheena Queen of the Jungle.” Shaba National Reserve is home to the rare Somali Ostrich. Meru National Park, Mwingi, Kora, Bisanadi and Rahole Reserve comprise an integrated part of the northern circuit and was opened in 1968. Meru National Park is one of the best- watered sanctuaries and it is situated on the slopes of Nyambene mountain range, North East of Mount Kenya. The park teems with a variety of wildlife that includes Lion, Elephant, Cheetah, Leopard, rare Antelopes Lesser Kudu and duiker. The park is home to the largest herds of buffalo in Kenya. Meru National Park has an estimated three hundred species of birds. The park was the settings for Joy Adamson’s book “Born free” that chronicles an in depth study of Lions and Cheetahs.
`,
        subsections: []
    },
     {
        id:"elgon",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "MT. ELGON / SAIWA SWAMP/ KERIO VALLEY",
        content: `Mount Elgon lies at an altitude of about 2500-4200 meters and is about 470 kilometers from Nairobi. Mount Elgon National Park is one of the most beautiful, truly wild and intact sanctuaries. Game viewing is excellent. The Park provides a home to over 400 Elephants as well as Buffaloes, protected Columbus and blue Monkeys, giant`,
        subsections: []
    },
     {
        id:"mountkenya",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "MT. KENYA NATIONAL PARK.",
        content: `These parks and game reserves are part of the most fascinating sanctuaries in terms of scenic splendor, and the great variety of wildlife found here. Mount Kenya National Park lies at an altitude of about 3400-5200 meters. It offers excellent game viewing, mountain climbing and breaking scenery that that includes glaciers, tarns and peaks. There are also mineral springs. According to the local folklore, Kenya owes its very name to this majestic Mountain, which is also ranked as the second highest mountain in Africa after MT. Kilimanjaro. Mt Kenya National Park is the center piece of this sanctuary. Part of the mountains attractions is the variation of the flora and fauna found at different altitudes. Dry uplands forest covers the lower slopes while true mountains forests begins at an altitude of 2000 meters and comprise of cedar, Meru Oak and Pod trees. A belt bamboo forest that merges with smaller trees interspersed with glades begins at an altitude of 2500 meters. The forest is home to a variety of animals and rare plant species. The wildlife in the sanctuary includes Columbus monkeys, Sykes monkeys, Bushbuck, Buffalo, Elephant, Olive Baboon, Waterbuck, Black Rhino, Leopard, Giant forest Hog, Genet cats, Hyena and the elusive Bongo to name but a few. 
Sightings of albino Zebra have been recorded in these sanctuaries. The mountain also features in the local people folklore as being the home of the supreme-Being “Ngai” (God). It is, therefore, treated as holy shrine.

`,
        subsections: []
    },
     {
        id:"nairobi",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "NAIROBI NATIONAL PARK",
        content: `This is the oldest park in Kenya. It was gazetted in 1946. The park is a glorious stretch of savannah that is set against the dramatic skyline of Nairobi, the capital city. Its only 10 kms from the city center and thus making Nairobi the only city in the world that borders a national game park. The Big five are well represented except the elephant.  Another unique feature of the park is that it houses the animal orphanage and also the safari walk. The park is also ideal for ornithological safaris as four hundred species of birdlife have been recorded.`,
        subsections: []
    },
     {
        id:"oldonyo",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "OL DONYO SABUK PARK",
        content: `Lying at a distance of sixty-five kilometers from Nairobi, this Park is ideal for a day’s excursion from Nairobi. This Park main attraction is unparallel beauty and the clear views of MT. Kenya and MT. Kilimanjaro. OlDonyo Sabuk is a mountain, which raises about 2,500 meters from otherwise a flat terrain. The local folklore refer to the mountain as the supreme-Beings “ Ngai” ( God ) second lesser home.
The graves of Sir, William Northup Macmillan who was a great philanthropist and his wife lie near the summit. The Macmillan Library in Nairobi was built in memory of this great Philanthropists Wife.
`,
        subsections: []
    },
     {
        id:"saiwa",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "SAIWA SWAMP",
        content: `This is the home of the rare sitatunga antelope and only found here in the world. This is a definitely place of interest in the western Kenya tour circuit.`,
        subsections: []
    },
     {
        id:"samburu",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "SAMBURU / BUFFALO SPRINGS/ SHABA NATIONAL RESERVE",
        content: `The highlights of these reserves are spectacular scenic beauty, rivers and forests. The local people are rich in colorful heritage and traditions. Over 200 species of birds exist here together with all kinds of wild animals including the Big five. The seasonal but huge Uaso Nyiro River is the main source of water and also holds big numbers of crocodiles. There are also a number of permanent springs. Over three hundred sixty five species of birds have been identified. There are a number of Lodges and special campsites for accommodation.
The shaba National reserve is home to the monument of Joy Adamson who, together with her husband George, contributed greatly to Kenya’s wildlife as an author; conservationist and artist. The film born free and Sheena queen of the jungle were all done here. This reserve is also home to the rare Somali ostrich.
`,
        subsections: []
    },
     {
        id:"shimba",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "SHIMBA HILLS",
        content: `This park is 30 minutes south of Mombasa. This is a coastal forest1400 mts above sea level with a cool breeze from Kilimanjaro. The park is home to Lions, Elephants, Buffalos, Giraffe, as well as several species of primates. Africa’s second largest antelope the sable antelope is only found in this park. This is tropical African forest and one of the only places remaining as the treasures of birdlife and plants, shimba hills are famous for its beautiful landscape, which complice hills and valleys. Sheldrick falls which is 25 meters high is also an attraction.`,
        subsections: []
    },
     {
        id:"tsavo",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "TSAVO EAST / WEST NATIONAL PARK",
        content: `This is divided into East and West and is the biggest park in Kenya at 20,000 sqkms. The park is bisected by the Nairobi – Mombasa highway through the middle and thus very accessible from both cities. 
The places of interest here are Mzima underground springs, Shaitani lava flow, Chaimu crater, Aruba dam, Mudada rock, Yatta plateau, Lugard falls, Recent volcanoes, Rhino sanctuary, under water glass view for hippos and fish.
 The park, also consist of other game animals and different species of birds. The park is very famous for its large herds of ‘red’ elephants. This is the famous park of MAN EATERS where lions ate a lot of Indians during the construction of the East Africa Railway line in the start of the 20 the century.
`,
        subsections: []
    },
     {
        id:"turkana",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "LAKE TURKANA",
        content: `This is also referred to as the Jade Sea or the Cradle of mankind. That was until
Kenya lived up to her title of the Cradle of Mankind and came up with yet another confounding contender for the crown of common ancestor.  Because whilst digging at Lake Turkana in 1998/99 Dr. Meave Leakey found an unusual 3.5 million year old skull, which she named ‘kenyanthropus  platytops’ ( flat faced man ). According to Dr Leakey, East Africa owes much of the credit for this title as the cradle of mankind to the fact that it is traversed by one of the world’s most famous geological features, the Great Rift Valley. The 3,500 mile long Rift is essentially a 20 million year old crack in the earth’s crust into which sundry rivers have drained, bringing with them millennia’s worth of sediment. Which has’ in turn, gradually buried and preserved whatever pointers to ancient life remained there and turned them into fossils.

`,
        subsections: []
    },
     {
        id:"kakamega",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "KAKAMEGA FOREST",
        content: `This is a world famous equatorial rain forest known for its diversity of birds over 300 species and insect life. A visit to the forest will give you a feel of how Amazon looks like. This rain forest which is the only one in Kenya covers 240 km and has many different types of plants and over 400 species of butterflies. Also found here is over 27 different types of snakes and different primates including the de brazza monkeys.
Activities here include: Forest walking, camping, hiking, primate watching, bird and butterfly watching, game watching and guided nature walks.
`,
        subsections: []
    }
     
    
];
