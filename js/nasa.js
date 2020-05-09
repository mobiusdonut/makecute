$(document).ready(() => {
    var canvas = $("#nasacanvas")[0];
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var message = "NASA";
    var grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grd.addColorStop(0, "#032275");
    grd.addColorStop(1, "#4c99d2");
    
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 10, 0, 2 * Math.PI);
    ctx.fill();
    var img = new Image();
    var img2 = new Image();
    var img3 = new Image();
    img.src = 'https://github.com/mobiusdonut/makecute/raw/master/img/nasa/backred.png';
    img.crossOrigin = "anonymous";
    img.onload = () => {
        ctx.drawImage(img, 0, 0, 500, 500);
        ctx.font = "135px Priamos";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(message, canvas.width/2, canvas.height/2 + 135/4);  
        img2.crossOrigin = "anonymous"; 
        img2.src = 'https://github.com/mobiusdonut/makecute/raw/master/img/nasa/frontred.png'; 
        img2.onload = () => {
            ctx.drawImage(img2, 0, 0, 500, 500); 
            img3.crossOrigin = "anonymous";          
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
        ctx.fillStyle = "white";
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
                break;
            case "blue but cooler":
                grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
                grd.addColorStop(0, "#032275");
                grd.addColorStop(1, "#4c99d2");
                break;
            case "gay":
                grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
                grd.addColorStop(0, 'red');
                grd.addColorStop(1 / 6, 'orange');
                grd.addColorStop(2 / 6, 'yellow');
                grd.addColorStop(3 / 6, 'green');
                grd.addColorStop(4 / 6, 'blue');
                grd.addColorStop(5 / 6, 'indigo');
                grd.addColorStop(1, 'violet');
                break;
        }
        redraw();
    })

    $("#download").click(() => {
        event.preventDefault();
        var link = document.createElement('a');
        link.download = 'filename.png';
        link.href = document.getElementById('nasacanvas').toDataURL()
        link.click();
    })
});