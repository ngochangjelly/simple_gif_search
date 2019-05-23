import React from 'react';
const GifInfo = props => {
  if (props.gif.data) {
    return props.gif.data.map(d => (
      <img key={d.id} src={d.images.downsized.url} />
    ));
  }
  return <div />;
};

export default GifInfo;
