import { useEffect, useState } from "react";
import logo from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import {
  HeaderElement,
  HeaderLogoContainer,
  Headerwrap,
  UserInfo,
  UserMenuPoints,
  UserName,
  UserPointsContainer,
  CartButton,
  UserButtonResponsive,
  UserInfoResponsive,
  ButtonOpenMenuPoints,
} from "./Headerelements";
import Cart from "../cart/Cart";
import { RiChatHistoryFill } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";
import { ImCross } from "react-icons/im";

const Header = ({
  user,
  addPoints,
  points,
  setPoints,
  history,
  setHistory,
  showMenuResponsive,
  setShowMenuResponsive,
  setShowHistory,
  showHistory,
}) => {
  const [menuPoints, setMenuPoints] = useState(false);

  const handleShowMenuResponsive = () => {
    setShowMenuResponsive(true);
  };

  const handleMenuPoints = () => {
    setMenuPoints(!menuPoints);
    setShowHistory(false);
  };

  const handleAddPoints = async (amount) => {
    const x = await addPoints(amount);
    setPoints(x["New Points"]);
  };

  useEffect(() => {
    setPoints(user.points);
  }, [user]);

  return (
    <HeaderElement>
      <Headerwrap>
        <HeaderLogoContainer
          showMenuResponsive={showMenuResponsive}
          showHistory={showHistory}
        >
          <img src={logo} />
        </HeaderLogoContainer>

        <UserInfo
          showHistory={showHistory}
          showMenuResponsive={showMenuResponsive}
        >
          <UserName>{user.name}</UserName>

          <UserPointsContainer>
            <span>{points}</span>
            <img src={coin} />
          </UserPointsContainer>
          <div id="add-points">
            <ButtonOpenMenuPoints open={menuPoints} onClick={handleMenuPoints}>
              +
            </ButtonOpenMenuPoints>

            <div id="tapa"></div>
            <UserMenuPoints open={menuPoints}>
              <p>Add coins.</p>
              <div>
                <button
                  onClick={() => {
                    handleAddPoints(1000);
                  }}
                >
                  1000 <img src={coin} />
                </button>
                <button
                  onClick={() => {
                    handleAddPoints(5000);
                  }}
                >
                  5000 <img src={coin} />
                </button>
                <button
                  onClick={() => {
                    handleAddPoints(7500);
                  }}
                >
                  7500 <img src={coin} />
                </button>
              </div>
            </UserMenuPoints>
          </div>
        </UserInfo>

        <UserButtonResponsive
          showMenuResponsive={showMenuResponsive}
          showHistory={showHistory}
        >
          <HiUserCircle onClick={handleShowMenuResponsive} />
        </UserButtonResponsive>

        <UserInfoResponsive open={showMenuResponsive}>
          <div id="btn-close-container">
            <ImCross
              onClick={() => {
                setShowMenuResponsive(false);
              }}
            />
          </div>
          <div id="block-container">
            <div id="responsive-menu-info">
              <p>
                <HiUserCircle />
                {user.name}
              </p>
              <p>
                Coins: <span>{points}</span>
                <img src={coin} />
              </p>
            </div>

            <div id="add-points-responsive">
              <p>Add coins.</p>
              <div>
                <button
                  onClick={() => {
                    handleAddPoints(1000);
                  }}
                >
                  1000 <img src={coin} />
                </button>
                <button
                  onClick={() => {
                    handleAddPoints(5000);
                  }}
                >
                  5000 <img src={coin} />
                </button>
                <button
                  onClick={() => {
                    handleAddPoints(7500);
                  }}
                >
                  7500 <img src={coin} />
                </button>
              </div>
            </div>
          </div>
        </UserInfoResponsive>

        <div>
          <CartButton
            showHistory={showHistory}
            showMenuResponsive={showMenuResponsive}
            onClick={() => {
              setShowHistory(!showHistory);
              setMenuPoints(false);
            }}
          >
            <RiChatHistoryFill />
          </CartButton>
          <Cart
            showHistory={showHistory}
            history={history}
            setHistory={setHistory}
            setShowHistory={setShowHistory}
            points={points}
          />
        </div>
      </Headerwrap>
    </HeaderElement>
  );
};
export default Header;
