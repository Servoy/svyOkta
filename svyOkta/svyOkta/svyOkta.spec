{
	"name": "svyOkta",
	"displayName": "svyOkta",
	"version": 1,
	"definition": "svyOkta/svyOkta/svyOkta.js",
	"serverscript": "svyOkta/svyOkta/server.js",
	"libraries": 
	[
		{
			"name": "signinjs",
			"version": "1",
			"url": "https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.9.0/js/okta-sign-in.min.js",
			"mimetype": "text/javascript"
		},

		{
			"name": "signincss",
			"version": "1",
			"url": "https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.9.0/css/okta-sign-in.min.css",
			"mimetype": "text/css"
		},

		{
			"name": "signinthemecss",
			"version": "1",
			"url": "https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.9.0/css/okta-theme.css",
			"mimetype": "text/css"
		}
	],

	"model": 
	{
		
	},

	"api": 
	{
		"init": 
		{
			"parameters": 
			[
				{
					"name": "properties",
					"type": "object"
				},

				{
					"name": "callback",
					"type": "function"
				}
			]
		},

		"close": 
		{
			"parameters": 
			[
				{
					"name": "callback",
					"type": "function"
				}
			]
		},

		"refresh": 
		{
			"parameters": 
			[
				{
					"name": "callback",
					"type": "function"
				}
			]
		}
	},

	"internalApi": 
	{
		"setData": 
		{
			"returns": "string",
			"parameters": 
			[
				{
					"name": "properties",
					"type": "object"
				},

				{
					"name": "callback",
					"type": "function"
				}
			]
		},

		"getData": 
		{
			"returns": "object"
		}
	}
}