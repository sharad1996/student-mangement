const User = require('../models/user');
const jwt = require('jsonwebtoken');
const accessTokenSecret = process.env.JWT_SECRET || 'somerandomaccesstoken';
const jwtExpirySeconds = 600;

exports.addUser = async function (req, res, next) {
  const payload = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    fatherName: req.body.fatherName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    country: req.body.country,
    password: req.body.password,
    dob: req.body.dob,
  };
  try {
    // Add new user data
    const response = await User.find({ email: req.body.email })
    if (!response.length) {
      let user = new User({ ...payload });
      user.save();
      res.status(200).json({ msg: 'added user successfully', user });
    }
    else {
      res.status(400).json({ msg: 'email already exists' });
    }
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

exports.getUsers = async function (req, res, next) {
  try {
    // Get all users data
    const response = await User.find();
    if (response) {
      res.status(200).json(response)
    }
    else {
      res.status(400).json({ msg: '' })
    }
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

exports.updateUser = async function (req, res, next) {
  const payload = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    fatherName: req.body.fatherName,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    country: req.body.country,
    dob: req.body.dob,
  };

  try {
    // Update details for matched user
    const user = await User.updateOne(
      { _id: req.params.id },
      { ...payload },
    )
    res.status(200).json({ msg: 'updated' });
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

exports.deleteUser = async function (req, res, next) {
  try {
    // Delete matched user
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ msg: 'deleted' });
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

exports.loginUser = async function (req, res, next) {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email: email, password: password });
    console.log('logged in user', user);
    if (user) {
      // generate an access token
      const token = jwt.sign({ email }, accessTokenSecret, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds,
      })
      res.status(200).json({
        token,
        user
      });
    } else {
      res.status(400).json('Username or password incorrect');
    }
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

exports.validateToken = async function (req, res, next) {
  const { token } = req.headers.token;
  try {

    // verify makes sure that the token hasn't expired and has been issued by us
    result = jwt.verify(token, accessTokenSecret, {
      algorithm: "HS256",
      expiresIn: jwtExpirySeconds,
    });
    req.decoded = result;
    next();
  }
  catch (error) {
    throw new Error(err);
  }
}