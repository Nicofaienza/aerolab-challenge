import Header from "./components/header/Header";
import Home from "./components/home/Home";
import {
  getUser,
  getProducts,
  addPoints,
  getHistory,
} from "./services/index.js";
import "./styles/index.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [products, setProducts] = useState();
  const [points, setPoints] = useState();
  const [history, setHistory] = useState([]);
  const [showMenuResponsive, setShowMenuResponsive] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const responseUser = await getUser();
      const responseProducts = await getProducts();
      const responseHistory = await getHistory();
      console.log("response user: ", responseUser);
      console.log("response Products: ", responseProducts);
      console.log("response History: ", responseHistory);
      if (responseUser) {
        setUser(responseUser);
        setLoading(false);

        if (responseUser.points) {
          setPoints(responseUser["points"]);
          console.log("response points: ", points);
        }
      }
      if (responseProducts) {
        setProducts(responseProducts);
        setLoading(false);
      }
      if (responseHistory) {
        setHistory(responseHistory.reverse());
      }
    };

    loadData();
  }, []);

  console.log("app points: ", points);

  return (
    <>
      {loading ? (
        /*SPINNER*/
        <div id="loader-container">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <>
          <Header
            user={user}
            addPoints={addPoints}
            points={points}
            setPoints={setPoints}
            history={history}
            setHistory={setHistory}
            showMenuResponsive={showMenuResponsive}
            setShowMenuResponsive={setShowMenuResponsive}
            showHistory={showHistory}
            setShowHistory={setShowHistory}
          />
          <Home
            products={products}
            setPoints={setPoints}
            points={points}
            setHistory={setHistory}
            user={user}
            showMenuResponsive={showMenuResponsive}
            showHistory={showHistory}
          />
        </>
      )}
    </>
  );
}

export default App;
