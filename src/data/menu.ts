export type Category = "cakes" | "cookies" | "breads";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Category;
  image: string;
  featured?: boolean;
  available: boolean;
};

export const categoryLabels: Record<Category, string> = {
  cakes: "Cakes & Cupcakes",
  cookies: "Cookies",
  breads: "Breads",
};

// ─── Add new items below — set available: false to hide without deleting ───

export const menuItems: MenuItem[] = [
  // Cakes & Cupcakes
  {
    id: "vanilla-layer-cake",
    name: "Vanilla Layer Cake",
    description: "Three layers of fluffy vanilla sponge with silky buttercream and fresh flowers.",
    price: "From $55",
    category: "cakes",
    image: "/images/vanilla-layer-cake.jpg",
    featured: true,
    available: true,
  },
  {
    id: "chocolate-fudge-cake",
    name: "Chocolate Fudge Cake",
    description: "Rich, decadent chocolate cake with a glossy ganache glaze. Pure indulgence.",
    price: "From $60",
    category: "cakes",
    image: "/images/chocolate-fudge-cake.jpg",
    available: true,
  },
  {
    id: "lemon-cupcakes",
    name: "Lemon Drizzle Cupcakes",
    description: "Zesty lemon sponge topped with tangy lemon curd and whipped cream cheese frosting.",
    price: "$4 each / $42 dozen",
    category: "cakes",
    image: "/images/lemon-cupcakes.jpg",
    available: true,
  },
  {
    id: "carrot-cake",
    name: "Carrot Cake",
    description: "Warmly spiced carrot cake with walnuts and a thick cream cheese frosting.",
    price: "From $50",
    category: "cakes",
    image: "/images/carrot-cake.jpg",
    featured: true,
    available: true,
  },

  // Cookies
  {
    id: "chocolate-chip-cookies",
    name: "Chocolate Chip Cookies",
    description: "Classic and crispy on the edges, chewy in the center, loaded with chocolate chunks.",
    price: "$3 each / $28 dozen",
    category: "cookies",
    image: "/images/chocolate-chip-cookies.jpg",
    featured: true,
    available: true,
  },
  {
    id: "snickerdoodles",
    name: "Snickerdoodles",
    description: "Soft, pillowy cinnamon-sugar cookies with a crinkled top and tender bite.",
    price: "$3 each / $28 dozen",
    category: "cookies",
    image: "/images/snickerdoodles.jpg",
    available: true,
  },
  {
    id: "brown-butter-shortbread",
    name: "Brown Butter Shortbread",
    description: "Melt-in-your-mouth shortbread with a deep, nutty brown butter flavor.",
    price: "$3.50 each / $32 dozen",
    category: "cookies",
    image: "/images/shortbread.jpg",
    available: true,
  },
  {
    id: "double-chocolate-cookies",
    name: "Double Chocolate Cookies",
    description: "Deeply chocolatey cookies with a fudgy interior and bittersweet chocolate chunks.",
    price: "$3.50 each / $32 dozen",
    category: "cookies",
    image: "/images/double-chocolate-cookies.jpg",
    available: true,
  },

  // Breads
  {
    id: "sourdough-loaf",
    name: "Sourdough Loaf",
    description: "Long-fermented sourdough with a crackly crust and an open, chewy crumb.",
    price: "$14",
    category: "breads",
    image: "/images/sourdough.jpg",
    featured: true,
    available: true,
  },
  {
    id: "focaccia",
    name: "Rosemary Focaccia",
    description: "Pillowy focaccia drizzled with olive oil and topped with fresh rosemary and sea salt.",
    price: "$12",
    category: "breads",
    image: "/images/focaccia.jpg",
    available: true,
  },
  {
    id: "cinnamon-raisin-bread",
    name: "Cinnamon Raisin Bread",
    description: "Soft enriched bread swirled with cinnamon sugar and plump golden raisins.",
    price: "$12",
    category: "breads",
    image: "/images/cinnamon-raisin.jpg",
    available: true,
  },
];
