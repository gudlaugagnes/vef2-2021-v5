import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import { News } from '../../components/news/News';
//import s from './NewsList.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

NewsList.propTypes = {
  title: PropTypes.string.isRequired,
  news: PropTypes.string.isRequired,
}

export function NewsList({ title, news }) {
  // TODO sækja yfirlit fréttaflokka
  let { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      let json;

      const url = `${apiUrl}${id}`;

      try {
        const result = await fetch(url);

        if (!result.ok) {
          throw new Error('result not ok');
        }

        json = await result.json();
      } catch (e) {
        setError('Gat ekki sótt gögn.');
        return;
      } finally {
        setLoading(false);
      }

      setData(json);
    }
    fetchData();
  }, [id]);

  if (error) {
    return (
      <p>Villa kom upp: {error}</p>
    );
  }

  if (loading) {
    return (
      <p>Sæki gögn...</p>
    );
  }

  const newsTitle = data.title;

  let newsList = data.item || [];
  console.log("Þetta er data" + data);

  

  return (
    <News
      title={newsTitle}
      news={newsList}
    />
  );
}
