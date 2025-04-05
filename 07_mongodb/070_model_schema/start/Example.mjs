import { connect, Schema, model, Mixed } from "mongoose";
import env from "dotenv";
env.config();

connect(process.env.MONGO_URI);
const catSchema = Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true },
  bool: { type: Boolean, default: false, alias: "b" },
  dt: {
    type: Date,
    set: function (newVal) {
      return new Date(newVal);
    },
    get: function (val) {
      return val instanceof Date ? val : new Date(val);
    },
  },
  array: [],
  anything: Mixed,
});
const Cat = model("Cat", catSchema);

const kitty = new Cat();
kitty.name = "Zildjian";
kitty.size = 1;
kitty.dt = "2025/4/5";
kitty.save().then(() => console.log("meow"));
