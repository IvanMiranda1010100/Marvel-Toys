export const FooterPage = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-6 md:px-6 md:py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Medios de pago */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold uppercase mb-4">Medios de pago</h2>
            <ul className="flex flex-wrap justify-center gap-2">
              {[
                "visa.png",
                "american-express.png",
                "naranja.png",
                "cabal.png",
                "maestro.png",
                "diners-club.png",
                "nativa.png",
                "argencard.png",
                "deposito.png",
                "acordar.png",
              ].map((src, index) => (
                <li key={index} className="w-12 h-12 lg:w-10 lg:h-10">
                  <img
                    src={`https://dk0k1i3js6c49.cloudfront.net/iconos-pago/${src}`}
                    alt="Medio Pago"
                    className="w-full h-full object-contain"
                  />
                </li>
              ))}
              {/* Logo de PayPal */}
              <li className="w-12 h-12 lg:w-10 lg:h-10">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwbUiy3hHxllR47quPLalw0K-USf5poRGSA&s"
                  alt="PayPal"
                  className="w-full h-full object-contain"
                />
              </li>
            </ul>
            <h2 className="text-lg font-semibold uppercase mt-6 mb-4">Medios de envío</h2>
            <ul className="flex flex-wrap justify-center gap-2">
              {[
                "correo-argentino.png",
                "acordar.png",
              ].map((src, index) => (
                <li key={index} className="w-12 h-12 lg:w-10 lg:h-10">
                  <img
                    src={`https://dk0k1i3js6c49.cloudfront.net/iconos-envio/${src}`}
                    alt="Medio Envio"
                    className="w-full h-full object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold uppercase mb-4">Redes Sociales</h2>
            <ul className="flex flex-col items-center gap-4">
              {[
                { href: "https://www.x.com/", name: "Twitter", color: "#1DA1F2" },
                { href: "https://www.facebook.com", name: "Facebook", color: "#4267B2" },
                { href: "https://www.instagram.com/", name: "Instagram", color: "#E1306C" },
              ].map((social, index) => (
                <li key={index}>
                  <a href={social.href} className="text-gray-400 hover:text-[social.color] flex items-center">
                    <span className="ml-2">{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold uppercase mb-4">Contacto</h2>
            <ul className="flex flex-col items-center gap-4">
              {[
                { href: "mailto:alfa02ruizmiranda@gmail.com", text: "alfa02ruizmiranda@gmail.com" },
                { href: "sms:1168712714", text: "1168712714" },
                { href: "#", text: "Loma Hermosa, Buenos Aires, Argentina" },
              ].map((contact, index) => (
                <li key={index}>
                  <a href={contact.href} className="text-gray-500 hover:text-gray-300">{contact.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-20 py-4">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center md:flex-row md:justify-between px-4">
          <span className="text-sm text-gray-500">© 2024 <a className="text-gray-300 ">Ivan Miranda™</a>. All Rights Reserved.</span>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {[
              { href: "https://www.facebook.com", icon: (
                <svg className="w-5 h-5 text-gray-400 hover:text-[#395498]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                </svg>
              ), name: "Facebook" },
              { href: "https://www.discord.com", icon: (
                <svg className="w-5 h-5 text-gray-400 hover:text-[#5865F2]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
              ), name: "Discord" },
              { href: "https://www.github.com", icon: (
                <svg className="w-5 h-5 text-gray-400 hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0C4.478 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.483 0-.237-.01-1.02-.014-1.85-2.782.605-3.369-1.342-3.369-1.342-.454-1.152-1.11-1.459-1.11-1.459-.906-.621.069-.609.069-.609 1 .07 1.573 1.033 1.573 1.033.887 1.539 2.331 1.093 2.91.836.091-.641.349-1.093.635-1.343-2.217-.25-4.556-1.108-4.556-4.946 0-1.092.39-1.988 1.033-2.684-.103-.253-.448-1.275.099-2.658 0 0 .84-.27 2.75 1.034a9.514 9.514 0 0 1 2.503-.337c.855.004 1.715.117 2.507.337 1.91-1.304 2.75-1.034 2.75-1.034.548 1.383.202 2.405.099 2.658.644.696 1.034 1.592 1.034 2.684 0 3.853-2.348 4.698-4.576 4.946.361.312.682.924.682 1.86 0 1.337.003 2.414.004 2.742 0 .269.18.576.688.48C17.135 18.167 20 14.418 20 10 20 4.477 15.522 0 10 0Z" />
                </svg>
              ), name: "GitHub" },
            ].map((social, index) => (
              <a key={index} href={social.href} className="text-gray-400 hover:text-gray-300">
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
