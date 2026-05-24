export type Category = "cakes" | "cookies" | "others";

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
  others: "Others",
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
    image: "/images/vanilla-cake.png",
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
    image: "/images/chocolate-cake.png",
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
    image: "/images/strawberry-cake.png",
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
    image: "/images/red-velvet-cake.png",
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
    category: "cakes",
    image: "/images/orange-tea-cakes.png",
    featured: true,
    available: true,
  },
  {
    id: "salted-caramel-cupcakes",
    name: "Salted Caramel Cupcakes",
    description: "Delicious cupcakes with a rich salted caramel flavor.",
    options: ["Gluten-Free", "Dairy-Free"],
    price: "$25 tray of 12",
    category: "cakes",
    image: "/images/salted-caramel-cupcakes.png",
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
    image: "/images/lemon-bars.png",
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
    image: "/images/chocolate-chip-cookies.png",
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
    image: "/images/sugar-cookies.png",
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
    image: "/images/oatmeal-cookies.png",
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
    image: "/images/red-velvet-brownies.png",
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
    image: "/images/cookie-bars.png",
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
    image: "/images/key-lime-tarts.png",
    featured: true,
    available: true,
  },
  // Others
  {
    id: "apple-cider-donuts",
    name: "Apple Cider Donuts",
    description:
      "Delicious apple cider donuts with with a dusting of cinnamon sugar.",
    price: "$25 tray of 12",
    category: "others",
    image: "/images/apple-cider-donuts.png",
    featured: true,
    available: true,
  },
  {
    id: "brookie",
    name: "Brookie",
    description:
      "Three layers of cookie bars with brownie, and nutella frosting.",
    price: "$25",
    category: "others",
    image: "/images/brookie.png",
    featured: true,
    available: true,
  },
];
