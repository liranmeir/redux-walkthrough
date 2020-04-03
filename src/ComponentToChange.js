import React from "react";
import { InnerComponentToChange } from "./InnerComponentToChange";
export function ComponentToChange({ color }) {
  return <InnerComponentToChange color={color}></InnerComponentToChange>;
}
