$(document).ready(() => {
    var canvas = $("#nasacanvas")[0];
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var message = "NASA";
    var grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grd.addColorStop(0, "#0b3d91");
    grd.addColorStop(1, "#0b3d91");
    var textcolor = "white";
    
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 10, 0, 2 * Math.PI);
    ctx.fill();
    var img = new Image();
    var img2 = new Image();
    var img3 = new Image();
    img.src = 'https://github.com/mobiusdonut/makecute/raw/master/img/nasa/backred.png';
    img.onload = () => {
        ctx.drawImage(img, 0, 0, 500, 500);
        ctx.font = "135px Priamos";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(message, canvas.width/2, canvas.height/2 + 135/4);   
        img2.src = 'https://github.com/mobiusdonut/makecute/raw/master/img/nasa/frontred.png'; 
        img2.onload = () => {
            ctx.drawImage(img2, 0, 0, 500, 500);           
            img3.src = 'https://github.com/mobiusdonut/makecute/raw/master/img/nasa/stars.png'; 
            img3.onload = () => {
                ctx.drawImage(img3, 0, 0, 500, 500);
            };
        }; 
    };

    const redraw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.drawImage(img, 0, 0, 500, 500);
        ctx.font = "135px Priamos";
        var fontsize=135;
        do{
            fontsize--;
            ctx.font=fontsize+"px Priamos";
        } while (ctx.measureText(message).width>canvas.width - 50)
        ctx.fillStyle = textcolor;
        ctx.textAlign = "center";
        ctx.fillText(message, canvas.width/2, canvas.height/2 + fontsize/4, 450);
        ctx.drawImage(img2, 0, 0, 500, 500);
        ctx.drawImage(img3, 0, 0, 500, 500);
	};

    $("#text").keyup((event) => {
        message = event.target.value;
        redraw();
    });

    $("input[name='grd']").change((event) => {
        switch(event.target.value) {
            case "regular blue":
                grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
                grd.addColorStop(0, "#0b3d91");
                grd.addColorStop(1, "#0b3d91");
                textcolor = "white";
                break;
            case "blue but cooler":
                grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
                grd.addColorStop(0, "#032275");
                grd.addColorStop(1, "#4c99d2");
                textcolor = "white";
                break;
            case "gay":
                grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
                grd.addColorStop(0, '#e74c3c');
                grd.addColorStop(1 / 6, '#e74c3c');
                grd.addColorStop(1 / 6, '#e67e22');
                grd.addColorStop(2 / 6, '#e67e22');
                grd.addColorStop(2 / 6, '#f1c40f');
                grd.addColorStop(3 / 6, '#f1c40f');
                grd.addColorStop(3 / 6, '#2ecc71');
                grd.addColorStop(4 / 6, '#2ecc71');
                grd.addColorStop(4 / 6, '#3498db');
                grd.addColorStop(5 / 6, '#3498db');
                grd.addColorStop(5 / 6, '#9b59b6');
                grd.addColorStop(1, '#9b59b6');
                textcolor = "white";
                break;
            case "bi":
                grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
                grd.addColorStop(0, '#e84393');
                grd.addColorStop(1 / 3, '#e84393');
                grd.addColorStop(1 / 3, '#6c5ce7');
                grd.addColorStop(2 / 3, '#6c5ce7');
                grd.addColorStop(2 / 3, '#0984e3');
                grd.addColorStop(1, '#0984e3');
                textcolor = "white";
                break;
            case "lesbian":
                grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
                grd.addColorStop(0, '#d62900');
                grd.addColorStop(1 / 5, '#d62900');
                grd.addColorStop(1 / 5, '#ff9b55');
                grd.addColorStop(2 / 5, '#ff9b55');
                grd.addColorStop(2 / 5, '#ffffff');
                grd.addColorStop(3 / 5, '#ffffff');
                grd.addColorStop(3 / 5, '#d461a6');
                grd.addColorStop(4 / 5, '#d461a6');
                grd.addColorStop(4 / 5, '#a50062');
                grd.addColorStop(1, '#a50062');
                textcolor = "black";
                break;
            case "trans":
                grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
                grd.addColorStop(0, '#55cdfc');
                grd.addColorStop(1 / 5, '#55cdfc');
                grd.addColorStop(1 / 5, '#f7a8b8');
                grd.addColorStop(2 / 5, '#f7a8b8');
                grd.addColorStop(2 / 5, '#ffffff');
                grd.addColorStop(3 / 5, '#ffffff');
                grd.addColorStop(3 / 5, '#f7a8b8');
                grd.addColorStop(4 / 5, '#f7a8b8');
                grd.addColorStop(4 / 5, '#55cdfc');
                grd.addColorStop(1, '#55cdfc');
                textcolor = "black";
                break;
        }
        redraw();
    });

    $(".tablinks").click((event) => {
        event.preventDefault();
        $(".tabcontent").hide();
        $(".tablinks").removeClass("active");
        $("#" + event.target.innerHTML.replace(" ", "-")).show();
    });
});