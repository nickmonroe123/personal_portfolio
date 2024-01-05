// components
import Circles from '/components/Circles';

// icons
import {BsArrowRight} from 'react-icons/bs';

// framer
import {motion} from 'framer-motion';

// variants
import {fadeIn} from '../../variants';

// for sending out the api email call
import axios from 'axios';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name_from: '',
    email_from: '',
    subject_from: '',
    message_from: '',
  });

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const sendEmail = async (event) => {
    event.preventDefault(); // Prevent form submission and page refresh
    console.log(form);
    setIsLoading(true);
    try {
      const response = await axios.post('https://nicks-apis.onrender.com/send_email', form);
      setData(response.data); // Set data
    } catch (error) {
      // You can add error handling logic here
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='h-full bg-primary/30'>
        <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
            <div className='flex flex-col w-full max-w-[700px]'>
                {/* text */}
                <h2 className='h2 text-center mb-12'>
                    Let&apos;s <span className='text-accent'>connect.</span>
                </h2>
                <form onSubmit={sendEmail} className='flex-1 flex flex-col gap-6 w-full mx-auto'>
                    <div className='flex gap-x-6 w-full'>
                        <input
                            type="text"
                            name="name_from"
                            placeholder="name"
                            className="input"
                            value={form.name_from}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="email_from"
                            placeholder="email"
                            className="input"
                            value={form.email_from}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <input
                        type="text"
                        name="subject_from"
                        placeholder="subject"
                        className="input"
                        value={form.subject_from}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        placeholder='message'
                        name="message_from"
                        value={form.message_from}
                        onChange={handleInputChange}
                        className='textarea'>
                    </textarea>
                    <button
                    className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all
                    duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                        <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
                        transition-all duration-500'>Let&apos;s talk</span>
                        <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex
                        group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300
                        absolute text-[22px]'/>
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;
