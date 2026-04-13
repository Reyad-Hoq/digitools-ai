import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return <div className="w-9/12 mx-auto text-center pt-15">
    <footer className="footer sm:footer-horizontal text-gray-400 p-10">
      <div className="text-left w-11/12">
        <h6 className="text-4xl font-bold text-white">DigiTools</h6>
        <p className="text-gray-400">Premium digital tools for creators, professionals,<br /> and businesses. Work smarter with our suite of powerful tools. </p>
      </div>
      <nav>
        <h6 className="text-white text-lg">Product</h6>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Templates</a>
        <a className="link link-hover">Integrations</a>
      </nav>
      <nav>
        <h6 className="text-white text-lg">Company</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press</a>
      </nav>
      <nav>
        <h6 className="text-white text-lg">Resources</h6>
        <a className="link link-hover">Documentation</a>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">Community</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="text-white text-lg">Social Links</h6>
        <div className="grid grid-flow-col gap-4 text-[#101727]">
          <div className="bg-white w-7 h-7 flex items-center justify-center rounded-full">
            <a>
              <RiInstagramFill className="h-4 w-4" />
            </a>
          </div>
          <div className="bg-white w-7 h-7 flex items-center justify-center rounded-full">
            <a>
              <FaFacebookSquare className="h-4 w-4" />

            </a>
          </div>
          <div className="bg-white w-7 h-7 flex items-center justify-center rounded-full">
            <a>
              <FaXTwitter className="h-4 w-4" />
            </a>

          </div>

        </div>
      </nav>
    </footer>
    <footer className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 text-gray-400 text-sm border-gray-500 border-t p-10">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>

      <div className="grid grid-flow-col gap-4">
        <a>
          Privacy Policy
        </a>
        <a>
          Terms of Service
        </a>
        <a>
          Cookies
        </a>
      </div>
    </footer>
  </div>
};
export default Footer;