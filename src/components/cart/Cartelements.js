import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  position: fixed;
  background: #fff;
  z-index: 100;
  top: 0;
  transition: all 0.3s ease;
  right: ${({ open }) => (open ? "0" : "-3000px")};
  height: 100vh;
  width: 80vw;

  @media screen and (max-width: 1070px) {
    width: 100vw;
  }
`;

export const CartHeader = styled.div`
  width: 100%;
  height: 70px;
  background: #fff;
  position: absolute;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: rgb(21, 219, 255);
  padding: 0 30px;
  & > h2 {
    font-size: 2rem;
  }

  & > svg {
    cursor: pointer;
    height: 25px;
    width: 25px;
  }
`;

export const CartProductsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 15px;
  background: #eee;
  margin-top: 70px;
  overflow: auto;
  justify-content: center;
`;

export const CartProduct = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
  align-items: center;
  height: max-content;
  background: #fff;
  height: 350px;
  width: 260px;

  & > #product-info-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: auto;
    display: flex;
  }

  & > hr {
    border: 1px solid #eee;
    width: 60%;
  }

  #cart-product-name,
  #cart-product-category,
  #cart-product-data {
    width: 65%;
    text-align: center;
  }

  #cart-product-img {
    width: 70%;
  }

  #cart-product-price {
    padding: 0;
  }
`;

export const CartPorductImg = styled.div`
  width: 35%;

  & > img {
    width: 100%;
  }
`;

export const CartProductName = styled.h2`
  font-size: 18px;
  height: 45px;
  color: #888;
`;

export const CartProductCategory = styled.h2`
  font-size: 16px;
  color: #ccc;
`;

export const CartProductData = styled.h3`
  font-size: 16px;
  color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  & > p > svg {
    position: relative;
    top: 2px;
    margin-right: 4px;
  }
`;

export const CartProductPrice = styled.div`
  color: #888;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding-right: 15px;

  & > img {
    width: 25px;
    height: 25px;
    position: relative;
    top: 2px;
    margin-left: 5px;
  }
`;
