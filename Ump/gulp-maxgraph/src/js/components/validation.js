import { validateForms } from '../functions/validate-forms.js';

const login = [
    {
        ruleSelector: '.input-email',

        rules: [
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните Email!'
            },
            {
                rule: 'email',
                value: true,
                errorMessage: 'Заполните верный Email'
            }
        ]
    },
    {
        ruleSelector: '.input-password',

        rules: [
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните пароль!'
            },
            {
                rule: 'password',
                value: true,
                errorMessage: 'Заполните верный пароль'
            }
        ]
    },
];

const registration = [
    {
        ruleSelector: '.input-surname',

        rules: [
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните имя!'
            },
        ]
    },
    {
        ruleSelector: '.input-name',

        rules: [
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните имя!'
            },
        ]
    },
    {
        ruleSelector: '.input-email',

        rules: [
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните Email!'
            },
            {
                rule: 'email',
                value: true,
                errorMessage: 'Заполните верный Email'
            }
        ]
    },
    {
        ruleSelector: '.input-date',

        rules: [
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните Дату рождения'
            },
        ]
    },
    {
        ruleSelector: '.input-password',

        rules: [
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните пароль!'
            },
            {
                rule: 'password',
                value: true,
                errorMessage: 'Заполните верный пароль'
            }
        ]
    },
    {
        ruleSelector: '.input-password1',

        rules: [
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните пароль!'
            },
            {
                rule: 'password',
                value: true,
                errorMessage: 'Заполните верный пароль'
            }
        ]
    },

];

const afterForm = () => {
    console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.login__form', login, afterForm);
validateForms('.registration__form', registration, afterForm);