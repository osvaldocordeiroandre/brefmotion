import React from 'react'
import './Footer.css'

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className="containerFooter">
            <div className="iconsFooter">
                <div className="instagram">
                    <a href="https://www.instagram.com/bryanreference/" target='_blank'>
                        <FaInstagram size={24} color='white' />
                    </a>
                </div>

                <div className="emailIcons">
                    <a href="mailto:bryanlc397@gmail.com">
                        <MdOutlineEmail size={24} color='white' />
                    </a>
                </div>

                <div className="linkedinIcon">
                    <FaLinkedin size={24} color='white' />
                </div>
            </div>
        </div>
    )
}
