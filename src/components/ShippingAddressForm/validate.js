import * as Yup from 'yup'

const schema = Yup.object().shape({
    type: Yup.string()
        .min(2, 'Name is too short!')
        .max(50, 'Name is too long!')
        .required('Required'),
    name: Yup.string()
        .min(2, 'Name is too short!')
        .max(50, 'Name is too long!')
        .required('Required'),
    phone: Yup.string()
        .length(9, 'Invalid phone number!')
        .required('Required'),
    city: Yup.string()
        .min(2, 'City is too short!')
        .max(50, 'City is too long!')
        .required('Required'),
    state: Yup.string()
        .min(2, 'State is too short!')
        .max(50, 'State is too long!')
        .required('Required'),
    line1: Yup.string()
        .min(2, 'Address line is too short!')
        .max(150, 'Address line is too long!')
        .required('Required'),
})


export default schema