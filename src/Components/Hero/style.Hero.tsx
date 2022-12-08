import styled from "styled-components";

export const MyHero = styled.section`
  margin: 5vh;
`;

export const blurContainer = styled.div`
  
`;

export const MyHeroText = styled.h1`
  width: 800px;
  height: 389px;
  font-family: "Big Shoulders Display";
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 100px;
  text-transform: uppercase;
  color: #000000;
`;

export const MyEllipse = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 508.26px;
  height: 176.84px;
  left: 120px;
  top: 550px;
  border-radius: 50%;
  border: 1px solid #000000;
  transform: matrix(0.97, 0.21, -0.24, 0.98, 0, 0);
`;

export const MySecondEllipse = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 509.96px;
  height: 176.16px;
  left: 112.73px;
  top: 550.18px;
  border-radius: 50%;
  border: 1px solid #000000;
`;

export const MyPAboutMe = styled.h2`
  position: absolute;
  width: 288px;
  height: 150px;
  left: 229px;
  top: 545px;

  font-family: "Big Shoulders Display";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  text-align: center;

  color: #000000;
`;

export const MyblurdEllipse = styled.div`
position: absolute;
width: 334px;
height: 327px;
right: 8%;
top: 40%;

background: #F3994C;
opacity: 0.75;
filter: blur(77px);
`;
export const MySecondBlurdEllipse = styled.div`
position: absolute;
width: 328px;
height: 302px;
right: 15%;
top: 40%;

background: rgba(228, 47, 47, 0.75);
filter: blur(76px);
`;
