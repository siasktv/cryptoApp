import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'

export default function Footer(){
    return(
        <div className="flex justify-between ">
            <div className="flex flex-col gap-8">
            <p className="text-black font-bold text-lg">Crypto <span className="text-green-700 text-lg font-bold">App</span></p>
            <div className='flex gap-4'>
            <FaInstagram/>
            <FaFacebook/>
            <FaTwitter/>
            <FaYoutube/>
            </div>
            </div>
            <div>About us</div>
            <div>Services</div>
            <div>Learn</div>
        </div>
    )
}