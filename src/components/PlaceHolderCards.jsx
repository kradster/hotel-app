import React,{useEffect} from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { getAllRestaurantsAction } from '../api/api'
import { RestaurentContext } from '../Context/RestaurentContext'
import { Headings } from './Categories'



const PlaceHolderCardsWrapper = styled.div`
flex-basis:27rem;
flex-grow:1;
flex-shrink:1;
// max-width:27rem;
display:flex;
flex-direction:column;
overflow:hidden;
opacity:0;
cursor:pointer;
animation:scale 1s .${p=>p.delay}s infinite ease-in;

@media screen and (min-width:769px){
        flex-grow:0;
}

p{
    margin:0;
    background-color:#F7F7F7;
    color:#F7F7F7;

}

@keyframes scale {
    from{
        opacity:0;
        transform:scale(1.05);
    }
    90%{
        transform:scale(1);
    }
    to{
        opacity:1;
    }
}



`;

const CardImage = styled.div`
width:100%;
height: 176px;
background-color:#F7F7F7;
overflow:hidden;
border-radius: 16px;

`;

const CardHeading = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:1rem 0;
    p{
        margin:0;
        font-weight:700;
        font-size:1.2rem;
        color:#F7F7F7;
        background-color:#F7F7F7;

    }
    span{
        width: 73px;
        height: 24px;
        weight:600;
        background:${({isOpen})=>isOpen?`rgba(80, 62, 157, 0.1)`:`rgba(251, 109, 58, 0.1);`};
        color:${({isOpen})=>isOpen?`rgba(80, 62, 157, 0.1)`:`rgba(251, 109, 58, 0.1);`};
        border-radius: 4px;
        display:flex;
        align-items:center;
        justify-content:center;

    }
`;


export const PlaceHolderCards = ({delay})=>{
    return (
        <PlaceHolderCardsWrapper delay={delay} >
            <CardImage/>
            <CardHeading>
                <p>Place holder heading</p>
                <span>open</span>
            </CardHeading>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non sapiente voluptate deserunt? Quibusdam tempore hic dolorum voluptates quos expedita assumenda? Quos eligendi ipsum quae eius sunt doloremque ullam consequuntur nesciunt?</p>
        </PlaceHolderCardsWrapper>
    )
}
