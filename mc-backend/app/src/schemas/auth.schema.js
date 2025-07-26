export const signupSchema = {
    body : 
    {
        type: 'object',
        required : ['email', 'username' ,'password'],
        properties :
        {
            username: {type: 'string', pattern : '^[a-zA-Z0-9_]+$', minLength : 4, maxLength: 20},
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

export const emailSchema = {
    body :
    {
        type: 'object',
        required : ['email'],
        properties : 
        {
            verificationCode : { type: 'number', format : 'email', maxLength : 320 }
        }
    }
}

export const verifyOtpSchema = {
    body :
    {
        type: 'object',
        required : ['verificationCode'],
        properties : 
        {
            verificationCode : {type: 'number',minLength : 6, maxLength : 6}
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
