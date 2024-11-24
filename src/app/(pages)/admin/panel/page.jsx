import Logo from "@/components/common/logo";
import Icon from "@/components/ui/Icon";
import Link from "next/link";
import React from "react";

const AdminPanel = () => {
  return (
    <div className="bg-blue-100 h-screen w-screen relative">
      <div className="bg-white absolute inset-0 m-3 rounded-lg shadow-black shadow-md">
        <header className="bg-[#F3F3F3] p-2 border-black border-b-[1px] rounded-tr-md rounded-tl-md flex justify-between items-center">
          <div className="ml-2">
            <Logo />
          </div>
          <div className="flex justify-around items-center gap-5">
            <div>username</div>
            <div>
              <Link
                className="font-semibold flex gap-1 items-center"
                href={"/"}
              >
                <Icon src={"/icons/ico_help.png"} />
                Help
              </Link>
            </div>
            <div>
              <button className="font-semibold flex gap-1 items-center">
                <Icon src={"/icons/ico_quit.png"} />
                Logout
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default AdminPanel;
