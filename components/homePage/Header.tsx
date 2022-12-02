import styled from "styled-components";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../redux/redux";
import { countriesListActions } from "../../redux";

const Header = () => {
  const dispatch = useAppDispatch();
  const darkModeStatus = useAppSelector(
    (state) => state.countriesList.darkMode
  );
  const darkModeHandler = () => {
    dispatch(countriesListActions.changeDarkMode());
  };

  return (
    <Container color={darkModeStatus ? "#2B3844" : "white"}>
      <h1 style={darkModeStatus ? { color: "white" } : { color: "#111517" }}>
        Where in the world?
      </h1>
      <div onClick={darkModeHandler}>
        {darkModeStatus ? (
          <Img
            width={12}
            height={12}
            src={"/assets/lightMoon.png"}
            alt="lightMoon"
          />
        ) : (
          <Img
            width={12}
            height={12}
            src="/assets/darkMoon.png"
            alt="darkMoon"
          />
        )}
        <span
          style={darkModeStatus ? { color: "white" } : { color: "#111517" }}
        >
          {darkModeStatus ? "White Mode" : "Dark Mode"}
        </span>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  display: flex;
  justify-content: space-between;
  padding: 30px 16px;
  background-color: ${(props) => props.color};
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
  h1 {
    font-size: 14px;
    font-weight: 800;
    line-height: 20px;
    letter-spacing: 0px;
    @media (min-width: 1440px) {
      font-size: 24px;
      font-weight: 800;
      line-height: 33px;
      letter-spacing: 0px;
      margin-left: 81px;
    }
  }
  span {
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    @media (min-width: 1440px) {
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      letter-spacing: 0px;
      margin-right: 81px;
    }
  }
`;

const Img = styled(Image)``;
