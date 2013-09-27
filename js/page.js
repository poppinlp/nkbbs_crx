function Page() {
    this.index = 0;
}

Page.prototype = {
	constructor: Page,
    change: function(index) {
        this.hide();
        this.index = index;
        this.show();
    },
    show: function() {
        switch(this.index) {
                console.log(this.index);
            case 0:
                var menu = $("#menu").children(".item"), speed = 1200;
                console.log(menu);
                menu.eq(0).fadeIn(speed);
                menu.eq(1).delay(200).fadeIn(speed);
                menu.eq(2).delay(400).fadeIn(speed);
                menu.eq(3).delay(600).fadeIn(speed);
                break;
        }
    },
    hide: function() {
        switch(this.index) {
            case 0:
                break;
        }
    }
}
