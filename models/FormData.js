const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String
})
const caloriesschema = new mongoose.Schema({
    foodname: String,
    quantity:String
})
const FormDataModel1 = mongoose.model('calories', caloriesschema);
const FormDataModel = mongoose.model('log_reg_form', FormDataSchema);
module.exports = FormDataModel1;
module.exports = FormDataModel;
