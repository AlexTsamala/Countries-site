import styled from "styled-components";
import lightMoon from "../assets/lightMoon.png";
import Image from "next/image";

const Header = () => {
  return (
    <Container>
      <h1>Where in the world?</h1>
      <Image src={lightMoon} alt="lightMoon" />
    </Container>
  );
};

export default Header;

const Container = styled.div``;
