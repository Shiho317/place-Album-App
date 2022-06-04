const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema(
  {
    useremail: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
      min: 3,
      max: 60,
    },
    desc: {
      type: String,
      required: true,
      min: 3
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    images: {
      type: String,
      required: false
    },
    long: {
      type: Number,
      required: true
    },
    lat: {
      type: Number,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model("Pin", PinSchema);
