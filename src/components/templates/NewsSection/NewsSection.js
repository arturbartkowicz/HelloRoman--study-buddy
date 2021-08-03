import React from 'react';
import { Wrapper, NewsSectionHeader } from './NewsSection.styles';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      <ViewWrapper>
        <h3>Lorem ipsum</h3>
        <p>sdfkn fsnf sfn</p>
        <Button>Click me</Button>
      </ViewWrapper>
      <ViewWrapper>
        <h3>Lorem ipsum</h3>
        <p>sdfkn fsnf sfn</p>
        <Button>Click me</Button>
      </ViewWrapper>
      <ViewWrapper>
        <h3>Lorem ipsum</h3>
        <p>sdfkn fsnf sfn</p>
        <Button>Click me</Button>
      </ViewWrapper>
    </Wrapper>
  );
};

export default NewsSection;
