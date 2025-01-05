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

//Worksで扱う情報の型を定義
export type Works = {
  title: string;
  category: string;
  url: string;
  overview: string;
  topImg: MicroCMSImage;
  underImg?: MicroCMSImage;
  role: string;
} & MicroCMSListContent;

//Works一覧を取得
export const getWorksList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Works>({
    endpoint: "works",
    queries,
  });
  return listData;
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
