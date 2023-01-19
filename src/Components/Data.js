const menu = [
  {
    Heading: "HOT COFFE",
    item: [
      { name: "Black Coffee", price: "35" },
      { name: "Milk Coffee", price: "36" },
      { name: "Chocolate Coffee", price: "60" },
      { name: "Hot Chocolate with Biscuit cup", price: "65" },
      { name: "Classic Hot Chocolate", price: "70" },
    ],
  },

  {
    Heading: "BEVERAGES",
    item: [
      { name: "Cold Drink", price: "38" },
      { name: "Lemon ice Tea", price: "129" },
      { name: "Peach Ice Tea", price: "138" },
      { name: "Butter Milk", price: "38" },
    ],
  },

  {
    Heading: "SOUP",
    item: [
      {
        name: "Manchow",
        price: "99",
        subheading: "Flavored classic chinese soup",
      },
      {
        name: "Hot N Sour",
        price: "99",
        subheading: "Spiciness of chilly and tangy taste of citric",
      },
      {
        name: "Lemon Coriander",
        price: "99",
        subheading: "Refreshing flavor with bite of coriander and garlic",
      },
      {
        name: "Burnt Garlic Soup",
        price: "119",
        subheading: "Mid spicy soup accomplished flavor of burnt garlic",
      },
    ],
  },

  {
    Heading: "CHINESE",
    item: [
      {
        name: "Veg Manchurian ",
        price: "169",
        subheading: "Vegetable balls toasted in classic sauce",
      },
      {
        name: "Green Manchurian",
        price: "189",
        subheading: "Vegetable balls toasted with cheese spinach sauce",
      },
      {
        name: "Paneer Chilly",
        price: "229",
        subheading: "Coated Fried Paneer toasted in classic chilly sauce",
      },
      {
        name: "BBQ Paneer",
        price: "229",
        subheading: "Smoky flavor oriental style Paneer",
      },
      {
        name: "Paneer Red Pepper",
        price: "249",
        subheading: "Spicy flavor sauce toasted with Paner and red paprika",
      },
      {
        name: "Veg Crispy",
        price: "209",
        subheading: "Crunchy vegetables toasted with mid spicy sauce",
      },
    ],
  },

  {
    Heading: "CONTINENTAL",
    item: [
      {
        name: "Corn Cheese Ball",
        price: "229",
        subheading: "Roasted corn stuff with cheese and spices",
      },
      {
        name: "Veg Croquettes ",
        price: "209",
        subheading: "Chopped exotic vegetables stuff with cheese and potatoes",
      },
      {
        name: "Aranchini Balls",
        price: "249",
        subheading: "Deep fried balls stuff with exotic vegetables and cheese",
      },
      {
        name: "Baffalo Cottage Cheese",
        price: "279",
        subheading: "Deep fried paneer toasted in famous baffalo sauce",
      },
      {
        name: "Paneer Satay",
        price: "279",
        subheading: "Pan toasted paneer and vegetables serve with house sauce",
      },
      {
        name: "Masala Khichiya",
        price: "99",
        subheading:
          "Khichiya papad with fusion of Indian and Continental style",
      },
      {
        name: "Mexican Masala",
        price: "159",
        subheading:
          "Kurkuri bites Nachos served with fusion style of Indian and Mexican style along with cheese sauce",
      },
      {
        name: "Beans Nachos",
        price: "249",
        subheading: "Nachos served with Mexican stuffing and sour cream",
      },
      {
        name: "Cheese Nachos",
        price: "239",
        subheading: "Nachos stuff with two type of cheese sauce",
      },
      {
        name: "Cottage Cheese Taxo Nachos",
        price: "249",
        subheading: "Nachos served with Cottage cheese guacamole",
      },
      {
        name: "Quesadilla",
        price: "219",
        subheading:
          "Crunchy tortilla stuff with fresh vegies Mexican marinating and cheese",
      },
      {
        name: "Mexican Chilly Beans",
        price: "119",
        subheading: "Soup load with Mexican flavor and bite of nachos",
      },
      {
        name: "Cream of Tomato",
        price: "99",
        subheading: "Mid taste classic creamy tomato soup",
      },
    ],
  },

  {
    Heading: "FRIES",
    item: [
      {
        name: "Plain-chatpata  peri peri ",
        price: "129",
        subheading: "Fries with the choice of flavor",
      },
      { name: "Cheesy ", price: "149", subheading: "Cheese loaded fries" },
      {
        name: "Chilly Garlic Fries ",
        price: "138",
        subheading: "Fries toasted with garlic and chilly",
      },
    ],
  },

  {
    Heading: "BREAD",
    item: [
      {
        name: "Paneer Makhni Garlic Bread",
        price: "189",
        subheading: "Makhni flavor cottage cheese topped on garlic bread",
      },
      {
        name: "Crostini - Two Flavors ",
        price: "199",
        subheading: "Two Flavor bread topped with cheese",
      },
      {
        name: "Spicy Garlic Bread",
        price: "169",
        subheading: "Bread topped with in house special sprinklers",
      },
      {
        name: "Cheese Garlic Bread ",
        price: "149",
        subheading: "Classic Cheese Bread",
      },
      {
        name: "OTC Garlic Bread",
        price: "179",
        subheading: "Garlic bread topped with vegetables",
      },
      {
        name: "Pulled Cheese Garlic Bread",
        price: "209",
        subheading: "House special garlic bread",
      },
    ],
  },

  {
    Heading: "LEBANESE",
    item: [
      {
        name: "Hummus Platter",
        price: "319",
        subheading:
          "Classic Lebne Platter served with different type of hummus and accomplishments",
      },
      {
        name: "Falafel Platter",
        price: "339",
        subheading: "Platter served with falafel hummus and accomplishment",
      },
    ],
  },

  {
    Heading: "WRAP",
    item: [
      {
        name: "Healthy Veg wrap ",
        price: "179",
        subheading:
          "Best wrap for the diet person lots of vegetables and less of carb",
      },
      {
        name: "Mexican Burrito Wrap",
        price: "199",
        subheading:
          "Wrap stuff with Mexican rice and cheese topped with vegetables",
      },
      {
        name: "Tandoori Paneer Shawarma Wrap",
        price: "199",
        subheading: "Shawarma with the twist taste along with Indian Spice",
      },
      {
        name: "Mushroom wrap",
        price: "179",
        subheading:
          "Sautéed mushroom stuff along with toasted vegies and cheese",
      },
      {
        name: "Falafel Wrap",
        price: "219",
        subheading: "Classic wrap stuff with Falafel and hummus",
      },
      {
        name: "Falafel Pocket",
        price: "239",
        subheading:
          "Fresh cut vegies stuff in pita pocket along with hummus and sour cream",
      },
    ],
  },

  {
    Heading: "SANDWICH",
    item: [
      {
        name: "Classic Veg",
        price: "69",
        subheading: "Freshly cut veggies sandwich like Mumbai",
      },
      {
        name: "Veg Cheese ",
        price: "89",
        subheading:
          "Freshly cut veggies sandwich like Mumbai topped with cheese",
      },
      {
        name: "Masala Grill",
        price: "189",
        subheading: "Masala cheese grill sandwich flavored spicy and chatpata",
      },
      {
        name: "Bread Butter-Jam Chatni",
        price: "48",
        subheading: "Craving cutter with choice of flavors",
      },
      {
        name: "Peri Peri Toast",
        price: "149",
        subheading:
          "Chopped vegetables coated with spicy marinating and load with cheese",
      },
      {
        name: "Paneer Toast",
        price: "159",
        subheading:
          "special in house sauce coated with small cut paneer and vegies",
      },
      {
        name: "Dostea Special Toast Sandwich",
        price: "179",
        subheading:
          "Melted cheese with sautéed vegies stuff between crunchy breads",
      },
    ],
  },

  {
    Heading: "BUNS",
    item: [
      {
        name: "Plain Maska Bun",
        price: "29",
        subheading: "Best combination with tea",
      },
      {
        name: "Masala Maska bun ",
        price: "48",
        subheading: "Bun servers with lots of butter and Indian species",
      },
      {
        name: "Peri Peri Maska bun ",
        price: "48",
        subheading: "Sweetness of bun along with in house special spice",
      },
      {
        name: "Tandoori Maska Bun",
        price: "48",
        subheading: "Indian taste lover",
      },
    ],
  },

  {
    Heading: "PIZZA",
    item: [
      {
        name: "Margarita",
        price: "259",
        subheading: "Classic cheese Pizza topped with Tomato and basil",
      },
      {
        name: "Pepper Pizza",
        price: "269",
        subheading: "5 types of peppers on pizza",
      },
      {
        name: "Garden Fresh",
        price: "269",
        subheading: "Load with full exotic vegetables",
      },
      {
        name: "Peri Peri Paneer ",
        price: "319",
        subheading: "Pizza Need spicy pizza this is the best choice for you",
      },
      {
        name: "Paneer Tikka Pizza",
        price: "319",
        subheading: "Paneer on top along with Indian spices flavor",
      },
      {
        name: "Hawaiian Pizza ",
        price: "269",
        subheading: "Jalapeno Pineapple topped on pizza",
      },
      {
        name: "Mexican",
        price: "319",
        subheading: "Fusion of Italian n Mexican taste together",
      },
    ],
  },

  {
    Heading: "PASTA",
    item: [
      {
        name: "Creamy cheese",
        price: "259",
        subheading: "Classic béchamel cheese sauce pasta with exotic vegies",
      },
      {
        name: "Pica to Redasto",
        price: "259",
        subheading: "Combination of two sauce with mid spicy n cheese flavor",
      },
      {
        name: "Tomatino Basil",
        price: "249",
        subheading: "Classic arrabiata sauce floverd with basil ",
      },
    ],
  },

  {
    Heading: "BAKED DISH",
    item: [
      {
        name: "Corn Spinach Lasagna",
        price: "269",
        subheading: "Roasted corn and spinach baked with lots of cheese",
      },
      {
        name: "Paneer Makhni Lasagna",
        price: "289",
        subheading: "Fusion of Indian and Italian food baked dish",
      },
      {
        name: "Enchiladas",
        price: "239",
        subheading: "Mexican authentic backed dish",
      },
    ],
  },

  {
    Heading: "CONTINENTAL RICE",
    item: [
      {
        name: "Mexican Burrito Bowl",
        price: "259",
        subheading: "Mexican rice served with curry n salsa",
      },
      {
        name: "Cilantro Rice With Garlic Sauce",
        price: "249",
        subheading:
          "Flavored cilantro rice served with cheese burnt garlic sauce",
      },
      {
        name: "Herb rice with Cheese Sauce",
        price: "249",
        subheading: "Different flavor herbs served with cheese sauce",
      },
    ],
  },

  {
    Heading: "CHINESE RICE",
    item: [
      {
        name: "Fried Rice",
        price: "189",
        subheading: "Classic aromatic Chinese rice",
      },
      {
        name: "Schezwan Rice",
        price: "199",
        subheading: "Oriental spicy rice with vegetables",
      },
      {
        name: "Burnt Garlic",
        price: "229",
        subheading: "Aroma and taste of burnt garlic in oriental rice",
      },
      {
        name: "Triple Rice",
        price: "279",
        subheading: "Three type of rice along with veg exotic gravy",
      },
    ],
  },

  {
    Heading: "NOODLES",
    item: [
      {
        name: "Hakka Noodles",
        price: "169",
        subheading: "Classic aromatic Chinese noodles",
      },
      {
        name: "Burnt Garlic Noodles",
        price: "189",
        subheading: "Noodles toasted Vegetables with burnt garlic",
      },
      {
        name: "Schezwan Noodles ",
        price: "179",
        subheading: "Spicy aromatic noodles",
      },
    ],
  },

  {
    Heading: "CHINESE GRAVY",
    item: [
      {
        name: "Gravy Manchurian",
        price: "199",
        subheading: "Vegetable balls served with classic Manchurian gravy",
      },
      {
        name: "Exotic Veg in Garlic Sauce",
        price: "239",
        subheading: "Roasted Veg served with Garlic sauce gravy",
      },
      {
        name: "Panner Chilly Gravy",
        price: "249",
        subheading: "Coated Fried Paneer floated in rich gravy",
      },
    ],
  },

  {
    Heading: "MAGGIE",
    item: [
      {
        name: "Veg Masala",
        price: "69",
        subheading: "Classic Maggie with vegies and spice",
      },
      {
        name: "Double Masala",
        price: "69",
        subheading: "Maggie with double masala flavor n veggies",
      },
      {
        name: "Exotic Maggie",
        price: "89",
        subheading: "Chopped exotic veggies and spices",
      },
      {
        name: "Chilly Garlic Maggie",
        price: "89",
        subheading: "Spicy flavor Maggie",
      },
      {
        name: "BBQ Maggie",
        price: "89",
        subheading: "Maggie with veggies and barbeque flavor",
      },
    ],
  },

  {
    Heading: "INDIAN CURRY",
    item: [
      {
        name: "Paneer butter masala",
        price: "249",
        subheading: "Rich Makhni Gravy with mild taste",
      },
      {
        name: "Paneer Chatpata",
        price: "259",
        subheading: "Spicy and tangy cottage cheese serve with vegetables",
      },
      {
        name: "Paneer Angara",
        price: "269",
        subheading: "Spicy paneer with Julian vegetables",
      },
      {
        name: "Mix Veg",
        price: "199",
        subheading: "Onion gravy with bunch of vegies",
      },
      {
        name: "Veg Khima",
        price: "219",
        subheading: "Mid Spicy makhni gravy with fine chopped vegetables",
      },
      {
        name: "Lahsooni Kofta",
        price: "259",
        subheading: "Rich brown gravy with flavor of burnt garlic",
      },
      {
        name: "Jeera Aloo ",
        price: "189",
        subheading: "Boiled aloo with cumin n chilly tadka",
      },
      {
        name: "Dal Tadka",
        price: "199",
        subheading: "Dal toped with red paprika and butter",
      },
    ],
  },

  {
    Heading: "INDIAN RICE",
    item: [
      {
        name: "Jeera Rice",
        price: "99",
        subheading: "Hot aromatic rice with cumin tacka",
      },
      {
        name: "Veg Pulao",
        price: "149",
        subheading: "Mix veg pulao with aromatic flavor",
      },
      {
        name: "Veg Biryani",
        price: "199",
        subheading: "Desi aromatic rice with veg gravy combination",
      },
      {
        name: "Veg Raita",
        price: "48",
        subheading: "Chopped vegetables and aromatic spice",
      },
    ],
  },

  {
    Heading: "INDIAN - BREAD",
    item: [
      {
        name: "Malabar Paratha",
        price: "29",
        subheading: "South Indian style paratha",
      },
      {
        name: "Tava Roti",
        price: "29",
        subheading: "Desi tave roti home style",
      },
      {
        name: "Mix veg paratha ",
        price: "50",
        subheading: "Chopped veg stuff paratha",
      },
      {
        name: "Paneer paratha",
        price: "60",
        subheading: "Grated panner n veggies stuff paratha",
      },
    ],
  },

  {
    Heading: "SAMOSA",
    item: [
      {
        name: "Samosa",
        price: "50",
        subheading:
          "Rich flavour of punjabi cuisine served with flavoured dips",
      },
    ],
  },

  {
    Heading: "SIZZLER",
    item: [
      {
        name: "Mexican Sizzler",
        price: "499 ",
        subheading:
          "Mexican rice served with curry ,patty,sautéed veg and fries",
      },
      {
        name: "Herb Sizzler",
        price: "519",
        subheading:
          "Aromatic flavor Herbs served with cheese sauce sautéed veg and fries",
      },
      {
        name: "Oriental Sizzler",
        price: "449",
        subheading:
          "Oriental style sizzler serve rice Cottage Cheese Gravy Sautéed Veg and fries",
      },
      {
        name: "Pasta in Pasta",
        price: "539",
        subheading:
          "Two flavor pasta in one plate along with Garlic bread Sautéed Veg and fries",
      },
    ],
  },

  {
    Heading: "SALAD",
    item: [
      {
        name: "Greek farmer salad",
        price: "199",
        subheading:
          "Fresh cut Vegies coated with in house flavor oil topped with cheese and olives",
      },
      {
        name: "Classic Cesar salad ",
        price: "199",
        subheading:
          "Herb crotons and ice burg coated with Cesar sauce topped with parmesan cheese",
      },
      {
        name: "Sautéed cottage cheese ",
        price: "199",
        subheading: "High protein salad best for the healthy eater",
      },
      {
        name: "Sautéed mushroom",
        price: "199",
        subheading: "Sautéed Mushroom and veggies along with aromatic herbs",
      },
    ],
  },

  {
    Heading: "DESSERT",
    item: [
      { name: "Mud Brownie", price: "119" },
      { name: "Sizzling Brownie", price: "199" },
      { name: "Pan cake", price: "139" },
      { name: "Waffle Chocolate", price: "119" },
    ],
  },

  {
    Heading: "ACCOMPLISHMENT",
    item: [
      { name: "Roasted Papad", price: "19" },
      { name: "Fried Papad", price: "36" },
      { name: "Masala Papad", price: "48" },
      { name: "Green Salad", price: "119" },
    ],
  },
];
const aboutData = [
  {
    title: "Yum Chocolate",
    img: "images/about/carousel/0.jpg",
    menu: true,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihilharum omnis eum ipsam, enim obcaecati! Veritatis inciduntvoluptas saepe accusantium quod ut architecto beatae at iure.Quibusdam amet optio autem, sint sit quisquam rerum vitae a,iusto, perspiciatis perferendis architecto",
  },
  {
    title: "Lovely Location",
    img: "images/about/1.jpg",
    menu: false,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihilharum omnis eum ipsam, enim obcaecati! Veritatis inciduntvoluptas saepe accusantium quod ut architecto beatae at iure.Quibusdam amet optio autem, sint sit quisquam rerum vitae a,iusto, perspiciatis perferendis architecto",
  },
  {
    title: "Wide Variety",
    img: "images/about/carousel/2.jpg",
    menu: true,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihilharum omnis eum ipsam, enim obcaecati! Veritatis inciduntvoluptas saepe accusantium quod ut architecto beatae at iure.Quibusdam amet optio autem, sint sit quisquam rerum vitae a,iusto, perspiciatis perferendis architecto",
  },
  {
    title: "Memories",
    img: "images/about/carousel/3.jpg",
    menu: false,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihilharum omnis eum ipsam, enim obcaecati! Veritatis inciduntvoluptas saepe accusantium quod ut architecto beatae at iure.Quibusdam amet optio autem, sint sit quisquam rerum vitae a,iusto, perspiciatis perferendis architecto",
  },
  {
    title: "Party Nights",
    img: "images/about/4.jpg",
    menu: false,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihilharum omnis eum ipsam, enim obcaecati! Veritatis inciduntvoluptas saepe accusantium quod ut architecto beatae at iure.Quibusdam amet optio autem, sint sit quisquam rerum vitae a,iusto, perspiciatis perferendis architecto",
  },
];
const specialdishes=[
  {
    heading:"Chille Garlic Fries",
    content:'Chilli Garlic fried rice is an absolute winner – spicy and garlicky Fried Rice filled with fiery chili and garlic flavours that is simply delicious!',
    img:"images/menu/fries.jpg",
},
{
  heading:"Veg Biryani",
  content:'A variety of vegetables complement each other to create the bold and flavorful taste',
  img:"images/menu/chinese rice.jpg",
},
{
  heading:"Paneer Makhani Garlic Bread",
  content:'Spicy garlic paneer is a starter that will be loved by most people. It makes a great appetizer for a party menu',
  img:"images/menu/bread.jpg",
},
{
  heading:"Noodles",
  content:'a very thin, long strip of pasta or a similar flour paste, eaten with a sauce or in a soup',
  img:"images/menu/maggie.jpg",
},
{
  heading:'Hot Chocolate',
  content:'9 Out of 10 Likes Our Special Hot cup Chocolate which you can eat after chocolate',
  img:'images/about/carousel/0.jpg'
}
]

export  {menu,aboutData,specialdishes};
