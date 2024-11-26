import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 장미광장 from '../assets/images/장미광장.jpg'
import 소마미술관 from '../assets/images/소마미술관.png'
import 평화의광장 from '../assets/images/평화의광장.jpg'
import 곰말다리 from '../assets/images/곰말다리.jpg'
import 사랑나무연리목 from '../assets/images/사랑나무연리목.jpg'
import 호수 from '../assets/images/88호수의전경.jpg'
import 가족놀이동산 from '../assets/images/가족놀이동산.JPG'
import 서울역사편찬원 from '../assets/images/서울역사편찬원.jpg'
import 피크닉장 from '../assets/images/피크닉장.JPG'
import 한성백제박물관 from '../assets/images/한성백제박물관.jpg'
import 몽촌토성 from '../assets/images/몽촌토성 산책로.jpg'
import 몽촌해자 from '../assets/images/몽촌해자 음악분수.jpg'
import 대화조각 from '../assets/images/대화조각.jpg'
import 마당 from '../assets/images/88마당.jpg'
import 들꽃마루 from '../assets/images/들꽃마루.jpg'
import 나홀로나무 from '../assets/images/나홀로나무.jpg'
import 세계평화의문 from '../assets/images/세계평화의문.jpg'
import 호반의길 from '../assets/images/호반의 길.jpg'
import 젊음의길 from '../assets/images/젊음의 길.jpg'
import 추억의길 from '../assets/images/추억의 길.jpg'

const StampPage = styled.div`
  background: transparent;
  min-height: 90vh;
  padding: 30px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const StampWrapper = styled.div`
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 100%; 
  height: 90vh;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #eaf4fc;

  
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 30px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(0, 0, 0, 0.05) 100%
    );
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 20px; 
  }
`;

const StampHeader = styled.header`
  text-align: center;
  margin-bottom: 5px;
  padding: 10px;
  background: #eaf4fc;
  border-radius: 10px;
  border-bottom: 1px solid rgba(26, 115, 232, 0.1);

  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1), inset 0px -3px 6px rgba(26, 115, 232, 0.1); 

  h1 {
    font-size: 40px;
    color: #104e8b;
    font-weight: bold;
    margin-bottom: 20px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 20px;
    color: #155799; 
    font-weight: 500;
    margin-bottom: 20px;
    line-height: 1.6;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;


const CourseTagWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const CourseTagButton = styled.button`
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 600;
  color: #1a73e8;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #e3f2fd;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px 0;
  margin: 0;
  width: 200px;
  z-index: 10;

  li {
    padding: 10px 20px;
    font-size: 16px;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e6f3ff;
    }
  }
`;

const StampContainer = styled.div`
  position: relative;
  max-width: 1500px;
  height: 100px;
  margin: 0 auto;
  padding: 20px;
  

  @media (max-width: 600px) {
    height: 400px;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

const SubmitButton = styled.button`
  padding: 18px 45px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ active }) => (active ? '#fff' : '#aaa')};
  background-color: ${({ active }) => (active ? '#1a73e8' : '#d3d3d3')};
  border: none;
  border-radius: 30px;
  cursor: ${({ active }) => (active ? 'pointer' : 'not-allowed')};
  box-shadow: ${({ active }) =>
    active ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? '#1557b0' : '#d3d3d3')};
    transform: ${({ active }) => (active ? 'scale(1.05)' : 'none')};
  }
`;

const ArrowIcon = styled.div`
  position: absolute;
  bottom: -45%;
  left: 79%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a73e8;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-50%) scale(1.1);
    background-color: #1557b0;
  }

  &::before {
    content: '➔';
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
`;

const PathLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const StampCircle = styled.div`
  position: absolute;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background-color: ${({ collected }) => (collected ? '#f8f9fa' : 'white')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ position }) => position && position};

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2; 
  }

  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
  }
`;



const StampContent = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }

  @media (max-width: 600px) {
    width: 90px;
    height: 90px;
  }
`;



const StampLabel = styled.div`
  margin-top: 10px; 
  font-size: 14px;
  color: #666;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2px 8px;
  border-radius: 10px;
  text-align: center;
  z-index: 1; 

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;


const positions = {
  0: { top: '50%', left: '3%' },
  1: { top: '50%', left: '18%' },
  2: { top: '50%', left: '33%' },
  3: { top: '50%', left: '48%' },
  4: { top: '50%', left: '63%' },
  stampCircle: { top: '50%', right: '3%' },
};

export default function StampCollection() {
  const [collectedStamps, setCollectedStamps] = useState({});
  const [stamps, setStamps] = useState([]);
  const [centerVisible, setCenterVisible] = useState(false);

  const courseData = {
    '연인 코스': [
      { id: 'roseGarden', name: '장미광장', image: 장미광장 },
      { id: 'somaMuseum', name: '소마미술관', image: 소마미술관 },
      { id: 'peacePlaza', name: '평화의 광장', image: 평화의광장 },
      { id: 'gommalBridge', name: '곰말다리', image: 곰말다리 },
      { id: 'loveTree', name: '사랑나무연리목', image: 사랑나무연리목 },
    ],
    '가족 코스': [
      { id: 'lake88', name: '88호수', image: 장미광장 },
      { id: 'familyPark', name: '가족놀이동산', image: 가족놀이동산 },
      { id: 'historyMuseum', name: '서울역사편찬원', image: 서울역사편찬원 },
      { id: 'picnicArea', name: '피크닉장', image: 피크닉장 },
      { id: 'roseGarden', name: '장미광장', image: 장미광장 },
    ],
    '역사 코스': [
      { id: 'baekjeMuseum', name: '한성백제박물관', image: 한성백제박물관 },
      { id: 'fortressTrail', name: '몽촌토성 산책로', image: 몽촌토성 },
      { id: 'historyMuseum', name: '서울역사편찬원', image: 서울역사편찬원 },
      { id: 'musicFountain', name: '몽촌해자 음악분수', image: 몽촌해자 },
      { id: 'dialogueSculpture', name: '대화조각', image: 대화조각 },
    ],
    '자연 코스': [
      { id: 'field88', name: '88마당', image: 마당 },
      { id: 'wildflowerGarden', name: '들꽃마루', image: 들꽃마루 },
      { id: 'fortressTrail', name: '몽촌토성 산책로', image: 몽촌토성 },
      { id: 'loneTree', name: '나홀로나무', image: 나홀로나무 },
      { id: 'lake88', name: '88호수', image: 호수 },
    ],
    '산책 코스': [
      { id: 'peaceGate', name: '세계평화의문', image: 세계평화의문 },
      { id: 'lakeTrail', name: '호반의길', image: 호반의길 },
      { id: 'youthTrail', name: '젊음의 길', image: 젊음의길 },
      { id: 'fortressTrail', name: '몽촌토성 산책로', image: 몽촌토성 },
      { id: 'memoryTrail', name: '추억의 길', image: 추억의길 },
    ],
    '9경 코스': [
      { id: 'peaceGate', name: '세계평화의문', image: 세계평화의문 },
      { id: 'lake88', name: '88호수', image: 호수 },
      { id: 'roseGarden', name: '장미광장', image: 장미광장 },
      { id: 'dialogueSculpture', name: '대화조각', image: 대화조각 },
      { id: 'loneTree', name: '나홀로나무', image: 나홀로나무 },
    ],
  };
  

  const [selectedCourse, setSelectedCourse] = useState('코스 선택');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const courses = Object.keys(courseData);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const selectCourse = (course) => {
    setSelectedCourse(course);
    setIsDropdownOpen(false);

    const selectedStamps = courseData[course] || [];
    setStamps(selectedStamps);
    setCollectedStamps(
      selectedStamps.reduce((acc, stamp) => ({ ...acc, [stamp.id]: false }), {})
    );
  };

  useEffect(() => {
    const allCollected = Object.values(collectedStamps).every((value) => value);
    setCenterVisible(allCollected);
  }, [collectedStamps]);

  const toggleStamp = (stampId) => {
    setCollectedStamps((prev) => ({
      ...prev,
      [stampId]: !prev[stampId],
    }));
  };

  const handleSubmission = () => {
    if (centerVisible) {
      alert('응모가 완료되었습니다!');
    }
  };

  return (
    <StampPage>
      <StampWrapper>
        <StampHeader>
          <h1>StamPic</h1>
          <h3>올림픽 공원 코스별로 도장을 모아서 응모해보세요!</h3>
          <CourseTagWrapper>
            <CourseTagButton onClick={toggleDropdown}>{selectedCourse}</CourseTagButton>
            {isDropdownOpen && (
              <DropdownMenu>
                {courses.map((course, index) => (
                  <li key={index} onClick={() => selectCourse(course)}>
                    {course}
                  </li>
                ))}
              </DropdownMenu>
            )}
          </CourseTagWrapper>
        </StampHeader>

        <StampContainer>
          <PathLines />
          {stamps.map((stamp, index) => (
            <StampCircle
            key={stamp.id}
            collected={collectedStamps[stamp.id]}
            position={positions[index] || {}}
            onClick={() => toggleStamp(stamp.id)}
          >
            {collectedStamps[stamp.id] && <img src={stamp.image} alt={stamp.name} />}
            {!collectedStamps[stamp.id] && <StampLabel>{stamp.name}</StampLabel>}
          </StampCircle>          
          
          ))}
          <StampCircle
            collected={centerVisible}
            position={positions.stampCircle}
          >
            <StampContent>
              {centerVisible && <div style={{fontSize: '55px'}}>⭐</div>}
            </StampContent>
          </StampCircle>
          <ArrowIcon />
        </StampContainer>
        <ButtonWrapper>
          <SubmitButton active={centerVisible} onClick={handleSubmission}>
            응모하기
          </SubmitButton>
        </ButtonWrapper>
      </StampWrapper>
    </StampPage>
  );
}
