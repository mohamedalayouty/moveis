import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="text-center font-bold mb-6">
        <h1>
          ©2023
          <span className=" text-[#1d4ed8] text-2xl font-bold ms-1">
            React Moveis
          </span>
          , All Rights Reserved
        </h1>
        <div className="flex justify-center items-center gap-4 mt-2">
          <h1 className="text-[#dc2626]">About Us</h1>
          <h1 className="text-[#dc2626]">Terms Of Use</h1>
          <h1 className="text-[#dc2626]">Privacy</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
