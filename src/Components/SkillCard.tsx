import { Avatar } from "@mantine/core";

const SkillBadge=(skills:[])=>{
    return skills.map((skill:any, index:number)=> <div key={index} className="flex border-textColor border rounded-2xl items-center px-3 py-2 bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1 mb-1">
        <img className="w-[48px] bs-mx:w-[35px] xsm-mx:w-[28px] !p-3" src={`Icons/${skill}.png`} />

        <div className="text-textColor font-mono text-xl xs-mx:!text-md">
            {skill}
        </div>
    </div>)
}

const SkillCard = (props:any) => {
    return (
    <>
        <div data-aos="fade-up" data-aos-duration="800" className="rounded-2xl w-[49%] border border-primaryColor p-2 hover:!scale-[0.9] hover:!shadow-[0px_0px_13px_0px_rgba(100,255,218,0.72)] bs-mx:p-3 xsm-mx:w-full xs-mx:w-fit xs-mx:!m-0">
            <div className="xs-mx:!text-md sm-mx:!text-2xl xsm-mx:!text-xl text-3xl text-white text-center font-bold mb-4">
                {props.title}
            </div>

            <div className="flex flex-wrap gap-3 bs-mx:gap-2 justify-center">
                {SkillBadge(props.skill)}
            </div>
        </div>
        </>
    )
}

export default SkillCard;