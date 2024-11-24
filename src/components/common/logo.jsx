import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src={"/images/logo.png"}
      alt="Company Logo"
      width={150}
      height={50}
    />
  );
};

export default Logo;
