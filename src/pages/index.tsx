import MainNews from "@/components/MainNews";
import CustomSwiper from "@/components/Swiper";
import Image from "next/image";
import axios from "axios";
import { INewsList, IYoutubeList } from "@/Interfaces/mainpage";
import MainYoutube from "@/components/MainYoutube";
import Bottombar from "@/components/Bottombar";

interface IHome extends INewsList, IYoutubeList {}

export default function Home({ newsList, youtubeList }: IHome) {
  return (
    <main className={"w-[100vw] flex flex-col bg-gray-300"}>
      {/* Swiper Rendering Component */}
      <CustomSwiper />
      {/* 4E Rendering Component*/}
      <div className="w-[100vw] h-[44.79vw] relative">
        <Image
          src="/images/Main_4E.svg"
          alt="sgaem4E"
          fill
          priority
          quality={100}
          draggable={false}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221920%22%20height%3D%22800%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201920%20800%22%20preserveAspectRatio%3D%22none%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%20%20%20%20%20%20%20%20%20%20%23holder%20text%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%20%23ffffff%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2040px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20400%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Cg%20id%3D%22holder%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23cccccc%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctext%20text-anchor%3D%22middle%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20dy%3D%22.3em%22%3E1920%20x%20800%3C%2Ftext%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fsvg%3E"
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* Activity Rendering Component */}
      <div className="w-[100vw] h-[44.79vw] relative">
        <Image
          src="/images/Main_Activity.svg"
          alt="sgaem4E"
          fill
          quality={100}
          draggable={false}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221920%22%20height%3D%22800%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201920%20800%22%20preserveAspectRatio%3D%22none%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%20%20%20%20%20%20%20%20%20%20%23holder%20text%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%20%23ffffff%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2040px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20400%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Cg%20id%3D%22holder%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23cccccc%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctext%20text-anchor%3D%22middle%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20dy%3D%22.3em%22%3E1920%20x%20800%3C%2Ftext%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fsvg%3E"
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* News Rendering Component */}
      <div className="w-full h-[41.67vw] bg-[#F8F8FA] flex flex-col items-center justify-center">
        <MainNews newsList={newsList} />
      </div>
      <div className="w-full h-[40vw] bg-[#F1F1F5] flex flex-col items-center justify-center">
        <MainYoutube youtubeList={youtubeList} />
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const newsRes = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/news/recent`
  );

  const youtubeRes = await axios.get(
    `${`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCldf-sx1NRh0Tls03EpTySA&maxResults=2&type=video&order=date&key=${process.env.NEXT_PUBLIC_API_KEY}`}`
  );

  return {
    props: {
      newsList: newsRes.data.newsData,
      youtubeList: youtubeRes.data.items.map((item: any) => item.id.videoId),
    },
  };
};
