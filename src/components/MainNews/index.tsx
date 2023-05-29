import { INewsList } from "@/Interfaces/INewsList";
import Image from "next/image";

const NewsCard = ({ news }: any) => {
  // TODO: 여기서부터 다시 작업
  return (
    <div className="w-[30vw] h-[30vw] flex flex-col shadow-md">
      {/* Image Container */}
      <div className="w-full h-3/4 relative">
        <Image
          src={news.imageSrc.data}
          alt="sgaem_news"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* Context Container */}
      <div className="w-full h-1/4 bg-white p-[1.25vw]">
        <div className="text-[1.250vw] font-semibold text-[#707070]">
          {news.headline}
        </div>
        <div className="text-[0.833vw] font-normal text-[black] text-ellipsis-multi-line">
          {news.content}
        </div>
      </div>
    </div>
  );
};

const MainNews = ({ newsList }: INewsList) => {
  console.log(newsList);
  return (
    <>
      <div className="text-[2.083vw] font-semibold mb-1">NEWS</div>
      <div className="text-[1.15vw] font-normal text-[#979797]">
        스겜의 최신 소식을 확인하세요.
      </div>
      <div className="w-full flex flex-row gap-8 justify-center">
        {newsList?.map((news) => (
          <NewsCard
            key={news._id}
            news={news}
          />
        ))}
      </div>
    </>
  );
};

export default MainNews;
