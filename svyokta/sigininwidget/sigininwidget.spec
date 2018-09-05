{
	"name": "svyokta-sigininwidget",
	"displayName": "sigininwidget",
	"version": 1,
	"definition": "svyokta/sigininwidget/sigininwidget.js",
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
		"properties": 
		{
			"type": "object"
		}
	},

	"api": 
	{
		"logout": 
		{
			"parameters": 
			[
				
			]
		},

		"init": 
		{
			"parameters": 
			[
				{
					"name": "properties",
					"type": "object"
				},

				{
					"name": "render",
					"type": "boolean"
				}
			]
		}
	},

	"handlers": 
	{
		"loginCallback": 
		{
			"parameters": 
			[
				{
					"name": "response",
					"type": "object"
				}
			]
		}
	}
}