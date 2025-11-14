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
      { subheader: "Borders", content: "content" },
      { subheader: "Rivers and Lakes", content: "content" },
      { subheader: "Economy", content: "content" },
      { subheader: "Climate", content: "content" },
      { subheader: "Government", content: "content" },
      { subheader: "People of Kenya", content: "content" },
      { subheader: "Religion", content: "content" },
      { subheader: "Language", content: "content" },
      { subheader: "Highest Point", content: "content" },
      { subheader: "Capital City", content: "content" },
      { subheader: "National Parks and Game Reserves", content: "content" },
      { subheader: "Birds", content: "content" },
      { subheader: "Wildlife", content: "content" },
      { subheader: "Documents", content: "content" },
      { subheader: "Customs", content: "content" },
      { subheader: "Medical", content: "content" },
      { subheader: "Food and Water", content: "content" },
      { subheader: "Altitude and Weather Chart", table: [
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
  { header: "Departures & Arrivals", content: "content", subsections: [] },
  { header: "Entry Requirements", content: "content", subsections: [] },
  { header: "Departure Taxes", content: "content", subsections: [] },
  { header: "Baggage Allowance", content: "content", subsections: [] },
  { header: "Flights and Transfers", content: "content", subsections: [] },
  { header: "Customs", content: "content", subsections: [] },
  { header: "Taking Care of Yourself", content: "content", subsections: [] },
  { header: "Vaccinations", content: "content", subsections: [] },
  { header: "Food and Water", content: "content", subsections: [] },
  { header: "In Shape", content: "content", subsections: [] },
  { header: "Health Abroad", content: "content", subsections: [] },
  { header: "Climate", content: "content", subsections: [] },
  { header: "Money Matters", content: "content", subsections: [] },
  { header: "Photography & Digital Cameras", content: "content", subsections: [] },
  { header: "Charging Video and Digital Cameras", content: "content", subsections: [] },
  { header: "A Word About Binoculars", content: "content", subsections: [] },
  { header: "The Safari Life", content: "content", subsections: [] },
  { header: "Accommodation", content: "content", subsections: [] },
  { header: "Roads", content: "content", subsections: [] },
  { header: "Mobile Telephones", content: "content", subsections: [] },
  { header: "Electrical Power on Safari", content: "content", subsections: [] },
  { header: "Voltage", content: "content", subsections: [] },
  { header: "Smoking Policy", content: "content", subsections: [] },
  { header: "Wild Animals", content: "content", subsections: [] },
  { header: "Flashlights", content: "content", subsections: [] },
  { header: "More Things You Should Know", content: "content", subsections: [] },
  { header: "Language", content: "content", subsections: [] },
  { header: "Time", content: "content", subsections: [] },
  { header: "Safety and Security", content: "content", subsections: [] },
  { header: "Medical Facilities", content: "content", subsections: [] },
  { header: "Insurance Cover", content: "content", subsections: [] }
];
