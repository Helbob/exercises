const data = "https://petlatkea.dk/2021/hogwarts/students.json";
let list;

function init() {
  console.log("ready");
  loadJSON();
}

async function loadJSON(data) {
  const response = await fetch(data);
  list = await response.json();

  prepareObjects(list);
}

//idk
