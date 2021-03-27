import React, { useEffect, useState } from 'react';
//import { useParams } from 'react-router';
import s from './NewsList.module.scss';
import { NavLink} from 'react-router-dom';


const apiUrl = process.env.REACT_APP_API_URL;


export function NewsList({ id }) {

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

  const title = data.title;
  let news = data.items || [];

  return (
    <section className={s.newsList}>
      <h1>{title}</h1>
      <ul >
        {news.length === 0 && (
          <li>Engar fréttir</li>
        )}
      </ul>
      { news.slice(0,5).map((n, i) => {
        return (
          <div  key={i}>
            <a className={s.newsLink} href={n.link}  > {n.title} </a>
          </div>
        );
      })}
      <NavLink className={s.newsLink_AllarFrettir} to={`/${id}`}>Allar fréttir</NavLink>
    </section>
  );
}
