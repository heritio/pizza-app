const foodItems = [
  {
    name: "Biff Pizza",
    img: "/img/biff.jpg",
    section: "Pizza",
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken.jpg",
    section: "Pizza",
  },
  {
    name: "Margarita Pizza",
    img: "/img/margarita.jpg",
    section: "Pizza",
  },
  {
    name: "Peperoni Pizza",
    img: "/img/peperoni.jpeg",
    section: "Pizza",
  },
  {
    name: "Onion Burger",
    img: "/img/onionburger.jpg",
    section: "Hamburger",
  },
  {
    name: "Creamy Burger",
    img: "/img/creamyburger.jpg",
    section: "Hamburger",
  },
  {
    name: "Cheese Burger",
    img: "/img/cheeseburger.jpeg",
    section: "Hamburger",
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
