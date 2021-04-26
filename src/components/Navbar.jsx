import React from 'react'
import {FiChevronLeft} from 'react-icons/fi'
import {FaStoreAlt} from 'react-icons/fa'
import {MdUnfoldMore} from 'react-icons/md'
import {AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'
import {BiFilter} from 'react-icons/bi'
import styled from 'styled-components'


const NavBarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    

`;

const SortWrapper = styled.div`
    height:3rem;
    display:flex;
    align-items:center;
    margin-right:2rem;
    cursor:pointer;
    border-radius:0.9rem;
    padding-left:0.5rem;

    span{
    font-size:0.9rem;
    margin:0 2rem 0 0.8rem;

    }
    svg{
        color:#503E9D;
    font-size:1.7rem;

    }
    &:hover{
    background-color:#F7F7F7;

        
    }
`;

const IconWrapper = styled.span`
    width:3rem;
    height:3rem;
    display:flex;
    align-items:center;
    justify-content:center;

    ${({left})=> left?`margin-right:auto;`:`margin-left:1rem;` }
    background-color:${({cart})=>{
        switch(true){
            case cart: return `#FB6D3A`;
            default:return `#503E9D`;
        }
    }
    };
    color:#fff;
    border-radius:0.9rem;
    cursor:pointer;
    svg{
        font-size:1.7em;
    }

`;

const SearchInput = styled.div`
    display:flex;
    align-items:center;
    height:3rem;
    background-color:#F7F7F7;
    border-radius:10px;
    padding-left:1rem;
    svg{
        font-size:1.7rem;
        margin-right:0.5rem;
    }
    input{
        border:none;
        outline:none;
        width:338px;
        font-size:0.9rem;
        background-color:transparent;
    }

`;

function Navbar() {
    return (
        <NavBarContainer>
            <IconWrapper left>
                <FiChevronLeft/>
            </IconWrapper>
            <SortWrapper>
                <FaStoreAlt/>
                <span>Da Otto</span>
                <MdUnfoldMore/>
            </SortWrapper>
            <SearchInput>
                <AiOutlineSearch/>
                <input placeholder="Search for Restaurants  (Press Enter to search)" />
            </SearchInput>

            <IconWrapper>
                <BiFilter/>
            </IconWrapper>
            <IconWrapper cart>
                <AiOutlineShoppingCart/>
            </IconWrapper>
            
        </NavBarContainer>
    )
}

export default Navbar
