import { CartProductsContainer, CartWrapper, CartHeader } from "./Cartelements";
import Product from "../cart/Product.js";
import { ImCross } from "react-icons/im";
import { useEffect } from "react";
import { getHistory } from "../../services";
import { useInView } from "react-intersection-observer";

const Cart = ({ showHistory, history, setShowHistory, setHistory }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const loadHistory = async () => {
      const responseHistory = await getHistory();
      console.log("response History: ", responseHistory);
      if (responseHistory) {
        setHistory(responseHistory.reverse());
      }
    };

    if (inView) {
      console.log("view");
      if (history.length === 0) {
        loadHistory();
      }
    }
  }, [inView]);

  return (
    <CartWrapper ref={ref} open={showHistory}>
      <CartHeader>
        <h2>History</h2>
        <ImCross
          onClick={() => {
            setShowHistory(false);
          }}
        />
      </CartHeader>
      <CartProductsContainer id="cart-products-container">
        {history.length === 0 /*SPINNER*/ ? (
          <div id="loader-container">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          history.map((redeem) => (
            <Product redeem={redeem} key={redeem.createDate} />
          ))
        )}
      </CartProductsContainer>
    </CartWrapper>
  );
};

export default Cart;
