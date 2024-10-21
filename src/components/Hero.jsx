import HeroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='py-16 text-center text-white bg-black'>
        <img src={HeroImage} alt="" className='object-cover w-48 h-48 mx-auto mb-8 transition-transform duration-300 transform rounded-full hover:scale-105' />
        <h1 className='text-4xl font-bold'>
            I'm {" "} 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Pankhuri Panday</span>
            ,Front-End Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I'm specialized in building modern and responsive websites with the latest technologies.
        </p>
        <div className='mt-8 space-x-4'>
            <button className="hidden px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-pink-400 to-blue-500 md:inline hover:scale-105"> <a href="mailto:pandaypankhuri@gmail.com">Connect With Me</a></button>
            <button className="hidden px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-pink-400 to-blue-500 md:inline hover:scale-105"
            onClick={() => window.open("https://drive.google.com/file/d/1BFNzHY5X44EO1dheCj4tgbcro1i_Z8G9/view?usp=sharing")}
            >Resume</button>
        </div>
    </div>
  )
}

export default Hero