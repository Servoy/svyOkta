/**
 * @properties={typeid:35,uuid:"A3DBCF76-CA28-47C5-8AFF-AF832FF04AF7",variableType:-4}
 */
var widget_properties = {
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
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A9C09391-0703-4AFA-B015-0C7CE6FFE1B5"}
 */
function onLoad(event) {
	elements.sigininwidget.init(widget_properties, true);
}

/**
 * @param {object} response
 *
 * @private
 *
 * @properties={typeid:24,uuid:"02F075DA-B52E-42F5-A83D-E7187AA46743"}
 */
function loginCallback(response) {
	scopes.login.response = response;
	security.login('admin', 1, ['Administrators'])
}

/**
 * @public
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"79158B7D-3F48-4EC5-B643-3DA351B30D1B"}
 */
function logout(event) {
	//need to initialize the widget again, in case we go through without loading login screen (i.e closed tab and start a new window/session)
	elements.sigininwidget.init(widget_properties, false);
	elements.sigininwidget.logout();
	security.logout();
}
