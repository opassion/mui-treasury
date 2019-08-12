/* eslint-disable max-len */
import peaActivism from '../lib/assets/pea_activism.png';
import peaArtAndCulture from '../lib/assets/pea_art-and-culture.png';
import peaCommunity from '../lib/assets/pea_community.png';
import peaFood from '../lib/assets/pea_food.png';
import peaGaming from '../lib/assets/pea_gaming.png';
import peaHobbie from '../lib/assets/pea_hobbie.png';
import peaLearning from '../lib/assets/pea_learning.png';
import peaMovie from '../lib/assets/pea_movie.png';
import peaMusic from '../lib/assets/pea_music.png';
import peaNetworking from '../lib/assets/pea_networking.png';
import peaOutdoor from '../lib/assets/pea_outdoor.png';
import peaSpirituality from '../lib/assets/pea_spirituality.png';
import peaSport from '../lib/assets/pea_sport.png';
import peaVolunteering from '../lib/assets/pea_volunteering.png';

export const AVATAR =
  'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg';
export const PEOPLE = [
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example.svg',
    name: 'Yeoman',
    tag: '@whatsup yeo',
    onClick: () => alert('Followed Yeoman!'),
  },
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example2.svg',
    name: 'GGWP',
    tag: '@goodgamewellplay',
    onClick: () => alert('Followed GGWP!'),
  },
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example3.svg',
    name: 'Sawasdee',
    tag: '@helloTH',
    onClick: () => alert('Followed Sawasdee!'),
  },
];
export const SOCIAL1 = [
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example.svg',
    name: 'Yeoman',
    social: 'twitter',
  },
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example2.svg',
    name: 'GGWP',
    social: 'meetup',
  },
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example3.svg',
    name: 'Sawasdee',
    social: 'facebook',
  },
];
export const SOCIAL2 = [
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example4.svg',
    name: 'Yeoman',
    social: 'tag',
  },
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example5.svg',
    name: 'GGWP',
    social: 'tag',
  },
];
export const SOCIAL3 = [
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example7.svg',
    name: 'Yeoman',
    social: 'group',
  },
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example8.svg',
    name: 'GGWP',
    social: 'group',
  },
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example9.svg',
    name: 'Sawasdee',
    social: 'group',
  },
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example10.svg',
    name: 'Test',
    social: 'group',
  },
];
export const peapodCardProps = {
  profile: {
    name: 'Siriwat Knp',
    image: 'https://avatars.dicebear.com/v2/avataaars/siriwat.svg',
  },
  social: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png',
  image:
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
  title: 'Deep dive into chat bot training best practice.',
  time: 'Thursday, January 10th, 4:00am',
  location: 'Pivotal Labs, 875 Howard St. San Francisco USA',
  podCount: 3,
  peopleGoing: {
    images: [
      'https://avatars.dicebear.com/v2/avataaars/example.svg',
      'https://avatars.dicebear.com/v2/avataaars/example1.svg',
      'https://avatars.dicebear.com/v2/avataaars/example2.svg',
      'https://avatars.dicebear.com/v2/avataaars/example3.svg',
    ],
    more: 12,
  },
  peopleInterested: {
    images: [
      'https://avatars.dicebear.com/v2/avataaars/example4.svg',
      'https://avatars.dicebear.com/v2/avataaars/example5.svg',
      'https://avatars.dicebear.com/v2/avataaars/example6.svg',
      'https://avatars.dicebear.com/v2/avataaars/example7.svg',
      'https://avatars.dicebear.com/v2/avataaars/example8.svg',
    ],
    more: 4,
  },
};

export const peapodEvent = {
  title: '',
  categories: [
    { image: peaActivism, label: 'Activism', checked: true },
    { image: peaArtAndCulture, label: 'Art & Culture', checked: false },
    { image: peaCommunity, label: 'Community', checked: true },
    { image: peaFood, label: 'Food', checked: true },
    { image: peaGaming, label: 'Gaming', checked: false },
    { image: peaHobbie, label: 'Hobbie', checked: false },
    { image: peaLearning, label: 'Learning', checked: true },
    { image: peaMovie, label: 'Movie', checked: true },
    { image: peaMusic, label: 'Music', checked: false },
    { image: peaNetworking, label: 'Networking', checked: true },
    { image: peaOutdoor, label: 'Outdoor', checked: true },
    { image: peaSpirituality, label: 'Spirituality', checked: false },
    { image: peaSport, label: 'Sport', checked: true },
    { image: peaVolunteering, label: 'Volunteering', checked: false },
  ],
  description: '',
  hashtags: '',
  date: '',
  time: '',
  privateEvent: false,
  invitingGuests: '',
  price: 30,
};
