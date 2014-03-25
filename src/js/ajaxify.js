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
        populateStore(Products);
        visibleCart();
        $('#s-all').addClass('selected').click(noFilter);
        $('#s-muzik').click(addStoreFilter);
        $('#s-apparel').click(addStoreFilter);
        $('#s-video').click(addStoreFilter);
    }

    var Products = [
        { name: "Dewitt Is the Most Awesome Person Ever", cat: "muzik", price: 4.99, desc: "The Best Song in History"},
        { name: "Ice Pops: Vol. II", cat: "video", price: 7.99, desc: "The Best Video in History"},
        { name: "Lazy Day", cat: "muzik", price: 4.99, desc: "The Best Song in History"},
        { name: "Praise", cat: "muzik", price: 4.99, desc: "The Best Song in History"},
        { name: "4th Monkey Tee", cat: "apparel", price: 14.99, desc: "The Best Shirt in History"},
        { name: "Butts", cat: "muzik", price: 4.99, desc: "The Best Song in History"},
        { name: "Ice Pops", cat: "video", price: 7.99, desc: "The Best Video in History"},
        { name: "Butts: Vol. II", cat: "muzik", price: 4.99, desc: "The Best Song in History"},
    ]

    function populateStore(obj) {
        $.each(Products, function() {
            prodCat = this.cat;
            prodName = this.name;
            prodPrice = this.price;
            prodDesc = this.desc;
            if (prodCat == 'muzik')
                glyph = 'headphones'
            else if (prodCat == 'video')
                glyph = 'film'
            else
                glyph = 'briefcase'

        var prodAttr = {
            "data-name": prodName,
            "data-price": prodPrice,
            "data-cat": prodCat,
            "data-Desc": prodDesc
        };
            prodStr = [
                '<img src="http://placehold.it/200x200" class="col-sm-2">',
                '<div class="product-meta col-sm-7">',
                '<a>' + prodName + '</a>',
                '<p>' + prodPrice + '</p>',
                '<p>' + prodDesc + '</p>',
                '</div>',
                '<div class="btn-group btn-group-md col-sm-3">',
                '<button type="button" class="btn btn-default">',
                '<span class="glyphicon glyphicon-' + glyph + '"></span>',
                '</button>',
                '<button type="button" class="btn btn-default">',
                '<span class="glyphicon glyphicon-shopping-cart"></span>',
                '</button>',
                '</div>'
            ].join('\n');

            $('#store-content')
                .prepend("<div></div>")
                .find("div:first-child")
                .addClass("product " + prodCat)
                .attr(prodAttr)
                .prepend(prodStr)
        });
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

    function addItem() {
        prod = $(this).closest('.product');
        prodCat = prod.attr('data-cat');
        prodName = prod.attr('data-name');
        prodDesc = prod.attr('data-desc');
        prodPrice = prod.attr('data-price');

        if (prodCat == 'muzik')
            glyph = 'headphones'
        else if (prodCat == 'video')
            glyph = 'film'
        else
            glyph = 'briefcase'

        itemStr = [
           '<li>',
            '<div class="item-desc">',
            '<a><span class="glyphicon glyphicon-remove"></span></a>',
            '<span class="glyphicon glyphicon-' + glyph + '"></span>',
            '<span class="item-name">',
            prodName,
            '</span>',
            '</div>',
            '<span class="item-price">',
            prodPrice,
            '</span>',
            '</li>' 
        ].join('\n');
        $.when($('#cart-contents')
            .prepend(itemStr)
            .find('li:first-child')
            .addClass('cart-item')
            .attr( 'data-price', prod.attr('data-price'))
        ).then(visibleCart);
    }

    function updateTotals() {
        subtotal = 0;
        $('#cart-contents .cart-item').each(function() {
            price = parseFloat($(this).attr('data-price'));
            subtotal += price;
        });

        tax = subtotal * 0.08;
        total = tax + subtotal;

        $('#cart-subtotal h5').text(subtotal.toFixed(2));
        $('#cart-tax h5').text(tax.toFixed(2));
        $('#cart-total h5').text(total.toFixed(2));
    }

    function visibleCart() {
        updateTotals();
        if ($('#cart-full').find('.cart-item').length > 0) {
            $('#cart-empty').hide();
            $('#cart-full').show();
        }
        else {
            $('#cart-empty').show();
            $('#cart-full').hide();
        }
        $('.cart-item .glyphicon-remove').parent().off('click').click(removeItem);
        $('.product .glyphicon-shopping-cart').parent().off('click').click(addItem);
    }
});
