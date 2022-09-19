import styled from "styled-components";

export const HeaderElement = styled.header`
  width: 100%;
  background: #fff;
  position: relative;
  z-index: 20;
  transition: all 0.3s ease;
  filter: blur(${({ showHistory }) => (showHistory ? "20px" : "0")});
`;

export const Headerwrap = styled.div`
  width: 72.5%;
  height: 70px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: #fff;
`;

export const HeaderLogoContainer = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
  filter: blur(${({ showHistory }) => (showHistory ? "20px" : "0")});

  & > img {
    width: 100%;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  gap: 5px;
  padding-right: 20px;
  justify-content: flex-end;
  position: relative;
  z-index: 20;
  transition: all 0.3s ease;
  filter: blur(${({ showHistory }) => (showHistory ? "5px" : "0")});

  & > #add-points {
    width: 25px;
    height: 25px;
    text-align: center;
    font-weight: bold;
  }

  & > #add-points > svg {
    height: 10px;
    width: 10px;
  }

  & > #add-points > #tapa {
    width: 300px;
    height: 70px;
    position: absolute;
    top: 0;
    right: 0;
    background: #fff;
    z-index: 10;
  }

  @media screen and (max-width: 1070px) {
    display: none;
  }
`;

export const ButtonOpenMenuPoints = styled.div`
  background: #ddd;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 20;
  transition: all 0.3s ease;
  transform: rotate(${({ open }) => (open ? "45deg" : "0")});
  cursor: pointer;
`;

export const UserName = styled.span`
  position: relative;
  z-index: 20;
`;

export const UserPointsContainer = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  background: #ddd;
  border-radius: 10px;
  padding: 2px 10px;
  gap: 4px;
  position: relative;
  z-index: 20;

  & > img {
    height: 100%;
    display: flex;
    position: relative;
    height: 20px;
    width: 20px;
    top: 1px;
  }
`;

export const UserMenuPoints = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 50px;
  position: relative;
  height: 120px;
  width: fit-content;
  padding: 10px;
  z-index: -1;
  background: white;
  transition: all 0.3s ease;
  top: ${({ open }) => (open ? "16px" : "-1000px")};
  right: 230px;
  border-radius: 10px;
  cursor: default;

  & > p {
    position: relative;
    top: 20px;
    text-align: center;
    color: #888;
  }

  & > div {
    display: flex;
    gap: 10px;
  }

  & > div > button {
    display: flex;
    gap: 3px;
    padding: 10px;
    align-items: center;
    border: none;
    background: #15dbff;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    transition: all 0.3s ease;
  }

  & > div > button:hover {
    background: #14c3e3;
  }

  & > div > button > img {
    width: 18px;
    height: 18px;
  }
`;

export const CartButton = styled.button`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  display: flex;
  border: none;
  background: rgb(21, 219, 255);
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  z-index: 20;

  filter: blur(${({ showHistory }) => (showHistory ? "20px" : "0")});

  @media screen and (max-width: 1070px) {
  }

  & > svg {
    height: 60%;
    width: 60%;
    position: relative;
    top: 1px;
  }
`;

export const UserButtonResponsive = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  transition: all 0.3s;
  filter: blur(${({ showHistory }) => (showHistory ? "20px" : "0")});

  & > svg {
    height: 50px;
    width: 50px;
    color: rgb(21, 219, 255);
    cursor: pointer;
  }

  & > svg > path {
  }

  @media screen and (min-width: 1070px) {
    display: none;
  }
`;

export const UserInfoResponsive = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 70vw;
  padding-bottom: 20px;
  height: fit-content;
  top: 0;
  background: #fff;
  transition: all 0.3s ease;
  right: ${({ open }) => (open ? "0" : "-3000px")};
  z-index: 100;
  gap: 30px;

  & > #btn-close-container {
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;
    margin-top: 15px;
  }

  & #btn-close-container > svg {
    color: rgb(21, 219, 255);
    height: 25px;
    width: 25px;
    cursor: pointer;
  }

  & #block-container {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }

  & div > #responsive-menu-info {
    width: 300px;
    height: 100%;
    color: #888;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & div > #responsive-menu-info p {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 20px;
    width: 135px;
  }

  & div > #responsive-menu-info p svg {
    color: rgb(21, 219, 255);
  }

  & div > #responsive-menu-info p span {
    font-weight: 400;
  }
  & div > #responsive-menu-info p img {
    position: relative;
    height: 25px;
    width: 25px;
    top: 2px;
  }

  & div > #add-points-responsive {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    font-size: 18px;
    font-weight: bold;
    color: #888;
  }

  & div > #add-points-responsive div {
    display: flex;
    gap: 10px;
  }

  & div > #add-points-responsive button {
    display: flex;
    align-items: center;
    padding: 8px;
    align-items: center;
    border: none;
    background: #15dbff;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    transition: all 0.3s ease;
  }

  & #add-points-responsive button img {
    width: 20px;
    height: 20px;
    margin-left: 4px;
  }

  @media screen and (min-width: 1070px) {
    display: none;
  }
`;
