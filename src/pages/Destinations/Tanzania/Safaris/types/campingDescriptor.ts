export type CampingContentItem = {
  paragraph: string;
};

export type CampingSection = {
  type: "content";
  title: string;
  items: CampingContentItem[];
  highlights?: string[];
};

export type CampingTypesDescriptorData = {
  id: string;
  title: string;
  intro?: string;
  sections: CampingSection[];
};
