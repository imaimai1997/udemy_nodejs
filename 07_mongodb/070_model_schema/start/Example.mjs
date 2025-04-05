import { connect, Schema, model, Mixed } from "mongoose";
import env from "dotenv";
env.config();

mongoose.connect(process.env.MONGO_URI);
const catShema = Schema({
  name: String,
  size: Number,
  bool: Boolean,
  dt: Date,
  array: [],
  anything: Mixed,
});
const Cat = model("Cat", catShema);

const kitty = new Cat();
kitty.name = "Zildjian";
kitty.save().then(() => console.log("meow"));
