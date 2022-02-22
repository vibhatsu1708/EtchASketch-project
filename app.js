//function to make the grid
function createGrid (number) {
    for (let rows=0; rows<number; rows++) {
        for (let columns=0; columns<number; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/number);
    $(".grid").height(960/number);
};

//function that clears the grid
function clearGrid () {
    $(".grid").remove();
}

//function that prompts the user to select the number of boxes in the grid.
function refreshGrid () {
    let new_number = window.prompt("Enter the number of boxes on each side: ");
    clearGrid();
    createGrid(new_number);
};

//function to display a default 16 by 16 grid, whose boxes change color on hovering over them.
$(document).ready(
    function () {
        createGrid(16);

        $(".grid").mouseover(
            function () {
                $(this).css("background-color", "#272635");
            }
        );

        $(".new-grid").click(
            function () {
                refreshGrid();

                $(".grid").mouseover (
                    function () {
                        $(this).css("background-color", "#272635");
                    }
                );
            }
        );
    }
);