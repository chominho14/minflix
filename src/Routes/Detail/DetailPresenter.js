import React from "react";
import ProTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import CommentPresenter from "Routes/Detail/CommentPresenter";
import LikeAndDislikePresenter from "Routes/Detail/LikeAndDislikePresenter";
import {Link} from 'react-router-dom';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Data = styled.div`
  width: 50%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 70%;
`;

const Comment = styled.div`
  margin-bottom: 20px;
  background-color: white;
  opacity: 0.4;
  border-radius: 10px;
  width: 100%;
  max-width: 320px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  color: rgb(0, 0, 0, 1);
  margin-top: 15px;
`;

const CommentTitle = styled.div`
  font-size: 18px;
  margin: 15px 3px;
`;


const CollectionLink = styled.span`
    font-size: 13px;
    width: 20px;
    height: 10px;
    background-color: rgba(94, 79, 52,0.5);
    color: #FFEFD5;
    border: 5px;
    box-sizing: border-box;
    padding: 2px 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover{
        background-color: rgba(94, 79, 52,1);
    }
`;

const ImdbBtn = styled.a`
    all: unset;
    width: 20px;
    height: 10px;
    background-color: rgba(94, 79, 52,0.8);
    color: #FFEFD5;
    border: 5px;
    box-sizing: border-box;
    padding: 2px 5px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover{
        background-color: rgba(94, 79, 52,1);
    }
`;

const VideoContainer = styled.div`
  width:90%;
  padding 20px;
  margin-top:200px;
  background-color: rgba(255, 255, 255,0.4);
  border-radius: 10px;
  color : black;
`;

const VideoItem = styled.div`
  display : flex;
  flex-direction : column;
`;

const Video = styled.iframe`
  width : 500px;
  height : 300px;
  margin: 20px;
`;

const VideoName = styled.span`
  margin-left : 30px;
  font-size : 1.5em;
  font-weight : bold;
`;



const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.PNG")
          }
        />

        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0.4)
                : result.first_air_date.substring(0.4)}
            </Item>
            <Divider>▪</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>▪</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
                {result.imdb_id && (
                        <>
                            <Divider>•</Divider>
                            <Item>
                                <ImdbBtn href={`https://www.imdb.com/title/${result.imdb_id}/`} target="_blank" rel="noopener noreferrer">
                                Imdb
                                </ImdbBtn>
                            </Item>
                        </>
                    )
                    }
                {result.belongs_to_collection ? 
                    <>
                    <Divider>•</Divider>
                    <Link to={`/collection/${result.belongs_to_collection.id}`}>
                        <CollectionLink>See Series</CollectionLink>
                    </Link>    
                    </> : ''          
                    }
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          {
            <VideoContainer>
              {
                result.videos.results && result.videos.results.length > 0 ?  
                  <VideoItem key={result.videos.results[0].id}>
                    <VideoName>{result.videos.results[0].name}</VideoName>
                    <Video src={`https://www.youtube.com/embed/${result.videos.results[0].key}`} />                  
                  </VideoItem>
                : `YouTube Video가 없습니다.`
              }
            </VideoContainer>
          }
        </Data>

        <Comment>
          <LikeAndDislikePresenter />
          <CommentTitle>Comment</CommentTitle>
          <CommentPresenter />
        </Comment>
      </Content>
    </Container>
  );

DetailPresenter.prototype = {
  result: ProTypes.object,
  loading: ProTypes.bool.isrequired,
  error: ProTypes.string,
};

export default DetailPresenter;
