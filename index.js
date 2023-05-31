const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const cors = require("cors");
const ruNames = [
  [
    "Эрнест",
    "Тигран",
    "Эльдар",
    "Эмиль",
    "Тельман",
    "Теодор",
    "Ульманас",
    "Устин",
    "Аваз",
    "Агап",
    "Агафон",
    "Август",
    "Авдей",
    "Азарий",
    "Арам",
    "Аркадий",
    "Арий",
    "Аристарх",
    "Арно",
    "Арон",
    "Арнольд",
    "Юлиан",
    "Северин",
    "Арсен",
    "Арсений",
    "Архип",
    "Артур",
    "Эммануил",
    "Эдмунд",
    "Эдуард",
    "Юрий",
    "Юлий",
    "Тимон",
    "Тимофей",
    "Тимур",
    "Севастьян",
    "Тихон",
    "Серафим",
    "Сергей",
    "Семен",
    "Тарас",
    "Эдвард",
    "Артем",
    "Артемий",
    "Акакий",
    "Алан",
    "Терентий",
    "Викентий",
    "Виссарион",
    "Виталий",
    "Витольд",
    "Ален",
    "Аким",
    "Альберт",
    "Альфред",
    "Александр",
    "Алексей",
    "Амвросий",
    "Кирилл",
    "Аввакум",
    "Карл",
    "Карен",
    "Анатолий",
    "Клавдий",
    "Амадей",
    "Клим",
    "Амадеус",
    "Амаяк",
    "Анисим",
    "Апполинарий",
    "Антон",
    "Ануфрий",
    "Ануфрий",
    "Андрей",
    "Митрофан",
    "Мичлов",
    "Моисей",
    "Модест",
    "Мстислав",
    "Мурат",
    "Муслим",
    "Мефодий",
    "Мечислав",
    "Мечеслав",
    "Назар",
    "Назарий",
    "Натан",
    "Лазарь",
    "Бернар",
    "Бенедикт",
    "Варлаам",
    "Варфоломей",
    "Вальтер",
    "Валерий",
    "Валентин",
    "Василий",
    "Даниил",
    "Динасий",
    "Дорофей",
    "Дмитрий",
    "Вадим",
    "Вацлав",
    "Владимир",
    "Владислав",
    "Владлен",
    "Виктор",
    "Вильгельм",
    "Вилен",
    "Володар",
    "Вольдемар",
    "Всеволод",
    "Велизар",
    "Вениамин",
    "Венедикт",
    "Вячеслав",
    "Гавриил",
    "Гастон",
    "Градимир",
    "Григорий",
    "Глеб",
    "Горислав",
    "Гордон",
    "Гордей",
    "Густав",
    "Гевор",
    "Геральд",
    "Иван",
    "Ибрагим",
    "Игнат",
    "Игнатий",
    "Герасим",
    "Израиль",
    "Герман",
    "Георгий",
    "Генрих",
    "Игорь",
    "Геннадий",
    "Давид",
    "Дамир",
    "Дональд",
    "Донат",
    "Денис",
    "Демид",
    "Демьян",
    "Джордан",
    "Евграф",
    "Конкордий",
    "Кондрат",
    "Ксаннф",
    "Евгений",
    "Кузьма",
    "Егор",
    "Евстафий",
    "Евсей",
    "Евдоким",
    "Ермолай",
    "Ерофей",
    "Еремей",
    "Елизар",
    "Елисей",
    "Емельян",
    "Ефрем",
    "Ефим",
    "Ефимий",
    "Ион",
    "Жан",
    "Жорж",
    "Ждан",
    "Захар",
    "Захария",
    "Константин",
    "Зигмунд",
    "Зиновий",
    "Зосима",
    "Измаил",
    "Изяслав",
    "Ираклий",
    "Иржи",
    "Иларион",
    "Илларион",
    "Илиан",
    "Ипполит",
    "Иннокентий",
    "Ионос",
    "Ионас",
    "Иосиф",
    "Исаак",
    "Исаакий",
    "Исидор",
    "Лука",
    "Лукьян",
    "Лев",
    "Леван",
    "Леон",
    "Леонард",
    "Леонид",
    "Леопольд",
    "Леонтий",
    "Любомир",
    "Люсьен",
    "Людвиг",
    "Марат",
    "Марк",
    "Мариан",
    "Наум",
    "Никанор",
    "Никита",
    "Никифор",
    "Николай",
    "Никон",
    "Нисон",
    "Иероним",
    "Казимир",
    "Климент",
    "Ким",
    "Клод",
    "Клемент",
    "Корнилий",
    "Корней",
    "Конрад",
    "Лаврентий",
    "Мартин",
    "Мартын",
    "Аскольд",
    "Афанасий",
    "Ахмет",
    "Адам",
    "Адриан",
    "Адольф",
    "Ашот",
    "Бронислав",
    "Богдан",
    "Борис",
    "Борислав",
    "Болеслав",
    "Бонифаций",
    "Май",
    "Макар",
    "Максим",
    "Максимилиан",
    "Мануил",
    "Матвей",
    "Мадлен",
    "Мирон",
    "Мирослав",
    "Милан",
    "Мисаил",
    "Михаил",

    "Нифонт",
    "Норман",
    "Овидий",
    "Августин",
    "Аггей",
    "Авраам",
    "Олан",
    "Абрам",
    "Аарон",
    "Автандил",
    "Авдей",

    "Олег",
    "Нестор",
    "Онисим",
    "Оскар",
    "Осип",
    "Павел",
    "Парамон",
    "Панкрат",
    "Памфил",
    "Прокофий",
    "Прохор",
    "Платон",
    "Пимен",
    "Порфирий",
    "Яким",
    "Петр",
    "Равиль",
    "Раймонд",
    "Рафаил",
    "Яков",
    "Ян",
    "Януарий",
    "Рафик",
    "Ясон",
    "Яромир",
    "Ратмир",
    "Радий",
    "Радий",
    "Станимир",
    "Радомир",
    "Рашид",
    "Ринат",
    "Рихард",
    "Рифат",
    "Ричард",
    "Роберт",
    "Ролан",
    "Роман",
    "Ростислав",
    "Родион",
    "Рубен",
    "Руслан",
    "Рустам",
    "Рудольф",
    "Рем",
    "Флорентий",
    "Ренольд",
    "Савва",
    "Ярослав",
    "Стоян",
    "Савел",
    "Савелий",
    "Самсон",
    "Самуил",
    "Святослав",
    "Спартак",
    "Сократ",
    "Соломон",
    "Стакрат",
    "Станислав",
    "Стивен",
    "Фридрих",
    "Филипп",
    "Фидель",
    "Талик",
    "Таис",
    "Степан",
    "Трифон",
    "Трофим",
    "Харитон",
    "Христиан",
    "Филимон",
    "Христос",
    "Христофор",
    "Эраст",
    "Эрик",
    "Франц",
    "Тамаз",
    "Фома",
    "Фердинанд",
    "Тит",
    "Феликс",
    "Феодосий",
    "Федот",
    "Федор",
    "Юхим",
  ],
  [
    "Августа",
    "Аврора",
    "Агата",
    "Агнесса",
    "Агния",
    "Ада",
    "Азиза",
    "Алевтина",
    "Александра",
    "Алёна",
    "Алина",
    "Алиса",
    "Алла",
    "Альбина",
    "Амелия",
    "Анастасия",
    "Ангелина",
    "Анжела",
    "Анисья",
    "Анна",
    "Антонина",
    "Анфиса",
    "Ариадна",
    "Арина",
    "Астра",
    "Ася",
    "Беатриса",
    "Белла",
    "Берта",
    "Божена",
    "Борислава",
    "Бронислава",
    "Валентина",
    "Валерия",
    "Ванда",
    "Варвара",
    "Василиса",
    "Венера",
    "Вера",
    "Вероника",
    "Веста",
    "Вета",
    "Виктория",
    "Виолетта",
    "Виталина",
    "Владислава",

    "Галина",
    "Гаянэ",
    "Гелла",
    "Генриетта",
    "Георгина",
    "Гертруда",
    "Глафира",
    "Грета",
    "Гюзель",

    "Дана",
    "Даниэла",
    "Дарина",
    "Дарья",
    "Дебора",
    "Диана",
    "Дина",
    "Динара",
    "Дионисия",
    "Доминика",
    "Ева",
    "Евгения",
    "Евдокия",
    "Екатерина",
    "Елена",
    "Елизавета",
    "Жанна",
    "Земфира",
    "Зинаида",
    "Злата",
    "Зоя",
    "Изабелла",
    "Изольда",
    "Инга",
    "Инесса",
    "Инна",
    "Иоанна",
    "Иоланта",
    "Ираида",
    "Ирина",
    "Ирма",
    "Ия",
    "Калерия",
    "Камилла",
    "Капитолина",
    "Карина",
    "Каролина",
    "Кира",
    "Клавдия",
    "Клара",
    "Констанция",
    "Кристина",
    "Ксения",
    "Лада",
    "Лариса",
    "Лаура",
    "Лейла",
    "Леся",
    "Лидия",
    "Лилия",
    "Лина",
    "Лия",
    "Любовь",
    "Людмила",
    "Люсьена",
    "Майя",
    "Маргарита",
    "Марианна",
    "Марина",
    "Мария",
    "Марта",
    "Марьяна",
    "Медея",
    "Милена",
    "Милица",
    "Милослава",
    "Мирослава",
    "Моника",
    "Муза",
    "Надежда",
    "Наталья",
    "Нелли",
    "Ника",
    "Нина",
    "Нонна",
    "Оксана",
    "Октябрина",
    "Олеся",
    "Ольга",
    "Полина",
    "Прасковья",
    "Рада",
    "Раиса",
    "Ревекка",
    "Регина",
    "Рената",
    "Римма",
    "Роза",
    "Роксана",
    "Ростислава",
    "Рузана",
    "Руслана",
    "Руфина",
    "Сабина",
    "Сарра",
    "Светлана",
    "Серафима",
    "Сильва",
    "Симона",
    "Снежана",
    "Софья",
    "Станислава",
    "Стелла",
    "Стефания",
    "Сусанна",
    "Таисия",
    "Тамара",
    "Татьяна",
    "Тереза",
    "Ульяна",
    "Устина",
    "Фаина",
    "Фаня",
    "Фая",
    "Фелиция",
    "Флора",
    "Франсуаза",
    "Фрида",
    "Хильда",
    "Христина",
    "Чеслава",
    "Эдита",
    "Элеонора",
    "Элина",
    "Элла",
    "Элоиза",
    "Эльвира",
    "Эльза",
    "Эльмира",
    "Эмилия",
    "Эмма",
    "Эрика",
    "Юлия",
    "Юна",
    "Юнона",
    "Юстина",
    "Ядвига",
    "Яна",
    "Ярослава",
  ],
];
const uzNames = [
  [
    "Ahror",
    "Abbos ",
    "Mahmud",
    "Dilshod",
    "Azim",
    "Abdu",
    "Kamron",
    "Sardor",
    "Rasul",
    "Sarvar",
    "Javlon",
    "Jasur",
    "Akbar",
    "Alisher",
    "Komil",
    "Sanjar",
    "Ali",
    "Abdulaziz",
    "Abdulla",
    "Jahongir",
    "Zaffar",
    "Zahriddin",
    "Komol",
    "Arslan",
    "Ahbor",
    "Akobir",
    "Isok",
    "Murod",
    "Aziz",
    "Umid",
    "Temur",
    "Urak",
    "Tursun",
    "Farukh",
    "Farkhod",
    "Fotih",
    "Shukhrat",
    "Abdullo",
    "Doston",
    "Davron",
    "Jamshid",
    "Rustam",
    "Bekzod",
    "Jovlon",
    "Shaxzod",
    "Islom",
    "Sunnat",
    "Muhammadrasul",
    "Saidazim",
    "Abubakir",
    "Sulton",
    "Otabek",
    "Otabekhoja",
    "Pulat",
    "Donier",
    "Usuf",
    "Umar",
    "Usmon",
    "Sulaymon",
    "Kuyoshbek",
    "Addiz",
    "Oybek",
    "Ozod",
    "Botir",
    "Akmal",
    "Mirkomol",
    "Mirjalol",
    "Ahmad",
    "Laziz",
    "Oktab",
    "Parod",
    "Husan",
    "Hasan",
    "Kosim",
    "Zalol",
    "Imron",
    "Nozim",
    "Amir",
    "Xusniddin",
    "Nuriddin",
    "Gappor",
    "Sultonmirod",
    "Abduazim",
    "Saidakbar",
    "Saidagzam",
    "Agzam",
    "Polvon",
    "Azlar",
    "Sodiq",
    "Muhiddin",
    "Asad",
    "Ilkhom",
    "Rahmat",
    "Salim",
    "Akrom",
    "Sovkin",
    "Dovud",
    "Ziyod",
    "Qahrammon",
    "Abdulaziz",
    "Akobir",
    "Ismoil",
    "Ismat",
    "Qolim",
    "Gani",
    "Sino",
    "Bobur",
    "Khamdam",
    "Anvar",
    "Nodir",
    "Ulugbek",
    "Sherzod",
    "Nigmat",
    "Eshmat",
    "Shkur",
    "Mirabbos",
    "Karim",
    "Bahtiyor",
    "Samandar",
    "Shovkat",
    "Kudrat",
    "Orash",
    "Rashid",
    "Elkhon",
    "Diyor",
  ],
  [
    "Laziza",
    "Nargiza",
    "Nazokat",
    "Munisa",
    "Shaxzoda",
    "Ozoda",
    "Aziza",
    "Karima",
    "Karina",
    "Zulaykho",
    "Ziyoda",
    "Zarina",
    "Shaxrizoda",
    "Nigina",
    "Nafisa",
    "Nilufar",
    "Sofia",
    "Husnud",
    "Madina",
    "Muhlisa",
    "Fatima",
    "Zuhra",
    "Nozima",
    "Nodira",
    "Nigora",
    "Galiyo",
    "Sevinch",
    "Jasmin",
    "Sarvinoz",
    "Shoira",
    "Sabina",
    "Alsu",
    "Asal",
    "Jamila",
    "Dilshoda",
    "Gulayzo",
    "Gulzor",
    "Iroda",
    "Zarnigor",
    "Amali",
    "Mohira",
    "Minavar",
    "Mashkuda",
    "Maftuna",
    "Dilnoza",
    "Sevara",
    "Laylo",
    "Shahlo",
    "Mumtos",
    "Gulnoza",
    "Mahmuda",
    "Samira",
    "Azila",
    "Imrona",
    "Nasiba",
    "Nafisa",
    "Zumrat",
    "Kimat",
    "Farida",
    "Fazlima",
    "Amina",
    "Azliba",
    "Sarvina",
    "Parvina",
    "Ruhsora",
    "Rujsor",
    "Movluda",
    "Albina",
  ],
];
const uzbekPlaces = [
  "Mirabad",
  "Sergili",
  "Yashnaobod",
  "Yangi Ozkeiston",
  "Mirzoulugbek",
  "Bektemirskiy",
  "Unusobod",
  "Shayhontohur",
  "Qibray",
  "Almazar",
  "Chilonzor",
  "Uchtepa",
  "Yakkasaray",
  ,
  "Tashkent",
  "Buhoro",
  "Samarkand",
  "Andijon",
  "Farhona",
  "Urganch",
  "Xorazm",
  "Navoi",
  "Namangan",
  "Termez",
  "Korakalpakstan",
];
const russianPlaces = [
  "Якутск",
  "Москва",
  "Санкт-Питербург",
  "Каллининград",
  "Орел",
  "Тюмень",
  "Казань",
  "Караганда",
  "Кемерово",
  "Тамбов",
  "Брянская об.",
  "Костромская об.",
  "Волгоград",
  "Кубань",
  "Владимирская об.",
  "Липецк",
  "Ярослав",
  "Иваново",
  "Рязань",
  "Тверская об",
  "Ленинград",
  "Хабаровский Край",
  "Премь",
  "Пензенская",
  "Камчатская обл",
  "Ставраполь",
  "Оренбург",
  "Бурятия",
  "Татарстан",
  "Башкортостан",
  "Дагестан",
  "Чечня",
];
function randomUzbRegion(seed) {
  let s = seed;
  while (s >= uzbekPlaces.length) {
    s -= uzbekPlaces.length;
  }
  return uzbekPlaces[s];
}
function randomRuRegion(seed) {
  while (seed >= russianPlaces.length) {
    seed -= russianPlaces.length;
  }
  return russianPlaces[seed];
}
function renameUz(seed) {
  var namesList, fathersList, randNamePos;
  while (seed >= uzNames[0].length + uzNames[1].length)
    seed -= uzNames[0].length + uzNames[1].length;
  if (seed % 2 == 0) {
    while (seed >= uzNames[0].length) {
      seed = seed - uzNames[0].length;
    }
    namesList = uzNames[0];
    fathersList = uzNames[0];
    randNamePos = seed;
  } else {
    while (seed >= uzNames[1].length) {
      seed -= uzNames[1].length;
    }

    namesList = uzNames[1];
    fathersList = uzNames[0];
    randNamePos = seed;
  }
  var randName =
    namesList[randNamePos >= 116 ? randNamePos - 100 : randNamePos];
  var randFatherPos =
    seed + 10 >= ruNames[0].length - 1 ? seed - 100 : seed + 10;
  var randFather =
    fathersList[randFatherPos >= 116 ? randFatherPos - 100 : randFatherPos];
  fatherEnd = randFather.slice(randFather.length - 2, randFather.length);
  fatherRoot = randFather.slice(0, randFather.length - 2);
  var genderEnd = "a";
  if (seed % 2 == 0) genderEnd = "";
  switch (fatherEnd) {
    case "ja":
      randFather = fatherRoot + "jaev";
      break;
    case "no":
      randFather = fatherRoot + "bov";
      break;
    case "lo":
      randFather = fatherRoot + "aev";
      break;
    case "li":
      randFather = fatherRoot + "mov";
      break;
    case "la":
      randFather = fatherRoot + "laev";
      break;
    case "ва":
      randFather = fatherRoot + "вов";
      break;
    case "ir":
      randFather = fatherRoot + "irov";
      break;
    case "ай":
      randFather = fatherRoot + "ев";
      break;
    case "ел":
      randFather = fatherRoot + "ельев";
      break;
    default:
      randFather += "ov";
      break;
  }
  return randName + " " + randFather + genderEnd;
}
// function generateUzbekAddress(seed) {}
function renameRu(seed) {
  var namesList, fathersList, randNamePos;
  while (seed >= ruNames[0].length + ruNames[1].length)
    seed -= ruNames[0].length + ruNames[1].length;
  if (seed % 2 == 0) {
    while (seed >= ruNames[0].length) {
      seed = seed - ruNames[0].length;
    }
    namesList = ruNames[0];
    fathersList = ruNames[0];
    randNamePos = seed;
  } else {
    while (seed >= ruNames[1].length) {
      seed -= ruNames[1].length;
    }

    namesList = ruNames[1];
    fathersList = ruNames[0];
    randNamePos = seed;
  }
  var randName =
    namesList[randNamePos >= 116 ? randNamePos - 100 : randNamePos];
  var randFatherPos =
    seed + 10 >= ruNames[0].length - 1 ? seed - 100 : seed + 10;
  var randFather =
    fathersList[randFatherPos >= 126 ? randFatherPos - 100 : randFatherPos];
  fatherEnd = randFather.slice(randFather.length - 2, randFather.length);
  fatherRoot = randFather.slice(0, randFather.length - 2);
  var genderEnd = "на";
  if (seed % 2 == 0) genderEnd = "ич";

  switch (fatherEnd) {
    case "ий":
      randFather = fatherRoot + "ьев";
      break;
    case "ов":
      randFather = fatherRoot + "ов";
      break;
    case "ль":
      randFather = fatherRoot + "льев";
      break;
    case "ма":
      randFather = fatherRoot + "мов";
      break;
    case "ей":
      randFather = fatherRoot + "еев";
      break;
    case "ва":
      randFather = fatherRoot + "вов";
      break;
    case "ья":
      randFather = fatherRoot + "ь";
      break;
    case "ай":
      randFather = fatherRoot + "ев";
      break;
    case "ел":
      randFather = fatherRoot + "ельев";
      break;
    default:
      randFather += "ов";
      break;
  }
  return randName + " " + randFather + genderEnd;
}
const streets = [
  [
    "ул. Кузницово",
    "Проспект Ленина",
    "ул. Тарас Шевченко",
    "ул. Молодежная",
    "ул. Лесная",
    "ул. Мира",
    "ул. Гагарина",
    "ул. Пушкина",
    "ул. Горького",
    "Проспект Чапаева",
    "Красноармейская ул.",
    "ул. Свободы",
    "ул. Чкалова",
    "ул. Партизанская",
    "ул. Лермонтова",
    "ул. Маяковского",
    "ул. Горная",
    "ул. Гоголя",
    "проспект Майский",
    "Красная Площадь",
    "Метро Люблино",
    "ул. 40 лет Победы",
    "ул. Новоселов",
    "ул. Почтовый",
    "ул. Тургениева",
    "ул. Кольцевая",
    "ул. Титова",
    "ул. Урицкого",
    "ул. Российская",
    "ул. Толстого",
    "ул. Есенина",
    "ул. Винодельная",
  ],
  [
    "Bilol st.",
    "Otchopar st.",
    "Oq-bilol st.",
    "Zangota st.",
    "Dormon st.",
    "Maksim Gorkiy yo`li",
    "Nukus ko`chasi",
    "Fargo`na yoli",
    "Tashselmash",
    "Tuzel-1",
    "Tuzel-2",
    "Tuzel-3",
    "Kichik halqa",
    "C1 kochasi",
    "Amir Temur kochasi ",
    "8 Mart kochasi ",
    "Ozbekiston st.",
    "Taras Shevchenko st.",
    "Yakkachinor st.",
    "Obuniyat st.",
    "Halqlar Dostligi st.",
    "Vodnik",
    "Eski otchopar st",
    "Beshogoch st",
    "Baliqchi st.",
    "Katta otchopar st.",
    "Beruniy kochasi",
    "Jamiat kochasi",
    "Bekbaraka st.",
    "Qorgon st.",
    "Yangi Ozbekiston st.",
    "Rohat yo`li",
    "Muborak st.",
  ],
];
function generateStreet(seed, reg) {
  if (reg == "Uzb") {
    while (seed >= streets[1].length) {
      seed -= streets[1].length;
    }
    return streets[1][seed];
  } else {
    while (seed >= streets[0].length) {
      seed -= streets[0].length;
    }
    return streets[0][seed];
  }
}
const generateMisSpells = (string, reg) => {
  let errorForm = Math.floor(Math.random() * 3);
  console.log(errorForm);
  if (errorForm == 1) {
    var arr = string.split("");
    arr.splice(Math.floor(Math.random() * arr.length), 1);
    return arr.join("");
  } else if (errorForm == 2) {
    const characters =
      reg == "Rus"
        ? "АЙЦУКЕНГШЩЗЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮйцукенгшщзхъфывапролджэячсмитьбю"
        : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let random = Math.floor(Math.random() * string.length + 1);
    return (
      string.substr(0, random) +
      characters.charAt(Math.floor(Math.random() * characters.length - 1)) +
      string.substr(random)
    );
  } else {
    let arr = string.split("");
    let i = Math.floor(Math.random() * (arr.length - 1));
    let g = Math.floor(Math.random() * (arr.length - 1));
    let temp = arr[i];
    arr[i] = arr[g];
    arr[g] = temp;
    return arr.join("");
  }
};
const generateAddress = (reg, seed) => {
  // let form = Math.floor(Math.random() * 2);
  return reg == "Uzb"
    ? generateStreet(seed, reg) + " " + randomUzbRegion(seed)
    : reg == "Rus"
    ? generateStreet(seed, reg) + " " + randomRuRegion(seed)
    : faker.location.streetAddress() + faker.location.state();

  // let region =
  //   reg == "Uzb"
  //     ? randomUzbRegion(seed)
  //     : reg == "Rus"
  //     ? randomRuRegion(seed)
  //     : faker.location.state();
  // return reg == "Rus"
  //   ? region
  //   : form == 0
  //   ? region +
  //     " " +
  //     faker.location.city() +
  //     " " +
  //     faker.location.streetAddress()
  //   : form == 1
  //   ? faker.location.streetAddress() + " " + region
  //   : region + " " + faker.location.street();
};
const getTenUsers = (reg, err, seed) => {
  const arr = [];
  let phoneFormat =
    reg == "Uzb"
      ? "+998 (9#) ### ## ##"
      : reg == "Usa"
      ? "+1 (###) ###-####"
      : "8 800 ### ## ##";
  for (let i = 0; i < 20; i++) {
    faker.seed(seed + i);

    let fullname =
      reg == "Rus"
        ? renameRu(seed + i)
        : reg == "Uzb"
        ? renameUz(seed + i)
        : faker.person.fullName();
    let address =
      generateAddress(reg, seed + i) +
      " " +
      ((seed + i + 1) % 5) +
      "/" +
      ((seed + i + 4) % 22);
    let number = faker.phone.number(phoneFormat);
    if (err > 2) {
      for (
        let g = 0;
        g < err / 3 + Math.floor(Math.random() + (err % 1));
        g++
      ) {
        fullname = generateMisSpells(fullname, reg);
        address = generateMisSpells(address, reg);
        number = generateMisSpells(number, reg);
      }
    } else {
      for (let g = 0; g < err + Math.floor(Math.random() + (err % 1)); g++) {
        fullname = generateMisSpells(fullname, reg);
      }
    }
    let user = {
      id: faker.database.mongodbObjectId(),
      fullname,
      number,
      address,
    };
    arr.push(user);
  }
  return arr;
};

app.use(express.json());
app.use(cors());
app.post("/", (req, res) => {
  const { seed, reg, err } = req.body;
  const users = getTenUsers(reg, err, seed);
  return res.json(users);
});
app.listen(5000, () => {
  console.log("Its running on 5000 port ");
});
