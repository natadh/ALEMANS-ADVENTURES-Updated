export interface TravelTableRow {
  area: string;
  altitude: string;
  rain: string;
  temperature: string;
}
export interface TravelSubsection {
  subheader: string;
  content?: string;
  table?: TravelTableRow[];
}

export interface TravelSection {
  header: string;
  content: string;
  subsections: TravelSubsection[];
}

export const travelInfoData: TravelSection[] = [
  {
    header: "Kenya Travel Information",
    content: "",
    subsections: [
      { subheader: "Kenya", content: "Is named after Mt. Kenya or’’ Kirinyaga ‘’ the mountain of the whiteness" },
      { subheader: "Position", content: "Kenya is part of East Africa, straddles the Equator and is on the Indian Ocean." },
      { subheader: "Area", content: "Kenya covers an area of 583,000 sq kms, 13,000 of which is inland water in the form of Lake Victoria, Largest African Lake and Worlds second." },
      { subheader: "Borders", content: "Kenya is bordered by Tanzania, South Sudan, Uganda, Ethiopia, Somalia and the Indian Ocean." },
      { subheader: "Rivers and Lakes", content: "The main rivers are the Athi and the Tana. The major Lakes include Lake Victoria (the 2 nd largest in the world, Turkana (the biggest permanent desert lake), Naivasha, Baringo, Nakuru, Bogoria Magadi, Jipe and Elementaita." },
      { subheader: "Economy", content: " Kenya is among the fastest growing economies in Africa at no. 6 in Africa 2015" },
      { subheader: "Climate", content: "The coast is always hot with an average daytime temperature of 27 – 31         degrees centigrade whilst the average daytime temperature in Nairobi is 21 -26 degrees centigrade. Temperatures elsewhere depend on altitude. July to august marks Kenya’s winter. Broadly speaking, January – February is dry. March to May is wet, June to September is dry. October to December is wet." },
      { subheader: "Government", content: "Kenya is an independent Democratic republic divided into National and County governments." },
      { subheader: "People of Kenya", content: "There are 3 tribal grouping of people in Kenya. The Bantu (originally from central and southern Africa) who are the Majority followed by the Nilotic (originally from along the river Nile) and lastly the cushites (with Arabic similarities fro the middle east). There are also groups of settler communities consisting of Arabs, Indians and Caucasians." },
      { subheader: "Religion", content: "Christianity is the dominant religion in Kenya consisting of Protestants 60% and Catholics 40%. 20% of the people profess traditional believes while 2% are Muslims." },
      { subheader: "Language", content: "The national language is Kiswahili whereas English is the official language." },
      { subheader: "Highest Point", content: "Mt Kenya is the highest point at 5199 Mts, the second highest in Africa and one of the highest standing mountains in the world with a diameter of 200 Km’s." },
      { subheader: "Capital City", content: "Nairobi is both the capital and administration city with approximately 6 million people and the third biggest in Africa." },
      { subheader: "National Parks and Game Reserves", content: "The total wildlife conservation area is 44,359 sq Kms  or 7.6% of the total land area. There are two main Marine parks: Mombasa and Malindi/ Watamu marine parks." },
      { subheader: "Birds", content: " There are around 1,500 species of birds in Kenya which is perhaps the finest country in Africa for bird watching." },
      { subheader: "Wildlife", content: "Over 80 species ranging from the Big five to the smallest five of the wild." },
      { subheader: "Documents", content: " A passport Valid for at least 6 months after you travel ends is required. You may require a valid 10yrs Yellow fever certificate in some countries and although sometimes not mandatory. 1 visa required for Kenya, Uganda and Rwanda." },
      { subheader: "Customs", content: "You may bring into East Africa all the personal effects that you may require including cameras, and any amount of film. However, DO not be attempted to buy ivory, tortoise shell, elephant hair bracelets, or any animal products." },
      { subheader: "Medical", content: "Hepatitis (A & B), typhoid and tetanus inoculations are recommended but not mandatory. Consult your doctor for a prescription for a Malaria suppressant at least 2 weeks prior to departure as tablets should be taken a week before you depart, as well as during and after the trip." },
      { subheader: "Food and Water", content: "Food, even on safari is carefully prepared and the local cuisine is refreshing. Most meals include a buffet of some kind and also Ala carte menus are available. Tap water is not safe for drinking, always boil water or use mineral water." },
      {
        subheader: "Altitude and Weather Chart", table: [
          { area: "Aberdares", altitude: "9,800", rain: "0.5 to 6.5", temperature: "60/85" },
          { area: "Amboseli", altitude: "3,782", rain: "0.2 to 7.6", temperature: "65/90" },
          { area: "Masai Mara", altitude: "5,000 – 6,400", rain: "0.4 to 5.5", temperature: "46/80" },
          { area: "Mombasa", altitude: "3", rain: "0.7 to 5.9", temperature: "69/89" },
          { area: "Nairobi", altitude: "5,700", rain: "0.5 to 6.0", temperature: "55/75" },
          { area: "Nakuru", altitude: "6,407", rain: "1.4 to 4.4", temperature: "50/78" },
          { area: "Nanyuki", altitude: "6,386", rain: "0.5 to 4.7", temperature: "44/75" },
          { area: "Samburu", altitude: "2,600 – 4,000", rain: "0.1 to 4.4", temperature: "62/82" },
          { area: "Tsavo", altitude: "1,446", rain: "0.1 to 4.9", temperature: "68/88" },
        ]
      }
    ]
  },
  { header: "Departures & Arrivals", content: "You will be met upon arrival at Jomo Kenyatta Airport by Classic Journeys Africa Representative, who will brief you on the wonderful events ahead.", subsections: [] },
  {
    header: "Entry Requirements", content: `For Kenya, a passport valid for at least 6 months after your travel ends is required. Please note that you must have two blank VISA pages in your passport for each visa you will need. The last page of your passport is not a visa page.
You may elect to obtain your visa directly through the proper consulate office in the US. Alternatively, you may purchase a visa at the airport upon arrival.
The visa cost is currently $50 which must be paid in cash. Old and/or crumpled bills are not accepted. Bills should be newer than 2003 and crisp. Kenya no longer requires visas for visitors under the age of 16 yrs.
Yellow Fever Vaccination cards are required. Please check before departure as the status of this requirement changes frequently.

AIR TICKETS MUST BE IN THE SAME NAME THAT APPEARS ON YOUR PASSPORT.
PLEASE MAKE CERTAIN THAT YOU HAVE GIVEN US THE NAME USED ON YOUR PASSPORT AND THAT YOUR E-TICKETS ARE CORRECT.`, subsections: []
  },
  { header: "Departure Taxes", content: "Departure taxes for all countries should be included in the air tickets; however, there is the possibility of additional locally-imposed taxes which would be charged on the spot", subsections: [] },
  { header: "Baggage Allowance", content: "On flights within Africa the cumulative weight of all bags is limited to 15kgs. The size and the structure of the bag are also limited. Soft “squashable” bags (canvas, fabric or duffel bags) are ideal. Large suitcases are extremely difficult to store on safari vehicles and should not be used. If you would like to use your additional international luggage allotment to bring books or gifts for school children or orphans, our Nairobi office will gladly distribute them on your behalf. Or you can take them with you to your first camp and deliver them personally to one of the schools.", subsections: [] },
  { header: "Flights and Transfers", content: "Check-in is one hour prior for domestic departures and two hours prior for international departures.", subsections: [] },
  { header: "Customs", content: `You may bring into East Africa all the personal effects that you need, including cameras, and any amount of film.`, subsections: [] },
  { header: "Taking Care of Yourself", content: "content", subsections: [] },
  {
    header: "Vaccinations", content: `Yellow Fever is recommended for visitors going to Kenya and may be required at the time of your travel if you are arriving from an endemic country. At the time of printing it is required for travel to Mafia Island. After immunization, an International Certificate of Vaccination is issued.
In addition, hepatitis (A & B), typhoid and tetanus vaccinations are recommended but not mandatory. For malaria, the best prevention is to avoid mosquito bites. Wear long slacks and long sleeved shirts, use mosquito nets, and a repellent with 30% DEET or oil of citronella. You can purchase good repellants in Kenya but it will be more convenient to buy it before you go. Malaria symptoms can appear as few as 8 days after exposure or a year later. Do not be misled by flu like symptoms of chills and fever. Since some doctors are unfamiliar with malaria, insist upon a blood test. Delays in treatment can have serious consequences.
`, subsections: []
  },
  {
    header: "Food and Water", content: `Food served at your accommodation is carefully prepared, varied and tasty. Many of the vegetable are locally grown in gardens at your camp. Do NOT drink tap water anywhere in East Africa. Bottled water and treated water is readily available, so please do not allow yourself to become dehydrated. Water found in bottles in your room or served with meals is safe to drink. It is generally recommended to drink at least 2 to 3 liters (4 to 6 pints) of water per day to avoid becoming dehydrated.
Do remember that you are in a warm climate so avoid foods with mayonnaise that may have been left out too long and unpeeled fruits outside your lodge or hotel. Some people experience mild diarrhea at some point on safari so it is a good idea to bring a treatment such as Pepto-Bismol and stronger medication such as Imodium if that doesn’t do the trick.
`, subsections: []
  },
  { header: "In Shape", content: "Your safari will not include strenuous activity. In East Africa, rough roads and driving “off road” in game reserves and parks may bounce you around so you should be prepared. Walking safaris (when available) are given at a leisurely pace in order to closely examine the flora and fauna of the area.", subsections: [] },
  {
    header: "Health Abroad", content: `Your program includes some of the most exciting and awe-inspiring areas of the world, yet they may not always conform to US / European health standards. In case there is a need for medical attention, there are excellent doctors and hospitals in Nairobi and you are enrolled in the Flying Doctor service which provides for medical evacuation to Nairobi.

`, subsections: []
  },
  {
    header: "Climate", content: `Kenya is divided by the Equator and enjoys a tropical climate. It is hot and humid at the coast, temperate inland and very dry in the north and northeast parts of the country. The hottest period is in February and March and the coldest in July and August. The long rains occur from April to June and short rains from October to December. Rainfall is sometimes heavy and tends to fall in the afternoon and evenings. Conditions in East Africa are often ideal, although the coast can be humid and there are hot, desert conditions at arid sites like Olorgesaillie and around Lake Turkana. But most of your destinations in Kenya boast temperatures between 70ºF-90ºF by day, and rarely below 55ºF at night. Even during the short rains, the humidity is low for much of the day, and the skies clear enough to reveal the Milky Way.

`, subsections: []
  },
  {
    header: "Money Matters", content: `* Please note you should bring cash money from 2003 series and above series as Hotels, Banks and Bureaus no longer accept old notes.

`, subsections: []
  },
  {
    header: "Photography & Digital Cameras", content: `Africa is the ultimate photo op…You will be amazed at how many photos you take! You may want to bring extra memory sticks. Be aware that digital cameras consume a large amount of battery power. Bring multiple extra or rechargeable batteries, but plan ahead for charging time (not always available) – and remembering to do it! While charging facilities are available in most lodges and camps, you must remember to bring your own adapters.
Many photo opportunities arise while you are in a vehicle. The slightest vibration may blur the image, so ask the driver if it is possible to kill the engine for a moment. You may also find a bean bag useful as a “tripod” camera rest. You can pack a little canvas bag or ziplock plastic and fill it with coffee beans for use as a lens pillow, then empty it to pack flat when you leave. We recommend a 75-300 mm telephoto zoom. For landscapes or herds, we recommend a wide angle, 28 or 35mm lens. Remember that wildlife behave most naturally if they forget human presence, so try to whisper. The best scenes result from patience. Please refrain from taking any photographs at airports, harbors, or government buildings, considered illegal in many African countries. If you want to photograph any local people, you must ask permission, and expect to tip them. It is best to check with your driver/guide first.
`, subsections: []
  },
  { header: "Charging Video and Digital Cameras", content: "Charging facilities for video and digital cameras should be available in every camp on the safari, as long as you have a standard charger that will plug into 220 volts. Please bring along enough batteries to last you at least three days of video filming.", subsections: [] },
  {
    header: "A Word About Binoculars", content: `Although many species of wildlife will be seen up-close, binoculars will add immeasurably to your viewing enjoyment. Binoculars should be at least 8 power (8x) and have a wide field of view to allow you to quickly find whatever it is you want to see, whether a bird flitting through the brush of a distance cheetah chasing an antelope. Some binoculars have the added advantage of “gathering light,” making objects brighter in dim morning and evening conditions. This light-gathering capability is determined by a measurement called the “exit pupil”, which is calculated by dividing the diameter of the front (objective) lens in millimeters by the power (8x, for example). These two measurements are commonly designated on binoculars as a measurement such as 8×42, which translates to 8 power with a 42 mm objective lens. The exit pupil in this instance is 42/8, or 5.25. Since the human eye can process light delivered by an exit pupil of about 4.0, these binoculars will appear bright even in dim light.
Some very small binoculars are relatively inexpensive, such as 8×21. With a very narrow field of view (usually about 400 feet at 1,000 yards) and an exit pupil of only 21/8 = 2.6, these binoculars are designed for viewing stationary objects in bright light, such as at the opera, and are poorly designed for looking at wildlife. You will be far happier with binoculars designated in the range of 8×40 to 10×50.
`, subsections: []
  },
  { header: "The Safari Life", content: "content", subsections: [] },
  { header: "Accommodation", content: "While on safari in Kenya expect comfortable beds, fresh linens, superb meals and hot (mostly) showers in en suite facilities. Your tented camps usually provide amenities such as soaps, shampoos and insect repellents. Rooms and tents are either mosquito proof or offer mosquito nets over the bed. You will not find telephones or television (except in Nairobi). You will find unexpected comfort and décor.", subsections: [] },
  { header: "Roads", content: "When visiting remote areas or national parks and reserves, the roads will be rough and bumpy. Occasionally you will travel “off road”, where it is possible that injuries may occur – if for example a hidden pothole is struck. Most main roads are tarred, but not those in the national parks.", subsections: [] },
  {
    header: "Mobile Telephones", content: `Telecommunications in the urban areas are easily accessible but camps often do not have mobile reception. Not all mobile phones and PDAs work overseas. If you plan to receive calls or messages, be sure to check with your mobile provider before you leave the states. It is also a good idea to get the number to call from overseas in case of service problems.

As most people come on safari to “get away from it all”, we suggest the following guidelines on the use of satellite or mobile phones:
1. Please use your phone in the privacy of your room only.
2. Phones should be used for outgoing calls and to check messages only. Incoming calls, and the loud ringing that ensues, should be curtailed.
3. Please do not take your phone or PDA with you on game activities or use them in the presence of other guests.
`, subsections: []
  },
  { header: "Electrical Power on Safari", content: "Most lodges and camps on safari are situated in remote areas and have to generate their own electricity. Generators generally run for about 6 hours per day when guests are out on activities. These generators charge batteries located at each tented room or supply power to each guest lodge room. Typically, power will be available when you are in the lodge or camp, except during the night. Therefore, it is imperative that you have your own flashlight handy. Electrical plug outlets are not usually available in tents so it is not possible to use such appliances such as hairdryers or electric shavers during your stay. Solar heated water is used for showers.", subsections: [] },
  { header: "Voltage", content: "In Kenya the power system is 240 volts AC, with 13 amp square pin plugs. Bring an adaptor/converter for small appliances. Most hotels and lodges will happily recharge video camera batteries at the reception area. And many of the most select hotels in larger cities offer in-room hair dryers. The bush lodgings all generate their own power and there may be hours when power is off…usually mid-day when everyone is out game-driving or during late night hours.", subsections: [] },
  { header: "Smoking Policy", content: "While on safari, there is a no-smoking policy at meals, on the vehicles, on the aircraft, and on boats (in fact anywhere where there is a fire hazard). If you are a smoker, there will be “smoke breaks” on the drives to keep you happy!", subsections: [] },
  { header: "Wild Animals", content: "Attacks by wild animals are rare. However, no safari in Africa can guarantee that such incidents will not occur. Please note that most camps are unfenced. Please make sure that you listen to and abide by the safety talks given by your guides or lodge/camp staff. Don’t wander off on your own without a guide – even to your room. After retiring to your rooms at night, don’t leave your rooms without signaling for a guard to come and escort you. If you are sensible, you will be safe.", subsections: [] },
  {
    header: "Flashlights", content: `As the grounds of many lodges/camps are unfenced it is essential that you bring a small flashlight (locally known as a torch) as you may encounter wild animals at night and may need it at night in your room when generators are turned off. You should also bring spare batteries as they may be unobtainable en route.
MORE THINGS YOU SHOULD KNOW
`, subsections: []
  },
  { header: "More Things You Should Know", content: "content", subsections: [] },
  { header: "Language", content: "English is widely spoken in lodges, camps and the larger towns, but Swahili is a beautiful language, and you may want to learn some basic words. Here are some basic phrases to get you started.", subsections: [] },
  { header: "Time", content: "Kenya is 8 hours ahead of the EST.", subsections: [] },
  { header: "Safety and Security", content: "Avoid crowds in large cities and street demonstrations and maintain a low profile. It is unwise to walk alone at night outside the immediate grounds of city hotels. The loss or theft abroad of a. passport should be reported immediately to the local authorities and the nearest US Embassy or Consulate.", subsections: [] },
  { header: "Medical Facilities", content: "Adequate medical facilities are available in Nairobi and Mombasa. Doctors and hospitals often expect immediate cash payment for health care services. U.S. medical insurance is not always valid outside the United States.", subsections: [] },
  { header: "Insurance Cover", content: "Alemans Adventures and  their representatives,are not responsible for any loss or   damage to your baggage or other personal  effects. It is recommended that valuable items be insured and camera equipment and medication be carried in hand luggage", subsections: [] }
];
