"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Logo from "./../../public/images/logo.svg";
import Search from "./../../public/icons/search.svg";
import Line from "./../../public/icons/line.svg";
import Shop from "./../../public/icons/shop.svg";
import User from "./../../public/icons/user.svg";
import Plus from "./../../public/icons/plus.svg";
import BgLine from "./../../public/icons/bg_line.svg";
import Book from "./../../public/icons/book.svg";
import Lang from "./../../public/icons/lang.svg";
import CarouselGallery from "@/components/Gallery";

export default function Home() {
  const route = usePathname("");
  const generalDetails = [
    { label: "چاپ", value: "۱" },
    { label: "ناشر", value: "بین المللی گاج" },
    { label: "شابک", value: "۹۹۸۲۳۴۲۳۴۰۰" },
    { label: "دسته بندی", value: "زیست شناسی" },
  ];

  const specialDetails = [
    { label: "زمان ثبت آگهی", value: "۱۴۰۲/۰۳/۱۹" },
    { label: "وضعیت ظاهری", value: "نو" },
    { label: "زمان بروز رسانی آگهی", value: "۱۴۰۲/۰۳/۲۰" },
    { label: "سال انتشار", value: "۱۳۹۷" },
  ];
  return (
    <div className="bg-[#E6E7D5] px-24">
      <div className="flex justify-center">
        <div className="h-[144px] bg-white rounded-3xl w-[100%] mt-5 flex-row-reverse flex justify-around items-center">
          <Image src={Logo} width={126} height={26} alt="company logo" />
          <ul className="flex gap-7">
            <li>
              <Link href={""}>اپلیکیشن</Link>
            </li>
            <li>
              <Link href={""}>راهنما</Link>
            </li>
            <li>
              <Link href={""}>قوانین</Link>
            </li>
            <li>
              <Link href={""}>
                {route === "/" && (
                  <div className="relative top-20">
                    <div className="w-[52px] h-[7px] rounded-md bg-orange-500 absolute right-8 bottom-0"></div>
                    <Image
                      src={BgLine}
                      width={112}
                      height={15}
                      alt="BgLine"
                      className="z-10"
                    />
                  </div>
                )}
                <span className="relative -top-[14px]">کتاب های جدید</span>
              </Link>
            </li>
          </ul>

          <div className="relative">
            <Image
              src={Line}
              width={2}
              height={24}
              alt="line"
              className="absolute top-1/2 left-16 transform -translate-y-1/2"
            />
            <Image
              src={Search}
              width={24}
              height={24}
              alt="search"
              className="absolute top-1/2 left-[32px] transform -translate-y-1/2"
            />
            <input
              dir="rtl"
              className="w-[430px] h-[74px] rounded-full bg-[#F5F5EE] placeholder-[#95957B] pl-[40px] pr-[40px]"
              placeholder="نام کتاب مورد نظر خود را وارد کنید ..."
            />
          </div>

          <div className="flex justify-around items-center flex-row-reverse gap-5 ">
            <button className="w-[65px] rounded-full h-[65px] flex justify-center items-center bg-[#F5F5EE]">
              <Image src={User} width={24} height={24} alt="user" />
            </button>
            <button className="w-[65px] rounded-full h-[65px] flex justify-center items-center bg-[#F5F5EE]">
              <Image src={Shop} width={24} height={24} alt="Shop" />
            </button>
            <button className="w-[210px] rounded-full h-[65px] flex justify-center items-center bg-[#2A1812] text-white gap-3">
              <Image src={Plus} width={24} height={24} alt="Plus" />
              ثبت کتاب (آگهی)
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-5">
        <Breadcrumb dir="rtl">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                {" "}
                <span className="text-[#9B9B7E]">کتاب ها</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">
                تکنولوژی و جهان آینده
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>آموزش زیست جامع کنکور</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="bg-white rounded-[25px] h-[745px] mt-5" dir="rtl">
        <div className="p-16">
          <div>
            <h1 className="text-5xl">آموزش زیست جامع کنکور</h1>
            <div className="flex mt-6">
              <p>نویسنده:</p>
              <span>
                حمیدرضا زارع ، سهیل میرزایی ، سمیه قادرمرزی ، الهام مرادی ،
                یگانه اورنگی ، مهناز احمدیا
              </span>
            </div>
          </div>

          <div className="flex gap-20 mt-9 justify-between">
            <div className="flex w-[66%] flex-col items-center gap-6">
              <div className="flex justify-around w-full" dir="rtl">
                <div className="flex flex-col justify-center items-center border-l-[1px] border-[#D9D9D9] pl-5 w-[145px]">
                  <Image src={Book} width={40} height={40} alt="company logo" />
                  <p className="mt-2 text-center">
                    تعداد صفحات: <br />
                    ۳۶۲ صفحه
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center border-l-[1px] border-[#D9D9D9] pl-5 w-[145px]">
                  <Image src={Lang} width={40} height={40} alt="company logo" />
                  <p className="mt-2 text-center">
                    زبان کتاب: <br />
                    فارسی
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center border-l-[1px] border-[#D9D9D9] pl-5 w-[145px]">
                  <Image src={Lang} width={40} height={40} alt="company logo" />
                  <p className="mt-2 text-center">
                    نویسنده: <br />
                    نام نویسنده
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center  w-[145px]">
                  <Image src={Lang} width={40} height={40} alt="company logo" />
                  <p className="mt-2 text-center">
                    سال انتشار: <br />
                    ۱۴۰۲
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col justify-start items-end w-full"
                dir="ltr"
              >
                <h2 className="text-xl"> :مشخصات</h2>
                <div
                  className="p-6 rounded-md w-[600px] flex justify-between"
                  dir="rtl"
                >
                  {/* دسته عمومی */}
                  <div className="mb-6">
                    <ul className="space-y-4">
                      {generalDetails.map((detail, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center pb-2"
                        >
                          <span className="font-medium text-gray-700">
                            {detail.label}:
                          </span>
                          <span className="text-gray-900">
                            {detail.value} مرتب
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* دسته ویژه */}
                  <div>
                    <ul className="space-y-4">
                      {specialDetails.map((detail, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center pb-2"
                        >
                          <span className="font-medium text-gray-700">
                            {detail.label}:
                          </span>
                          <span className="text-gray-900">
                            {detail.value} مرتب
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full -mt-10">
                <div className="bg-[#FAF3EA] rounded-lg w-full h-28 flex justify-between px-5 items-center">
                  <div className="flex flex-col">
                    <p className="text-orange-500 text-sm line-through">
                      ۱۱۰/۰۰۰ <span>تومان</span>
                    </p>

                    <p className="font-extrabold">
                      525/۰۰۰ <span>تومان</span>
                    </p>
                  </div>
                  <button className="bg-[#DDAF74] h-14 rounded-full w-64 text-white">
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            </div>

            <div className="w-[33%] h-[600px]">
              <CarouselGallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
