import { Link } from "react-router-dom"
import logo from "../assets/logo.png"


function Footer() { 
  return (
    <footer className="bg-sky-950 text-white py-4">
      <div className="container xl:mx-auto flex flex-col md:flex-row justify-center">

        <nav className="grid grid-cols-3 gap-1 md:flex md:flex-row xl:space-y-2 xl:space-x-28">
          <div className="flex flex-col space-y-3 md:space-y-8 lg:space-y-8 xl:space-y-4 justify-center text-center">
            <p className="font-bold text-center xl:pt-3 xl:pb-4 text-sm lg:text-base xl:text-lg">My account</p>
            <FooterButton>My Profile</FooterButton>
            <FooterButton>My Trips</FooterButton>
            <FooterButton>My Itinerary</FooterButton>
            <FooterButton>My Bookings</FooterButton>
          </div>

          <div className="flex flex-col space-y-2 text-center md:space-y-8 xl:space-y-6 justify-center">
            <p className="font-bold text-center pt-3 pb-4 text-sm lg:text-base xl:text-lg">About Us</p>
            <FooterButton>Our Story</FooterButton>
            <FooterButton>FAQs</FooterButton>
            <FooterButton>Terms & Conditions</FooterButton>
            <FooterButton>Privacy Policy</FooterButton>
          </div>

          <div className="flex flex-col space-y-3 text-center md:space-y-8 justify-center">
            <p className="font-bold text-center pt-3 pb-4 text-sm lg:text-base xl:text-lg">Contact Us</p>
            <FooterButton>E-mail</FooterButton>
            <FooterButton>Phone</FooterButton>
            <FooterButton>Address</FooterButton>
            <FooterButton>Careers</FooterButton>
          </div>

          <div className="flex flex-col space-y-8 md:space-y-12 justify-center items-center">
            <p className="font-bold text-center pt-3 pb-4 text-sm lg:text-base xl:text-lg">Follow Us</p>
            <FooterButton><img src="./src/assets/fb.png" alt="facebook logo" width={28} /></FooterButton>
            <FooterButton><img src="./src/assets/x.png" alt="" width={28} /></FooterButton>
            <FooterButton><img src="./src/assets/instagram.png" alt="instagram logo" width={28} /></FooterButton>
          </div>

          <div className="md:flex flex-col space-y-1 md:space-y-9 xl:space-y-10 justify-center items-center hidden">
            <p className="font-bold text-center pt-3 pb-4 text-sm lg:text-base xl:text-lg">Our location</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1448.1033459376365!2d-95.4054801097131!3d29.767236195079953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0adf15f269b%3A0x3d7bd78b9f5e91d0!2s4311%20Gibson%20St%2C%20Houston%2C%20TX%2077007%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1728893221227!5m2!1ses-419!2smx"
              width="200"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="mx-auto"
            ></iframe>
            <p className="mt-4 text-center md:text-xs lg:text-sm xl:text-base">4311 Gibson St, Houston, TX 77007, EE. UU.</p>
          </div>

          <div className="flex flex-col space-y-0 md:space-y-3 justify-evenly items-center">
            <p className="text-sm md:text-sm lg:text-base xl:text-lg font-bold text-center pt-3 pb-2">Subscribe to our newsletter</p>
            <input
              type="email"
              placeholder="Enter your email address"
              className="border border-gray-300 rounded-md p-2 w-full text-black text-center text-xs md:text-sm"
            />
            <button className="bg-rose-500 text-white px-4 py-2 rounded-md text-xs md:text-sm xl:text-base">Subscribe</button>

            <Link to="/Home.jsx" className="pe-3">
              <img src={logo} alt="Logo" className="w-14 md:w-20 cursor-pointer pt-4 md:pt-7 pb-0" />
            </Link>
            <p className="text-center text-xs xl:text-base">© 2024 MyTenary. All rights reserved.</p>
          </div>
        </nav>

      </div>
    </footer>
  );
}

export function FooterButton({ href, children }) {
  return (
    <a href={href} className="text-white hover:bg-sky-900 text-xs md:text-base xl:py-1 xl:px-3 rounded">{children}</a>
  )
}


export default Footer