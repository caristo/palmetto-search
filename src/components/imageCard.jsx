import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faStar } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  display: flex;
  flex-flow: no wrap;
  align-items: flex-start;
`;

const CardImage = styled.div`
  border: 1px solid blue;
  width: 50%;
  height: 150px;
`;

const CardInfo = styled.div`
  display: block;
  width: 50%;
`;

const Keyword = styled.button`
  padding: 5px 10px;
  background-color: #49a28e;
  margin: 10px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    background-color: #59c1aa;
  }
`;

const Likes = styled.button`
  margin: 30px 10px;
  background: none;
  border: none;
`;

const LikeAmount = styled.span`
  margin: 5px 5px 0 0;
`;

export function ImageCard() {
  return (
    <Wrapper>
      <CardImage />
      <CardInfo>
        <Keyword>test</Keyword>
        <Keyword>longerTest</Keyword>
        <Keyword>cat</Keyword>
        <Keyword>doge</Keyword>
        <div>
          <Likes>
            <LikeAmount>54</LikeAmount>
            <FontAwesomeIcon icon={faThumbsUp} />
          </Likes>
          <Likes>
            <LikeAmount>93</LikeAmount>
            <FontAwesomeIcon icon={faStar} />
          </Likes>
        </div>
      </CardInfo>
    </Wrapper>
  );
}
