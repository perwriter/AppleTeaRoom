const data = [
  {
    id: 1,
    name: "Ndazi",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 40,
    cat: "snacks",
  },
  {
    id: 2,
    name: "Samosa",
    img: "https://example.com/samosa.jpg",
    price: 100,
    cat: "snacks",
  },
  {
    id: 3,
    name: "Samosa Special",
    img: "https://example.com/samosa_special.jpg",
    price: 210,
    cat: "snacks",
  },
  {
    id: 4,
    name: "Kebab",
    img: "https://example.com/kebab.jpg",
    price: 110,
    cat: "snacks",
  },
  {
    id: 5,
    name: "Kebab Special",
    img: "https://example.com/kebab_special.jpg",
    price: 220,
    cat: "snacks",
  },
  {
    id: 6,
    name: "Sausage",
    img: "https://example.com/sausage.jpg",
    price: 60,
    cat: "snacks",
  },
  {
    id: 7,
    name: "Sausage Special",
    img: "https://example.com/sausage_special.jpg",
    price: 170,
    cat: "snacks",
  },
  {
    id: 8,
    name: "Fried Egg",
    img: "https://example.com/fried_egg.jpg",
    price: 50,
    cat: "snacks",
  },
  {
    id: 9,
    name: "Fried Egg Special",
    img: "https://example.com/fried_egg_special.jpg",
    price: 160,
    cat: "snacks",
  },
  {
    id: 10,
    name: "Toast Kavu",
    img: "https://example.com/toast_kavu.jpg",
    price: 15,
    cat: "snacks",
  },
  {
    id: 11,
    name: "Toast Yai",
    img: "https://example.com/toast_yai.jpg",
    price: 75,
    cat: "snacks",
  },
  {
    id: 12,
    name: "Toast Siagi",
    img: "https://example.com/toast_siagi.jpg",
    price: 20,
    cat: "snacks",
  },
  {
    id: 13,
    name: "Toast Mixed",
    img: "https://example.com/toast_mixed.jpg",
    price: 25,
    cat: "snacks",
  },
  {
    id: 14,
    name: "Bandika Siagi",
    img: "https://example.com/bandika_siagi.jpg",
    price: 40,
    cat: "snacks",
  },
  {
    id: 15,
    name: "Bandika Mixed",
    img: "https://example.com/bandika_mixed.jpg",
    price: 45,
    cat: "snacks",
  },
  {
    id: 16,
    name: "Spanish Omelette",
    img: "https://example.com/spanish_omelette.jpg",
    price: 120,
    cat: "snacks",
  },
  {
    id: 17,
    name: "Spanish Special",
    img: "https://example.com/spanish_special.jpg",
    price: 230,
    cat: "snacks",
  },
  {
    id: 18,
    name: "Tea",
    img: "https://example.com/tea.jpg",
    price: 50,
    cat: "Hot Beverage",
  },
  {
    id: 19,
    name: "Black Tea",
    img: "https://example.com/black_tea.jpg",
    price: 50,
    cat: "Hot Beverage",
  },
  {
    id: 20,
    name: "Ndubia",
    img: "https://example.com/ndubia.jpg",
    price: 80,
    cat: "Hot Beverage",
  },
  {
    id: 21,
    name: "Masai Tea",
    img: "https://example.com/masai_tea.jpg",
    price: 80,
    cat: "Hot Beverage",
  },
  {
    id: 22,
    name: "Lemon Tea",
    img: "https://example.com/lemon_tea.jpg",
    price: 80,
    cat: "Hot Beverage",
  },
  {
    id: 23,
    name: "Coffee",
    img: "https://example.com/coffee.jpg",
    price: 80,
    cat: "Hot Beverage",
  },
  {
    id: 24,
    name: "Black Coffee",
    img: "https://example.com/black_coffee.jpg",
    price: 80,
    cat: "Hot Beverage",
  },
  {
    id: 25,
    name: "Drinking Chocolate",
    img: "https://example.com/drinking_chocolate.jpg",
    price: 80,
    cat: "Hot Beverage",
  },
  {
    id: 26,
    name: "Milo",
    img: "https://example.com/milo.jpg",
    price: 80,
    cat: "Hot Beverage",
  },
  {
    id: 27,
    name: "Hot Milk",
    img: "https://example.com/hot_milk.jpg",
    price: 100,
    cat: "Hot Beverage",
  },
  {
    id: 28,
    name: "Hot Water + Lemon",
    img: "https://example.com/hot_water_lemon.jpg",
    price: 20,
    cat: "Hot Beverage",
  },
  {
    id: 30,
    name: "Soda 300ml",
    img: "https://example.com/soda_300ml.jpg",
    price: 60,
    cat: "Cold Drinks",
  },
  {
    id: 31,
    name: "Soda 500ml",
    img: "https://example.com/soda_500ml.jpg",
    price: 70,
    cat: "Cold Drinks",
  },
  {
    id: 32,
    name: "Afia",
    img: "https://example.com/afia.jpg",
    price: 80,
    cat: "Cold Drinks",
  },
  {
    id: 33,
    name: "Minute Maid",
    img: "https://example.com/minute_maid.jpg",
    price: 80,
    cat: "Cold Drinks",
  },
  {
    id: 34,
    name: "Mineral Water 1/2 L",
    img: "https://example.com/mineral_water_half_liter.jpg",
    price: 50,
    cat: "Cold Drinks",
  },
  {
    id: 35,
    name: "Mineral Water 1L",
    img: "https://example.com/mineral_water_1_liter.jpg",
    price: 100,
    cat: "Cold Drinks",
  },
  {
    id: 36,
    name: "Chips",
    img: "https://example.com/chips.jpg",
    price: 150,
    cat: "Meals",
  },
  {
    id: 37,
    name: "Masala Chips",
    img: "https://example.com/masala_chips.jpg",
    price: 190,
    cat: "Meals",
  },
  {
    id: 38,
    name: "Masala Chips + Samosa + Soda",
    img: "https://example.com/masala_chips_samosa_soda.jpg",
    price: 350,
    cat: "Meals",
  },
  {
    id: 39,
    name: "Chips + Sausage",
    img: "https://example.com/chips_sausage.jpg",
    price: 210,
    cat: "Meals",
  },
  {
    id: 40,
    name: "Chips + Samosa",
    img: "https://example.com/chips_samosa.jpg",
    price: 250,
    cat: "Meals",
  },
  {
    id: 41,
    name: "Chips Kebab",
    img: "https://example.com/chips_kebab.jpg",
    price: 260,
    cat: "Meals",
  },
  {
    id: 42,
    name: "Chips + Egg",
    img: "https://example.com/chips_egg.jpg",
    price: 200,
    cat: "Meals",
  },
  {
    id: 43,
    name: "1/4 Chicken Plain",
    img: "https://example.com/quarter_chicken_plain.jpg",
    price: 200,
    cat: "Meals",
  },
  {
    id: 44,
    name: "1/4 Chicken Special",
    img: "https://example.com/half_chicken_special.jpg",
    price: 310,
    cat: "Meals",
  },
  {
    id: 45,
    name: "1/4 Chicken + Chips",
    img: "https://example.com/quarter_chicken_chips.jpg",
    price: 350,
    cat: "Meals",
  },
  {
    id: 46,
    name: "1/2 Chicken + Chips",
    img: "https://example.com/half_chicken_chips.jpg",
    price: 550,
    cat: "Meals",
  },
  {
    id: 47,
    name: "Full Chicken Plain",
    img: "https://example.com/full_chicken_plain.jpg",
    price: 800,
    cat: "Meals",
  },
  {
    id: 48,
    name: "Full Chicken + Chips",
    img: "https://example.com/full_chicken_chips.jpg",
    price: 950,
    cat: "Meals",
  },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
         <div class="product">
            <img
            src=${product.img}
            alt=""
            />
            <span class="name">${product.name}</span>
            <span class="priceText">${product.price} Ksh.</span>
          </div>
      `
    )
    .join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  const categories = [
    "All",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];

  categoriesContainer.innerHTML = categories
    .map(
      (cat) =>
        `
        <span class="cat">${cat}</span>
      `
    )
    .join("");

  categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === "All"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};

const setPrices = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = "Ksh" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value;
    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};

setCategories();
setPrices();
