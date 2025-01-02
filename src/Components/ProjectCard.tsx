import { Badge, Button, Card, Group, Image, Text, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FullProjectModal from "./Modal";

const ProjectCard = (props:any) => {
    const [opened, { open, close }] = useDisclosure(false);
    const badge = useMatches(
        {
            xsm:"sm",
            md:'md',
            lg:"lg"
        }
    )

    const btn = useMatches(
        {
            xs:"xs",
            sm:'sm',
            md:'md',
            lg:"lg"
        }
    )

    return (
        <>
        <div className="w-[32%] lg-mx:w-[46%] md-mx:w-[48%] sm-mx:w-[90%] xs-mx:w-full" data-aos="fade-up" data-aos-duration="800">
        <Card onClick={open} className="!bg-bgColor cursor-pointer transition-transform duration-300 ease-in-out hover:!scale-[1.02] mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA80] xs-mx:!shadow-[0_0_10px_1px_#64FFDA80] !border-primaryColor border-2"  shadow="lg" padding="sm" radius="lg"  withBorder>
            <Card.Section className="p-2">
                <Image className="!rounded-xl shadow-[0px_0px_0px_2px_rgba(255,255,255,0.65)]"
                    src={props.image}
                    // height={160}
                    alt={props.image}
                    
                />
            </Card.Section>

            <Group justify="space-between" mt="xs" mb="xs">
                <Text className="!text-2xl font-bold !text-white sm-mx:!text-xl">{props.title}</Text>
                {/* <Badge color="pink">{props.technologies}</Badge> */}
            </Group>

            <Group mb="xs">
                {props.technologies.map((tech:string, index:number)=>index<3 && <Badge key={index} variant="light" color="#64ffda" size={badge}>{tech}</Badge>)}
            </Group>
            

            <Text className="!text-justify !text-sm xs-mx:!text=xs" lineClamp={3} size="sm" c="dimmed">
                {props.desc}
            </Text>

            <Button onClick={open} color="#64ffda" size={btn} variant="outline" mt="md" radius="md">
                Show More
            </Button>
        </Card>
        <FullProjectModal opened={opened} close={close} title={props.title} desc={props.desc} image={props.image} github_link={props.github_link} technologies={props.technologies}/>

        </div>
    </>
    );
}

export default ProjectCard;