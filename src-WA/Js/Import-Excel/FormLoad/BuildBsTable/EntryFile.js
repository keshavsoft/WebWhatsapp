import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";
import optionsJson from './options.json' with {type: 'json'};

const StartFunc = () => {
    var $table = $('#table');

    ForColumns({ inColumns: optionsJson.columns });

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };