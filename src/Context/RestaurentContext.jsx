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

    function setSearchVal(val){
        if(val==="") return setallRestaurants(Restaurants)
        let fr = Restaurants.filter(f=>f.restaurantName.toLowerCase().includes(val.toLowerCase()))
        setallRestaurants(fr);
    }


    const setCategory = (cat)=>{
        _setCategory(cat);
        if(cat==="ALL") return setallRestaurants(Restaurants) ;
        let ct = Restaurants.filter(r=>r.restaurantCategory.includes(cat))
        console.log('====================================');
        console.log(ct);
        console.log('====================================');
        setallRestaurants(ct);
    }
    

    const getRestaurent = (id)=>{
        let gr = RestaurantsDetails.filter(f=>f.id===id)[0] || {}
        setsingleRestaurent(gr)
    }

    const getData = async ()=>{
        let allRest = await getAllRestaurantsAction();
        let restDetails = await getRestaurantDetailsAction();
        setallRestaurants(allRest.data.allRestaurants);
        setRestaurants(allRest.data.allRestaurants);
        setRestaurantsDetails(restDetails.data.restaurantDetails);
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
            setSearchVal
            }}>
            {children}
        </RestaurentContext.Provider>
    )
}

export default RestaurentContextProvider