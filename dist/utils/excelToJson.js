import * as xlsx from "xlsx";
import fs from "fs";
export class FileUtils {
    static async excelToJson(sheetNameString) {
        try {
            const workbook = xlsx.readFile(sheetNameString);
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = xlsx.utils.sheet_to_json(sheet);
            fs.writeFileSync(`${sheetNameString}.json`, JSON.stringify(jsonData));
            return jsonData;
        }
        catch (err) {
            console.error(`Erro ao criar json da planilha: ${sheetNameString}, erro: ${err}`);
            if (err instanceof Error) {
                throw new Error(`${err}`);
            }
        }
    }
}
// export async function excelToJson(sheetNameString: string) {
//   try {
//     const workbook = xlsx.readFile(sheetNameString);
//     const sheetName = workbook.SheetNames[0];
//     const sheet = workbook.Sheets[sheetName];
//     const jsonData = xlsx.utils.sheet_to_json(sheet);
//     fs.writeFileSync(`${sheetNameString}.json`, JSON.stringify(jsonData));
//     return jsonData;
//   } catch (err) {
//     console.error(
//       `Erro ao criar json da planilha: ${sheetNameString}, erro: ${err}`
//     );
//     if (err instanceof Error) {
//       throw new Error(`${err}`);
//     }
//   }
// }
