import { useProp } from "atomico";
import { useResponsiveState } from "@atomico/hooks/use-responsive-state";

/**
 * @template T
 * @param {string} prop
 * @param {T} type
 * @returns {ReturnType<T>}
 */
export function useResponsiveProp(prop, type) {
  const [state] = useProp(prop);
  const value = useResponsiveState("" + state);
  return type(value);
}
