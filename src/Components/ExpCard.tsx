import { Timeline, Text, Box, Group, Avatar, Card, useMatches } from "@mantine/core"
import { IconBriefcase, IconBriefcaseFilled } from "@tabler/icons-react"
import { ExpInfo } from "../user";



const ExpCard = (props: any) => {

    const size = useMatches({
        xs:20,
        md:25
    })

    const dot = useMatches({
        xs:20,
        md:30
    })
    return (
        <Card radius="md" shadow="md" p="lg" className="!bg-bgColor">
            
            <Timeline active={ExpInfo.length} bulletSize={34} lineWidth={2} color="#64FFDA">
                {ExpInfo.map((exp, index) => (
                    <Timeline.Item data-aos="fade-up" data-aos-duration="800"
                        key={index}
                        bullet={
                            <Box size={dot}>
                                <IconBriefcaseFilled size={size} color="#0f172a" />
                            </Box>
                        }
                    >
                        <Card
                            radius="md"
                            shadow="xs"
                            p="md"
                            withBorder
                            className="!border-primaryColor !border-3 !text-textColor !bg-bgColor xs-mx:m-0"
                        >
                            <Group>
                                <div className="flex flex-row xs-mx:!flex-row ">
                                <Avatar src="cg.png" size={50} alt={exp.company} className="mr-2" />
                                <Text fw={500} size="md" className="text-lg sm:text-base md:text-sm xs-mx:!text-[9px]">
                                    <h1 className="!text-primaryColor text-md font-mono font-semibold xs-mx:text-[10px]">{exp.title}</h1>
                                    {exp.duration}
                                </Text>
                                </div>
                                <Box className="">
                                    <Text className="!text-textColor !font-mono !text-semibold xs-mx:!text-sm">
                                        {exp.desc}
                                    </Text>
                                    <Text size="md" className="!text-textColor !font-mono !font-light xs-mx:!text-sm">
                                        <b className="!text-primaryColor">Skills:</b> {exp.skills.join(" • ")}
                                    </Text>
                                </Box>
                            </Group>
                        </Card>
                    </Timeline.Item>
                ))}
            </Timeline>
        </Card>
    );
}

export default ExpCard;
