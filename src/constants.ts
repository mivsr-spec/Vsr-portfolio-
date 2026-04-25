import { Project, Tool } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'ShivOm Jewellers',
    category: 'Branding',
    imageUrl: 'https://i.ibb.co/Hfg0wXXD/Artboard-31-4x-8.png',
  },
  {
    id: '2',
    title: 'CORPREST CONSULTANCY',
    category: 'Logo Design',
    imageUrl: 'https://i.ibb.co/YBHmSymm/Untitled-1-page-0001.jpg',
  },
  {
    id: '3',
    title: 'ROUND ONE MMA',
    category: 'Social Media',
    imageUrl: 'https://i.ibb.co/Xn5pbHZ/R11-3x.png',
  },
  {
    id: '4',
    title: 'Corporate Business Card',
    category: 'Branding',
    imageUrl: 'https://picsum.photos/seed/business/800/800',
  },
  {
    id: '5',
    title: 'Event Promotional Poster',
    category: 'Advertising',
    imageUrl: 'https://picsum.photos/seed/poster/800/800',
  },
  {
    id: '6',
    title: 'Real Estate Flyer',
    category: 'Advertising',
    imageUrl: 'https://picsum.photos/seed/house/800/800',
  },
];

export const TOOLS: Tool[] = [
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
  { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

export const CATEGORIES = ['All', 'Branding', 'Advertising', 'Social Media', 'Logo Design'];
