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
      "Two layers of fluffy vanilla sponge with customizable frostings.",
    options: [
      "Frosting: Chocolate, Chocolate Confetti, Vanilla, Vanilla Confetti, Nutella",
    ],
    price: "From $25",
    category: "cakes",
    image: "/images/vanilla-cake.jpg",
    featured: true,
    available: true,
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    description: "Layers of rich chocolate sponge with customizable frostings.",
    options: [
      "Single layer, Double layer, Frosting: Chocolate, Chocolate Confetti, Vanilla, Vanilla Confetti, Nutella",
    ],
    price: "From $25",
    category: "cakes",
    image: "/images/chocolate-cake.jpg",
    featured: true,
    available: true,
  },
  {
    id: "strawberry-cake",
    name: "Strawberry Cake",
    description:
      "Layers of rich strawberry sponge with customizable frostings.",
    options: [
      "Single layer, Double layer, Frosting: Chocolate, Chocolate Confetti, Vanilla, Vanilla Confetti, Nutella",
    ],
    price: "From $25",
    category: "cakes",
    image: "/images/strawberry-cake.jpg",
    featured: true,
    available: true,
  },
  {
    id: "red-velvet-cake",
    name: "Red Velvet Cake",
    description:
      "Layers of rich red velvet sponge with customizable frostings.",
    options: [
      "Single layer, Double layer, Frosting: Chocolate, Chocolate Confetti, Vanilla, Vanilla Confetti, Nutella",
    ],
    price: "From $25",
    category: "cakes",
    image: "/images/red-velvet-cake.jpg",
    featured: true,
    available: true,
  },
  {
    id: "carrot-cake",
    name: "Carrot Cake",
    description:
      "Single layer of moist carrot sponge with customizable frostings.",
    options: [
      "Frosting: Chocolate, Chocolate Confetti, Vanilla, Vanilla Confetti, Nutella",
    ],
    price: "From $25",
    category: "cakes",
    image: "/images/carrot-cake.png",
    featured: true,
    available: true,
  },
  {
    id: "orange-tea-cakes",
    name: "Orange Tea Cakes",
    description:
      "Delicate orange-flavored tea cakes with a hint of citrus zest.",
    options: ["Gluten-Free", "Dairy-Free"],
    price: "$25 tray of 12",
    category: "cookies",
    image: "/images/orange-tea-cakes.jpg",
    featured: true,
    available: true,
  },
  {
    id: "salted-caramel-cupcakes",
    name: "Salted Caramel Cupcakes",
    description: "Delicious cupcakes with a rich salted caramel flavor.",
    options: ["Gluten-Free", "Dairy-Free"],
    price: "$25 tray of 12",
    category: "cookies",
    image: "/images/salted-caramel-cupcakes.jpg",
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
    price: "$20 tray of 12",
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
    options: ["Chocolate Chips, Butterscotch Chips, or Both"],
    price: "$15 dozen",
    category: "cookies",
    image: "/images/chocolate-chip-cookies.jpg",
    featured: true,
    available: true,
  },
  {
    id: "sugar-cookies",
    name: "Sugar Cookies",
    description:
      "Classic sugar cookies with a soft and chewy texture, perfect for any occasion.",
    options: ["Plain, Vanilla Frosted"],
    price: "$15 dozen",
    category: "cookies",
    image: "/images/sugar-cookies.jpg",
    featured: true,
    available: true,
  },
  {
    id: "oatmeal-cookies",
    name: "Oatmeal Cookies",
    description:
      "Hearty oatmeal cookies with a chewy texture and a hint of cinnamon.",
    price: "$15 dozen",
    category: "cookies",
    image: "/images/oatmeal-cookies.jpg",
    featured: true,
    available: true,
  },
  {
    id: "red-velvet-brownies",
    name: "Red Velvet Brownies",
    description:
      "Rich and fudgy red velvet brownies with a hint of cream cheese swirl.",
    price: "$20 tray of 12",
    category: "cookies",
    image: "/images/red-velvet-brownies.jpg",
    featured: true,
    available: true,
  },
  {
    id: "cookie-bars",
    name: "Cookie Bars",
    description:
      "Delicious cookie bars with a variety of flavors and toppings.",
    options: ["Plain, Chocolate Chips, Butterscotch Chips"],
    price: "$20 tray of 12",
    category: "cookies",
    image: "/images/cookie-bars.jpg",
    featured: true,
    available: true,
  },
  {
    id: "key-lime-tarts",
    name: "Key Lime Tarts",
    description:
      "Tangy and sweet key lime tarts with a graham cracker crust and a dollop of whipped cream.",
    options: ["Gluten-Free", "Dairy-Free"],
    price: "$25 tray of 12",
    category: "cookies",
    image: "/images/key-lime-tarts.jpg",
    featured: true,
    available: true,
  },
  // Breads
  ,
];
