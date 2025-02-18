let StartFunc = ({ inUsersAsArray }) => {
    console.log("inUsersAsArray : ", inUsersAsArray);

    inUsersAsArray.forEach(element => {
        jFInsertCard({ inCardData: element });
    });
};

const jFInsertCard = ({ inCardData }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#ToShowContainer");
        const template = document.querySelector("#TemplateForCard");

        const clone2 = template.content.cloneNode(true);

        tbody.appendChild(clone2);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

export { StartFunc };