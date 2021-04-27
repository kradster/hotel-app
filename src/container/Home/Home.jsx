import React from 'react'
import Categories from '../../components/Categories'
import Navbar from '../../components/Navbar'
import RestaurantsCards from '../../components/RestaurantsCards'
import Sidebar from '../../components/Sidebar'




const Home = () => {
    return (
        <div className="container">
           <Sidebar/>
            <main>
                <Navbar/>
                <Categories/>
                <RestaurantsCards/>
            </main>    
        </div>
    )
}

export default Home
