// useStateを利用できるようにReactをimport
import { useEffect, useState } from "react";

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

// catAPIの実装
const fetchCatImage = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = await res.json();
  return result[0];
};

fetchCatImage().then((image) => {
  console.log(`猫の画像: ${image.url}`);
});

// 画面を描画
const IndexPage = () => {
  const [catImage, setCatImage] = useState<string | undefined>(undefined);

  const handleClick = () => {
    setCatImage(randomCatImage());
  };

  useEffect(() => {
    setCatImage(randomCatImage());
  }, []);

  return (
    <div>
      <button onClick={handleClick}>今日のにゃんこ🐱</button>
      <div style={{ marginTop: 8 }}>
        <img src={catImage} />
      </div>
    </div>
  );
};

export default IndexPage;

interface CatCategory {
  id: number;
  name: string;
}
interface SearchCatImage {
  breeds: string[];
  categories: CatCategory[];
  id: string;
  url: string;
  width: number;
  height: number;
}
type SearchCatImageResponse = SearchCatImage[];
