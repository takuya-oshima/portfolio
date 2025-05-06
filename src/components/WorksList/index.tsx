"use client";

import { useEffect } from "react";
import { Link } from "@/i18n/routing";
import type { Works } from "@/libs/microcms";

type Props = {
  works: Works[];
  locale: string;
};

export default function WorksList({works, locale}: Props) {

  useEffect(() => {
    const items = document.querySelectorAll("[data-thumbnail]");
    const bg = document.getElementById("bg");
    //初期のサムネイル画像を設定
    if(bg) {
      bg.style.backgroundImage = "url('/images/img_bg_default_thumbnail.png')";
    }

    const handleEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const thumbnail = target.dataset.thumbnail;

      //ホバー対象のサムネイル画像を差し替え
      if(bg && thumbnail){
        bg.style.backgroundImage = `url(${thumbnail})`;
      }

      // すべてのアイテムに「他の要素の色を変えるクラス」を追加
      items.forEach((item) => {
        if (item !== target) {
          item.classList.add("inactive"); // 他の要素にinactiveクラスを付与
        } else {
          item.classList.remove("inactive"); // ホバー対象にはinactiveにならないように
        }
      });
    };

    const handleLeave = () => {
      //サムネイル画像を差し替え
      if(bg) {
        bg.style.backgroundImage = "url('/images/img_bg_default_thumbnail.png')";
      }

      // 全てのinactiveクラスを外す
      items.forEach((item) => {
        item.classList.remove("inactive");
      });

    };

    //マウスホバーでclassの切り替え処理
    items.forEach((item) => {
      item.addEventListener("mouseenter", handleEnter);
      item.addEventListener("mouseleave", handleLeave);
    });

    //クリーンアップ
    return () => {
      items.forEach((item) => {
        item.removeEventListener("mouseenter", handleEnter);
        item.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  if(works.length === 0){
    return <div>データがありません。</div>;
  }
  return (
    <ul className="lg:w-10/12 2xl:w-full mx-auto mb-34 md:mb-[12.5rem] counter-reset-list">
      {works.map((works) => (
        <li key={works.id} className="-mt-[1px] border-t border-b border-[#aaa] dark:border-[#444] " data-thumbnail={works.thumbnail?.url || ''}>
          <Link href={`/works/${works.id}`} className="flex justify-start items-center py-4 px-2 counter-increment-item text-base md:text-lg">
            {locale === "ja" ? (
              <h2 className="ml-2 md:ml-8 py-4 font-ja text-base md:text-2xl leading-normal">
                {works.title_ja}
                <span className="ml-2 md:ml-4">;</span>
              </h2>
            ) : locale === "en" ? (
              <h2 className="ml-2 md:ml-8 text-base md:text-3.5xl leading-normal">
                {works.title_en}
                <span className="ml-2 md:ml-4">;</span>
              </h2>
            ) : null}
            <div className="ml-auto text-base md:text-lg">{works.category.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

