const express = require("express");
const { create, ExpressHandlebars } = require("express-handlebars");

const app = express();

const hbs = create({
  extname: ".hbs",
  helpers: {
    isEqual: (val1, val2) => val1 === val2,
    uppercase: (val) => {
      return val.toUpperCase();
    },
    makeLink: (name, url) => {
      return `<a href="${url}">${name}</a>`;
    },
    printPerson() {
      console.log("student", this);
    },
  },
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use("/", (req, res) => {
  res.render("home.hbs", {
    username: "abcs",
    phone: "+977-9843701123",
    ta: {
      city: "kathmandu",
    },
    address: {
      permanent: { city: "maitidevi" },
    },
    hobbies: ["alpha", "beta", "Gamma", "delta"],
    rakesh: "shrestha",
    students: [
      {
        name: "rakesh",
        username: "rakesh",
      },
      { name: "shreyash", username: "shreyash" },
    ],
    gender: 4,
    helpers: {
      isMale: (val) => val === 4,
      isFemale: (val) => val === 2,
      getByIndex: (array, index) => array[index], //students[0]
    },
  });
});

app.listen(5500, () => {
  console.log("App started");
});
