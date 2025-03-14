let StartFunc = ({ inData }) => {
    let jVarLocalData = inData;
    let jVarLocalLines = jVarLocalData.split("\r\n");
    var $table = $('#table');
    let jVarLocalColumnsArray = $table.bootstrapTable('getVisibleColumns')
    let jVarLocalColumnNames = jVarLocalColumnsArray.map(element => {
        return element.field;
    });

    console.log("jVarLocalColumnNames : ", jVarLocalColumnNames);

    let jVarLocalCollection = jVarLocalLines.map(element => {
        let jVarLoopInsideObject = {};
        let jVarLocalCells = element.split("\t");

        jVarLocalCells.forEach((element, LoopIndex) => {

            console.log("LoopIndex : ", LoopIndex, jVarLocalColumnNames[1]);

            jVarLoopInsideObject[jVarLocalColumnNames[LoopIndex]] = element;
        });

        return jVarLoopInsideObject;
    });

    console.log("jVarLocalCollection : ", jVarLocalCollection);

    var $table = $('#table')
    $table.bootstrapTable("load", jVarLocalCollection);
};

export { StartFunc };