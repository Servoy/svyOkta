/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"635D956E-180A-44BB-96DD-BE24042117F7"}
 */
function onAction(event) {
	forms.login.logout();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"6797D8D8-AD9D-43CA-8E27-2A16028C8A18"}
 */
function onShow(firstShow, event) {
	var response = scopes.login.response;
	var msg = '';
	for (var i in response) {
		msg += i + ' : ' + response[i] + '<br>';
	}
	plugins.dialogs.showInfoDialog('Authenticated Successfully', msg)
}
