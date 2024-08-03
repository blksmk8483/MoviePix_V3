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

// Define a function named time_convert with parameter num
export const timeConvert = function (num) {
  // Calculate the number of hours by dividing num by 60 and rounding down
  const hours = Math.floor(num / 60);

  // Calculate the remaining minutes by taking the remainder when dividing num by 60
  const minutes = num % 60;

  // Return the result as a string in the format "hours:minutes"
  return minutes < 1 ? `${hours}hrs` : `${hours}h ${minutes}m`;
};

// export const formatNumberWithCommas = function (number) {
//   return `$${number.toLocaleString()}`;
// };

export const formatNumberWithCommas = function (number) {
  // Get the user's preferred language setting
  const userLocale = navigator.language || "en-US"; // Fallback to 'en-US' if not available

  // Format the number using the user's locale
  return `$${number.toLocaleString(userLocale)}`;
};

// export const convertLanguage = function (language) {
//   if ((language = "en")) return "English";
// };

export const convertLanguage = function (language) {
  const languageMap = {
    en: "English",
    es: "Spanish",
    fr: "French",
    de: "German",
    it: "Italian",
  };

  return languageMap[language] || "Unknown Language";
};
