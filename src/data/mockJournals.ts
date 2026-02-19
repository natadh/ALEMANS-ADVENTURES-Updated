import type { Journal } from "../components/journals/JournalCard";

// MOCK DATA — fake journal entries using lorem ipsum style text.
// Later you will POST real entries to a backend,
// and both the listing page and the detail page will fetch from that API.
// For now, this file is the single source of truth for journal data.
// Both the listing page (index.tsx) and the detail page (JournalDetail.tsx)
// import from here — that way I never have duplicate data.

export const MOCK_JOURNALS: Journal[] = [
  {
    id: 1,
    title: "Dawn of the Mara: A Week in the Maasai Mara",
    excerpt:
      "The sun had barely kissed the horizon when our Land Cruiser rolled out of camp. Within minutes, a pride of lions emerged from the golden grass — a sight that no photograph can fully capture.",
    content: `The sun had barely kissed the horizon when our Land Cruiser rolled out of camp. Within minutes, a pride of lions emerged from the golden grass — a sight that no photograph can fully capture.

We spent seven days in the Maasai Mara during the peak of the wildebeest migration. Our guide, Joseph, had spent thirty years learning the land. He knew where the cheetahs slept, which river crossings the wildebeest preferred, and how to read the sky before a storm rolled in from the Rift Valley.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

On day four, we witnessed the crossing. Over ten thousand wildebeest plunged into the Mara River while crocodiles waited below. It lasted forty-five minutes. Nobody spoke. The land speaks in its own language here, and if you're still enough, you begin to understand it.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

The evenings were spent around a fire under a sky so thick with stars it felt three-dimensional. This is what Alemans made possible — not just a holiday, but a genuine encounter with something ancient and alive.`,
    destination: "Kenya",
    date: "January 2025",
    imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=500&fit=crop",
    author: "Aleman's Team",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Serengeti Without End: Tanzania's Infinite Plains",
    excerpt:
      "The Serengeti earns its Maasai name — 'endless plain.' Standing at the edge of camp before dawn, you understand why the ancient peoples gave it that name. The horizon simply does not stop.",
    content: `The Serengeti earns its Maasai name — 'endless plain.' Standing at the edge of camp before dawn, you understand why the ancient peoples gave it that name. The horizon simply does not stop.

Our Tanzania itinerary began in Arusha, a town buzzing with energy and the smell of roasting maize. From there, we drove through the highlands and descended into the Ngorongoro Crater — a world within a world, where every species of East African wildlife coexists within the caldera walls.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.

The Serengeti itself was reached on day three. We camped under acacia trees while hyenas circled at a respectful distance. In the morning, a family of elephants crossed fifty meters from our tent — unhurried, ancient, completely unbothered by our presence.

Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.

Tanzania reminded us that wildness is not something to be protected behind glass. It is something to be stood inside, breathed in, and carried home in your chest.`,
    destination: "Tanzania",
    date: "December 2024",
    imageUrl: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&h=500&fit=crop",
    author: "Aleman's Team",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Gorillas in the Mist: Rwanda's Volcanoes National Park",
    excerpt:
      "Nothing in travel writing truly prepares you for the moment a mountain gorilla looks at you. Not the documentaries, not the photographs, not the stories. You simply have to be there.",
    content: `Nothing in travel writing truly prepares you for the moment a mountain gorilla looks at you. Not the documentaries, not the photographs, not the stories. You simply have to be there.

The trek began at 6am from the park headquarters. Our ranger group was small — eight visitors and three rangers. We hiked for two hours through dense bamboo forest and volcanic undergrowth before our lead ranger held up his hand and whispered: they're here.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In ac diam orci. Proin tincidunt, leo non venenatis malesuada, ipsum felis sodales nulla.

The silverback — a massive male named Gihishamwotsi — sat no more than four meters away, chewing leaves with the unhurried confidence of something that has no natural predators. Two juveniles played in the branches above. A mother nursed her infant nearby.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

We spent one hour with the family. It is regulated strictly — for their protection and ours. When we turned to leave, the silverback watched us go. Rwanda will not let you return unchanged.`,
    destination: "Rwanda",
    date: "November 2024",
    imageUrl: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=500&fit=crop",
    author: "Aleman's Team",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Spice, Stone, and Sea: Three Days in Zanzibar",
    excerpt:
      "Stone Town is a labyrinth — literally. Its alleyways were designed to confuse invaders and delight explorers. We got lost three times on the first day and loved every wrong turn.",
    content: `Stone Town is a labyrinth — literally. Its alleyways were designed to confuse invaders and delight explorers. We got lost three times on the first day and loved every wrong turn.

Zanzibar is not one thing. It is Arab, African, Indian, and Portuguese all compressed into a small island that smells of cloves, cinnamon, and salt air. The old town's carved wooden doors are a UNESCO-protected art form in themselves — each one tells a story in its filigree.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

On day two, we took a spice tour through the interior of the island. Our guide stripped cinnamon bark with his thumbnail and handed us fresh vanilla pods and nutmeg still wrapped in its lace. We ate jackfruit pulled straight from the tree.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur.

The beaches on the eastern coast were the finale — white sand, warm turquoise water, and a horizon that convinced you the world has no edges. Zanzibar is where you come to remember that stillness is a form of adventure.`,
    destination: "Zanzibar",
    date: "October 2024",
    imageUrl: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800&h=500&fit=crop",
    author: "Aleman's Team",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Bwindi and Beyond: Uganda's Primate Kingdom",
    excerpt:
      "Uganda surprised us at every turn. We came for the gorillas and stayed for the chimpanzees, the crater lakes, and a warmth of welcome that we haven't found anywhere else in our travels.",
    content: `Uganda surprised us at every turn. We came for the gorillas and stayed for the chimpanzees, the crater lakes, and a warmth of welcome that we haven't found anywhere else in our travels.

Bwindi Impenetrable Forest lives up to its name. The ancient trees grow so thick that midday looks like dusk inside the canopy. It is home to roughly half the world's remaining mountain gorillas — fewer than 1,100 individuals.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Our second destination was Kibale National Park, home to the highest density of primates in Africa. Chimpanzee tracking here is an entirely different experience from gorilla trekking — chimps move fast, swing through canopy, and fill the forest with a din of hoots and screams that makes your pulse race.

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

Uganda reminded us that the word 'safari' — from the Arabic word for journey — is less about what you see and more about who you become in the seeing.`,
    destination: "Uganda",
    date: "September 2024",
    imageUrl: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&h=500&fit=crop",
    author: "Aleman's Team",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "The Road Less Taken: A Multi-Country East Africa Circuit",
    excerpt:
      "Twenty-one days. Four countries. One overland route connecting Kenya, Tanzania, Uganda, and Rwanda. This is what Alemans planned for us — and it was the journey of a lifetime.",
    content: `Twenty-one days. Four countries. One overland route connecting Kenya, Tanzania, Uganda, and Rwanda. This is what Alemans planned for us — and it was the journey of a lifetime.

We began in Nairobi, where the city's sharp modernity meets its wild edges — Nairobi National Park sits on the city's southern boundary, where lions roam within sight of office towers. Our guide picked us up at the airport and we never once had to think about logistics again.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

From Kenya we crossed into Tanzania through the Namanga border, drove to Arusha, and spent four days between Ngorongoro and the Serengeti. Then north again, through Uganda's crater lake district, before crossing into Rwanda for a final gorilla trek.

Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur.

A multi-country circuit sounds daunting until you realize you're in good hands. Alemans knew every border, every lodge, every road condition. We arrived in Kigali on the last evening sunburned, dusty, and completely transformed.`,
    destination: "Multi-Country",
    date: "August 2024",
    imageUrl: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=500&fit=crop",
    author: "Aleman's Team",
    readTime: "8 min read",
  },
];
