const $table = $('#table');

const StartFunc = () => {
  //  const jVarLocalDataFromBootStrapTable = jFLocalGetColumnsDataOnly();
  const jVarLocalDataFromBootStrapTable = $table.bootstrapTable('getSelections');

  console.log("aaaaaaa: ", jVarLocalDataFromBootStrapTable);

  return jVarLocalDataFromBootStrapTable.slice(0, 2);
};

const jFLocalGetColumnsDataOnly = () => {
  const jVarLocalDataFromBootStrapTable = $table.bootstrapTable('getData');
  const jVarLocalTableOptions = $table.bootstrapTable('getOptions');
  const jVarLocalColumnsArray = jVarLocalTableOptions.columns[0].map(element => element.field);
  jVarLocalColumnsArray.shift();

  const jVarLocalColumnsDataArray = jVarLocalDataFromBootStrapTable.map(element => {
    return jVarLocalColumnsArray.reduce((a, b) => (a[b] = element[b], a), {});
  });

  return jVarLocalColumnsDataArray;
};

export { StartFunc };