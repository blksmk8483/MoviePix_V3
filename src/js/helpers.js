import { API_ACCES_TOKEN, TIMEOUT_SEC } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: API_ACCES_TOKEN,
  },
};

export const getJSON = async function (url) {
  try {
    const fetchPromise = fetch(url, OPTIONS);
    const res = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const timeConvert = function (n) {
  // Store the input number of minutes in a variable num
  var num = n;
  // Calculate the total hours by dividing the number of minutes by 60
  var hours = num / 60;
  // Round down the total hours to get the number of full hours
  var rhours = Math.floor(hours);
  // Calculate the remaining minutes after subtracting the full hours from the total hours
  var minutes = (hours - rhours) * 60;
  // Round the remaining minutes to the nearest whole number
  var rminutes = Math.round(minutes);
  // Construct and return a string representing the conversion result
  return rminutes < 1 ? rhours + "hrs " : rhours + "h " + rminutes + "m";
};

export const formatNumberWithCommas = function (number) {
  return `$${number.toLocaleString()}`;
};

export const convertLanguage = function (language) {
  if ((language = "en")) return "English";
};
