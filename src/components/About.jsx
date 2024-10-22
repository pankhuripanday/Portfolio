import AboutImage from '../assets/aboutme-image.png'

const About = () => {
  return (
    <div className='py-20 text-white bg-black' id='about'>
        <div className='container px-8 mx-auto md:px-16 lg:px-24'>
            <h2 className='mb-12 text-4xl font-bold text-center'>About Me</h2>
            <div className='flex flex-col items-center md:flex-row md:space-x-12'>
                <img src={AboutImage} alt="" className='object-cover mb-8 rounded w-72 h-80 md:mb-0' />
                <div className='flex-1'>
                <p className='mb-8 text-lg'>
                    I am a passionate web developer with a strong foundation in front-end technologies. I have a keen eye for design and a strong focus on user experience. I am always eager to learn new technologies and improve my skills. I am a team player and I work well with others. I am always looking for new opportunities to grow and develop my skills.
                </p>
                <div className='space-y-4'>
                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'></div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>JavaScript</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>Tailwind Css</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>React JS</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mt-12 text-center'>
                    <div>
                        {/* <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                            3+
                        </h3>
                        <p>Years Experience</p> */}
                        <img src="/logo.png"
                        width={100}
                        height={100}
                        alt="Pankhuri" />
                    </div>

                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                            6+
                        </h3>
                        <p>Projects Completed</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                            2+
                        </h3>
                        <p>Live Projects</p>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About