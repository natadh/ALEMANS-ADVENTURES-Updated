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
        content: `The park has well over 500 species of birds and which include the ostrich and migratory kestrel. Some specific areas are ideal for walking safaris as there are many Nature trails and also the Chaimu volcanic craters. `,
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
        content: `This is also one of the Great Rift Valley lakes. The waters are flesh due to the fact that the lake depends on rainfall and rivers. This has the largest bird's concentration in Kenya recording over 600 species. There are the aquatic kinds of animals including Hippos and crocodiles. The lake is about 9 meters deep. The area has a lot of rock formation.`,
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
    },
     {
        id:"conservancy",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Kenya wildlife conservancies",
        content: `Kenya has about 110 wildlife conservancies, all promoting the placid co-existence of people and wildlife in mutual well-being. Solio Ranch, Taita Hills Sanctuary, Kimama Wildlife Sanctuary, and the Ol Chorro Oiroua Ranch were among the trailblazers. Improved security, better land management, income, employment and support to community projects have all encouraged the rise of conservancies in Kenya, spread across 22 counties and covering over 7.56 million acres.
Conservancies provide a range of local values including clarifying and firming up local land tenure over pasture and grazing areas, improving the security through networks of community scouts, timely communication and law enforcement infrastructure, and providing a legal systems for communities to enter into 3rd-party joint ventures with investors in order to generate revenues.
Kenya has about 110 wildlife conservancies, all promoting the placid co-existence of local people and wildlife in mutual well-being. Improved security, better land management, income, employment and support to community projects have all encouraged the epic rise of conservancies unique attractions and experiences. Ol Pejeta Conservancy
If you want to see the rarest large animal on Earth, then central Kenya’s superb. The conservancy is home to the last two northern white rhinos on the planet. Unfortunately, both are female, which makes this creature functionally extinct. Ol Pejeta also contains the Sweetwaters Chimpanzee Sanctuary, which houses around 40 rescued chimps. 
`,
        subsections: []
    },
     {
        id:"pajeta",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Ol Pejeta Conservancy",
        content: `If you want to see the rarest large animal on Earth, then central Kenya’s superb. The conservancy is home to the last two northern white rhinos on the planet. Unfortunately, both are female, which makes this creature functionally extinct. Ol Pejeta also contains the Sweetwaters Chimpanzee Sanctuary, which houses around 40 rescued chimps.`,
        subsections: []
    },
     {
        id:"taitahills",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Taita Hills Wildlife Sanctuary",
        content: `The Taita Hills Wildlife Sanctuary(THWS) derives its name from the surrounding clusters of hills and is an integral part of the Eastern Arc forests classified as a biodiversity hotspot. Before the establishment of THWS on Bura Block along Mwatate-Taveta Road, the land was used as a game hunting ground. THWS was established in 1970 to make the area more attractive to wildlife and tourists, allow conservation, and promote wildlife viewing. The sanctuary covers an area of 28,000 acres of mosaic habitat where the plant physiognomy is riverine forest, savanna wood and grassland. The vegetation formation is usually dense, stratified and always dominated by Acacia /Commiphora trees and may appear to be evergreen in wet areas such as in the central lowlands of the sanctuary. More than 50 species of large mammals and 300 species of birds have been recorded in THWS.
The sanctuary straddles the Southern Tsavo West National Park and is an important dispersal area and migrating corridor for wildlife between Tsavo East National Park and Tsavo West National Park and making it a highly valued tourism recreational area and of ecological importance. The topography is generally mountainous that offers breath taking landscape views of the Kilimanjaro, Pare, Uluguru mountains and the clusters of Taita Hills with a seasonal river dividing the sanctuary into valleys and lowland plains.
Encompassing forests, mountains, rivers and grasslands, lines up against the vast Tsavo West National Park and is a vital biodiversity hot spot. As well as classic game drives, there are dedicated bird-watching safaris and conservation programs that guests can join.
`,
        subsections: []
    },
     {
        id:"maranaboisho",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Mara Naboisho Conservercy",
        content: `This Conservancy  covers more than 200km²/77mi², is one of the most celebrated of the Masai Mara–area conservancies. It’s known for having one of the densest populations of lions in Africa (as well as all the other cats). The landscape ranges from wide-open grasslands to light bush, both of which attract plenty of elephants. There are lots of activities on offer here, including walking and bush-camping safaris, that cannot be done in the nearby national reserve. Mara Naboisho runs a highly regarded community-development program.`,
        subsections: []
    },
     {
        id:"lewa",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Lewa Wildlife Conservancy",
        content: `This is the original Kenyan conservancy and probably the most famous. This was once a large cattle ranch that was converted to wildlife conservation. It continues to lead the way in the conservancy field. The landscapes of Lewa, which are overlooked by Mt Kenya, are archetypal East Africa and the conservancy is home to all of the Big Five (lion, leopard, buffalo, elephant and rhino).  `,
        subsections: []
    },
     {
        id:"borana",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Borana Conservancy",
        content: `This is considered one of Kenya’s finest conservancies. What started as a private cattle ranch has grown into a successful 130km²/50mi² conservation area. It now teems with wildlife, including a substantial black rhino population and many elephants. The conservancy has a very impressive community-development angle supporting a number of education and health projects.`,
        subsections: []
    },
     {
        id:"maranorth",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Mara North Conservancy",
        content: `The area now known as the Mara North Conservancy was in extremely poor state back in the 1980s and 1990s. Ownership of the land was highly fragmented and the fencing between land boundaries caused major barriers for local and migrating wildlife. Overgrazing by the Maasai’s cattle caused degeneration of the land and threatened the future of the landowners. In 2009 a group of over 800 Maasai landowners joined together to save their land and livelihood by establishing the 320 km2 Mara North Conservancy. Thanks to the conservancy's conservation efforts and partnerships with lodges and safari organizations, the area’s wildlife is booming and the Maasai landowners have a brighter future ahead.
Geography & wildlife
Long golden grass and whimsical flat-topped acacia trees, the conservancy’s landscape is exactly as you would expect it to be. Thanks to conservation efforts such as natural environment regeneration and protection of wildlife from poaching and traps by wildlife rangers the conservancy now had one of the highest concentrations of wildlife in the Mara ecosystem. Aside from the Big 5 there are over 450 species of birds to spot, several species of antelopes gracing the plains and a variety of animals that seem to have stepped straight out of a story book.
The eastern side of the plains feature a network of wooded valleys and seasonal streams known as ‘luggas’. The area’s riverine forests are an emerald-hued refuge for the conservancy’s elephants, baboons, giraffes and hippos. To the west, forested hillsides flank the croc-infested waters of the Mara River with the towering Olooloo Escarpment rising up in the background.
From Leopard Gorge, a secluded big cat maternity ward, to the scenic Lemek Hills, a refuge for endangered African wild dogs, the conservancy’s location and landscape make it a first-class safari destination. During the months December – May, the conservancy is home to the Loita Hills migration. During this lesser known, yet still incredibly impressive migration, thousands of local wildebeest trek through the Mara North Conservancy.
The Great Migration in Mara North Conservancy
Chances of seeing the big African cats in action are even greater during the Great Migration. During this ultimate trek of herd animals, the local big cats are often out and about in search of their next easy meal. You will be able to see quite a bit of the Great Migration from within the Mara North Conservancy during the dry season from July - October. Migrating herds of wildebeest and zebras that continue on from the Mara Triangle and the reserve, and push further north, pass through the conservancy. However, for the more dramatic Mara River crossings you’ll have to travel south to the Mara Triangle or Masai Mara National Reserve.

Accommodation in Mara North Conservancy
There are only twelve safari lodges scattered throughout the Mara North conservancy. Among the accommodation options are idyllic boutique lodges and luxurious tented camps. Each of the accommodations follow the conservancy’s strict environmental policies to ensure they have little negative impact on the environment. A few of the measures taken by the accommodations are the use of: solar panels, eco-friendly products, compost systems for organic waste and water saving systems. Each accommodation contributes to the wellbeing of the entire Maasai community. The monthly fees paid by the accommodations are used to support education, health and women’s entrepreneurship.
During your stay in the conservancy, your accommodation will offer a variety of safari activities. Generally you’ll be able to choose from off-road driving, walking safaris, bush meals and after-dark jeep safaris. Due to the exclusive nature of the conservancy, you’ll likely encounter very few other vehicles during a game drive. In most cases your lodge or tented camp will also offer opportunities to interact with the colorfully dressed Maasai.
`,
        subsections: []
    },
     {
        id:"solio",
        image: "/images/parks/aberdare.jpg",
        gallery: [
            "/images/parks/aberdare1.jpg",
            "/images/parks/aberdare2.jpg"
        ],
        header: "Solio Coservancy",
        content: `Solio Ranch Conservancy is probably one of Kenya’s most remarkable wildlife sanctuaries, nestled between Mount Kenya and the Aberdare Mountains in the Greater Laikipia Region. This privately owned conservancy spreads over 17,500 acres and forms one of the most successful black rhino protection and breeding projects in the country. This is a chance to see great numbers of rhinos and lions in their natural habitat, something not commonly seen in most tourist destinations in Kenya, other than the Solio Ranch.
The Conservancy, from the famous rhino population found here, has all manner of wildlife, including lions, cheetahs, buffalo, zebras, and giraffes that roam freely across the open savannah, making a dynamic ecosystem where these iconic African species coexist. Solio Ranch also offers some of the finest leopard viewing in the country, adding to its excitement for both wildlife lovers and photographers alike. For the birder, the conservancy would prove equally tantalizing, with the great diversity of bird species counted here, making it one of the premium locations for the observation of avifauna.
Complemented further by the breathtaking scenery of Solio Ranch, it offers clear views of Mount Kenya, the second-highest peak in Africa. All this natural beauty frames a haven for wildlife. Serene landscapes and vibrant wildlife provide a tranquil yet thrilling environment that will appeal to nature lovers and adventurers alike.

Besides being an important haven for such rare species, it is also a testimony to private conservation work in practice. With the conservancy ensuring the safety of black rhinos while continuing to offer a haven for other wildlife species, Solio Ranch has emerged as an outstanding example for Kenyan and worldwide conservation initiatives. From the close encounters with the great beasts to a quiet retreat in the African wilderness, to a chance to appreciate the unique biodiversity of this region, Solio Ranch has something to offer.

`,
        subsections: []
    },
];
