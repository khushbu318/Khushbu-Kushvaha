import { KLoader }  from './KLoader';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header'
import Mail from './Mail';
import Projects from './Projects';
import Skills from './Skills';
import Social from './Social';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
const HomePage=()=>{
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    },[])

    return <>
    <div className={`min-h-[100vh] ${loading?"flex":""} items-center overflow-hidden justify-center`}>

        { loading != true ? 
        <>
        <Toaster/>
        <Header/>
        <About/>
        {/* <Projects/> */}
        <Skills/>
        <Experience/>
        {/* <Contact/> */}
        <Footer/>
        <Mail/>
        <Social/>
        </>:
        <KLoader/>}
    </div>
        
    </>
};
export default HomePage;