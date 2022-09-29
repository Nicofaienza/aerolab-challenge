import styled from "styled-components";
import "../../styles/colors.css";

export const FooterWrapper = styled.footer`
  background: var(--primary);
  color: #fff;

  & > div {
    width: 72.5%;
    margin: auto;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 1070px) {
    & > div {
      flex-direction: column;
      gap: 15px;
    }
  }
`;

export const FooterLogoContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  & > img {
    filter: brightness(0) invert(100%);
  }

  & > h2 {
    font-size: 1.3em;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > p {
    font-weight: 500;
  }

  & > ul {
    display: flex;
    list-style: none;
    gap: 6px;
    justify-content: center;
  }

  & > ul > li a {
    color: #fff;
  }

  & > ul > li svg {
    height: 20px;
    width: 20px;
    cursor: pointer;
  }
`;
