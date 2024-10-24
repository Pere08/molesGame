import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    detection: {
      lookupCookie: 'reskyt-lang-app',
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: {
            title: "Mole's Game",
            subTitle: 'Pokemon version',
            errorMsg: {
              userName: 'Enter a name, please',
              difficulty: 'Select some difficulty, please',
            },
            playButton: 'PLAY',
          },
          game: {
            buttons: {
              start: 'Start',
              stop: 'Stop',
            },
            points: 'Points',
            player: 'Player',
            level: 'Level',
            time: 'Time',
            completeGame: {
              thanks: 'Thanks for play!',
              play: 'Play again',
              noPlay: 'No thanks',
            },
            difficulty: {
              easy: 'Easy',
              medium: 'Medium',
              hard: 'Hard',
            },
          },
        },
      },
      es: {
        translation: {
          home: {
            title: "Mole's Game",
            subTitle: 'versión Pokemon',
            errorMsg: {
              userName: 'Introduce un nombre',
              difficulty: 'Seleccione una dificultad',
            },
            playButton: 'JUGAR',
          },
          game: {
            buttons: {
              start: 'Empezar',
              stop: 'Parar',
            },
            points: 'Puntos',
            player: 'Jugador',
            level: 'Nivel',
            time: 'Tiempo',
            completeGame: {
              thanks: 'Gracias por jugar!',
              play: 'Jugar otra vez',
              noPlay: 'No, gracias',
            },
            difficulty: {
              easy: 'Fácil',
              medium: 'Medio',
              hard: 'Difícil',
            },
          },
        },
      },
    },
  });

export default i18n;
