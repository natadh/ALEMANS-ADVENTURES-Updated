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

export const tanzaniaTravelInfoData: TravelSection[] = [
  {
    header: "Tanzania Travel Information",
    content: "",
    subsections: [
      { 
        subheader: "Area", 
        content: "945,097 square kilometres" 
      },
      { 
        subheader: "Capital City", 
        content: "Dodoma" 
      },
      { 
        subheader: "Official Language", 
        content: "Swahili although English is widely spoken." 
      },
      { 
        subheader: "Official Currency", 
        content: "Tanzanian Shilling" 
      },
      { 
        subheader: "Time Zone", 
        content: "3 hrs ahead of GMT" 
      },
      { 
        subheader: "Calling Code", 
        content: "The international code for Tanzania is +255" 
      },
      { 
        subheader: "Climate", 
        content: "Tanzania enjoys a tropical climate which varies according to altitude. The rainy seasons in Tanzania are from March to May and November to December." 
      },
      { 
        subheader: "Hotels and Restaurants", 
        content: "There is abundant accommodation that suits the tastes and needs of various travelers, ranging from luxury and standard hotels to guest houses, lodges and bungalows. Hotels and lodges usually offer internet and wifi connections and phone services. Plenteous restaurants offer both local and international cuisine." 
      },
      { 
        subheader: "ATMs", 
        content: "Numerous ATMs from different banks are found in most parts of the country." 
      },
      { 
        subheader: "Credit Cards and Cheques", 
        content: "Tanzania has a cash based economy and cash is more readily accepted than travellers cheques. Credit cards are accepted on a limited basis." 
      },
      { 
        subheader: "Transport", 
        content: "Both Dar Es Salaam and Kilimanjaro Airports are served with international flights. A popular way to move around the city is by taxis." 
      },
      { 
        subheader: "Communication", 
        content: "There's mobile phone 3G and 4G network throughout the country. Travellers are however advised to contact their respective service providers to ensure they have international roaming to enjoy these services. There are lots of internet cafes in major towns and cities." 
      },
    ]
  },
  {
    header: "Entry Requirements",
    content: "A passport is required by all. Visas can be received from Tanzanian embassies abroad or at the points of entry.",
    subsections: [
      { 
        subheader: "Visa Requirements", 
        content: "Prior to departing for Tanzania, it is essential that you check with the Tanzania embassy or consulate regarding the visa requirements for entry. It is advisable to purchase visas prior to departure for Tanzania in order to avoid any delays upon arrival. While it is possible to purchase a visa upon arrival in Tanzania, it can mean standing in a long queue after an international flight and only US dollars are accepted for visas." 
      },
    ]
  },
  {
    header: "Airport Tax",
    content: "Departure tax from mainland Tanzania is included in the price of your ticket, however in Zanzibar there is a departure tax of USD 25 payable at the airport. There is a TSH 5,000 (approx USD 5) tax levied on passengers within Tanzania.",
    subsections: []
  },
  {
    header: "Health",
    content: "Tanzania has a tropical climate and different bacteria, flora and fauna than most visitors are accustomed to, so it is advisable to take a few health precautions when travelling to make sure that your trip goes as comfortably and smoothly as possible. When travelling to Tanzania it is best to contact a travel health professional well before travelling for the latest information on health and vaccinations recommended.",
    subsections: [
      { 
        subheader: "Malaria Prevention", 
        content: "Malaria is usually top on the list of visitor's worries and prevention goes a long way toward keeping you protected. Make sure to visit your doctor to get a prescription for anti-malarial drugs that best suits you." 
      },
      { 
        subheader: "Vaccinations", 
        content: "The yellow fever vaccination is no longer officially required when entering Tanzania, however, this is still a requirement if you wish to visit Zanzibar. Other vaccinations should be considered. For more information, contact your doctor well in advance of your visit." 
      },
    ]
  },
  {
    header: "Security",
    content: "Tanzania is a safe country to travel in. Tanzanians are warm-hearted and generous people and are eager to help visitors get the most out of their stay. Tanzania is a politically stable, multi-democratic country. As in all countries, a little common sense goes a long way and reasonable precautions should still be taken, such as locking valuables in the hotel safe and not walking alone at night.",
    subsections: []
  },
  {
    header: "Wild Animals",
    content: "Many of the animals and reptiles you will see are potentially dangerous. Attacks by wild animals are rare. However, no safari in Africa can guarantee that such incidents will not occur. Please note that most camps are unfenced. Please make sure that you listen to and abide by the safety talks given by your guides or lodge/camp staff. Don't wander off on your own without a guide – even to your room. After retiring to your rooms at night, don't leave your rooms without signaling for a guard to come and escort you. If you are sensible, you will be safe.",
    subsections: []
  },
  {
    header: "Water",
    content: "Visitors to Tanzania are prohibited from taking tap water. Always go for bottled water. This is to avoid getting amoeba. Classic Journeys will provide 2 bottles of ½ litre mineral water during the drives from one point to another.",
    subsections: []
  },
  {
    header: "Language",
    content: "English is widely spoken in lodges, camps and at the towns, but Swahili is a beautiful language, and you may want to learn some basic words. Here are some basic phrases to get you started.",
    subsections: []
  },
  {
    header: "Roads",
    content: "When visiting remote areas or national parks and reserves, the roads will be rough and bumpy. Occasionally you will travel 'off road', where it is possible that injuries may occur – if for example a hidden pothole is struck. Most main roads are tarred, but not those in the national parks.",
    subsections: []
  },
];