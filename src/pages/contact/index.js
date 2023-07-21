import Circles from "@/components/Circles";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowRight } from 'react-icons/bs'
import emailjs from "@emailjs/browser";


const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '', 
        email: '', 
        subject: '',
        message: '',
    })
    
    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
    
        setForm({
          ...form,
          [name]: value,
        });
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        console.log(process.env.NEXT_PUBLIC_SERVICE)
        console.log(process.env.NEXT_PUBLIC_TEMPLATE)
        console.log(process.env.NEXT_PUBLIC_API_KEY)

        emailjs
          .send(
            process.env.NEXT_PUBLIC_SERVICE,
            process.env.NEXT_PUBLIC_TEMPLATE,
            {
              from_name: form.name,
              to_name: "Hi, Erick",
              from_email: form.email,
              subject: form.subject,
              to_email: "erickmilan1002@gmail.com",
              message: form.message,
            },
            process.env.NEXT_PUBLIC_API_KEY,
          )
          .then(
            () => {
              setLoading(false);
              alert("Thank you. I will get back to you as soon as possible.");

              window.location.reload();
              setForm({
                name: "",
                email: "",
                message: "",
              });
            },
            (error) => {
              setLoading(false);
              console.error(error);
    
              alert("Ahh, something went wrong. Please try again.");
              window.location.reload();
            }
          );
      };



    return (
        <div className="h-full bg-primary">
            <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
                <div className="flex flex-col w-full max-w-[700px]">
                    <motion.h2
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className="h2 text-center mb-12">
                        Let's <span className="text-[#3282B8]">Connect.</span>
                    </motion.h2>
                    <motion.form
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        onSubmit={handleSubmit}
                        className="flex-1 flex flex-col gap-6 w-full mx-auto">
                        <div className="flex gap-x-6 w-full">
                            <input type="text" placeholder="name" name="name" className="input" onChange={handleChange} />
                            <input type="text" placeholder="email" name="email" className="input" onChange={handleChange}/>
                        </div>
                        <input type="text" placeholder="subject" name="subject" className="input" onChange={handleChange}/>
                        <textarea placeholder="message" name="message" className="textarea" onChange={handleChange}/>
                        <button type="submit" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-[#3282B8] group">
                            <span className="group-hover:-translate-y[120%] group-hover:opacity-0 transition-all duration-500"> {loading ? "Sending..." : "let's talk"} </span>
                            <BsArrowRight className="-translate-y[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
}

export default Contact;