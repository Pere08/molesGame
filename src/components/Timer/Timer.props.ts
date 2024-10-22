export interface ITimer {
    startCountdown: boolean;
    onComplete: () => void;
}