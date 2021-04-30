import React,{useState} from 'react'
import { useContext } from 'react';
import { BiGlobe} from 'react-icons/bi';
import styled from 'styled-components'
import { RestaurentContext } from '../Context/RestaurentContext';
import { Headings } from './Categories'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {MdPhone} from 'react-icons/md'
import { PlaceHolderMenus } from './PlaceHolderMenu';
import {Cuisine,CuisineWrapper} from './Navbar'
import { useEffect } from 'react';

import {ImFileEmpty} from 'react-icons/im'



const DetailsWrapper = styled.div`
    display:flex;
    flex-direction:column;
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

const RestaurentImage = styled.div`
    display:block;
    margin-top:2rem;
    background-image:${({bgUrl})=>`url(${bgUrl})`};
    background-size: cover;
    border-radius: 16px;
    overflow:hidden;
    flex:1;
    height:296px;
    
`

const DetailsContainer = styled.div`
    display:flex;
    gap:2rem;

    @media screen and (max-width:425px){       
        flex-direction:column-reverse;
        ${RestaurentImage}{
            flex:none;
            margin-top:-2rem;
            height:15rem;

        }
    }

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

export const ErrorMessage = styled.h2`
    margin:5rem auto;
    color: #fb6d3a;
    background-color: #fb6d3a2b;
    padding: 1rem 2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    svg{
        font-size:4rem;
        margin-right:1rem;
        fill: #fb6d3a;

    }
`;



const RestaurentDetails = () => {
    const {singleRestaurent,isMenuLoading,setisMenuLoading} = useContext(RestaurentContext)
    const CuisinsArray = ["All","Baked (2)","Sweet (4)","Hot Dish (29)"] 
    const [ActiveCuisine, setActiveCuisine] = useState(CuisinsArray[0])
    

    useEffect(() => {
        setTimeout(()=>{
            setisMenuLoading(false)
        },3000)
    }, [])

    return (
        <DetailsWrapper>
            <DetailsContainer>
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
            <RestaurentImage bgUrl={singleRestaurent.restaurantImage}>
                {/* <img src={singleRestaurent.restaurantImage} alt={singleRestaurent.restaurantName} /> */}
            </RestaurentImage>
            </DetailsContainer>
            <CuisineWrapper>
                    {
                        CuisinsArray.map((cu,i)=>(
                            <Cuisine
                             key={`cu-key-${i}`} 
                             isMenu={ActiveCuisine===cu}
                             onClick={e=>setActiveCuisine(cu)}
                             >{cu}</Cuisine>

                        ))
                    }
                </CuisineWrapper>

            <Headings>Menus</Headings>
            <DetailsContainer>
                {
                    isMenuLoading ?
                    <>
                    <PlaceHolderMenus delay="1"/>
                    <PlaceHolderMenus delay="2"/>
                    <PlaceHolderMenus delay="3"/>
                    </>
                    :<ErrorMessage><ImFileEmpty/> Menu Not Found</ErrorMessage>
                }
            </DetailsContainer>
        
        </DetailsWrapper>
    )
}

export default RestaurentDetails
