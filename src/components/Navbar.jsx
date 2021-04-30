import React from 'react'
import {FiChevronLeft} from 'react-icons/fi'
import {GoChevronDown} from 'react-icons/go'
import {FaHamburger, FaStoreAlt} from 'react-icons/fa'
import {MdClose, MdUnfoldMore} from 'react-icons/md'
import {AiOutlineSearch,AiOutlineShoppingCart,AiFillFire} from 'react-icons/ai'
import {BiFilter, BiMenu} from 'react-icons/bi'
import styled from 'styled-components'
import { useState } from 'react'
import { RestaurentContext } from '../Context/RestaurentContext'
import { useContext } from 'react'
import { CategoryItem,CategoriesWrapper } from './Categories'




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

export const IconWrapper = styled.span`
    width:3.5rem;
    height:3.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;

    margin:${({left,noMargin})=>{
        switch (true) {
            case left: return `0 auto 0 0;`
            case noMargin: return `0;`
            default: return `0 0 0 1rem;`
        }
        } 
    };
    background-color:${({cart,light,fire})=>{
        switch(true){
            case cart: return `#FB6D3A`;
            case light: return `#F7F7F7`;
            case fire:return `#FDF0EB`;
            default:return `#503E9D`;
        }
    }
    };
    color:${({textlight,textdark,fire})=>{
        switch(true){
            case textdark: return `#251525`;
            case textlight: return `#F7F7F`;
            case fire:return `#FB6D3A`;
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
    z-index:9;
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
    transform:translateX(10rem);
    animation:tt .5s forwards ease-in-out;


    @keyframes tt {
        from{ transform:translateX(10rem);}
        to{transform:translateX(0rem);}
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

    @media screen and (max-width:425px){
        width:70vw;
        padding:1rem;
        
    }


`;

const TextHeading = styled.p`
    font-size:1.5rem;
    font-weight:700;
    margin-top:3rem;
    margin-bottom:2em;
    
    @media screen and (max-width:425px){
        margin-top:1rem;
        margin-bottom:1rem;
            
    }
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

export const CuisineWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const Cuisine = styled.div`
    padding:0.7rem 1rem 0.7rem 1rem;
    border-radius: 6px;
    margin:0 1rem 1rem 0;
    font-size:1.2rem;
    min-width:80px;
    display:flex;
    align-items:center;
    justify-content:center;

    background-color:${({isActive,isMenu})=>{
        switch(true){
            case isActive:return `#FDF0EB`;
            case isMenu:return `#503E9D`;
            default:return `#F7F7F7`;
        }
    }};

    color:${({isActive,isMenu})=>{
        switch(true){
            case isActive:return `#FB6D3A`;
            case isMenu:return `#FFFFFF`;
            default:return `#626264`;
        }
    }};
    font-weight:${({isActive,isMenu})=>{
        switch(true){
            case isActive:return `700`;
            case isMenu:return `700`;
            default:return `400`;
        }
    }};

    

`;

const SeeMore = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:#FB6D3A;
    margin:2rem 0 2rem 0;
    
    span{
        font-weight:600;
        font-size:1.2rem;
    }
    svg{
        font-size:2rem;
        
    }

`;

const NavBarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    ${SortWrapper}{
        margin-left:auto;
    }

    .menu-icon{
        display:none;
    }
    
    @media screen and (max-width:768px) and (min-width:425px) {
        & ${SearchInput} {
            width:30vw;
        }
    }

    @media screen and (max-width:425px){
        height:30vw;
        align-items:baseline;
        position:relative;
        & .menu-icon{
            display:flex;
        }
        
        & ${SearchInput} {
            position:absolute;
            bottom:0px;
            margin-auto;
            width:100%;
            input {
                width:100%;
            }
        }
    }
    

`;

const CartItem = styled.span`
    background:#503E9D;
    color:#FFFFFF;
    padding:0.1rem 0.5rem;
    border-radius:1rem;
    margin-left:auto;
    position: absolute;
    bottom: -3px;
    right: -6px;
    font-weight: 700;

`


const FilterPanel = ({onClose,show})=>{
    const CuisinsArray = ["All","Fast food","American food","Pizza","Asian","Dessert","Mexican","Breakfast"] 
    const [ActiveCuisine, setActiveCuisine] = useState(CuisinsArray[0])

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
                <CategoriesWrapper>
                     <CategoryItem noHover>
                            <IconWrapper fire noMargin >
                                <AiFillFire/>
                            </IconWrapper>
                            <p>Open</p>
                        </CategoryItem>
                </CategoriesWrapper>
                <TextHeading>Cuisine</TextHeading>
                <CuisineWrapper>
                    {
                        CuisinsArray.map((cu,i)=>(
                            <Cuisine
                             key={`cu-key-${i}`} 
                             isActive={ActiveCuisine===cu} 
                             onClick={e=>setActiveCuisine(cu)}
                             >{cu}</Cuisine>

                        ))
                    }
                </CuisineWrapper>
                <SeeMore>
                    <span>See more</span>
                    <GoChevronDown/>
                </SeeMore>
                <Button onClick={e=>onClose(false)} bottom >Apply filters</Button>

            </FiltersSidebar>
        </FilterPanelWindow>
    )
}



function Navbar() {
    const [ShowFilter, setShowFilter] = useState(false)
    const {singleRestaurent,setsingleRestaurent,setSearchVal,setopenMenu} = useContext(RestaurentContext)
    const [search, setsearch] = useState("")


    const onSearch = (e)=>{
        if(e.which===13){
            setSearchVal(search)
        }
    }

    return (
        <NavBarContainer>
            <IconWrapper className="menu-icon" style={{marginRight:"10px"}} left onClick={e=>setopenMenu(true)} >
                <BiMenu/>
            </IconWrapper>
            {
                Object.keys(singleRestaurent).length>0 && (
                <IconWrapper left onClick={e=>setsingleRestaurent({})} >
                    <FiChevronLeft/>
                </IconWrapper>

                )
            }
            {
                 !Object.keys(singleRestaurent).length && (
                    <>
            <SortWrapper>
                <FaStoreAlt/>
                <span>Da Otto</span>
                <MdUnfoldMore/>
            </SortWrapper>
            <SearchInput>
                <AiOutlineSearch/>
                <input 
                onKeyDown={onSearch}
                value={search}
                onChange={e=>setsearch(e.target.value)}
                placeholder="Search for Restaurants  (Press Enter to search)" 
                />
            </SearchInput>

            <IconWrapper onClick={e=>setShowFilter(true)} >
                <BiFilter/>
            </IconWrapper>
                </>

                )
            }
            <IconWrapper cart>
                <AiOutlineShoppingCart/>
                {

                    Object.keys(singleRestaurent).length>0 && (
                        <CartItem>5</CartItem>
                        )
                    }

            </IconWrapper>
            
            <FilterPanel show={ShowFilter} onClose={setShowFilter} />
            
            
        </NavBarContainer>
    )
}

export default Navbar
