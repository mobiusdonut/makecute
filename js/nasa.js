const redraw = () => {
    var canvas = document.getElementById("nasacanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grd.addColorStop(0, "#032275");
    grd.addColorStop(1, "#4c99d2");
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 10, 0, 2 * Math.PI);
    ctx.fill();
    var img = new Image();
    img.src = 'https://github.com/mobiusdonut/makecute/raw/master/img/nasa/backred.png'; 
    img.onload = function() {
        ctx.drawImage(img, 0, 0, 500, 500);
        ctx.font = "135px Priamos";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("NASA", canvas.width/2, canvas.height/2 + 135/4);
        var img2 = new Image();
        img2.src = 'https://github.com/mobiusdonut/makecute/raw/master/img/nasa/frontred.png'; 
        img2.onload = function() {
            ctx.drawImage(img2, 0, 0, 500, 500);
        }; 
    };  
}