darkMode = false;
function toggleDarkMode() {
  console.log('ativei');
  const header = document.querySelector('header');
  console.log(header.style.backgroundColor);
  if(!darkMode){
    console.log('tá on');
    darkMode = true;
    header.style.backgroundColor = "black";
  }
  else if(darkMode){
    console.log('tá off');
    darkMode = false;
    header.style.backgroundColor = "rgba(223, 239, 255, 0.6)";
  }
}