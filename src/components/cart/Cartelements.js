import styled from "styled-components";
import "../../styles/colors.css";

export const CartWrapper = styled.div`
  display: flex;
  position: fixed;
  background: #fff;
  z-index: 100;
  top: 0;
  transition: all 0.3s ease;
  right: ${({ open }) => (open ? "15px" : "-3000px")};
  height: 100vh;
  width: 100vw;

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
  background: var(--primary);
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
  width: 100%;
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
  position: relative;
  padding: 10px 30px;
  align-items: center;
  height: max-content;
  background: #fff;
  height: 150px;
  width: 600px;
  min-width: 350px;
  transition: all 0.6s ease;

  & > #product-info-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    display: flex;
    gap: 5px;
  }

  & > hr {
    border: 1px solid #eee;
    height: 80%;
    margin: 0 5px;
  }

  #cart-product-name,
  #cart-product-category,
  #cart-product-data {
    width: 70%;
    margin-left: 10px;
  }
`;

export const CartPorductImg = styled.div`
  width: 40%;

  & > img {
    width: 100%;
  }
`;

export const CartProductName = styled.h2`
  font-size: 18px;
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

  & > p > svg {
    position: relative;
    top: 2px;
    margin-right: 4px;
  }

  & > #date {
    color: #888;
  }
`;

export const CartProductPrice = styled.div`
  color: #888;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bold;

  & > img {
    width: 25px;
    height: 25px;
    position: relative;
    top: 2px;
    margin-left: 5px;
  }
`;
