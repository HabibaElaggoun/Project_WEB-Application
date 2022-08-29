const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("email", "This field should be a valid email").isEmail(),
  check("password", "Password should have at least 6 char").isLength({
    min: 5,
  }),
  check("firstName", "This field is required").notEmpty(),
];

exports.loginRules = () => [
  check("email", "This field should be a valid email").isEmail(),
  check("password", "Password should have at least 6 char").isLength({
    min: 5,
  }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  next();
};