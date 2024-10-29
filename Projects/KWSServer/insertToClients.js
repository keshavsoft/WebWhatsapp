import { StartFunc as OnConnection } from "./OnConnection/EntryFile.js";

let StartFunc = ({ inClients, ws, inIpAddress }) => {
  const id = uuidv4();
  const color = Math.floor(Math.random() * 360);
  const Name = "Anonymous";
  const loginDateTime = new Date();
  const metadata = { id, color, Name, loginDateTime };

  inClients.set(ws, metadata);

  OnConnection({ inIpAddress, inUniqUuid: id });
};

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export { StartFunc };
