// i = Height , j = Width

const i = document.querySelector('#inputHeight');
const j = document.querySelector('#inputWidth');
const colorPicker = document.querySelector('#colorPicker');
const pixelCanvas = document.querySelector('#pixelCanvas');
const form = document.querySelector('#sizePicker')

function makeGrid(x,y) {
    // Resit the canvas to the default setting (r=1,c=1)
    pixelCanvas.textContent = '';
    for (h=1;h<=x.value;h++){
   const row = pixelCanvas.insertRow(0);
        for (w=1;w<=y.value;w++){
          row.insertCell(0);
            
        }
    }
}

// this function will activated when the user press Submit Query
    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        makeGrid(i,j);
    
    });
// this function will activated when the user press at any box in the canvas
    pixelCanvas.addEventListener('click', function(evt){
        if(evt.target.nodeName.toLowerCase() === 'td'){ //verifies target is desired element
            evt.target.style.backgroundColor = colorPicker.value;
        }
    });

  //////////////////////////////////////// Thank You //////////////////////////////////////////
    function myFunction() {
        const node = document.createElement("P");
        const textnode = document.createTextNode("Thank You");
        node.appendChild(textnode);
        document.getElementById("ADD").appendChild(node);
      }
      myFunction();
