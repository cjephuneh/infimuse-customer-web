import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row  justify-between items-start py-4 gap-4">
        <div className="flex gap-4 w-full md:w-1/2 justify-evenly md:justify-between px-3 md:px-0">
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-lg">Contact us</h1>
            <ul className="flex flex-col w-1/2 gap-1 text-sm">
              <li>+254712340967</li>
              <li>infimuse@infimuse.com</li>
              <li>infimuse, Tom Mboya street, Nairobi, Kenya</li>
            </ul>
          </div>
          <div className="flex flex-col items-end gap-3 md:w-1/2">
            <h1 className="font-semibold text-lg text-end">Our services</h1>
            <ul className="flex flex-col gap-1 text-sm text-end">
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Features</li>
            </ul>
          </div>
        </div>

        <div className="flex md:justify-between justify-evenly gap-4 md:w-1/2 w-full">
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
    </div>
  );
};

export default Footer;
