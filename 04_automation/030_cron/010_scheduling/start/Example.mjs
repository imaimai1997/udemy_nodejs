import cron from "node-cron";
import { addEmployeesToGS } from "./google-sheet.mjs"; 

cron.schedule("54 14 * * *", () =>{
  addEmployeesToGS();
});