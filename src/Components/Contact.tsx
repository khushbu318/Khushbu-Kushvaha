import { useState } from "react";
import FloatingInput from "./FloatingInput";
import { Button, useMatches } from "@mantine/core";
import { IconArrowRight, IconHeartHandshake } from "@tabler/icons-react";
import { validateForm } from "./Validation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import toast from "react-hot-toast";

const Contact = () => {

    const form = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }
    const [formData, setFormData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const handleChange = (id: string, value: string) => {
        setFormData({ ...formData, [id]: value });
        setFormError({ ...formError, [id]: validateForm(id, value) })
    }

    const handleSubmit = async () => {
        let valid = true;
        let newFormError: { [key: string]: string } = {};
        for (let key in formData) {
            const error = validateForm(key, formData[key]);
            if (error.length > 0) {
                newFormError[key] = error;
                valid = false;
            }
        }
        setFormError(newFormError);
        if (valid)
            try {
                setFormData(form);
                await addDoc(collection(db, "portfolio kk"), formData);
                toast.success("Successfully Submitted!", { duration: 4000 });
            } catch (error) {
                // console.error("Error adding document: ", error);
                toast.error("Failed to submit the form. Please try again.", { duration: 4000 });
            }
    }

    const btn = useMatches({
        xsm: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg'
    })

    return (

        <div className="px-16 mx-10 md-mx:px-8 sm-mx:px-4 lg-mx:mx-10 md-mx:mx-0 font-mono" id="Contact">
            <h1 className="sm-mx:text-3xl xs-mx:text-2xl text-center mb-5 mt-5 font-mono text-4xl font-bold text-white">
                <span className=" text-primaryColor">04.&nbsp;</span>
                Contact
            </h1>

            <div data-aos="flip-left" data-aos-duration="800" className="m-auto flex flex-col gap-6 w-[70%] lg-mx:w-full border border-primaryColor text-2xl text-white font-semibold rounded-3xl p-8 shadow-[0px_0px_13px_0px_rgba(100,255,218,0.72)] sm-mx:p-4 ">
                <div className="sm-mx:text-2xl xs-mx:text-xl font-semibold flex gap-3 items-center text-red-300">
                    Let's Connect <IconHeartHandshake className="text-red-400 w-10 h-10 sm-mx:w-7 sm-mx:h-7" />
                </div>
                <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange} error={formError.name} />
                <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange} error={formError.email} />
                <FloatingInput id="phone" name="Phone Number" value={formData.phone} handleChange={handleChange} error={formError.phone} />
                <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange} error={formError.message} />

                <Button onClick={handleSubmit} rightSection={<IconArrowRight size={20} />} fullWidth variant="filled" size={btn} color="#64FFDA" radius="lg" className="!text-bgColor !font-bold !text-2xl">Send</Button>
            </div>
        </div>
    )
}

export default Contact;