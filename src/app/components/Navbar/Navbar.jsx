import Image from 'next/image'
import { Icons } from '..'

const Navbar = () => {
  return (
    <div className="flex shadow-md divide-x">
        <div className='w-1/6 flex items-center justify-center'>
            <Image src="/logo/gold.png" width={50} height={50} alt="HJ" />
            <span className='font-bold text-2xl'>HONEY</span>
        </div>
        <div className='flex-grow grid grid-cols-12 px-8'>
            <ul className='col-span-8 flex items-center w-full justify-center font-bold'>
                <li className='h-24 mx-auto flex items-center justify-center'><a href='#'>Home</a></li>
                <li className='h-24 mx-auto flex items-center justify-center'><a href='#' className='flex items-center justify-center'>About Me<Icons className="text-gray-400 w-4 ml-2" icon="chevronDown" /></a></li>
                <li className='h-24 mx-auto flex items-center justify-center'><a href='#'>Portfolio</a></li>
                <li className='h-24 mx-auto flex items-center justify-center'><a href='#'>Contacts</a></li>
            </ul>
            <div className='col-span-4 flex items-center justify-center'>
                <a href="https://www.facebook.com/" target='_blank' className='p-2 m-2 rounded-full border border-gray-200 hover:shadow-md' type="button"><Icons className="pointer-events-none" width={18} icon="facebook" /></a>
                <a href="https://github.com/d3v-honey" target='_blank' className='p-2 m-2 rounded-full border border-gray-200 hover:shadow-md' type="button"><Icons className="pointer-events-none" width={18} icon="github" /></a>
                <a href="https://www.instagram.com/" target='_blank' className='p-2 m-2 rounded-full border border-gray-200 hover:shadow-md' type="button"><Icons className="pointer-events-none" width={18} icon="instagram" /></a>
                <a href="https://www.linkedin.com" target='_blank' className='p-2 m-2 rounded-full border border-gray-200 hover:shadow-md' type="button"><Icons className="pointer-events-none" width={18} icon="linkedin" /></a>
                <a href="https://www.twitter.com/" target='_blank' className='p-2 m-2 rounded-full border border-gray-200 hover:shadow-md' type="button"><Icons className="pointer-events-none" width={18} icon="twitter" /></a>
            </div>
        </div>
        <div className='w-1/6 flex items-center justify-center'>
            <button className='bg-black text-white rounded py-[.8rem] px-8'>Contact Me</button>
        </div>
    </div>
  )
}

export default Navbar