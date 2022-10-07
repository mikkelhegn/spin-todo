function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function drag(target) {
    target.ondragstart = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
        document.getElementById("donecol").classList.add("hint");
    };

    target.ondragend = () => {
        document.getElementById("donecol").classList.remove("hint");
    };

    target.ondragover = (ev) => { ev.preventDefault(); };

    target.ondrop = async (ev) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        fetch('../api').then(response => response.text()).then(body => { console.debug(body); });
        await sleep(1000);
        document.getElementById("todocol").appendChild(document.getElementById(data));
    };
}