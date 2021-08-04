import React from 'react';
import { TitleWrapper, ArticleWrapper, Wrapper, NewsSectionHeader } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      <ArticleWrapper>
        <TitleWrapper>
          <h3>Lorem ipsum</h3>
          <p>sdfkn fsnf sfn</p>
        </TitleWrapper>
        <p>Lorem dskjfnkj sfnkjnf wnwkn wekdl wlekf lkwelk</p>
        <Button isBig>Click me</Button>
      </ArticleWrapper>
      <ArticleWrapper>
        <TitleWrapper>
          <h3>Lorem ipsum</h3>
          <p>sdfkn fsnf sfn</p>
        </TitleWrapper>
        <Button isBig>Click me</Button>
      </ArticleWrapper>
      <ArticleWrapper>
        <TitleWrapper>
          <h3>Lorem ipsum</h3>
          <p>sdfkn fsnf sfn</p>
        </TitleWrapper>
        <Button isBig>Click me</Button>
      </ArticleWrapper>
    </Wrapper>
  );
};

export default NewsSection;
