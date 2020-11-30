var mongoose = require("mongoose");

const reservationSchema = require("./reservation").schema;

var tableSchema = new mongoose.Schema({
  name: String,
  capacity: Number,
  isAvailable: Boolean,
  professor: String,
  reservation: {
    required: false,
    type: reservationSchema
  }
});
var Table = mongoose.model("Table", tableSchema);

module.exports.model = Table;
module.exports.schema = tableSchema;
