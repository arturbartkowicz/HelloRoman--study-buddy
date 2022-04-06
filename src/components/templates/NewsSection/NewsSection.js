import React, { useState, useEffect } from 'react';
import { TitleWrapper, ArticleWrapper, Wrapper, NewsSectionHeader, ContentWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

const GRAPHQL_ENDPOINT = 'https://graphql.datocms.com/';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

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
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => setArticles(data.allArticles))
      // .then((response) => {
      //   console.log(response);
      // })
      .catch((err) => {
        setError("Sorry couldn't display data");
        console.log('Hi');
      });
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 && !error ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
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
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
