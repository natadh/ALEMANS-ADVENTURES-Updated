export interface TravelSubsection {
  subheader: string;
  content?: string;
}

export interface TravelSection {
  header: string;
  content: string;
  subsections: TravelSubsection[];
}

export const zanzibarTravelInfoData: TravelSection[] = [
  {
    header: "Area",
    content: "984 square kilometers",
    subsections: []
  },
  {
    header: "Official Language",
    content: "Swahili and English are the official languages.",
    subsections: []
  },
  {
    header: "Official Currency",
    content: "Tanzania Shilling",
    subsections: []
  },
  {
    header: "Time Zone",
    content: "3 hrs ahead of GMT",
    subsections: []
  },
  {
    header: "Climate",
    content: "Enjoys tropical climate largely dominated by the Indian Ocean monsoons. The rainy season is from March to May. Temperature ranges from 24-27 degrees centigrade.",
    subsections: []
  },
  {
    header: "Hotels and Restaurants",
    content: "As an Island destination, Zanzibar offers a wide array of accommodations including hotels, guest houses, beach resorts and island getaways. Restaurants offer locally available foods such as seafood delicacies.",
    subsections: []
  },
  {
    header: "ATM",
    content: "Available at various sites in Zanzibar.",
    subsections: []
  }
];