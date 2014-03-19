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
        $('#content').load('store.html #content > *', function() {
            //Callback to add default selected for store nav
            $('#s-all').addClass('selected').click(noFilter);
            $('#s-muzik').click(muzikFilter);
            $('#s-apparel').click(apparelFilter);
            $('#s-video').click(videoFilter);
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

    function muzikFilter() {
        onlyOneSelectedStore();
        removeFilters();
        $('#s-muzik').addClass('selected');
        $('#store-content .product:not(.muzik)').hide();
    }
    
    function apparelFilter() {
        onlyOneSelectedStore();
        removeFilters();
        $('#s-apparel').addClass('selected');
        $('#store-content .product:not(.apparel)').hide();
    }
    
    function videoFilter() {
        onlyOneSelectedStore();
        removeFilters();
        $('#s-video').addClass('selected');
        $('#store-content .product:not(.video)').hide();
    }
    
    function noFilter() {
        onlyOneSelectedStore();
        $('#s-all').addClass('selected');
        removeFilters();
    }
});
