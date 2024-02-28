import { StaticImageData } from 'next/image';
import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

export type ProjectData = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  linkedinUrl: string;
  websiteUrl: string;
};
