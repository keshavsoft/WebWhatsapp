let StartFunc = async ({ inFromFetch, inBodyData }) => {
    if (inFromFetch.status === 200) {
        const data = await inFromFetch.json();
        jFLocalToURL({ inBodyData })
        return await data;
    } else {
        swal.fire({ icon: "error", title: "Duplicate" })
    }
};

let jFLocalToURL = ({ inBodyData }) => {
    const url = new URL(window.location.href);
    url.searchParams.append('FromSave', true);
    url.searchParams.append('Records', inBodyData.length);
    window.location.href = url.href;
};

export { StartFunc };