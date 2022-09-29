import {
  HomeCount,
  HomeFiltersContainer,
  HomeImgContainer,
  Homemenu,
  HomeWrapper,
  HomeFilterLowest,
  HomeFilterHighest,
  HomeProductsContainer,
  HomeFilterRecent,
} from "./Homeelements";
import { useState, useEffect } from "react";
import "../../styles/index.css";
import CardProduct from "./CardProduct";
import left from "../../assets/icons/arrow-left.svg";
import right from "../../assets/icons/arrow-right.svg";
import { getProducts } from "../../services";

const Home = ({
  products,
  points,
  setPoints,
  setHistory,
  showMenuResponsive,
  showHistory,
}) => {
  const initialProducts = products;
  const [filter, setFilter] = useState("Recent");
  const [page1, setPage1] = useState(initialProducts.slice(0, 16));
  const [page2, setPage2] = useState(initialProducts.slice(16));
  const [pageShow, setPageShow] = useState(0);

  useEffect(() => {
    console.log("effect");
    const loadProducts = async () => {
      const responseProducts = await getProducts();
      console.log("load products");
      if (responseProducts) {
        if (filter === "Recent") {
          setPage1(responseProducts.slice(0, 16));
          setPage2(responseProducts.slice(16));
        } else if (filter === "Highest") {
          setPage1(
            responseProducts.sort((a, b) => b.cost - a.cost).slice(0, 16)
          );
          setPage2(responseProducts.sort((a, b) => b.cost - a.cost).slice(16));
        } else if (filter === "Lowest") {
          setPage1(
            responseProducts.sort((a, b) => a.cost - b.cost).slice(0, 16)
          );
          setPage2(responseProducts.sort((a, b) => a.cost - b.cost).slice(16));
        }
      }
    };
    loadProducts();
  }, [filter]);

  console.log("page1: ", page1);
  console.log("page2: ", page2);
  console.log("filter: ", filter);
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
            {pageShow === 0 ? page1.length : products.length} of{" "}
            {products.length} products
          </HomeCount>
          <hr />
          <HomeFiltersContainer>
            <span id="sort-by">Sort by:</span>
            <div id="filters-container">
              <HomeFilterRecent
                id="filter-recent"
                filter={filter}
                onClick={() => {
                  setFilter("Recent");
                }}
              >
                Most Recent
              </HomeFilterRecent>
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
        {pageShow === 0 ? (
          <div className="arrow-container">
            <p>Page 1</p>
            <img
              src={right}
              onClick={() => {
                setPageShow(1);
              }}
            />
          </div>
        ) : (
          <div className="arrow-container">
            <p>Page 2</p>
            <img
              src={left}
              onClick={() => {
                setPageShow(0);
              }}
            />
          </div>
        )}
      </Homemenu>
      <hr />
      <HomeProductsContainer>
        {pageShow === 0
          ? page1.map((product) => {
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
          : page2.map((product) => {
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
            })}
      </HomeProductsContainer>
    </HomeWrapper>
  );
};

export default Home;
