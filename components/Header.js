import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Head = styled.header`
  grid-area: header;
  height: 1080px;
  display: flex;
  justify-content: center;
  background: #c2e59c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #64b3f4,
    #c2e59c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #64b3f4,
    #c2e59c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

// const SearchInput = styled.input`
//   height: 100%;
//   border-radius: 8px 0px 0px 8px;
//   border: none;
//   width: 400px;
//   padding: 0px;
//   @media (max-width: 800px) {
//     width: 200px;
//   }
// `;

const MainWrapper = styled.div`
  display: flex;
  /* background-color: blue; */
  width: 100%;
`;

const HeadlineWrapper = styled.div`
  display: flex;
  width: 40%;
  /* background-color: red; */
  justify-content: center;
  align-items: center;
`;

const Headline = styled.h1``;

const Separator = styled.hr`
  height: 5px;
  border-radius: 15px;
  background-color: #6c63ff;
  border: none;
  margin: 0;
`;
const Farmacias = styled.div`
  font-size: 2em;
  letter-spacing: 0.13em;
`;
const DeTurno = styled.div`
  font-size: 2.8em;
  margin-top: -20px;
`;
const ImageWrapper = styled.div`
  display: flex;
  width: 60%;
  /* background-color: green; */
`;

const SearchButton = styled.button`
  background-color: black;
  color: white;
  width: 140px;
  height: 100%;
  border-radius: 0px 8px 8px 0px;
  margin-left: 0px;
  border: none;
  font-size: 22px;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 100px;
  }
`;

const Header = () => {
  return (
    <Head>
      <MainWrapper>
        <HeadlineWrapper>
          <Headline>
            <Farmacias>FARMACIAS</Farmacias>
            <DeTurno>DE TURNO</DeTurno>
            <Separator />
          </Headline>
        </HeadlineWrapper>
        <ImageWrapper></ImageWrapper>
      </MainWrapper>
    </Head>
  );
};

export default Header;
