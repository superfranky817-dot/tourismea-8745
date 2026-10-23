// Texte repris mot pour mot de la présentation fournie.
// Une ligne = un slide. Les photos sont dans packages/web/public/img/.

export type Slide = {
  kind: "cover" | "plan" | "content" | "closing";
  title?: string;
  paragraphs?: string[];
  items?: string[];
  photos: string[];
  boy?: "wave" | "point";
};

export const slides: Slide[] = [
  {
    kind: "cover",
    title: "Présentation sur le tourisme",
    photos: ["marrakech-skyline"],
    boy: "wave",
  },
  {
    kind: "plan",
    title: "Plan",
    items: [
      "1. Définition du tourisme",
      "2. Les avantages et les inconvénients",
      "3. Le tourisme au niveau national : le Maroc",
      "4. Le tourisme au niveau international",
      "5. Conclusion",
    ],
    photos: ["jemaa-sunset", "agadir-aerial", "sahara-caravan", "atlas-snow"],
  },
  {
    kind: "content",
    title: "1. Définition du tourisme",
    paragraphs: [
      "Bonjour à tous. Aujourd’hui, je vais vous présenter le sujet du tourisme.",
      "Le tourisme est le fait de voyager dans un autre lieu pour découvrir de nouveaux endroits, connaître d’autres cultures et se détendre.",
    ],
    photos: ["marrakech-souk", "jemaa-night"],
    boy: "point",
  },
  {
    kind: "content",
    title: "2. Les avantages et les inconvénients",
    paragraphs: [
      "Le tourisme présente plusieurs avantages. Il crée des emplois, développe l’économie et permet de découvrir de nouvelles cultures.",
    ],
    photos: ["fes-souk", "artisanat-plates"],
    boy: "point",
  },
  {
    kind: "content",
    title: "2. Les avantages et les inconvénients",
    paragraphs: [
      "Mais il présente aussi des inconvénients, comme la pollution, les déchets et la dégradation de certains sites naturels. Pour résoudre ces problèmes, il faut protéger l’environnement et encourager le tourisme durable.",
    ],
    photos: ["pollution-beach", "pollution-trash"],
  },
  {
    kind: "content",
    title: "3. Le tourisme au niveau national : le Maroc",
    paragraphs: [
      "Au Maroc, le tourisme est un secteur très important. Notre pays possède de nombreux lieux touristiques, comme Marrakech, Agadir, Fès, Tanger et Chefchaouen. Il est connu pour ses plages, ses montagnes, son désert et sa culture.",
    ],
    photos: ["koutoubia", "agadir-bay", "fes-madrasa", "tanger-city", "chefchaouen-hill"],
    boy: "point",
  },
  {
    kind: "content",
    title: "3. Le tourisme au niveau national : le Maroc",
    paragraphs: [
      "Le tourisme aide à créer des emplois, à soutenir l’artisanat et à développer l’économie nationale. En 2025, le Maroc a accueilli environ 19,8 millions de visiteurs, un record pour notre pays.",
    ],
    photos: ["artisanat-potter", "artisanat-shop"],
  },
  {
    kind: "content",
    title: "3. Le tourisme au niveau national : le Maroc",
    paragraphs: [
      "Cependant, il faut améliorer les services touristiques, protéger les sites historiques et lutter contre la pollution.",
    ],
    photos: ["benhaddou", "sahara-dunes", "atlas-valley"],
  },
  {
    kind: "content",
    title: "4. Le tourisme au niveau international",
    paragraphs: [
      "Au niveau international, le tourisme joue un rôle important dans l’économie mondiale. Des millions de personnes voyagent chaque année pour découvrir des pays comme la France, l’Espagne, l’Italie et la Turquie.",
    ],
    photos: ["paris-eiffel", "barcelona-sagrada", "rome-colosseum", "cappadocia-balloons"],
    boy: "point",
  },
  {
    kind: "content",
    title: "4. Le tourisme au niveau international",
    paragraphs: [
      "En 2025, environ 1,52 milliard de touristes internationaux ont voyagé dans le monde. Le tourisme favorise les échanges culturels, mais il peut aussi provoquer la pollution et la dégradation de l’environnement.",
    ],
    photos: ["cappadocia-sunset", "paris-eiffel"],
  },
  {
    kind: "content",
    title: "4. Le tourisme au niveau international",
    paragraphs: [
      "C’est pourquoi les pays doivent encourager un tourisme responsable et durable.",
    ],
    photos: ["essaouira-fort", "ouzoud-falls"],
  },
  {
    kind: "content",
    title: "5. Conclusion",
    paragraphs: [
      "Pour conclure, le tourisme est un secteur essentiel pour le développement économique et culturel. Il offre de nombreux avantages, mais il faut limiter ses effets négatifs. Nous devons protéger notre patrimoine et notre environnement pour développer un tourisme durable.",
    ],
    photos: ["sahara-dunes", "ouzoud-falls"],
    boy: "wave",
  },
  {
    kind: "closing",
    title: "Merci pour votre attention.",
    photos: ["jemaa-sunset"],
    boy: "wave",
  },
];
