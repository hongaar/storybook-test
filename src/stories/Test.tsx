export interface TestProps {
  /** Test contents */
  label?: string;
}

/** Primary UI component for user interaction */
export const Test = ({
  label
}: TestProps) => {
  return label || "default label";
};
