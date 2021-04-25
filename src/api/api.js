import Axios from "axios"
import {SIGNUP_URL,LOGIN_URL,DASHBOARD_URL, FORMAL_URL, CONCISENESS_URL, INFORMAL_URL, REWRITE_URL, FIRST_TO_THIRD_URL,SAVE,LIST_DOCS} from './url'

export const SignupApi = (data)=>{
    return Axios.post(SIGNUP_URL,data,{
        timeout:10000,
        headers:{
            // ...data.getHeaders()
            "Content-Type":"multipart/form-data",
        }
    })
}

export const LoginApi = (data)=>{
    return Axios.post(LOGIN_URL,data,{
        timeout:10000,
        headers:{
            "Content-Type":"multipart/form-data"
        }
    })
}

export const formalAction = (data)=>{
    return AxioWrapper(FORMAL_URL,data)
}
export const concisenessAction = (data)=>{
    return AxioWrapper(CONCISENESS_URL,data)
}
export const informalAction = (data)=>{
    return AxioWrapper(INFORMAL_URL,data)
}
export const rewriteAction = (data)=>{
    return AxioWrapper(REWRITE_URL,data)
}

export const firstToThirdAction = (data)=>{
    return AxioWrapper(FIRST_TO_THIRD_URL,data)
}
export const saveAction = (data)=>{
    return AxioWrapper(SAVE,data)
}
export const getAllDocAction = (data)=>{
    return AxioWrapper(`${LIST_DOCS}${data||"all"}`,data,"GET")
} 

const AxioWrapper = (url,data,type="POST")=>{
    return Axios({
        method:type,
        url,
        data,
        headers:{
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Authorization":"Bearer "+localStorage.getItem('access_token'),
        },
    })
}