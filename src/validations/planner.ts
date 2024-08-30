import * as yup from 'yup';

export const plannerValidationSchema = yup.object().shape({
  origin: yup.object().shape({
    city: yup.string().required('لطفا شهر مبدأ را وارد کنید'),
    province: yup.string().required('لطفا استان مبدأ را وارد کنید'),
  }),
  destination: yup.object().shape({
    city: yup.string().required('لطفا شهر مقصد را وارد کنید'),
    province: yup.string().required('لطفا استان مقصد را وارد کنید'),
  }),
  startTime: yup.object().shape({
    time: yup.string().required('لطفا زمان شروع را وارد کنید'),
    date: yup.string().required('لطفا تاریخ شروع را وارد کنید'),
  }),
  endTime: yup.object().shape({
    time: yup.string().required('لطفا زمان پایان را وارد کنید'),
    date: yup.string().required('لطفا تاریخ پایان را وارد کنید'),
  }),
  means_of_travel: yup.string().required('لطفا وسیله نقلیه را وارد کنید'),
  place_of_residence: yup.string().required('لطفا محل اقامت را وارد کنید'),
  Type_of_tourist_place: yup
    .array()
    .of(yup.number().required())
    .min(1, 'لطفا حداقل یک نوع مکان گردشگری را انتخاب کنید'),
  sortBy: yup.string().required('لطفا نوع مرتب‌سازی را وارد کنید'),
  number_Of_Adult_Passengers: yup
    .string()
    .matches(/^\d+$/, 'تعداد مسافران بزرگسال باید عدد باشد')
    .required('لطفا تعداد مسافران بزرگسال را وارد کنید'),
  number_Of_Child_Passengers: yup
    .string()
    .matches(/^\d+$/, 'تعداد مسافران کودک باید عدد باشد')
    .required('لطفا تعداد مسافران کودک را وارد کنید'),
  number_Of_Minor_Passengers: yup
    .string()
    .matches(/^\d+$/, 'تعداد مسافران خردسال باید عدد باشد')
    .required('لطفا تعداد مسافران خردسال را وارد کنید'),
  Type_Of_Passengers: yup
    .array()
    .of(yup.number().required())
    .min(1, 'لطفا حداقل یک نوع مسافر را انتخاب کنید'),
});
