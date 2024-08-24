export type RecentPlanCard = {
  userName: string;
  creationDate: string;
  from: string;
  to: string;
  travelDays: number;
  companionCount?: number;
  isPremium?: boolean;
};

export type RecentPointCard = {
  pictureUrl: string;
  title: string;
  rating: number;
  address: string;
};
