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
