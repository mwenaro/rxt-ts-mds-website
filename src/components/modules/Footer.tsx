import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex items-center justify-center">
            <span className="text-gray-700 text-lg font-semibold">
              Mombasa Digital Solutions
            </span>
          </div>
          <div className="ml-auto">
            <div className="flex items-center justify-center">
              <a
                href="https://www.facebook.com/mombasadigital/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-indigo-500 mx-3"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com/mombasadigital/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-indigo-500 mx-3"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/mombasadigital/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-indigo-500 mx-3"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;