export interface ParkSubsection {
    subheader: string;
    content?: string;
}

export interface ParkSection {
    id: string;
    header: string;
    image?: string;            
    gallery?: string[];
    content?: string;
    subsections: ParkSubsection[];
}

export const ugandaConservanciesData: ParkSection[] = [
    {
        id: "overview",
        image: "/images/conservancies/uganda/2.jpg",
        gallery: [],
        header: "Uganda Conservation Overview",
        content: `Uganda is a biodiversity hotspot, home to numerous conservation initiatives aimed at protecting its unique wildlife and ecosystems. Uganda is recognized as one of Africa's richest countries in terms of biodiversity, ranking second for mammals and birds. It is home to iconic species such as mountain gorillas, Rothschild giraffes, and various endemic plants. The country's diverse ecosystems, including wetlands and forests, support a wide range of flora and fauna, making it a critical area for conservation efforts.`,
        subsections: []
    },
    {
        id: "wcs",
        image: "/images/uganda/wcs.jpg",
        gallery: [],
        header: "Wildlife Conservation Society (WCS)",
        content: `WCS has been active in Uganda since 1957, focusing on research and conservation projects that have led to the establishment of national parks like Kibale Forest and Bwindi Impenetrable Forest. They address challenges such as poaching and habitat loss while supporting local scientists and conservationists. The Wildlife Conservation Society plays a crucial role in protecting Uganda's biodiversity through scientific research, community engagement, and policy advocacy. Their long-standing presence in Uganda has contributed significantly to the conservation of primates and other endangered species.`,
        subsections: []
    },
    {
        id: "ctc",
        image: "/images/uganda/ctc.jpg",
        gallery: [],
        header: "CTC Conservation Center",
        content: `Located in Butambala, this privately run facility emphasizes sustainable practices and community engagement. It provides educational programs and employment opportunities, promoting conservation through economic sustainability. The CTC Conservation Center serves as a model for integrating conservation with community development, demonstrating that environmental protection can go hand-in-hand with improving local livelihoods and education.`,
        subsections: []
    },
    {
        id: "awf",
        image: "/images/uganda/awf.jpg",
        gallery: [],
        header: "African Wildlife Foundation (AWF)",
        content: `AWF works on community-centered conservation strategies, including the establishment of conservancies that help mitigate human-wildlife conflict and promote sustainable tourism. Their initiatives aim to enhance local livelihoods while protecting wildlife. The African Wildlife Foundation recognizes that successful conservation requires the active participation and support of local communities. By creating economic incentives for conservation and providing alternative livelihoods, AWF helps ensure long-term sustainability of Uganda's wildlife and natural resources.`,
        subsections: []
    },
    {
        id: "uwa",
        image: "/images/uganda/uwa.jpg",
        gallery: [],
        header: "Uganda Wildlife Authority (UWA)",
        content: `UWA is responsible for managing wildlife and protected areas in Uganda. They have developed a national strategy to combat poaching and illegal wildlife trade, ensuring the sustainable management of wildlife resources. Established in August 1996 by the Uganda Wildlife Statute, UWA manages 10 national parks, 5 community wildlife management areas, 13 wildlife sanctuaries, and 12 game reserves. The organization is headed by the Minister for Tourism and Antiquities, who appoints a Board of Trustees. UWA aims to be a leading self-sustaining conservation agency that transforms Uganda into one of the best ecotourism destinations in Africa.`,
        subsections: [
            {
                subheader: "Conservation Mission",
                content: "As the primary governmental body responsible for wildlife conservation, UWA has taken comprehensive measures to conserve and sustainably manage the wildlife and protected areas of Uganda in partnership with neighboring communities, stakeholders, and the global community."
            }
        ]
    },
    {
        id: "challenges",
        image: "/images/uganda/challenges.jpg",
        gallery: [],
        header: "Conservation Challenges",
        content: `Despite its rich biodiversity, Uganda faces significant challenges in conservation efforts. These challenges require coordinated responses from government agencies, conservation organizations, and local communities to ensure the long-term survival of Uganda's unique wildlife and ecosystems.`,
        subsections: [
            {
                subheader: "Poaching",
                content: "Illegal hunting remains a critical threat to many species, particularly elephants, rhinos, and other high-value wildlife. Anti-poaching efforts continue to be a priority for conservation organizations."
            },
            {
                subheader: "Habitat Loss",
                content: "Agricultural expansion and development projects encroach on wildlife habitats, fragmenting ecosystems and reducing available space for wildlife. This is particularly concerning in areas surrounding national parks."
            },
            {
                subheader: "Climate Change",
                content: "Changes in climate patterns affect ecosystems and species survival, altering migration patterns, breeding cycles, and food availability for both wildlife and local communities."
            }
        ]
    },
    {
        id: "community",
        image: "/images/uganda/community.jpg",
        gallery: [],
        header: "Community Involvement in Conservation",
        content: `Engaging local communities is essential for successful conservation in Uganda. Community-based conservation recognizes that the people living alongside wildlife are key stakeholders in conservation efforts and must benefit from protecting natural resources.`,
        subsections: [
            {
                subheader: "Education and Awareness",
                content: "Initiatives like the Classroom Africa program aim to educate young people about wildlife and conservation, fostering a new generation of conservationists who understand the value of Uganda's natural heritage."
            },
            {
                subheader: "Economic Benefits",
                content: "Community-based projects help integrate conservation with local economic development, ensuring that communities benefit from protecting their natural resources through tourism revenue sharing, employment opportunities, and sustainable resource use."
            },
            {
                subheader: "Revenue Sharing",
                content: "A percentage of park entrance fees is reinvested into local community projects, funding schools, health clinics, and infrastructure development. This creates direct incentives for communities to support conservation efforts."
            }
        ]
    },
    {
        id: "summary",
        image: "/images/uganda/conservation-future.jpg",
        gallery: [],
        header: "The Future of Conservation in Uganda",
        content: `Uganda's wildlife conservation efforts are multifaceted, involving various organizations and community participation to address the challenges facing its rich biodiversity. Through these initiatives, Uganda aims to protect its unique wildlife while promoting sustainable development. The success of conservation in Uganda depends on continued collaboration between government agencies, international organizations, local communities, and individual conservationists. By balancing the needs of people and wildlife, Uganda is working to preserve its natural heritage for future generations while ensuring that conservation contributes to national development and poverty reduction.`,
        subsections: []
    }
];