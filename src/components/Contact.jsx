import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'


const Contact = () => {
  return (
    <div className='py-20 text-white bg-black' id='contact'>
        <div className='container px-8 mx-auto md:px-16 lg:px-24'>
            <h2 className='mb-12 text-4xl font-bold text-center'>Contact Me</h2>
            <div className='flex flex-col items-center md:flex-row md:space-x-12'>
                
                <div className='flex-1'>
                    <h3 className='mb-4 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Let's Talk</h3>
                    <p>I'm open to discussing web dvelopment projects or partnership opportunities. </p>
                    <div className='mt-8 mb-4'>
                        <FaEnvelope className='inline-block mr-2 text-green-400' ></FaEnvelope>
                        <a href="mailto:youremail@example.com" className='hover:underline'>
                            pandaypankhuri@gmail.com
                        </a>
                    </div>

                    <div className='mb-4'>
                        <FaPhone className='inline-block mr-2 text-green-400' ></FaPhone>
                        <span>+91-8881888099</span>
                    </div>

                    {/* <div className='mb-4'>
                        <FaMapMarkedAlt className='inline-block mr-2 text-green-400' ></FaMapMarkedAlt>
                        <span>Noida, India</span>
                    </div> */}
                </div>
                <div className='flex-1 w-full'>
                    <form
                    action="https://getform.io/f/bdryovnb"
                    method="POST" 
                    className='space-y-4'>
                        <div>
                            <label htmlFor="name" className='block mb-2'>Your Name</label>
                            <input 
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            required
                            placeholder="Name"
                            className='w-full p-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-400'/>
                        </div>

                        <div>
                            <label htmlFor="email" className='block mb-2'>Email</label>
                            <input 
                            type="emial"
                            name="email"
                            id="email"
                            autoComplete="email"
                            required
                            placeholder="Email"
                             className='w-full p-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-400'/>
                        </div>

                        <div>
                            <label htmlFor="message" className='block mb-2'>Message</label>
                            <textarea 
                            type="text" 
                            name="message" 
                            id="message"
                            required
                            placeholder="Hi!"
                            className='w-full p-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-400' rows='5'/>
                        </div>
                        <button className="hidden px-8 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 md:inline hover:scale-105">Send</button>

                    </form>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Contact