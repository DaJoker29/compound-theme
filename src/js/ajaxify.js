$(document).ready(function() {

    /*
     * Housing Keeping
     */

    $('#nav-home').addClass('selected');
    $('#nav-artist').click(linkNav); 
    $('#nav-home').click(linkNav); 
    $('#nav-store').click(linkNav); 

    /*
     *  Primary Navigation
     */
    function linkNav() {
        tag = $(this).attr('id');
        dot = tag.substring(4);
        onlyOneSelected();
        $(this).addClass('selected');
        $('#content').load(dot + '.html', function() {
            loadSide(tag, dot);
        });
    }

    function loadSide(tag, dot) {
        if( tag == 'nav-store') 
            $('#sidebar').load(dot + '-side.html', linkStore); 
        else
            $('#sidebar').load(dot + '-side.html');    
    }

    function onlyOneSelected() {
        $('.selected').removeClass('selected'); 
    }

    /*
     * Store
     */
    function linkStore() {
        visibleCart();
        $('#s-all').addClass('selected').click(noFilter);
        $('#s-muzik').click(addStoreFilter);
        $('#s-apparel').click(addStoreFilter);
        $('#s-video').click(addStoreFilter);
        $('.item-desc .glyphicon-remove').parent().click(removeItem);
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

    /*
     * Cart
     */
    function removeItem() {
        $.when($(this).closest('.cart-item').remove())
            .then(visibleCart);
    }

    function visibleCart() {
        if ($('#cart-full').find('.cart-item').length > 0) {
            $('#cart-empty').hide();
            $('#cart-full').show();
            console.log("Cart Active");
        }
        else {
            $('#cart-empty').show();
            $('#cart-full').hide();
            console.log("Cart Empty");
        }
    }
});
