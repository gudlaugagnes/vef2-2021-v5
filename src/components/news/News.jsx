import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import s from './News.module.scss';


const apiUrl = process.env.REACT_APP_API_URL;


News.propTypes = {
  id: PropTypes.string.isRequired,
  newsList: PropTypes.arrayOf(PropTypes.object),
}

export function News({ id, newsList }) {
  // TODO sækja fréttir fyrir flokk
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      let json;

      const url = apiUrl`${id}`;

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

  const title = id.find((t) => t.type === id).label ;

  let news = data.items.title || [];

  

  return (
    <News
      title={title}
      news={news}
    />
  );
}