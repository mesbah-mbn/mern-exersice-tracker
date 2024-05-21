const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        trim: true, //remove some white space from end of username
        minlength: 3 //minmem length should be 3
    }
}, {
    timestamps: true,
});

const User = mongoose.model("User", userSchema);
module.exports = User;