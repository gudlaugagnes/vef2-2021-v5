import React from 'react';
import PropTypes from 'prop-types';
import s from './NewsList.module.scss';

NewsPage.propTypes = {
  title: PropTypes.string,
  news: PropTypes.arrayOf(PropTypes.object)
}

export function NewsPage({title, news}) {
  return (
    <section className={s.newsList}>
      <h1>{title}</h1>
      <ul>
      {news.length === 0 && (
       <li>Engar fréttir</li>
        )}
      </ul>
      { news.map((n, i) => {
    return(
      <div>
        <a className={s.newsLink} href={n.link} key={i} > {n.title} </a>
      </div>
    );
    })}
    </section>
  );
}