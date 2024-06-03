import fetchData from "./services/api.js";

// create a function that will initiate the web page
async function init(){
    const data = await fetchData();
    console.log(data);
}

init();