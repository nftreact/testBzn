export interface FormData {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  email: string;
  isTourLeader: boolean;
  activityDuration: number;
  activityProvince: string;
  specialtyOne: string;
  specialtyTwo: string;
  aboutMe: string;
  cardIssueDate: string;
  cardExpiryDate: string;
  languages: string[];
}

export const defaultFormValues: FormData = {
  firstName: '',
  lastName: '',
  birthDate: '',
  gender: '',
  email: '',
  isTourLeader: false,
  activityDuration: 0,
  activityProvince: '',
  specialtyOne: '',
  specialtyTwo: '',
  aboutMe: '',
  cardIssueDate: '',
  cardExpiryDate: '',
  languages: [],
};
