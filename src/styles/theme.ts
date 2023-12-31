import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  backgroundColor: "#1F2023",
  textColor: "#F5F5F5",
  infoIconColor: "#2D2F34",
  iconColor: "#27292D",
  accentColor1: `rgb(106,192,69)`,
  accentColor2: "#00c6ff",
  shadowColor: "rgba(0,0,0,0.2)",

  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const lightTheme = {
  backgroundColor: "#4E0000",
  paginationColor: "#B60000",
  textColor: "black",
  loaderColor: "#B60000",
  infoIconColor: "#FAFAFA",
  iconColor: "white",
  accentColor1: "#FFD800",
  accentColor2: "#00c6ff",
  shadowColor: "rgba(0,0,0,0.2)",

  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const GlobalStyle = createGlobalStyle`
  a{
    font-family: 'Comic Sans MS';
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
  body{
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    background-image: url(https://i.etsystatic.com/5614762/r/il/10bf9c/2199130954/il_1588xN.2199130954_21kj.jpg);
    backdrop-filter: blur(10px);
    background-position: center;
    background-blend-mode: screen;
    background-attachment: fixed;
  
    transition: 0.1s;
    color: ${(props) => props.theme.textColor};
  }
`;
