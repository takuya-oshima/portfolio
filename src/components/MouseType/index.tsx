"use client";
import { useRef,useEffect } from "react";

export default function MouseType() {
  const mouseCursorRef = useRef<HTMLDivElement>(null);
  const mouseStalkerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseCursor = mouseCursorRef.current;
    const mouseStalker = mouseStalkerRef.current;

    // ページの描画が完全に終わるのを待ってから処理を開始
    const timeoutId = setTimeout(() => {

      if (!mouseCursor || !mouseStalker) return;

      // --- 1. カーソルとストーカーの初期位置を画面中央に設定 ---
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // マウスの実際の座標と、ストーカーが表示される座標の変数を初期化
      let mouseX = centerX;
      let mouseY = centerY;
      let stalkerX = centerX;
      let stalkerY = centerY;

      // 計算した中央座標を即座に適用し、初期位置を決定
      mouseCursor.style.transform = `translate(${centerX}px, ${centerY}px)`;
      mouseStalker.style.transform = `translate(${stalkerX}px, ${stalkerY}px)`;

      // 初期描画時から遅れてopacity:0からopacity:1にする
      setTimeout(() => {
        if (mouseCursor) mouseCursor.style.opacity = '1';
        if (mouseStalker) mouseStalker.style.opacity = '1';
      }, 500);

      // --- 2. マウス座標のリアルタイム追跡 ---
      const onMouseMove = (e: MouseEvent) => {
        // マウスが動くたびに、mouseXとmouseYの値を更新
        mouseX = e.clientX;
        mouseY = e.clientY;
        // マウスカーソル本体は、マウスの動きに直接追従させる
        mouseCursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      };

      // --- 3. ストーカー要素のアニメーション処理 ---
      const animate = () => {
        // 現在のストーカー位置からマウスの目標位置まで、一定の割合で近づける（イージング効果）
        stalkerX += (mouseX - stalkerX) * 0.1;
        stalkerY += (mouseY - stalkerY) * 0.1;
        mouseStalker.style.transform = `translate(${stalkerX}px, ${stalkerY}px)`;
        requestAnimationFrame(animate);
      };

      // --- 4. ホバーエフェクト ---
      const handleMouseOver = (e: MouseEvent) => {
        // マウスが乗った要素、またはその親要素が 'a' または 'button' かをチェック
        if (e.target instanceof Element && e.target.closest('a, button')) {
          mouseCursor.classList.add("cursor--active");
          mouseStalker.classList.add("stalker--active");
        } else {
          mouseCursor.classList.remove("cursor--active");
          mouseStalker.classList.remove("stalker--active");
        }
      };

      // --- 5. ウィンドウ外へのマウス移動検知 ---
      // マウスカーソルがウィンドウ領域から完全に出た時の処理
      const handleMouseOutWindow = () => {
        if (mouseStalker) {
          mouseCursor.classList.add("mouse-out");
          mouseStalker.classList.add("mouse-out");
        }
      };
      // マウスカーソルがウィンドウ領域内に戻ってきた時の処理
      const handleMouseOverWindow = () => {
        if (mouseStalker) {
          mouseCursor.classList.remove("mouse-out");
          mouseStalker.classList.remove("mouse-out");
        }
      };

      // --- 6. イベントリスナーの設定 ---
      // document全体でマウスの動きを監視。後から追加された要素にも対応できる
      document.addEventListener("mouseover", handleMouseOver);

      // ウィンドウ外への出入りを監視
      document.addEventListener("mouseleave", handleMouseOutWindow);
      document.addEventListener("mouseenter", handleMouseOverWindow);

      // マウス座標を更新するために、mousemoveイベントを監視
      window.addEventListener("mousemove", onMouseMove);
      // アニメーションループを開始
      animate();

      // --- 8. クリーンアップ処理 ---
      // コンポーネントがアンマウント（画面から消える）された時に実行される
      return () => {
        // 設定した全てのイベントリスナーを削除し、メモリリークを防ぐ
        document.removeEventListener("mouseover", handleMouseOver);
        document.removeEventListener("mouseleave", handleMouseOutWindow);
        document.removeEventListener("mouseenter", handleMouseOverWindow);
        window.removeEventListener("mousemove", onMouseMove);
      };
    }, 0);

    // コンポーネントのアンマウント時に、最初のsetTimeout自体をクリアする
    return () => clearTimeout(timeoutId);

  }, []);

  return (
    <>
      <div ref={mouseCursorRef} className="mouse-cursor"></div>
      <div ref={mouseStalkerRef} className="mouse-stalker"></div>
    </>
  );
};
