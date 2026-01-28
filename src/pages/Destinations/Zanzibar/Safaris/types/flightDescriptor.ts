// ---------- DESTINATIONS ----------
export type DestinationItem = {
  id: string;
  title: string;
  description: string;
  flightTime?: string;
  highlights?: string[];
};

// ---------- FAQ ----------
export type FAQItem = {
  key: string;
  question: string;
  answer: string;
};

// ---------- SECTIONS ----------
export type DestinationSection = {
  type: "destinations";
  title: string;
  items: DestinationItem[];
};

export type FAQSection = {
  type: "faq";
  title: string;
  items: FAQItem[];
};

export type ListSection = {
  type: "list";
  title: string;
  items: string[];
};

// ---------- UNION ----------
export type DescriptorSection =
  | DestinationSection
  | FAQSection
  | ListSection;

// ---------- ROOT ----------
export type FlightDescriptorData = {
  id: string;
  title: string;
  intro?: string;
  sections: DescriptorSection[];
};
