const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://abhishek:abhishek123456@cluster0.jouxt.mongodb.net/loveLula?retryWrites=true&w=majority"
  );
};

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use(express.static("public"));

app.set("view Engine", "ejs");

const skincareSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    button: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Skincare = mongoose.model("skincares", skincareSchema);

const productSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    button: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("products", productSchema);

const indexSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },

    description: { type: String, required: true },
    price: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Index = mongoose.model("indexs", indexSchema);

const giftSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Gift = mongoose.model("gifts", giftSchema);

app.post("/indexs", async (req, res) => {
  const index = await Index.create(req.body);

  return res.status(200).json({ index });
});

app.get("/indexs", async (req, res) => {
  const index = await Index.find().lean().exec();
  return res.status(200).json({ index });
});

app.post("/indexs/top", async (req, res) => {
  const indextop = await Index.create(req.body);

  return res.status(200).json({ indextop });
});

app.get("/indexs/top", async (req, res) => {
  const indextop = await Index.find().lean().exec();
  return res.status(200).json({ indextop });
});

//register

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  confirmpassword: { type: String, required: true },
});

const User = mongoose.model("users", userSchema);

app.post("/users", async (req, res) => {
  console.log(req.body);

  const user = await User.findOne({ username: req.body.username })
    .lean()
    .exec();

  if (user != null) return res.status(404);


  const newUser = await User.create(req.body);
  res.send({ newUser });
  console.log(newUser);
  res.json({ status: "ok" });
});

//===================================================================================================================

//posts
app.post("/gifts", async (req, res) => {
  const gift = await Gift.create(req.body);
  return res.status(200).send({ gift });
});

//get items

app.get("/gifts", async (req, res) => {
  const gifts = await Gift.find().lean().exec();

  return res.status(200).send({ gifts });
  // return res.render("gift.ejs", {
  //   gifts: gifts,
  // });
});

app.post("/products", async (req, res) => {
  const index = await Product.create(req.body);

  return res.status(200).json({ index });
});

app.get("/products", async (req, res) => {
  const index = await Product.find().lean().exec();
  return res.status(200).json({ index });
});

app.post("/skincares", async (req, res) => {
  const index = await Skincare.create(req.body);

  return res.status(200).json({ index });
});

app.get("/skincares", async (req, res) => {
  const index = await Skincare.find().lean().exec();
  return res.status(200).json({ index });
});

// RENDER

app.get("/", async (req, res) => {
  return res.render("index.ejs");
});

app.get("/views/index.ejs", async (req, res) => {
  return res.render("index.ejs");
});

app.get("/gift.ejs", async (req, res) => {
  return res.render("gift.ejs");
});
app.get("/views/gift.ejs", async (req, res) => {
  return res.render("gift.ejs");
});
app.get("/views/hair.ejs", async (req, res) => {
  return res.render("hair.ejs");
});
app.get("/views/brands.ejs", async (req, res) => {
  return res.render("brands.ejs");
});
app.get("/views/products.ejs", async (req, res) => {
  return res.render("products.ejs");
});
app.get("/views/skincare.ejs", async (req, res) => {
  return res.render("skincare.ejs");
});
app.get("/views/register.ejs", async (req, res) => {
  return res.render("register.ejs");
});
app.get("/register.ejs", async (req, res) => {
  return res.render("register.ejs");
});
app.post("/register.ejs", async (req, res) => {
  return res.render("register.ejs");
});

// /listening server on port
app.listen(2345, async function () {
  await connect();
  console.log("Listening to port 2345");
});
