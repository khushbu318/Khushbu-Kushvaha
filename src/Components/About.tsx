import { useEffect, useState } from "react";
import { Info } from "../user";
//@ts-ignore
import DOTS from "vanta/src/vanta.dots";
//@ts-ignore
import TRUNK from "vanta/src/vanta.trunk";

import Typewriter from 'typewriter-effect';
import { Button, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "./ResumeViewer";
import { IconDownload } from "@tabler/icons-react";
import Particles from "./magicui/Particles";
import { NeonGradientCard } from "./magicui/neongradientcard";

// import { BackgroundImage } from "@mantine/core";
const About = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const btn = useMatches({
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg'
    })


    return (
        <div>
            <div data-aos="zoom-out-up" id="About" className="mt-28 relative items-center justify-around flex font-mono px-10 py-20 sm-mx:px-4 xs-mx:px-2 xs-mx:py-2 y-[80vh] overflow-hidden lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-4 md-mx:p-3">
                <Particles
                    className="absolute inset-0 -z-20"
                    quantity={250}
                    ease={80}
                    vx={.1}
                    vy={.1}
                    color="#64ffda"
                    refresh
                />
                <div className="ml-10 w-3/5 flex flex-col lg-mx:gap-3 bs-mx:items-center xs-mx:mr-10" id="About">
                    <div className="text-3xl text-primaryColor lg-mx:text-2xl sm-mx:text-xl xsm-mx:text-lg">Hi, I am</div>
                    <div className="text-[4.25rem] text-white font-extrabold lg-mx:text-4xl sm-mx:text-3xl xs-mx:text-xl xsm-mx:text-[27px]">{Info.name}</div>
                    <div className="text-white text-4xl flex font-semibold lg-mx:text-[27px] sm-mx:text-2xl xs-mx:text-[15px] xsm-mx:text-lg">I am&nbsp;<span className="text-primaryColor"> <Typewriter
                        options={{
                            strings: Info.roles,
                            autoStart: true,
                            loop: true
                        }}
                    /> </span></div>
                    <div className="w-[95%] sm-mx:w-fit text-textColor text-justify text-xl my-8 font-semibold lg-mx:text-base lg-mx:my-0 sm-mx:text-sm xs-mx:text-sm">{Info.bio}</div>

                    <div className="flex gap-10">
                        <Button onClick={open} className="!text-bgColor !w-fit" variant="filled" color="#64FFDA" size={btn}>Check Resume</Button>
                        <Button component="a" href="/resume.pdf" download={Info.name} className="!text-primaryColor !w-fit" variant="outline" color="#64FFDA" size={btn} rightSection={<IconDownload size={20} />}>Download</Button>
                    </div>

                </div>

                <div className="flex mr-10 justify-center items-center h-fit w-fit bs-mx:-mr-12">
                    <NeonGradientCard className="w-[420px] h-[390px] lg-mx:w-64 lg-mx:h-64 max-w-sm items-center justify-center text-center rounded-full mb-14 xs-mx:w-56 xs-mx:h-56 xs-mx:mr-10 xs-mx:mb-3">
                        <img
                            className="w-full h-full rounded-full"
                            src="/new_pic.jpg"
                            alt="profile"
                        />
                    </NeonGradientCard>
                </div>
            </div>
            <ResumeViewer opened={opened} close={close} />
        </div>
    );

}
export default About;