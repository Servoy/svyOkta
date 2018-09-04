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
	elements.sigininwidget.properties = {
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
}

/**
 * @param {object} response
 *
 * @private
 *
 * @properties={typeid:24,uuid:"02F075DA-B52E-42F5-A83D-E7187AA46743"}
 */
function loginCallback(response) {
	var msg = '';
	for (var i in response) {
		msg += i + ' : ' + response[i] + '<br>';
	}
	plugins.dialogs.showInfoDialog('Authenticated Successfully', msg)
}
