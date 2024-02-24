import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-xl font-bold mr-2">App for</h2>
          <img
            src="https://i.ibb.co/qjvp9L7/8405d0b564e86a7ba13fe5ade52cca7d-cubo-amarillo-plano.png"
            alt="nenes icon"
            className="h-8 mr-2"
          />
          <a href="https://nenes.io/es" target="_blank">
            <h2 className="text-xl font-bold">nenes.io</h2>
          </a>
        </div>
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
          <a href="gastoniglesiasdev.com">gastoniglesiasdev.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
