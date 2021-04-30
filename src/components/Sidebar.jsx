import React from 'react'
import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '../constants'
import Logo from '../assets/images/path410logo.png'
import { BiTimeFive} from 'react-icons/bi'
import {BsArrowRightShort} from 'react-icons/bs'
import {MdClose, MdUnfoldMore} from 'react-icons/md'
import styled from 'styled-components'
import { useState } from 'react'
import { useContext } from 'react'
import { RestaurentContext } from '../Context/RestaurentContext'
import { set } from 'lodash'


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
    
    span+span{
        background:#503E9D;
        color:#FFFFFF;
        padding:0.1rem 0.5rem;
        border-radius:1rem;
        margin-left:auto;
    }

    }
    .active a{
        color:#fff;
    }  

   

`;

const OrderStatus = styled.div`
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


`;

const Footer = styled.div`
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

`;

const HeaderBar = styled.div`
display:flex;
    align-items:center;
    margin:1rem 0 2rem 0;
    font-weight:700;
    font-size:1.2rem;
    img{
        width:2.5rem;
        margin-right:0.5rem;
    }

`;

const CloseButton = styled.div`
    position:absolute;
    right:-20vw;
    top:10px;
    background-color:#FFFFFF;
    width:4rem;
    height:4rem;
    display:flex;
    border-radius:50%;
    box-shadow: 2px 2px 5px 0px #503e9d42;
    svg{
        margin:auto;
        font-size:2.5rem;
    }
    @media screen and (min-width:425px){
        display:none;
    }

`;


const SidebarContainer = styled.aside`
width:22rem;
height:100%;
background-color: #F7F7F7;
padding:1rem;
display:flex;
flex-direction:column;
border-radius: 0px 24px 24px 0px;

@media screen and (max-width:768px) and  (min-width:426px){
    width:7rem;

    & ${Menu} {
        a {
            justify-content: center;
        }
        span{
            display:none;
        }
    }

    & ${OrderStatus} {
        display:none;

    }

    & ${HeaderBar}{
        span{
            display:none;
        }
    }

    &  ${Footer} {
        margin-top:auto;
        p{
            font-size:0;
            background-color: #503E9D;
            color: #ffffff;
            width: 4rem;
            height: 4rem;
            border-radius:2rem;
            font-weight:100;
            text-align:center;
        }
        p:first-letter{
            font-size:3rem;
            
        }
        span,svg{
            display:none;
        }
        
        
    }
    
    
}

@media screen and (max-width:425px){
    display:flex;
    width:75vw;
    position:fixed;
    z-index:10;
    & ${Menu} {
        li+li{
            margin-top:1rem;
        }
    }

    & ${OrderStatus} {
        display:none;

    }
    &  ${Footer} {
        margin-top:auto;
    }



    &{
        transform:translateX(-50vw);
        display:${({show})=> show===true?`flex`:`none`};
        animation:slideRight .5s ease-in-out forwards;
    }

    
    
    @keyframes slideRight {
        from{transform:translateX(-50vw);}
        to{transform:translateX(0vw);}
    }

    @keyframes slideLeft {
        from{transform:translateX(0vw);}
        to{transform:translateX(-100vw);}
    }
}

`

const SidebarContainerWrapper = styled.div`
    width:22rem;
    height:100vh;
    z-index:9;
    top:0;
    left:0;
    backdrop-filter: blur(12px);

    @media screen and (min-width:426px) and (max-width:768px) {
    width:7rem;
    }

    

    @media screen and (max-width:425px){
        position:fixed;
        width:100vw;
        display:${({show})=> show===true?`block`:`none`};
        animation:op .3s forwards ;
        @keyframes op {
            from{ opacity:0;}
            to{opacity:1;}
        }
        @keyframes oprev {
            from{ opacity:1;}
            to{opacity:0;}
        }
    }

    



       


`;



const Sidebar = () => {
    const {openMenu,setopenMenu} = useContext(RestaurentContext)
    const [Active, setActive] = useState("nav-item-1")

    

    return (
        <SidebarContainerWrapper show={openMenu}>
            <SidebarContainer show={openMenu} >
                <CloseButton onClick={e=>setopenMenu(false)}>
                    <MdClose/>
                </CloseButton>
                <HeaderBar>
                    <img src={Logo} alt="logo"/>
                    <span>Pomo & co</span>
                </HeaderBar>
            <Menu>
                {NAV_ITEMS.map(n=>(
                <li onClick={e=>setActive(n.id)} className={`${n.id===Active?"active":""}`} key={n.id}>
                    <Link to={n.path}>
                        <n.icon size="20" />
                        <span>{n.label}</span>
                        {n.count && <span> {n.count} </span>}
                    </Link>
                </li>

                ))}
            </Menu>
            <OrderStatus>
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


            </OrderStatus>
                <Footer>
                    <div>
                        <p>Mark Clarke</p>
                        <span>markclarke@gmail.com</span>
                    </div>
                    <MdUnfoldMore size="32px"/>
                </Footer>
        </SidebarContainer>
        </SidebarContainerWrapper>
    )
}

export default Sidebar
