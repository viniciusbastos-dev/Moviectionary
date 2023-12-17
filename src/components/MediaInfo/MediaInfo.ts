import styled from "styled-components";

export const BackgroundContainer = styled.div<{ $backgroundImage: string }>`
  background-image: url("https://image.tmdb.org/t/p/original${(props) =>
    props.$backgroundImage}");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const OverlayContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
`;

export const HeaderContainer = styled.section`
  display: flex;
  padding: 30px;
`;

export const PosterImage = styled.img`
  border-radius: 8px;
  height: 450px;
  width: 300px;
`;

export const HeaderContent = styled.section`
  align-content: center;
  align-items: flex-start;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  padding-left: 40px;
`;
