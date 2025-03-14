import { StartFunc as showInTable } from "./showInTable.js";
import { StartFunc as fromTxtFile } from "./ShowInTable/fromTxtFile.js";
import { StartFunc as showAsHtmlTable } from "./showAsHtmlTable.js";
import { read, writeFileXLSX, utils } from "https://cdn.sheetjs.com/xlsx-0.18.7/package/xlsx.mjs";

let StartFunc = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        reader.onload = (e) => {
            var data = e.target.result;
            var workbook = XLSX.read(data, {
                type: 'binary'
            });

            workbook.SheetNames.forEach(function (sheetName) {
                // Here is your object
                var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                // var json_object = JSON.stringify(XL_row_object);
                // console.log(JSON.parse(json_object));
                showInTable({ inData: XL_row_object });
                // jQuery('#xlx_json').val(json_object);
            });
        };

        reader.readAsBinaryString(file);
    };
};

const LocalFuncForXlsx = ({ inData }) => {
    var workbook = XLSX.read(inData, {
        type: 'binary'
    });
    workbook.SheetNames.forEach(function (sheetName) {
        // Here is your object
        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        var json_object = JSON.stringify(XL_row_object);
        console.log(JSON.parse(json_object));
        // jQuery('#xlx_json').val(json_object);
    })
    // console.log("workbook : ", workbook);
};

const csvToDataTable = ({ inData }) => {
    const lines = inData.split(/\r\n|\n/);
    let [headings, ...entries] = lines;
    headings = headings.split(',');
    let headingsArray = [];

    headingsArray = headings.map(element => {
        return {
            field: element,
            title: element
        };
    });

    const objs = [];

    entries.map(entry => {
        let obj = entry.split(',');
        objs.push(Object.fromEntries(headings.map((head, i) => [head, obj[i]])));
    });

    return {
        columns: headingsArray,
        data: objs
    };
};

export { StartFunc };