const hadithtext = document.getElementById("hadith-text");
const hadithnumber = document.getElementById("hadith-number");
const sahihselector = document.getElementById("sahih-selector");
const appwindow = document.querySelector(".hadith-app");

async function fetchData(){
    try{
        //Get Selected Sahih
        let selectedIndex = sahihselector.selectedIndex;
        let selectedoption = sahihselector.options[selectedIndex];
        let selectedsahih = selectedoption.value;
        
        //Fetch Data
        const response = await fetch(`https://random-hadith-generator.vercel.app/${selectedsahih}/`);
        if(!response.ok){
            throw new Error("Error fetching bro!");
        }

        const data = await response.json();
        // console.log(data);
        // console.log(data.data.refno);
        hadithnumber.innerHTML = `${data.data.refno}`;
        let header = data.data.header;
        hadithtext.innerHTML = `${header=="null"?"":header} ${data.data.hadith_english}`;
    } catch(error){
        console.log(error);
    }
}

//Close Button Function
function closeWindow(){
    appwindow.style.display = "none";
    setTimeout(()=>appwindow.style.display = "block", 1000);
}