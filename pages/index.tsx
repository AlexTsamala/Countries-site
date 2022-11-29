import styled from "styled-components";
import Header from "../components/Header";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/redux";
import { countriesListActions } from "../redux";
import { json } from "node:stream/consumers";
import axios from "axios";

interface HomeProps {
  data: [];
}

export default function Home(props: HomeProps) {
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countriesList.items);
  useEffect(() => {
    dispatch(countriesListActions.updateCountriesList(props.data));
  }, []);

  return (
    <Container>
      <Header />
    </Container>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("https://restcountries.com/v3.1/all");
  return { props: { data: res.data } };
}

const Container = styled.div``;
