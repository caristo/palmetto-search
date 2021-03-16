import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faStar } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  display: flex;
  flex-flow: no wrap;
  align-items: flex-start;
  margin: 50px 0;
  width: 100%;
`;

const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 20px 0 0;
  img {
    flex-shrink: 0;
    width: 325px;
    height: 200px;
    object-fit: scale-down;
  }
`;

const CardInfo = styled.div`
  display: block;
  width: 45%;
  position: relative;
  height: 195px;
`;

const Keyword = styled.button`
  padding: 5px 10px;
  background-color: #49a28e;
  margin: 0 10px 10px;
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
  font-weight: bold;
  margin: 0 10px;
  background: none;
  border: none;
`;

const LikeAmount = styled.span`
  margin: 5px 5px 0 0;
`;

const LikesAndFavs = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export function ImageCard(props) {
  return (
    <Wrapper>
      <CardImage>
        <img src={props.image.largeImageURL} />
      </CardImage>
      <CardInfo>
        {props.image.tags.split(',').map((keyword) => {
          return <Keyword>{keyword}</Keyword>;
        })}
        <LikesAndFavs>
          <Likes>
            <LikeAmount>{props.image.likes}</LikeAmount>
            <FontAwesomeIcon icon={faThumbsUp} />
          </Likes>
          <Likes>
            <LikeAmount>{props.image.favorites}</LikeAmount>
            <FontAwesomeIcon icon={faStar} />
          </Likes>
        </LikesAndFavs>
      </CardInfo>
    </Wrapper>
  );
}
