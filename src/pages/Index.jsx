import React from 'react';
import PropTypes from 'prop-types';

Index.propTypes = {
  title: PropTypes.string,
  news: PropTypes.arrayOf(PropTypes.object)
}

export function Index({ title, news }) {
  return (
    <section>
      <h1> {title} </h1>


    </section>
  );
}
