// ===============================
// MotivaFlow
// Premium SaaS JavaScript
// ===============================

const quoteElement = document.getElementById("quote");

const generateBtn = document.getElementById("generateBtn");

const bottomGenerate = document.getElementById("bottomGenerate");

const copyBtn = document.getElementById("copyBtn");

const favoriteBtn = document.getElementById("favoriteBtn");

const shareBtn = document.getElementById("shareBtn");

const themeBtn = document.getElementById("themeBtn");

const viewedElement = document.getElementById("viewCount");

const favoriteElement = document.getElementById("favoriteCount");

const streakElement = document.getElementById("streak");

let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

let viewed =
Number(localStorage.getItem("viewed")) || 0;

let streak =
Number(localStorage.getItem("streak")) || 1;

favoriteElement.textContent = favorites.length;

viewedElement.textContent = viewed;

streakElement.textContent = streak;

// ===============================
// Toast Notification
// ===============================

function toast(message){

    const div=document.createElement("div");

    div.innerText=message;

    div.style.position="fixed";

    div.style.bottom="30px";

    div.style.right="30px";

    div.style.padding="14px 22px";

    div.style.borderRadius="10px";

    div.style.background="#6C63FF";

    div.style.color="white";

    div.style.fontWeight="600";

    div.style.zIndex="9999";

    div.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

    document.body.appendChild(div);

    setTimeout(()=>{

        div.remove();

    },2000);

}

// ===============================
// Fetch Quote
// ===============================

async function loadQuote(){

    try{

        generateBtn.disabled=true;

        bottomGenerate.disabled=true;

        quoteElement.classList.remove("fade");

        const response=await fetch("/api/quote");

        const data=await response.json();

        viewed++;

        localStorage.setItem("viewed",viewed);

        viewedElement.textContent=viewed;

        setTimeout(()=>{

            quoteElement.innerHTML=`"${data.quote}"`;

            quoteElement.classList.add("fade");

        },150);

    }

    catch(error){

        quoteElement.innerHTML="Unable to connect to Java server.";

    }

    finally{

        generateBtn.disabled=false;

        bottomGenerate.disabled=false;

    }

}

// ===============================
// Copy Quote
// ===============================

copyBtn.onclick=()=>{

    navigator.clipboard.writeText(quoteElement.innerText);

    toast("Quote copied.");

}

// ===============================
// Favorite Quote
// ===============================

favoriteBtn.onclick=()=>{

    const quote=quoteElement.innerText;

    if(!favorites.includes(quote)){

        favorites.push(quote);

        localStorage.setItem(

            "favorites",

            JSON.stringify(favorites)

        );

        favoriteElement.textContent=favorites.length;

        toast("Added to favorites.");

    }

    else{

        toast("Already in favorites.");

    }

}

// ===============================
// Share Quote
// ===============================

shareBtn.onclick=async()=>{

    const quote=quoteElement.innerText;

    if(navigator.share){

        navigator.share({

            title:"MotivaFlow",

            text:quote

        });

    }

    else{

        navigator.clipboard.writeText(quote);

        toast("Copied for sharing.");

    }

}

// ===============================
// Theme Toggle
// ===============================

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

}

themeBtn.onclick=()=>{

    document.body.classList.toggle("dark");

    localStorage.setItem(

        "theme",

        document.body.classList.contains("dark")

        ?"dark":"light"

    );

}

// ===============================
// Buttons
// ===============================

generateBtn.onclick=loadQuote;

bottomGenerate.onclick=loadQuote;

// ===============================
// Keyboard Shortcuts
// ===============================

document.addEventListener("keydown",(event)=>{

    if(event.code==="Space"){

        event.preventDefault();

        loadQuote();

    }

    if(event.key==="c"){

        copyBtn.click();

    }

    if(event.key==="f"){

        favoriteBtn.click();

    }

});

// ===============================
// First Quote
// ===============================

loadQuote();
