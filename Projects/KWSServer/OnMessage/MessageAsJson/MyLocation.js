
//import { PostFunc as GpsLocations } from "../../../../binV2/GpsLocations/Create/repos/postFuncs/EntryFile.js";

let StartFunc = ({ inDataAsJson, inws, inClients }) => {
    let LocalDataAsJson = inDataAsJson;
    let LocalChangedObject = inClients.get(inws);

    LocalChangedObject.latitude = LocalDataAsJson.latitude;
    LocalChangedObject.longitude = LocalDataAsJson.longitude;

    inClients.set(inws, LocalChangedObject);
    console.log("LocalDataAsJson : ", LocalDataAsJson);

    // jFLocalWriteToData({
    //     inLatitude: LocalDataAsJson.latitude,
    //     inLongitude: LocalDataAsJson.longitude
    // }).then();
};

let jFLocalWriteToData = async ({ inLatitude, inLongitude }) => {
    let jVarFromSave = await GpsLocation({ inLatitude, inLongitude });
    console.log("jVarFromSave : ", jVarFromSave);

};

export { StartFunc };