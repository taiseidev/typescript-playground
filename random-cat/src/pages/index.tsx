// useStateを利用できるようにReactをimport
import { useState } from "react";

// 画像URLをリストで定義
const catImages: string[] = [
  "https://cdn2.thecatapi.com/images/bpc.jpg",
  "https://cdn2.thecatapi.com/images/eac.jpg",
  "https://cdn2.thecatapi.com/images/6qi.jpg",
];

// ランダムな画像を返す関数を定義
const randomCatImage = (): string => {
  const index = Math.floor(Math.random() * catImages.length);
  return catImages[index];
};

// 画面を描画
const IndexPage = () => {
  const [catImageUrl, setCatImageUrl] = useState(
    "https://cdn2.thecatapi.com/images/bpc.jpg"
  );

  const handleClick = () => {
    setCatImageUrl(randomCatImage());
  };
  return (
    <div>
      <button onClick={handleClick}>今日のにゃんこ🐱</button>
      <div style={{ marginTop: 8 }}>
        <img src={catImageUrl} />
      </div>
    </div>
  );
};

export default IndexPage;
