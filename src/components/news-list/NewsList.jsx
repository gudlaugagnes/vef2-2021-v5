import React, { useEffect, useState } from 'react';
import s from './NewsList.module.scss';
import { NavLink, Route} from 'react-router-dom';
import { NotFound } from "../../pages/NotFound";


const apiUrl = process.env.REACT_APP_API_URL;


export function NewsList({ id , allNews }) {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);
  const [status, setStatus] = useState(null);


  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      setStatus(null);

      let json;

      const url = `${apiUrl}${id}`;


      try {
        const result = await fetch(url);


        if (result.status === 404) {
          setStatus("404");
        }

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


  if (status) {
    console.log("status if");
    return <Route component={NotFound} />;
  }

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

  let amount = news.length;
  if (allNews === false) {
    amount = 5;
  } else {
    amount = news.length;
  }


  return (
    <section className={s.newsList}>
      <h1>{title}</h1>
      <ul >
        {news.length === 0 && (
          <li>Engar fréttir</li>
        )}
      </ul>
      { news.slice(0,amount).map((n, i) => {
        return (
          <div  key={i}>
            <a className={s.newsLink} href={n.link}  > {n.title} </a>
          </div>
        );
      })}
      {(() => {
        if (amount === news.length) {
          return (
            <div className={s.link}>
              <NavLink className={s.newsLink_nav} to="/">Til baka</NavLink>
            </div>
          );
        } else {
          return (
            <div className={s.link}>
              <NavLink className={s.newsLink_nav} to={`/${id}`}>Allar fréttir</NavLink>
            </div>
          );
        }
      })()}
    </section>
  );
}
