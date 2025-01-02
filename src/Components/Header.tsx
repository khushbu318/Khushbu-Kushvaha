import { IconMathLower, IconMathGreater, IconHexagonLetterK } from '@tabler/icons-react';
import SideBar from "./SideBar";
import { useMediaQuery } from '@mantine/hooks';
import { em } from '@mantine/core';
import { useEffect, useState } from 'react';

const links = ["About","Skills","Experience","Contact"]
const navLinks=(col:Boolean, clicked:any)=>{
    const handleClick=()=>{
        if(clicked)clicked();
    }
    return links.map((link, index)=>{
        return  <a key={index} onClick={handleClick} className={` ${col?'flex flex-col items-center':''} text-textColor hover:text-primaryColor focus:outline focus:p-1 focus:text-primaryColor`} href={`#${link}`}> <span className="text-primaryColor">0{index+1}. </span> {link}</a>            
    }
)
}

const Header=() => {
    const isMobile = useMediaQuery(`(max-width: ${em(476)})`)
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [shadow, setShadow] = useState(false);
    const controlNavbar = () =>{
        if(window.scrollY>lastScrollY && window.scrollY>70)setShow(false);
        else setShow(true);
        if(window.scrollY>70)setShadow(true);
        else setShadow(false);
        setLastScrollY(window.scrollY);
    }
    useEffect(()=>{
        window.addEventListener('scroll',controlNavbar);
        return ()=> window.removeEventListener('scroll',controlNavbar);
    })
return (
    <nav className={`flex ${show?"translate-y-0":"-translate-y-28"} ${shadow?"shadow-[0px_10px_30px_-10px_#020c1b]":""} transition-transform duration-500 ease-in-out fixed z-10 w-full h-[15vh] p-10 my-font bg-bgColor justify-between items-center`}>
        {/* <h1 className="text-primaryColor">Portfolio</h1> */}
        <div className="text-primaryColor flex items-center z-10">
            <IconMathLower size={isMobile?"25":"50"} stroke={2}/>
            <IconHexagonLetterK size={isMobile?"35":"70"} stroke={1.5}/>
            <IconMathGreater size={isMobile?"25":"50"} stroke={2}/>
        </div>
        <div className="md:flex gap-8" hidden>
            {navLinks(false,null)}
        </div>
        <SideBar/>
    </nav>
)
}
export default Header;
export {navLinks};