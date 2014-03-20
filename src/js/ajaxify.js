$(document).ready(function() {
    /*
     *  Primary Navigation
     */

    function linkNav() {
        tag = $(this).attr('id');
        dot = tag.substring(4);
        onlyOneSelected();
        $(this).addClass('selected');
        if ( tag == 'nav-store')
            $('#content').load(dot + '.html', linkStore);    
        else
            $('#content').load(dot + '.html');    
        $('#sidebar').load(dot + '-side.html');    
    }

    $('#nav-home').addClass('selected');
    $('#nav-artist').click(linkNav); 
    $('#nav-home').click(linkNav); 
    $('#nav-store').click(linkNav); 

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
