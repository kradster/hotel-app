import React,{useState,useEffect} from 'react'
import { createContext } from 'react'
import { getRestaurantDetailsAction,getAllRestaurantsAction } from '../api/api';

export const RestaurentContext = createContext();
const RestaurentContextProvider = ({children}) => {

    const [allRestaurants, setallRestaurants] = useState([])
    const [Restaurants, setRestaurants] = useState([])
    const [RestaurantsDetails, setRestaurantsDetails] = useState([])
    const [singleRestaurent, setsingleRestaurent] = useState({})
    const [Category, _setCategory] = useState("ALL")
    const [isLoading, setisLoading] = useState(false)
    const [openMenu, setopenMenu] = useState(false)
    const [isMenuLoading, setisMenuLoading] = useState(true);
    const [ShowSearchError, setShowSearchError] = useState(false)

    function setSearchVal(val){
        if(val==="") return setallRestaurants(Restaurants)
        let fr = Restaurants.filter(f=>f.restaurantName.toLowerCase().includes(val.toLowerCase()))
        if(fr.length>0){
            setallRestaurants(fr);
        }else{
            setShowSearchError(true);
            setTimeout(() => {
                setShowSearchError(false);
            },3000);
        }
    }


    const setCategory = (cat)=>{
        _setCategory(cat);
        if(cat==="ALL") return setallRestaurants(Restaurants) ;
        let ct = Restaurants.filter(r=>r.restaurantCategory.includes(cat))
        setallRestaurants(ct);
    }
    

    const getRestaurent = (id)=>{
        let gr = RestaurantsDetails.filter(f=>f.id===id)[0] || {}
        setsingleRestaurent(gr)
    }

    const getData = async ()=>{
        setisLoading(true);
        let allRest = await getAllRestaurantsAction();
        let restDetails = await getRestaurantDetailsAction();
        setallRestaurants(allRest.data.allRestaurants);
        setRestaurants(allRest.data.allRestaurants);
        setRestaurantsDetails(restDetails.data.restaurantDetails);
        setisLoading(false);
    }

    useEffect(() => {
        getData();
    }, [])



    return (
        <RestaurentContext.Provider value={{
            allRestaurants,
            RestaurantsDetails,
            singleRestaurent,
            getRestaurent,
            setsingleRestaurent,
            Category,
            setCategory,
            setSearchVal,
            isLoading,
            openMenu, 
            setopenMenu,
            isMenuLoading, 
            setisMenuLoading,
            ShowSearchError,
            setShowSearchError
            }}>
            {children}
        </RestaurentContext.Provider>
    )
}

export default RestaurentContextProvider
