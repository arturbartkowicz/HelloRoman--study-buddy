import React from 'react';
import { TitleWrapper, ArticleWrapper, Wrapper, NewsSectionHeader, ContentWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';

const NewsSection = () => {
  const data = [
    {
      title: 'New car',
      category: 'Cars',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur iste provident vitae, minima maxime at ab consequatur, ea impedit eius esse porro numquam voluptate voluptatibus debitis magnam aperiam! Ex, dolores?',
      image: null,
    },
    {
      title: 'New computer at school',
      category: 'Tech news',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur iste provident vitae, minima maxime at ab consequatur, ea impedit eius esse porro numquam voluptate voluptatibus debitis magnam aperiam! Ex, dolores?',
      image: 'https://unsplash.it/500/400',
    },
    {
      title: 'New computer at school',
      category: 'Tech news',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur iste provident vitae, minima maxime at ab consequatur, ea impedit eius esse porro numquam voluptate voluptatibus debitis magnam aperiam! Ex, dolores?',
      image: null,
    },
  ];

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {data.map((item) => (
        <ArticleWrapper key={item.title}>
          <TitleWrapper>
            <h3>{item.title}</h3>
            <p>{item.category}</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>{item.content}</p>
            {item.image ? <img src={item.image} alt={'sjkfn'} style={{ width: 'auto', height: 'auto' }} /> : null}
          </ContentWrapper>
          <Button isBig>Click me</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
