import React from "react"
import {Link} from "gatsby"
import Layout from '../components/Layout'
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default () => ( 
    
    <Layout>
        <SimpleHero>
        <Banner title="Things to do Around Me" 
        info="There is always something to do, 
        at the Things To Do Co.">

            <Link to="/tours" className="btn-white"> Explore Things to Do</Link>
        </Banner>
        </SimpleHero>
        <About />
        <Services />
        </Layout>  
     

)



