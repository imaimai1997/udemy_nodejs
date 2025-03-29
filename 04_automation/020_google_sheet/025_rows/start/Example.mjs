import { GoogleSpreadsheet } from "google-spreadsheet";
import env from 'dotenv';
env.config();
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const secrets = require('../../../google_secrets.json');

(async () => {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
        client_email: secrets.client_email,
        private_key: secrets.private_key
    });
    
    await doc.loadInfo();

    // await doc.addSheet({title:'persons',headerValues:['name','age','gender']});
    const personSheet  = doc.sheetsByTitle['persons'];
    const rows = await personSheet.addRows([
        {
        name:'Tom',
        age:18,
        gender:'M'
    },
    { name:'Hanako',
        age:28,
        gender:'F'

    },
    { name:'John',
        age:25,
        gender:'M'

    },
    

    ]);
    // for (const row of rows){
    // await row.save();
    // }
    rows.forEach(async (row)=>{
       await row.save()
    });
})();