import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white p-3 shadow-md">
        <div className="container mx-4 md:mx-auto flex items-center justify-between max-w-4xl">
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Vodafone_icon.svg"
              alt="Vodafone Logo"
              className="h-10 md:h-10 ml-2 cursor-pointer"
            />
          </div>
          <div className="flex items-center space-x-3">
            <img
              src="https://vodafone-kolay-paket.tr-yanimda.com/index_files/masterpass-hi.svg"
              alt="Masterpass Logo"
              className="h-5 md:h-5 mr-3"
            />
            <img
              src="https://vodafone-kolay-paket.tr-yanimda.com/index_files/3dsecurelogo.png"
              alt="3D Secure Logo"
              className="h-4 md:h-4"
            />
          </div>
        </div>
      </nav>
      <div className="bg-[#333] text-white text-center py-2">
        <p className="text-xs md:text-sm">
          Ödemeniz Masterpass ve 3D Secure ile güvendedir.
        </p>
      </div>
    </>
  );
};

export default Navbar;
