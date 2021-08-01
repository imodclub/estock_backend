const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: { type: String },
  password: { type: String },
});

const AdminAPI = mongoose.model("adminreg", adminSchema, "adminreg");
module.exports = AdminAPI;
