export const signupSchema = {
    body : 
    {
        type: 'object',
        required : ['email', 'firstName', 'lastName' ,'password'],
        properties :
        {
            firstName: {type: 'string', pattern : '^[a-zA-Z0-9_]+$', minLength : 4, maxLength: 20},
            lastName: {type: 'string', pattern : '^[a-zA-Z0-9_]+$', minLength : 4, maxLength: 20},
            email : {type: 'string', format:'email', maxLength : 320},
            password: {type: 'string', minLength : 8, maxLength: 20}
        }
    }
};

export const loginSchema = {
    body :
    {
        type: 'object',
        required : ['username', 'password'],
        properties :
        {
            username: {type: 'string', pattern : '^[a-zA-Z0-9_]+$', minLength : 4, maxLength: 20},
            password: {type: 'string', minLength : 8, maxLength: 20}
        },
        additionalProperties: false
    }
};
// {
//   firstName: 'string';
//   lastName: 'string';
//   email: 'string';
//   password: 'string';
//   confirmPassword: 'string';
//   gender: 'string';
//   dob: 'string';
// }

export const emailSchema = {
    body :
    {
        type: 'object',
        required : ['email'],
        properties : 
        {
            email : { type: 'number', format : 'email', maxLength : 320 }
        }
    }
}

export const verifyOtpSchema = {
    body :
    {
        type: 'object',
        required : ['email', 'otp'],
        properties : 
        {
            email : { type: 'string', format : 'email', maxLength : 320 },
            otp : {type: 'string',minLength : 6, maxLength : 6}
        }
    }
}

export const resetPasswordSchema = 
{
    body :
    {
        type: 'object',
        required : ['email', 'password', 'newpassword'],
        properties : 
        {
            email : {type: 'string', format:'email', maxLength : 320},
            password: {type: 'string', minLength : 8, maxLength: 20},
            newpassword: {type: 'string', minLength : 8, maxLength: 20},
        }
    }
}
