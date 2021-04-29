import React,{useEffect} from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { getAllRestaurantsAction } from '../api/api'
import { RestaurentContext } from '../Context/RestaurentContext'
import { Headings } from './Categories'
import {PlaceHolderCards} from './PlaceHolderCards'


const RestaurantsHeadings = styled(Headings)`
    margin-top:3rem;
`

const RestaurantsCardsWrapper = styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content:flex-start;
    gap:2.5rem;
`;

const Card = styled.div`
flex-basis:27rem;
flex-grow:1;
flex-shrink:1;
// max-width:27rem;
display:flex;
flex-direction:column;
overflow:hidden;
opacity:0;
cursor:pointer;
animation:scale 1s .${p=>p.delay}s ease-in forwards;

@media screen and (min-width:769px){
        flex-grow:0;
}

p{
    margin:0;
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
overflow:hidden;
border-radius: 16px;

img{
    width:120%;
}

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
        color:#182135;
    }
    span{
        width: 73px;
        height: 24px;
        weight:600;
        background:${({isOpen})=>isOpen?`rgba(80, 62, 157, 0.1)`:`rgba(251, 109, 58, 0.1);`};
        border-radius: 4px;
        display:flex;
        align-items:center;
        justify-content:center;
        color:${({isOpen})=>isOpen?`503E9D`:`#FB6D3A`};

    }
`;

const RestaurantsCardsItems = ({data})=>{
    const {getRestaurent} = useContext(RestaurentContext)

    return (
        <Card delay={data.id} onClick={r=>getRestaurent(data.id)} >
            <CardImage>
                <img src={data.restaurantImage} />
            </CardImage>
            <CardHeading isOpen={data.isOpen}>
                <p>{data.restaurantName}</p>
                <span>{data.isOpen?"Open Now":"Closed"}</span>
            </CardHeading>
            <p>{data.restaurantDescription.slice(0,200)}... </p>
        </Card>
    )
}


const RestaurantsCards = () => {
    
    const {allRestaurants,isLoading} = useContext(RestaurentContext)
    
    
    return (
        <>
            <RestaurantsHeadings>Restaurants</RestaurantsHeadings>
        <RestaurantsCardsWrapper>
            {
               isLoading===true
               ?<>
                <PlaceHolderCards delay="1" />
                <PlaceHolderCards delay="2" />
                <PlaceHolderCards delay="3" />
               </>
               :<>
                {
                    allRestaurants.map((r,i)=>(
                        <RestaurantsCardsItems  
                        key={`res-key-${r.id}-${i}`} 
                        data={r} 
                    />
                    ))
                }
               </> 
            }
             
        </RestaurantsCardsWrapper>
        </>
    )
}

export default RestaurantsCards
