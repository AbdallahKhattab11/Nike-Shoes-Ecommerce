import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-[#160021] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <a
            href="#"
            className="text-2xl font-bold italic uppercase text-accent-purple font-poppins mb-6 block"
          >
            tigrun
          </a>
          <p className="text-primary-light/80 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus earum sequi ducimus.
          </p>
        </div>

        {/* Links Columns */}
        {footerLinks.map((section) => (
          <div key={section.title} className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-xl capitalize">
              {section.title}
            </h4>
            <ul className="flex flex-col gap-3">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    className="text-primary-light/70 hover:text-accent-purple transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Brand Column 2 replacement or catch-all */}
        {/* The original design had 3 columns, I'm mapping 2 from constants + brand column. */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-bold text-xl capitalize">Socials</h4>
          <ul className="flex gap-4">
            <li>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent-purple transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            {/* Icons would require font awesome or react icons, keeping simple for now */}
          </ul>
          <p className="text-primary-light/50 text-xs mt-4">
            © 2024 Tigrun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
