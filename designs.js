// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


//Storing the elements on page into a variable
const heightOfGrid = document.getElementById('inputHeight');
const widthOfGrid = document.getElementById('inputWidth');
const colorPicked= document.getElementById('colorPicker');
const submitButton =  document.getElementById('subButton');

//This function creates N by M Grid
function makeGrid() {
//Getting user input for row and column and storing in local variable
  row = storeHeightValue();
  column = storeWidthValue();

  const tableValue = document.getElementById('pixelCanvas');

  for (let i = 0;i < row;i++){
    const createRow = document.createElement('tr');
    appendRow = tableValue.appendChild(createRow);

    for(let j = 0; j < column;j++){
      const createColumn = document.createElement('td');
      appendColumn = appendRow.appendChild(createColumn);

      //Adding listener to table cells
      appendColumn.addEventListener('click', function(){
        const cell = tableValue.rows[i].cells[j];
        cell.style.backgroundColor = storeColorValue();
      });

    }
  }
}

//This function clears the grid
function removeGrid(){
  rowLength = document.getElementById('pixelCanvas').rows.length;

  for (i=rowLength-1; i>=0; i--)
    document.getElementById('pixelCanvas').deleteRow(i);
}

// This function is used in event listener for height field and returns the height value as given by user.
function storeHeightValue(){
  var gridHeight = parseFloat(heightOfGrid.value);
  return gridHeight;
}

// This function is used in event listener for width field and returns the width value as given by user.
function storeWidthValue(){
  var gridWidth = parseFloat(widthOfGrid.value);
  return gridWidth;
}

// This function is used in event listener for color field and returns the color value as given by user.
function storeColorValue(){
  var gridColor = colorPicked.value;
  return gridColor;
}

// Adding event listener for height, width and color
heightOfGrid.addEventListener("input", storeHeightValue);
widthOfGrid.addEventListener("input", storeWidthValue);
colorPicked.addEventListener("input", storeColorValue);

var nCount=0; //This variable is to keep track of number of events on Submit button
submitButton.addEventListener("click", function(event){
  event.preventDefault();
  
  if(nCount===0){
    makeGrid();
    nCount+= 1;
  }else{
    removeGrid();
    makeGrid();
  }
});
