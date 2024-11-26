import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StampCollection from '../components/StampCollection';
import EventPrizes from '../components/EventPrizes';
import oneImg from '../assets/icons/연인.png';
import twoImg from '../assets/icons/가족.png';
import threeImg from '../assets/icons/역사.png';
import fourImg from '../assets/icons/자연.png';
import fiveImg from '../assets/icons/산책.png';
import sixImg from '../assets/icons/9경.png';

const AppContainer = styled.div`
  
  @font-face {
  font-family: 'S-CoreDream-3Light';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
  font-family: 'S-CoreDream-3Light', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  background: linear-gradient(180deg, #f0f9ff 0%, #d4e2f2 50%, #b0c8df 100%);
  min-height: 100vh;
`;

const Navbar = styled.nav`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const NavTitle = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    width: 120px;
    height: auto;
    margin-right: 10px;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #343a40;
    margin: 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #666;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #1a73e8;
    }
  }
`;

const MainContent = styled.main`
  padding-top: 80px;
  max-width: 800px;
  margin: 0 auto;
  padding: 7rem 2rem 2rem;
`;

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const MainTitle = styled.h2`
  font-size: 3rem;
  color: #1a73e8;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const SubTitle = styled.h3`
  font-size: 2rem;
  color: #4285f4;
  margin-bottom: 1rem;
`;

const SnowmanIcon = styled.div`
  font-size: 2rem;
  margin-top: 1rem;
`;

const InstructionBox = styled.div`
  background-color: #f8f9ff;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h4 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #333;
  }
`;

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StepNumber = styled.span`
  background-color: #1a73e8;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CourseCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  padding-top: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    max-height: 100px;
    object-fit: contain;
  }

  h4 {
    font-size: 18px;
    color: #1a73e8;
    margin: 1rem 0;
  }
`;


const CourseModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  max-width: 500px;
  width: 90%;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1a73e8;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: #666;
  }
`;

const CloseButton = styled.button`
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 5px;
  background-color: #1a73e8;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1557b0;
  }
`;

export default function EventPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courseInfo = {
    couple: {
      title: '연인 코스',
      description: `이 코스는 사랑하는 사람과 함께 특별한 하루를 보내고 싶은 연인들에게 추천합니다. 장미광장에서 로맨틱한 분위기를 느끼며 시작해, K-아트홀과 소마 미술관에서 예술을 통해 서로의 감성을 공유할 수 있습니다. 평화의 광장에서 손을 맞잡고 여유롭게 산책하며 이야기를 나누고, 곰말다리에서는 멋진 풍경을 배경으로 인생 사진을 남겨보세요. 도심 속에서 자연과 예술을 함께 즐길 수 있는 이 코스는 데이트를 더욱 특별하게 만들어 줄 것입니다.`,
      image: oneImg,
    },
    family: {
      title: '가족 코스',
      description: `가족이 함께 즐길 수 있는 코스로, 아이들과 어른 모두가 행복한 시간을 보낼 수 있습니다. 88호수에서 물가의 평온한 풍경을 즐기고, 가족놀이동산에서는 아이들이 마음껏 놀 수 있습니다. 서울역사편찬원에서는 서울의 역사와 문화를 배우고, 피크닉장에서는 돗자리를 펴고 휴식을 취할 수 있습니다. 자연 속에서 가족과 함께 시간을 보낼 수 있는 코스입니다.`,
      image: twoImg,
    },
    history: {
      title: '역사 코스',
      description: `역사를 사랑하는 방문객에게 추천하는 코스로, 백제 시대의 유적과 전통을 체험할 수 있습니다. 한성백제박물관과 서울역사편찬원에서 역사와 문화를 배우고, 몽촌토성 산책로를 걸으며 고대 성곽의 흔적을 직접 경험할 수 있습니다. 마지막으로 대화(조각) 작품을 감상하며 역사적 여정을 마무리할 수 있습니다. 옛 시간 속으로 여행을 떠난 듯한 기분을 느낄 수 있을 것입니다.`,
      image: threeImg,
    },
    nature: {
      title: '자연 코스',
      description: `자연의 아름다움을 만끽하고 싶은 분들에게 추천하는 코스입니다. 88마당에서 여유로운 시간을 한 뒤, 야생화학습장에서 계절마다 다양한 꽃들을 감상할 수 있습니다. 몽총토성 산책로에서는 푸른 숲과 함께 산책을 즐기고, 나홀로나무 앞에서 잔디밭의 평온함을 느끼며 자연과 하나 되는 시간을 가질 수 있습니다. 마음을 편안하게 해주는 자연 속 힐링을 느껴보세요.`,
      image: fourImg,
    },
    walk: {
      title: '산책 코스',
      description: `여유롭게 공원을 산책하고 싶은 분들에게 추천하는 코스입니다. 호수를 따라 이어진 호반의 길에서 산책을 시작하고, 젊음의 길을 걸으며 활기찬 분위기를 만끽해 보세요. 추억의 길에서는 옛날을 회상하며 조용한 산책을 즐길 수 있습니다. 가볍게 걸으며 힐링할 수 있을 것입니다.`,
      image: fiveImg,
    },
    nineView: {
      title: '9경 코스',
      description: `올림픽공원의 9가지 대표 명소를 모두 돌아볼 수 있는 코스입니다. 평화의 문과 몽촌해자 음악분수에서 시작하여 각 명소를 둘러보며 올림픽공원의 상징적인 장소들을 즐길 수 있습니다. 대화 조각과 나홀로나무, 엄지손가락 조각 등 독특한 작품들과 함께 사진을 찍으며 즐거운 추억을 만들 수 있는 코스입니다.`,
      image: sixImg,
    },
  };



  return (
    <AppContainer>
      <Navbar>
        <NavContent>
          <NavTitle to="/main">
            <img src="https://olympics.com/images/static/b2p-images/logo_color.svg" alt="올림픽 로고" />
            <h1>나만의 경로 찾기</h1>
          </NavTitle>
          <NavLinks>
            <a href="/main">홈</a>
            <a href="/about">소개</a>
            <a href="/login">로그아웃</a>
          </NavLinks>
        </NavContent>
      </Navbar>
      <MainContent>
        <TitleSection>
          <MainTitle>올림픽공원</MainTitle>
          <SubTitle>겨울 나들이 이벤트</SubTitle>
          <SnowmanIcon>⛄</SnowmanIcon>
        </TitleSection>
        <InstructionBox>
          <h4>참여방법</h4>
          <Steps>
            <Step>
              <StepNumber>STEP1</StepNumber>
              <p>방문 목적에 적합한 코스 선택하기! 🚩</p>
            </Step>
            <Step>
              <StepNumber>STEP2</StepNumber>
              <p>코스를 따라 도장을 수집하면서 올림픽공원 즐기기! ⭐</p>
            </Step>
            <Step>
              <StepNumber>STEP3</StepNumber>
              <p>도장을 다 채운 후 밑에 응모하기 버튼으로 응모에서 이벤트 참여하기! 🎨</p>
            </Step>
          </Steps>
        </InstructionBox>
        <CoursesGrid>
          {Object.entries(courseInfo).map(([key, course]) => (
            <CourseCard key={key} onClick={() => setSelectedCourse(key)}>
              <img src={course.image} alt={`${course.title} 이미지`} />
              <h4>{course.title}</h4>
            </CourseCard>
          ))}
        </CoursesGrid>
        {selectedCourse && (
          <CourseModal>
            <ModalContent>
              <h3>{courseInfo[selectedCourse].title}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: courseInfo[selectedCourse].description }}
              ></div>
              <CloseButton onClick={() => setSelectedCourse(null)}>닫기</CloseButton>
            </ModalContent>
          </CourseModal>
        )}
      </MainContent>

      <br></br>
      <br></br>
      <br></br>
      {/* 도장판 이벤트 */}
      <StampCollection></StampCollection>

      <br></br>
      <br></br>
      <br></br>
      {/* 이벤트 상품 안내 */}
      <EventPrizes></EventPrizes>
      <br></br>
      <br></br>
      <br></br>
    </AppContainer>
  );
}
