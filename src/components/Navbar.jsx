import React from 'react'
import {FiChevronLeft} from 'react-icons/fi'
import {FaStoreAlt} from 'react-icons/fa'
import {MdClose, MdUnfoldMore} from 'react-icons/md'
import {AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'
import {BiFilter} from 'react-icons/bi'
import styled from 'styled-components'
import { useState } from 'react'


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
    background-color:${({cart,light})=>{
        switch(true){
            case cart: return `#FB6D3A`;
            case light: return `#F7F7F7`;
            default:return `#503E9D`;
        }
    }
    };
    color:${({textlight,textdark})=>{
        switch(true){
            case textdark: return `#251525`;
            case textlight: return `#F7F7F`;
            default:return `#ffffff`;
        }
    }
    };
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

const FilterPanelWindow = styled.div`
    display:${({show})=> show===true?`flex`:`none`};
    width:100vw;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    background: rgba(0, 0, 0, 0.16);
    backdrop-filter: blur(12px);
    justify-content:flex-end;
    animation:op .3s ;


    @keyframes op {
        from{ opacity:0;}
        to{opacity:1;}
    }
   

`;

const FiltersSidebar = styled.div`
    width:30rem;
    height:100%;
    background: #FFFFFF;
    border-radius: 24px 0px 0px 24px;
    padding:1.5rem 2rem;
    display:flex;
    flex-direction:column;
    transform:translateX(-30rem);
    animation:tt .5s forwards ease-in-out;


    @keyframes tt {
        from{ transform:translateX(500px);}
        to{transform:translateX(0px);}
    }


    .filter-header{
        display:flex;
        align-items:center;
        justify-content:space-between;
        p{
            font-size:1.5rem;
            font-weight:700;
        }
    }

`;

const TextHeading = styled.p`
    font-size:1.5rem;
    font-weight:700;
    margin-top:3rem;
    margin-bottom:2em;
`

const Button = styled.button`

    background: #503E9D;
    border-radius: 10px;
    border:0;
    outline:0;
    height:4rem;
    color:#fff;
    border-radius:10px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    font-weight:700;
    margin-top:${({bottom})=>{
        switch(true){
            case bottom: return `auto`;
            default:return `0`;
        }
    }
    };

    svg{
    position:absolute;
    right:10px;
    font-size:2rem;
    }

`


const FilterPanel = ({onClose,show})=>{
    return (
        <FilterPanelWindow show={show} >
            <FiltersSidebar show={show}>
                <div className="filter-header">
                    <p>Search filters</p>
                    <IconWrapper light textdark onClick={e=>onClose(false)} >
                        <MdClose/>
                    </IconWrapper>
                </div>
                <TextHeading>Sort by</TextHeading>
                <TextHeading>Cuisine</TextHeading>
                <Button bottom >Apply filters</Button>

            </FiltersSidebar>
        </FilterPanelWindow>
    )
}



function Navbar() {

    const [ShowFilter, setShowFilter] = useState(false)

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

            <IconWrapper onClick={e=>setShowFilter(true)} >
                <BiFilter/>
            </IconWrapper>
            <IconWrapper cart>
                <AiOutlineShoppingCart/>
            </IconWrapper>
            
            <FilterPanel show={ShowFilter} onClose={setShowFilter} />
            
            
        </NavBarContainer>
    )
}

export default Navbar
