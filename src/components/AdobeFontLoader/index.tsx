"use client";

import { useEffect } from 'react';

export default function AdobeFontLoader() {
  useEffect(() => {
    // 既に同じCSSが読み込まれていないかチェック（開発時の再実行などを防ぐため）
    if (document.querySelector('link[href="https://use.typekit.net/vus0aaz.css"]')) {
      return;
    }

    // <link>要素をプログラムで作成
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.media = 'print'; // 最初はレンダリングをブロックしないように設定
    link.href = 'https://use.typekit.net/vus0aaz.css';

    // 読み込みが完了した際のイベントハンドラを設定
    link.onload = () => {
      link.media = 'all';
    };

    // 作成した<link>要素を<head>タグの子要素として追加
    document.head.appendChild(link);

  }, []); // 空の依存配列[]は、この処理が初回レンダリング後に一度だけ実行されることを保証する

  // このコンポーネント自体は何も画面に表示しないのでnullを返す
  return null;
}
