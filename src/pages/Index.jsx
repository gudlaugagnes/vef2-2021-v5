//import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';



Index.propTypes = {
  type: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  search: PropTypes.string,
}



export function Index() {
  return (
    <h1> Þetta er index síðan</h1>
  );
}
