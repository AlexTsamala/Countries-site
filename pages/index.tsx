import styled from "styled-components";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/redux";
import { countriesListActions } from "../redux";
import axios from "axios";
import Header from "../components/homePage/Header";
import { createGlobalStyle } from "styled-components";
import CountryList from "../components/homePage/CountryList";

interface HomeProps {
  data: [];
}

export default function Home(props: HomeProps) {
  const dispatch = useAppDispatch();
  const darkModeStatus = useAppSelector(
    (state) => state.countriesList.darkMode
  );
  useEffect(() => {
    dispatch(countriesListActions.updateCountriesList(props.data));
  }, []);

  return (
    <Container>
      <GlobalStyle color={darkModeStatus ? "#202C36" : "#F2F2F2"} />
      <Header />
      <CountryList />
    </Container>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("https://restcountries.com/v3.1/all");
  return { props: { data: res.data } };
}

const GlobalStyle = createGlobalStyle<{ color: string }>`
  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: "Nunito Sans";
  }
  body{
    background-color: ${(props) => props.color};
  }
`;

const Container = styled.div``;
