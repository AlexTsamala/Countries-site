import React, { use, useState } from "react";
import Select from "react-select";
import { useAppDispatch, useAppSelector } from "../../redux/redux";
import styled from "styled-components";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

export default function SelectRegion() {
  const [selectedOption, setSelectedOption] = useState<string | null | object>(
    null
  );

  const darkModeStatus = useAppSelector(
    (state) => state.countriesList.darkMode
  );

  const customStyles = {
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      color: state.isSelected
        ? "#AD1FEA"
        : darkModeStatus
        ? "#ffffff"
        : "#111517",
      backgroundColor: state.isSelected
        ? "rgba(58, 67, 116, 0.15)"
        : darkModeStatus
        ? "#2B3844"
        : "#ffffff",
      width: "200px",
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0px",
      onfocus,
    }),
    control: () => ({
      backgroundColor: darkModeStatus ? "#2B3844" : "#ffffff",
      display: "flex",
      border: "none",
      width: "200px",
      borderRadius: "5px",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (styles: any) => ({
      ...styles,
      color: darkModeStatus ? "#ffffff" : "#000000",
    }),
    menu: (styles: any) => ({
      ...styles,
      backgroundColor: darkModeStatus ? "#2B3844" : "#ffffff",
    }),
    placeholder: (base: any) => ({
      ...base,
      color: darkModeStatus ? "#ffffff" : "#111517",
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "20px",
      letterSpacing: "0px",
    }),
    singleValue: (provided: any, state: { isDisabled: any }) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const color = darkModeStatus ? "#ffffff" : "#111517";
      const fontFamily = ["Nunito Sans", "sans-serif"];
      const fontWeight = 400;
      const fontSize = "12px";
      const lineHeight = "16px";
      const letterSpacing = "0px";
      const transition = "opacity 300ms";
      const width = "200px";
      return {
        ...provided,
        opacity,
        transition,
        color,
        fontFamily,
        fontWeight,
        fontSize,
        lineHeight,
        letterSpacing,
        width,
      };
    },
  };

  return (
    <Container>
      <Select
        onChange={setSelectedOption}
        options={options}
        styles={customStyles}
        placeholder={"Filter by Region"}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 200px;
  margin-left: 16px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
`;
