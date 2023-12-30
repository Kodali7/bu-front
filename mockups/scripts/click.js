function handleWhatClick(){
    let t1 = document.getElementById("txt1");
    let t2 = document.getElementById("txt2");
    let t3 = document.getElementById("txt3");
    let t4 = document.getElementById("txt4");
    let t5 = document.getElementById("txt5");
    let x1 = document.getElementById("s4yt-what");
    let x2 = document.getElementById("s4yt-ami");
    let x3 = document.getElementById("s4yt-when");
    let x4 = document.getElementById("s4yt-howdo");
    let x5 = document.getElementById("s4yt-whatare");
    if(t1.style.display === "none"){
        t1.style.display = "block";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        x1.src = "./assets/01_more-info/btn_01-what-is-pressed.png";
        x2.src="./assets/01_more-info/btn_02-am-i-normal.png";
        x3.src="./assets/01_more-info/btn_03-when-can-normal.png";
        x4.src="./assets/01_more-info/btn_04-how-do-i-normal.png";
        x5.src="./assets/01_more-info/btn_05-what-are-normal.png";
    }
    else{
        t1.style.display = "none";
        x1.src="./assets/01_more-info/btn_01-what-is-normal.png";
    }
}

function handleAmiClick(){
    let t1 = document.getElementById("txt1");
    let t2 = document.getElementById("txt2");
    let t3 = document.getElementById("txt3");
    let t4 = document.getElementById("txt4");
    let t5 = document.getElementById("txt5");
    let x1 = document.getElementById("s4yt-what");
    let x2 = document.getElementById("s4yt-ami");
    let x3 = document.getElementById("s4yt-when");
    let x4 = document.getElementById("s4yt-howdo");
    let x5 = document.getElementById("s4yt-whatare");
    if(t2.style.display === "none"){
        t2.style.display = "block";
        t1.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        x2.src = "./assets/01_more-info/btn_02-am-i-pressed.png";
        x1.src="./assets/01_more-info/btn_01-what-is-normal.png";
        x3.src="./assets/01_more-info/btn_03-when-can-normal.png";
        x4.src="./assets/01_more-info/btn_04-how-do-i-normal.png";
        x5.src="./assets/01_more-info/btn_05-what-are-normal.png";
    }
    else{
        t2.style.display = "none";
        x2.src="./assets/01_more-info/btn_02-am-i-normal.png";
    }
}

function handleWhenClick(){
    let t1 = document.getElementById("txt1");
    let t2 = document.getElementById("txt2");
    let t3 = document.getElementById("txt3");
    let t4 = document.getElementById("txt4");
    let t5 = document.getElementById("txt5");
    let x1 = document.getElementById("s4yt-what");
    let x2 = document.getElementById("s4yt-ami");
    let x3 = document.getElementById("s4yt-when");
    let x4 = document.getElementById("s4yt-howdo");
    let x5 = document.getElementById("s4yt-whatare");
    if(t3.style.display === "none"){
        t3.style.display = "block";
        t1.style.display = "none";
        t2.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        x3.src = "./assets/01_more-info/btn_03-when-can-pressed.png";
        x1.src="./assets/01_more-info/btn_01-what-is-normal.png";
        x2.src="./assets/01_more-info/btn_02-am-i-normal.png";
        x4.src="./assets/01_more-info/btn_04-how-do-i-normal.png";
        x5.src="./assets/01_more-info/btn_05-what-are-normal.png";
    }
    else{
        t3.style.display = "none";
        x3.src="./assets/01_more-info/btn_03-when-can-normal.png";
    }
}

function handleHowClick(){
    let t1 = document.getElementById("txt1");
    let t2 = document.getElementById("txt2");
    let t3 = document.getElementById("txt3");
    let t4 = document.getElementById("txt4");
    let t5 = document.getElementById("txt5");
    let x1 = document.getElementById("s4yt-what");
    let x2 = document.getElementById("s4yt-ami");
    let x3 = document.getElementById("s4yt-when");
    let x4 = document.getElementById("s4yt-howdo");
    let x5 = document.getElementById("s4yt-whatare");
    if(t4.style.display === "none"){
        t4.style.display = "block";
        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t5.style.display = "none";
        x4.src = "./assets/01_more-info/btn_04-how-do-i-pressed.png";
        x1.src="./assets/01_more-info/btn_01-what-is-normal.png";
        x2.src="./assets/01_more-info/btn_02-am-i-normal.png";
        x3.src="./assets/01_more-info/btn_03-when-can-normal.png";
        x5.src="./assets/01_more-info/btn_05-what-are-normal.png";
    }
    else{
        t4.style.display = "none";
        x4.src="./assets/01_more-info/btn_04-how-do-i-normal.png";
    }
}

function handleWhatAreClick(){
    let t1 = document.getElementById("txt1");
    let t2 = document.getElementById("txt2");
    let t3 = document.getElementById("txt3");
    let t4 = document.getElementById("txt4");
    let t5 = document.getElementById("txt5");
    let x1 = document.getElementById("s4yt-what");
    let x2 = document.getElementById("s4yt-ami");
    let x3 = document.getElementById("s4yt-when");
    let x4 = document.getElementById("s4yt-howdo");
    let x5 = document.getElementById("s4yt-whatare");
    if(t5.style.display === "none"){
        t5.style.display = "block";
        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        x5.src = "./assets/01_more-info/btn_05-what-are-pressed.png";
        x1.src="./assets/01_more-info/btn_01-what-is-normal.png";
        x2.src="./assets/01_more-info/btn_02-am-i-normal.png";
        x3.src="./assets/01_more-info/btn_03-when-can-normal.png";
        x4.src="./assets/01_more-info/btn_04-how-do-i-normal.png";
    }
    else{
        t5.style.display = "none";
        x5.src="./assets/01_more-info/btn_05-what-are-normal.png";
    }
}