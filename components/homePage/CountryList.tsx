import styled from "styled-components";
import { useAppSelector } from "../../redux/redux";
import SelectRegion from "./Selector";
import { useState } from "react";
import Link from "next/link";

const CountryList = () => {
  const [searchWord, setSearchWord] = useState("");
  const [continent, setContinent] = useState<string>("");
  const darkModeStatus = useAppSelector(
    (state) => state.countriesList.darkMode
  );
  const countries = useAppSelector((state) => state.countriesList.items);

  const filteredCountries = () => {
    let info =
      continent.length > 0
        ? countries.filter((item: any) => {
            return item.region.includes(continent);
          })
        : countries;

    if (searchWord.length > 0) {
      const newArray = info.filter((item: any) => {
        return item.name.common.includes(searchWord);
      });
      return newArray;
    } else {
      return info;
    }
  };

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };

  const countryHandler = (index: number) => {
    console.log(index);
  };

  return (
    <Container>
      <InputSection color={darkModeStatus ? "#2B3844" : "#ffffff"}>
        {darkModeStatus ? (
          <img alt="ShapeWhite" src={"/assets/ShapeWhite.png"} />
        ) : (
          <img alt="Shape" src={"/assets/Shape.png"} />
        )}
        <Input
          onChange={filterHandler}
          color={darkModeStatus ? "#2B3844" : "#ffffff"}
          placeHolderColor={darkModeStatus ? "#ffffff" : "#c4c4c4"}
          textColor={darkModeStatus ? "#ffffff" : "#111517"}
          type="text"
          placeholder="Search for a country…"
        ></Input>
      </InputSection>
      <SelectRegion setContinent={setContinent} continent={continent} />
      <CountriesSection>
        {filteredCountries().map((item: any, index) => {
          return (
            <CountryDiv
              color={darkModeStatus ? "#2B3844" : "#ffffff"}
              key={index}
            >
              <LinkOfCountry href={"/" + item.name.common}>
                <img
                  style={{ borderRadius: "5px", cursor: "pointer" }}
                  onClick={() => countryHandler(index)}
                  alt={item.name.common}
                  src={item.flags.png}
                />
              </LinkOfCountry>
              <MainSectionOfInfo color={darkModeStatus ? "#2B3844" : "#ffffff"}>
                <CountryName color={darkModeStatus ? "#ffffff" : "#111517"}>
                  {item.name.common}
                </CountryName>
                <InfoSection>
                  <DetailedInfo color={darkModeStatus ? "#ffffff" : "#111517"}>
                    Population:<span>{item.population}</span>
                  </DetailedInfo>
                  <DetailedInfo color={darkModeStatus ? "#ffffff" : "#111517"}>
                    Region:<span>{item.region}</span>
                  </DetailedInfo>
                  <DetailedInfo color={darkModeStatus ? "#ffffff" : "#111517"}>
                    Capital:<span>{item.capital}</span>
                  </DetailedInfo>
                </InfoSection>
              </MainSectionOfInfo>
            </CountryDiv>
          );
        })}
      </CountriesSection>
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

const Input = styled.input<{ placeHolderColor: string; textColor: string }>`
  margin-left: 26px;
  border: none;
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
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

const CountriesSection = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const CountryDiv = styled.div`
  background-color: ${(props) => props.color};
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;
`;

const LinkOfCountry = styled(Link)``;

const MainSectionOfInfo = styled.div`
  margin: 20px 24px 46px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

const DetailedInfo = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: ${(props) => props.color};
  span {
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    letter-spacing: 0px;
    margin-left: 3px;
  }
`;
const CountryName = styled.h1`
  font-size: 18px;
  font-weight: 800;
  line-height: 26px;
  letter-spacing: 0px;
  color: ${(props) => props.color};
`;
