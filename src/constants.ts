import { Project, Tool } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'ShivOm Jewellers',
    category: 'Branding',
    imageUrl: 'https://images2.imgbox.com/97/07/GjNE1NkX_o.png',
  },
  {
    id: '2',
    title: 'CORPREST CONSULTANCY',
    category: 'Logo Design',
    imageUrl: 'https://images2.imgbox.com/e9/74/YNMqcSI3_o.jpg',
  },
  {
    id: '3',
    title: 'ROUND ONE MMA',
    category: 'Social Media',
    imageUrl: 'https://images2.imgbox.com/37/11/bKnjf3RU_o.png',
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
