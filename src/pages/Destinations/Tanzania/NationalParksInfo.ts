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
        id: "arusha",
        image: "/images/parks/tanzania/arusha.jpg",
        gallery: [
            "/images/parks/tanzania/arusha1.jpg",
            "/images/parks/tanzania/arusha2.jpg",
            "/images/parks/tanzania/arusha3.jpg"
        ],
        header: "Arusha National Park",
        content: `This beautiful Park has often been called a little gem and rightly so. It is only ½ an hour by tarmac road from Arusha town, the safari center of northern Tanzania. With mountains, valleys, lakes, and small plains clothed in green, it has a wonderful feeling of peace and solitude. It is dominated by Mount Meru, which at 4,566 m (14,980 ft) is the 3rd highest free-standing mountain in Africa.`,
        subsections: [
            {
                subheader: "Getting Around",
                content: "A well maintained and signposted network of game viewing roads and tracks wind through the park offering frequent views of spectacular beauty, with both Mount Meru and Kilimanjaro often in sight."
            },
            {
                subheader: "Tourist Attractions",
                content: "The geomorphology of the area showcases the geological processes that have led to the creation of remarkable features including the landscape, ecology, culture and unique habitat for wildlife. These features convey the history of the earth and provide scenic areas for visitors to enjoy."
            },
            {
                subheader: "Wildlife",
                content: "It is habitat for a wide variety of mammals including bushbuck, giraffe, elephant, leopard (rarely seen!), monkeys, duiker, baboon, buffalo, waterbuck and hippo. The birdlife is spectacular with over 450 species recorded. The game viewing track that winds around the Momella Lakes is a great way to get close to and watch lesser and greater flamingo. Arusha National Park is probably the best place in Tanzania to watch black and white colobus monkeys, and also to listen to their loud and guttural territorial calls echoing through the forests."
            },
            {
                subheader: "Mount Meru",
                content: "Mt. Meru is a dormant volcano about 1½ million years old. One side of it exploded out about 8,000 years ago as Meru's caldera lake was transformed into super-heated steam by an inner eruption. One of the largest landslides of mud and rock ever measured worldwide took place, forming hillocks, valleys and small lakes. The geologists estimate that before Mount Meru blew its top it was a tall, symmetrical volcanic spire almost as high as Mount Kilimanjaro. This interesting and broken terrain is now clad in patches of forest and bush at the lower end and pristine rain forest on the upper slopes."
            },
            {
                subheader: "Ngurdoto Crater",
                content: "At the bottom end of the Park is another small, but complete, volcanic crater called Ngurdoto, which has recently been opened to guided hikes. It is a secret paradise, with a lake on one side and elsewhere clothed in virgin forest and a network of open grassy glades. A track follows the rim with look-out points established where one can relax with a picnic and look down into this secret world of swamps and plains and spot buffalo, warthog and occasional elephant enjoying its tranquility."
            },
            {
                subheader: "Tourist Activities",
                content: "Game drives are possible all year round on a well maintained network of roads and tracks. Walking: Arusha National Park is a great place for walking, and a place where one can enjoy natural forests in comfort because of the cool climate. Hiking has to be arranged at one of the two gates. A fee is payable on line and any walk has to be accompanied by an armed Ranger. Mountain hike: This is 4 days adventure using the mountain huts Miriakamba and Saddle huts. It has to be prearranged by local tour operator requiring porters and an armed Ranger escort. The hike traverses several vegetation zones including beautiful montane forests. Expect to see wildlife en route including buffalo, giraffe, monkeys, baboons, antelope and lots of birds."
            },
            {
                subheader: "Canoeing",
                content: "Canoeing is possible by prior arrangement on Small Momella Lake, with buffalo, giraffe, bushbuck, water buck and hippo often seen. Wading and water birds are of course common."
            },
            {
                subheader: "Horseback",
                content: "Horseback treks can be combined with overnight stays in camps within the Park (but not the horses). Riding on horses through the cool forests and glades of the Park is a beautiful way to enjoy the sights, sounds and scents of these wild places without the noise of vehicles. Wild animals quickly habituate to being close to horses. These treks are led by experienced guides who are careful about guest safety. This activity needs prior arrangement with the tour operator, and every guest will be expected to show an ability to ride horses."
            },
            {
                subheader: "Getting There",
                content: "Arusha town is only ½ an hour away on a tarmac road."
            },
            {
                subheader: "Safari Ideas",
                content: "Being so close to, and between Arusha city and Kilimanjaro International Airport, Arusha National Park can feature at the start of your safari using one of the small lodges or camps that are just outside the Park. However, it is also a wonderful way to end a safari because its green tranquility and cool climate are a perfect antidote to an often hot and dusty main safari."
            },
            {
                subheader: "Accommodations",
                content: "There are special and public campsites, as well as seasonal campsites that can be booked for travelers or companies with their own camps. There are huts for climbers of Mount Meru to use. Hotels and lodges for visitors to use are also sited outside the Park, and of course inside and outside Arusha itself."
            }
        ]
    },
    {
        id: "gombe",
        image: "/images/parks/tanzania/gombe.jpg",
        gallery: [
            "/images/parks/tanzania/gombe1.jpg",
            "/images/parks/tanzania/gombe2.jpg",
            "/images/parks/tanzania/gombe3.jpg"
        ],
        header: "Gombe National Park",
        content: `Gombe National Park covers an area of 52 sq. km. and was first recognized as an important wildlife and chimpanzee habitat in 1943 when it was designated a Game Reserve. It has mountainous forested terrain that slopes steeply down to its sandy shoreline on Lake Tanganyika, and the defining attraction for the visitor are the chimpanzees living there. The chimpanzees were originally the object of research by the renowned scientist and conservationist Dr. Jane Goodall, who was herself the protégé of the yet more celebrated anthropologist Dr. Louis Leakey. Her studies started in 1960, and she later married Derek Bryceson who was a Tanzanian MP and the second Director of National Parks after independence in 1961. Gombe was upgraded to National Park status by the Tanzania Government in 1968.`,
        subsections: [
            {
                subheader: "Getting Around",
                content: "There are hiking trails managed by the Park authorities for getting around in the forest."
            },
            {
                subheader: "Wildlife",
                content: "Gombe is a true primatology marvel with 8 primate species found in the park. The species include chimpanzee, olive baboons, blue monkey, red tailed monkey, vervet monkeys, red colobus monkeys and bush babies. It also protects 35 mammal species including the bushbuck, bush pigs, duiker, civets, white tailed mongoose and checkered elephant shrew making it a superb place to travel."
            },
            {
                subheader: "Birdlife",
                content: "The park has 287 species of birds, most of them are forest birds like fish eagle, palm nut vulture, paradise flycatcher and Schalow's turaco. Migratory birds are also present from November to April every year."
            },
            {
                subheader: "Lake Tanganyika",
                content: "The longest and deepest lake in Africa, the second deepest lake in the world with depth of 1,447m and a width 70km from East to West. It is also the world's longest freshwater lake with length of 675kms. Plan your visit to come and see this longest and deepest lake that provides breeding ground to more than 300 species of fish most of them being endemic including the ornamental cichlid."
            },
            {
                subheader: "Scenic Beauty",
                content: "The view of Mountains of rift escarpment falling Westwards in the lake are magnificent. The undulating terrain and valleys provide a visitor with attractive landscapes. The deluge of water created by Mkenke and Kakombe rivers leads to gushing over craggy rocks 25 feet plume that roaring into a pool of water. A visit to Kakombe and Mkenke waterfall is a truly rewarding experience."
            },
            {
                subheader: "Chimpanzee Viewing",
                content: "It is possible to watch chimpanzees at close quarters during forest hikes, and it is a rare treat to be able to sit down quietly in a corner of pristine forest and have chimpanzees romp, play and interact all around you as they go about their daily activities. All activities have to be conducted under the close supervision of a Park Ranger."
            },
            {
                subheader: "Nature Walking",
                content: "In addition to the joys of walking in pristine forests and watching chimps there is lots of other wildlife to enjoy including red tailed monkeys, red colobus, blue monkeys (part of the gentle monkey family who are gentle by nature from birth), olive baboon and vervet monkeys."
            },
            {
                subheader: "Hiking",
                content: "Hiking is done up into the forest and even up to the peak by using natural trails managed by the Park. All hikes are guided by National Park Guides and Rangers."
            },
            {
                subheader: "Water Sports",
                content: "Considered by many as the cleanest and purest water on earth, the lake waters are wonderful to swim in, but more than that, Lake Tanganyika has the greatest diversity of Cichlid fishes in the world, and the largest specimens. Cichlids are generally brilliantly colored fresh water fishes that are a joy to watch either by snorkeling above them or using scuba gear to swim down amongst them."
            },
            {
                subheader: "Boat Excursions",
                content: "It also possible by arrangement with park authorities or by private boat owners."
            },
            {
                subheader: "Getting There",
                content: "The park can be accessed by boat from Kigoma, and boat bookings are done through the park or with private boat owners. Kigoma is a substantial town and is accessible by air from the larger Tanzanian towns. There is a rail link from Kigoma to Dar es Salaam and a ferry service from Zambia. Access by road is of course possible but the distances are large."
            },
            {
                subheader: "Safari Ideas",
                content: "Gombe fits easily into one's safari plans as it is possible to fly from Kigoma to almost anywhere else in Tanzania. Being so close to Kigoma Gombe can become an extension visit to a regular southern circuit safari. It is a lot less expensive than a visit to Mahale Mountains for those wanting chimp viewing on a budget."
            },
            {
                subheader: "Accommodations",
                content: "The park also has a campsite and a rest house for use by visitors which are booked through the park. There is also a private tented lodge in the park."
            }
        ]
    },
    {
        id: "kilimanjaro",
        image: "/images/parks/tanzania/kilimanjaro.jpg",
        gallery: [
            "/images/parks/tanzania/kilimanjaro1.jpg",
            "/images/parks/tanzania/kilimanjaro2.jpg",
            "/images/parks/tanzania/kilimanjaro3.jpg"
        ],
        header: "Kilimanjaro National Park",
        content: `Mount Kilimanjaro is Africa's highest mountain (5,895 meters). To be in its presence either near or far, and to see the grandeur of its giant dome tower so far, far up into the sky above the surrounding plains is one of life's great travel experiences. You can but gaze at it in wonder and awe and feel deeply humbled by the sheer magnificence of it. No wonder so many travelers want to get there, be there, embrace it, climb it. It is a volcano and arises alone out of an expansive landscape of hills and plains that are level. This makes it the world's highest peak as measured from the surrounding plains to its summit.`,
        subsections: [
            {
                subheader: "Getting Around",
                content: "A well maintained and signposted network of roads and trails wind through the park offering frequent views of spectacular beauty, with Mount Meru often in sight. The climb: All adults of normal health and fitness should be able to make it to the top and without needing specialist equipment. Warm, weatherproof clothing and sound footwear are essential. Of critical importance is patience and determination. There are at least 7 routes up the mountain ranging from 5 to 9 days or longer, and anyone planning to climb Kilimanjaro is strongly advised to do it with a reputable registered local tour operator employing trained guides who have a strong track record of success, and who know of the latest ground conditions."
            },
            {
                subheader: "Tourist Attractions",
                content: "Three peaks: Kibo, the highest peak [5,895m] is covered by snow throughout the year though located near the equator and to many climbers, conquering this peak is an adventure of their lifetime. Mawenzi [5,149m] is rugged and opened for technical climb. Shira [3,962m] is the oldest peak that collapsed and forms a shira plateau with outstanding scenic beauty on the mountain habited with several kinds of migratory large mammals such as buffaloes, elephants and elands. Montane forest: A wide band of exceptionally beautiful montane forest encircles the whole of Kilimanjaro from about 1800 – 2800m. The forest zone is worth a visit even if you are not climbing to the peaks. The present nature trails in particular take you through this forest belt. This belt supports several plant species, including endemic ones like Impatiens kilimanjari."
            },
            {
                subheader: "Birds and Animals",
                content: "The park harbors more than 179 bird species inhabit the different vegetation zones. At high altitudes, the White Necked Raven, Lammergeier and Alpine Chat are common. The mountain also inhabits 140 species of mammals; 7 primates, 25 carnivores, 25 antelopes and 24 species of bat. Hikers may see various animals including the Black and White Colobus Monkey, Blue monkey, Forest Duikers and small mammals like Kilimanjaro Mountain shrew (Myosorex zinkii) which is endemic to Mt. Kilimanjaro."
            },
            {
                subheader: "Vegetation",
                content: "Five eco-climatic zones take you to the equivalent of a trip from the equator to the arctic in a brief tour. As one climbs Kilimanjaro, vegetation and weather changes in response to the changing elevation from montane forest, heath and moorland, alpine desert and the summit zone (arctic). The mountain peak is covered by snow all year-round."
            },
            {
                subheader: "Kifinika Cultural Site",
                content: "This is a sacred site along Marangu route that is used by the local Chagga people. Historically, the site was used for cultural rituals."
            },
            {
                subheader: "Tourist Activities",
                content: "Mountain hiking: Climbing to Kibo peak takes 5 – 9 days depending on the route. Seven mountain trails can take a climber to the mountain peak, each route offering different attractions and challenges. Mountain cycling: On two wheels tourist has a chance of cycling to the roof of Africa. There are two routes which are used for cycling, one for summit bound visitors (Kilema route) and second one for non summit visitors (Shira plateau). Crater camping: Camping in the crater provides unique visitors' night experience. While at the crater tourists can visit the unique bench-shaped like glaciers, the formation that can only e found at Mount Kilimanjaro. Paragliding: Tourists can fly from the top of Mount Kilimanjaro and may use parachutes or wingsuits while undertaking this activity. Mawenzi technical climbing: Mawenzi is the second highest peak on Mount Kilimanjaro. Technical climbers can hike the present seven sub-peaks while enjoying the view of cliffs, complexity of gullies and rock faces."
            },
            {
                subheader: "Getting There",
                content: "By Air: Kilimanjaro International Airport is the main arrival point for international travelers and is about 45 minutes from Moshi town. By Road: There are good tarmac roads accessing Moshi from all the main towns and cities of Tanzania. Marangu is where the National Park Headquarters is situated, and is 86 kms from Kilimanjaro International Airport."
            },
            {
                subheader: "Safari Ideas",
                content: "Climbing Kilimanjaro fits in well with a safari to the rest of Tanzania, and indeed great wildlife areas are so accessible by air or road that it would be a great pity not to plan this into your travels. Arusha, Mkomazi, Tarangire, Manyara are all well within a day's driving of Moshi town, while an air charter can take you to the Serengeti and any other corner of the country."
            },
            {
                subheader: "Accommodations",
                content: "Moshi town is where many climbers stay before their climb and there are a host of hotels and lodges that cater for them, including some near the entry/exit gates. Arusha also has lodges and hotels where climbers can stay before travelling to Moshi for the climb. On the mountain itself the different routes have their specific places to overnight and the accommodation ranges from well-appointed huts on the Marangu Route to camp grounds where you pitch your own tents. The situation on the mountain constantly evolves and so take the advice of the professional guide with whom you will conduct your climb."
            }
        ]
    },
    {
        id: "manyara",
        image: "/images/parks/tanzania/manyara.jpg",
        gallery: [
            "/images/parks/tanzania/manyara1.jpg",
            "/images/parks/tanzania/manyara2.jpg",
            "/images/parks/tanzania/manyara3.jpg"
        ],
        header: "Lake Manyara National Park",
        content: `Lake Manyara National Park lies in a very dramatic setting up against the steep western wall of the Rift Valley. Being directly en route to Ngorongoro from Arusha or Tarangire, it is a popular place either for a day visit or for longer. However, it is an exceptional National Park that would deserve a visit regardless of where it was located; in fact so exceptional that it was declared part of a World Biosphere Reserve in 1981. There are at least 5 very different habitats existing side by side in an area of 325 sq km.`,
        subsections: [
            {
                subheader: "Park Features",
                content: "In fact on a game drive you see more variation in the distance travelled than anywhere else in Africa. There are copious ground water springs at one end, spilling out from the base of the Rift Valley wall. These give rise to a truly jungle type of ground-water forest, which is in stark contrast to the dry bush acacia woodlands all around, and to the enormous shallow alkaline lake that lies on the valley floor. Then there is also the steep escarpment wall with its own boulder strewn habitat. In the south of the park are found extensive hot water springs as testament to the active tectonic nature of the Rift Valley, and there is a long walkway out across the steaming rivulets and reed beds of the lake edge giving a magnificent view up and down the full length of this part of the Rift Valley."
            },
            {
                subheader: "Wildlife",
                content: "Most of the characteristic East African mammals are found in Manyara including elephant, buffalo, hippo, lion, leopard, cheetah, giraffe and lots of plains game, and reputedly the largest baboon troops in Africa. Some lions have opted to rest up during the heat of midday in trees, giving rise to the mistaken belief that the Manyara lions are somehow different. Lions in many parts of Africa often spend time on the lower broad limbed branches of trees probably to escape flies. Lake Manyara was made a National Park in 1960 having previously been a Game Reserve, and in 1981 became part of a World Biosphere."
            },
            {
                subheader: "Baobab Trees",
                content: "Enormous Baobabs are scattered throughout the drier parts. In fact one of these baobabs was visited by Disney Imagineers in 1994 and became the inspiration for the baobabs that feature in Disney Worlds famous Animal Kingdom theme park in Orlando, Florida."
            },
            {
                subheader: "Research Heritage",
                content: "It is the place where Dr. Iain Douglas Hamilton did his pioneer studies on African elephant, and elephant are very much a part of the experience here. Douglas Hamilton's book 'Among the Elephants' is an account of his time in Manyara. Manyara is a great destination for birds and in particular water birds, including rafts of pelicans and literally millions of flamingos at some times of the year."
            },
            {
                subheader: "Tourist Activities",
                content: "Game driving: This is the main activity along a network of roads within the Park. Hiking: Guided walking safaris are possible by prior arrangement with the Park authorities, including a hike up to the Marang' forest via the Iyambi River in the south. Night game viewing: Night game drives are possible in the Park. Walk: Manyara has one of the longest tree canopy walkways in Africa with intermittent viewing decks positioned around the trees on the walk. Under the supervision of a guide you can enjoy a totally new experience of leafy tree tops, butterflies, birds and monkeys. Canoeing: Depending on the level of water in the lake, canoeing is an activity option. Bush meals: Bush meals are allowed in all national parks but they are particularly popular in this national park."
            },
            {
                subheader: "Getting There",
                content: "By Air: There is a small airport on the edge of the Rift Valley above Manyara that has regular scheduled flights all year round. By Road: A good tarmac road runs close by the main gate linking Manyara to Arusha, Tarangire Ngorongoro and the Serengeti, and therefore to other places further afield. The journey from Arusha takes about 2 hours. There is also access from the southern end along a graveled road from Babati."
            },
            {
                subheader: "When to Visit",
                content: "All year, although the most popular times are during the two dry seasons June – October and January and February."
            },
            {
                subheader: "Safari Ideas",
                content: "Lake Manyara fits well into numerous Northern circuit itineraries, but of especial interest is the southern Entry Gate. This enables visitors from Tarangire to travel the full length of Manyara as they head to Ngorongoro or the Serengeti."
            },
            {
                subheader: "Accommodations",
                content: "There are park cottages to stay at as well as Public and Special campsites. There is one luxury lodge actually within the park, and a number of seasonal tented campsites. All other overnight options for Manyara are outside the Park including many on the edge of the Rift Valley with wonderful views across the floor of the valley."
            }
        ]
    },
    {
        id: "mahale",
        image: "/images/parks/tanzania/mahale.jpg",
        gallery: [
            "/images/parks/tanzania/mahale1.jpg",
            "/images/parks/tanzania/mahale2.jpg",
            "/images/parks/tanzania/mahale3.jpg"
        ],
        header: "Mahale Mountains National Park",
        content: `For those who enjoy remoteness, beautiful landscapes and wildlife Mahale Mountains National Park is surely one of the most spectacular places to visit in all of Africa. This is not idle sales talk. Some would argue that it is one of the most spectacular travel destinations in the whole world. Distance and cost notwithstanding, you owe it to yourself to somehow drum up the budget to get there at least once in a lifetime! Pristine forested mountains tower up behind intimate sandy beaches and bays and rocky promontories of the eastern shores of Lake Tanganyika.`,
        subsections: [
            {
                subheader: "Wildlife",
                content: "Mahale has 6 species of monkey (yellow baboon, vervet, blue, red tailed, Angolan colobus and red colobus), duikers, bush pig, leopard, bushbuck, myriads of birds etc. The forests at Mahale have a wealth of wildlife besides the 1,000 or so Chimpanzees."
            },
            {
                subheader: "Birdlife",
                content: "The park has unique birds' collection including some species that are endemic to the area such as kungwe apalis and white stripped pipit. Other species include osprey, palm nut vultures and kingfishers."
            },
            {
                subheader: "Lake Tanganyika",
                content: "Lake Tanganyika is the world's longest lake (673 km) and is about 1½ km deep and contains about 16% of the world's fresh water! It is second only to Lake Baikal in Russia in volume. It is the purest fresh water on the planet. The lake is home to hundreds of species of fish including the brightly colored fish known as cichlids. Hippo and crocodile are common across its full extent."
            },
            {
                subheader: "Mahale Mountain",
                content: "The mountain provides an experience of physical challenge when attempting to summit the peak. It takes about 9 hours to reach the top and during the hike one can spot different wildlife which makes your journey unforgettable."
            },
            {
                subheader: "Chimp Watching",
                content: "To get to the only habituated group of Chimps, the M Group, one climbs up through the mountain forests on a network of simple cleared paths to get into touch with the chimps, and when one does the experience is extraordinary to the point of being bizarre. The chimpanzees go on with their lives – walking, sleeping, fighting, politicking, eating etc. as if you are not there. They take virtually no notice of visitors. This is perfect, because you never feel that you are intruding. After spending the strictly controlled 1 hour with chimps you return to your accommodation facility to wash off the sweat, have a delicious lunch and spend the rest of the day at leisure; or perhaps do one of a number of other activities like kayaking, fishing, swimming and snorkeling. Also cultural visits by boat can be arranged to border communities."
            },
            {
                subheader: "Getting There",
                content: "Mahale is accessible by air, road and boat. By Air: The easiest way to and from Mahale is via scheduled flights. The flight from Arusha takes 3 hours, usually with a refueling stop en route. There is a 1 ½ - 2 hour boat ride from the lodges to and from the airstrip at the Park boundary. It is also possible for visitors to arrange their own charter flights with private companies. Private charters can be arranged from most of the major cities of mainland Tanzania and Zanzibar. By Road: Mahale can be accessed by road that follows Lake Tanganyika from Kigoma. Water: Mahale can be accessed by boat and private boats can be hired in Kigoma for the journey. The famous German built ship the M.V.Liemba travels the length of Lake Tanganyika twice a month in each direction, and one of the ports of call is Lagosa at Mahale Mountains."
            },
            {
                subheader: "Safari Ideas",
                content: "Mahale is often combined with the nearby Katavi National Park. Most of the regular scheduled flights to and from Mahale have the option of routing via Katavi. This makes it easy to combine chimp viewing with watching the big game heartland of Katavi plus the many wildlife options in Northern Tanzania. While in Kigoma you may visit the Dr. Livingstone Monument in Ujiji the place where Richard Burton and John Speke first reached the shore of Lake Tanganyika in 1858. It is the site of the famous meeting held on 27th October 1871 when Henry Stanley met Dr. David Livingstone, and reputedly uttered the famous words 'Dr. Livingstone, I presume?'. A monument known as the 'Dr. Livingstone Memorial' was erected on the site to commemorate the meeting. There is also a modest museum and a former slave route near the market."
            },
            {
                subheader: "Tourist Facilities",
                content: "There are Park bandas and 2 permanent tented camps in Mahale, and two permanent lodges. Both lodges are on beaches overlooking the lake and are beautiful, comfortable and unique in their own way."
            }
        ]
    },
    {
        id: "mikumi",
        image: "/images/parks/tanzania/mikumi.jpg",
        gallery: [
            "/images/parks/tanzania/mikumi1.jpg",
            "/images/parks/tanzania/mikumi2.jpg",
            "/images/parks/tanzania/mikumi3.jpg"
        ],
        header: "Mikumi National Park",
        content: `Mikumi was made a National Park in 1964 and is 3,230 sq. km (1,250 sq. miles) in size. This enormous area links the Julius Nyerere National Park (formerly Selous) with the forested abundance of the eastern arc mountains, and so is an important part of a huge ecosystem of rivers, flood plains, forests and woodlands. The northern plains that surround the Mkata River are readily accessible and is the best place to go for wildlife. A good network of tracks means that a wide variety of wildlife including buffalo, cape hunting dog and lion are approachable and can be enjoyed at close quarters.`,
        subsections: [
            {
                subheader: "Wildlife",
                content: "Mikumi abounds with big game, including buffalo, elephant, the big cats, hippo, crocodile, giraffe, zebra, eland as well as smaller species. Some of the more unusual species such as sable antelope, Lichtenstein's hartebeest and greater kudu inhabit the wooded areas surrounding the Mkata plains and are more of a challenge to find. But they're there!"
            },
            {
                subheader: "Birds",
                content: "The area harbours multitude of bird species (400spp), from the striking turkey-sized group hornbill to the tiny sunbirds. Bateleur eagles are often seen soaring in the intense blue skies, and the lilac-breasted rollers add brilliance to their background."
            },
            {
                subheader: "Vegetation",
                content: "The park has a variety of vegetation types ranging from seasonally flooded grassland to woodland and riverine forest. The Afromontane Forest found on the summit of Malundwe Mountains is renowned for its unique flora and fauna."
            },
            {
                subheader: "Tourist Activities",
                content: "Game drives, night game driving, and guided walks are the main activities available in the park."
            },
            {
                subheader: "When to Go",
                content: "Mikumi's dry season lasts between May and November, but despite wet spells during the remaining months, the countryside is green and beautiful and a well established network of roads and tracks ensures enjoyable visits all year round."
            },
            {
                subheader: "Getting There",
                content: "By Air: The Mikumi National Park airstrip is at Kikoboga and scheduled flights operate daily from all the main centers in Tanzania, but often routing via Dar es Salaam. By Road: An approximate 4 hour drive, (283 km) on a good surfaced road connects Mikumi to Dar es Salaam via Morogoro. This road also connects to Udzungwa, Iringa and Ruaha. Its proximity to Dar es Salaam makes Mikumi a popular option for weekend visitors from the city, or for business visitors who don't have to spend a long time on an extended safari itinerary."
            },
            {
                subheader: "Safari Ideas",
                content: "On a safari from Dar es Salaam, Mikumi is en route to Udzungwa National Park and in the dry season a gravel road links up with Nyerere National Park (formerly the Selous) from where one can fly back to Dar es Salaam. From Mikumi one can also carry on through to Iringa and Ruaha National Park, either by air or road."
            },
            {
                subheader: "Tourist Facilities",
                content: "Mikumi National Park has bandas where visitors can stay as well as a public and special campsites which are booked through the Headquarters in Arusha. There are also well-appointed lodges and permanent tented camps in the Park run by private companies. Outside the Park there are guest houses in Mikumi town on the park border."
            }
        ]
    },
    {
        id: "nyerere",
        image: "/images/parks/tanzania/nyerere.jpg",
        gallery: [
            "/images/parks/tanzania/nyerere1.jpg",
            "/images/parks/tanzania/nyerere2.jpg",
            "/images/parks/tanzania/nyerere3.jpg"
        ],
        header: "Nyerere National Park (Formerly Selous)",
        content: `The Nyerere National Park, formerly part of The Selous Game Reserve is enormous, wild and remote. And it has great wildlife - big game, cape hunting dogs, sable, roan, greater and lesser kudu, raptors, ostrich, crocs, hippos etc. But the main point is that this wildlife can be enjoyed in such a variety of interesting habitats within this fabulous place. The park was first given formal protection in 1896 when Tanzania was a German colony, and hunting was allowed from 1905. In 2019 about 30,000 km was separated from the reserve and made into a National Park and renamed the Nyerere National Park in honor of Tanzania's first President who was himself a devoted conservationist.`,
        subsections: [
            {
                subheader: "Getting Around",
                content: "This National Park must have one of the best game viewing network of tracks of all National Parks, making a reasonably close but responsible approach to wildlife possible."
            },
            {
                subheader: "Altitude and Seasons",
                content: "The National park is at a relatively low altitude, averaging about 1000 meters above sea level. The dry season starts in June and lasts until about November, and although the remainder of the year is relatively wet the National Park is green and absolutely beautiful from December to February, with many parts easily accessible."
            },
            {
                subheader: "Rufiji River",
                content: "Tanzania's largest river, flows through the northern part of the Park, and this river which is slow moving and wide, has created a number of oxbow lakes in its northern flood plains, and they create a beautiful landscape of plains and woodlands interspersed with expanses of water. The lakes are fringed by borassus and doum palm groves and other attractive trees, and besides being home for very large populations of hippos and crocodiles, these lakes are a magnet for wildlife in the dry season."
            },
            {
                subheader: "Cape Hunting Dogs",
                content: "In Nyerere, African hunting dogs are thriving, unlike most of those elsewhere on the continent. Despite the fact that, this species is highly endangered and seen in few areas, the park has the last true stronghold for African hunting dog in Africa."
            },
            {
                subheader: "Vegetation",
                content: "The hinterland away from the river is characterized by extensive savannahs and woodlands, with occasional baobabs, and large stands of Terminalia trees with their tiers of attractive leaf tables These are intensively browsed by giraffe which arrived relatively recently into this area and are now increasing fast in numbers."
            },
            {
                subheader: "Tourist Activities",
                content: "Game drive: All sizes of roads and tracks are present in the National Park, and game driving along the numerous smaller tracks is a popular way of enjoying the wildlife. Boating: Watching wildlife from the water is a beautiful and different way of game viewing. Crocodiles and hippos abound and elephant, waterbuck and buffalo spend a lot of time near the water, but a mass of other game including birds will be seen. Walking safaris and fly camping: Guided walking safaris with overnight stays in light weight fly camps are popular. Boat safari: Game viewing by boat is also popular, either around one of the many small lakes that border the Rufiji River or on the Rufiji itself."
            },
            {
                subheader: "Getting There",
                content: "By Air: There are regular flights from Dar es Salaam and Arusha to a number of small airstrips supplying different camps and lodges. By Road: There are 2 ways of getting to the Park from Dar es Salaam. The shortest is about 240 km and goes via Kibiti to the Mtemere Gate. The longer but more interesting route (350 km) goes via Mikumi National Park, Morogoro, the Uluguru Mountains and Kisaki to the Matambwe Gate. By Train: The TAZARA railway traverses the National Park and one of the stops is at Kisaki, from where you will have to be picked up by a lodge vehicle. Other trains will stop at Matambwe near the Matambwe Gate."
            },
            {
                subheader: "Safari Ideas",
                content: "Nyerere National Park is well supplied with airstrips, and being relatively close to Dar es Salaam it fits well into many safari itineraries. This is especially since it is almost en route to Ruaha, Katavi and Mahale. And any one of these Parks can link by air to the northern circuits. Nyerere National Park also makes a fitting end to almost any safari in Tanzania because of it proximity to Dar es Salaam by air (45 minutes)."
            },
            {
                subheader: "Accommodations",
                content: "Every type and quality of accommodation is available from light weight fly camps to high end lodges."
            }
        ]
    },
    {
        id: "ruaha",
        image: "/images/parks/tanzania/ruaha.jpg",
        gallery: [
            "/images/parks/tanzania/ruaha1.jpg",
            "/images/parks/tanzania/ruaha2.jpg",
            "/images/parks/tanzania/ruaha3.jpg"
        ],
        header: "Ruaha National Park",
        content: `Ruaha National Park is vast, and was upgraded to a National Park in 1964 and was further enlarged in 2008 to its current size of 20,226 sq. km making it Tanzania's second largest National Park. This makes it about the size of New Jersey in the United States, or of the whole country of Wales in the UK! In fact Ruaha is part of a much larger ecosystem of about 45,000 sq. km. Nature reigns supreme across this enormous area. Rivers, mountains, plains, rock kopjes, swamps, dense woodlands, open savannas spread out across an immense landscape that has barely been touched by man. This is Africa of a bygone era – the world as it was before modern man.`,
        subsections: [
            {
                subheader: "Climate",
                content: "Ruaha's dry season is between June and October and its wet season is November to May. Temperatures range between 16 - 27 °C."
            },
            {
                subheader: "Great Ruaha River",
                content: "The only perennial river is the Great Ruaha River, which flows along the southeast boundary, but even this becomes only a trickle in places at the end of the dry season in October. Seasonal rivers are lined by scattered groves of palms, thorn trees, fig trees and sausage trees providing mid day shade for all sorts of wild animals."
            },
            {
                subheader: "Wildlife",
                content: "The wildlife is especially varied because of the overlap of eastern and southern African wildlife zones, so besides regular big game such as elephant, buffalo, and plains animals, the more unusual species such as the antelopes sable, roan, greater and lesser kudu are quite common. Cape hunting dog are also often encountered. Ruaha is also a great place for the big cats lion, leopard and cheetah."
            },
            {
                subheader: "Birdlife",
                content: "It is also understandably rich. In fact outstandingly so with over 550 species having been recorded, and an enormous variety of birds of prey."
            },
            {
                subheader: "Landscapes",
                content: "The park has breathtaking scenic and spectacular landscapes such as hills, woodlands, sand rivers and the Great Ruaha River which run through the park thus enhancing the unique beauty of the park."
            },
            {
                subheader: "Tourist Activities",
                content: "Game viewing by vehicle, walking safaris accompanied by an armed guide approved by the Park authorities, night game driving in approved locations, hot air Balloon Safari, spot fishing, and hot spa."
            },
            {
                subheader: "Getting There",
                content: "By Air: There are both scheduled and chartered flights into the park mainly from Arusha, Dodoma, Kigoma and Dar-es-salaam. Park's airstrips are located at Msembe and Jongomero. By Road: Driving to Ruaha is about 130 km from Iringa town and 625 km from Dar-es-salaam city. The road into the park is passable throughout the year."
            },
            {
                subheader: "Safari Ideas",
                content: "Ruaha lies almost directly on a route between Nyerere, Katavi and Mahale Mountains National Parks. The end point would be Dar es Salaam. This safari would combine the chimps of Lake Tanganyika, the vast flood plains of Katavi, the big game wonders of Ruaha, ending with the lakes and rivers of Nyerere National Park. A longer safari would start in Dar es Salaam and proceed via Julius Nyerere, Ruaha, Katavi and Mahale to Burigi Chato and then via boat to Rubondo Island in Lake Victoria and on east to the Serengeti National Park, ending in Arusha. What an odyssey! While visiting Ruaha National Park you may pass through the Isimila Stone Age and Mtwa Mkwawa Museum."
            },
            {
                subheader: "Accommodations",
                content: "The Park has public and special campsites for independent operators, as well as a hostel, self-catering bandas, and cottages. There are numerous lodges and permanent camps in the southern parts of the Park."
            }
        ]
    },
    {
        id: "ngorongoro",
        image: "/images/parks/tanzania/ngorongoro.jpg",
        gallery: [
            "/images/parks/tanzania/ngorongoro1.jpg",
            "/images/parks/tanzania/ngorongoro2.jpg",
            "/images/parks/tanzania/ngorongoro3.jpg"
        ],
        header: "Ngorongoro Conservation Area",
        content: `There are few places on earth quite like this park. It houses the "Big 5" animals, deep volcanic craters, and is home to the semi-nomadic Maasai people. The most well-known crater in Africa, the Ngorongoro Crater, is one of the largest of its kind and a true marvel to behold. The landscape consists of a mix of lakes, grasslands, swamps and wooded areas where domesticated Maasai livestock graze beside wild animals. There has been extensive archaeological research conducted on the property which has led to the discovery of fossilized footprints, and exhaustive evidence of human evolution. Today, it continues to be lead the way globally for its conservation efforts.`,
        subsections: [
            {
                subheader: "Overview",
                content: "The Ngorongoro Conservation Area is a UNESCO World Heritage Site featuring the world's largest inactive, intact, and unfilled volcanic caldera. It represents a unique blend of wildlife conservation and human habitation, with the Maasai people living alongside wild animals in a sustainable manner."
            }
        ]
    },
    {
        id: "serengeti",
        image: "/images/parks/tanzania/serengeti.jpg",
        gallery: [
            "/images/parks/tanzania/serengeti1.jpg",
            "/images/parks/tanzania/serengeti2.jpg",
            "/images/parks/tanzania/serengeti3.jpg"
        ],
        header: "Serengeti National Park",
        content: `Serengeti National Park was made into a National park in 1952. The boundaries were then changed and enlarged in 1959 to 14,763 sq. km. It is part of a coherent ecosystem some 35,000 sq. km in size. The Serengeti is now both a World Biosphere Reserve and a World Heritage Site. The Serengeti is world famous and with good reason. Not only is the migration of over 1.5 million wildebeest and other plains game through its plains and woodlands the most spectacular wildlife event on earth, but it abounds with other wildlife superlatives. The Serengeti is home to the world's largest populations of wildebeest, zebra, Cape eland, lion, cheetah, hyena, gazelle (both Thompson's and Grant's), and no doubt much more.`,
        subsections: [
            {
                subheader: "Park Character",
                content: "It is only when you get into the Serengeti on the ground that the vastness of the place becomes real. Many people think of it as only one destination to be seen in two days before rushing somewhere else. How wrong! There are very different places here with a range of habitats from treeless plains to mountains to closed canopy riverine forests and springs. On top of all this is the question of seasons. The wildlife and the character of places vary dramatically from one season to another."
            },
            {
                subheader: "The Great Migration",
                content: "The great wildebeest migration of more than 1.5 million accompanied by hundreds of thousands of zebras and half a million Gazelles as well as Elands with annual pattern seeking fresh grazing and water. Having a chance of encountering this phenomenon gives you a life experience from nature."
            },
            {
                subheader: "Wildlife",
                content: "All the classic big game animals of Africa are found in the Serengeti. Of recent importance are re-introduction programs for black rhino and Cape hunting dogs. The black rhino is being introduced in the north and south of the Park while hunting dogs are beginning to spread throughout."
            },
            {
                subheader: "Diverse Birdlife",
                content: "With more than 540 species recorded one quarter being those migrating from other parts of the world, part from an ecological important bird area and ideal place for bird lovers! Some of the species commonly seen are european and abdim's storks, eurasian roller, barn swallows etc."
            },
            {
                subheader: "Scenic and Spectacular Landscapes",
                content: "The vast scenic and unspoiled landscapes among others made this area recognized as a World Heritage Site by UNESCO. With its vast plains, rolling hills and island of Kopjes contribute to the beauty of the park. The towering granite monoliths of the southern plains, the 18 - 20 foot crocodiles of the rivers, shoulder to-shoulder masses of wildebeest on the move, and the chilling openness of the Gol Mountains are safari experiences that instill humility."
            },
            {
                subheader: "Tourist Activities",
                content: "Game viewing, walking safaris, black rhino viewing, and ballooning is now possible in the north, south and center of the Park."
            },
            {
                subheader: "When to Go",
                content: "The Serengeti is a year-round destination with access to all parts throughout the year."
            },
            {
                subheader: "Getting There",
                content: "By Air: There are all weather airstrips in the center at Seronera, in the south at Kusini, in the east at Lobo, in the west at Kirawira and in the north at Kogatende and Lamai. These airstrips are used by scheduled and private charters. By Road: Access is only possible through established entry points which are at Naabi Hill, Seronera, Ndutu, Kusini, Kirawira, Handajega, Ikoma, Tabora 'B', Lamai, Kleins. All entry fees are paid online through the Park HQ, and all entry points and the HQ are interconnected through the internet."
            },
            {
                subheader: "Historical Sites",
                content: "When in Serengeti you may visit Fort Ikoma a German fort that was set up at the end of the 1890's to spread the German influence in the Northern part of German East Africa. The Fort is situated on top of the most easterly of a series of low hills about one mile north of the Grumeti River. The first European to set foot in the area was the German explorer and naturalist Dr. Oscar Baumann, who passed by as an agent of the German Anti-Slavery Committee on his way to Burundi in 1892. Baumann was in fact the first European to visit both Ngorongoro and the Serengeti together with his compatriots who built the Fort. The Fort was used as an administrative centre and a military outpost until it fell to the British in 1917 as the Germans were forced to retreat from what is now Tanzania during the World War I."
            },
            {
                subheader: "Safari Ideas",
                content: "The Serengeti is on almost everyone's wish list for a safari to Tanzania, but one can only absorb the full extent of Tanzania's extraordinary depth and character as a safari destination by including other places in one's travels. The rugged wilderness of the southern and north western Parks, and the joys of Lakes Victoria and Tanganyika are a wonderful contrast. Indeed, one quickly reaches the conclusion that one safari is not enough. Welcome back one day!"
            },
            {
                subheader: "Accommodations",
                content: "The options are many. The park has public campsites, special campsites, seasonal campsites and a self-catering hostel for student groups, and cottages. In addition, there are accommodations provided by private companies, that range from hotels of the highest international standard to simple but comfortable lodges and permanent tented camps."
            }
        ]
    },
    {
        id: "tarangire",
        image: "/images/parks/tanzania/tarangire.jpg",
        gallery: [
            "/images/parks/tanzania/tarangire1.jpg",
            "/images/parks/tanzania/tarangire2.jpg",
            "/images/parks/tanzania/tarangire3.jpg"
        ],
        header: "Tarangire National Park",
        content: `The National Park is 2,850 square kilometers in area and was gazetted in 1970. It is only a small part of a much larger ecosystem of some 30,000 sq. km that comprises most of what is called the Maasai Steppe or southern Maasailand. Amongst safari connoisseurs; those who really enjoy the African safari travel experience – the vast open spaces, the Acacia savannas, the dramatic wildlife, the sandy river beds, the sausage trees, the changing seasons, the cool fresh mornings, the heat of mid-day, the day-long birdsong, the sound of crickets at night, the whooping call of hyena, the far distant roar of lion - Tarangire is a place to put on your itinerary.`,
        subsections: [
            {
                subheader: "Wildlife Concentration",
                content: "From the wide-open plains in the north, south along the Acacia and baobab studded ridges and valleys of the Tarangire River, and across vast seasonal swamps, wildlife gathers in large numbers. This is the dry season refuge for an enormous swathe of southern Maasailand, and between July and November the wildlife here is extraordinary by any standards Africa-wide. It has been estimated that at the height of the dry season in October the density of large animals - elephant, buffalo, zebra, wildebeest, ostrich, giraffe, eland etc. is second only to Ngorongoro Crater worldwide. This spectacle gathers around the scattered pools of permanent water along the Tarangire river bed, and also around Silale Swamp. Lion and leopard are frequently seen here as well."
            },
            {
                subheader: "Baobab Trees",
                content: "The huge baobab tree is characteristic of these savannas and have been described by naturalists as a complete ecosystem unto themselves; their nooks and crannies provide places for bee hives or are occupied by small mammals such as genet and civet cats, and their enormous flowers are pollinated by fruit bats. Many baobabs are hollow and have provided shelter for wandering bands of hunter-gatherers in the past."
            },
            {
                subheader: "Birdlife",
                content: "It is also a birder's paradise with more resident breeding species than anywhere else in Tanzania. Raptors are everywhere; from the masters of predation and soaring – the martial and bateleur eagles - down to the tiny but vicious pygmy falcon."
            },
            {
                subheader: "Tarangire River",
                content: "The river is fed by seasonal sand rivers originating to the East and South-eastern parts of the park. It flows northward along the park and empties into Lake Burunge. Within the park, the river is linked to/with Silale, Gurusi and Larmakau swamps."
            },
            {
                subheader: "Tourist Activities",
                content: "Day game viewing, night game drives, balloon safaris, and walking safaris with an armed guide are available."
            },
            {
                subheader: "When to Go",
                content: "This is a year-round park with the distinct seasons offering different experiences, from dry and dusty with animals clustered around shrinking water holes and the trickle of Tarangire River, to the green season full of new born animals and chattering birds."
            },
            {
                subheader: "Getting There",
                content: "By Air: There is an airstrip at Kuro in the center of the Park with daily scheduled flights to all main safari destinations in Tanzania. By Road: The journey from Arusha is on a good road and only takes about 1½ hours to the Main Gate in the north. For this reason, safaris often begin here. There is also an entry gate at Boundary Hill on the eastern side of the park to service people staying at camps and lodges in community areas outside the park, and a gate at Sangaiwe on the western side with easy access from the main road to Dodoma."
            },
            {
                subheader: "Safari Ideas",
                content: "Tarangire fits well into northern circuit safari itineraries. As a variation from more traditional itineraries the western Gate at Sangaiwe gives easy access to the southern entry to Lake Manyara from where a traverse of the Park leads to the village of Mto wa Mbu and from there on up through Karatu to Ngorongoro and the Serengeti."
            },
            {
                subheader: "Accommodations",
                content: "The park owns a well-furnished rest house, cottages and a student hostel. Also the park has 2 public campsites in the north and a scattering of special campsites throughout the park. Special campsites are booked through TANAPA HQ in Arusha while public campsites are booked and paid for at the entry gates. There are permanent camps and lodges both within and outside the Park."
            }
        ]
    }
];