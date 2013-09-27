function Account() {
}

Account.prototype = {
	constructor: Account,
	login: function(username, password) {
        $.ajax({
            type: 'post',
            url: _baseurl + '/ajax',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: 'request=login&type=user&all_name=' + username + "&all_pwd=" + password + "&remember=1",
            success: function(data) {
                data = JSON.parse(data);
                if(data.status === 1) {
		            chrome.browserAction.setIcon({'path':'img/logo.png'});
                    chrome.extension.getBackgroundPage().news.start();
                }
            }
        });
	},
	check: function() {
        $.ajax({
            type: 'post',
            url: _baseurl + '/ajax',
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
	},
	logout: function() {
        $.ajax({
            type: 'post',
            url: _baseurl + '/ajax',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: 'request=logout&type=user',
            success: function(data) {
                if(JSON.parse(data).status === 1) {
	        	    chrome.browserAction.setIcon({'path':'img/logo_offline.png'});
                    chrome.extension.getBackgroundPage().news.stop();
                }
            }
        });
	}
}
