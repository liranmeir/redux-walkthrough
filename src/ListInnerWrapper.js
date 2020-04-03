import React from "react";
export function ListInnerWrapper({ list, onClick }) {
  return (<div>
    {list.map(item => (<button onClick={() => {
      onClick(item);
    }}>
      {item}
    </button>))}
  </div>);
}
