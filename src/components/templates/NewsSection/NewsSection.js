import React, { useState, useEffect } from 'react';
import { TitleWrapper, ArticleWrapper, Wrapper, NewsSectionHeader, ContentWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

const API_TOKEN = 'd6ffb544dff9cdf6a7f244bdc151f7';
const GRAPHQL_ENDPOINT = 'https://graphql.datocms.com/';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .post(
        GRAPHQL_ENDPOINT,
        {
          query: `
            { allArticles {
                id
                title
                content
                image {
                  id
                  url
                }
              }
            } 
          `,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => setArticles(data.allArticles))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ title, category, content, image = null }) => (
          <ArticleWrapper key={title}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt={'sjkfn'} style={{ width: 'auto', height: 'auto' }} /> : null}
            </ContentWrapper>
            <Button isBig>Click me</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>Loading...</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
