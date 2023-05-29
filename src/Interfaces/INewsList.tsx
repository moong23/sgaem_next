export interface INewsList {
  newsList: {
    _id: string;
    headline: string;
    content: string;
    imageSrc: {
      data: string;
      contentType: string;
    };
    newstype: "sgaem" | "comp";
  }[];
}
