// --------- header toggle-------------
$(document).ready(function() {
    $(document).on("click", "#toggle", function() {
        $(this).toggleClass("on");
        $("#toggle-menu").slideToggle();
        $("#toggle-menu").css("display", "block");

    });
    $(document).on("click", "#toggle-menu .dropdown-box .r-c-menu", function() {
        $("#toggle-menu").css("display", "none");
    });
});


// ------------- mobile menu backdrop-----------------
$(document).ready(function() {
    $(document).on("click", ".toggle-wrap", function() {
        $(this).toggleClass('active');
        $("body").toggleClass('overflow-hidden');
        $(".backdrop-menu").toggleClass("active");
    });

    $(document).on("click", "aside ul li .open-menu", function() {
        $(".toggle-wrap, .backdrop-menu, aside").removeClass('active');
        $("body").removeClass('overflow-hidden');
    });
});

// -------------mobile menu aside----------------

function toggleMenu(e) {
    document.querySelector("aside").classList.toggle("active");
}

//   ------------ mobile menu aside end -------------

// ------------ Homepage About us tabs -----------
// or
// ------------other page tabs 

$(document).on('click', ".tab-heading", function() {
    if ($(this).hasClass('active')) {
        $(this).siblings('.tabcontent').slideUp();
        $(this).removeClass('active');
    } else {
        $('.tabcontent').slideUp();
        $('.tab-heading').removeClass('active');
        $(this).siblings('.tabcontent').slideDown();
        $(this).toggleClass('active');
    }
});


// ---------- homepage about tabs --------------

$(document).ready(function() {
    var previousActiveTabIndex = 0;

    $(document).on('click', '.tabswitcher', function() {
        var tabClicked = $(this).data("tab-index");

        if (tabClicked != previousActiveTabIndex) {
            $("#allTabContainer .tabcontainer").each(function() {
                if ($(this).data("tab-index") == tabClicked) {
                    $(".tabcontainer").hide();
                    $(this).show();
                    previousActiveTabIndex = $(this).data("tab-index");
                    return;
                };
            });
        };
        $('.tabswitcher .tablinks.active').removeClass('active');
        $(this).children().addClass('active');

    });
});

// ------------homepage card toggle mobile -------------

$(document).ready(function() {
    $(document).on('click', '.cardswitcher', function() {
        $(this).parent().prev('.cardcontainer').slideDown();
        $(this).addClass('active');
        $(this).text('Show Less');
    });
    $(document).on('click', '.cardswitcher.active', function() {
        $(this).parent().prev('.cardcontainer').slideUp();
        $(this).removeClass('active');
        $(this).text('Show More');
    });
});

// ------------homepage Our-work ---------
// or
// ------------our-work page ----------

$(document).ready(function() {
    var previousActiveTabIndex = 0;

    $(document).on('click', '.tab-switcher', function() {
        var tabClicked = $(this).data("tab-index");

        if (tabClicked != previousActiveTabIndex) {
            $("#allTabsContainer .tab-container").each(function() {
                if ($(this).data("tab-index") == tabClicked) {
                    $(".tab-container").hide();
                    $(this).show();
                    previousActiveTabIndex = $(this).data("tab-index");
                    return;
                };
            });
        };
        $('.tab-switcher .tablinks.active').removeClass('active');
        $(this).children().addClass('active');

    });
});
// ------------homepage Our-work end---------
// or
// ------------our-work page end----------

// ------------ Counters -------------


$(window).scroll(function() {
    $('.counter-head').each(function() {
        if (isElementVisible($(this)) && $(this).prop('Counter') === undefined) {
            var targetValue = parseInt($(this).text().replace(/,/g, ''));
            $(this).prop('Counter', 0).animate({
                Counter: targetValue
            }, {
                duration: 4000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(formatNumberWithCommas(Math.ceil(now)));
                }
            });
        }
    });
});

function isElementVisible(element) {
    var viewportHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var elementOffset = element.offset().top;
    return elementOffset < (scrollTop + viewportHeight);
}

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



// ----------- blog page tabs swich---------------

$(document).ready(function() {
    var previousActiveTabIndex = 0;

    $(document).on('click', '.tabs-switcher', function() {
        var tabClicked = $(this).data("tab-index");

        if (tabClicked != previousActiveTabIndex) {
            $("#allblogsContainer .tab-container").each(function() {
                if ($(this).data("tab-index") == tabClicked) {
                    $(".tab-container").hide();
                    $(this).show();
                    previousActiveTabIndex = $(this).data("tab-index");
                    return;
                };
            });
        };
        $('.tabs-switcher .tablinks.active').removeClass('active');
        $(this).children().addClass('active');

    });
});

// ----------- blog page tabs swich end ---------------



// -----------Back top btn--------------

$(document).on("click", "#backToTop", function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
});

// -----------Back top btn end--------------

// ------------ Blog search filter -------------------

$(document).ready(function() {
    var length = 0;
    $("#myInput").val('');
    $(document).on("keyup", "#myInput", function() {
        var value = $(this).val().toLowerCase();
        $(".blog-images .blog-card").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        var trSel = $(".blog-images .blog-card:visible")
        if (trSel.length == 0) {
            $(".no-records").show();
        } else {
            $(".blog-images .blog-card").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                $(".no-records").hide();
            });
        };
    });
});

$(document).on('click', '.clearSearch', function() {
    var searcvalue = $('#myInput').val().toLowerCase();
    console.log(searcvalue);
    $('#myInput').val("");
    $('.no-records').hide();
    $(".blog-images .blog-card").show();
});

// ------------ Blog serch filter end ---------------