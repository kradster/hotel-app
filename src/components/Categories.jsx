import React from 'react'
import styled from 'styled-components'

import c1_img from '../assets/images/category/Logocat_baked.png'
import c2_img from '../assets/images/category/Logocat_biking.png'
import c3_img from '../assets/images/category/Logocat_pizzahut.png'
import c4_img from '../assets/images/category/Logocat_macd.png'
import { IconWrapper } from './Navbar'
import { useContext } from 'react'
import {AiFillAppstore} from 'react-icons/ai'

import { RestaurentContext } from '../Context/RestaurentContext'

export const Headings = styled.p`
    color:#182135;
    font-size:2rem;
    font-weight:700;
    margin-bottom:2rem;
    @media screen and (max-width:425px){
    margin-bottom:1rem;
    }

`;

export const CategoriesWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;

`

export const CategoryItem = styled.div`
    display:flex;
    align-items:center;
    background-color:${({isActive})=> isActive?`#F7F7F7`:`#FFFFFF` };
    border-radius:1rem;
    padding:0 0.7rem 0 0.5rem;
    cursor:pointer;
    & + & {
        margin-left:3.5rem;
    }
    transition: all .3s ease-in-out;
    &:hover{
        ${({noHover})=> !noHover?`background-color:#F7F7F7`:`background-color:#FFFFFF`  };
    }
    p {
        font-weight:700;
        margin:0 1rem 0 1rem;
        font-size:1.3rem;
    }
    span+p {
        margin:0 0 0 0.5rem;
    }
    @media screen and (max-width:425px){
        & + & {
            margin-left:0.5rem;
        }
        
        height:48px;
    }

`;



const CATEGORIES = [
    {id:"cat_1",img:c1_img,lable:"Baked"},
    {id:"cat_2",img:c2_img,lable:"Sweet"},
    {id:"cat_3",img:c3_img,lable:"Hot Dish"},
    {id:"cat_4",img:c4_img,lable:"Fast Food"},
    {id:"cat_5",img:c4_img,lable:"Salads"},
]

const Categories = () => {
    const {Category,setCategory} = useContext(RestaurentContext);

    return (
        <div>
            <Headings>Category</Headings>
            <CategoriesWrapper>
                    <CategoryItem 
                    isActive={Category==="ALL"} 
                    onClick={e=>setCategory("ALL")}
                    >
                    <IconWrapper light noMargin >
                        <AiFillAppstore/>
                    </IconWrapper>
                    <p>All</p>
                </CategoryItem>
                {
                    CATEGORIES.map(cat=>(
                        <CategoryItem
                        key={cat.id} 
                        isActive={Category===cat.lable} 
                        onClick={e=>setCategory(cat.lable)}
                        >
                            <IconWrapper light noMargin >
                                <img src={cat.img} alt={cat.lable} />
                            </IconWrapper>
                            <p>{cat.lable}</p>
                        </CategoryItem>
                    ))
                }
            </CategoriesWrapper>
            
        </div>
    )
}

export default Categories
