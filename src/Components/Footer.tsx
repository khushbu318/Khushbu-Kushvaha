import { Info, socialLinks } from "../user";
import { IconMail } from '@tabler/icons-react'; // Import mail icon

const Footer = () => {
  // Render social icons
  const socialIcons = socialLinks.map((socialLink, index) => {
    return (
      <a
        key={index}
        href={`${socialLink.Link}`}
        target="_blank"
        className="font-mono text-lg hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out"
      >
        <div>
          <socialLink.icon stroke={1.5} size={25} />
        </div>
      </a>
    );
  });

  return (
    <div className="font-mono mt-20 mb-10 flex flex-col gap-2 items-center">

      {/* Footer Title */}
      <div className="text-3xl md-mx:text-2xl text-primaryColor font-semibold">
        {Info.name}
      </div>

      {/* Social Icons and Mail Icon */}
      <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6">
        {/* Render Social Icons */}
        {socialIcons}

        {/* Mail Icon for sm and xsm sizes */}
        <div className="sm:flex xsm:flex hidden justify-center items-center">
          <a href="mailto:khushbu.kushvaha.work@gmail.com" className="font-mono text-lg hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out">
            <IconMail stroke={1.5} size={25}/> {/* Mail Icon */}
          </a>
        </div>
      </div>


      {/* Footer Copyright */}
      <div className="text-textColor text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center">
        Copyright &copy; {new Date().getFullYear()} {Info.name} <span className="xs-mx:hidden">|</span> <span>All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
