$(document).ready(function () {

    $("#save").on("click", function () {
        saveNewName($('#name').val());
        showNames();
    });

    $("#clearAll").click(function () {
        localStorage.clear();
        showNames();
    });

    $('body').on('click', '.delete-btn',function (e) {
        e.preventDefault();
        deleteName($(this));
    });

    showNames();
});


function saveNewName(name){
    let names = [];
    if(
        localStorage.getItem('name') !== null
        && localStorage.getItem('name') !== undefined
    ){
        names = JSON.parse(localStorage.getItem('name'));
    }
    names.push(name);

    localStorage.setItem('name', JSON.stringify(names));
}


function showNames(){
    let names = JSON.parse(localStorage.getItem('name'));
    $("#result").empty();
    for (key in names){
        $("#result").append(`<li>${names[key]} <a href="#" class="delete-btn" data-id="${key}">x</a></li>`);
    }


}

function deleteName(selectedName) {
    selectedName.closest('li').remove();

    let names = [];
    if(
        localStorage.getItem('name') !== null
        && localStorage.getItem('name') !== undefined
    ){
        names = JSON.parse(localStorage.getItem('name'));
    }
    names.splice(selectedName.data('id'), 1);
    localStorage.setItem('name', JSON.stringify(names));

}