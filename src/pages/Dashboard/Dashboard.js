import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1900px;
`;

export const Container = styled.section`
  max-width: 1900px;
  margin: 30px auto;
  padding: 2rem;
  display: flex;
`;

export const ImageMain = styled.img`
  width: 60%;
`;

export const Informations = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 600px;
  position: relative;
  right: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }

  h2 {
    font-size: 2.5rem;
  }

  div {
    display: flex;
    align-items: center;
    p {
      margin-right: 10px;
    }
    img {
      width: 20px;
    }
  }
`;
export const BoxCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  padding-left: 1.2rem;

  h2 {
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const Highlights = styled.section`
  margin-top: 2rem;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const RigthArrow = styled.div`
  width: 95%;
  position: absolute;
  top: 40%;
  right: 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const CarouselStyled = {
  itemsToShow: 4,
  focusOnSelect: true,
  enableAutoPlay: false,
  autoPlaySpeed: 5000,
  pagination: false,
  showArrows: true,
  enableMouseSwipe: true,
  TransitionMS: 2000,
  itemsToScroll: 4,
};
