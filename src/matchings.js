// Matching system for pizza options.

export const bread = [
  {
    id: "1",
    name: "New York/New Jersey",
    image: "bread1.jpg",
    text: "Hello, New York!",
    attributes: "&primary_release_date.gte=2017-01-01"
  },
  {
    id: "2",
    name: "New England Greek",
    image: "bread2.jpg",
    text: "New England Greek, fancy choice.",
    attributes:
      "&primary_release_date.gte=2015-01-01&primary_release_date.lte=2017-01-01"
  },
  {
    id: "3",
    name: "Deep dish",
    image: "bread3.jpg",
    text: "Deep dish is a marvelous choice!",
    attributes:
      "&primary_release_date.gte=2012-01-01&primary_release_date.lte=2015-01-01"
  },
  {
    id: "4",
    name: "Multigrain",
    image: "bread4.jpg",
    text: "Multigrain, nice one.",
    attributes:
      "&primary_release_date.gte=2007-01-01&primary_release_date.lte=2012-01-01"
  },
  {
    id: "5",
    name: "Whole wheat",
    image: "bread5.jpg",
    text: "Whole wheat for the belly and wholesome for the heart.",
    attributes:
      "&primary_release_date.gte=2000-01-01&primary_release_date.lte=2007-01-01"
  },
  {
    id: "6",
    name: "St. Louis",
    image: "bread6.jpg",
    text: "You chose St. Louis bread.",
    attributes:
      "&primary_release_date.gte=1992-01-01&primary_release_date.lte=2000-01-01"
  },
  {
    id: "7",
    name: "Cracker crust",
    image: "bread7.jpg",
    text: "Cracker crust, great option!",
    attributes:
      "&primary_release_date.gte=1980-01-01&primary_release_date.lte=1992-01-01"
  },
  {
    id: "8",
    name: "Flatbread",
    image: "bread8.jpg",
    text: "I can see that you chose flatbread.",
    attributes: "&primary_release_date.lte=1980-01-01"
  }
];

export const sauce = [
  {
    id: "9",
    name: "Pesto",
    image: "sauce1.jpg",
    text: "Your pizza seems really Italian.",
    attributes: "&without_keywords=4653"
  },
  {
    id: "10",
    name: "Bechamel",
    image: "sauce2.jpg",
    text: "Your pizza seems very French.",
    attributes: "&without_keywords=925"
  },
  {
    id: "11",
    name: "Salsa",
    image: "sauce3.jpg",
    text: "You want the hot stuff?",
    attributes: "&sort_by=popularity.desc"
  },
  {
    id: "12",
    name: "BBQ",
    image: "sauce4.jpg",
    text: "People like BBQ sauce as much as they like these movies.",
    attributes: "&vote_average.gte=8"
  },
  {
    id: "13",
    name: "Buffalo",
    image: "sauce5.jpg",
    text: "It takes time to make good buffalo sauce, like quite a while.",
    attributes: "&with_runtime.gte=120"
  },
  {
    id: "14",
    name: "Creamy ranch",
    image: "sauce6.jpg",
    text: "Creamy ranch is quick and easy.",
    attributes: "&with_runtime.gte=60&with_runtime.lte=75"
  },
  {
    id: "15",
    name: "Marinara",
    image: "sauce7.jpg",
    text: "Want some safe choices huh?",
    attributes: "&sort_by=vote_average.desc&vote_count.gte=200"
  },
  {
    id: "16",
    name: "Tapenade",
    image: "sauce8.jpg",
    text: "Not a conventional sauce I see. How about unconventional movies?",
    attributes: "&vote_average.gte=5&vote_average.lte=8"
  }
];

export const topping = [
  {
    id: "17",
    name: "Pepperoni",
    image: "topping1.jpg",
    text: "Everybody enjoys good animated movies, just like pepperoni:",
    attributes: "&with_genres=16"
  },
  {
    id: "18",
    name: "Mushrooms",
    image: "topping2.jpg",
    text:
      "You must like explosions with mushroom clouds, so here are some sci-fi for ya:",
    attributes: "&with_genres=878"
  },
  {
    id: "19",
    name: "Onions",
    image: "topping3.jpg",
    text: "Where are all of those ninja cutting onions?",
    attributes: "&with_genres=18"
  },
  {
    id: "20",
    name: "Sausage",
    image: "topping4.jpg",
    text:
      "Another evidence leads to another, like a sausage link. Let's solve some cases!",
    attributes: "&with_genres=80"
  },
  {
    id: "21",
    name: "Bacon",
    image: "topping5.jpg",
    text: "Bacon is so good, it feels like fantasy!",
    attributes: "&with_genres=14"
  },
  {
    id: "22",
    name: "Extra cheese",
    image: "topping6.jpg",
    text: "Extra cheesy movies, coming right up!",
    attributes: "&with_genres=10749"
  },
  {
    id: "23",
    name: "Black olives",
    image: "topping7.jpg",
    text: "Black olives always make me wanna dance. Hit the music!",
    attributes: "&with_genres=10402"
  },
  {
    id: "24",
    name: "Green peppers",
    image: "topping8.jpg",
    text: "Like peppers, these movies are hot, spicy and action-packed!",
    attributes: "&with_genres=28"
  },
  {
    id: "25",
    name: "Pineapple",
    image: "topping9.jpg",
    text: "Hmm, pineapple on pizza. Seems like you wanna start a war:",
    attributes: "&with_genres=10752"
  },
  {
    id: "26",
    name: "Spinach",
    image: "topping10.jpg",
    text: "These movie will make your head spin and ache!",
    attributes: "&with_genres=9648"
  },
  {
    id: "27",
    name: "Tomatoes",
    image: "topping11.jpg",
    text: "Some thriller soaked with red might be what you seek:",
    attributes: "&with_genres=53"
  },
  {
    id: "28",
    name: "Chicken",
    image: "topping12.jpg",
    text: "Try not to chicken out while watching these:",
    attributes: "&with_genres=27"
  },
  {
    id: "29",
    name: "Mozzarella",
    image: "topping13.jpg",
    text:
      "To truly understand the greatness of this cheese, one must go on a journey:",
    attributes: "&with_genres=12"
  },
  {
    id: "30",
    name: "Basil",
    image: "topping14.jpg",
    text: "Basic as basil, documentary is exactly what you need:",
    attributes: "&with_genres=99"
  },
  {
    id: "31",
    name: "Salami",
    image: "topping15.jpg",
    text: "Comedy it is! Why? Because it rhymes with salami!",
    attributes: "&with_genres=35"
  },
  {
    id: "32",
    name: "Ham",
    image: "topping16.jpg",
    text: "How about some 'slice' of life, family-friendly content?",
    attributes: "&with_genres=10751"
  }
];
