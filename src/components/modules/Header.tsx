
import { FaSearch} from 'react-icons/fa';
import Navbar from './Navbar';


export default function Header  () {
  return (
    // <header className="bg-gray-800 sm:p-3 w-full flex flex-col sm:flex-row justify-between items-center rounded-t-md">
    <header>
         <Navbar />
    {/* <div className=' flx justify-center items-center text-white'>
<h2 className='text-center sm:text-3xl lg:text-6xl font-extrabold'>Wundeber.com</h2>
<p className='text-right'>The Route of Wonders ...</p>
    </div>
    <div className='flex flex-col sm:flex-row flex-wrap '>
    <Navbar />
      <div className="relative w-full sm:w-fit ">
        <input type="text" placeholder="Search..." className="bg-gray-700 p-2 text-white rounded-full w-64 flex items-center justify-center" />
        <button className="absolute right-0 top-0 mr-3 mt-1 p-2">
          <FaSearch className="fill-current text-white " />
        </button>
      </div>
    </div> */}
   
    </header>
  );
};

