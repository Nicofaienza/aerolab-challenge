import CardProduct from "./CardProduct";

const HomeProductsContainer = ({
  filter,
  points,
  setPoints,
  setHistory,
  showMenuResponsive,
  products,
  showHistory,
}) => {
  return (
    <div id="home-products-container">
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
    </div>
  );
};

export default HomeProductsContainer;
