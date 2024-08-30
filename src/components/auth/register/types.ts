export type FormData = {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  email: string;
  isTourLeader: boolean;
  activityDuration?: number;
  Province?: string;
  city?: string;
  specialtyOne?: string;
  specialtyTwo?: string;
  aboutMe?: string;
  cardIssueDate?: string;
  cardExpiryDate?: string;
  languages?: string[];
  image?: string; // Add the image field
  national_card_image?: string;
};

export const defaultFormValues: FormData = {
  image: undefined,
  firstName: '',
  lastName: '',
  birthDate: '',
  gender: '',
  email: '',
  isTourLeader: false,
  activityDuration: undefined,
  Province: '',
  city: '',
  specialtyOne: '',
  specialtyTwo: '',
  aboutMe: '',
  cardIssueDate: '',
  cardExpiryDate: '',
  national_card_image: '',
  languages: [],
};
