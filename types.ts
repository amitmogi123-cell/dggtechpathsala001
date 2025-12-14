export interface Course {
  id: string;
  title: string;
  description: string;
  image?: any;
  highlight?: string;
  ageGroup?: string;
  duration?: string;
  tags?: string[];
}

export interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  HOME = 'home',
  COURSES = 'courses',
  REVIEWS = 'reviews',
  CONTACT = 'contact',
  ABOUT = 'about'
}

export type Language = 'en' | 'hi';
