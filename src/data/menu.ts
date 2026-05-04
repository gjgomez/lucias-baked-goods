export type Category = "cakes" | "cookies" | "breads";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Category;
  image: string;
  featured?: boolean;
  options?: string[];
  available: boolean;
};

export const categoryLabels: Record<Category, string> = {
  cakes: "Cakes & Cupcakes",
  cookies: "Cookies & Bars",
  breads: "Breads",
};

// ─── Add new items below — set available: false to hide without deleting ───

export const menuItems: MenuItem[] = [
  // Cakes & Cupcakes
  {
    id: "vanilla-cake",
    name: "Vanilla Cake",
    description:
      "Three layers of fluffy vanilla sponge with customizable frostings.",
    options: [
      "Frosting: Chocolate, Chocolate Confetti, Vanilla, Vanilla Confetti, Nutella",
    ],
    price: "From $25",
    category: "cakes",
    image: "/images/vanilla-cake.jpg",
    featured: true,
    available: true,
  },
  // Cookies & Bars
  {
    id: "lemon-bars",
    name: "Lemon Bars",
    description:
      "Tangy lemon bars with a buttery shortbread crust and a dusting of powdered sugar.",
    options: ["Gluten-Free", "Dairy-Free"],
    price: "$2.50 each / $20 tray of 12",
    category: "cookies",
    image: "/images/lemon-bars.jpg",
    featured: true,
    available: true,
  },
  {
    id: "chocolate-chip-cookies",
    name: "Chocolate Chip Cookies",
    description:
      "Classic and crispy on the edges, chewy in the center, loaded with chocolate chunks.",
    price: "$1.50 each / $15 dozen",
    category: "cookies",
    image: "/images/chocolate-chip-cookies.jpg",
    featured: true,
    available: true,
  },
  // Breads
  ,
];
