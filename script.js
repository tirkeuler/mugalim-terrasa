const cards = document.querySelectorAll(".set-card");
const chosenName = document.querySelector("#chosen-name");
const chosenPrice = document.querySelector("#chosen-price");
const whatsappLink = document.querySelector("#whatsapp-link");
const orderSetSelect = document.querySelector("#order-set-select");
const clientName = document.querySelector("#client-name");
const clientPhoneLast = document.querySelector("#client-phone-last");
const orderPeople = document.querySelector("#order-people");
const orderDate = document.querySelector("#order-date");
const orderTime = document.querySelector("#order-time");
const orderVenue = document.querySelector("#order-venue");
const pdfClientName = document.querySelector("#pdf-client-name");
const pdfClientPhone = document.querySelector("#pdf-client-phone");
const pdfSetName = document.querySelector("#pdf-set-name");
const pdfPeople = document.querySelector("#pdf-people");
const pdfDate = document.querySelector("#pdf-date");
const pdfTime = document.querySelector("#pdf-time");
const pdfVenue = document.querySelector("#pdf-venue");
const pdfRent = document.querySelector("#pdf-rent");
const pdfFoods = document.querySelector("#pdf-foods");
const pdfAddedFoods = document.querySelector("#pdf-added-foods");
const pdfRemovedFoods = document.querySelector("#pdf-removed-foods");
const pdfSalads = document.querySelector("#pdf-salads");
const pdfChangedSalads = document.querySelector("#pdf-changed-salads");
const pdfRemovedSalads = document.querySelector("#pdf-removed-salads");
const pdfDrinks = document.querySelector("#pdf-drinks");
const pdfChangedDrinks = document.querySelector("#pdf-changed-drinks");
const pdfRemovedDrinks = document.querySelector("#pdf-removed-drinks");
const pdfTotal = document.querySelector("#pdf-total");
const setType = document.querySelector("#set-type");
const peopleCount = document.querySelector("#people-count");
const calcSoup = document.querySelector("#calc-soup");
const calcMainName = document.querySelector("#calc-main-name");
const calcMain = document.querySelector("#calc-main");
const calcMainRule = document.querySelector("#calc-main-rule");
const calcSamsa = document.querySelector("#calc-samsa");
const calcDrinks = document.querySelector("#calc-drinks");
const calcBaursak = document.querySelector("#calc-baursak");
const calcSalad = document.querySelector("#calc-salad");
const saladList = document.querySelector("#salad-list");
const saladForm = document.querySelector("#salad-form");
const saladMenu = document.querySelector("#salad-menu");
const saladNotice = document.querySelector("#salad-notice");
const removedSaladList = document.querySelector("#removed-salad-list");
const drinkList = document.querySelector("#drink-list");
const drinkForm = document.querySelector("#drink-form");
const drinkMenu = document.querySelector("#drink-menu");
const drinkNotice = document.querySelector("#drink-notice");
const removedDrinkList = document.querySelector("#removed-drink-list");
const foodList = document.querySelector("#food-list");
const foodForm = document.querySelector("#food-form");
const foodMenu = document.querySelector("#food-menu");
const foodNotice = document.querySelector("#food-notice");
const removedFoodList = document.querySelector("#removed-food-list");
const totalKebab = document.querySelector("#total-kebab");
const totalPlov = document.querySelector("#total-plov");
const totalManty = document.querySelector("#total-manty");
const rentRows = document.querySelectorAll(".rent-row");
const menuKebabSummary = document.querySelector("#menu-kebab-summary");
const menuPlovSummary = document.querySelector("#menu-plov-summary");
const menuMantySummary = document.querySelector("#menu-manty-summary");

let selectedOrderSet = null;
let manualSamsaPlates = null;
let manualSaladPlates = null;
let removedSalads = [];
let removedDrinks = [];
let removedFoods = [];
let customSaladIds = new Set();
let customDrinkIds = new Set();
let customFoodIds = new Set();
let baselineSaladQuantities = {};
let baselineDrinkQuantities = {};
let baselineFoodQuantities = {};
let lastFoodTemplateKey = "";
let lastDrinkTemplateKey = "";
const saladCatalog = [
  { id: "eggplant", name: "Хрустящие баклажаны", price: 4719 },
  { id: "greek", name: "Греческий", price: 3289 },
  { id: "caesar", name: "Цезарь", price: 3509 },
  { id: "achuchuk", name: "Ачучук", price: 1900 },
];
let salads = [
  { id: "eggplant", name: "Хрустящие баклажаны", price: 4719, quantity: 2 },
  { id: "greek", name: "Греческий", price: 3289, quantity: 2 },
  { id: "caesar", name: "Цезарь", price: 3509, quantity: 2 },
];
const drinkCatalog = [
  { id: "cola-plastic", name: "Кола пластик 1 л", price: 1000 },
  { id: "fanta-plastic", name: "Фанта пластик 1 л", price: 1000 },
  { id: "sprite-plastic", name: "Спрайт пластик 1 л", price: 1000 },
  { id: "cola-glass", name: "Кола шиша", price: 1000 },
  { id: "fanta-glass", name: "Фанта шиша", price: 1000 },
  { id: "sprite-glass", name: "Спрайт шиша", price: 1000 },
];
let drinks = [
  { id: "cola-plastic", name: "Кола пластик 1 л", price: 1000, quantity: 1 },
  { id: "fanta-plastic", name: "Фанта пластик 1 л", price: 1000, quantity: 1 },
  { id: "sprite-plastic", name: "Спрайт пластик 1 л", price: 1000, quantity: 1 },
];
const foodCatalog = [
  { id: "soup-extra", name: "Қайнатпа сорпа", price: 1700 },
  { id: "samsa-extra", name: "Самса", price: 450 },
  { id: "nan-extra", name: "Нан", price: 400 },
  { id: "baursak-extra", name: "Бауырсақ 1 кг", price: 1200 },
  { id: "kebab-extra", name: "Қазан-кебап", price: 3000 },
  { id: "plov-extra", name: "Плов", price: 2500 },
  { id: "manty-extra", name: "Манты шт", price: 450 },
];
let foods = [];

const prices = {
  soup: 1700,
  kebab: 3000,
  plov: 2500,
  manty: 450,
  samsa: 450,
  drinkBottle: 1000,
  baursakKg: 1200,
  terraceRent: 20000,
  urboRent: 0,
};

cards.forEach((card) => {
  const button = card.querySelector("button");

  button.addEventListener("click", () => {
    const name = button.dataset.name;
    selectedOrderSet = getSetKeyByName(name);
    if (selectedOrderSet) {
      setType.value = selectedOrderSet;
      orderSetSelect.value = selectedOrderSet;
      syncCustomSelects();
    }

    chosenName.textContent = name;
    updateGroupSet();
    document.querySelector("#order").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

function getSetKeyByName(name) {
  if (name === "Қазан-кебап") return "kebab";
  if (name === "Плов") return "plov";
  if (name === "Манты") return "manty";
  return null;
}

function enhanceSetSelect(select) {
  const wrapper = document.createElement("div");
  wrapper.className = "custom-select";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "custom-select-button";
  button.setAttribute("aria-haspopup", "listbox");
  button.setAttribute("aria-expanded", "false");

  const menu = document.createElement("div");
  menu.className = "custom-select-menu";
  menu.setAttribute("role", "listbox");

  Array.from(select.options).forEach((option) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "custom-select-option";
    item.textContent = option.textContent;
    item.dataset.value = option.value;
    item.setAttribute("role", "option");
    item.addEventListener("click", () => {
      select.value = option.value;
      if (select.id === "set-type") {
        selectedOrderSet = select.value;
        orderSetSelect.value = select.value;
        updateGroupSet();
      }
      if (select.id === "order-set-select") {
        selectedOrderSet = select.value || null;
        if (selectedOrderSet) setType.value = selectedOrderSet;
        updateGroupSet();
      }
      select.dispatchEvent(new Event("change", { bubbles: true }));
      wrapper.classList.remove("open");
      syncCustomSelects();
    });
    menu.append(item);
  });

  select.classList.add("native-select-hidden");
  select.after(wrapper);
  wrapper.append(button, menu);
  wrapper.dataset.selectId = select.id;

  button.addEventListener("click", () => {
    document.querySelectorAll(".custom-select.open").forEach((item) => {
      if (item !== wrapper) item.classList.remove("open");
    });
    wrapper.classList.toggle("open");
    button.setAttribute("aria-expanded", wrapper.classList.contains("open").toString());
  });
}

function syncCustomSelects() {
  document.querySelectorAll(".custom-select").forEach((wrapper) => {
    const select = document.querySelector(`#${wrapper.dataset.selectId}`);
    const button = wrapper.querySelector(".custom-select-button");
    const selectedOption = select.options[select.selectedIndex];
    button.textContent = selectedOption ? selectedOption.textContent : "Таңдаңыз";

    wrapper.querySelectorAll(".custom-select-option").forEach((option) => {
      const isSelected = option.dataset.value === select.value;
      option.classList.toggle("selected", isSelected);
      option.setAttribute("aria-selected", isSelected.toString());
    });
  });
}

document.addEventListener("click", (event) => {
  if (event.target.closest(".custom-select")) return;
  document.querySelectorAll(".custom-select.open").forEach((item) => item.classList.remove("open"));
});

function clampPeople(value) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed) || parsed < 1) return 1;
  return Math.min(parsed, 120);
}

function getVenueDetails() {
  if (orderVenue.value === "urbo") {
    return {
      name: "1 қабат Урбо кофейня",
      rent: prices.urboRent,
    };
  }

  return {
    name: "9 қабат терраса",
    rent: prices.terraceRent,
  };
}

function getTomorrowDateValue() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().slice(0, 10);
}

function updateGroupSet() {
  const people = clampPeople(peopleCount.value);
  peopleCount.value = people;
  orderPeople.value = people;
  const selectedSet = setType.value;

  const samsaPlates = Math.ceil(people / 6);
  const actualSamsaPlates = manualSamsaPlates ?? samsaPlates;
  const samsaPieces = actualSamsaPlates * 6;
  const drinkSets = Math.ceil(people / 4);
  syncDrinkQuantity(drinkSets);
  const drinkLiters = calculateDrinkLiters();
  const baursakKg = Math.ceil(people / 12);
  const saladPlates = Math.ceil(people / 2);
  const actualSaladPlates = manualSaladPlates ?? saladPlates;
  const setRules = {
    kebab: {
      name: "Қазан-кебап",
      amount: `${people} порция`,
      rule: "адам басына 1",
    },
    plov: {
      name: "Плов",
      amount: `${people} порция`,
      rule: "адам басына 1",
    },
    manty: {
      name: "Манты",
      amount: `${people * 4} дана`,
      rule: "адам басына 4 дана",
    },
  };
  const main = setRules[selectedSet];
  syncBaseFoods({ selectedSet, people, samsaPieces, baursakKg });
  const totals = calculateTotals({
    people,
    samsaPieces,
    drinkSets,
    baursakKg,
    saladPlates: actualSaladPlates,
  });

  calcSoup.textContent = `${people} порция`;
  calcMainName.textContent = main.name;
  calcMain.textContent = main.amount;
  calcMainRule.textContent = main.rule;
  calcSamsa.textContent = `${actualSamsaPlates} тарелка / ${samsaPieces} дана`;
  calcDrinks.textContent = `${drinkSets} топтама / ${drinkLiters} литр`;
  calcBaursak.textContent = `${baursakKg} кг`;
  calcSalad.textContent = `${actualSaladPlates} тарелка`;
  totalKebab.textContent = formatTenge(totals.kebab);
  totalPlov.textContent = formatTenge(totals.plov);
  totalManty.textContent = formatTenge(totals.manty);
  menuKebabSummary.textContent = `${people} адам · ${formatTenge(totals.kebab)}`;
  menuPlovSummary.textContent = `${people} адам · ${formatTenge(totals.plov)}`;
  menuMantySummary.textContent = `${people} адам · ${formatTenge(totals.manty)}`;
  updateRentRows();
  updateOrderBox({ people, totals });
}

function updateOrderBox({ people, totals }) {
  const nameText = clientName.value.trim() ? clientName.value.trim() : "әлі жазылмады";
  const phoneText = clientPhoneLast.value.trim() ? clientPhoneLast.value.trim() : "әлі жазылмады";
  const dateText = orderDate.value ? orderDate.value : "әлі таңдалмады";
  const timeText = orderTime.value ? orderTime.value : "әлі таңдалмады";
  const venue = getVenueDetails();
  const rentText = formatTenge(venue.rent);

  if (!selectedOrderSet) {
    const message = encodeURIComponent(buildWhatsAppOrderText({
      nameText,
      phoneText,
      setText: "әлі таңдалмады",
      people,
      dateText,
      timeText,
      venue,
      rentText,
      totalText: "0 ₸",
    }));

    chosenName.textContent = "Әлі таңдалмады";
    chosenPrice.textContent = "Сет таңдаңыз";
    whatsappLink.href = `https://wa.me/77787783636?text=${message}`;
    updatePdfSummary({
      nameText,
      phoneText,
      setText: "әлі таңдалмады",
      people,
      dateText,
      timeText,
      venue,
      rentText,
      totalText: "0 ₸",
    });
    return;
  }

  const setNames = {
    kebab: "Қазан-кебап",
    plov: "Плов",
    manty: "Манты",
  };
  const total = formatTenge(totals[selectedOrderSet]);
  const message = encodeURIComponent(buildWhatsAppOrderText({
    nameText,
    phoneText,
    setText: setNames[selectedOrderSet],
    people,
    dateText,
    timeText,
    venue,
    rentText,
    totalText: total,
  }));

  chosenName.textContent = setNames[selectedOrderSet];
  chosenPrice.textContent = `Толық бағасы: ${total} · Аренда: ${rentText}`;
  whatsappLink.href = `https://wa.me/77787783636?text=${message}`;
  updatePdfSummary({
    nameText,
    phoneText,
    setText: setNames[selectedOrderSet],
    people,
    dateText,
    timeText,
    venue,
    rentText,
    totalText: total,
  });
}

function formatTenge(value) {
  return `${new Intl.NumberFormat("kk-KZ").format(value)} ₸`;
}

function formatCollectionForPdf(collection, defaultUnit = "дана") {
  if (!collection.length) return "-";
  return collection
    .map((item) => `${item.name}: ${item.quantity} ${item.unit || defaultUnit}`)
    .join("\n");
}

function formatChangedCollectionForPdf(collection, baseline, defaultUnit = "дана") {
  const changed = collection.filter((item) => baseline[item.id] === undefined || item.quantity !== baseline[item.id]);
  if (!changed.length) return "өзгеріс жоқ";

  return changed
    .map((item) => {
      const unit = item.unit || defaultUnit;
      const baseQuantity = baseline[item.id];
      if (baseQuantity === undefined) return `${item.name}: ${item.quantity} ${unit}`;
      const diff = item.quantity - baseQuantity;
      const sign = diff > 0 ? "+" : "";
      return `${item.name}: ${item.quantity} ${unit} (${sign}${diff})`;
    })
    .join("\n");
}

function formatRemovedCollectionForPdf(collection, defaultUnit = "дана") {
  if (!collection.length) return "өзгеріс жоқ";
  return collection.map((item) => `${item.name}: өшірілді`).join("\n");
}

function formatWhatsAppValue(value) {
  return value.startsWith("әлі ") ? `_*${value}*_` : value;
}

function buildWhatsAppOrderText({ nameText, phoneText, setText, people, dateText, timeText, venue, rentText, totalText }) {
  const section = (title, value) => `${title}:\n${value}`;

  return [
    "Сәлеметсіз бе! Тапсырыс бергім келеді.",
    "",
    "Mugalim терраса дәмханасы",
    "Тапсырыс парағы",
    "",
    `Клиент есімі: ${formatWhatsAppValue(nameText)}`,
    `Телефон соңғы 4 саны: ${formatWhatsAppValue(phoneText)}`,
    `Сет: ${formatWhatsAppValue(setText)}`,
    `Адам саны: ${people} адам`,
    `Келетін күні: ${formatWhatsAppValue(dateText)}`,
    `Келетін сағаты: ${formatWhatsAppValue(timeText)}`,
    `Отыратын орын: ${venue.name}`,
    `Аренда: ${rentText}`,
    "",
    section("Сет ішіндегі тағамдар", formatCollectionForPdf(foods)),
    section("Сетке тағам қосу", formatChangedCollectionForPdf(foods, baselineFoodQuantities)),
    section("Сеттен алынған тағамдар", formatRemovedCollectionForPdf(removedFoods)),
    "",
    section("Салаттар", formatCollectionForPdf(salads, "тарелка")),
    section("Салат менюі", formatChangedCollectionForPdf(salads, baselineSaladQuantities, "тарелка")),
    section("Өшірілген салаттар", formatRemovedCollectionForPdf(removedSalads, "тарелка")),
    "",
    section("Сусындар", formatCollectionForPdf(drinks, "шт")),
    section("Сусын менюі", formatChangedCollectionForPdf(drinks, baselineDrinkQuantities, "шт")),
    section("Өшірілген сусындар", formatRemovedCollectionForPdf(removedDrinks, "шт")),
    "",
    `Толық бағасы: ${totalText}`,
    "Жоғарыдағы тапсырыстарға толықтай келісемін.",
  ].join("\n");
}

function updatePdfSummary({ nameText, phoneText, setText, people, dateText, timeText, venue, rentText, totalText }) {
  setPdfValue(pdfClientName, nameText);
  setPdfValue(pdfClientPhone, phoneText);
  setPdfValue(pdfSetName, setText);
  setPdfValue(pdfPeople, `${people} адам`);
  setPdfValue(pdfDate, dateText);
  setPdfValue(pdfTime, timeText);
  setPdfValue(pdfVenue, venue.name);
  setPdfValue(pdfRent, rentText);
  setPdfValue(pdfFoods, formatCollectionForPdf(foods));
  setPdfChangeValue(pdfAddedFoods, formatChangedCollectionForPdf(foods, baselineFoodQuantities));
  setPdfChangeValue(pdfRemovedFoods, formatRemovedCollectionForPdf(removedFoods));
  setPdfValue(pdfSalads, formatCollectionForPdf(salads, "тарелка"));
  setPdfChangeValue(pdfChangedSalads, formatChangedCollectionForPdf(salads, baselineSaladQuantities, "тарелка"));
  setPdfChangeValue(pdfRemovedSalads, formatRemovedCollectionForPdf(removedSalads, "тарелка"));
  setPdfValue(pdfDrinks, formatCollectionForPdf(drinks, "шт"));
  setPdfChangeValue(pdfChangedDrinks, formatChangedCollectionForPdf(drinks, baselineDrinkQuantities, "шт"));
  setPdfChangeValue(pdfRemovedDrinks, formatRemovedCollectionForPdf(removedDrinks, "шт"));
  setPdfValue(pdfTotal, totalText);
}

function setPdfValue(element, value) {
  element.textContent = value;
  element.classList.toggle("is-missing", value.startsWith("әлі "));
}

function setPdfChangeValue(element, value) {
  element.textContent = value;
  element.classList.toggle("is-changed", value !== "өзгеріс жоқ");
}

function updateRentRows() {
  const venue = getVenueDetails();
  const isTerrace = orderVenue.value !== "urbo";
  const label = isTerrace ? "Аренда. Терраса" : "Аренда. Урбо";

  rentRows.forEach((row) => {
    row.classList.toggle("is-highlighted", isTerrace);
    row.querySelector("dt").textContent = label;
    row.querySelector("dd").textContent = formatTenge(venue.rent);
  });
}

function syncSaladQuantity(plateCount) {
  if (!salads.length) return;
  const currentTotal = salads.reduce((sum, salad) => sum + salad.quantity, 0);
  if (currentTotal === plateCount) return;

  if (currentTotal < plateCount) {
    let remaining = plateCount - currentTotal;
    let index = 0;
    while (remaining > 0) {
      salads[index % salads.length].quantity += 1;
      remaining -= 1;
      index += 1;
    }
    return;
  }

  let remaining = currentTotal - plateCount;
  let index = salads.length - 1;
  while (remaining > 0 && salads.some((salad) => salad.quantity > 0)) {
    const salad = salads[index];
    if (salad.quantity > 0) {
      salad.quantity -= 1;
      remaining -= 1;
    }
    index = index === 0 ? salads.length - 1 : index - 1;
  }
}

function calculateSaladTotal() {
  return salads.reduce((sum, salad) => sum + salad.quantity * (salad.price || 0), 0);
}

function calculateDrinkLiters() {
  return drinks.reduce((sum, drink) => sum + drink.quantity, 0);
}

function calculateDrinkTotal() {
  return drinks.reduce((sum, drink) => sum + drink.quantity * (drink.price || 0), 0);
}

function calculateFoodTotal() {
  const activeTotal = foods.reduce((sum, food) => {
    const baseline = baselineFoodQuantities[food.id];
    const quantity = Number(food.quantity) || 0;

    if (baseline !== undefined) {
      return sum + (quantity - baseline) * (food.price || 0);
    }

    return sum + quantity * (food.price || 0);
  }, 0);

  const removedTotal = removedFoods.reduce((sum, food) => {
    const baseline = baselineFoodQuantities[food.id];
    if (baseline === undefined) return sum;
    return sum - baseline * (food.price || 0);
  }, 0);

  return activeTotal + removedTotal;
}

function getFoodSummary() {
  const changedFoods = foods.filter((food) => {
    const baseline = baselineFoodQuantities[food.id];
    return baseline === undefined || food.quantity !== baseline;
  });

  if (!changedFoods.length && !removedFoods.length) return "өзгеріс жоқ";

  const activeChanges = changedFoods.map((food) => {
    const baseline = baselineFoodQuantities[food.id];
    const unit = food.unit || "дана";
    if (baseline === undefined) return `${food.name} - ${food.quantity} ${unit}`;
    const diff = food.quantity - baseline;
    const sign = diff > 0 ? "+" : "";
    return `${food.name} - ${food.quantity} ${unit} (${sign}${diff})`;
  });
  const removedChanges = removedFoods
    .filter((food) => baselineFoodQuantities[food.id] !== undefined)
    .map((food) => `${food.name} - 0 ${food.unit || "дана"} (алынды)`);

  return [...activeChanges, ...removedChanges].join(", ");
}

function calculateTotals({ people, samsaPieces, drinkSets, baursakKg, saladPlates }) {
  const rent = getVenueDetails().rent;
  const sharedTotal =
    people * prices.soup +
    samsaPieces * prices.samsa +
    calculateDrinkTotal() +
    baursakKg * prices.baursakKg +
    calculateSaladTotal() +
    calculateFoodTotal() +
    rent;

  return {
    kebab: sharedTotal + people * prices.kebab,
    plov: sharedTotal + people * prices.plov,
    manty: sharedTotal + people * 4 * prices.manty,
  };
}

function syncDrinkQuantity(setCount) {
  if (!drinks.length) return;
  const templateKey = `drink-set:${setCount}`;
  if (templateKey === lastDrinkTemplateKey) return;

  drinks = drinks.map((drink) => ({ ...drink, quantity: setCount }));
  customDrinkIds.clear();
  rememberBaseline(drinks, baselineDrinkQuantities);
  lastDrinkTemplateKey = templateKey;
  renderDrinks();
  renderRemovedDrinks();
  renderDrinkMenu();
}

function rememberBaseline(collection, target) {
  Object.keys(target).forEach((key) => delete target[key]);
  collection.forEach((item) => {
    target[item.id] = item.quantity;
  });
}

function getBaseFoodTemplate({ selectedSet, people, samsaPieces, baursakKg }) {
  const mainFoods = {
    kebab: {
      id: "base-main-kebab",
      name: "Қазан-кебап",
      price: prices.kebab,
      quantity: people,
      unit: "порция",
    },
    plov: {
      id: "base-main-plov",
      name: "Плов",
      price: prices.plov,
      quantity: people,
      unit: "порция",
    },
    manty: {
      id: "base-main-manty",
      name: "Манты шт",
      price: prices.manty,
      quantity: people * 4,
      unit: "шт",
    },
  };

  return [
    {
      id: "base-soup",
      name: "Қайнатпа сорпа",
      price: prices.soup,
      quantity: people,
      unit: "порция",
    },
    mainFoods[selectedSet],
    {
      id: "base-samsa",
      name: "Самса",
      price: prices.samsa,
      quantity: samsaPieces,
      unit: "шт",
    },
    {
      id: "base-baursak",
      name: "Бауырсақ 1 кг",
      price: prices.baursakKg,
      quantity: baursakKg,
      unit: "кг",
    },
  ].filter(Boolean);
}

function syncBaseFoods({ selectedSet, people, samsaPieces, baursakKg }) {
  const templateKey = `${selectedSet}:${people}:${samsaPieces}:${baursakKg}`;
  if (templateKey === lastFoodTemplateKey) return;

  const defaults = getBaseFoodTemplate({ selectedSet, people, samsaPieces, baursakKg });
  const defaultIds = new Set(defaults.map((food) => food.id));
  const currentExtras = foods.filter((food) => !food.id.startsWith("base-"));
  const removedExtras = removedFoods.filter((food) => !food.id.startsWith("base-"));

  foods = [...defaults, ...currentExtras];
  removedFoods = removedExtras;
  baselineFoodQuantities = {};
  rememberBaseline(defaults, baselineFoodQuantities);
  customFoodIds = new Set([...customFoodIds].filter((id) => !defaultIds.has(id)));
  lastFoodTemplateKey = templateKey;
  renderFoods();
  renderRemovedFoods();
  renderFoodMenu();
}

function refreshCustomState(collection, baseline, customIds) {
  collection.forEach((item) => {
    if (baseline[item.id] === undefined) return;
    if (item.quantity === baseline[item.id]) {
      customIds.delete(item.id);
    } else {
      customIds.add(item.id);
    }
  });
}

function renderSalads() {
  saladList.innerHTML = "";
  refreshCustomState(salads, baselineSaladQuantities, customSaladIds);
  salads.forEach((salad, index) => {
    const item = document.createElement("li");
    if (customSaladIds.has(salad.id)) {
      item.classList.add("is-custom");
    }

    const info = document.createElement("div");
    info.className = "salad-info";

    const name = document.createElement("strong");
    name.textContent = salad.name;

    const price = document.createElement("span");
    price.textContent = formatTenge(salad.price || 0);

    info.append(name, price);

    const qty = document.createElement("div");
    qty.className = "salad-qty";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "-";
    minus.setAttribute("aria-label", `${salad.name} санын азайту`);
    minus.addEventListener("click", () => {
      customSaladIds.add(salads[index].id);
      salads[index].quantity = Math.max(0, salads[index].quantity - 1);
      if (salads[index].quantity === 0) {
        const restoredQuantity = baselineSaladQuantities[salads[index].id] ?? 1;
        removedSalads = [...removedSalads, { ...salads[index], quantity: restoredQuantity }];
        customSaladIds.delete(salads[index].id);
        salads = salads.filter((_, saladIndex) => saladIndex !== index);
      }
      manualSaladPlates = salads.reduce((sum, item) => sum + item.quantity, 0);
      renderSalads();
      renderRemovedSalads();
      renderSaladMenu();
      updateGroupSet();
    });

    const quantity = document.createElement("span");
    quantity.textContent = salad.quantity;

    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    plus.setAttribute("aria-label", `${salad.name} санын көбейту`);
    plus.addEventListener("click", () => {
      customSaladIds.add(salads[index].id);
      salads[index].quantity += 1;
      manualSaladPlates = salads.reduce((sum, item) => sum + item.quantity, 0);
      renderSalads();
      updateGroupSet();
    });

    qty.append(minus, quantity, plus);

    item.append(info, qty);
    saladList.append(item);
  });
}

function renderDrinks() {
  drinkList.innerHTML = "";
  refreshCustomState(drinks, baselineDrinkQuantities, customDrinkIds);
  drinks.forEach((drink, index) => {
    const item = document.createElement("li");
    if (customDrinkIds.has(drink.id)) {
      item.classList.add("is-custom");
    }

    const info = document.createElement("div");
    info.className = "salad-info";

    const name = document.createElement("strong");
    name.textContent = drink.name;

    const price = document.createElement("span");
    price.textContent = formatTenge(drink.price || 0);

    info.append(name, price);

    const qty = document.createElement("div");
    qty.className = "salad-qty";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "-";
    minus.setAttribute("aria-label", `${drink.name} санын азайту`);
    minus.addEventListener("click", () => {
      customDrinkIds.add(drinks[index].id);
      drinks[index].quantity = Math.max(0, drinks[index].quantity - 1);
      if (drinks[index].quantity === 0) {
        const restoredQuantity = baselineDrinkQuantities[drinks[index].id] ?? 1;
        removedDrinks = [...removedDrinks, { ...drinks[index], quantity: restoredQuantity }];
        customDrinkIds.delete(drinks[index].id);
        drinks = drinks.filter((_, drinkIndex) => drinkIndex !== index);
      }
      renderDrinks();
      renderRemovedDrinks();
      renderDrinkMenu();
      updateGroupSet();
    });

    const quantity = document.createElement("span");
    quantity.textContent = drink.quantity;

    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    plus.setAttribute("aria-label", `${drink.name} санын көбейту`);
    plus.addEventListener("click", () => {
      customDrinkIds.add(drinks[index].id);
      drinks[index].quantity += 1;
      renderDrinks();
      updateGroupSet();
    });

    qty.append(minus, quantity, plus);

    item.append(info, qty);
    drinkList.append(item);
  });
}

function renderRemovedDrinks() {
  removedDrinkList.innerHTML = "";

  if (!removedDrinks.length) {
    const empty = document.createElement("li");
    empty.textContent = "Әзірге жоқ";
    removedDrinkList.append(empty);
    return;
  }

  removedDrinks.forEach((drink, index) => {
    const item = document.createElement("li");
    const label = document.createElement("span");
    label.textContent = `${drink.name} (${formatTenge(drink.price || 0)})`;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Қайта қосу";
    button.addEventListener("click", () => {
      drinks = [...drinks, drink];
      if (baselineDrinkQuantities[drink.id] === undefined || drink.quantity !== baselineDrinkQuantities[drink.id]) {
        customDrinkIds.add(drink.id);
      } else {
        customDrinkIds.delete(drink.id);
      }
      removedDrinks = removedDrinks.filter((_, drinkIndex) => drinkIndex !== index);
      renderDrinks();
      renderRemovedDrinks();
      renderDrinkMenu();
      updateGroupSet();
    });

    item.append(label, button);
    removedDrinkList.append(item);
  });
}

function renderDrinkMenu() {
  const customRemoved = removedDrinks.filter((removed) => !drinkCatalog.some((item) => item.id === removed.id));
  const options = [...drinkCatalog, ...customRemoved];

  drinkMenu.innerHTML = "";
  options.forEach((drink) => {
    const option = document.createElement("option");
    option.value = drink.id;
    option.textContent = `${drink.name} - ${formatTenge(drink.price || 0)}`;
    drinkMenu.append(option);
  });
}

function renderFoods() {
  foodList.innerHTML = "";
  refreshCustomState(foods, baselineFoodQuantities, customFoodIds);

  if (!foods.length) {
    const empty = document.createElement("li");
    empty.textContent = "Сет таңдағанда тағамдар осы жерде шығады";
    foodList.append(empty);
    return;
  }

  foods.forEach((food, index) => {
    const item = document.createElement("li");
    if (customFoodIds.has(food.id)) {
      item.classList.add("is-custom");
    }

    const info = document.createElement("div");
    info.className = "salad-info";

    const name = document.createElement("strong");
    name.textContent = food.name;

    const price = document.createElement("span");
    price.textContent = `${formatTenge(food.price || 0)} / ${food.unit || "дана"}`;

    info.append(name, price);

    const qty = document.createElement("div");
    qty.className = "salad-qty";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "-";
    minus.setAttribute("aria-label", `${food.name} санын азайту`);
    minus.addEventListener("click", () => {
      customFoodIds.add(foods[index].id);
      foods[index].quantity = Math.max(0, foods[index].quantity - 1);
      if (foods[index].quantity === 0) {
        const restoredQuantity = baselineFoodQuantities[foods[index].id] ?? 1;
        removedFoods = [...removedFoods, { ...foods[index], quantity: restoredQuantity }];
        customFoodIds.delete(foods[index].id);
        foods = foods.filter((_, foodIndex) => foodIndex !== index);
      }
      renderFoods();
      renderRemovedFoods();
      renderFoodMenu();
      updateGroupSet();
    });

    const quantity = document.createElement("span");
    quantity.textContent = `${food.quantity} ${food.unit || "дана"}`;

    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    plus.setAttribute("aria-label", `${food.name} санын көбейту`);
    plus.addEventListener("click", () => {
      customFoodIds.add(foods[index].id);
      foods[index].quantity += 1;
      renderFoods();
      updateGroupSet();
    });

    qty.append(minus, quantity, plus);
    item.append(info, qty);
    foodList.append(item);
  });
}

function renderRemovedFoods() {
  removedFoodList.innerHTML = "";

  if (!removedFoods.length) {
    const empty = document.createElement("li");
    empty.textContent = "Әзірге жоқ";
    removedFoodList.append(empty);
    return;
  }

  removedFoods.forEach((food, index) => {
    const item = document.createElement("li");
    const label = document.createElement("span");
    label.textContent = `${food.name} (${formatTenge(food.price || 0)} / ${food.unit || "дана"})`;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Қайта қосу";
    button.addEventListener("click", () => {
      foods = [...foods, food];
      if (baselineFoodQuantities[food.id] === undefined || food.quantity !== baselineFoodQuantities[food.id]) {
        customFoodIds.add(food.id);
      } else {
        customFoodIds.delete(food.id);
      }
      removedFoods = removedFoods.filter((_, foodIndex) => foodIndex !== index);
      renderFoods();
      renderRemovedFoods();
      renderFoodMenu();
      updateGroupSet();
    });

    item.append(label, button);
    removedFoodList.append(item);
  });
}

function renderFoodMenu() {
  const customRemoved = removedFoods.filter((removed) => !foodCatalog.some((item) => item.id === removed.id));
  const options = [...foodCatalog, ...customRemoved];

  foodMenu.innerHTML = "";
  options.forEach((food) => {
    const option = document.createElement("option");
    option.value = food.id;
    option.textContent = `${food.name} - ${formatTenge(food.price || 0)}`;
    foodMenu.append(option);
  });
}

function renderRemovedSalads() {
  removedSaladList.innerHTML = "";

  if (!removedSalads.length) {
    const empty = document.createElement("li");
    empty.textContent = "Әзірге жоқ";
    removedSaladList.append(empty);
    return;
  }

  removedSalads.forEach((salad, index) => {
    const item = document.createElement("li");
    const label = document.createElement("span");
    label.textContent = `${salad.name} (${formatTenge(salad.price || 0)})`;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Қайта қосу";
    button.addEventListener("click", () => {
      salads = [...salads, salad];
      if (baselineSaladQuantities[salad.id] === undefined || salad.quantity !== baselineSaladQuantities[salad.id]) {
        customSaladIds.add(salad.id);
      } else {
        customSaladIds.delete(salad.id);
      }
      removedSalads = removedSalads.filter((_, saladIndex) => saladIndex !== index);
      manualSaladPlates = salads.reduce((sum, item) => sum + item.quantity, 0);
      renderSalads();
      renderRemovedSalads();
      renderSaladMenu();
      updateGroupSet();
    });

    item.append(label, button);
    removedSaladList.append(item);
  });
}

function renderSaladMenu() {
  const customRemoved = removedSalads.filter((removed) => !saladCatalog.some((item) => item.id === removed.id));
  const options = [...saladCatalog, ...customRemoved];

  saladMenu.innerHTML = "";
  options.forEach((salad) => {
    const option = document.createElement("option");
    option.value = salad.id;
    option.textContent = `${salad.name} - ${formatTenge(salad.price || 0)}`;
    saladMenu.append(option);
  });
}

setType.addEventListener("change", () => {
  selectedOrderSet = setType.value;
  orderSetSelect.value = setType.value;
  syncCustomSelects();
  updateGroupSet();
});
orderSetSelect.addEventListener("change", () => {
  selectedOrderSet = orderSetSelect.value || null;
  if (selectedOrderSet) {
    setType.value = selectedOrderSet;
  }
  syncCustomSelects();
  updateGroupSet();
});
clientName.addEventListener("input", updateGroupSet);
clientPhoneLast.addEventListener("input", () => {
  clientPhoneLast.value = clientPhoneLast.value.replace(/\D/g, "").slice(0, 4);
  updateGroupSet();
});
orderPeople.addEventListener("input", () => {
  manualSamsaPlates = null;
  manualSaladPlates = null;
  customSaladIds.clear();
  customDrinkIds.clear();
  peopleCount.value = orderPeople.value;
  const people = clampPeople(orderPeople.value);
  syncSaladQuantity(Math.ceil(people / 2));
  syncDrinkQuantity(Math.ceil(people / 4));
  rememberBaseline(salads, baselineSaladQuantities);
  rememberBaseline(drinks, baselineDrinkQuantities);
  renderSalads();
  renderDrinks();
  updateGroupSet();
});
orderPeople.addEventListener("change", updateGroupSet);
orderDate.addEventListener("change", updateGroupSet);
orderTime.addEventListener("change", updateGroupSet);
orderVenue.addEventListener("change", updateGroupSet);
peopleCount.addEventListener("input", () => {
  manualSamsaPlates = null;
  manualSaladPlates = null;
  customSaladIds.clear();
  customDrinkIds.clear();
  const people = clampPeople(peopleCount.value);
  syncSaladQuantity(Math.ceil(people / 2));
  syncDrinkQuantity(Math.ceil(people / 4));
  rememberBaseline(salads, baselineSaladQuantities);
  rememberBaseline(drinks, baselineDrinkQuantities);
  renderSalads();
  renderDrinks();
  updateGroupSet();
});
peopleCount.addEventListener("change", updateGroupSet);

document.querySelectorAll("[data-adjust]").forEach((button) => {
  button.addEventListener("click", () => {
    const people = clampPeople(peopleCount.value);
    const type = button.dataset.adjust;
    const delta = Number.parseInt(button.dataset.delta, 10);

    if (type === "samsa") {
      const current = manualSamsaPlates ?? Math.ceil(people / 6);
      manualSamsaPlates = Math.max(1, current + delta);
    }

    if (type === "salad") {
      const current = manualSaladPlates ?? Math.ceil(people / 2);
      manualSaladPlates = Math.max(1, current + delta);
      syncSaladQuantity(manualSaladPlates);
      renderSalads();
    }

    updateGroupSet();
  });
});

saladForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedId = saladMenu.value;
  const fromRemoved = removedSalads.find((salad) => salad.id === selectedId);
  const fromCatalog = saladCatalog.find((salad) => salad.id === selectedId);
  const selectedSalad = fromRemoved || fromCatalog;
  if (!selectedSalad) return;

  const existing = salads.find((salad) => salad.id === selectedSalad.id);
  if (existing) {
    showSaladNotice("Бұл салат таңдалып қойылған");
    return;
  }

  salads = [...salads, { ...selectedSalad, quantity: selectedSalad.quantity || 1 }];
  customSaladIds.add(selectedSalad.id);
  removedSalads = removedSalads.filter((salad) => salad.id !== selectedSalad.id);
  manualSaladPlates = salads.reduce((sum, salad) => sum + salad.quantity, 0);
  renderSalads();
  renderRemovedSalads();
  renderSaladMenu();
  updateGroupSet();
});

drinkForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedId = drinkMenu.value;
  const fromRemoved = removedDrinks.find((drink) => drink.id === selectedId);
  const fromCatalog = drinkCatalog.find((drink) => drink.id === selectedId);
  const selectedDrink = fromRemoved || fromCatalog;
  if (!selectedDrink) return;

  const existing = drinks.find((drink) => drink.id === selectedDrink.id);
  if (existing) {
    showDrinkNotice("Бұл сусын таңдалып қойылған");
    return;
  }

  drinks = [...drinks, { ...selectedDrink, quantity: selectedDrink.quantity || 1 }];
  customDrinkIds.add(selectedDrink.id);
  removedDrinks = removedDrinks.filter((drink) => drink.id !== selectedDrink.id);
  renderDrinks();
  renderRemovedDrinks();
  renderDrinkMenu();
  updateGroupSet();
});

foodForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedId = foodMenu.value;
  const fromRemoved = removedFoods.find((food) => food.id === selectedId);
  const fromCatalog = foodCatalog.find((food) => food.id === selectedId);
  const selectedFood = fromRemoved || fromCatalog;
  if (!selectedFood) return;

  const existing = foods.find((food) => food.id === selectedFood.id || food.name === selectedFood.name);
  if (existing) {
    showFoodNotice("Бұл тағам таңдалып қойылған");
    return;
  }

  foods = [...foods, { ...selectedFood, quantity: selectedFood.quantity || 1 }];
  customFoodIds.add(selectedFood.id);
  removedFoods = removedFoods.filter((food) => food.id !== selectedFood.id);
  renderFoods();
  renderRemovedFoods();
  renderFoodMenu();
  updateGroupSet();
});

function showSaladNotice(message) {
  saladNotice.textContent = message;
  saladNotice.classList.add("show");
  window.clearTimeout(showSaladNotice.timer);
  showSaladNotice.timer = window.setTimeout(() => {
    saladNotice.textContent = "";
    saladNotice.classList.remove("show");
  }, 2400);
}

function showDrinkNotice(message) {
  drinkNotice.textContent = message;
  drinkNotice.classList.add("show");
  window.clearTimeout(showDrinkNotice.timer);
  showDrinkNotice.timer = window.setTimeout(() => {
    drinkNotice.textContent = "";
    drinkNotice.classList.remove("show");
  }, 2400);
}

function showFoodNotice(message) {
  foodNotice.textContent = message;
  foodNotice.classList.add("show");
  window.clearTimeout(showFoodNotice.timer);
  showFoodNotice.timer = window.setTimeout(() => {
    foodNotice.textContent = "";
    foodNotice.classList.remove("show");
  }, 2400);
}

syncSaladQuantity(Math.ceil(clampPeople(peopleCount.value) / 2));
syncDrinkQuantity(Math.ceil(clampPeople(peopleCount.value) / 4));
rememberBaseline(salads, baselineSaladQuantities);
rememberBaseline(drinks, baselineDrinkQuantities);
rememberBaseline(foods, baselineFoodQuantities);
orderPeople.value = clampPeople(peopleCount.value);
orderDate.min = getTomorrowDateValue();
[setType, orderSetSelect].forEach(enhanceSetSelect);
syncCustomSelects();
renderSalads();
renderRemovedSalads();
renderSaladMenu();
renderDrinks();
renderRemovedDrinks();
renderDrinkMenu();
renderFoods();
renderRemovedFoods();
renderFoodMenu();
updateGroupSet();
