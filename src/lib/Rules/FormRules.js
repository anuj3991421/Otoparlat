const Rules = {
    login:[
        {
            field: 'email', 
            method: 'isEmpty', 
            validWhen: false, 
            message: 'Email is required.' 
        },
        { 
            field: 'email',
            method: 'isEmail', 
            validWhen: true, 
            message: 'That is not a valid email.'
        },
        { 
            field: 'password', 
            method: 'isEmpty', 
            validWhen: false, 
            message: 'Password is required.'
        }
    ],
    forgotpassword:[
        { 
          field: 'email', 
          method: 'isEmpty', 
          validWhen: false, 
          message: 'Email is required.' 
        },
        { 
          field: 'email',
          method: 'isEmail', 
          validWhen: true, 
          message: 'That is not a valid email.'
        }
    ],
    addPromotion:[
        {
            field: 'price',
            method: 'isEmpty',
            validWhen: false, 
            message: 'Price is required.'  
        },
        {
            field: 'benefits',
            method: 'isEmpty',
            validWhen: false, 
            message: 'Benefits is required.'  
        },
        {
            field: 'generated_code',
            method: 'isEmpty',
            validWhen: false, 
            message: 'Code is required.' 
        },
        {
            field: 'pcode',
            method: 'isEmpty',
            validWhen: false, 
            message: 'Promotion Code is required.' 
        }
    ],
    addQuestion:[
        {
            field: 'title',
            method: 'isEmpty',
            validWhen: false, 
            message: 'Title is required.'  
        },
        {
            field: 'explanation',
            method: 'isEmpty',
            validWhen: false, 
            message: 'Explanation is required.'  
        },
    ]
}

export default Rules;