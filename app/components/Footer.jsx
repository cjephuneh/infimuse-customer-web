import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-start py-4 gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-lg">Contact us</h1>
          <ul className="flex flex-col gap-1 text-sm">
            <li>+254712340967</li>
            <li>infimuse@infimuse.com</li>
            <li>infimuse, Tom Mboya street, Nairobi, Kenya</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 w-fit">
          <h1 className="font-semibold text-lg">Our services</h1>
          <ul className="flex flex-col gap-1 text-sm">
            <li>Home</li>
            <li>About us</li>
            <li>Our services</li>
            <li>Features</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-lg">Quick Links</h1>
          <ul className="flex flex-col gap-1 text-sm">
            <li>Knowledge base</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-lg">Infimuse</h1>
          <ul className="flex gap-3 text-lg">
            <li>
              <FaXTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaLinkedin />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
