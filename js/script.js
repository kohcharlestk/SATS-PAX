
$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    $('.modal').modal();
    $('select').formSelect();
});


document.querySelector('#alert-confirm').addEventListener('click', () => {
 

    document.querySelector('#alert').remove('disabled');

});


