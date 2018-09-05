/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CE87690E-7607-4F32-BF37-4115D93D5442"}
 */
var info;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"635D956E-180A-44BB-96DD-BE24042117F7"}
 */
function onAction$signout(event) {
	//log out of okta session
	plugins.svyOkta.close(logoutCB);
}

/**
 * @properties={typeid:24,uuid:"86AC3B3D-F20F-423F-96D8-9132E8EB0619"}
 */
function logoutCB(err) {
	if (err) {
		application.output(err)
	} else {
		//log out of application if okta successfully closes session.
		security.logout();
	}
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
	updateInfo(scopes.login.response);
}

/**
 * @param response
 *
 * @properties={typeid:24,uuid:"8E8F696A-CB72-41CA-9288-20BA93525CED"}
 */
function updateInfo(response) {
	var msg = '';
	for (var i in response) {
		msg += i + ' : ' + response[i] + '<br>';
	}
	info = msg;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"39B80D6D-E601-43C3-8BF9-D06FD08B5830"}
 */
function onAction$refresh(event) {
	plugins.svyOkta.refresh(refreshCB);
}

/**
 * @param resp
 *
 * @properties={typeid:24,uuid:"FE6A057B-89BB-4DB1-9B23-0151E9078759"}
 */
function refreshCB(resp) {
	updateInfo(resp);
}
