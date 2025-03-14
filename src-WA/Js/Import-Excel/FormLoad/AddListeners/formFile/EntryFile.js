import { StartFunc as onChange } from "./onChange.js";

let StartFunc = () => {
  const fileInput = document.getElementById('formFile');

  fileInput.addEventListener('change', onChange);
};

export { StartFunc };