import Data from "./data/Message.js";

const dataArray = Data.split(" ");

const cleanList = new Set(dataArray);

const animalsList = [...cleanList];

console.log(animalsList);

let aguilaCount = 0;
let ardillaCount = 0;
let buhoCount = 0;
let caballoCount = 0;
let cabraCount = 0;
let canarioCount = 0;
let cebraCount = 0;
let cerdoCount = 0;
let colibriCount = 0;
let elefanteCount = 0;
let flamencoCount = 0;
let gallinaCount = 0;
let gansoCount = 0;
let gatoCount = 0;
let halconCount = 0;
let hipopotamoCount = 0;
let jaguarCount = 0;
let jirafaCount = 0;
let leonCount = 0;
let leopardoCount = 0;
let loboCount = 0;
let loroCount = 0;
let mapacheCount = 0;
let murcielagoCount = 0;
let osoCount = 0;
let ovejaCount = 0;
let palomaCount = 0;
let patoCount = 0;
let pavoCount = 0;
let perroCount = 0;
let pinguinoCount = 0;
let pumaCount = 0;
let rinoceronteCount = 0;
let tigreCount = 0;
let toroCount = 0;
let tucanCount = 0;
let vacaCount = 0;
let zorroCount = 0;

for (const word of dataArray) {
  if (word === "aguila") {
    aguilaCount++;
  } else if (word === "ardilla") {
    ardillaCount++;
  } else if (word === "buho") {
    buhoCount++;
  } else if (word === "caballo") {
    caballoCount++;
  } else if (word === "cabra") {
    cabraCount++;
  } else if (word === "canario") {
    canarioCount++;
  } else if (word === "cebra") {
    cebraCount++;
  } else if (word === "cerdo") {
    cerdoCount++;
  } else if (word === "colibri") {
    colibriCount++;
  } else if (word === "elefante") {
    elefanteCount++;
  } else if (word === "flamenco") {
    flamencoCount++;
  } else if (word === "gallina") {
    gallinaCount++;
  } else if (word === "ganso") {
    gansoCount++;
  } else if (word === "gato") {
    gatoCount++;
  } else if (word === "halcon") {
    halconCount++;
  } else if (word === "hipopotamo") {
    hipopotamoCount++;
  } else if (word === "jaguar") {
    jaguarCount++;
  } else if (word === "jirafa") {
    jirafaCount++;
  } else if (word === "leon") {
    leonCount++;
  } else if (word === "leopardo") {
    leopardoCount++;
  } else if (word === "lobo") {
    loboCount++;
  } else if (word === "loro") {
    loroCount++;
  } else if (word === "mapache") {
    mapacheCount++;
  } else if (word === "murcielago") {
    murcielagoCount++;
  } else if (word === "oso") {
    osoCount++;
  } else if (word === "oveja") {
    ovejaCount++;
  } else if (word === "paloma") {
    palomaCount++;
  } else if (word === "pato") {
    patoCount++;
  } else if (word === "pavo") {
    pavoCount++;
  } else if (word === "perro") {
    perroCount++;
  } else if (word === "pinguino") {
    pinguinoCount++;
  } else if (word === "puma") {
    pumaCount++;
  } else if (word === "rinoceronte") {
    rinoceronteCount++;
  } else if (word === "tigre") {
    tigreCount++;
  } else if (word === "toro") {
    toroCount++;
  } else if (word === "tucan") {
    tucanCount++;
  } else if (word === "vaca") {
    vacaCount++;
  } else {
    zorroCount++;
  }
}

const finalCount = `murcielago${murcielagoCount}leon${leonCount}jirafa${jirafaCount}cebra${cebraCount}elefante${elefanteCount}rinoceronte${rinoceronteCount}hipopotamo${hipopotamoCount}ardilla${ardillaCount}mapache${mapacheCount}zorro${zorroCount}lobo${loboCount}oso${osoCount}puma${pumaCount}jaguar${jaguarCount}tigre${tigreCount}leopardo${leopardoCount}gato${gatoCount}perro${perroCount}caballo${caballoCount}vaca${vacaCount}toro${toroCount}cerdo${cerdoCount}oveja${ovejaCount}cabra${cabraCount}gallina${gallinaCount}pato${patoCount}ganso${gansoCount}pavo${pavoCount}paloma${palomaCount}halcon${halconCount}aguila${aguilaCount}buho${buhoCount}colibri${colibriCount}canario${canarioCount}loro${loroCount}tucan${tucanCount}pinguino${pinguinoCount}flamenco${flamencoCount}`;

console.log(finalCount);
