import React from 'react'
import { useContext } from 'react'
import Categories from '../../components/Categories'
import Navbar from '../../components/Navbar'
import RestaurantsCards from '../../components/RestaurantsCards'
import RestaurentDetails from '../../components/RestaurentDetails'
import Sidebar from '../../components/Sidebar'
import RestaurentContextProvider, {RestaurentContext} from '../../Context/RestaurentContext'




const Home = () => {
    const {singleRestaurent} = useContext(RestaurentContext)
    return (
        <div className="container">
                <Sidebar/>
                <main>
                    <Navbar/>
                    {
                        Object.keys(singleRestaurent).length>0
                        ?<RestaurentDetails/>
                        :<>
                            <Categories/>
                            <RestaurantsCards/>
                        </>
                    }
                </main>    
        </div>
    )
}

export default ()=><RestaurentContextProvider>
    <Home/>
</RestaurentContextProvider>
