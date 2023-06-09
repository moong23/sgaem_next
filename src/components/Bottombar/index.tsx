import Image from "next/image";
import BottombarLinkList from "@/constants/BottombarLinkList";
import Link from "next/link";

const Bottombar = () => {
  return (
    <div className="w-full h-[10.4vw] bg-[#181830] flex justify-center">
      {/* Responsive: min width needed */}
      <div className="w-[max(62.5vw,80rem)] h-full flex flex-row items-center">
        <div className="w-1/2 h-full flex justify-between items-center">
          {/* App Logo Divider */}
          <div className="w-full h-1/3 relative">
            <Image
              src="/images/appLogo_white.svg"
              alt="appLogo"
              fill
              draggable={false}
              style={{ objectFit: "contain" }}
            />
          </div>
          {/* Creater Information Divider */}
          <div className="w-full h-full flex flex-col justify-center items-center text-white gap-[0.833vw]">
            <div className="w-fit h-fit flex flex-col justify-start border-y-2 border-white py-1 text-[0.938vw]">
              <p>
                주소 : 서울특별시 마포구 백범로 35 (서강대학교 엠마오관 132호)
              </p>
              <p>이메일 : sogangsgaem@gmail.com</p>
            </div>
            <div className="w-[24.173vw] h-fit flex flex-row justify-between items-center text-[0.729vw]">
              <p>개발 : 김문기</p>
              <p> 디자인 : 김민용 최준혁 </p>
              <p>기획 : 김민용 이주환 2022 SGAEM</p>
            </div>
          </div>
        </div>
        {/* Social Media Divider */}
        <div className="w-1/2 h-full flex justify-start">
          <div className="w-4/5 h-full flex justify-end items-center gap-2">
            {BottombarLinkList.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  draggable={false}
                  className="w-[2.083vw] h-[2.083vw] relative"
                  key={index}
                  target="_blank"
                >
                  {/* TODO: React Icons로 바꾸기?! */}
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    draggable={false}
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottombar;
