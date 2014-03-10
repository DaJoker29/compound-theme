$(document).ready(function() {
    //Set default selected page to home
    $('#home').addClass('selected');

    //artist link
    $('#artist').click(function() {
        onlyOneSelected();
        $('#main').load('artist.html #main > *');    
        $('#artist').addClass('selected');
    }); 

    //index link
    $('#home').click(function() {
        onlyOneSelected();
        $('#main').load('index.html #main > *');    
        $('#home').addClass('selected');
    }); 

    function onlyOneSelected() {
        $('.selected').removeClass('selected'); 
    }
});
