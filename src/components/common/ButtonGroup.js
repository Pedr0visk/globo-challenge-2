import React from 'react';

export default ({ ...props }) => {
  return (
    <div className="button-group">{props.children}</div>
  )
}
