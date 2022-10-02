import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  html {
    font-size: 62.5%;
    overflow-x: hidden;
    background-color: white;
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
    font-family: 'Poppins', sans-serif;

    @media(min-width: 1000px) {
      scroll-padding-top: 10rem;
    }
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  a, button, textarea, input, select {
    font-family: 'Poppins', sans-serif
  }
  
  // TRANSITIONS FOR REACT-TRANSITIONS-GROUP
  
  // GROUP STYLES
  
  .transition-group {
    margin: 2rem 0 4rem;
    display: flex;
    padding: 0 6rem;
    align-items: center;
    justify-content: space-around;
    gap: 3rem;
    flex-wrap: wrap;
  }
  
  // APPEAR - On page load
  .fade-appear {
    opacity: 0;
  }
  .fade-appear-active {
    opacity: 1;
    transition: opacity .3s cubic-bezier(.39,.55,.38,.55);
  } 
  
  // ENTER - On mount
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
      opacity: 1;
      transition: opacity .3s cubic-bezier(.39,.55,.38,.55);
    } 
    
    // EXIT - On unmount
    .fade-exit {
        opacity: 1;
    }
    .fade-exit-active {
        opacity: 0;
      display: none;
    }
`;

export default GlobalStyle;
