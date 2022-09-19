import styled from "styled-components";
import img from "../../assets/header-x1.png";

export const HomeWrapper = styled.div`
  width: 100%;
  transition: all 0.3s ease;
  filter: blur(${({ showHistory }) => (showHistory ? "20px" : "0")});
  background: #f8f8f8;

  & > hr {
    width: 72%;
    margin: auto;
    border: 0.5px solid #eee;
  }
`;

export const HomeImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin: auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  & > div {
    width: 72.5%;
    margin-bottom: 30px;
  }

  & > div > h3 {
    color: #fff;
    font-size: 30px;
  }

  @media screen and (max-width: 1070px) {
    height: 200px;
  }
`;

export const Homemenu = styled.div`
  width: 100%;
  padding: 30px 0 15px 0;

  & #menu-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    width: 72.5%;
    margin: auto;
  }

  & > #menu-wrapper > hr {
    height: 25px;
    margin: 0 10px;
    border: 0.5px solid #eee;
  }

  @media screen and (max-width: 1070px) {
    padding: 10px 0;

    #menu-wrapper {
      flex-direction: column;
      height: fit-content;
      gap: 15px;
    }

    #menu-wrapper > hr {
      display: none;
    }
  }
`;

export const HomeCount = styled.span`
  color: #888;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const HomeFiltersContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 0.9rem;

  & #filters-container {
    border-radius: 20px;
    display: flex;
    gap: 10px;
  }

  & #sort-by {
    color: #888;
    width: 50px;
  }
`;

export const HomeFilterLowest = styled.span`
  padding: 7px 14px;
  border-radius: 20px;
  display: block;
  width: 120px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ filter }) =>
    filter === "Lowest" ? "rgb(21, 219, 255);" : "#eee;"};
  color: ${({ filter }) => (filter === "Lowest" ? "#fff" : "#888;")};
`;

export const HomeFilterHighest = styled.span`
  padding: 7px 14px;
  border-radius: 20px;
  width: 120px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ filter }) =>
    filter === "Highest" ? "rgb(21, 219, 255);" : "#eee;"};
  color: ${({ filter }) => (filter === "Highest" ? "#fff" : "#888;")};
`;

export const HomeProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  margin: 20px auto;
  gap: 20px;
`;

export const HomeCardProduct = styled.div`
  position: relative;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 6px #ccc;
  transition: all 0.3s ease;
  width: 300px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const HomeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > img {
    width: 40px;
    height: 40px;
    align-self: flex-end;
  }
  & > hr {
    width: 100%;
    border: 0.5px solid #eee;
  }
`;

export const HomeCardBuy = styled.img``;

export const HomeCardDontFounds = styled.div`
  color: #fff;
  padding: 7px 12px;
  background: rgba(0, 0, 0, 0.5);
  height: fit-content;
  width: fit-content;
  border-radius: 2;
  display: flex;
  align-items: center;
  border-radius: 25px;
  align-self: flex-end;

  & > img {
    margin-left: 6px;
    height: 30px;
    position: relative;
    top: 2px;
  }
`;

export const HomeCardImg = styled.div`
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    height: 100%;
  }
`;

export const HomeCardCategory = styled.h4`
  margin-top: 10px;
  color: #ccc;
`;

export const HomeCardName = styled.h4`
  color: #888;
  font-size: 1.3rem;
`;

export const HomeCardHover = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  background: rgba(21, 219, 255, 0.7);
  top: 0;
  left: 0;
  padding: 26px 23px;
  justify-content: center;
  filter: opacity(0);
  transition: all 0.3s ease;

  & > img {
    position: absolute;
    top: 17px;
    right: 14px;
    height: 50px;
    width: 50px;
  }

  &:hover {
    filter: opacity(1);
  }
`;

export const HomeCardPrice = styled.h4`
  position: relative;
  font-size: 40px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 6px;

  & > img {
    position: relative;
    top: 4px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HomeCardButton = styled.button`
  width: 100%;
  border: none;
  background: #fff;
  border-radius: 20px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 400;

  &:hover {
    background: #eee;
  }
`;
