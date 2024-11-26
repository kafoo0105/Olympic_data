import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const MainPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 140px 20px; /* 여백 조정 */
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), /* 투명도 감소 */
    url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopZViPPK-f-j1qqa5jWLhdW2QS4VolFlHnGW0fh0TupMYIuq1uaxT8LV7fob64na3548&usqp=CAU') no-repeat center center / cover;

  h2 {
    font-size: 42px; /* 더 큰 헤드라인 */
    margin-bottom: 20px;
    color: #2c3e50;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15); /* 부드러운 그림자 */
  }

  p {
    font-size: 25px; /* 더 읽기 쉬운 텍스트 크기 */
    margin-bottom: 60px; /* 버튼과의 간격 증가 */
    color: #333; /* 더 어두운 텍스트 색상 */
  }

  .cta-button {
    display: inline-block;
    padding: 16px 32px; /* 버튼 크기 증가 */
    font-size: 18px; /* 텍스트 크기 증가 */
    background-color: #ff4500;
    color: white;
    text-decoration: none;
    border-radius: 50px; /* 라운드 버튼 */
    transition: all 0.4s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 버튼 음영 */
    margin-top: 10px; /* 버튼 위치 아래로 이동 */

    &:hover {
      background-color: #ff6347; /* 호버 시 색상 변경: Tomato */
      transform: translateY(-5px); /* 버튼 상승 효과 */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* 음영 증가 */
    }

    &:active {
      transform: translateY(0); /* 클릭 시 원래 위치 */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }
`;



const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px; /* 카드 간의 간격 추가 */
  margin: 80px 0;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Feature = styled(Link)`
  flex-basis: 30%;
  background-color: #f9f9f9; /* 카드 배경을 밝게 */
  border-radius: 15px; /* 부드러운 모서리 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 은은한 그림자 */
  padding: 40px 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none; /* 링크 스타일 제거 */
  color: inherit; /* 텍스트 색상 유지 */

  &:hover {
    transform: translateY(-10px); /* 살짝 상승 효과 */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 그림자 강화 */
  }

  i {
    font-size: 48px;
    color: #1a73e8; /* 현대적인 파란색 */
    margin-bottom: 20px;
    transition: color 0.3s ease;

    &:hover {
      color: #1557b0; /* 아이콘 색상 변경 */
    }
  }

  h3 {
    font-size: 22px;
    margin-bottom: 10px;
    color: #333; /* 어두운 텍스트 */
    font-weight: 600;
  }

  p {
    font-size: 16px;
    color: #555; /* 부드러운 텍스트 색상 */
    line-height: 1.6;
  }
`;


const AboutSection = styled.section`
  background-color: #f9f9f9; /* 밝고 깔끔한 배경색 */
  padding: 100px 40px;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  h2 {
    font-size: 36px;
    color: #2c3e50;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    max-width: 700px;
    font-size: 20px;
    line-height: 1.8;
    color: #2c3e50;
  }

  .highlight {
    color: #1a73e8;
    font-weight: 600;
  }

  .features {
    display: flex;
    justify-content: space-around;
    gap: 40px;
    margin-top: 40px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    .feature {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 200px;
      text-align: center;
      background-color: #ffffff; /* 카드 스타일 */
      border-radius: 15px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }

      i {
        font-size: 40px;
        margin-bottom: 15px;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.2); /* 아이콘 확대 */
        }
      }

      span {
        font-size: 16px;
        color: #2c3e50;
      }
    }

    .feature-leaf i {
      color: #4caf50; /* 초록색 */
    }

    .feature-landmark i {
      color: #6c757d; /* 짙은 회색 */
    }

    .feature-basketball i {
      color: #ff8c00; /* 농구공 색 */
    }
  }
`;




const GallerySection = styled.section`
  padding: 80px 20px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin: 40px auto;
  max-width: 1200px;

  h2 {
    font-size: 36px;
    text-align: center;
    margin-bottom: 80px;
    margin-top: 10px;
    color: #2c3e50;
    font-weight: 700;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-items: center;
`;

const GalleryItem = styled.div`
  height: 250px;
  width: 100%;
  max-width: 350px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.05); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
  }
`;


const Footer = styled.footer`
  text-align: center;
  padding: 20px 0;
  background-color: #f8f9fa;
  margin-top: 80px;
`;

export default function MainPage() {
  return (
    <MainPageContainer>

      <NavBar />

      <main>
        <HeroSection>
          <h2>올림픽 공원의 아름다움을 발견하세요</h2>
          <p>당신만의 특별한 여정을 시작하세요</p>
          <a href="/courses" className="cta-button">
            코스 둘러보기
          </a>
        </HeroSection>

        <FeaturesSection>
          <Feature to="/courses">
            <i className="icon-map"></i>
            <h3>맞춤형 코스</h3>
            <p>다양한 테마의 코스를 제공합니다.</p>
          </Feature>
          <Feature to="/chatbot">
            <i className="icon-info"></i>
            <h3>상세한 정보</h3>
            <p>올림픽 가이드만의 챗봇을 통해 <br></br> 각 지점에 대한 풍부한 설명을 제공합니다.</p>
          </Feature>
          <Feature to="/gallery">
            <i className="icon-camera"></i>
            <h3>포토 스팟</h3>
            <p>인생샷을 위한 최고의 장소를 소개합니다.</p>
          </Feature>
        </FeaturesSection>



        <AboutSection>
          <h2>올림픽 공원 소개</h2>
          <p>
            <span className="highlight">올림픽 공원</span>은 1988년 서울 올림픽을 위해
            건설된 대규모 종합운동장입니다. 현재는 시민들의 <span className="highlight">휴식과 운동</span>, 그리고
            문화생활을 위한 공간으로 사랑받고 있습니다. 우리의 가이드와 함께
            <span className="highlight"> 올림픽 공원의 숨은 매력</span>을 발견해보세요.
          </p>
          <div className="features">
            <div className="feature feature-leaf">
              <i className="fas fa-leaf"></i>
              <span>자연과 함께하는 공간</span>
            </div>
            <div className="feature feature-landmark">
              <i className="fas fa-landmark"></i>
              <span>문화와 역사를 느끼다</span>
            </div>
            <div className="feature feature-basketball">
              <i className="fas fa-basketball-ball"></i>
              <span>다양한 스포츠 시설</span>
            </div>
          </div>
        </AboutSection>




        <GallerySection>
          <h2>공원 둘러보기</h2>
          <GalleryGrid>
            <GalleryItem
              style={{
                backgroundImage: "url('https://www.ksponco.or.kr/olympicpark/img/sub/s2_02_pic01.jpg')",
              }}
            ></GalleryItem>
            <GalleryItem
              style={{
                backgroundImage: "url('https://www.ksponco.or.kr/olympicpark/img/sub/s2_02_pic02.jpg')",
              }}
            ></GalleryItem>
            <GalleryItem
              style={{
                backgroundImage: "url('https://www.ksponco.or.kr/olympicpark/img/sub/s2_02_road2_pic07.jpg')",
              }}
            ></GalleryItem>
          </GalleryGrid>
        </GallerySection>

      </main>

      <Footer>
        <p>&copy; 2024 올림픽 공원 가이드. All rights reserved.</p>
      </Footer>
    </MainPageContainer>
  );
}
