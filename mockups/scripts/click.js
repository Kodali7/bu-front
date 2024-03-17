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
    if(x1.classList.contains('active')){
        return;
    }
    x1.classList.remove('active');
    x2.classList.remove('active');
    x3.classList.remove('active');
    x4.classList.remove('active');
    x5.classList.remove('active');
    if(x1.classList.contains('active') === false){
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
        x1.classList.add('active');
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
    if(x2.classList.contains('active')){
        return;
    }
    x1.classList.remove('active');
    x2.classList.remove('active');
    x3.classList.remove('active');
    x4.classList.remove('active');
    x5.classList.remove('active');
    if(x2.classList.contains('active') === false){
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
        x2.classList.add('active');
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
    if(x3.classList.contains('active')){
        return;
    }
    x1.classList.remove('active');
    x2.classList.remove('active');
    x3.classList.remove('active');
    x4.classList.remove('active');
    x5.classList.remove('active');
    if(x3.classList.contains('active') === false){
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
        x3.classList.add('active');
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
    if(x4.classList.contains('active')){
        return;
    }
    x1.classList.remove('active');
    x2.classList.remove('active');
    x3.classList.remove('active');
    x4.classList.remove('active');
    x5.classList.remove('active');
    if(x4.classList.contains('active') === false){
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
        x4.classList.add('active');
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
    if(x5.classList.contains('active')){
        return;
    }
    x1.classList.remove('active');
    x2.classList.remove('active');
    x3.classList.remove('active');
    x4.classList.remove('active');
    x5.classList.remove('active');
    if(x5.classList.contains('active') === false){
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
        x5.classList.add('active');
    }
}

function handleMenuClick(){
    let x = document.getElementById("listbar1");
    x.classList.toggle("show-menu");
}