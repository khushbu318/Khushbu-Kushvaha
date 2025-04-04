import { SkillInfo } from "../user";
import SkillCard from "./SkillCard";

const Skills = () => {
    return <div className="px-16 md-mx:px-6 my-10 font-mono" id="Skills">
        <h1 className="sm-mx:text-3xl xs-mx:text-2xl text-center mb-5 mt-5 font-mono text-4xl font-bold text-white">
            <span className=" text-primaryColor">02.&nbsp;</span>
            Skills
        </h1>

        <div className="flex flex-wrap justify-around md-mx:justify-between gap-4 sm-mx:justify-center md-mx:gap-2">
            {
                SkillInfo.map((skill: any, index: number) => <SkillCard key={index} title={skill.title} skill={skill.skills} />)
            }
        </div>

    </div>
}

export default Skills;