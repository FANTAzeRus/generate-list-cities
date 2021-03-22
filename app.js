Array.prototype.unique = function () {
  var o = {},
    a = [],
    i,
    e;
  for (i = 0; (e = this[i]); i++) {
    o[e] = 1;
  }
  for (e in o) {
    a.push(e);
  }
  return a;
};

Array.prototype.toUpper = function () {
  return this.map((c) => {
    let firstLetter = String(c).substr(0, 1).toUpperCase();

    return firstLetter + c.substr(1).toLowerCase();
  });
};

const cities = [
  "Ейск",
  "гдов",
  "Евпатория",
  "Абакан",
  "екатеринбург",
  "Астана",
  "выборг",
  "зеленогорск",
  "заречный",
  "владивосток",
  "азбест",
  "брест",
  "дзержинск",
  "Владивосток",
  "Самара",
  "Санкт-Петербург",
  "Москва",
  "мурманск",
  "магнитогорск",
  "пенза",
  "приозерск",
  "сестрорецк",
  "светогорск",
  "Сосновый Бор",
  "Мурманск",
  "Гатчина",
  "Курган",
  "Тихвин",
  "барнаул",
  "казань",
  "калининград",
  "адлер",
  "анапа",
]
  .unique()
  .sort((a, b) => a.localeCompare(b))
  .toUpper();

const citiesList = new Map();
cities.forEach((c) => {
  let firstLetter = String(c).substr(0, 1).toUpperCase();
  if (!citiesList.has(firstLetter)) {
    citiesList.set(
      firstLetter,
      cities.filter((c) => c.substr(0, 1).toUpperCase() === firstLetter)
    );
  }
});

const App = {
  template: `
		<div class="group" v-for="[letter, list] in cl" :key="letter">
			<div class="letter">{{letter}}</div>
			<div class="city" v-for="(city, idx) in list" :key="idx">{{city}}</div>
		</div>
	`,

  setup() {
    const cl = Vue.ref(citiesList);

    return {cl};
  },
};

Vue.createApp(App).mount("#app");
