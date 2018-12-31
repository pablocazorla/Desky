window.addEventListener('keypress',function (e) {
  console.log(e.keyCode);
  switch(e.keyCode){
    case 102: // F
      // Flip selected
      if(currentSelected){
        currentSelected.flip();
      }
      break;
    default:

  }
});