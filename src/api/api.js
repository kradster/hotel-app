import Axios from "axios"
import {GET_ALL_RESTAURANTS,GET_RESTAURANT_DETAILS,GET_MENU} from './url'


export const getAllRestaurantsAction = ()=>{
    return AxioWrapper(GET_ALL_RESTAURANTS)
}
export const getRestaurantDetailsAction = ()=>{
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