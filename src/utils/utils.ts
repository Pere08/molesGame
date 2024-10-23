export const difficutlyImg = {
  easy: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  medium:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  hard: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
};

export const pokeballImg =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';

export const allImages = [
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
];

export const firstCapitalLetter = (value: string): string => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const vibrate = () => {
  if (navigator.vibrate) {
    navigator.vibrate(300);
  }
};
