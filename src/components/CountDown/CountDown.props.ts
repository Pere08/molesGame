export interface ICountDown {
    initialTime: number;
    isActive: boolean;
    onTimerEnd: () => void;
}