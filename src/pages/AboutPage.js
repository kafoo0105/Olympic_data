import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 장미광장 from '../assets/images/장미광장.jpg';
import 몽촌토성 from '../assets/images/몽촌토성 산책로.jpg';
import 들꽃마루 from '../assets/images/들꽃마루.jpg';
import 세계평화의문 from '../assets/images/세계평화의문.jpg';

const OlympicParkContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eaeaea;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a5f7a;
  }

  nav ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      margin-left: 30px;

      a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
        transition: color 0.3s ease;

        &:hover {
          color: #1a5f7a;
        }
      }
    }
  }
`;

const Hero = styled.section`
  background-image: url('/placeholder.svg?height=400&width=1200');
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #1a5f7a;
  margin-bottom: 50px;

  h2 {
    font-size: 3rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.5rem;
    max-width: 600px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;

const Section = styled.section`
  margin-bottom: 50px;

  h2 {
    font-size: 2rem;
    color: #1a5f7a;
    margin-bottom: 20px;
  }
`;

const AttractionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const AttractionItem = styled.div`
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.2rem;
    color: #1a5f7a;
  }
`;

const EventsList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    background-color: #f8f8f8;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const VisitInfo = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1a5f7a;
`;

const AboutPage = () => {
  return (
    <OlympicParkContainer>
      <Header>
        <StyledLink to="/main">
          <h1>올림픽 공원</h1>
        </StyledLink>
        <nav>
          <ul>
            <li><a href="#about">소개</a></li>
            <li><a href="#attractions">주요 명소</a></li>
            <li><a href="#events">행사</a></li>
            <li><a href="#visit">방문 안내</a></li>
          </ul>
        </nav>
      </Header>

      <main>
        <Hero>
          <h2>서울의 녹색 심장</h2>
          <p>자연과 문화, 스포츠가 어우러진 도시 속 휴식 공간</p>
        </Hero>

        <Section id="about">
          <h2>올림픽 공원 소개</h2>
          <p>
            1988년 서울 올림픽을 위해 조성된 올림픽 공원은 현재 서울 시민들의 휴식과
            문화의 중심지로 자리 잡았습니다. 넓은 녹지와 다양한 문화 시설, 스포츠
            시설을 갖추고 있어 연중 많은 방문객들의 사랑을 받고 있습니다.
          </p>
        </Section>

        <Section id="attractions">
          <h2>주요 명소</h2>
          <AttractionsGrid>
            <AttractionItem>
              <img src={세계평화의문} alt="평화의 문" />
              <h3>평화의 문</h3>
            </AttractionItem>
            <AttractionItem>
              <img src={장미광장} alt="장미광장" />
              <h3>장미 광장</h3>
            </AttractionItem>
            <AttractionItem>
              <img src={몽촌토성} alt="몽촌토성" />
              <h3>몽촌토성</h3>
            </AttractionItem>
            <AttractionItem>
              <img src={들꽃마루} alt="들꽃마루" />
              <h3>들꽃마루</h3>
            </AttractionItem>
          </AttractionsGrid>
        </Section>

        <Section id="events">
          <h2>주요 행사</h2>
          <EventsList>
            <li>봄꽃 축제 (4월)</li>
            <li>음악 분수 쇼 (5월 - 10월)</li>
            <li>서울 국제 마라톤 (10월)</li>
            <li>겨울 빛 축제 (12월 - 2월)</li>
          </EventsList>
        </Section>

        <Section id="visit">
          <h2>방문 안내</h2>
          <VisitInfo>
            <p><strong>주소:</strong> 서울특별시 송파구 올림픽로 424</p>
            <p><strong>운영 시간:</strong> 연중무휴, 24시간 개방</p>
            <p><strong>입장료:</strong> 무료 (일부 시설 유료)</p>
            <p><strong>교통:</strong> 지하철 5호선 올림픽공원역 3번 출구</p>
          </VisitInfo>
        </Section>
      </main>

      
    </OlympicParkContainer>
  );
};

export default AboutPage;

