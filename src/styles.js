import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const DeleteButtonStyled = styled.button`
  color: red;
  font-weight: bold;
  margin-left: 0px;
`;

export const AddButtonStyled = styled.button`
  color: red;
  font-weight: bold;
  margin-left: 30px;
  margin-top: 20px;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

export const ListForm = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 90px;
`;

export const Form = styled.form`
  width: 50%;
`;
export const S = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: auto;
  display: flex;
  width: 70%;
  margin-top: 35px;
`;
export const FormButton = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const TwoButtons = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const H = styled.h1`
  margin-bottom: 50px;
`;

export const ProductWrapper = styled.div`
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 50%;
  margin-top: 35px;

  img {
    width: 190px;
    height: 240px;
    float: left;
  }

  p {
    // text-align: center;

    &.product-price {
      color: red;
      font-weight: bold;
    }
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const HomeStyled = styled.div`
  display: flex;
  width: 83%;
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: 190px;
  width: 560px;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 40px;
  margin-right: 40px;
  h5 {
    padding-bottom: 35px;
  }
`;

export const HomeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Logoimg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 30px;
`;
export const NavItem = styled(NavLink)`
  font-size: 25px;
  padding-right: 25px;
  &.active {
    color: ${(props) => props.theme.mainColor};
    font-weight: bold;
  }
`;

export const Nav = styled(NavLink)`
  font-size: 19px;
  padding-right: 25px;
  color: blue;
  &.active {
    color: Red;
    font-weight: bold;
  }
`;

export const Logo = styled(Link)`
  text-align: center;
`;
