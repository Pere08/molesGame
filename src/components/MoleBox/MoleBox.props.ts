export interface IMoleBox {
  show: boolean;
  setNumPoints: (value: number | ((prev: number) => number)) => void;
  pointsByDifficulty: number;
}
