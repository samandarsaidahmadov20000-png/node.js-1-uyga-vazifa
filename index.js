import { log, readLogs } from "./logger.js";

log("APP STARTED");

setTimeout(() => {
  log("FIRST TIMEOUT EVENT");
}, 2000);

let count = 0;
const interval = setInterval(() => {
  count++;
  log("INTERVAL TICK");

  if (count === 3) {
    clearInterval(interval);
  }
}, 1000);

setTimeout(() => {
  console.log("\n📄 BARCHA LOGLAR:");
  console.log("----------------");
  console.log(readLogs());
  console.log("----------------");
}, 6000);
