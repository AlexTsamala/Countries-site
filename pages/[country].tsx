import Header from "../components/homePage/Header";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

const Country = () => {
  const router = useRouter();
  const { country } = router.query;

  return (
    <>
      <Header />
      <CountryContainer></CountryContainer>
    </>
  );
};

export default Country;

const CountryContainer = styled.div``;

const BackButton = styled(Link)``;
