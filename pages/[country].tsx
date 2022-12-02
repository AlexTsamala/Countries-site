import Header from "../components/homePage/Header";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import { useAppSelector } from "../redux/redux";
import axios from "axios";

interface HomeProps {
  data: [];
}

const Country = (props: HomeProps) => {
  const router = useRouter();
  const { country } = router.query;
  const darkModeStatus = useAppSelector(
    (state) => state.countriesList.darkMode
  );
  const countryInfo: any = props.data.filter(
    (item: any) => item.name.common === country
  );
  const resultCurrencies = Object.keys(countryInfo[0].currencies);
  const arrayOfCurrencies = resultCurrencies.map((key) => {
    return countryInfo[0].currencies[key].name;
  });
  const currencies = arrayOfCurrencies.join(", ");
  const resultOfNativeName = Object.keys(countryInfo[0].name.nativeName);
  const arrayOfNativeName = resultOfNativeName.map((key) => {
    return countryInfo[0].name.nativeName[key].common;
  });
  const nativeName = arrayOfNativeName.join(", ");
  const languages = Object.keys(countryInfo[0].languages).join(", ");
  return (
    <>
      <Header />
      <CountryContainer color={darkModeStatus ? "#202C36" : "#F2F2F2"}>
        <BackButton color={darkModeStatus ? "#2B3844" : "#ffffff"} href={"/"}>
          {darkModeStatus ? (
            <img
              style={{ borderRadius: "5px", cursor: "pointer" }}
              alt={"backArrowWhite"}
              src={"/assets/backArrowWhite.png"}
            />
          ) : (
            <img
              style={{ borderRadius: "5px", cursor: "pointer" }}
              alt={"backArrowBlack"}
              src={"/assets/backArrowBlack.png"}
            />
          )}

          <BackSpan colorSpan={darkModeStatus ? "#ffffff" : "#111517"}>
            Back
          </BackSpan>
        </BackButton>
        <CountrySection>
          <ImgFlag
            style={{ borderRadius: "5px", cursor: "pointer" }}
            alt={countryInfo[0].name.common}
            src={countryInfo[0].flags.png}
          />
          <AboutCountry>
            <SectionOfFirstAndSecondDiv>
              <FirstInfoDiv>
                <CountryName color={darkModeStatus ? "#ffffff" : "#111517"}>
                  {countryInfo[0].name.common}
                </CountryName>
                <DetailedInfo color={darkModeStatus ? "#ffffff" : "#111517"}>
                  Native Name:
                  <span>{nativeName}</span>
                </DetailedInfo>
                <DetailedInfo color={darkModeStatus ? "#ffffff" : "#111517"}>
                  Population:<span>{countryInfo[0].population}</span>
                </DetailedInfo>
                <DetailedInfo color={darkModeStatus ? "#ffffff" : "#111517"}>
                  Region:<span>{countryInfo[0].region}</span>
                </DetailedInfo>
                <DetailedInfo color={darkModeStatus ? "#ffffff" : "#111517"}>
                  Sub Region:<span>{countryInfo[0].subregion}</span>
                </DetailedInfo>
                <DetailedInfo color={darkModeStatus ? "#ffffff" : "#111517"}>
                  Capital:<span>{countryInfo[0].capital}</span>
                </DetailedInfo>
              </FirstInfoDiv>
              <SecondInfoDiv>
                <DetailedInfo color={darkModeStatus ? "#ffffff" : "#111517"}>
                  Top Level Domain:
                  <span>{countryInfo[0].tld}</span>
                </DetailedInfo>
                <DetailedInfo color={darkModeStatus ? "#ffffff" : "#111517"}>
                  Currencies:<span>{currencies}</span>
                </DetailedInfo>
                <DetailedInfo color={darkModeStatus ? "#ffffff" : "#111517"}>
                  Languages:
                  <span>{languages}</span>
                </DetailedInfo>
              </SecondInfoDiv>
            </SectionOfFirstAndSecondDiv>
            <ThirdInfoDIv>
              <BorderCountryDiv color={darkModeStatus ? "#ffffff" : "#111517"}>
                Border Countries:
              </BorderCountryDiv>
              <BorderCountiesDiv>
                {countryInfo[0].borders
                  ? countryInfo[0].borders.map(
                      (country: any, index: number) => {
                        return (
                          <BorderCounties
                            key={index}
                            backgroundColor={
                              darkModeStatus ? "#2B3844" : "#ffffff"
                            }
                            color={darkModeStatus ? "#ffffff" : "#111517"}
                          >
                            {country}
                          </BorderCounties>
                        );
                      }
                    )
                  : ""}
              </BorderCountiesDiv>
            </ThirdInfoDIv>
          </AboutCountry>
        </CountrySection>
      </CountryContainer>
    </>
  );
};

export default Country;

export async function getServerSideProps() {
  const res = await axios.get("https://restcountries.com/v3.1/all");
  return { props: { data: res.data } };
}

const CountryContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackButton = styled(Link)<{ color: string }>`
  height: 32px;
  width: 104px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  text-decoration: none;
  margin: 40px 0 64px 35px;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
  @media (min-width: 1440px) {
    margin-left: 80px;
  }
`;

const BackSpan = styled.span<{ colorSpan: string }>`
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0px;

  color: ${(props) => props.colorSpan};
`;

const CountrySection = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 120px;
  }
`;

const CountryName = styled.h1`
  font-size: 22px;
  font-weight: 800;
  line-height: 30px;
  letter-spacing: 0px;
  color: ${(props) => props.color};
  margin-bottom: 16px;
  @media (min-width: 1440px) {
    font-size: 32px;
    font-weight: 800;
    line-height: 44px;
    letter-spacing: 0px;
  }
`;

const AboutCountry = styled.div`
  margin-top: 30px;
`;

const DetailedInfo = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  color: ${(props) => props.color};
  @media (min-width: 1440px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: left;
  }
  span {
    font-size: 14px;
    font-weight: 300;
    line-height: 32px;
    letter-spacing: 0px;
    margin-left: 5px;
    @media (min-width: 1440px) {
      font-size: 16px;
      font-weight: 400;
      line-height: 32px;
      letter-spacing: 0px;
      text-align: left;
    }
  }
`;

const FirstInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

const SecondInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 34px;
`;

const BorderCountryDiv = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: ${(props) => props.color};
`;

const ThirdInfoDIv = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`;

const BorderCountiesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 310px;
  gap: 10px;
  margin-top: 16px;
  @media (min-width: 1440px) {
    margin-top: 0;
    flex-wrap: nowrap;
    width: 600px;
    margin-left: 16px;
  }
`;

const BorderCounties = styled.div<{ backgroundColor: string }>`
  height: 28px;
  width: 96px;
  border-radius: 2px;
  background-color: ${(props) => props.backgroundColor};
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  letter-spacing: 0px;
  color: ${(props) => props.color};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgFlag = styled.img`
  @media (min-width: 1440px) {
    height: 483px;
    width: 559px;
  }
`;

const SectionOfFirstAndSecondDiv = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 141px;
  }
`;
