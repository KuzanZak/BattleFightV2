async function waitingForResponse() {
    try {
        const response = await fetch("https://akabab.github.io/superhero-api/api/all.json");
        const fighters = await response.json();
        getImage(fighters)
    }
        catch(error) {
        console.error("Don't found in api " + error);
    }
}
waitingForResponse();

// function getName(array){
//     const poolChamp = document.getElementById("pool");
//     let string = "";
//     array.forEach(fighter => {
//         string += `<dt class="name-fighter">${fighter.name}</dt><dd><img class="image-figther" src="${fighter.images.md}"></dd>`;
//     });
//     poolChamp.innerHTML = string;     
// };

function getImage(array){
    const poolChamp = document.getElementById("pool");
    let string = "";
    array.forEach(fighter => {
        string += `<li><img class="image-figther" src="${fighter.images.md}"></li>`;
    });
    poolChamp.innerHTML = string;     
};

function getStats(array){
    array.forEach(fighter => {
        console.log(fighter.powerstats)
    })     
};