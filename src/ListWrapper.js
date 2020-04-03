import React from "react";
import { ListInnerWrapper } from "./ListInnerWrapper";

export default function ListWrapper({ list, onClick }) {
  return (
    <div>
      <ListInnerWrapper list={list} onClick={onClick} />
    </div>
  );
}
