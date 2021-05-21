import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #bebb76;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  filter: drop-shadow(0px 5px 6px #354239);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: black;
  justify-self: flex-start;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-family: "Jura", sans-serif;
  font-weight: 600;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #00000;
    margin-left: 22px;
    margin-top: 10px;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: 22px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #00000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: "Jura", sans-serif;

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }

  &.active {
    border-bottom: 3px solid #dc1d1e;
  }
`;

export const NavPDFWrapper = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
`;

export const NavPDF = styled.a`
  display: inline-block;
  align-items: center;
  text-decoration: none;
  background-color: #97AB6E;
  cursor: pointer;
  font-family: "Jura", sans-serif;
  padding: 5px 8px;
  border: 0.10em solid black;
  box-sizing: border-box; 
  font-weight: 400;
  color: black;
  text-align: center;
  transition: all 0.15s;
  filter: drop-shadow(-3px 3px 1px #354239);

  &:hover {
    color: #ffffff;
    filter: drop-shadow(-1.5px 1.5px 0.5px #354239);
    transition: 0.2s ease-in-out;
  }
`;
