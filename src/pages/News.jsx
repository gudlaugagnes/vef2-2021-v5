//import React from 'react';

export function NewsPage({title, news}) {
  // TODO útfæra fréttasíðu
  return (
    <div>
      <h1>Þetta er newspage síða</h1>
      <h2>{title}</h2>
      <ul>
        {news}
      </ul>
    </div>
  );
}