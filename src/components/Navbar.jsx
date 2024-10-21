const Navbar = () => {
  return (
    <nav className="px-8 text-white bg-black md:px-16 lg:px-24">
        <div className="container flex items-center justify-center py-2 md:justify-between">
            <div className="hidden text-2xl font-bold md:inline">PANKHURI</div>
            <div className="space-x-6">
                <a href="#home" className="hover:text-gray-400">Home</a>
                <a href="#about" className="hover:text-gray-400">About Me</a>
                <a href="#projects" className="hover:text-gray-400">Projects</a>
                <a href="#contact" className="hover:text-gray-400">Contact</a>
            </div>
            <button className="hidden px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 md:inline hover:scale-105">Connect Me</button>
        </div>
    </nav>
  )
}

export default Navbar


// import { useRef , useEffect } from 'react';
// import PropTypes from 'prop-types';

// const Navbar = ({navOpen})=> {
//     const lastActiveLink= useRef();
//     const activeBox = useRef();

//     const initActiveBox = () =>{
//         activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
//         activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
//         activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
//         activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
        
//     }
//     useEffect(initActiveBox, []);
//     window.addEventListener('resize', initActiveBox)

//     const activeCurrentLink = (event) =>{
//         lastActiveLink.current?.classList.remove('active');
//         event.target.classList.add('active');
//         lastActiveLink.current = event.target;

//         activeBox.current.style.top = event.target.offsetTop + 'px';
//         activeBox.current.style.left = event.target.offsetLeft + 'px';
//         activeBox.current.style.width = event.target.offsetWidth + 'px';
//         activeBox.current.style.height = event.target.offsetHeight + 'px';
//     }

//     const navItems = [
//         {
//           label: 'Home',
//           link: '#home',
//           className: 'nav-link active',
//           ref: lastActiveLink
//         },
//         {
//           label: 'About',
//           link: '#about',
//           className: 'nav-link'
//         },
//         {
//           label: 'Work',
//           link: '#work',
//           className: 'nav-link'
//         },
//         {
//           label: 'Contact',
//           link: '#contact',
//           className: 'nav-link md:hidden'
//         }
//       ];
//   return (
//     <nav className={'navbar '+ (navOpen ? 'active':'')}>
//         {
//             navItems.map(({label, link, className, ref},key)=>(
//                <a 
//                 href={link}
//                 key={key}
//                 ref={ref}
//                 className={className}
//                 onClick={activeCurrentLink}
//                >
//                 {label}
//                </a> 

//             ))
//         }
//         <div className='active-box'
//         ref={activeBox}
//         >

//         </div> 
//     </nav>
//   )
// }

// Navbar.propTypes = {
//     navOpen: PropTypes.bool.isRequired
// }

// export default Navbar