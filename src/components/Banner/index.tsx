import Image from "next/image";

const Banner = ({ imgSrc }: any) => {
  return (
    <div className="w-full h-[20.833vw] relative">
      <Image
        src={imgSrc}
        alt="page banner"
        fill
        sizes={"100%"}
        draggable={false}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};
export default Banner;
