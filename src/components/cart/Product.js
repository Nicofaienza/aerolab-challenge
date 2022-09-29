import {
  CartProduct,
  CartPorductImg,
  CartProductName,
  CartProductData,
  CartProductPrice,
} from "./Cartelements";
import { AiOutlineClockCircle } from "react-icons/ai";
import coin from "../../assets/icons/coin.svg";
import { useInView } from "react-intersection-observer";
import "../../styles/index.css";

const Product = ({ redeem }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <CartProduct className={inView ? "in-view" : "not-in-view"} ref={ref}>
      <CartPorductImg id="cart-product-img">
        <img src={redeem.img.url} />
      </CartPorductImg>

      <hr />

      <div id="product-info-container">
        <CartProductName id="cart-product-name">{redeem.name}</CartProductName>
        <CartProductData id="cart-product-data">
          <p id="date">Redeem Date:</p>
          <p>{redeem.createDate.slice(0, 10)}</p>
          <p>
            <AiOutlineClockCircle />
            {redeem.createDate.slice(11, 16)}
          </p>
        </CartProductData>
      </div>

      <CartProductPrice id="cart-product-price">
        {redeem.cost}
        <img src={coin} />
      </CartProductPrice>
    </CartProduct>
  );
};

export default Product;
