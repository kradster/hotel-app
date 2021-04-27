import React,{useEffect} from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { getAllRestaurantsAction } from '../api/api'
import { Headings } from './Categories'


const RestaurantsHeadings = styled(Headings)`
    margin-top:3rem;
`

const RestaurantsCardsWrapper = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap:2.5rem;
`;

const Card = styled.div`
width:27rem;
display:flex;
flex-direction:column;
overflow:hidden;
opacity:0;
animation:scale 1s .${p=>p.delay}s ease-in forwards;

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
        font-size:1.5rem;
        color:#182135;
    }
    span{
        width: 73px;
        height: 24px;
        background:${({isOpen})=>isOpen?`rgba(80, 62, 157, 0.1)`:`rgba(251, 109, 58, 0.1);`};
        border-radius: 4px;
        display:flex;
        align-items:center;
        justify-content:center;
        color:${({isOpen})=>isOpen?`503E9D`:`#FB6D3A`};

    }
`;

const RestaurantsCardsItems = ({data})=>{
//     id: 2
// isOpen: true
// restaurantCategory: "[\"Baked\",\"Hot Dish\"]"
// restaurantCuisine: "[\"Fast Food\",\"American Food\",\"Dessert\"]"
// restaurantDescription: "From the outside it looks rustic, pleasant and snug. Hardwooden planks and stone pillars make up most of the building's outer structure.\nIt's difficult to see through the darkened windows, but the passionate voices from within can be felt outside."
// restaurantImage: "https://wallpapercave.com/wp/wp1874157.jpg"
// restaurantName: "Burger Mania"
    return (
        <Card delay={data.id} >
            <CardImage>
                <img src={data.restaurantImage} />
            </CardImage>
            <CardHeading isOpen={data.isOpen}>
                <p>{data.restaurantName}</p>
                <span>{data.isOpen?"Open Now":"Closed"}</span>
            </CardHeading>
            <p>{data.restaurantDescription}</p>
        </Card>
    )
} 

const RestaurantsCards = () => {
    
    const [allRestaurants, setallRestaurants] = useState([])
    
    useEffect(() => {
        getAllRestaurantsAction().then(d=>{
            setallRestaurants(d.data.allRestaurants);
        })
    }, [])

    return (
        <>
            <RestaurantsHeadings>Restaurants</RestaurantsHeadings>
        <RestaurantsCardsWrapper>
            {
                allRestaurants.map(r=>(
                    <RestaurantsCardsItems key={`res-key-${r.id}`} data={r} />
                ))
            }
            
        </RestaurantsCardsWrapper>
        </>
    )
}

export default RestaurantsCards
