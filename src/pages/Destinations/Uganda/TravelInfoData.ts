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

export const ugandaTravelInfoData: TravelSection[] = [
  {
    header: "Uganda Travel Information",
    content: "The Republic of Uganda's name has been derived from the Kingdom of Buganda, which used to include a section of today's south Uganda including the capital city of Kampala. This landlocked East African nation is bordered by Kenya on the east, the Democratic Republic of Congo on the west, Sudan on the north, Tanzania on the south, and Rwanda on the southwest.",
    subsections: [
      { 
        subheader: "Uganda - The Pearl of Africa", 
        content: "A country with fantastic natural scenery and a rich mosaic of tribes and cultures. Traveling through Uganda, you will be captivated by its beauty, safety and accessibility. The friendliness of Ugandans and the country's landscape are outstanding. It is one of the most appealing nations and Africa's friendliest destinations." 
      },
      { 
        subheader: "Area", 
        content: "Land Area: 197,097 Sq. Km | Water and Swamps: 43,942 Sq. Km | Total Area: 241,039 Sq. Km. Uganda has a total landmass of 241,000 square kilometers, 18 percent of which is covered by freshwater bodies." 
      },
      { 
        subheader: "Capital City", 
        content: "Kampala is the capital city of Uganda." 
      },
      { 
        subheader: "Currency", 
        content: "Uganda Shilling" 
      },
      { 
        subheader: "Time Zone", 
        content: "GMT + 3" 
      },
      { 
        subheader: "Official Language", 
        content: "English is the official and administrative language spoken in Uganda." 
      },
      { 
        subheader: "Other Languages", 
        content: "Swahili and Luganda are commonly spoken throughout the country. Uganda has so many languages spoken given the many tribes that speak different languages. You need some basics in Luganda like how to thank, greet, and ask for something." 
      },
      { 
        subheader: "Geography & Location", 
        content: "Uganda is located in the heart of Sub-Saharan Africa and lies astride the Equator. The country is landlocked and borders Sudan to the north, the Democratic Republic of Congo to the west, Kenya to the east, and Tanzania and Rwanda to the south. Uganda is strategically positioned within East and Central Africa, a region that includes some of Africa's most economically important and resource rich countries." 
      },
      { 
        subheader: "Geographical Diversity", 
        content: "Lying astride the equator, Uganda offers exceptional diversity, combining some of the best features of Africa, including the source of the River Nile (the second longest river in the world) and Lake Victoria (the second largest fresh water lake in the world). The country's geographical diversity is great. In the East, it overlaps the tropical Savannah and, in the West, African rain-forest zones. Moreover, there are many existing contrasting physical features, ranging from extensive plains with undulating hills to snow-capped mountains, waterfalls, meandering rivers and spectacular flora and fauna." 
      },
      { 
        subheader: "Wildlife", 
        content: "Uganda ranks among the top ten countries in the world in terms of the diversity of its mammal groups." 
      },
      { 
        subheader: "People of Uganda", 
        content: "Uganda is a country made up of over 50 tribes of which the largest group is the Baganda, followed by Basoga and then the others follow. The people are very welcoming and this hospitality is attributed to the respect that people have for the other tribes, making Uganda Africa's friendliest country." 
      },
    ]
  },
  {
    header: "Things to See",
    content: "Uganda is a beautiful East Africa country gifted by nature with numerous tourist attractions that range from Gorillas at Bwindi National Park, the River Nile, the snow peaked Mount Ruwenzori, Lake Victoria – Africa's largest fresh water lake and wildlife that is to be found at Queen Elizabeth National Park, Kibale National Park, Murchison Falls Game Sanctuary among numerous other game sanctuaries.",
    subsections: []
  },
  {
    header: "Climate",
    content: "The climate in Uganda is relatively favorable since it does not call for very light or very heavy clothing most times with most parts in Uganda recording an average temperature of 24°C and as low as 14°C in the high altitude based areas, mainly in the western part since it is mountainous. For this reason, any type of clothing can actually suit you.",
    subsections: [
      { 
        subheader: "Weather Preparation", 
        content: "An umbrella is an important tool to walk with since there are very sudden weather changes as you can even get showers in the dry season. A warmer is mostly necessary for the morning hours when the temperatures are low and this is before the sun rises." 
      },
    ]
  },
  {
    header: "What to Pack",
    content: "Due to Uganda's varied climate and terrain, it's important to pack appropriately for your visit.",
    subsections: [
      { 
        subheader: "Clothing", 
        content: "All types of clothing can suit you given the moderate temperatures. Pack layers that can be added or removed as needed. Light, breathable fabrics for daytime and warmer layers for cooler mornings and evenings in mountainous areas." 
      },
      { 
        subheader: "Essential Items", 
        content: "An umbrella or rain jacket is essential as sudden showers can occur even in the dry season. Bring a light sweater or jacket for early mornings when temperatures are cooler." 
      },
    ]
  },
];