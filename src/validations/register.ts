import * as Yup from 'yup';

export const RegisterValidationSchema = Yup.object().shape({
  image: Yup.string(),
  firstName: Yup.string().required('نام الزامی است'),
  lastName: Yup.string().required('نام خانوادگی الزامی است'),
  birthDate: Yup.string().required('تاریخ تولد الزامی است'),
  gender: Yup.string().required('جنسیت الزامی است'),
  email: Yup.string().email('ایمیل نامعتبر است').required('ایمیل الزامی است'),
  isTourLeader: Yup.boolean(),
  activityDuration: Yup.number().when('isTourLeader', {
    is: true,
    then: schema => schema.positive('مدت فعالیت باید مثبت باشد').required('مدت فعالیت الزامی است'),
    otherwise: schema => schema.notRequired(),
  }),
  Province: Yup.string().when('isTourLeader', {
    is: true,
    then: schema => schema.required('استان فعالیت الزامی است'),
    otherwise: schema => schema.notRequired(),
  }),
  city: Yup.string().when('isTourLeader', {
    is: true,
    then: schema => schema.required('شهر فعالیت الزامی است'),
    otherwise: schema => schema.notRequired(),
  }),
  specialtyOne: Yup.string().when('isTourLeader', {
    is: true,
    then: schema => schema.required('تخصص اول الزامی است'),
    otherwise: schema => schema.notRequired(),
  }),
  specialtyTwo: Yup.string().when('isTourLeader', {
    is: true,
    then: schema => schema.required('تخصص دوم الزامی است'),
    otherwise: schema => schema.notRequired(),
  }),
  aboutMe: Yup.string().when('isTourLeader', {
    is: true,
    then: schema => schema.required('درباره من الزامی است'),
    otherwise: schema => schema.notRequired(),
  }),
  cardIssueDate: Yup.string().when('isTourLeader', {
    is: true,
    then: schema => schema.required('تاریخ صدور کارت الزامی است'),
    otherwise: schema => schema.notRequired(),
  }),
  cardExpiryDate: Yup.string().when('isTourLeader', {
    is: true,
    then: schema => schema.required('تاریخ انقضای کارت الزامی است'),
    otherwise: schema => schema.notRequired(),
  }),
  national_card_image: Yup.string().when('isTourLeader', {
    is: true,
    then: schema => schema.required(' نصویر کارت الزامی است'),
    otherwise: schema => schema.notRequired(),
  }),
  languages: Yup.array().of(Yup.string()).required('حداقل یک زبان الزامی است'),
});

export default RegisterValidationSchema;
