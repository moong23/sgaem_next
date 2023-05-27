import Image from "next/image";

const Topbar = () => {
  return (
    <div className="w-full h-[5rem] flex items-center justify-center bg-red-200">
      <div className="w-[62.5vw] h-full bg-yellow-200 flex flex-row justify-between items-center">
        <div
          className={"flex w-[50px] h-[45px] flex-row items-center relative"}
        >
          <Image
            src="/images/applogo_black.svg"
            alt="sgaemLogo"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
