var page = new Page();

$(document).ready(function() {
    page.show();

    $(".item").mouseenter(function() {
        $(this).children().animate({top:'90px', opacity:'show'}, 300);
    }).mouseleave(function() {
        $(this).children().animate({top:'97px', opacity:'hide'}, 300);
    }).click(function() {
        var type = $(this).data('type');
        changeBox('menu', type);
    });
    $("#shida .btn").mouseenter(function() {
        $(this).parent('.wrapper').animate({left:'-270px'});
    });
    $("#shida .detail").mouseleave(function() {
        $(this).parent('.wrapper').animate({left:'0'});
    });
    $(".back").click(function() {
        changeBox($(this).data("box"), 'menu');
    });
});

function showBox(name) {
    var obj = $("#" + name);
    switch(name) {
        case 'news':
            obj.children(".nav").slideDown(300, function() {
                obj.children(".content").animate({top:'30px', opacity:'show'}, 500);
            });
            break;
        case 'shida':
            obj.children(".nav").slideDown(300, function() {
                obj.children(".content").animate({top:'30px', opacity:'show'}, 500);
            });
            break;
        case 'groups':
            obj.children(".nav").slideDown(300, function() {
                obj.children(".content").animate({top:'30px', opacity:'show'}, 500);
            });
            break;
        case 'account':
            obj.children(".nav").slideDown(300, function() {
                obj.children(".content").animate({top:'30px', opacity:'show'}, 500);
            });
            break;
    }
}

var i = 0, j;
function hideMenu() {
    var menu = $("#menu .item");
    i++;
    if(i == 90) {
        clearInterval(j);
    } else {
        menu.css('-webkit-transform', 'rotateY(' + i + 'deg)').css('opacity', 1 - i / 90);
    }
}

function changeBox(name, target) {
    if(name == 'menu') {
        j = setInterval(hideMenu, 3);
        showBox(target);
            /*
        $("#menu").animate({left:'-15px', opacity:'hide'}, 400, function() {
            $(this).css('left', 0);
            $(this).children('.item').hide();
            $(this).show();
            showBox(target);
        });
        */
    } else {
        var obj = $("#" + name);
        obj.children('.content').animate({top:'45px', opacity:'hide'}, 500, function() {
            obj.children('.nav').slideUp(300, function() {
                showBox(target);
            });
        });
    }
}
