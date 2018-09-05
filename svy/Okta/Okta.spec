{
	"name": "svy-Okta",
	"displayName": "Okta",
	"version": 1,
	"definition": "svy/Okta/Okta.js",
	"libraries": 
	[
		{
			"name": "signin",
			"version": "1",
			"url": "https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.9.0/js/okta-sign-in.min.js",
			"mimetype": "text/javascript"
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
	}
}