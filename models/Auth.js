const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().trim().min(2).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().trim().min(5).max(150).required(),
  github: Joi.string()
    .uri({
      scheme: ["https"],
    })
    .required(),
  linkedin: Joi.string()
    .uri({
      scheme: ["https"],
    })
    .required(),
  image: Joi.string()
    .uri({
      scheme: ["https"],
    })
    .required(),
});

module.exports = userSchema;
