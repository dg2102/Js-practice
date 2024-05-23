let month = document.querySelector("#month");
let days = document.querySelector("#days");
let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let seconds = document.querySelector("#seconds");
let monthcountdown,hoursCount,second,secondscount;
let daysCount;

//function for countdown
const CountDown = () => {
  const date = new Date(Date.now());
  const local = date.toLocaleString();
  console.log(local)


  const year = Number(local.slice(6, 10)); // Extracting the year from the date string
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  
  
//month
  monthcountdown =
    String(12 - Number(local.slice(0, 1))).length < 2
      ? `0${12 - Number(local.slice(0, 1))}`
      : `${12 - Number(local.slice(0, 1))}`;

  month.textContent = monthcountdown; 

  //days
  if (monthcountdown === "02") { // If the current month is February
    daysCount = isLeapYear ? "29" : "28";
  }
  else{if (Number(local.slice(0,1) % 2 == 0)) {
    daysCount =  String(31 - Number(local.slice(2, 4))).length < 2
      ? `0${31 - Number(local.slice(2, 4))}`
      : `${31 - Number(local.slice(2, 4))}`;
  } else {
    daysCount =  String(31 - Number(local.slice(2, 4))).length < 2
      ? `0${30 - Number(local.slice(2, 4))}`
      : `${30 - Number(local.slice(2, 4))}`;
  }}
  days.textContent = daysCount; 

//hours
  local.includes("AM")
    ? (hoursCount =
        String(24 - Number(local.slice(11, 13))).length < 2
          ? `0${24 - Number(local.slice(11, 13))}`
          : `${24 - Number(local.slice(11, 13))}`)
    : (hoursCount =
        String(12 - Number(local.slice(11, 13))).length < 2
          ? `0${12 - Number(local.slice(11, 13))}`
          : `${12 - Number(local.slice(11, 13))}`); 
          console.log(hoursCount)
          hour.textContent=hoursCount;

//min
  let mincount =String(60 - Number(local.slice(14, 16))).length < 2
      ? `0${60 - Number(local.slice(14, 16))}`
      : `${60 - Number(local.slice(14, 16))}`;

  min.textContent = `\ ${mincount}`; 

  //seconds
   second = Number(local.slice(17, 19));
if (second === 0) {
  secondscount = "00";
} else {
  secondscount = String(60 - second).length < 2
    ? `0${60 - second}`
    : `${60 - second}`;
}seconds.textContent = `${secondscount}`; 
};
setInterval(() => {
  CountDown();
}, 1000);
