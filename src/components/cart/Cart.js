import { Suspense, lazy } from "react";
import { CartProductsContainer, CartWrapper, CartHeader } from "./Cartelements";

import { ImCross } from "react-icons/im";

const Product = lazy(() => import("./Product"));

const Cart = ({ showHistory, history, setShowHistory }) => {
  return (
    <CartWrapper open={showHistory}>
      <CartHeader>
        <h2>History</h2>
        <ImCross
          onClick={() => {
            setShowHistory(false);
          }}
        />
      </CartHeader>
      <CartProductsContainer>
        <Suspense fallback={<h1>Cargando...</h1>}>
          {history.map((redeem) => (
            <Product redeem={redeem} key={redeem.createDate} />
          ))}
        </Suspense>
      </CartProductsContainer>
    </CartWrapper>
  );
};

export default Cart;
