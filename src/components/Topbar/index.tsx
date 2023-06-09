import Image from "next/image";
import Link from "next/link";

import TopbarMenuList from "@/constants/TopbarMenuList";

const Topbar = () => {
  return (
    <div className="w-full h-[5rem] flex items-center justify-center xl:bg-white bg-red-200">
      {/* Responsive: min width needed */}
      <div className="w-[max(62.5vw,80rem)] h-full flex flex-row gap-12 justify-between items-center">
        {/* App Logo Divider */}
        <Link
          href="/"
          draggable={false}
          className={
            "flex w-[4.375rem] h-[3.125rem] flex-row items-center relative"
          }
        >
          <Image
            src="/images/applogo_black.svg"
            alt="sgaemLogo"
            fill
            priority
            draggable={false}
            style={{ objectFit: "contain" }}
          />
        </Link>
        {/* Topbar Menu Divider */}
        <div
          className={
            "w-full h-full flex flex-row items-center gap-8 text-black font-semibold"
          }
        >
          {TopbarMenuList.map((item, index) => {
            return (
              <Link
                draggable={false}
                className="h-full flex items-center"
                href={item.link}
                key={index}
              >
                <span>{item.name.toUpperCase()}</span>
              </Link>
            );
          })}
        </div>
        {/* Auth Control Divider */}
        <div
          className={
            "flex flex-row w-[15%] h-full justify-end items-center gap-8"
          }
        >
          {/* TODO: Auth 여부에 따른 분기처리 필요 */}
          <Link
            draggable={false}
            href="/login"
          >
            <span>로그인</span>
          </Link>
          <Link
            draggable={false}
            href="/signup"
          >
            <span>회원가입</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
