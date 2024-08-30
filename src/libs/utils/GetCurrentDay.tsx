const farsiMonths = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
];

// Getting the current date:
const currentDate = new Date();

// Formatting the day in Farsi:
const day = new Intl.DateTimeFormat('fa-IR', { day: 'numeric' }).format(currentDate);

// Getting the month index (0-11) and map it to the corresponding Farsi month name:
const month = farsiMonths[currentDate.getMonth()];

// Combining the word: "امروز" with the day and month:
export const formattedDate = `امروز ${day} ${month}`;
