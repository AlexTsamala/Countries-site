import styled from "styled-components";
import whiteArrow from "../../assets/whiteArrow.png";
import { useAppDispatch, useAppSelector } from "../../redux/redux";

const RegionSelector = () => {
  const darkModeStatus = useAppSelector(
    (state) => state.countriesList.darkMode
  );
  return (
    <Container>
      <SelectRegion
        color={darkModeStatus ? "#2B3844" : "#ffffff"}
        colorDisable={darkModeStatus ? "#ffffff" : "#111517"}
        address={
          darkModeStatus ? "/assets/whiteArrow.png" : "/assets/blackArrow.png"
        }
        defaultValue=""
        name="regions"
        id="regions"
      >
        <DisabledOption value="" disabled hidden>
          Filter by Region
        </DisabledOption>
        <Option
          BackgroundColor={darkModeStatus ? "#2B3844" : "#ffffff"}
          color={darkModeStatus ? "#ffffff" : "#111517"}
          value="Africa"
        >
          Africa
        </Option>
        <Option
          BackgroundColor={darkModeStatus ? "#2B3844" : "#ffffff"}
          color={darkModeStatus ? "#ffffff" : "#111517"}
          value="America"
        >
          America
        </Option>
        <Option
          BackgroundColor={darkModeStatus ? "#2B3844" : "#ffffff"}
          color={darkModeStatus ? "#ffffff" : "#111517"}
          value="Asia"
        >
          Asia
        </Option>
        <Option
          BackgroundColor={darkModeStatus ? "#2B3844" : "#ffffff"}
          color={darkModeStatus ? "#ffffff" : "#111517"}
          value="Europe"
        >
          Europe
        </Option>
        <Option
          BackgroundColor={darkModeStatus ? "#2B3844" : "#ffffff"}
          color={darkModeStatus ? "#ffffff" : "#111517"}
          value="Oceania"
        >
          Oceania
        </Option>
      </SelectRegion>
    </Container>
  );
};

export default RegionSelector;

const Container = styled.div``;

const SelectRegion = styled.select<{ address: string; colorDisable: string }>`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  padding: 14px 24px;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  margin-left: 16px;
  width: 200px;
  border: none;
  background-color: ${(props) => props.color};
  -webkit-appearance: none;
  appearance: none;
  background-image: url(${(props) => props.address});
  background-size: 7.5px 4.5px;
  background-repeat: no-repeat;
  background-position: calc(100% - 21px) center;
  color: ${(props) => props.colorDisable};
`;

const Option = styled.option<{ BackgroundColor: string }>`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.BackgroundColor};
  border: none;
`;

const DisabledOption = styled.option``;
