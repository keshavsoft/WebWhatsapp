let StartFunc = ({ inData }) => {
    let jVarLocalData = inData;
    console.log("jVarLocalData : ", jVarLocalData);

    var $table = $('#table')
    $table.bootstrapTable("load", jVarLocalData);
};

export { StartFunc };