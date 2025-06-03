import joi from "joi";

export const login_schema = joi.object({
  email: joi.string().email().required(),
  senha: joi.string().required(),
});
