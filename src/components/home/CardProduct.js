import {
  HomeCardProduct,
  HomeCardWrapper,
  HomeCardImg,
  HomeCardCategory,
  HomeCardName,
  HomeCardHover,
  HomeCardPrice,
  HomeCardButton,
  HomeCardBuy,
  HomeCardDontFounds,
} from "./Homeelements";
import buyWhite from "../../assets/icons/buy-white.svg";
import buyBlue from "../../assets/icons/buy-blue.svg";
import coin from "../../assets/icons/coin.svg";
import { getHistory, getUser, redeem } from "../../services";

const CardProduct = ({
  product,
  setPoints,
  points,
  setHistory,
  showHistory,
}) => {
  const handleRedeem = async (id) => {
    const x = await redeem(id);
    console.log("x: ", x);
    const updateUser = await getUser();
    console.log(updateUser.points);
    setPoints(updateUser.points);
    const UpdateHistory = await getHistory();
    console.log("update history: ", UpdateHistory);
    setHistory(UpdateHistory.reverse());
  };

  return (
    <HomeCardProduct>
      <HomeCardWrapper>
        {product.cost > points ? (
          <HomeCardDontFounds>
            You need {product.cost - points}
            <img src={coin} />
          </HomeCardDontFounds>
        ) : (
          <HomeCardBuy src={buyBlue}></HomeCardBuy>
        )}
        <HomeCardImg>
          <img src={product.img.url} />
        </HomeCardImg>

        <hr />
        <HomeCardCategory>{product.category}</HomeCardCategory>

        <HomeCardName>{product.name}</HomeCardName>
      </HomeCardWrapper>

      <HomeCardHover>
        {product.cost < points ? (
          <>
            <img src={buyWhite} />
            <HomeCardPrice>
              {product.cost}
              <img src={coin} />
            </HomeCardPrice>
            <HomeCardButton
              onClick={() => {
                if (!showHistory) handleRedeem(product._id);
              }}
            >
              Redeem now
            </HomeCardButton>
          </>
        ) : (
          <>
            <HomeCardPrice>
              {product.cost}
              <img src={coin} />
            </HomeCardPrice>
            <HomeCardButton>Without funds</HomeCardButton>
          </>
        )}
      </HomeCardHover>
    </HomeCardProduct>
  );
};

export default CardProduct;
