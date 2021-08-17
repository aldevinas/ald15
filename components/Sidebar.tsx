import { AiOutlineGithub, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone, AiOutlineQrcode} from "react-icons/ai";
import {useTheme} from 'next-themes';
import Image from "next/image";

const Sidebar = () => {

  const {theme, setTheme} = useTheme();
  
  const changeTheme = () =>{
    setTheme( theme === "light" ? "dark" : "light" );
  }; 

  return (
    <div>
      <Image
        src="https://media-exp1.licdn.com/dms/image/C5603AQFUI1jFV01Spw/profile-displayphoto-shrink_200_200/0/1517654405108?e=1629936000&v=beta&t=Mzpr0D54kCBa0B6ntW1peAKx4-qLYmcKDXO_t9Rgzhc"
        alt="personal photo"
        className="mx-auto rounded-full"
        width="128"
        height="128"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="mt-4 text-3xl font-medium tracking-widest text-purple-500 font-firaSans">ALDEVINAS</h3>
      <h4 className="text-2xl tracking-wider font-firaSans">MIKALAUSKAS</h4>
      <h1 className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">WEB Developer</h1>
      <div>
        <a 
        href="/assets/aldevinas_contact.pdf"
        download="AldevinasCV.pdf" 
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
          <AiOutlineQrcode className="pr-2 text-purple-500 w-7 h-7"/>
          Download Contacts
      </a>
      </div>
      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-purple-500 md:w-full">
        {/* <a href="https://www.linkedin.com/in/aldevinas-mikalauskas-0113a29/">
          <AiOutlineLinkedin className="w-8 h-8 cursor-pointer hover:text-blue-600"/>
        </a> */}
        <a href="https://github.com/aldevinas">
          <AiOutlineGithub className="w-8 h-8 cursor-pointer hover:text-blue-600"/>
        </a>
        {/* <a href="https://www.facebook.com/aldevinas.mikalauskas/">
          <AiOutlineFacebook className="w-8 h-8 cursor-pointer hover:text-blue-600"/>
        </a> */}
      </div>
      {/* address */}
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
        <div className="flex items-center justify-center my-2 space-x-2">
          <AiOutlineEnvironment className="w-5 h-5 text-purple-500"/>
          <span>Vilnius, Lithuania</span>
        </div>
        <div className="flex items-center justify-center my-2 space-x-2">
          <AiOutlineMail className="w-5 h-5 text-purple-500"/>
          <p>aldevinas@hotmail.com</p>
        </div>
        <div className="flex items-center justify-center my-2 space-x-2">
          <AiOutlinePhone className="w-5 h-5 text-purple-500"/>
          <p>+37068659911</p>
        </div>
        
      </div>
      {/* email button */}
      <button 
        className="w-8/12 px-5 py-2 my-1 text-white rounded-full bg-gradient-to-r from-purple-500 to-blue-600 focus:otline-none hover:from-purple-600"
        onClick={() => window.open('mailto:aldevinas@hotmail.com')}>
        Hire Me
        </button>
      <button
        onClick={changeTheme} 
        className="w-8/12 px-5 py-2 my-1 text-white rounded-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600">
        Toggle Theme
        </button>
    </div>
  )
};

export default Sidebar;