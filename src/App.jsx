import { useEffect, useState } from "react";

const App = () => {
  const acessKey = "_ruatbgWV7clWWIuQN_9ukeOLoP9dXCBtkSb06TPDD8";
  const [img, setImg] = useState("");
  const [nextImg, setNextImg] = useState(0);

  const handleClick = () => setNextImg((i) => i + 1);

  useEffect(() => {
    const getImg = async () => {
      const imgUrl = await fetch(
        `https://api.unsplash.com/photos/?client_id=${acessKey}`,
      );
      const response = await imgUrl.json();
      setImg(response[nextImg].urls.thumb);
    };

    getImg();
  }, [nextImg]);

  return (
    <>
      <h1>Aperte para aqui para gerar imagem qualquer:</h1>
      <img src={img} alt="imagem aleatortia" />
      <button onClick={handleClick}>Mudar Imagem</button>
    </>
  );
};

export { App };
