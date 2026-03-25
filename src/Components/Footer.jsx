import {
  IoLocationSharp,
  IoMail,
  IoCall,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-black text-white">
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto text-center p-10">
        
        <div>
          <h1 className="text-2xl mb-5 font-extrabold font-serif">
            COMPANY NAME
          </h1>
          <p className="font-semibold">
            Here you can use rows <br />
            and columns to organize <br />
            your footer content.
          </p>
        </div>

        <div>
          <h1 className="text-2xl mb-5 font-extrabold font-serif">PRODUCTS</h1>
          <div className="font-semibold space-y-2">
            <p>MDBootstrap</p>
            <p>MDWordPress</p>
            <p>BrandFlow</p>
            <p>Bootstrap</p>
            <p>Angular</p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl mb-5 font-extrabold font-serif">
            USEFUL LINKS
          </h1>
          <div className="font-semibold space-y-2">
            <p>Your Account</p>
            <p>Become an Affiliate</p>
            <p>Shipping Rates</p>
            <p>Help</p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl mb-5 font-extrabold font-serif">CONTACTS</h1>

          <div className="font-semibold space-y-3">
            <div className="flex items-center gap-2 justify-center">
              <IoLocationSharp className="text-fuchsia-400 text-lg" />
              <p>New York, NY 10012, US</p>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <IoMail className="text-fuchsia-400 text-lg" />
              <p>info@gmail.com</p>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <IoCall className="text-fuchsia-400 text-lg" />
              <p>+ 01 234 567 88</p>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <IoCall className="text-fuchsia-400 text-lg" />
              <p>+ 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center gap-6 pb-4">
        <IoLogoGithub className="text-2xl cursor-pointer hover:text-fuchsia-400" />
        <IoLogoLinkedin className="text-2xl cursor-pointer hover:text-fuchsia-400" />
      </div>

      <div className="text-center p-4 border-t border-gray-700">
        <p>
          Designed by{" "}
          <span className="text-fuchsia-400 font-bold font-serif text-xl">
            AKOREDE
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
