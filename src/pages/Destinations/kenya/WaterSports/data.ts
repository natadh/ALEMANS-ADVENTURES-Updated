export interface WaterSportsPackage {
  code: string
  title: string
  description?: string
  days?: {
    day: string
    content: string
  }[]
}

export interface WaterSportsData {
  title: string
  mustHaves: string
  programOverview: string[]
  otherActivities: string[]
  river: {
    name: string
    description: string
    location: string
  }
  packages: WaterSportsPackage[]
}

export const waterSportsData: WaterSportsData = {
  title: "Kenya Water Rafting",

  mustHaves:
    "Some of the basic things that you will need are an everyday T-shirt, shorts, and closed shoes. These should be items you don’t mind getting wet, seeing that water is your playground. For white water rafting, you need more than just the right outfit — you require audacity. Tons of audacity.",

  programOverview: [
    "The program involves assembling at the meeting point at the rafting camp at 9:00 am, followed by a safety briefing lasting approximately thirty minutes.",
    "Participants then drive for about fifteen minutes to the starting point, after which rafting begins and lasts for roughly two and a half hours.",
    "The entire program takes about three hours, covering fourteen kilometers during high water season and eight and a half kilometers during low water season.",
    "Upon reaching the finishing point, guests are treated to a buffet lunch and drinks."
  ],

  otherActivities: [
    "Boat rides",
    "Bungee jumping",
    "Cycling",
    "Zipline",
    "Stand-up paddle boarding",
    "Rock climbing",
    "Kayaking",
    "Swimming"
  ],

  river: {
    name: "River Tana",
    location: "Sagana town, 90 km from Nairobi",
    description:
      "Sagana town lies on the banks of River Tana and is the headquarters of white-water rafting in Kenya. The camp is pristine and welcoming, with the river only revealing itself as you approach the banks. Between February and April, the water appears browner due to rainfall runoff. The rapids come in quick succession, delivering a constant adrenaline rush."
  },

  packages: [
    {
      code: "KAA 71",
      title: "1 Day White Water Rafting & Kayaking",
      description:
        "A one-day experience offering an intense introduction to white-water rafting and kayaking along River Tana."
    },
    {
      code: "KAA 72",
      title: "3 Days White Water Rafting & Kayaking",
      days: [
        {
          day: "Day 1 — Sagana",
          content:
            "Depart Nairobi for central Kenya on the slopes of Mount Kenya to Sagana town. Arrive in time for lunch, followed by an afternoon rafting session on Kenya’s largest river. Dinner and overnight at Savage Camp."
        },
        {
          day: "Day 2 — Sagana",
          content:
            "After breakfast, enjoy kayaking in the morning and rock climbing in the afternoon. End the day with a sundowner dinner by the river, followed by dinner and overnight at the camp."
        },
        {
          day: "Day 3 — Sagana",
          content:
            "Begin with mountain biking covering distances between twenty and forty kilometers. In the afternoon, take part in a two-hour stand-up paddle boarding session. Dinner and overnight at the camp."
        }
      ]
    }
  ]
}
