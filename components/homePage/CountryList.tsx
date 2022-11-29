import styled from "styled-components";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../redux/redux";
import RegionSelector from "./RegionSelector";

const CountryList = () => {
  const darkModeStatus = useAppSelector(
    (state) => state.countriesList.darkMode
  );
  const countries = useAppSelector((state) => state.countriesList.items);
  return (
    <Container>
      <InputSection color={darkModeStatus ? "#2B3844" : "white"}>
        {darkModeStatus ? (
          <img alt="ShapeWhite" src={"/assets/ShapeWhite.png"} />
        ) : (
          <img alt="Shape" src={"/assets/Shape.png"} />
        )}
        <Input
          color={darkModeStatus ? "#2B3844" : "white"}
          placeHolderColor={darkModeStatus ? "white" : "#c4c4c4"}
          type="text"
          placeholder="Search for a country…"
        ></Input>
      </InputSection>
      <RegionSelector />
    </Container>
  );
};

export default CountryList;

const Container = styled.div``;

const InputSection = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  padding: 16px 33px;
  margin: 24px 16px 40px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color};
`;

const Input = styled.input<{ placeHolderColor: string }>`
  margin-left: 26px;
  border: none;
  background-color: ${(props) => props.color};
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: ${(props) => props.placeHolderColor};
  }
`;
