import React from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { NewsList } from '../components/news-list/NewsList'


export function NewsPage() {

  let { id } = useParams();

  return (
    <div>
      <NewsList id={id} />
      <NavLink to='/'>Tilbaka</NavLink>
    </div>

  );
}