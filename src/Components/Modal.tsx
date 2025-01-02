import { Modal, ScrollArea } from "@mantine/core";
import { Badge, Button, Group, Image, Text } from "@mantine/core";

const FullProjectModal = (props: any) => {


    return (
        <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="70%" className="" opened={props.opened} onClose={props.close}>
            <Modal.Overlay />
            <Modal.Content className="!rounded-2xl">
                <Modal.Header className="!bg-bgColor !border-primaryColor !border-b-0 !border-2 !rounded-tr-2xl !rounded-tl-2xl">
                    <Modal.Title data-autofocus className="!text-2xl font-bold !text-white">{props.title}</Modal.Title>
                    <Modal.CloseButton size="md" iconSize={30} className="bg-bgColor !text-red-500" />
                </Modal.Header>
                <Modal.Body className=" !pt-2 !bg-bgColor !border-primaryColor !border-t-0 !border-2 !rounded-br-2xl !rounded-bl-2xl">

                    <Image className="!rounded-xl shadow-[0px_0px_0px_2px_rgba(255,255,255,0.65)]"
                        src={props.image}
                        // height={160}
                        alt={props.image}
                    />

                    <Group mt="md" mb="md">
                        {props.technologies.map((tech: string, index: number) => <Badge key={index} variant="light" color="#64ffda" size="xl">{tech}</Badge>)}
                    </Group>

                    <Text className="!text-justify" size="mkd" c="dimmed">
                        {props.desc}
                    </Text>

                    <Group>
                        <a className="!w-[100%]" href={props.github_link} target="_blank">
                            <Button size="lg" variant="outline" color="#64ffda" mt="md" radius="md" fullWidth>
                                View Code
                            </Button>
                        </a>
                    </Group>

                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    )

}

export default FullProjectModal;