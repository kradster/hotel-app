import Axios from "axios"
import {GET_ALL_RESTAURANTS,GET_RESTAURANT_DETAILS,GET_MENU} from './url'


export const formalAction = ()=>{
    return AxioWrapper(GET_ALL_RESTAURANTS)
}
export const concisenessAction = ()=>{
    return AxioWrapper(GET_RESTAURANT_DETAILS)
}
export const informalAction = ()=>{
    return AxioWrapper(GET_MENU)
}

const AxioWrapper = (url,data,type="GET")=>{
    return Axios({
        method:type,
        url,
        data,
    })
}