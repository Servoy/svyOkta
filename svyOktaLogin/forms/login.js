/**
 * @properties={typeid:35,uuid:"D15DF090-3301-42BB-9378-A164224EBC58",variableType:-4}
 */
var signin_properties = {
	baseUrl: "https://servoy.okta.com",
	clientId: "0oao53mzk5Gfcct7J355",
	redirectUri: application.getServerURL() + "solutions/" + application.getSolutionName() + "/index.html",
	authParams: {
		issuer: "https://servoy.okta.com",
		responseType: ['token'],
		display: 'page'
	},
	logo: 'resources/fs/' + application.getSolutionName() + '/logo.png',
	features: {
		registration: true // REQUIRED for SSR
	}
}

/**
 * @param {object} response
 *
 * @private
 *
 * @properties={typeid:24,uuid:"02F075DA-B52E-42F5-A83D-E7187AA46743"}
 */
function loginCallback(response) {
	//save response
	scopes.login.response = response;
	security.login('admin', 1, ['Administrators'])
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F1281115-D19C-4557-B500-9730D143950A"}
 */
function onLoad(event) {
	//intialize and show okta login				
	plugins.svyOkta.init(signin_properties, loginCallback);
}
