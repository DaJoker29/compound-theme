$(document).ready(function() {
    /*
     *  Primary Navigation
     */
    //Set default selected page to home
    $('#home').addClass('selected');

    $('#artist').click(function() {
        onlyOneSelected();
        $('#artist').addClass('selected');
        $('#content').load('artist.html #content > *');    
    }); 

    $('#home').click(function() {
        onlyOneSelected();
        $('#home').addClass('selected');
        $('#content').load('index.html #content > *');    
    }); 

    $('#store').click(function() {
        onlyOneSelected();
        $('#store').addClass('selected');
        $('#content').load('store.html #content > *', linkStore);
        $('#sidebar').load('cart.html #sidebar > *');    
    }); 

    function onlyOneSelected() {
        $('.selected').removeClass('selected'); 
    }

    /*
     * Store
     */
    function linkStore() {
        $('#s-all').addClass('selected').click(noFilter);
        $('#s-muzik').click(addStoreFilter);
        $('#s-apparel').click(addStoreFilter);
        $('#s-video').click(addStoreFilter);
    }

    function onlyOneSelectedStore() {
        $('.navlinks .selected').removeClass('selected'); 
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
