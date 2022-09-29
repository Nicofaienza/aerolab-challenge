import {
  FooterInfo,
  FooterLogoContainer,
  FooterWrapper,
} from "./Footerelements";
import logo from "../../assets/aerolab-logo.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <FooterLogoContainer>
          <img src={logo} />
          <h2>Aerolab Challenge</h2>
        </FooterLogoContainer>

        <FooterInfo>
          <p>Hecho por Nicolás Faienza</p>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/nicolas-faienza/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/Nicofaienza" target="_blank">
                <FaGithub />
              </a>
            </li>
          </ul>
        </FooterInfo>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
