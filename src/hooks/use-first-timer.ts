import { useState } from "react";
import { get, set } from "idb-keyval";

export default function useFirstTimer() {
  const [state, setState] = useState(true);

  get("first-timer").then((v: boolean) => {
    if (v === undefined) {
      set("first-timer", true);
      setState(true);
    } else {
      set("first-timer", false);
      setState(false);
    }
  });

  return [
    state,
    (value: boolean): void => {
      setState(value);
      set("first-timer", value);
    }
  ];
}
