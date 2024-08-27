export interface FormData {
  origin: {
    city: string;
    province: string;
  };
  destination: {
    city: string;
    province: string;
  };
  startTime: {
    time: string;
    date: string;
  };
  endTime: {
    time: string;
    date: string;
  };
  means_of_travel: string;
  place_of_residence: string;
  Type_of_tourist_place: number[];
  sortBy: string;
  number_Of_Adult_Passengers: string;
  number_Of_Child_Passengers: string;
  number_Of_Minor_Passengers: string;
  Type_Of_Passengers: number[];
}
export const defaultFormValues: FormData = {
  origin: {
    city: '',
    province: '',
  },
  destination: {
    city: '',
    province: '',
  },
  startTime: {
    time: '',
    date: '',
  },
  endTime: {
    time: '',
    date: '',
  },
  means_of_travel: '',
  place_of_residence: '',
  Type_of_tourist_place: [1],
  sortBy: '',
  number_Of_Adult_Passengers: '',
  number_Of_Child_Passengers: '',
  number_Of_Minor_Passengers: '',
  Type_Of_Passengers: [1],
};
