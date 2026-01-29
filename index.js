import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const logFilePath = path.join(__dirname, "logs.txt");

function getTimestamp() {
  return new Date().toISOString().replace("Z", "");
}

export function log(message) {
  const line = `${getTimestamp()} ${message}\n`;

  try {
    fs.appendFileSync(logFilePath, line, { encoding: "utf8", flag: "a" });
  } catch (err) {
    console.error("log yozganda xatolikbor:", err.message);
  }
}

export function readLogs() {
  try {
    const data = fs.readFileSync(logFilePath, "utf8");
    return data;
  } catch (err) {
    console.error("Log faylini o‘qib bo‘lmadi:", err.message);
    return "log fayl o'qimayapti";
  }
}

import { log, readLogs } from "./logger.js";

console.log("Dastur ishladi");
log("APP STARTED");

setTimeout(() => {
  log("FIRST TIMEOUT EVENT");
}, 2000);

let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  log("INTERVAL TICK");

  if (counter === 3) {
    clearInterval(intervalId);
  }
}, 1000);

setTimeout(() => {
  const logs = readLogs();
  console.log("\n logs txt mazmuni:");
  console.log("------------------------");
  console.log(logs);
  console.log("------------------------");
}, 6000);
