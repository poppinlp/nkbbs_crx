function Account() {
    this.token = localStorage.getItem('nkbbs_token');
}

Account.prototype.authorize = function(username, password) {
    var instance = this;
    $.ajax({
        type: 'POST',
        url: BBS.baseApi + 'authorize',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        data: 'username=' + username + '&password=' + password + '&app_name=nkbbs_chrome_ext',
        success: function(data) {
            data = JSON.parse(data);
            if (data.status) {
                localStorage.setItem('nkbbs_token', data.data);
                instance.token = data.data;
            }
        }
    });
};

Account.prototype.getInfo = function() {
    if (!this.token) return;
    
    $.ajax({
        type: 'GET',
        url: BBS.accountApi + 'getInfo',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        data: 'token=' + this.token,
        success: function(data) {
            data = JSON.parse(data);
        }
    });
};

Account.prototype.getNews = function() {
    if (!this.token) return;
    
    $.ajax({
        type: 'GET',
        url: BBS.accountApi + 'getNews',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        data: 'token=' + this.token,
        success: function(data) {
            data = JSON.parse(data);
        }
    });
};
/*
    $.ajax({
        type: 'POST',
        url: BBS.baseApi + '/login',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        data: 'username=' + username + "&password=" + password + "&remember=1",
        success: function(data) {
            data = JSON.parse(data);
            if(data.status === 1) {
                chrome.browserAction.setIcon({'path':'img/logo.png'});
                chrome.extension.getBackgroundPage().news.start();
            }
        }
    });
    */

    /*
    function check() {
        $.ajax({
            type: 'GET',
            url: BBS.accountApi,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: 'request=isLogin&type=user',
            success: function(data) {
                if(JSON.parse(data).status === 1) {
		            chrome.browserAction.setIcon({'path':'img/logo.png'});
                    chrome.extension.getBackgroundPage().news.start();
                } else {
	        	    chrome.browserAction.setIcon({'path':'img/logo_offline.png'});
                }
            }
        });
    }
}*/
