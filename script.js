darkMode = false;
function toggleDarkMode() {
  const header = document.querySelector('header');
  const body = document.body;
  if(!darkMode){
    console.log('tá on');
    darkMode = true;
    header.style.backgroundColor = "black";
    header.style.color = "white";
    body.style.backgroundColor = "rgb(2, 16, 22)";
  }
  else if(darkMode){
    console.log('tá off');
    darkMode = false;
    header.style.backgroundColor = "rgba(223, 239, 255, 0.6)";
    header.style.color = "black";
    body.style.backgroundColor = "rgb(154, 216, 245)";
  }
}

const grupos = [
  {'nome': 'Répteis', 'desc': 'Os répteis encontrados no museu próprios da região riograndina.', 'especies': [{'nomecient': 'Caretta caretta', 'nome': 'Tartaruga-marinha', 'desc': 'Tartaruga marinha comum na região do litoral sul, mais conhecida por suas aparições na praia do Cassino.', 'image': 'https://lh3.googleusercontent.com/p/AF1QipNiBfOrhBwprTNUPQYqtBs8z3ObpqQWsYbZRTz3=s680-w680-h510', 'width': 300, 'height': 300}]},
  {'nome': 'Mamíferos', 'desc': 'Os mamíferos encontrados no museu próprios da região riograndina.', 'especies': [{'nomecient': 'Otaria flavescens', 'nome': 'Leão-marinho-do-sul', 'desc': 'Esqueleto do Ipirelo, leão marinho figura icônica da cidade do Rio Grande vira exposição como forma de manter viva a sua memória.', 'image': 'https://www.furg.br/arquivos/Noticias/2022/Institucional/26-09-2022-ipirelo1-furg.jpg', 'width': 600, 'height': 300}]},
  {'nome': 'Peixes', 'desc': 'Os peixes encontrados no museu próprios da região riograndina.', 'especies': [{'nomecient': 'Pogonias courbina', 'nome': 'Miragaia', 'desc': 'Peixe de óculos, muito engraçado.', 'image': 'https://media-cdn.tripadvisor.com/media/photo-s/0d/ed/46/ef/cabeca-de-peixe-miraguaia.jpg', 'width': 600, 'height': 300}]}
]
const groupList = document.querySelector('.group-list');
grupos.map(e => {
  const groupItem = document.createElement('li');
  groupItem.innerHTML = e.nome;
  groupItem.id = e.nome;
  groupItem.setAttribute('onclick', 'navGrupos("'+groupItem.id+'")') 
  groupList.appendChild(groupItem);
})

function navGrupos(groupId){
  main = document.querySelector('main');
  group = grupos.find(e => e.nome === groupId);
  info = document.createElement('div');
  info.setAttribute('class', 'group-info');
  info.innerHTML = "<button class='close-button'>X</button><h1 class='group-title'>"+group.nome+"</h1><p class='group-desc'>"+group.desc+"</p>";
  group.especies.map(e => {
    info.innerHTML += "<ul class='species-list'><li onclick='showSpecies(\""+e.nome+"\",\""+group.nome+"\")'>"+e.nome+"</li>";
  });
  info.innerHTML += "</ul>";
  main.appendChild(info);
  closeButton = document.querySelectorAll('.close-button');
  console.log(closeButton);
  closeButton.forEach(button => {
    button.addEventListener('click', () => {
      console.log('tá clicando');
      info = document.querySelector('.group-info');
      info.remove();
    })
  });
}

function showSpecies(speciesName, groupName){
  windowsOpen = document.querySelectorAll('.group-info');
  windowsOpen.forEach((window) => {
    window.remove()
  });
  group = grupos.find(e => e.nome == groupName);
  species = group.especies.find(e => e.nome == speciesName);
  console.log(species.image);
  info = document.createElement('div');
  info.setAttribute('class', 'species-info');
  info.innerHTML = "<button class='close-button-species'>X</button><div class='rotulo'><div><h1 class='species-title'>"+species.nome+"</h1><p class='cient-name'>Nome científico: "+species.nomecient+"</p><p class='species-desc'>"+species.desc+"</p></div><img class='species-image' src="+species.image+" width='"+species.width+"' height='"+species.height+"'></div>";
  main.appendChild(info);
  closeButton = document.querySelectorAll('.close-button-species');
  console.log(closeButton);
  closeButton.forEach(button => {
    button.addEventListener('click', () => {
      console.log('tá clicando');
      info = document.querySelector('.species-info');
      info.remove();
    })
  });
}

