import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  h1 {
    font-size: clamp(${({ theme }) => theme.fontSize.l}, 4vw, ${({ theme }) => theme.fontSize.xl});
    margin: 0 0 1rem 0;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};

    @media (min-width: 600px) {
      margin: 0 0 3rem 0;
    }

    span {
      color: ${({ theme }) => theme.colors.mainBlue};
    }
  }

  p {
    display: none;
    visibility: hidden;
  }

  @media (max-width: 600px) {
    p {
      display: block;
      margin: 0;
      visibility: visible;
      text-align: center;
      letter-spacing: 0.5px;
      font-weight: bold;
    }
  }
`;

export const CategoriesList = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: scroll;
  justify-content: flex-start;
  padding: 2rem 2rem;
  width: 100vw;
  scroll-snap-type: x mandatory;

  @media (min-width: 600px) {
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem 3rem;
    gap: 1rem;
    overflow-x: hidden;
    scroll-snap-type: unset;
  }
`;
