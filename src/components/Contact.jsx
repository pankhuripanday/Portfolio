import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'


const Contact = () => {
  return (
    <div className='py-20 text-white bg-black' id='about'>
        <div className='container px-8 mx-auto md:px-16 lg:px-24'>
            <h2 className='mb-12 text-4xl font-bold text-center'>About Me</h2>
            <div className='flex flex-col items-center md:flex-row md:space-x-12'>
                
                <div className='flex-1'>
                    <h3 className='mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Let's Talk</h3>
                    <p>I'm open to discussing web dvelopment projects or partnership opportunities. </p>
                    <div className='mt-8 mb-4'>
                        <FaEnvelope className='inline-block mr-2 text-green-400' ></FaEnvelope>
                        <a href="mailto:youremail@example.com" className='hover:underline'>
                            pandaypankhuri@gmail.com
                        </a>
                    </div>

                    <div className='mb-4'>
                        <FaPhone className='inline-block mr-2 text-green-400' ></FaPhone>
                        <span>+91-8881-888-099</span>
                    </div>

                    <div className='mb-4'>
                        <FaMapMarkedAlt className='inline-block mr-2 text-green-400' ></FaMapMarkedAlt>
                        <span>Street, City, Country</span>
                    </div>



                </div>
                <div className='flex-1 w-full'>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Contact