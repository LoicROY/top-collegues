import { Avis } from './avis';

export const collegues = [
  {
    pseudo: 'Random Female',
    score: Math.floor(Math.random() * 100),
    photo: 'https://randomuser.me/api/portraits/women/60.jpg',
  },
  {
    pseudo: 'Random Male',
    score: Math.floor(Math.random() * 100),
    photo: 'https://randomuser.me/api/portraits/men/60.jpg',
  },
  {
    pseudo: 'Random Female',
    score: Math.floor(Math.random() * 100),
    photo: 'https://randomuser.me/api/portraits/women/61.jpg',
  },
  {
    pseudo: 'Random Male',
    score: Math.floor(Math.random() * 100),
    photo: 'https://randomuser.me/api/portraits/men/61.jpg',
  },
  {
    pseudo: 'Random Female',
    score: Math.floor(Math.random() * 100),
    photo: 'https://randomuser.me/api/portraits/women/62.jpg',
  },
  {
    pseudo: 'Random Male',
    score: Math.floor(Math.random() * 100),
    photo: 'https://randomuser.me/api/portraits/men/62.jpg',
  },
  {
    pseudo: 'Random Female',
    score: Math.floor(Math.random() * 100),
    photo: 'https://randomuser.me/api/portraits/women/63.jpg',
  },
  {
    pseudo: 'Random Male',
    score: Math.floor(Math.random() * 100),
    photo: 'https://randomuser.me/api/portraits/men/63.jpg',
  },
  {
    pseudo: 'Random Female',
    score: Math.floor(Math.random() * 100),
    photo: 'https://randomuser.me/api/portraits/women/64.jpg',
  },
  {
    pseudo: 'Random Male',
    score: Math.floor(Math.random() * 100),
    photo: 'https://randomuser.me/api/portraits/men/64.jpg',
  },
];

export const vote = {
  collegue: collegues[0],
  avis: Avis.AIMER,
  score: 0
}