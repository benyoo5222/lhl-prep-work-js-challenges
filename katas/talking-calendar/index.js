const talkingCalendar = function (date) {
  // Your code here
  let finalStringDate = "";
  const dateObj = new Date(date);

  const stringDate = dateObj.toLocaleDateString("en", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });

  const removedCommaStringDate = stringDate.replace(",", "");

  const arrayOfDateInfo = removedCommaStringDate.split(" ");

  finalStringDate += arrayOfDateInfo[0];

  switch (arrayOfDateInfo[1]) {
    case "1":
      finalStringDate += ` ${arrayOfDateInfo[1]}st,`;
      break;
    case "2":
      finalStringDate += ` ${arrayOfDateInfo[1]}nd,`;
      break;
    case "3":
      finalStringDate += ` ${arrayOfDateInfo[1]}rd,`;
      break;
    default:
      finalStringDate += ` ${arrayOfDateInfo[1]}th,`;
  }

  finalStringDate += ` ${arrayOfDateInfo[2]}`;

  return finalStringDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
