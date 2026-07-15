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
const calcVenue = document.querySelector("#calc-venue");
const orderRentDuration = document.querySelector("#order-rent-duration");
const calcRentDuration = document.querySelector("#calc-rent-duration");
const rentDurationControls = document.querySelectorAll(".rent-duration-control");
const lodgingControls = document.querySelectorAll(".lodging-control");
const lodgingRows = document.querySelectorAll(".lodging-row");
const lodgingArrivalDate = document.querySelector("#lodging-arrival-date");
const lodgingReturnDate = document.querySelector("#lodging-return-date");
const lodgingReturnTime = document.querySelector("#lodging-return-time");
const calculatorControls = document.querySelector(".calculator-controls");
const orderDetails = document.querySelector(".order-details");
const pdfClientName = document.querySelector("#pdf-client-name");
const pdfClientPhone = document.querySelector("#pdf-client-phone");
const pdfSetName = document.querySelector("#pdf-set-name");
const pdfPeople = document.querySelector("#pdf-people");
const pdfDate = document.querySelector("#pdf-date");
const pdfTime = document.querySelector("#pdf-time");
const pdfVenue = document.querySelector("#pdf-venue");
const pdfRent = document.querySelector("#pdf-rent");
const pdfLodgingArrival = document.querySelector("#pdf-lodging-arrival");
const pdfLodgingReturnDate = document.querySelector("#pdf-lodging-return-date");
const pdfLodgingReturnTime = document.querySelector("#pdf-lodging-return-time");
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
const menuKebabList = document.querySelector("#menu-kebab-list");
const menuPlovList = document.querySelector("#menu-plov-list");
const menuMantyList = document.querySelector("#menu-manty-list");
const languageButtons = document.querySelectorAll("[data-lang]");

const supportedLanguages = ["kk"];
let currentLang = document.documentElement.lang || localStorage.getItem("mugalim-lang") || "kk";
if (!supportedLanguages.includes(currentLang)) currentLang = "kk";

const copy = {
  kk: {
    choose: "Таңдаңыз",
    missingWritten: "әлі жазылмады",
    missingSelected: "әлі таңдалмады",
    noSet: "Сет таңдаңыз",
    noChange: "өзгеріс жоқ",
    empty: "Әзірге жоқ",
    person: "адам",
    portion: "порция",
    piece: "дана",
    plate: "тарелка",
    setPack: "топтама",
    liter: "литр",
    kg: "кг",
    sht: "шт",
    perPersonOne: "адам басына 1",
    perPersonFour: "адам басына 4 дана",
    samsaRule: "1 тарелкада 6 дана",
    totalPrice: "Толық бағасы",
    rent: "Аренда",
    deleted: "өшірілді",
    removed: "алынды",
    reAdd: "Қайта қосу",
    foodsEmpty: "Сет таңдағанда тағамдар осы жерде шығады",
    saladExists: "Бұл салат таңдалып қойылған",
    drinkExists: "Бұл сусын таңдалып қойылған",
    foodExists: "Бұл тағам таңдалып қойылған",
    greeting: "Сәлеметсіз бе! Тапсырыс бергім келеді.",
    orderSheet: "Тапсырыс парағы",
    clientName: "Клиент есімі",
    phoneLast: "Телефон соңғы 4 саны",
    set: "Сет",
    peopleCount: "Адам саны",
    arrivalDate: "Келетін күні",
    arrivalTime: "Келетін сағаты",
    venue: "Отыратын орын",
    setFoods: "Сет ішіндегі тағамдар",
    addFood: "Сетке тағам қосу",
    removedFoods: "Сеттен алынған тағамдар",
    salads: "Салаттар",
    saladMenu: "Салат менюі",
    removedSalads: "Өшірілген салаттар",
    drinks: "Сусындар",
    drinkMenu: "Сусын менюі",
    removedDrinks: "Өшірілген сусындар",
    agreement: "Жоғарыдағы тапсырыстарға толықтай келісемін.",
    terrace: "9 қабат терраса",
    urbo: "1 қабат Урбо кофейня",
    noVenue: "Орынсыз",
    terraceRent: "Аренда. Терраса",
    urboRent: "Аренда. Урбо",
    noVenueRent: "Аренда. Орынсыз",
  },
  ru: {
    choose: "Выберите",
    missingWritten: "еще не заполнено",
    missingSelected: "еще не выбрано",
    noSet: "Выберите сет",
    noChange: "изменений нет",
    empty: "Пока нет",
    person: "человек",
    portion: "порция",
    piece: "шт",
    plate: "тарелка",
    setPack: "набор",
    liter: "литр",
    kg: "кг",
    sht: "шт",
    perPersonOne: "по 1 на человека",
    perPersonFour: "по 4 шт на человека",
    samsaRule: "в 1 тарелке 6 шт",
    totalPrice: "Полная стоимость",
    rent: "Аренда",
    deleted: "удалено",
    removed: "убрано",
    reAdd: "Вернуть",
    foodsEmpty: "После выбора сета блюда появятся здесь",
    saladExists: "Этот салат уже выбран",
    drinkExists: "Этот напиток уже выбран",
    foodExists: "Это блюдо уже выбрано",
    greeting: "Здравствуйте! Хочу оформить заказ.",
    orderSheet: "Лист заказа",
    clientName: "Имя клиента",
    phoneLast: "Последние 4 цифры телефона",
    set: "Сет",
    peopleCount: "Количество человек",
    arrivalDate: "Дата прихода",
    arrivalTime: "Время прихода",
    venue: "Место",
    setFoods: "Блюда внутри сета",
    addFood: "Добавить блюдо в сет",
    removedFoods: "Убранные блюда из сета",
    salads: "Салаты",
    saladMenu: "Меню салатов",
    removedSalads: "Удаленные салаты",
    drinks: "Напитки",
    drinkMenu: "Меню напитков",
    removedDrinks: "Удаленные напитки",
    agreement: "Полностью согласен/согласна с указанным выше заказом.",
    terrace: "9 этаж терраса",
    urbo: "1 этаж кофейня Урбо",
    noVenue: "Без места",
    terraceRent: "Аренда. Терраса",
    urboRent: "Аренда. Урбо",
    noVenueRent: "Аренда. Без места",
  },
  en: {
    choose: "Choose",
    missingWritten: "not filled yet",
    missingSelected: "not selected yet",
    noSet: "Choose a set",
    noChange: "no changes",
    empty: "None yet",
    person: "people",
    portion: "portion",
    piece: "pcs",
    plate: "plate",
    setPack: "set",
    liter: "liters",
    kg: "kg",
    sht: "pcs",
    perPersonOne: "1 per person",
    perPersonFour: "4 pcs per person",
    samsaRule: "6 pcs on 1 plate",
    totalPrice: "Total price",
    rent: "Rent",
    deleted: "deleted",
    removed: "removed",
    reAdd: "Add back",
    foodsEmpty: "Dishes will appear here after choosing a set",
    saladExists: "This salad is already selected",
    drinkExists: "This drink is already selected",
    foodExists: "This dish is already selected",
    greeting: "Hello! I would like to place an order.",
    orderSheet: "Order sheet",
    clientName: "Client name",
    phoneLast: "Last 4 digits of phone",
    set: "Set",
    peopleCount: "Number of people",
    arrivalDate: "Arrival date",
    arrivalTime: "Arrival time",
    venue: "Place",
    setFoods: "Dishes inside the set",
    addFood: "Add dish to set",
    removedFoods: "Removed dishes from set",
    salads: "Salads",
    saladMenu: "Salad menu",
    removedSalads: "Removed salads",
    drinks: "Drinks",
    drinkMenu: "Drink menu",
    removedDrinks: "Removed drinks",
    agreement: "I fully agree with the order above.",
    terrace: "9th floor terrace",
    urbo: "1st floor Urbo coffee shop",
    noVenue: "No seating",
    terraceRent: "Rent. Terrace",
    urboRent: "Rent. Urbo",
    noVenueRent: "Rent. No seating",
  },
  tr: {
    choose: "Seçiniz",
    missingWritten: "henüz yazılmadı",
    missingSelected: "henüz seçilmedi",
    noSet: "Set seçiniz",
    noChange: "değişiklik yok",
    empty: "Henüz yok",
    person: "kişi",
    portion: "porsiyon",
    piece: "adet",
    plate: "tabak",
    setPack: "set",
    liter: "litre",
    kg: "kg",
    sht: "adet",
    perPersonOne: "kişi başı 1",
    perPersonFour: "kişi başı 4 adet",
    samsaRule: "1 tabakta 6 adet",
    totalPrice: "Toplam tutar",
    rent: "Kira",
    deleted: "silindi",
    removed: "çıkarıldı",
    reAdd: "Geri ekle",
    foodsEmpty: "Set seçildiğinde yemekler burada görünecek",
    saladExists: "Bu salata zaten seçildi",
    drinkExists: "Bu içecek zaten seçildi",
    foodExists: "Bu yemek zaten seçildi",
    greeting: "Merhaba! Sipariş vermek istiyorum.",
    orderSheet: "Sipariş formu",
    clientName: "Müşteri adı",
    phoneLast: "Telefonun son 4 rakamı",
    set: "Set",
    peopleCount: "Kişi sayısı",
    arrivalDate: "Geliş tarihi",
    arrivalTime: "Geliş saati",
    venue: "Yer",
    setFoods: "Set içindeki yemekler",
    addFood: "Sete yemek ekle",
    removedFoods: "Setten çıkarılan yemekler",
    salads: "Salatalar",
    saladMenu: "Salata menüsü",
    removedSalads: "Silinen salatalar",
    drinks: "İçecekler",
    drinkMenu: "İçecek menüsü",
    removedDrinks: "Silinen içecekler",
    agreement: "Yukarıdaki siparişi tamamen kabul ediyorum.",
    terrace: "9. kat teras",
    urbo: "1. kat Urbo kahve",
    noVenue: "Yersiz",
    terraceRent: "Kira. Teras",
    urboRent: "Kira. Urbo",
    noVenueRent: "Kira. Yersiz",
  },
  zh: {
    choose: "请选择",
    missingWritten: "尚未填写",
    missingSelected: "尚未选择",
    noSet: "请选择套餐",
    noChange: "无更改",
    empty: "暂无",
    person: "人",
    portion: "份",
    piece: "个",
    plate: "盘",
    setPack: "组",
    liter: "升",
    kg: "公斤",
    sht: "个",
    perPersonOne: "每人 1 份",
    perPersonFour: "每人 4 个",
    samsaRule: "1 盘 6 个",
    totalPrice: "总价",
    rent: "租金",
    deleted: "已删除",
    removed: "已移除",
    reAdd: "重新添加",
    foodsEmpty: "选择套餐后菜品会显示在这里",
    saladExists: "该沙拉已选择",
    drinkExists: "该饮料已选择",
    foodExists: "该菜品已选择",
    greeting: "您好！我想下订单。",
    orderSheet: "订单表",
    clientName: "客户姓名",
    phoneLast: "电话后 4 位",
    set: "套餐",
    peopleCount: "人数",
    arrivalDate: "到店日期",
    arrivalTime: "到店时间",
    venue: "位置",
    setFoods: "套餐内菜品",
    addFood: "添加菜品到套餐",
    removedFoods: "从套餐移除的菜品",
    salads: "沙拉",
    saladMenu: "沙拉菜单",
    removedSalads: "已删除沙拉",
    drinks: "饮料",
    drinkMenu: "饮料菜单",
    removedDrinks: "已删除饮料",
    agreement: "我完全同意以上订单。",
    terrace: "9楼露台",
    urbo: "1楼 Urbo 咖啡馆",
    noVenue: "无座位",
    terraceRent: "租金. 露台",
    urboRent: "租金. Urbo",
    noVenueRent: "租金. 无座位",
  },
  ky: {
    choose: "Тандаңыз",
    missingWritten: "али жазылган жок",
    missingSelected: "али тандалган жок",
    noSet: "Сет тандаңыз",
    noChange: "өзгөрүү жок",
    empty: "Азырынча жок",
    person: "адам",
    portion: "порция",
    piece: "даана",
    plate: "тарелка",
    setPack: "топтом",
    liter: "литр",
    kg: "кг",
    sht: "даана",
    perPersonOne: "адам башына 1",
    perPersonFour: "адам башына 4 даана",
    samsaRule: "1 тарелкада 6 даана",
    totalPrice: "Толук баасы",
    rent: "Аренда",
    deleted: "өчүрүлдү",
    removed: "алынды",
    reAdd: "Кайра кошуу",
    foodsEmpty: "Сет тандалганда тамактар ушул жерде чыгат",
    saladExists: "Бул салат тандалып коюлган",
    drinkExists: "Бул суусундук тандалып коюлган",
    foodExists: "Бул тамак тандалып коюлган",
    greeting: "Саламатсызбы! Буйрутма бергим келет.",
    orderSheet: "Буйрутма барагы",
    clientName: "Кардардын аты",
    phoneLast: "Телефондун акыркы 4 саны",
    set: "Сет",
    peopleCount: "Адам саны",
    arrivalDate: "Келе турган күнү",
    arrivalTime: "Келе турган сааты",
    venue: "Отура турган жер",
    setFoods: "Сет ичиндеги тамактар",
    addFood: "Сетке тамак кошуу",
    removedFoods: "Сеттен алынган тамактар",
    salads: "Салаттар",
    saladMenu: "Салат менюсу",
    removedSalads: "Өчүрүлгөн салаттар",
    drinks: "Суусундуктар",
    drinkMenu: "Суусундук менюсу",
    removedDrinks: "Өчүрүлгөн суусундуктар",
    agreement: "Жогорудагы буйрутмаларга толук макулмун.",
    terrace: "9-кабат терраса",
    urbo: "1-кабат Урбо кофейня",
    noVenue: "Орунсуз",
    terraceRent: "Аренда. Терраса",
    urboRent: "Аренда. Урбо",
    noVenueRent: "Аренда. Орунсуз",
  },
  uz: {
    choose: "Tanlang",
    missingWritten: "hali yozilmadi",
    missingSelected: "hali tanlanmadi",
    noSet: "Set tanlang",
    noChange: "o'zgarish yo'q",
    empty: "Hozircha yo'q",
    person: "kishi",
    portion: "porsiya",
    piece: "dona",
    plate: "tarelkа",
    setPack: "to'plam",
    liter: "litr",
    kg: "kg",
    sht: "dona",
    perPersonOne: "har kishiga 1",
    perPersonFour: "har kishiga 4 dona",
    samsaRule: "1 tarelkada 6 dona",
    totalPrice: "To'liq narxi",
    rent: "Ijara",
    deleted: "o'chirildi",
    removed: "olindi",
    reAdd: "Qayta qo'shish",
    foodsEmpty: "Set tanlanganda taomlar shu yerda chiqadi",
    saladExists: "Bu salat tanlangan",
    drinkExists: "Bu ichimlik tanlangan",
    foodExists: "Bu taom tanlangan",
    greeting: "Assalomu alaykum! Buyurtma bermoqchiman.",
    orderSheet: "Buyurtma varaqasi",
    clientName: "Mijoz ismi",
    phoneLast: "Telefonning oxirgi 4 raqami",
    set: "Set",
    peopleCount: "Kishi soni",
    arrivalDate: "Keladigan kuni",
    arrivalTime: "Keladigan vaqti",
    venue: "O'tiradigan joy",
    setFoods: "Set ichidagi taomlar",
    addFood: "Setga taom qo'shish",
    removedFoods: "Setdan olingan taomlar",
    salads: "Salatlar",
    saladMenu: "Salat menyusi",
    removedSalads: "O'chirilgan salatlar",
    drinks: "Ichimliklar",
    drinkMenu: "Ichimlik menyusi",
    removedDrinks: "O'chirilgan ichimliklar",
    agreement: "Yuqoridagi buyurtmalarga to'liq roziman.",
    terrace: "9-qavat terrasa",
    urbo: "1-qavat Urbo qahvaxonasi",
    noVenue: "Joysiz",
    terraceRent: "Ijara. Terrasa",
    urboRent: "Ijara. Urbo",
    noVenueRent: "Ijara. Joysiz",
  },
};

const staticTranslations = {
  "Сеттер": "Сеты",
  "Тағамдар": "Блюда",
  "Тапсырыс": "Заказ",
  "Дайын сеттер": "Готовые сеты",
  "Қазақы дәм сеттері": "Сеты с казахским вкусом",
  "Қазан кәуап, палау және манты сеттері. Тапсырыс кемінде 1 күн алдын қабылданады.": "Сеты с казан-кебабом, пловом и мантами. Заказ принимается минимум за 1 день.",
  "Сеттерді көру": "Смотреть сеты",
  "Қоңырау шалу": "Позвонить",
  "1 күн алдын": "За 1 день",
  "тапсырыс беру уақыты": "время оформления заказа",
  "3 сет": "3 сета",
  "дайын ұсыныс": "готовые предложения",
  "3 дәм": "3 вкуса",
  "Қазан Кәуап, Палау, Манты": "Казан-кебаб, плов, манты",
  "Үш негізгі сет": "Три основных сета",
  "Барлық тапсырыс кемінде 1 күн бұрын беріледі. Бағалар теңгемен көрсетілген, адам саны тапсырыс кезінде нақтыланады.": "Все заказы принимаются минимум за 1 день. Цены указаны в тенге, количество человек уточняется при заказе.",
  "Ет тағамы": "Мясное блюдо",
  "Қазан-кебап": "Казан-кебаб",
  "Қазан-кебап негізгі тағам ретінде беріледі, қосымша ас мәзірі төменде көрсетілген.": "Казан-кебаб подается как основное блюдо, дополнительное меню указано ниже.",
  "Тапсырыс беру": "Заказать",
  "Классика": "Классика",
  "Плов порциямен ұсынылады, қосымша тағамдар мен салаттар бөлек таңдауға ыңғайлы.": "Плов подается порционно, дополнительные блюда и салаты удобно выбрать отдельно.",
  "Бу тағамы": "Блюдо на пару",
  "Манты дана бойынша есептеледі, тапсырыс көлемі адам санына қарай нақтыланады.": "Манты считаются поштучно, объем заказа уточняется по количеству человек.",
  "Сетті өзгерту": "Изменить сет",
  "Сетті өзіңізге ыңғайлы етіп өзгерту": "Измените сет под себя",
  "Адам санын, тағамды, салатты және сусынды өз қалауыңызға қарай өзгертіңіз.": "Измените количество человек, блюда, салаты и напитки по своему желанию.",
  "Сет түрі": "Тип сета",
  "Адам саны": "Количество человек",
  "Қайнатпа сорпа": "Суп кайнатпа",
  "адам басына 1": "по 1 на человека",
  "Самса": "Самса",
  "1 тарелкада 6 дана": "в 1 тарелке 6 шт",
  "Сусын": "Напитки",
  "әр 4 адамға 1 топтама, 3 литр: Coca-Cola, Fanta, Sprite": "на каждые 4 человека 1 набор, 3 литра: Coca-Cola, Fanta, Sprite",
  "Бауырсақ": "Баурсаки",
  "әр 12 адамға 1 кг": "1 кг на каждые 12 человек",
  "Салат": "Салат",
  "әр 2 адамға 1 тарелка": "1 тарелка на каждые 2 человека",
  "Сет ішіндегі тағамдар": "Блюда внутри сета",
  "Сетке тағам қосу": "Добавить блюдо в сет",
  "Таңдау": "Выбрать",
  "Сеттен алынған тағамдар": "Убранные блюда из сета",
  "Салат түрлері": "Виды салатов",
  "Салат менюі": "Меню салатов",
  "Өшірілген салаттар": "Удаленные салаты",
  "Сусын түрлері": "Виды напитков",
  "Сусын менюі": "Меню напитков",
  "Өшірілген сусындар": "Удаленные напитки",
  "Тағам атаулары": "Названия блюд",
  "Мәзірдегі сеттер": "Сеты в меню",
  "Қазан-кебап сеті": "Сет Казан-кебаб",
  "Плов сеті": "Сет Плов",
  "Манты сеті": "Сет Манты",
  "Аренда. Терраса": "Аренда. Терраса",
  "Аренда. Урбо": "Аренда. Урбо",
  "Қайнатпа сорпа (п)": "Суп кайнатпа (п)",
  "Плов (п)": "Плов (п)",
  "Манты (шт)": "Манты (шт)",
  "Самса (шт)": "Самса (шт)",
  "Нан": "Лепешка",
  "Бауырсақ 1 кг": "Баурсаки 1 кг",
  "Салат. Хрустящие баклажаны": "Салат. Хрустящие баклажаны",
  "Салат. Греческий": "Салат. Греческий",
  "Салат. Цезарь": "Салат. Цезарь",
  "Сусын (1 л)": "Напиток (1 л)",
  "Шай": "Чай",
  "Таңдалған сет": "Выбранный сет",
  "Тапсырыс кемінде 1 күн алдын қабылданады. Адам саны, жеткізу уақыты және жалпы сома WhatsApp арқылы нақтыланады.": "Заказ принимается минимум за 1 день. Количество человек, время и общая сумма уточняются через WhatsApp.",
  "WhatsApp арқылы": "Через WhatsApp",
  "Орын таңдау": "Выбор места",
  "Меню таңдаңыз": "Выберите меню",
  "Таңдауыңыз": "Ваш выбор",
  "Әлі таңдалмады": "Еще не выбрано",
  "Сет таңдаңыз": "Выберите сет",
  "Клиент есімі": "Имя клиента",
  "Атыңыз": "Ваше имя",
  "кк.аа.жжжж": "дд.мм.гггг",
  "сағ:мин": "чч:мм",
  "Телефон номерінің соңғы 4 саны": "Последние 4 цифры телефона",
  "Қай күні келеді": "Дата прихода",
  "Сағат нешеге келеді": "Время прихода",
  "Отыратын орын": "Место",
  "9 қабат терраса - аренда 20 000 ₸": "9 этаж терраса - аренда 20 000 ₸",
  "1 қабат Урбо кофейня - аренда 0 ₸": "1 этаж кофейня Урбо - аренда 0 ₸",
  "Орынсыз - аренда 0 ₸": "Без места - аренда 0 ₸",
  "WhatsApp арқылы жазу": "Написать в WhatsApp",
  "Тапсырыс парағы": "Лист заказа",
  "әлі жазылмады": "еще не заполнено",
  "әлі таңдалмады": "еще не выбрано",
  "Телефон соңғы 4 саны": "Последние 4 цифры телефона",
  "Сет": "Сет",
  "Келетін күні": "Дата прихода",
  "Келетін сағаты": "Время прихода",
  "Аренда": "Аренда",
  "Салаттар": "Салаты",
  "Сусындар": "Напитки",
  "Толық бағасы": "Полная стоимость",
  "Жоғарыдағы тапсырыстарға толықтай келісемін.": "Полностью согласен/согласна с указанным выше заказом.",
  "Тапсырыс: кемінде 1 күн алдын қабылданады": "Заказ: принимается минимум за 1 день",
  "Басты бет": "Главная",
  "Бөлімдер": "Разделы",
  "Тіл таңдау": "Выбор языка",
  "Mugalim терраса дәмханасының тағамдары": "Блюда кафе Mugalim терраса",
  "Жылдам ақпарат": "Краткая информация",
  "Самса тарелка санын өзгерту": "Изменить количество тарелок самсы",
  "Салат тарелка санын өзгерту": "Изменить количество тарелок салата",
  "Тапсырыс шарттары": "Условия заказа",
  "PDF тапсырыс нұсқасы": "PDF-версия заказа",
};

const staticTranslationsAll = {
  ru: staticTranslations,
  en: {
    "Басты бет": "Home",
    "Бөлімдер": "Sections",
    "Тіл таңдау": "Language selection",
    "Mugalim терраса дәмханасының тағамдары": "Dishes of Mugalim terrace cafe",
    "Жылдам ақпарат": "Quick information",
    "Самса тарелка санын өзгерту": "Change samsa plate count",
    "Салат тарелка санын өзгерту": "Change salad plate count",
    "Тапсырыс шарттары": "Order terms",
    "PDF тапсырыс нұсқасы": "PDF order version",
    "Сеттер": "Sets",
    "Тағамдар": "Dishes",
    "Тапсырыс": "Order",
    "Дайын сеттер": "Ready sets",
    "Қазақы дәм сеттері": "Kazakh taste sets",
    "Қазан кәуап, палау және манты сеттері. Тапсырыс кемінде 1 күн алдын қабылданады.": "Kazan-kebab, plov and manty sets. Orders are accepted at least 1 day in advance.",
    "Сеттерді көру": "View sets",
    "Қоңырау шалу": "Call",
    "1 күн алдын": "1 day ahead",
    "тапсырыс беру уақыты": "order time",
    "3 сет": "3 sets",
    "дайын ұсыныс": "ready offers",
    "3 дәм": "3 tastes",
    "Қазан Кәуап, Палау, Манты": "Kazan-kebab, plov, manty",
    "Үш негізгі сет": "Three main sets",
    "Барлық тапсырыс кемінде 1 күн бұрын беріледі. Бағалар теңгемен көрсетілген, адам саны тапсырыс кезінде нақтыланады.": "All orders are placed at least 1 day in advance. Prices are in tenge, number of people is confirmed when ordering.",
    "Ет тағамы": "Meat dish",
    "Қазан-кебап": "Kazan-kebab",
    "Қазан-кебап негізгі тағам ретінде беріледі, қосымша ас мәзірі төменде көрсетілген.": "Kazan-kebab is served as the main dish; the additional menu is shown below.",
    "Тапсырыс беру": "Order",
    "Классика": "Classic",
    "Плов порциямен ұсынылады, қосымша тағамдар мен салаттар бөлек таңдауға ыңғайлы.": "Plov is served by portion; additional dishes and salads can be selected separately.",
    "Бу тағамы": "Steamed dish",
    "Манты дана бойынша есептеледі, тапсырыс көлемі адам санына қарай нақтыланады.": "Manty is counted by piece; the order size is based on the number of people.",
    "Сетті өзгерту": "Customize set",
    "Сетті өзіңізге ыңғайлы етіп өзгерту": "Customize the set your way",
    "Адам санын, тағамды, салатты және сусынды өз қалауыңызға қарай өзгертіңіз.": "Change the number of people, dishes, salads and drinks as you like.",
    "Сет түрі": "Set type",
    "Адам саны": "Number of people",
    "Қайнатпа сорпа": "Kainatma soup",
    "адам басына 1": "1 per person",
    "Самса": "Samsa",
    "1 тарелкада 6 дана": "6 pcs on 1 plate",
    "Сусын": "Drinks",
    "әр 4 адамға 1 топтама, 3 литр: Coca-Cola, Fanta, Sprite": "1 set for every 4 people, 3 liters: Coca-Cola, Fanta, Sprite",
    "Бауырсақ": "Baursak",
    "әр 12 адамға 1 кг": "1 kg for every 12 people",
    "Салат": "Salad",
    "әр 2 адамға 1 тарелка": "1 plate for every 2 people",
    "Сет ішіндегі тағамдар": "Dishes inside the set",
    "Сетке тағам қосу": "Add dish to set",
    "Таңдау": "Choose",
    "Сеттен алынған тағамдар": "Removed dishes from set",
    "Салат түрлері": "Salad types",
    "Салат менюі": "Salad menu",
    "Өшірілген салаттар": "Removed salads",
    "Сусын түрлері": "Drink types",
    "Сусын менюі": "Drink menu",
    "Өшірілген сусындар": "Removed drinks",
    "Тағам атаулары": "Dish names",
    "Мәзірдегі сеттер": "Sets in the menu",
    "Қазан-кебап сеті": "Kazan-kebab set",
    "Плов сеті": "Plov set",
    "Манты сеті": "Manty set",
    "Аренда. Терраса": "Rent. Terrace",
    "Аренда. Урбо": "Rent. Urbo",
    "Салат. Хрустящие баклажаны": "Salad. Crispy eggplant",
    "Салат. Греческий": "Salad. Greek",
    "Салат. Цезарь": "Salad. Caesar",
    "Қайнатпа сорпа (п)": "Kainatma soup (p)",
    "Плов (п)": "Plov (p)",
    "Манты (шт)": "Manty (pcs)",
    "Самса (шт)": "Samsa (pcs)",
    "Нан": "Bread",
    "Бауырсақ 1 кг": "Baursak 1 kg",
    "Сусын (1 л)": "Drink (1 l)",
    "Шай": "Tea",
    "Таңдалған сет": "Selected set",
    "Тапсырыс кемінде 1 күн алдын қабылданады. Адам саны, жеткізу уақыты және жалпы сома WhatsApp арқылы нақтыланады.": "Orders are accepted at least 1 day in advance. People count, time and total are confirmed via WhatsApp.",
    "WhatsApp арқылы": "Via WhatsApp",
    "Орын таңдау": "Choose place",
    "Меню таңдаңыз": "Choose menu",
    "Таңдауыңыз": "Your choice",
    "Әлі таңдалмады": "Not selected yet",
    "Сет таңдаңыз": "Choose a set",
    "Клиент есімі": "Client name",
    "Атыңыз": "Your name",
    "кк.аа.жжжж": "dd.mm.yyyy",
    "сағ:мин": "hh:mm",
    "Телефон номерінің соңғы 4 саны": "Last 4 digits of phone",
    "Қай күні келеді": "Arrival date",
    "Сағат нешеге келеді": "Arrival time",
    "Отыратын орын": "Place",
    "9 қабат терраса - аренда 20 000 ₸": "9th floor terrace - rent 20 000 ₸",
    "1 қабат Урбо кофейня - аренда 0 ₸": "1st floor Urbo coffee shop - rent 0 ₸",
    "Орынсыз - аренда 0 ₸": "No seating - rent 0 ₸",
    "WhatsApp арқылы жазу": "Write via WhatsApp",
    "Тапсырыс парағы": "Order sheet",
    "әлі жазылмады": "not filled yet",
    "әлі таңдалмады": "not selected yet",
    "Телефон соңғы 4 саны": "Last 4 digits of phone",
    "Сет": "Set",
    "Келетін күні": "Arrival date",
    "Келетін сағаты": "Arrival time",
    "Аренда": "Rent",
    "Салаттар": "Salads",
    "Сусындар": "Drinks",
    "Толық бағасы": "Total price",
    "Жоғарыдағы тапсырыстарға толықтай келісемін.": "I fully agree with the order above.",
    "Тапсырыс: кемінде 1 күн алдын қабылданады": "Order: accepted at least 1 day in advance",
  },
  tr: {
    "Басты бет": "Ana sayfa",
    "Бөлімдер": "Bölümler",
    "Тіл таңдау": "Dil seçimi",
    "Mugalim терраса дәмханасының тағамдары": "Mugalim teras kafesinin yemekleri",
    "Жылдам ақпарат": "Kısa bilgi",
    "Самса тарелка санын өзгерту": "Samsa tabak sayısını değiştir",
    "Салат тарелка санын өзгерту": "Salata tabak sayısını değiştir",
    "Тапсырыс шарттары": "Sipariş şartları",
    "PDF тапсырыс нұсқасы": "PDF sipariş sürümü",
    "Сеттер": "Setler",
    "Тағамдар": "Yemekler",
    "Тапсырыс": "Sipariş",
    "Дайын сеттер": "Hazır setler",
    "Қазақы дәм сеттері": "Kazak lezzet setleri",
    "Қазан кәуап, палау және манты сеттері. Тапсырыс кемінде 1 күн алдын қабылданады.": "Kazan-kebap, pilav ve mantı setleri. Sipariş en az 1 gün önceden alınır.",
    "Сеттерді көру": "Setleri gör",
    "Қоңырау шалу": "Ara",
    "1 күн алдын": "1 gün önce",
    "тапсырыс беру уақыты": "sipariş zamanı",
    "3 сет": "3 set",
    "дайын ұсыныс": "hazır teklif",
    "3 дәм": "3 lezzet",
    "Қазан Кәуап, Палау, Манты": "Kazan-kebap, pilav, mantı",
    "Үш негізгі сет": "Üç ana set",
    "Барлық тапсырыс кемінде 1 күн бұрын беріледі. Бағалар теңгемен көрсетілген, адам саны тапсырыс кезінде нақтыланады.": "Tüm siparişler en az 1 gün önceden verilir. Fiyatlar tenge olarak belirtilmiştir, kişi sayısı siparişte netleşir.",
    "Ет тағамы": "Et yemeği",
    "Қазан-кебап": "Kazan-kebap",
    "Қазан-кебап негізгі тағам ретінде беріледі, қосымша ас мәзірі төменде көрсетілген.": "Kazan-kebap ana yemek olarak sunulur, ek menü aşağıda gösterilmiştir.",
    "Тапсырыс беру": "Sipariş ver",
    "Классика": "Klasik",
    "Плов порциямен ұсынылады, қосымша тағамдар мен салаттар бөлек таңдауға ыңғайлы.": "Pilav porsiyonla sunulur, ek yemekler ve salatalar ayrı seçilebilir.",
    "Бу тағамы": "Buharda yemek",
    "Манты дана бойынша есептеледі, тапсырыс көлемі адам санына қарай нақтыланады.": "Mantı adet olarak hesaplanır, sipariş miktarı kişi sayısına göre netleşir.",
    "Сетті өзгерту": "Seti değiştir",
    "Сетті өзіңізге ыңғайлы етіп өзгерту": "Seti kendinize göre değiştirin",
    "Адам санын, тағамды, салатты және сусынды өз қалауыңызға қарай өзгертіңіз.": "Kişi sayısını, yemekleri, salataları ve içecekleri isteğinize göre değiştirin.",
    "Сет түрі": "Set türü",
    "Адам саны": "Kişi sayısı",
    "Қайнатпа сорпа": "Kaynatma çorba",
    "Таңдау": "Seç",
    "Тағам атаулары": "Yemek adları",
    "Мәзірдегі сеттер": "Menüdeki setler",
    "Таңдалған сет": "Seçilen set",
    "Меню таңдаңыз": "Menü seçiniz",
    "Таңдауыңыз": "Seçiminiz",
    "Әлі таңдалмады": "Henüz seçilmedi",
    "Сет таңдаңыз": "Set seçiniz",
    "Клиент есімі": "Müşteri adı",
    "Атыңыз": "Adınız",
    "Телефон номерінің соңғы 4 саны": "Telefonun son 4 rakamı",
    "Қай күні келеді": "Geliş tarihi",
    "Сағат нешеге келеді": "Geliş saati",
    "Отыратын орын": "Yer",
    "WhatsApp арқылы жазу": "WhatsApp ile yaz",
    "Тапсырыс: кемінде 1 күн алдын қабылданады": "Sipariş: en az 1 gün önceden alınır",
  },
  zh: {
    "Басты бет": "首页",
    "Бөлімдер": "栏目",
    "Тіл таңдау": "语言选择",
    "Mugalim терраса дәмханасының тағамдары": "Mugalim 露台咖啡馆菜品",
    "Жылдам ақпарат": "快速信息",
    "Самса тарелка санын өзгерту": "更改萨姆萨盘数",
    "Салат тарелка санын өзгерту": "更改沙拉盘数",
    "Тапсырыс шарттары": "订单条款",
    "PDF тапсырыс нұсқасы": "PDF 订单版本",
    "Сеттер": "套餐",
    "Тағамдар": "菜品",
    "Тапсырыс": "订单",
    "Дайын сеттер": "现成套餐",
    "Қазақы дәм сеттері": "哈萨克风味套餐",
    "Қазан кәуап, палау және манты сеттері. Тапсырыс кемінде 1 күн алдын қабылданады.": "锅烤肉、抓饭和曼提套餐。订单至少提前 1 天接受。",
    "Сеттерді көру": "查看套餐",
    "Қоңырау шалу": "拨打电话",
    "1 күн алдын": "提前 1 天",
    "тапсырыс беру уақыты": "下单时间",
    "3 сет": "3 个套餐",
    "дайын ұсыныс": "现成方案",
    "3 дәм": "3 种口味",
    "Қазан Кәуап, Палау, Манты": "锅烤肉、抓饭、曼提",
    "Үш негізгі сет": "三个主套餐",
    "Ет тағамы": "肉类菜品",
    "Қазан-кебап": "锅烤肉",
    "Тапсырыс беру": "下单",
    "Классика": "经典",
    "Бу тағамы": "蒸菜",
    "Сетті өзгерту": "修改套餐",
    "Сетті өзіңізге ыңғайлы етіп өзгерту": "按您的需要调整套餐",
    "Адам санын, тағамды, салатты және сусынды өз қалауыңызға қарай өзгертіңіз.": "可按需更改人数、菜品、沙拉和饮料。",
    "Сет түрі": "套餐类型",
    "Адам саны": "人数",
    "Қайнатпа сорпа": "清汤",
    "Таңдау": "选择",
    "Тағам атаулары": "菜品名称",
    "Мәзірдегі сеттер": "菜单套餐",
    "Таңдалған сет": "已选套餐",
    "Меню таңдаңыз": "选择菜单",
    "Таңдауыңыз": "您的选择",
    "Әлі таңдалмады": "尚未选择",
    "Сет таңдаңыз": "请选择套餐",
    "Клиент есімі": "客户姓名",
    "Атыңыз": "您的姓名",
    "Телефон номерінің соңғы 4 саны": "电话后 4 位",
    "Қай күні келеді": "到店日期",
    "Сағат нешеге келеді": "到店时间",
    "Отыратын орын": "位置",
    "WhatsApp арқылы жазу": "通过 WhatsApp 联系",
    "Тапсырыс: кемінде 1 күн алдын қабылданады": "订单：至少提前 1 天接受",
  },
  ky: {
    "Басты бет": "Башкы бет",
    "Бөлімдер": "Бөлүмдөр",
    "Тіл таңдау": "Тил тандоо",
    "Mugalim терраса дәмханасының тағамдары": "Mugalim терраса кафесинин тамактары",
    "Жылдам ақпарат": "Ыкчам маалымат",
    "Самса тарелка санын өзгерту": "Самса тарелка санын өзгөртүү",
    "Салат тарелка санын өзгерту": "Салат тарелка санын өзгөртүү",
    "Тапсырыс шарттары": "Буйрутма шарттары",
    "PDF тапсырыс нұсқасы": "PDF буйрутма нускасы",
    "Сеттер": "Сеттер",
    "Тағамдар": "Тамактар",
    "Тапсырыс": "Буйрутма",
    "Дайын сеттер": "Даяр сеттер",
    "Қазақы дәм сеттері": "Казак даам сеттери",
    "Қазан кәуап, палау және манты сеттері. Тапсырыс кемінде 1 күн алдын қабылданады.": "Казан-кебап, палоо жана манты сеттери. Буйрутма кеминде 1 күн алдын кабыл алынат.",
    "Сеттерді көру": "Сеттерди көрүү",
    "Қоңырау шалу": "Чалуу",
    "1 күн алдын": "1 күн алдын",
    "тапсырыс беру уақыты": "буйрутма убактысы",
    "3 сет": "3 сет",
    "дайын ұсыныс": "даяр сунуш",
    "3 дәм": "3 даам",
    "Қазан Кәуап, Палау, Манты": "Казан-кебап, палоо, манты",
    "Үш негізгі сет": "Үч негизги сет",
    "Ет тағамы": "Эт тамагы",
    "Қазан-кебап": "Казан-кебап",
    "Тапсырыс беру": "Буйрутма берүү",
    "Классика": "Классика",
    "Бу тағамы": "Бууга бышкан тамак",
    "Сетті өзгерту": "Сетти өзгөртүү",
    "Сетті өзіңізге ыңғайлы етіп өзгерту": "Сетти өзүңүзгө ыңгайлуу кылып өзгөртүңүз",
    "Адам санын, тағамды, салатты және сусынды өз қалауыңызға қарай өзгертіңіз.": "Адам санын, тамакты, салатты жана суусундукту каалооңузга жараша өзгөртүңүз.",
    "Сет түрі": "Сет түрү",
    "Адам саны": "Адам саны",
    "Қайнатпа сорпа": "Кайнатма шорпо",
    "Таңдау": "Тандоо",
    "Тағам атаулары": "Тамак аттары",
    "Мәзірдегі сеттер": "Менюдагы сеттер",
    "Таңдалған сет": "Тандалган сет",
    "Меню таңдаңыз": "Меню тандаңыз",
    "Таңдауыңыз": "Тандооңуз",
    "Әлі таңдалмады": "Али тандалган жок",
    "Сет таңдаңыз": "Сет тандаңыз",
    "Клиент есімі": "Кардардын аты",
    "Атыңыз": "Атыңыз",
    "Телефон номерінің соңғы 4 саны": "Телефондун акыркы 4 саны",
    "Қай күні келеді": "Келе турган күнү",
    "Сағат нешеге келеді": "Келе турган сааты",
    "Отыратын орын": "Отура турган жер",
    "WhatsApp арқылы жазу": "WhatsApp аркылуу жазуу",
    "Тапсырыс: кемінде 1 күн алдын қабылданады": "Буйрутма: кеминде 1 күн алдын кабыл алынат",
  },
  uz: {
    "Басты бет": "Bosh sahifa",
    "Бөлімдер": "Bo'limlar",
    "Тіл таңдау": "Til tanlash",
    "Mugalim терраса дәмханасының тағамдары": "Mugalim terrasa qahvaxonasi taomlari",
    "Жылдам ақпарат": "Tezkor ma'lumot",
    "Самса тарелка санын өзгерту": "Somsa tarelka sonini o'zgartirish",
    "Салат тарелка санын өзгерту": "Salat tarelka sonini o'zgartirish",
    "Тапсырыс шарттары": "Buyurtma shartlari",
    "PDF тапсырыс нұсқасы": "PDF buyurtma nusxasi",
    "Сеттер": "Setlar",
    "Тағамдар": "Taomlar",
    "Тапсырыс": "Buyurtma",
    "Дайын сеттер": "Tayyor setlar",
    "Қазақы дәм сеттері": "Qozoqcha ta'm setlari",
    "Қазан кәуап, палау және манты сеттері. Тапсырыс кемінде 1 күн алдын қабылданады.": "Qozon-kabob, palov va manti setlari. Buyurtma kamida 1 kun oldin qabul qilinadi.",
    "Сеттерді көру": "Setlarni ko'rish",
    "Қоңырау шалу": "Qo'ng'iroq qilish",
    "1 күн алдын": "1 kun oldin",
    "тапсырыс беру уақыты": "buyurtma vaqti",
    "3 сет": "3 set",
    "дайын ұсыныс": "tayyor taklif",
    "3 дәм": "3 ta'm",
    "Қазан Кәуап, Палау, Манты": "Qozon-kabob, palov, manti",
    "Үш негізгі сет": "Uch asosiy set",
    "Ет тағамы": "Go'shtli taom",
    "Қазан-кебап": "Qozon-kabob",
    "Тапсырыс беру": "Buyurtma berish",
    "Классика": "Klassika",
    "Бу тағамы": "Bug'da pishgan taom",
    "Сетті өзгерту": "Setni o'zgartirish",
    "Сетті өзіңізге ыңғайлы етіп өзгерту": "Setni o'zingizga qulay qilib o'zgartiring",
    "Адам санын, тағамды, салатты және сусынды өз қалауыңызға қарай өзгертіңіз.": "Kishi soni, taomlar, salatlar va ichimliklarni xohishingizga qarab o'zgartiring.",
    "Сет түрі": "Set turi",
    "Адам саны": "Kishi soni",
    "Қайнатпа сорпа": "Qaynatma sho'rva",
    "Таңдау": "Tanlash",
    "Тағам атаулары": "Taom nomlari",
    "Мәзірдегі сеттер": "Menyudagi setlar",
    "Таңдалған сет": "Tanlangan set",
    "Меню таңдаңыз": "Menyu tanlang",
    "Таңдауыңыз": "Tanlovingiz",
    "Әлі таңдалмады": "Hali tanlanmadi",
    "Сет таңдаңыз": "Set tanlang",
    "Клиент есімі": "Mijoz ismi",
    "Атыңыз": "Ismingiz",
    "Телефон номерінің соңғы 4 саны": "Telefonning oxirgi 4 raqami",
    "Қай күні келеді": "Keladigan kuni",
    "Сағат нешеге келеді": "Keladigan vaqti",
    "Отыратын орын": "O'tiradigan joy",
    "WhatsApp арқылы жазу": "WhatsApp orqali yozish",
    "Тапсырыс: кемінде 1 күн алдын қабылданады": "Buyurtma: kamida 1 kun oldin qabul qilinadi",
  },
};

Object.assign(staticTranslationsAll.tr, {
  "Салат. Хрустящие баклажаны": "Salata. Çıtır patlıcan",
  "Салат. Греческий": "Salata. Yunan",
  "Салат. Цезарь": "Salata. Sezar",
  "Аренда. Терраса": "Kira. Teras",
  "Аренда. Урбо": "Kira. Urbo",
  "адам басына 1": "kişi başı 1",
  "Самса": "Samsa",
  "1 тарелкада 6 дана": "1 tabakta 6 adet",
  "Сусын": "İçecek",
  "әр 4 адамға 1 топтама, 3 литр: Coca-Cola, Fanta, Sprite": "her 4 kişi için 1 set, 3 litre: Coca-Cola, Fanta, Sprite",
  "Бауырсақ": "Baursak",
  "әр 12 адамға 1 кг": "her 12 kişi için 1 kg",
  "Салат": "Salata",
  "әр 2 адамға 1 тарелка": "her 2 kişi için 1 tabak",
  "Сет ішіндегі тағамдар": "Set içindeki yemekler",
  "Сетке тағам қосу": "Sete yemek ekle",
  "Сеттен алынған тағамдар": "Setten çıkarılan yemekler",
  "Салат түрлері": "Salata çeşitleri",
  "Салат менюі": "Salata menüsü",
  "Өшірілген салаттар": "Silinen salatalar",
  "Сусын түрлері": "İçecek çeşitleri",
  "Сусын менюі": "İçecek menüsü",
  "Өшірілген сусындар": "Silinen içecekler",
  "Қазан-кебап сеті": "Kazan-kebap seti",
  "Плов сеті": "Pilav seti",
  "Манты сеті": "Mantı seti",
  "Қайнатпа сорпа (п)": "Kaynatma çorba (p)",
  "Плов (п)": "Pilav (p)",
  "Манты (шт)": "Mantı (adet)",
  "Самса (шт)": "Samsa (adet)",
  "Нан": "Ekmek",
  "Бауырсақ 1 кг": "Baursak 1 kg",
  "Сусын (1 л)": "İçecek (1 l)",
  "Шай": "Çay",
  "Тапсырыс кемінде 1 күн алдын қабылданады. Адам саны, жеткізу уақыты және жалпы сома WhatsApp арқылы нақтыланады.": "Sipariş en az 1 gün önceden alınır. Kişi sayısı, zaman ve toplam tutar WhatsApp üzerinden netleşir.",
  "WhatsApp арқылы": "WhatsApp ile",
  "Орын таңдау": "Yer seçimi",
  "кк.аа.жжжж": "gg.aa.yyyy",
  "сағ:мин": "ss:dd",
  "9 қабат терраса - аренда 20 000 ₸": "9. kat teras - kira 20 000 ₸",
  "1 қабат Урбо кофейня - аренда 0 ₸": "1. kat Urbo kahve - kira 0 ₸",
  "Орынсыз - аренда 0 ₸": "Yersiz - kira 0 ₸",
  "Тапсырыс парағы": "Sipariş formu",
  "әлі жазылмады": "henüz yazılmadı",
  "әлі таңдалмады": "henüz seçilmedi",
  "Телефон соңғы 4 саны": "Telefonun son 4 rakamı",
  "Сет": "Set",
  "Келетін күні": "Geliş tarihi",
  "Келетін сағаты": "Geliş saati",
  "Аренда": "Kira",
  "Салаттар": "Salatalar",
  "Сусындар": "İçecekler",
  "Толық бағасы": "Toplam tutar",
  "Жоғарыдағы тапсырыстарға толықтай келісемін.": "Yukarıdaki siparişi tamamen kabul ediyorum.",
});

Object.assign(staticTranslationsAll.zh, {
  "Салат. Хрустящие баклажаны": "沙拉. 脆茄子",
  "Салат. Греческий": "沙拉. 希腊沙拉",
  "Салат. Цезарь": "沙拉. 凯撒",
  "Аренда. Терраса": "租金. 露台",
  "Аренда. Урбо": "租金. Urbo",
  "адам басына 1": "每人 1 份",
  "Самса": "萨姆萨",
  "1 тарелкада 6 дана": "1 盘 6 个",
  "Сусын": "饮料",
  "әр 4 адамға 1 топтама, 3 литр: Coca-Cola, Fanta, Sprite": "每 4 人 1 组，3 升：Coca-Cola、Fanta、Sprite",
  "Бауырсақ": "包尔萨克",
  "әр 12 адамға 1 кг": "每 12 人 1 公斤",
  "Салат": "沙拉",
  "әр 2 адамға 1 тарелка": "每 2 人 1 盘",
  "Сет ішіндегі тағамдар": "套餐内菜品",
  "Сетке тағам қосу": "添加菜品到套餐",
  "Сеттен алынған тағамдар": "从套餐移除的菜品",
  "Салат түрлері": "沙拉种类",
  "Салат менюі": "沙拉菜单",
  "Өшірілген салаттар": "已删除沙拉",
  "Сусын түрлері": "饮料种类",
  "Сусын менюі": "饮料菜单",
  "Өшірілген сусындар": "已删除饮料",
  "Қазан-кебап сеті": "锅烤肉套餐",
  "Плов сеті": "抓饭套餐",
  "Манты сеті": "曼提套餐",
  "Қайнатпа сорпа (п)": "清汤 (份)",
  "Плов (п)": "抓饭 (份)",
  "Манты (шт)": "曼提 (个)",
  "Самса (шт)": "萨姆萨 (个)",
  "Нан": "面饼",
  "Бауырсақ 1 кг": "包尔萨克 1公斤",
  "Сусын (1 л)": "饮料 (1升)",
  "Шай": "茶",
  "Тапсырыс кемінде 1 күн алдын қабылданады. Адам саны, жеткізу уақыты және жалпы сома WhatsApp арқылы нақтыланады.": "订单至少提前 1 天接受。人数、时间和总金额通过 WhatsApp 确认。",
  "WhatsApp арқылы": "通过 WhatsApp",
  "Орын таңдау": "选择位置",
  "кк.аа.жжжж": "日.月.年",
  "сағ:мин": "时:分",
  "9 қабат терраса - аренда 20 000 ₸": "9楼露台 - 租金 20 000 ₸",
  "1 қабат Урбо кофейня - аренда 0 ₸": "1楼 Urbo 咖啡馆 - 租金 0 ₸",
  "Орынсыз - аренда 0 ₸": "无座位 - 租金 0 ₸",
  "Тапсырыс парағы": "订单表",
  "әлі жазылмады": "尚未填写",
  "әлі таңдалмады": "尚未选择",
  "Телефон соңғы 4 саны": "电话后 4 位",
  "Сет": "套餐",
  "Келетін күні": "到店日期",
  "Келетін сағаты": "到店时间",
  "Аренда": "租金",
  "Салаттар": "沙拉",
  "Сусындар": "饮料",
  "Толық бағасы": "总价",
  "Жоғарыдағы тапсырыстарға толықтай келісемін.": "我完全同意以上订单。",
});

Object.assign(staticTranslationsAll.ky, {
  "Салат. Хрустящие баклажаны": "Салат. Кытырак баклажан",
  "Салат. Греческий": "Салат. Грек",
  "Салат. Цезарь": "Салат. Цезарь",
  "Аренда. Терраса": "Аренда. Терраса",
  "Аренда. Урбо": "Аренда. Урбо",
  "адам басына 1": "адам башына 1",
  "Самса": "Самса",
  "1 тарелкада 6 дана": "1 тарелкада 6 даана",
  "Сусын": "Суусундук",
  "әр 4 адамға 1 топтама, 3 литр: Coca-Cola, Fanta, Sprite": "ар 4 адамга 1 топтом, 3 литр: Coca-Cola, Fanta, Sprite",
  "Бауырсақ": "Боорсок",
  "әр 12 адамға 1 кг": "ар 12 адамга 1 кг",
  "Салат": "Салат",
  "әр 2 адамға 1 тарелка": "ар 2 адамга 1 тарелка",
  "Сет ішіндегі тағамдар": "Сет ичиндеги тамактар",
  "Сетке тағам қосу": "Сетке тамак кошуу",
  "Сеттен алынған тағамдар": "Сеттен алынган тамактар",
  "Салат түрлері": "Салат түрлөрү",
  "Салат менюі": "Салат менюсу",
  "Өшірілген салаттар": "Өчүрүлгөн салаттар",
  "Сусын түрлері": "Суусундук түрлөрү",
  "Сусын менюі": "Суусундук менюсу",
  "Өшірілген сусындар": "Өчүрүлгөн суусундуктар",
  "Қайнатпа сорпа (п)": "Кайнатма шорпо (п)",
  "Плов (п)": "Палоо (п)",
  "Манты (шт)": "Манты (даана)",
  "Самса (шт)": "Самса (даана)",
  "Нан": "Нан",
  "Бауырсақ 1 кг": "Боорсок 1 кг",
  "Сусын (1 л)": "Суусундук (1 л)",
  "Шай": "Чай",
  "Тапсырыс кемінде 1 күн алдын қабылданады. Адам саны, жеткізу уақыты және жалпы сома WhatsApp арқылы нақтыланады.": "Буйрутма кеминде 1 күн алдын кабыл алынат. Адам саны, убакыт жана жалпы сумма WhatsApp аркылуу такталат.",
  "WhatsApp арқылы": "WhatsApp аркылуу",
  "Орын таңдау": "Жер тандоо",
  "кк.аа.жжжж": "кк.аа.жжжж",
  "сағ:мин": "саат:мүн",
  "9 қабат терраса - аренда 20 000 ₸": "9-кабат терраса - аренда 20 000 ₸",
  "1 қабат Урбо кофейня - аренда 0 ₸": "1-кабат Урбо кофейня - аренда 0 ₸",
  "Орынсыз - аренда 0 ₸": "Орунсуз - аренда 0 ₸",
  "Тапсырыс парағы": "Буйрутма барагы",
  "әлі жазылмады": "али жазылган жок",
  "әлі таңдалмады": "али тандалган жок",
  "Телефон соңғы 4 саны": "Телефондун акыркы 4 саны",
  "Келетін күні": "Келе турган күнү",
  "Келетін сағаты": "Келе турган сааты",
  "Аренда": "Аренда",
  "Салаттар": "Салаттар",
  "Сусындар": "Суусундуктар",
  "Толық бағасы": "Толук баасы",
  "Жоғарыдағы тапсырыстарға толықтай келісемін.": "Жогорудагы буйрутмаларга толук макулмун.",
});

Object.assign(staticTranslationsAll.uz, {
  "Салат. Хрустящие баклажаны": "Salat. Qarsildoq baqlajon",
  "Салат. Греческий": "Salat. Grekcha",
  "Салат. Цезарь": "Salat. Sezar",
  "Аренда. Терраса": "Ijara. Terrasa",
  "Аренда. Урбо": "Ijara. Urbo",
  "адам басына 1": "har kishiga 1",
  "Самса": "Somsa",
  "1 тарелкада 6 дана": "1 tarelkada 6 dona",
  "Сусын": "Ichimlik",
  "әр 4 адамға 1 топтама, 3 литр: Coca-Cola, Fanta, Sprite": "har 4 kishiga 1 to'plam, 3 litr: Coca-Cola, Fanta, Sprite",
  "Бауырсақ": "Bo'g'irsoq",
  "әр 12 адамға 1 кг": "har 12 kishiga 1 kg",
  "Салат": "Salat",
  "әр 2 адамға 1 тарелка": "har 2 kishiga 1 tarelka",
  "Сет ішіндегі тағамдар": "Set ichidagi taomlar",
  "Сетке тағам қосу": "Setga taom qo'shish",
  "Сеттен алынған тағамдар": "Setdan olingan taomlar",
  "Салат түрлері": "Salat turlari",
  "Салат менюі": "Salat menyusi",
  "Өшірілген салаттар": "O'chirilgan salatlar",
  "Сусын түрлері": "Ichimlik turlari",
  "Сусын менюі": "Ichimlik menyusi",
  "Өшірілген сусындар": "O'chirilgan ichimliklar",
  "Қайнатпа сорпа (п)": "Qaynatma sho'rva (p)",
  "Плов (п)": "Palov (p)",
  "Манты (шт)": "Manti (dona)",
  "Самса (шт)": "Somsa (dona)",
  "Нан": "Non",
  "Бауырсақ 1 кг": "Bo'g'irsoq 1 kg",
  "Сусын (1 л)": "Ichimlik (1 l)",
  "Шай": "Choy",
  "Тапсырыс кемінде 1 күн алдын қабылданады. Адам саны, жеткізу уақыты және жалпы сома WhatsApp арқылы нақтыланады.": "Buyurtma kamida 1 kun oldin qabul qilinadi. Kishi soni, vaqt va umumiy summa WhatsApp orqali aniqlanadi.",
  "WhatsApp арқылы": "WhatsApp orqali",
  "Орын таңдау": "Joy tanlash",
  "кк.аа.жжжж": "kk.oo.yyyy",
  "сағ:мин": "ss:dd",
  "9 қабат терраса - аренда 20 000 ₸": "9-qavat terrasa - ijara 20 000 ₸",
  "1 қабат Урбо кофейня - аренда 0 ₸": "1-qavat Urbo qahvaxonasi - ijara 0 ₸",
  "Орынсыз - аренда 0 ₸": "Joysiz - ijara 0 ₸",
  "Тапсырыс парағы": "Buyurtma varaqasi",
  "әлі жазылмады": "hali yozilmadi",
  "әлі таңдалмады": "hali tanlanmadi",
  "Телефон соңғы 4 саны": "Telefonning oxirgi 4 raqami",
  "Келетін күні": "Keladigan kuni",
  "Келетін сағаты": "Keladigan vaqti",
  "Аренда": "Ijara",
  "Салаттар": "Salatlar",
  "Сусындар": "Ichimliklar",
  "Толық бағасы": "To'liq narxi",
  "Жоғарыдағы тапсырыстарға толықтай келісемін.": "Yuqoridagi buyurtmalarga to'liq roziman.",
});

Object.assign(staticTranslationsAll.ru, {
  "8 қабат": "8 этаж",
  "Аренда. 8 қабат": "Аренда. 8 этаж",
  "8 қабат аренда уақыты": "Время аренды 8 этажа",
  "1 сағат - 20 000 ₸": "1 час - 20 000 ₸",
  "2 сағат - 30 000 ₸": "2 часа - 30 000 ₸",
  "3 сағат - 40 000 ₸": "3 часа - 40 000 ₸",
  "Безлимит - 50 000 ₸": "Безлимит - 50 000 ₸",
  "Қону": "Проживание",
  "Қонуға қай күні келеді": "Дата заезда",
  "Қай күні қайтады": "Дата выезда",
  "Қай сағатта қайтады": "Время выезда",
});

Object.assign(staticTranslationsAll.en, {
  "8 қабат": "8th floor",
  "Аренда. 8 қабат": "Rent. 8th floor",
  "8 қабат аренда уақыты": "8th floor rental time",
  "1 сағат - 20 000 ₸": "1 hour - 20 000 ₸",
  "2 сағат - 30 000 ₸": "2 hours - 30 000 ₸",
  "3 сағат - 40 000 ₸": "3 hours - 40 000 ₸",
  "Безлимит - 50 000 ₸": "Unlimited - 50 000 ₸",
  "Қону": "Stay",
  "Қонуға қай күні келеді": "Stay arrival date",
  "Қай күні қайтады": "Return date",
  "Қай сағатта қайтады": "Return time",
});

Object.assign(staticTranslationsAll.uz, {
  "8 қабат": "8-qavat",
  "Аренда. 8 қабат": "Ijara. 8-qavat",
  "8 қабат аренда уақыты": "8-qavat ijara vaqti",
  "1 сағат - 20 000 ₸": "1 soat - 20 000 ₸",
  "2 сағат - 30 000 ₸": "2 soat - 30 000 ₸",
  "3 сағат - 40 000 ₸": "3 soat - 40 000 ₸",
  "Безлимит - 50 000 ₸": "Cheksiz - 50 000 ₸",
  "Қону": "Tunash",
  "Қонуға қай күні келеді": "Tunashga keladigan kuni",
  "Қай күні қайтады": "Qaytadigan kuni",
  "Қай сағатта қайтады": "Qaytadigan vaqti",
});

Object.assign(staticTranslationsAll.tr, {
  "8 қабат": "8. kat",
  "Аренда. 8 қабат": "Kira. 8. kat",
  "8 қабат аренда уақыты": "8. kat kira süresi",
  "1 сағат - 20 000 ₸": "1 saat - 20 000 ₸",
  "2 сағат - 30 000 ₸": "2 saat - 30 000 ₸",
  "3 сағат - 40 000 ₸": "3 saat - 40 000 ₸",
  "Безлимит - 50 000 ₸": "Limitsiz - 50 000 ₸",
  "Қону": "Konaklama",
  "Қонуға қай күні келеді": "Konaklama geliş tarihi",
  "Қай күні қайтады": "Çıkış tarihi",
  "Қай сағатта қайтады": "Çıkış saati",
});

Object.assign(staticTranslationsAll.zh, {
  "8 қабат": "8楼",
  "Аренда. 8 қабат": "租金. 8楼",
  "8 қабат аренда уақыты": "8楼租赁时间",
  "1 сағат - 20 000 ₸": "1小时 - 20 000 ₸",
  "2 сағат - 30 000 ₸": "2小时 - 30 000 ₸",
  "3 сағат - 40 000 ₸": "3小时 - 40 000 ₸",
  "Безлимит - 50 000 ₸": "不限时 - 50 000 ₸",
  "Қону": "住宿",
  "Қонуға қай күні келеді": "入住日期",
  "Қай күні қайтады": "离店日期",
  "Қай сағатта қайтады": "离店时间",
});

Object.assign(staticTranslationsAll.ky, {
  "8 қабат": "8-кабат",
  "Аренда. 8 қабат": "Аренда. 8-кабат",
  "8 қабат аренда уақыты": "8-кабат аренда убактысы",
  "1 сағат - 20 000 ₸": "1 саат - 20 000 ₸",
  "2 сағат - 30 000 ₸": "2 саат - 30 000 ₸",
  "3 сағат - 40 000 ₸": "3 саат - 40 000 ₸",
  "Безлимит - 50 000 ₸": "Чексиз - 50 000 ₸",
  "Қону": "Конуу",
  "Қонуға қай күні келеді": "Конууга келе турган күнү",
  "Қай күні қайтады": "Кайта турган күнү",
  "Қай сағатта қайтады": "Кайта турган сааты",
});

const reverseStaticTranslations = Object.fromEntries(
  Object.values(staticTranslationsAll).flatMap((items) => Object.entries(items).map(([kk, translated]) => [translated, kk])),
);

function c(key) {
  return copy[currentLang][key];
}

const nameTranslations = {
  "Қазан-кебап": "Казан-кебаб",
  "Қайнатпа сорпа": "Суп кайнатпа",
  "Манты шт": "Манты шт",
  "Бауырсақ 1 кг": "Баурсаки 1 кг",
  "Нан": "Лепешка",
  "Coca-Cola шиша": "Coca-Cola стекло",
  "Fanta шиша": "Fanta стекло",
  "Sprite шиша": "Sprite стекло",
};

const nameTranslationsAll = {
  ru: nameTranslations,
  en: {
    "Қазан-кебап": "Kazan-kebab",
    "Қайнатпа сорпа": "Kainatma soup",
    "Манты шт": "Manty pcs",
    "Бауырсақ 1 кг": "Baursak 1 kg",
    "Нан": "Bread",
    "Coca-Cola пластик 1 л": "Coca-Cola plastic 1 l",
    "Fanta пластик 1 л": "Fanta plastic 1 l",
    "Sprite пластик 1 л": "Sprite plastic 1 l",
    "Coca-Cola шиша": "Coca-Cola glass",
    "Fanta шиша": "Fanta glass",
    "Sprite шиша": "Sprite glass",
  },
  tr: {
    "Қазан-кебап": "Kazan-kebap",
    "Қайнатпа сорпа": "Kaynatma çorba",
    "Манты шт": "Mantı adet",
    "Бауырсақ 1 кг": "Baursak 1 kg",
    "Нан": "Ekmek",
    "Coca-Cola пластик 1 л": "Coca-Cola plastik 1 l",
    "Fanta пластик 1 л": "Fanta plastik 1 l",
    "Sprite пластик 1 л": "Sprite plastik 1 l",
    "Coca-Cola шиша": "Coca-Cola cam",
    "Fanta шиша": "Fanta cam",
    "Sprite шиша": "Sprite cam",
  },
  zh: {
    "Қазан-кебап": "锅烤肉",
    "Қайнатпа сорпа": "清汤",
    "Манты шт": "曼提 个",
    "Бауырсақ 1 кг": "包尔萨克 1公斤",
    "Нан": "面饼",
    "Coca-Cola пластик 1 л": "Coca-Cola 塑料瓶 1升",
    "Fanta пластик 1 л": "Fanta 塑料瓶 1升",
    "Sprite пластик 1 л": "Sprite 塑料瓶 1升",
    "Coca-Cola шиша": "Coca-Cola 玻璃瓶",
    "Fanta шиша": "Fanta 玻璃瓶",
    "Sprite шиша": "Sprite 玻璃瓶",
  },
  ky: {
    "Қазан-кебап": "Казан-кебап",
    "Қайнатпа сорпа": "Кайнатма шорпо",
    "Манты шт": "Манты даана",
    "Бауырсақ 1 кг": "Боорсок 1 кг",
    "Нан": "Нан",
    "Coca-Cola пластик 1 л": "Coca-Cola пластик 1 л",
    "Fanta пластик 1 л": "Fanta пластик 1 л",
    "Sprite пластик 1 л": "Sprite пластик 1 л",
    "Coca-Cola шиша": "Coca-Cola шиша",
    "Fanta шиша": "Fanta шиша",
    "Sprite шиша": "Sprite шиша",
  },
  uz: {
    "Қазан-кебап": "Qozon-kabob",
    "Қайнатпа сорпа": "Qaynatma sho'rva",
    "Манты шт": "Manti dona",
    "Бауырсақ 1 кг": "Bo'g'irsoq 1 kg",
    "Нан": "Non",
    "Coca-Cola пластик 1 л": "Coca-Cola plastik 1 l",
    "Fanta пластик 1 л": "Fanta plastik 1 l",
    "Sprite пластик 1 л": "Sprite plastik 1 l",
    "Coca-Cola шиша": "Coca-Cola shisha",
    "Fanta шиша": "Fanta shisha",
    "Sprite шиша": "Sprite shisha",
  },
};

const reverseNameTranslations = Object.fromEntries(
  Object.values(nameTranslationsAll).flatMap((items) => Object.entries(items).map(([kk, translated]) => [translated, kk])),
);

function translateText(text) {
  const kkText = reverseStaticTranslations[text] || reverseNameTranslations[text] || text;
  if (currentLang === "kk") return kkText;
  return staticTranslationsAll[currentLang]?.[kkText] || nameTranslationsAll[currentLang]?.[kkText] || kkText;
}

function displayName(name) {
  const kkName = reverseNameTranslations[name] || name;
  if (currentLang === "kk") return kkName;
  return nameTranslationsAll[currentLang]?.[kkName] || kkName;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("mugalim-lang", lang);
  applyLanguage();
  renderFoods();
  renderRemovedFoods();
  renderFoodMenu();
  renderSalads();
  renderRemovedSalads();
  renderSaladMenu();
  renderDrinks();
  renderRemovedDrinks();
  renderDrinkMenu();
  updateGroupSet();
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  languageButtons.forEach((button) => {
    const active = button.dataset.lang === currentLang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active.toString());
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const value = node.nodeValue;
    const trimmed = value.trim();
    if (!trimmed) return;
    const translated = translateText(trimmed);
    if (translated !== trimmed) {
      node.nodeValue = value.replace(trimmed, translated);
    }
  });

  document.querySelectorAll("[placeholder], [aria-label], [alt]").forEach((element) => {
    ["placeholder", "aria-label", "alt"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (!value) return;
      const translated = translateText(value);
      if (translated !== value) element.setAttribute(attribute, translated);
    });
  });
}

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
  { id: "cola-plastic", name: "Coca-Cola пластик 1 л", price: 1000 },
  { id: "fanta-plastic", name: "Fanta пластик 1 л", price: 1000 },
  { id: "sprite-plastic", name: "Sprite пластик 1 л", price: 1000 },
  { id: "cola-glass", name: "Coca-Cola шиша", price: 1000 },
  { id: "fanta-glass", name: "Fanta шиша", price: 1000 },
  { id: "sprite-glass", name: "Sprite шиша", price: 1000 },
];
let drinks = [
  { id: "cola-plastic", name: "Coca-Cola пластик 1 л", price: 1000, quantity: 1 },
  { id: "fanta-plastic", name: "Fanta пластик 1 л", price: 1000, quantity: 1 },
  { id: "sprite-plastic", name: "Sprite пластик 1 л", price: 1000, quantity: 1 },
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
  nan: 400,
  drinkBottle: 1000,
  baursakKg: 1200,
  terraceRent: 20000,
  urboRent: 0,
  floor8Rent: {
    "1": 20000,
    "2": 30000,
    "3": 40000,
    unlimited: 50000,
  },
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
    button.textContent = selectedOption ? selectedOption.textContent : c("choose");

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
  if (orderVenue.value === "none") {
    return {
      name: c("noVenue"),
      rent: 0,
      type: "none",
    };
  }

  if (orderVenue.value === "urbo") {
    return {
      name: c("urbo"),
      rent: prices.urboRent,
      type: "urbo",
    };
  }

  if (orderVenue.value === "floor8") {
    const duration = orderRentDuration?.value || "1";
    return {
      name: `${translateText("8 қабат")} (${getRentDurationLabel(duration)})`,
      rent: prices.floor8Rent[duration] || prices.floor8Rent["1"],
      type: "floor8",
      duration,
    };
  }

  return {
    name: c("terrace"),
    rent: prices.terraceRent,
    type: "terrace",
  };
}

function getRentDurationLabel(value) {
  const labels = {
    kk: { "1": "1 сағат", "2": "2 сағат", "3": "3 сағат", unlimited: "Безлимит" },
    ru: { "1": "1 час", "2": "2 часа", "3": "3 часа", unlimited: "Безлимит" },
    en: { "1": "1 hour", "2": "2 hours", "3": "3 hours", unlimited: "Unlimited" },
    uz: { "1": "1 soat", "2": "2 soat", "3": "3 soat", unlimited: "Cheksiz" },
    tr: { "1": "1 saat", "2": "2 saat", "3": "3 saat", unlimited: "Limitsiz" },
    zh: { "1": "1小时", "2": "2小时", "3": "3小时", unlimited: "不限时" },
    ky: { "1": "1 саат", "2": "2 саат", "3": "3 саат", unlimited: "Чексиз" },
  };

  return labels[currentLang]?.[value] || labels.kk[value] || labels.kk["1"];
}

function getRentLabel(venue) {
  if (venue.type === "terrace") return c("terraceRent");
  if (venue.type === "urbo") return c("urboRent");
  if (venue.type === "floor8") return translateText("Аренда. 8 қабат");
  return c("noVenueRent");
}

function getLodgingDetails(venue = getVenueDetails()) {
  const enabled = venue.type === "floor8";
  return {
    enabled,
    arrivalDate: enabled && lodgingArrivalDate?.value ? lodgingArrivalDate.value : c("missingSelected"),
    returnDate: enabled && lodgingReturnDate?.value ? lodgingReturnDate.value : c("missingSelected"),
    returnTime: enabled && lodgingReturnTime?.value ? lodgingReturnTime.value : c("missingSelected"),
  };
}

function updateRentDurationVisibility() {
  const show = orderVenue.value === "floor8" || calcVenue.value === "floor8";
  rentDurationControls.forEach((control) => {
    control.classList.toggle("is-hidden", !show);
  });
  lodgingControls.forEach((control) => {
    control.classList.toggle("is-hidden", !show);
  });
  lodgingRows.forEach((row) => {
    row.classList.toggle("is-hidden", !show);
  });
  calculatorControls?.classList.toggle("rent-duration-visible", show);
  orderDetails?.classList.toggle("rent-duration-visible", show);
  orderDetails?.classList.toggle("lodging-visible", show);
}

function getTomorrowDateValue() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().slice(0, 10);
}

function formatDateInput(value) {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}.${digits.slice(2)}`;
  return `${digits.slice(0, 2)}.${digits.slice(2, 4)}.${digits.slice(4)}`;
}

function formatTimeInput(value) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}:${digits.slice(2)}`;
}

function updateGroupSet() {
  updateRentDurationVisibility();
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
  const nanPieces = Math.ceil(people / 6);
  const baursakKg = Math.ceil(people / 12);
  const saladPlates = Math.ceil(people / 2);
  const actualSaladPlates = manualSaladPlates ?? saladPlates;
  const setRules = {
    kebab: {
      name: displayName("Қазан-кебап"),
      amount: `${people} ${c("portion")}`,
      rule: c("perPersonOne"),
    },
    plov: {
      name: "Плов",
      amount: `${people} ${c("portion")}`,
      rule: c("perPersonOne"),
    },
    manty: {
      name: "Манты",
      amount: `${people * 4} ${c("piece")}`,
      rule: c("perPersonFour"),
    },
  };
  const main = setRules[selectedSet];
  syncBaseFoods({ selectedSet, people, samsaPieces, nanPieces, baursakKg });
  const totals = calculateTotals({
    people,
    samsaPieces,
    nanPieces,
    drinkSets,
    baursakKg,
    saladPlates: actualSaladPlates,
  });

  calcSoup.textContent = `${people} ${c("portion")}`;
  calcMainName.textContent = main.name;
  calcMain.textContent = main.amount;
  calcMainRule.textContent = main.rule;
  calcSamsa.textContent = `${actualSamsaPlates} ${c("plate")} / ${samsaPieces} ${c("piece")}`;
  calcDrinks.textContent = `${drinkSets} ${c("setPack")} / ${drinkLiters} ${c("liter")}`;
  calcBaursak.textContent = `${baursakKg} ${c("kg")}`;
  calcSalad.textContent = `${actualSaladPlates} ${c("plate")}`;
  totalKebab.textContent = formatTenge(totals.kebab);
  totalPlov.textContent = formatTenge(totals.plov);
  totalManty.textContent = formatTenge(totals.manty);
  menuKebabSummary.textContent = `${people} ${c("person")} · ${formatTenge(totals.kebab)}`;
  menuPlovSummary.textContent = `${people} ${c("person")} · ${formatTenge(totals.plov)}`;
  menuMantySummary.textContent = `${people} ${c("person")} · ${formatTenge(totals.manty)}`;
  updateRentRows();
  renderMenuSetLists({ people, baursakKg });
  updateOrderBox({ people, totals });
}

function updateOrderBox({ people, totals }) {
  const nameText = clientName.value.trim() ? clientName.value.trim() : c("missingWritten");
  const phoneText = clientPhoneLast.value.trim() ? clientPhoneLast.value.trim() : c("missingWritten");
  const dateText = orderDate.value ? orderDate.value : c("missingSelected");
  const timeText = orderTime.value ? orderTime.value : c("missingSelected");
  const venue = getVenueDetails();
  const lodging = getLodgingDetails(venue);
  const rentText = formatTenge(venue.rent);

  if (!selectedOrderSet) {
    const message = encodeURIComponent(buildWhatsAppOrderText({
      nameText,
      phoneText,
      setText: c("missingSelected"),
      people,
      dateText,
      timeText,
      venue,
      lodging,
      rentText,
      totalText: "0 ₸",
    }));

    chosenName.textContent = c("missingSelected").replace(/^./, (letter) => letter.toUpperCase());
    chosenPrice.textContent = c("noSet");
    whatsappLink.href = `https://wa.me/77787783636?text=${message}`;
    updatePdfSummary({
      nameText,
      phoneText,
      setText: c("missingSelected"),
      people,
      dateText,
      timeText,
      venue,
      lodging,
      rentText,
      totalText: "0 ₸",
    });
    return;
  }

  const setNames = {
    kebab: displayName("Қазан-кебап"),
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
    lodging,
    rentText,
    totalText: total,
  }));

  chosenName.textContent = setNames[selectedOrderSet];
  chosenPrice.textContent = `${c("totalPrice")}: ${total} · ${c("rent")}: ${rentText}`;
  whatsappLink.href = `https://wa.me/77787783636?text=${message}`;
  updatePdfSummary({
    nameText,
    phoneText,
    setText: setNames[selectedOrderSet],
    people,
    dateText,
    timeText,
    venue,
    lodging,
    rentText,
    totalText: total,
  });
}

function formatTenge(value) {
  return `${String(Math.round(value)).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₸`;
}

function formatCollectionForPdf(collection, defaultUnit = c("piece")) {
  if (!collection.length) return "-";
  return collection
    .map((item) => `${displayName(item.name)}: ${item.quantity} ${translateText(item.unit || defaultUnit)}`)
    .join("\n");
}

function formatChangedCollectionForPdf(collection, baseline, defaultUnit = c("piece")) {
  const changed = collection.filter((item) => baseline[item.id] === undefined || item.quantity !== baseline[item.id]);
  if (!changed.length) return c("noChange");

  return changed
    .map((item) => {
      const unit = translateText(item.unit || defaultUnit);
      const baseQuantity = baseline[item.id];
      if (baseQuantity === undefined) return `${displayName(item.name)}: ${item.quantity} ${unit}`;
      const diff = item.quantity - baseQuantity;
      const sign = diff > 0 ? "+" : "";
      return `${displayName(item.name)}: ${item.quantity} ${unit} (${sign}${diff})`;
    })
    .join("\n");
}

function formatRemovedCollectionForPdf(collection, defaultUnit = c("piece")) {
  if (!collection.length) return c("noChange");
  return collection.map((item) => `${displayName(item.name)}: ${c("deleted")}`).join("\n");
}

function formatWhatsAppValue(value) {
  return isMissingValue(value) ? `_*${value}*_` : value;
}

function isMissingValue(value) {
  return [
    "әлі ",
    "еще ",
    "not ",
    "henüz ",
    "尚",
    "ali ",
    "али ",
    "hali ",
  ].some((prefix) => value.startsWith(prefix));
}

function buildWhatsAppOrderText({ nameText, phoneText, setText, people, dateText, timeText, venue, lodging, rentText, totalText }) {
  const section = (title, value) => `${title}:\n${value}`;
  const lodgingLines = lodging?.enabled
    ? [
        "",
        "қону",
        `${translateText("Қонуға қай күні келеді")}: ${formatWhatsAppValue(lodging.arrivalDate)}`,
        `${translateText("Қай күні қайтады")}: ${formatWhatsAppValue(lodging.returnDate)}`,
        `${translateText("Қай сағатта қайтады")}: ${formatWhatsAppValue(lodging.returnTime)}`,
      ]
    : [];

  return [
    c("greeting"),
    "",
    "Mugalim терраса дәмханасы",
    c("orderSheet"),
    "",
    `${c("clientName")}: ${formatWhatsAppValue(nameText)}`,
    `${c("phoneLast")}: ${formatWhatsAppValue(phoneText)}`,
    `${c("set")}: ${formatWhatsAppValue(setText)}`,
    `${c("peopleCount")}: ${people} ${c("person")}`,
    `${c("arrivalDate")}: ${formatWhatsAppValue(dateText)}`,
    `${c("arrivalTime")}: ${formatWhatsAppValue(timeText)}`,
    `${c("venue")}: ${venue.name}`,
    `${c("rent")}: ${rentText}`,
    ...lodgingLines,
    "",
    section(c("setFoods"), formatCollectionForPdf(foods)),
    section(c("addFood"), formatChangedCollectionForPdf(foods, baselineFoodQuantities)),
    section(c("removedFoods"), formatRemovedCollectionForPdf(removedFoods)),
    "",
    section(c("salads"), formatCollectionForPdf(salads, c("plate"))),
    section(c("saladMenu"), formatChangedCollectionForPdf(salads, baselineSaladQuantities, c("plate"))),
    section(c("removedSalads"), formatRemovedCollectionForPdf(removedSalads, c("plate"))),
    "",
    section(c("drinks"), formatCollectionForPdf(drinks, c("sht"))),
    section(c("drinkMenu"), formatChangedCollectionForPdf(drinks, baselineDrinkQuantities, c("sht"))),
    section(c("removedDrinks"), formatRemovedCollectionForPdf(removedDrinks, c("sht"))),
    "",
    `${c("totalPrice")}: ${totalText}`,
    c("agreement"),
  ].join("\n");
}

function updatePdfSummary({ nameText, phoneText, setText, people, dateText, timeText, venue, lodging, rentText, totalText }) {
  setPdfValue(pdfClientName, nameText);
  setPdfValue(pdfClientPhone, phoneText);
  setPdfValue(pdfSetName, setText);
  setPdfValue(pdfPeople, `${people} ${c("person")}`);
  setPdfValue(pdfDate, dateText);
  setPdfValue(pdfTime, timeText);
  setPdfValue(pdfVenue, venue.name);
  setPdfValue(pdfRent, rentText);
  setPdfValue(pdfLodgingArrival, lodging?.arrivalDate || c("missingSelected"));
  setPdfValue(pdfLodgingReturnDate, lodging?.returnDate || c("missingSelected"));
  setPdfValue(pdfLodgingReturnTime, lodging?.returnTime || c("missingSelected"));
  setPdfValue(pdfFoods, formatCollectionForPdf(foods));
  setPdfChangeValue(pdfAddedFoods, formatChangedCollectionForPdf(foods, baselineFoodQuantities));
  setPdfChangeValue(pdfRemovedFoods, formatRemovedCollectionForPdf(removedFoods));
  setPdfValue(pdfSalads, formatCollectionForPdf(salads, c("plate")));
  setPdfChangeValue(pdfChangedSalads, formatChangedCollectionForPdf(salads, baselineSaladQuantities, c("plate")));
  setPdfChangeValue(pdfRemovedSalads, formatRemovedCollectionForPdf(removedSalads, c("plate")));
  setPdfValue(pdfDrinks, formatCollectionForPdf(drinks, c("sht")));
  setPdfChangeValue(pdfChangedDrinks, formatChangedCollectionForPdf(drinks, baselineDrinkQuantities, c("sht")));
  setPdfChangeValue(pdfRemovedDrinks, formatRemovedCollectionForPdf(removedDrinks, c("sht")));
  setPdfValue(pdfTotal, totalText);
}

function setPdfValue(element, value) {
  element.textContent = value;
  element.classList.toggle("is-missing", isMissingValue(value));
}

function setPdfChangeValue(element, value) {
  element.textContent = value;
  element.classList.toggle("is-changed", value !== c("noChange"));
}

function updateRentRows() {
  const venue = getVenueDetails();
  const label = getRentLabel(venue);

  rentRows.forEach((row) => {
    row.classList.toggle("is-highlighted", venue.rent > 0);
    row.querySelector("dt").textContent = label;
    row.querySelector("dd").textContent = formatTenge(venue.rent);
  });
}

function renderMenuSetLists({ people, baursakKg }) {
  const configs = [
    { key: "kebab", list: menuKebabList, mainId: "base-main-kebab", mainName: "Қазан-кебап", price: prices.kebab, unit: c("portion"), quantity: people },
    { key: "plov", list: menuPlovList, mainId: "base-main-plov", mainName: "Плов", price: prices.plov, unit: c("portion"), quantity: people },
    { key: "manty", list: menuMantyList, mainId: "base-main-manty", mainName: "Манты шт", price: prices.manty, unit: c("sht"), quantity: people * 4 },
  ];

  configs.forEach((config) => {
    renderOneMenuSetList(config, { people, baursakKg });
  });
}

function renderOneMenuSetList(config, { people, baursakKg }) {
  if (!config.list) return;
  config.list.innerHTML = "";

  const venue = getVenueDetails();
  const rentLabel = getRentLabel(venue);
  createMenuRow(config.list, rentLabel, formatTenge(venue.rent), {
    highlight: venue.rent > 0,
  });

  const soup = foods.find((food) => food.id === "base-soup");
  if (soup) createFoodMenuRow(config.list, soup);

  const activeMain = foods.find((food) => food.id === config.mainId);
  if (config.key === setType.value && activeMain) {
    createFoodMenuRow(config.list, activeMain);
  } else if (config.key !== setType.value) {
    createFoodMenuRow(config.list, {
      id: config.mainId,
      name: config.mainName,
      price: config.price,
      quantity: config.quantity,
      unit: config.unit,
    });
  }

  const samsa = foods.find((food) => food.id === "base-samsa");
  if (samsa) createFoodMenuRow(config.list, samsa);

  const nan = foods.find((food) => food.id === "base-nan");
  if (nan) createFoodMenuRow(config.list, nan);

  const baursak = foods.find((food) => food.id === "base-baursak") || {
    name: "Бауырсақ 1 кг",
    price: prices.baursakKg,
    quantity: baursakKg,
    unit: c("kg"),
  };
  createFoodMenuRow(config.list, baursak);

  foods
    .filter((food) => !food.id.startsWith("base-"))
    .forEach((food) => createFoodMenuRow(config.list, food, true));

  salads.forEach((salad) => {
    createMenuRow(
      config.list,
      displayName(salad.name),
      `${salad.quantity} ${c("plate")} · ${formatTenge(salad.price || 0)}`,
      { changed: customSaladIds.has(salad.id) },
    );
  });

  drinks.forEach((drink) => {
    createMenuRow(
      config.list,
      displayName(drink.name),
      `${drink.quantity} ${c("sht")} · ${formatTenge(drink.price || 0)}`,
      { changed: customDrinkIds.has(drink.id) },
    );
  });

  createMenuRow(config.list, translateText("Шай"), formatTenge(1500));
}

function createFoodMenuRow(list, food, forceChanged = false) {
  const unit = translateText(food.unit || c("piece"));
  const isChanged = forceChanged || customFoodIds.has(food.id);
  createMenuRow(list, displayName(food.name), `${food.quantity} ${unit} · ${formatTenge(food.price || 0)}`, {
    changed: isChanged,
  });
}

function createMenuRow(list, label, value, options = {}) {
  const row = document.createElement("div");
  if (options.highlight) row.classList.add("rent-row", "is-highlighted");
  if (options.changed) row.classList.add("is-custom");

  const dt = document.createElement("dt");
  dt.textContent = label;

  const dd = document.createElement("dd");
  dd.textContent = value;

  row.append(dt, dd);
  list.append(row);
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

  if (!changedFoods.length && !removedFoods.length) return c("noChange");

  const activeChanges = changedFoods.map((food) => {
    const baseline = baselineFoodQuantities[food.id];
    const unit = translateText(food.unit || c("piece"));
    if (baseline === undefined) return `${displayName(food.name)} - ${food.quantity} ${unit}`;
    const diff = food.quantity - baseline;
    const sign = diff > 0 ? "+" : "";
    return `${displayName(food.name)} - ${food.quantity} ${unit} (${sign}${diff})`;
  });
  const removedChanges = removedFoods
    .filter((food) => baselineFoodQuantities[food.id] !== undefined)
    .map((food) => `${displayName(food.name)} - 0 ${translateText(food.unit || c("piece"))} (${c("removed")})`);

  return [...activeChanges, ...removedChanges].join(", ");
}

function calculateTotals({ people, samsaPieces, nanPieces, drinkSets, baursakKg, saladPlates }) {
  const rent = getVenueDetails().rent;
  const sharedTotal =
    people * prices.soup +
    samsaPieces * prices.samsa +
    nanPieces * prices.nan +
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

function getBaseFoodTemplate({ selectedSet, people, samsaPieces, nanPieces, baursakKg }) {
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
      id: "base-nan",
      name: "Нан",
      price: prices.nan,
      quantity: nanPieces,
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

function syncBaseFoods({ selectedSet, people, samsaPieces, nanPieces, baursakKg }) {
  const templateKey = `${selectedSet}:${people}:${samsaPieces}:${nanPieces}:${baursakKg}`;
  if (templateKey === lastFoodTemplateKey) return;

  const defaults = getBaseFoodTemplate({ selectedSet, people, samsaPieces, nanPieces, baursakKg });
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

function createQuantityField({ value, label, onCommit }) {
  const wrap = document.createElement("label");
  wrap.className = "qty-manual";

  const input = document.createElement("input");
  input.type = "text";
  input.inputMode = "numeric";
  input.value = value;
  input.setAttribute("aria-label", label);

  input.addEventListener("input", () => {
    const digits = input.value.replace(/\D/g, "").slice(0, 3);
    const parsed = Number.parseInt(digits, 10);
    input.value = Number.isNaN(parsed) ? "" : String(Math.min(parsed, 999));
  });

  const commit = () => {
    const parsed = Number.parseInt(input.value, 10);
    onCommit(Number.isNaN(parsed) ? 0 : Math.min(parsed, 999));
  };

  input.addEventListener("change", commit);
  input.addEventListener("blur", commit);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      input.blur();
    }
  });

  wrap.append(input);

  return wrap;
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
    name.textContent = displayName(salad.name);

    const price = document.createElement("span");
    price.textContent = formatTenge(salad.price || 0);

    info.append(name, price);

    const qty = document.createElement("div");
    qty.className = "salad-qty";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "-";
    minus.setAttribute("aria-label", `${displayName(salad.name)} санын азайту`);
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

    const quantity = createQuantityField({
      value: salad.quantity,
      label: `${displayName(salad.name)} саны`,
      onCommit: (nextQuantity) => {
        if (!salads[index]) return;
        customSaladIds.add(salads[index].id);
        salads[index].quantity = Math.max(0, nextQuantity);
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
      },
    });

    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    plus.setAttribute("aria-label", `${displayName(salad.name)} санын көбейту`);
    plus.addEventListener("click", () => {
      customSaladIds.add(salads[index].id);
      salads[index].quantity = Math.min(999, salads[index].quantity + 1);
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
    name.textContent = displayName(drink.name);

    const price = document.createElement("span");
    price.textContent = formatTenge(drink.price || 0);

    info.append(name, price);

    const qty = document.createElement("div");
    qty.className = "salad-qty";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "-";
    minus.setAttribute("aria-label", `${displayName(drink.name)} санын азайту`);
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

    const quantity = createQuantityField({
      value: drink.quantity,
      label: `${displayName(drink.name)} саны`,
      onCommit: (nextQuantity) => {
        if (!drinks[index]) return;
        customDrinkIds.add(drinks[index].id);
        drinks[index].quantity = Math.max(0, nextQuantity);
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
      },
    });

    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    plus.setAttribute("aria-label", `${displayName(drink.name)} санын көбейту`);
    plus.addEventListener("click", () => {
      customDrinkIds.add(drinks[index].id);
      drinks[index].quantity = Math.min(999, drinks[index].quantity + 1);
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
    empty.textContent = c("empty");
    removedDrinkList.append(empty);
    return;
  }

  removedDrinks.forEach((drink, index) => {
    const item = document.createElement("li");
    const label = document.createElement("span");
    label.textContent = `${displayName(drink.name)} (${formatTenge(drink.price || 0)})`;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = c("reAdd");
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
    option.textContent = `${displayName(drink.name)} - ${formatTenge(drink.price || 0)}`;
    drinkMenu.append(option);
  });
}

function renderFoods() {
  foodList.innerHTML = "";
  refreshCustomState(foods, baselineFoodQuantities, customFoodIds);

  if (!foods.length) {
    const empty = document.createElement("li");
    empty.textContent = c("foodsEmpty");
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
    name.textContent = displayName(food.name);

    const price = document.createElement("span");
    price.textContent = `${formatTenge(food.price || 0)} / ${translateText(food.unit || c("piece"))}`;

    info.append(name, price);

    const qty = document.createElement("div");
    qty.className = "salad-qty";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "-";
    minus.setAttribute("aria-label", `${displayName(food.name)} санын азайту`);
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

    const quantity = createQuantityField({
      value: food.quantity,
      label: `${displayName(food.name)} саны`,
      onCommit: (nextQuantity) => {
        if (!foods[index]) return;
        customFoodIds.add(foods[index].id);
        foods[index].quantity = Math.max(0, nextQuantity);
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
      },
    });

    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    plus.setAttribute("aria-label", `${displayName(food.name)} санын көбейту`);
    plus.addEventListener("click", () => {
      customFoodIds.add(foods[index].id);
      foods[index].quantity = Math.min(999, foods[index].quantity + 1);
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
    empty.textContent = c("empty");
    removedFoodList.append(empty);
    return;
  }

  removedFoods.forEach((food, index) => {
    const item = document.createElement("li");
    const label = document.createElement("span");
    label.textContent = `${displayName(food.name)} (${formatTenge(food.price || 0)} / ${translateText(food.unit || c("piece"))})`;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = c("reAdd");
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
    option.textContent = `${displayName(food.name)} - ${formatTenge(food.price || 0)}`;
    foodMenu.append(option);
  });
}

function renderRemovedSalads() {
  removedSaladList.innerHTML = "";

  if (!removedSalads.length) {
    const empty = document.createElement("li");
    empty.textContent = c("empty");
    removedSaladList.append(empty);
    return;
  }

  removedSalads.forEach((salad, index) => {
    const item = document.createElement("li");
    const label = document.createElement("span");
    label.textContent = `${displayName(salad.name)} (${formatTenge(salad.price || 0)})`;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = c("reAdd");
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
    option.textContent = `${displayName(salad.name)} - ${formatTenge(salad.price || 0)}`;
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
orderDate.addEventListener("input", () => {
  orderDate.value = formatDateInput(orderDate.value);
  updateGroupSet();
});
orderTime.addEventListener("input", () => {
  orderTime.value = formatTimeInput(orderTime.value);
  updateGroupSet();
});
lodgingArrivalDate?.addEventListener("input", () => {
  lodgingArrivalDate.value = formatDateInput(lodgingArrivalDate.value);
  updateGroupSet();
});
lodgingReturnDate?.addEventListener("input", () => {
  lodgingReturnDate.value = formatDateInput(lodgingReturnDate.value);
  updateGroupSet();
});
lodgingReturnTime?.addEventListener("input", () => {
  lodgingReturnTime.value = formatTimeInput(lodgingReturnTime.value);
  updateGroupSet();
});
orderDate.addEventListener("change", updateGroupSet);
orderTime.addEventListener("change", updateGroupSet);
lodgingArrivalDate?.addEventListener("change", updateGroupSet);
lodgingReturnDate?.addEventListener("change", updateGroupSet);
lodgingReturnTime?.addEventListener("change", updateGroupSet);
calcVenue.addEventListener("change", () => {
  orderVenue.value = calcVenue.value;
  updateRentDurationVisibility();
  syncCustomSelects();
  updateGroupSet();
});
orderVenue.addEventListener("change", () => {
  calcVenue.value = orderVenue.value;
  updateRentDurationVisibility();
  syncCustomSelects();
  updateGroupSet();
});
calcRentDuration?.addEventListener("change", () => {
  orderRentDuration.value = calcRentDuration.value;
  syncCustomSelects();
  updateGroupSet();
});
orderRentDuration?.addEventListener("change", () => {
  calcRentDuration.value = orderRentDuration.value;
  syncCustomSelects();
  updateGroupSet();
});
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

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

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
    showSaladNotice(c("saladExists"));
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
    showDrinkNotice(c("drinkExists"));
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
    showFoodNotice(c("foodExists"));
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
[setType, calcVenue, calcRentDuration, orderSetSelect].filter(Boolean).forEach(enhanceSetSelect);
applyLanguage();
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

