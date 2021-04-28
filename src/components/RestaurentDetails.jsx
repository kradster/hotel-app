import React from 'react'
import { useContext } from 'react';
import { BiGlobe} from 'react-icons/bi';
import styled from 'styled-components'
import { RestaurentContext } from '../Context/RestaurentContext';
import { Headings } from './Categories'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {MdPhone} from 'react-icons/md'

const DetailsWrapper = styled.div`
    display:flex;
    gap:2rem;
    opacity:0;
    animation:scale 1s ease-in forwards;


    @keyframes scale {
        from{
            opacity:0;
            transform:translateY(5rem);
        }
        90%{
            transform:translateY(0rem);
        }
        to{
            opacity:1;
        }
    }

`;

const Details = styled.div`
    flex:1;
`;

const Content = styled.p`
        margin:0;
        font-size:1.3rem;
        color:#626264;
`

const ContentLink = styled.a`
    font-size:1.3rem;
    color:#626264;


`;

const RestaurentImage = styled.div`
    margin-top:2rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16));
    border-radius: 16px;
    overflow:hidden;
    flex:1;
    height:296px;
    img{
        width:120%;
    }

`

const Info = styled.div`
    margin-top:1.5rem;
`

const ContentInfo = styled.div`
    margin-bottom:1.5rem;
    display:flex;
    align-items:center;
    svg{
        font-size:2rem;
        color:#626264;
        margin-right:1rem;
    }
`



const RestaurentDetails = () => {
    const {singleRestaurent} = useContext(RestaurentContext)
    console.log('_singleRestaurent_',singleRestaurent);
    // contactNumber: "+447987654344"
// id: 2
// openingHours: "Mon - Thu: 10:30AM - 11:00 PM, Fri - Sat: 10:30 AM - 06:00 PM"
// restaurantDescription: "From the outside it looks rustic, pleasant and snug. Hardwooden planks and stone pillars make up most of the building's outer structure.\nIt's difficult to see through the darkened windows, but the passionate voices from within can be felt outside."
// restaurantImage: "https://wallpapercave.com/wp/wp1874157.jpg"
// restaurantName: "Burger Mania"
// websiteUrl: "http://www.burgermania.com"
    
    return (
        <DetailsWrapper>
            <Details>
                <Headings>{singleRestaurent.restaurantName}</Headings>
                <Content>{singleRestaurent.restaurantDescription}</Content>
                <Info>
                    <ContentInfo>
                        <AiOutlineClockCircle/>
                        <Content>{singleRestaurent.openingHours}</Content>
                    </ContentInfo>
                    <ContentInfo> 
                        <MdPhone/>
                        <Content>{singleRestaurent.contactNumber}</Content>
                    </ContentInfo>
                    <ContentInfo> 
                        <BiGlobe/>

                        <ContentLink href={singleRestaurent.websiteUrl}>{singleRestaurent.websiteUrl}</ContentLink>
                    </ContentInfo>
                </Info>
            </Details>
            <RestaurentImage>
                <img src={singleRestaurent.restaurantImage} alt={singleRestaurent.restaurantName} />
            </RestaurentImage>
        </DetailsWrapper>
    )
}

export default RestaurentDetails
