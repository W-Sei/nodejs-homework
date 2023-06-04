const { Schema, model } = require("mongoose");
const { handleMongooseErr } = require("../helpers");
const Joi = require("joi");

const phoneRegexp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const addSchema = Joi.object({
    name: Joi.string().min(2)
    .max(30).required().messages({
        "any.required": `name must exist`
    }),
    email: Joi.string().required().messages({
        "any.required": `email must exist`
    }),
    phone: Joi.string().pattern(phoneRegexp).required().messages({
        "any.required": `phone must exist`
    }),
    favorite: Joi.boolean().required().messages({
        "any.required": `field favorite missing`
    }),
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required().messages({
        "any.required": `field favorite missing`
    }),
});

const schemas = {
    addSchema,
    updateFavoriteSchema,
};

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
        required: [true, 'Set email for contact'],
    },
    phone: {
        type: String,
        match: phoneRegexp,
        required: [true, 'Set phone for contact'],
    },
    favorite: {
        type: Boolean,
        default: false,
    },
}, { versionKey: false, timestamps: true });

contactSchema.post("save", handleMongooseErr);

const Contact = model("contact", contactSchema);

module.exports = { Contact, schemas };