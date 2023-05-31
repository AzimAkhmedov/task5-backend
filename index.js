const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const cors = require("cors");

const generateMisSpells = (string, reg) => {
  let errorForm = Math.floor(Math.random() * 2);

  if (errorForm == 0) {
    var arr = string.split("");
    arr.splice(Math.floor(Math.random() * arr.length), 1);
    string = arr.join("");
    return string;
  } else if (errorForm == 1) {
    const characters =
      reg == "Rus"
        ? "АЙЦУКЕНГШЩЗЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮйцукенгшщзхъфывапролджэячсмитьбю"
        : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let random = Math.floor(Math.random() * string.length + 1);
    return (
      string.substr(0, random) +
      characters.charAt(Math.floor(Math.random() * characters.length)) +
      string.substr(random)
    );
  } else {
  }
};
const generateAddress = (reg) => {
  let form = Math.floor(Math.random() * 2);

  return form == 0
    ? reg + " " + faker.location.city() + " " + faker.location.streetAddress()
    : form == 1
    ? faker.location.streetAddress() + " " + reg
    : reg + " " + faker.location.street();
};
const getTenUsers = (reg, err) => {
  const arr = [];
  let country = reg == "Uzb" ? "Uzbekistan" : reg == "Usa" ? "USA " : "Russia";

  let phoneFormat =
    reg == "Uzb"
      ? "+998 (9#) ### ## ##"
      : reg == "Usa"
      ? "+1 (###) ###-####"
      : "8 800 ### ## ##";
  for (let i = 0; i < 20; i++) {
    let fullname = faker.person.fullName();
    let address = generateAddress(country);
    let number = faker.phone.number(phoneFormat);
    if (err > 2) {
      for (let g = 0; g < err / 3; g++) {
        fullname = generateMisSpells(fullname, reg);
        address = generateMisSpells(address, reg);
        number = generateMisSpells(number, reg);
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
  console.log(faker.seed(seed));
  const users = getTenUsers(reg, err);
  return res.json(users);
});
// console.log();
app.listen(5000, () => {
  console.log("Its running on 5000 port ");
});
