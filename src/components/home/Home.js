import {
  HomeCount,
  HomeFiltersContainer,
  HomeImgContainer,
  Homemenu,
  HomeWrapper,
  HomeFilterLowest,
  HomeFilterHighest,
  HomeProductsContainer,
} from "./Homeelements";
import { useState, useEffect } from "react";
import "../../styles/index.css";
import CardProduct from "./CardProduct";

const Home = ({
  products,
  points,
  setPoints,
  setHistory,
  user,
  showMenuResponsive,
  showHistory,
}) => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setPoints(user.points);
  }, []);

  return (
    <HomeWrapper
      showMenuResponsive={showMenuResponsive}
      showHistory={showHistory}
    >
      <HomeImgContainer>
        <div>
          <h3>Electronics</h3>
        </div>
      </HomeImgContainer>

      <Homemenu>
        <div id="menu-wrapper">
          <HomeCount>
            {products.length} of {products.length} products
          </HomeCount>
          <hr />
          <HomeFiltersContainer>
            <span id="sort-by">Sort by:</span>
            <div id="filters-container">
              <HomeFilterLowest
                id="filter-lowest"
                filter={filter}
                onClick={() => {
                  setFilter("Lowest");
                }}
              >
                Lowest price
              </HomeFilterLowest>
              <HomeFilterHighest
                id="filter-highest"
                filter={filter}
                onClick={() => {
                  setFilter("Highest");
                }}
              >
                Highest price
              </HomeFilterHighest>
            </div>
          </HomeFiltersContainer>
        </div>
      </Homemenu>
      <hr />
      <HomeProductsContainer>
        {filter === "Lowest"
          ? products
              .sort((a, b) => a.cost - b.cost)
              .map((product) => {
                return (
                  <CardProduct
                    key={product._id}
                    product={product}
                    setPoints={setPoints}
                    points={points}
                    setHistory={setHistory}
                    showHistory={showHistory}
                  />
                );
              })
          : filter === "Highest"
          ? products
              .sort((a, b) => b.cost - a.cost)
              .map((product) => {
                return (
                  <CardProduct
                    key={product._id}
                    product={product}
                    setPoints={setPoints}
                    setHistory={setHistory}
                    points={points}
                    showHistory={showHistory}
                  />
                );
              })
          : products.sort().map((product) => {
              return (
                <CardProduct
                  key={product._id}
                  product={product}
                  setPoints={setPoints}
                  setHistory={setHistory}
                  points={points}
                  showHistory={showHistory}
                />
              );
            })}
      </HomeProductsContainer>
    </HomeWrapper>
  );
};

export default Home;
