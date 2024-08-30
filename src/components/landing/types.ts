import { StaticImageData } from 'next/image';

export type RecentPlanCard = {
  image: string | StaticImageData;
  userName: string;
  creationDate: string;
  from: string;
  to: string;
  travelDays: number;
  companionCount?: number;
  isPremium?: boolean;
};

export type RecentPointCard = {
  pictureUrl: string | StaticImageData;
  title: string;
  rating: number;
  address: string;
};

export type RecentTourCardProps = {
  from: string;
  to: string;
  image: string | StaticImageData;
  userName: string;
  isPremium?: boolean;
  badge: string[];
  travelDays: number;
};
