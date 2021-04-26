import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const Home = () => {
    return (
        <div className="container">
           <Sidebar/>
            <main>
                <Navbar/>
            </main>    
        </div>
    )
}

export default Home
