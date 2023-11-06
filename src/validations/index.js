import Joi from 'joi';

// validation for debtor details
export const validateLogin = (data) => {
    const schema = Joi.object({
        email: Joi.string().
            email({ tlds: { allow: false } }).
            required().
            label('Email').
            messages({ 'string.empty': "email required" }),
        password: Joi.string().required().
            label('password').
            messages({ 'any.required': "password required" }),
        // contact: Joi.string().
        //     required().
        //     max(12).
        //     messages({ 'string.empty': 'Contact number required' }),
        // file: Joi.object().custom((value, helpers) => {
        //     if (!data?.fileName && !value.name) return helpers.message(
        //         'Please select the file');
        //     if (!data.fileName && value.type !==
        //         'application/pdf') return helpers.message(
        //         'The File must be pdf.');
        // }),
        // amount: Joi.number().integer().min(1).required().label('Amount').messages({
        //     'number.min': 'The amount must be grater then 0.',
        //     'number.empty': 'Please enter the invoice amount.',
        // }),
        // due_date: Joi.any().custom((value, helpers) => {
        //     if (isNaN(new Date(value))){
        //         return helpers.message('Please enter the invoice due date.');
        //     }
        // })
    });

    const { error } = schema.validate(data,
        { abortEarly: true, allowUnknown: true });

    return __prepareErrorObject(error?.details);
};

export const validateRegister = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label('Name'),
        email: Joi.string().
            email({ tlds: { allow: false } }).
            required().
            label('Email').
            messages({ 'string.empty': "email required" }),
        password: Joi.string().required().
            label('password').
            messages({ 'any.required': "password required" }),
        confirmPassword: Joi.any().equal(Joi.ref('password'))
        .required()
        .label('Confirm password')
        .options({ messages: { 'any.only': '{{#label}} does not match'} })
    });

    const { error } = schema.validate(data,
        { abortEarly: true, allowUnknown: true });

    return __prepareErrorObject(error?.details);
}


// prepare error object of validation
const __prepareErrorObject = ((errors) => {
    let __errorObject = {};
    errors?.forEach(
        (_error) => __errorObject[_error.path[0]] = _error.message.replaceAll(
            '"', ''));
    return __errorObject;
});

export const __isErrors = (errors) => !(Object.keys(errors).length === 0 && errors.constructor === Object);

