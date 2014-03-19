$(document).ready(function() {
    /*
     *  Primary Navigation
     */
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
        $('#content').load('store.html #content > *', function() {
            //Callback to add default selected for store nav
            $('#s-all').addClass('selected').click(noFilter);
            $('#s-muzik').click(addStoreFilter);
            $('#s-apparel').click(addStoreFilter);
            $('#s-video').click(addStoreFilter);
        });    
        $('#store').addClass('selected');
    }); 

    function onlyOneSelectedStore() {
        $('.navlinks .selected').removeClass('selected'); 
    }

    function onlyOneSelected() {
        $('.selected').removeClass('selected'); 
    }

    function removeFilters() {
        $('#store-content .product').show();
    }

    function addStoreFilter() {
        tag = $(this).attr('id');
        dot = tag.substring(2);
        onlyOneSelectedStore();
        removeFilters();
        $('#' + tag).addClass('selected');
        $('#store-content .product:not(.' + dot + ')').hide();
    }

    function noFilter() {
        onlyOneSelectedStore();
        $('#s-all').addClass('selected');
        removeFilters();
    }
});
