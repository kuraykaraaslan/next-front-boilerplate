import { faFacebook, faTiktok, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {

  return (
    <div className="bg-black text-white border-t border-gray-400">
      <footer className="footer py-10 text-center max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">LinkedIn</a>
        </nav>

      </footer>
      <div className="border-t border-gray-400">
      <footer className="footer px-10 py-4 text-center max-w-7xl mx-auto">
        <aside className="items-center grid-flow-col">
          <p>© 2024 Pegasus. All rights reserved.</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" aria-hidden="true" />
            <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" aria-hidden="true" />
            <FontAwesomeIcon icon={faTwitter} className="h-4 w-4" aria-hidden="true" />
            <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" aria-hidden="true" />
            <FontAwesomeIcon icon={faTiktok} className="h-4 w-4" aria-hidden="true" />

          </div>
        </nav>
      </footer>
      </div>
    </div>
  )
};

export default Footer;