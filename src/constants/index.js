import {AiOutlineHome,AiOutlineMail,AiOutlineSetting} from 'react-icons/ai'
import {RiFileListLine} from 'react-icons/ri' 
import {BiHelpCircle} from 'react-icons/bi'

export const NAV_ITEMS = [
    {id:"nav-item-1",label:"home",path:'',icon:AiOutlineHome},
    {id:"nav-item-2",label:"orders",path:'',icon:RiFileListLine},
    {id:"nav-item-3",label:"notification",path:'',icon:AiOutlineMail,count:2},
    {id:"nav-item-4",label:"help & support",path:'',icon:BiHelpCircle},
    {id:"nav-item-5",label:"settings",path:'',icon:AiOutlineSetting},
]


