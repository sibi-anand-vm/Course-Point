const app = require('express')();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const users = require('./models/signup');

mongoose.connect("mongodb+srv://iamvijay9080:ACCOUNT_LOCk42@cluster0.0f9r0x0.mongodb.net/practice02?retryWrites=true&w=majority");

const Signupdetailssubmit = (props) => {
  async function insert() {
    await users.create({
      name: props.username,
      mail: props.mail,
      password:props.password,
    });
  }

  insert();
};

http.listen(3001, function () {
  console.log('Server is running');
});

module.exports = Signupdetailssubmit;

