
import Navbar from "../Navbar";
import Footer from "./../Footer";
import { FaGithub } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="mt-[48px] text-center n">
        <h1 className="text-[36px] font-semibold">Contact Me</h1>
        <div className="text-[18px] my-5">
          <p>Web Developer: D S SRIVATSA</p>
          <div className='text-center '>
				<a
					href='mailto:srivatsa99damaraju@gmail.com'
					className='text-xl font-semibold text-blue-500 duration-200 hover:text-blue-700'
				>
					srivatsa99damaraju@gmail.com
				</a>
				<div className='flex items-center justify-center gap-4 mt-4'>
					<a href='https://github.com/srivatsa007'>
						<FaGithub className='text-4xl text-blue-400 duration-200 hover:text-blue-700' />
                        Github: https://github.com/srivats007
					</a>
				</div>
			</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
