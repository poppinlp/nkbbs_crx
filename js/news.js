function News() {
    this.count = 0;
    this.list = null;
	this.interval = 60000;
    this.flag_interval = null;
}

News.prototype = {
	constructor: News,
	empty: function() {
        this.count = 0;
        this.list = null;
	},
	freshNews: function() {
        $.ajax({
            type: 'post',
            url: _baseurl + '/ajax',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: 'type=user&request=getNews',
            success: function(data) {
                var temp = chrome.extension.getBackgroundPage().news;
                data = JSON.parse(data);
                if(data.status === 1) {
                    data = JSON.parse(data.data);
                    temp.count = data.count;
                    temp.list = data.data;
                    if(data.count === 0) {
		                chrome.browserAction.setIcon({'path':'img/logo_msg.png'});
                    } else {
		                chrome.browserAction.setIcon({'path':'img/logo_msg.png'});
                    }
                }
            }
        });
	},
    start: function() {
        this.freshNews();
        if(this.flag_interval === null) {
            this.flag_interval = setInterval(this.freshNews, this.interval);
        } else {
            console.log('Already start');
        }
    },
    stop: function() {
        if(this.flag_interval !== null) {
            clearInterval(this.flag_interval);
            this.flag_interval = null;
        } else {
            console.log('Already stop');
        }
    }
}
