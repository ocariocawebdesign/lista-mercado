/*const marcaPedal = ["Boss", "Digitech", "Mooer", "Ibanez"];

//Array com Objetos
const pedaisGuitarra = [
  {
    Modelo: "DS-1",
    Marca: marcaPedal[0],
    Ano: "1978",
    MadeIn: "Japão",
    Tipo: "Distorção",
  },

  {
    Modelo: "SD-1",
    Marca: marcaPedal[0],
    Ano: "1980",
    MadeIn: "Japão",
    Tipo: "Overdrive",
  },

  {
    Modelo: "Super Phaser",
    Marca: marcaPedal[1],
    Ano: "1992",
    MadeIn: "Japão",
    Tipo: "Modulação",
  },

  {
    Modelo: "Tube Screamer",
    Marca: marcaPedal[3],
    Ano: "1976",
    MadeIn: "Japão",
    Tipo: "Overdrive",
  },
];

//Usando o forEach
marcaPedal.forEach((item, index, array) => {
  console.table(`Item: ${item} e o Array: ${array}`);
  console.log();
  //console.table(array);
});

//Usando o for para percorrer a array mais usual com uma array simples
//for (let index = 0; index < marcaPedal.length; index++)
 // console.log(`${index}. ${marcaPedal[index]}`);

//Usando o forin para percorrer a array com objetos
for (let pedal in pedaisGuitarra) {
  console.log(pedaisGuitarra[pedal].Modelo);
}


*/

//const resultado = document.querySelector("#resultado");
//const marcas = document.querySelector("#marcas");
//console.log(marcas);

/*marcasArray = Array.from(marcas);
//console.log(marcasArray);

marcasArray.forEach((item, index, array) =>{

    console.log(item, index, array)
}) 
*/
/*button01.addEventListener("click", ()=>{

  let marcaEscolhida = document.querySelector("#marcas").value
  console.log(marcaEscolhida);
  resultado.innerHTML = `<p>Você escolheu a marca: ${marcaEscolhida}.</hp>`
})*/

const listaTarefas = document.querySelector("#listaTarefas");
const inputTarefas = document.querySelector("#inputTarefa");
const button01 = document.querySelector("#button01");
const button02 = document.querySelector("#button02");
const resultado = document.querySelector("#resultado");



let tarefas = JSON.parse(localStorage.getItem("lista_tarefas")) || [];

function renderTarefas() {
  listaTarefas.innerHTML = "";
  for (tarefa of tarefas) {
    let tarefaElement = document.createElement("li");
    let tarefaTexto = document.createTextNode(tarefa);

    let linkElement = document.createElement("a");
    let linkTexto = document.createTextNode(" - Excluir");
    linkElement.setAttribute("href", "#");

    let posicao = tarefas.indexOf(tarefa);
    linkElement.setAttribute("onclick", "deleteTarefas(" + posicao + ")");

    linkElement.appendChild(linkTexto);

    tarefaElement.appendChild(tarefaTexto);
    tarefaElement.appendChild(linkElement);

    listaTarefas.appendChild(tarefaElement);
  }
}
renderTarefas();

function addTarefas() {
  let tarefaTexto = inputTarefas.value;
  tarefas.push(tarefaTexto);
  inputTarefas.value = "";
  renderTarefas();
  salvarStorage();
}

button01.onclick = addTarefas;

function deleteTarefas(posicao) {
  tarefas.splice(posicao, 1);
  renderTarefas();
  salvarStorage();
}


function salvarStorage() {
  localStorage.setItem("lista_tarefas", JSON.stringify(tarefas));
}

