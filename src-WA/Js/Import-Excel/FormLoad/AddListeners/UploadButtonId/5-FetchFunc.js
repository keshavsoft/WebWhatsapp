import UrlJson from "../../../Config.json" with { type: "json" };
import CommonConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async ({ inBodyData }) => {
    let jVarLocalroutePath = CommonConfigJson.StartUrl;
    let jVarLocalTableName = CommonConfigJson.TableName;
    
    let jVarLocalBodyData = inBodyData;
    let jVarLocalFetchUrl = `/${jVarLocalroutePath}/${jVarLocalTableName}/${UrlJson.EndPoint}`;

    let jVarLocalFetchHeaderObject = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    
    return response;
};

export { StartFunc };