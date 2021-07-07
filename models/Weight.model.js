const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const weightSchema = new Schema({
  date: {
   type: String,
   required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
}
);

const Weight = model("Weight", weightSchema);

module.exports = Weight;
