import {
  CartProduct,
  CartPorductImg,
  CartProductName,
  CartProductData,
  CartProductCategory,
  CartProductPrice,
} from "./Cartelements";
import { AiOutlineClockCircle } from "react-icons/ai";
import coin from "../../assets/icons/coin.svg";

const Product = ({ redeem }) => {
  return (
    <CartProduct>
      <CartPorductImg id="cart-product-img">
        <img src={redeem.img.url} />
      </CartPorductImg>

      <hr />

      <div id="product-info-container">
        <CartProductName id="cart-product-name">{redeem.name}</CartProductName>
        <CartProductCategory id="cart-product-category">
          {redeem.category}
        </CartProductCategory>
        <CartProductData id="cart-product-data">
          <p>Date: {redeem.createDate.slice(0, 10)}</p>
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
