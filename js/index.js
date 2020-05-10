var data = {
    nasa: "nasa pfp with customizable background and text"
}

const info = (pfp) => {
    document.getElementById("infoimg").src = "img/" + pfp + "info.png"
    document.getElementById("infotitle").innerHTML = pfp;
    document.getElementById("infop").innerHTML = data[pfp];
    document.getElementById("infolink").href = pfp;
}