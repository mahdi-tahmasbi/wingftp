import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { IoIosExit } from "react-icons/io";

const AdminAuthentication = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col space-y-7 -mt-40">
      <div className="shadow-md w-[90%] max-w-[480px] rounded-md p-6 bg-white">
        <div className="flex gap-3 items-end">
          <Image
            src={"/images/logo.png"}
            alt="Company Logo"
            width={150}
            height={50}
          />
          <h1 className="font-medium text-[#CCC] text-2xl">Administration</h1>
        </div>
        <form className="flex flex-col space-y-6 mt-16">
          {/* Account Input */}
          <div className="relative w-full group">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-black" />
            <input
              type="text"
              placeholder="Account"
              className="border-2 border-gray-200 focus:border-purple-300 w-full h-[40px] rounded-sm pl-10"
            />
          </div>
          {/* Password Input */}
          <div className="relative w-full group">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-black" />
            <input
              type="password"
              placeholder="Password"
              className="border-2 border-gray-200 focus:border-purple-300 w-full h-[40px] rounded-sm pl-10"
            />
          </div>

          {/* Remember Me Checkbox*/}
          <div>
            <label className="gap-2 flex cursor-pointer">
              <input
                type="checkbox"
                name="remember"
                className="cursor-pointer"
                id="remember"
                value="true"
              />
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <div>
            <Button className="w-[440px] h-10 bg-[#1f7ff8] font-semibold text-sm">
              <IoIosExit />
              Login
            </Button>
          </div>
        </form>
      </div>

      <div>
        <h2 className="text-sm">
          <a href=""> Wing FTP Server</a> ©2003-2024 wftpserver.com All Rights
          Reserved
        </h2>
      </div>
    </div>
  );
};

export default AdminAuthentication;
