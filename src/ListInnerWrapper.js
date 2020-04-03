import React from "react";
export function ListInnerWrapper({ list, onClick }) {
  return (
    <div>
      {list.map(item => (
        <button
          style={{ backgroundColor: item }}
          onClick={() => {
            onClick(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
