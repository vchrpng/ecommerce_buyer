import { alertConstants } from '../constants/AlertConstants'


export const alertActions =  { success , error , clear } 


const success = msg => ({
    type : alertConstants.SUCCESS
})


const error = msg = ({
    type : alertConstants.ERROR
})


const clear = () => ({
    type : alertConstants.CLEAR
})