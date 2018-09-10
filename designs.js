//Creating variables for canvas element,height,width
const c = document.getElementById('pixelCanvas');
let h = $("#inputHeight");
let w = $("#inputWidth");

//An event listener that is activated after the submit button is clicked .
$('#inputSubmit').click(function(e) {
    e.preventDefault();
    makeGrid();
});

let color = $("#colorPicker");

//A customizable grid is created when this function is called.
function makeGrid() {

    c.innerHTML = '';
    let height = h.val();
    let width = w.val();

    //The cell is filled with the selected color, and the color is changed.
    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
        });
    }

    //Event listener that is activated when a cell is clicked, and calls addEvent to change the color.
    for (let i = 0; i < height; i++) {
        let row = c.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}
