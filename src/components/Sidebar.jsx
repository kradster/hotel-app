import React from 'react'
import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '../constants'
import Logo from '../assets/images/path410logo.png'
import { BiTimeFive} from 'react-icons/bi'
import {BsArrowRightShort} from 'react-icons/bs'
import {MdClose, MdUnfoldMore} from 'react-icons/md'
import styled from 'styled-components'
import { useState } from 'react'

const SidebarContainer = styled.aside`
width:19rem;
height: 100%;
background-color: #F7F7F7;
padding:1rem;
display:flex;
flex-direction:column;
border-radius: 0px 24px 24px 0px;

.header{
    display:flex;
    align-items:center;
    margin:1rem 0 2rem 0;
    font-weight:700;
    font-size:1.2rem;
    img{
        width:2.5rem;
        margin-right:0.5rem;
    }
}


.order_status{
    background: #FFFFFF;
    box-shadow:
    0px 8px 20px -3px #0000000d,
    0px 18px 0px -4px #fff,
    0px 33px 45px -20px #00000029,
    0px 35px 0px -10px #fff,
    0px 28px 32px -4px rgba(0, 0, 0, 0.2);

    
    border-radius: 20px;
    display:flex;
    flex-direction:column;
    padding:2rem;
    align-items:center;
    margin:auto 1rem 0 1rem;
    position:relative;

    .close {
        position:absolute;
        right:1rem;
        top:1rem;
        font-size:1.5rem;
    }

    button{
        background: #503E9D;
        border-radius: 10px;
        border:0;
        outline:0;
        height:3rem;
        color:#fff;
        border-radius:10px;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        position:relative;
        font-weight:700;
        svg{
           position:absolute;
           right:10px;
           font-size:2rem;
        }
    }

    div{
        width:3rem;
        height:3rem;
        display:flex;
        align-items:center;
        justify-content:center;
        background: rgba(251, 109, 58, 0.1);
        border-radius: 12px;
        svg{
            color:#FB6D3A;
        }
        
    }

    p.heading{
        font-size:0.9rem;
        color:#182135;
        font-weight:600;
        margin:1.5rem 0 2rem 0;
    }

    p{
        margin:0;
        font-size:0.8rem;
        font-weight:400;
        color:#626264;
    }

    button{
        margin:2rem 0 0 0;
    }
    

}



.footer{
    margin-top:5rem;
    margin-bottom:1rem;
    display:flex;
    align-items:center;

    p{
        font-size:1rem;
        margin:0;
        font-weight:700;
    }
    span{
        font-size:0.8rem;
        color:#626264;
    }

    svg{
        margin-left:auto;
    }
}

`
const Menu = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    li{
        width:100%;
        border-radius: 12px;
        padding:0.8rem 1rem;
    }
    li.active{
        background:#503E9D;
    }
    a{
        color:#626264;
        text-decoration:none;
        text-transform: capitalize;
        font-weight:700;
        display: flex;
        align-items: center;
    }

    span{
        margin-left:20px;
    }

    }
    .active a{
        color:#fff;
    }  

   

`;


const Sidebar = () => {

    const [Active, setActive] = useState("nav-item-1")
    return (
        <SidebarContainer>
            <div className="header">
                <img src={Logo} alt="logo"/>
                <span>Pomo & co</span>
            </div>
        <Menu>
            {NAV_ITEMS.map(n=>(
            <li onClick={e=>setActive(n.id)} className={`${n.id===Active?"active":""}`} key={n.id}>
                <Link to={n.path}>
                    <n.icon size="20" />
                    <span>{n.label}</span>
                </Link>
            </li>

            ))}
        </Menu>
        <div className="order_status">
            <span className="close">
             <MdClose/>
            </span>
            <div>
                <BiTimeFive size="24" />
            </div>
            <p className="heading">Your Order is now Ready</p>
            <p>Splint Doumo</p>
            <p>Order Id: #ED564F</p>

            <button>Details <BsArrowRightShort/> </button>


        </div>
            <div className="footer">
                <div>
                    <p>Mark Clarke</p>
                    <span>markclarke@gmail.com</span>
                </div>
                <MdUnfoldMore size="32px"/>
            </div>
    </SidebarContainer>
    )
}

export default Sidebar
