import React from 'react'
import styled from 'styled-components'

import c1_img from '../assets/images/category/Logocat_baked.png'
import c2_img from '../assets/images/category/Logocat_biking.png'
import c3_img from '../assets/images/category/Logocat_pizzahut.png'
import c4_img from '../assets/images/category/Logocat_macd.png'
import { IconWrapper } from './Navbar'

export const Headings = styled.p`
    color:#182135;
    font-size:1.5rem;
    font-weight:700;
    margin-bottom:2rem;

`;

const CategoriesWrapper = styled.div`
    display:flex;

`

const CategoryItem = styled.div`
    display:flex;
    align-items:center;
    
    border-radius:1rem;
    padding:0 0.7rem 0 0.5rem;
    & + & {
        margin-left:3.5rem;
    }
    transition: all .3s ease-in-out;
    &:hover{
        background-color:#F7F7F7;
    }
    p {
        font-weight:700;
        margin:0;
        margin-left:1rem;
        font-size:1.3rem;
    }
`;



const CATEGORIES = [
    {id:"cat_1",img:c1_img,lable:"Baked"},
    {id:"cat_2",img:c2_img,lable:"Sweet"},
    {id:"cat_3",img:c3_img,lable:"Hot Dish"},
    {id:"cat_4",img:c4_img,lable:"fast Food"},
    {id:"cat_5",img:c4_img,lable:"Salads"},
]

const Categories = () => {
    return (
        <div>
            <Headings>Category</Headings>
            <CategoriesWrapper>
                {
                    CATEGORIES.map(cat=>(
                        <CategoryItem>
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
