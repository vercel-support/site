import { useDebugValue, useCallback } from "react";

export default function useGoal(id: string, debug = false) {
  useDebugValue(id);

  return useCallback(() => {
    if (window.fathom !== undefined) {
      (window.fathom as any)("trackGoal", id, 0);
    }

    if (debug) console.log(`Goal triggered: ${id}`);
  }, [id, debug]);
}
