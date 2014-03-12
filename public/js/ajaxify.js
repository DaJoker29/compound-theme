$(document).ready(function() {
    //Set default selected page to home
    $('#home').addClass('selected');

    //artist link
    $('#artist').click(function() {
        onlyOneSelected();
        $('#content').load('artist.html #content > *');    
        $('#artist').addClass('selected');
    }); 

    //index link
    $('#home').click(function() {
        onlyOneSelected();
        $('#content').load('index.html #content > *');    
        $('#home').addClass('selected');
    }); 

    //store link
    $('#store').click(function() {
        onlyOneSelected();
        $('#content').load('store.html #content > *');    
        $('#store').addClass('selected');
    }); 

    function onlyOneSelected() {
        $('.selected').removeClass('selected'); 
    }
});
