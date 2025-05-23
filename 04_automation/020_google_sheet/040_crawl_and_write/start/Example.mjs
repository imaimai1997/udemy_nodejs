import { GoogleSpreadsheet } from 'google-spreadsheet';
import env from 'dotenv';
env.config();
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const secrets = require('../../../google_secrets.json');
import {getEmployeeByScraping} from "./scraping.mjs";

(async () => {



  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: secrets.client_email,
    private_key: secrets.private_key,
  });

  await doc.loadInfo();

  const employees = await getEmployeeByScraping();

  // await doc.addSheet({title:'scraping',headerValues:['name','company']});
  const scrapingSheet = doc.sheetsByTitle['scraping'];
  const rows = await scrapingSheet.addRows(employees);

  rows.forEach(async(row) =>{
    row.save();
  })


})();
