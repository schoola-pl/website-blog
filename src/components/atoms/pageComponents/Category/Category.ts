import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

const categoriesStyles = (categoryType: string) => {
  switch (categoryType) {
    case 'all':
      return {
        color: theme.colors.white,
        backgroundColor: theme.colors.accentGray,
        categoryType: 'Wszystkie posty',
      };
    case 'Prawo oświatowe':
      return {
        color: theme.colors.darkRed,
        backgroundColor: theme.colors.lightRed,
        categoryType,
      };
    case 'Świat edukacji':
      return {
        color: theme.colors.darkBlue,
        backgroundColor: theme.colors.accentBlue,
        categoryType,
      };
    case 'Technologia w szkole':
      return {
        color: theme.colors.darkGreen,
        backgroundColor: theme.colors.lightGreen,
        categoryType,
      };
    case 'Prowadzenie zajęć':
      return {
        color: theme.colors.darkPurple,
        backgroundColor: theme.colors.lightPurple,
        categoryType,
      };
    case 'Szkolenia':
      return {
        color: theme.colors.darkYellow,
        backgroundColor: theme.colors.lightYellow,
        categoryType,
      };
    default:
      return {
        color: theme.colors.darkPurple,
        backgroundColor: theme.colors.lightPurple,
        categoryType,
      };
  }
};

const Category = styled.button<{
  categoryType: string;
  small?: boolean;
  inline?: boolean;
}>`
  background-color: ${({ categoryType }) =>
    categoriesStyles(categoryType)?.backgroundColor};
  color: ${({ categoryType }) => categoriesStyles(categoryType)?.color};
  opacity: 0.8;
  cursor: pointer;
  border: 0;
  transform: scale(0.9);
  transition: transform 0.1s ease-in-out, opacity 0.1s ease-in;
  font-size: ${({ theme }) => theme.fontSize.s};
  box-shadow: ${({ theme }) => theme.innerStyles.boxShadow};
  min-width: 70%;
  margin-inline: 15%;
  scroll-snap-align: center;
  padding: 1rem;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    min-width: 10rem;
    margin: 0;
  }

  &::after {
    display: flex;
    align-items: center;
    justify-content: center;
    content: '#${({ categoryType }) =>
      categoriesStyles(categoryType)?.categoryType}';
  }

  &:hover {
    opacity: 1;
    transform: scale(1);
  }

  @media (min-width: 700px) {
    padding: 2rem;
  }

  @media (min-width: 1500px) {
    min-width: 24rem;
  }

  @media (min-width: 1500px) {
    width: 16rem;
    cursor: pointer;
  }

  ${({ small }) =>
    small &&
    `
    padding: 1rem 3rem;
    opacity: 1;

    @media (min-width: 1500px) {
     min-width: 4rem;
    }
  `}

  ${({ inline, theme }) =>
    inline &&
    `
    background: none;
    margin: 0 0 .25rem !important;
    padding: 0 !important;
    display: text;
    opacity: 1;
    transform: scale(1);
    font-size: ${theme.fontSize.xs};
    min-width: fit-content !important;
    width: fit-content !important;
    height: auto;
    box-shadow: none;
    cursor: default;
  `}
`;

export default Category;
