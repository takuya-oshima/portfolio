//MicroCMS SDKのインポート
import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

//Worksカテゴリーの型を定義
export type Category = {
  name: string;
} & MicroCMSListContent;

//Roleカスタムフィールドの型を定義
export type RoleItem = {
  fieldId: string;
  [key: string]: string; // 動的プロパティを許容
};


//Worksで扱う情報の型を定義
export type Works = {
  title_ja: string;
  title_en: string;
  titleKana: string;
  titleAbbreviation: string;
  category:{
    name: string;
  },
  url: string;
  releaseDate: string;
  overview_ja: string;
  overview_en: string;
  thumbnail: MicroCMSImage;
  mainImage: MicroCMSImage;
  pageImagesPC?: MicroCMSImage[]; //※複数画像の場合は[]配列であることを定義する
  pageImagesSP?: MicroCMSImage[]; //※複数画像の場合は[]配列であることを定義する
  technologiesTools: string;
  role: RoleItem[];
} & MicroCMSListContent;

//Works一覧を取得
export const getWorksList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Works>({
    endpoint: "works",
    queries: {
      fields: ["id", "title_ja", "title_en", "category", "thumbnail"],
    },
  });
  return listData;
};

////Works詳細を取得
export const getWorksDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Works>({
    endpoint: "works",
    contentId,
    queries,
  });
  return detailData;
};


//.env.localで設定したMicroCMSのDOMAINとAPIKEYを参照
if (!process.env.MICROCMS_SERVICE_DOMAIN){
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}
if(!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});
