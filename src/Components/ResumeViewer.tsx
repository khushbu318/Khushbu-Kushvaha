import { ActionIcon, Modal, ScrollArea, Tooltip } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { Document, Page } from 'react-pdf';
import { Info } from "../user";


const ResumeViewer = (props: any) => {
    return <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="auto" className="" opened={props.opened} onClose={props.close}>
        <Modal.Overlay />
        <Modal.Content className="!rounded-2xl">
            <Modal.Header className="!bg-bgColor !border-primaryColor !border-b-0 !border-2 !rounded-tr-2xl !rounded-tl-2xl">
                <Modal.Title data-autofocus className="!text-2xl font-bold !text-white flex gap-5 items-center">{Info.name}
                    <Tooltip color="#64ffda" className="!text-bgColor" position="right" label="Download Resume" offset={{ mainAxis: 5, crossAxis: 0 }}> 
                        <ActionIcon className="text-primaryColor" variant="outline" color="#64ffda" component="a" href="/resume.pdf" download={Info.name}>
                            <IconDownload style={{ width: '70%', height: '70%' }} stroke={1.5} />
                        </ActionIcon>
                    </Tooltip>
                </Modal.Title>
                <Modal.CloseButton size="md" iconSize={30} className="bg-bgColor !text-red-500" />
            </Modal.Header>
            <Modal.Body className=" !pt-2 !bg-bgColor !border-primaryColor !border-t-0 !border-2 !rounded-br-2xl !rounded-bl-2xl">
                <Document file="/resume.pdf">
                    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>


            </Modal.Body>
        </Modal.Content>
    </Modal.Root>
}

export default ResumeViewer;