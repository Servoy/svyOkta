angular.module('svyOkta', ['servoy']).factory("svyOkta", function($services, $window, $document) {
		var scope = $services.getServiceScope('svyOkta');
		return {
			/*
			 * logout
			 * @param {function} callback
			 */

			close: function(callback) {
				scope.oktaSignin.session.close(function(err) {
					$window.executeInlineScript(callback.formname, callback.script, [err]);
				});

			},

			/*
			 * refresh session
			 * @param {function} callback
			 */

			refresh: function(callback) {
				scope.oktaSignin.session.refresh(function(res) {
					$window.executeInlineScript(callback.formname, callback.script, [res]);
				});
			},

			/*
			 * intialize and render widget for first time
			 * @param {object} properties
			 * @param {function} cb
			 */

			init: function(properties, cb) {
				scope.properties = properties;
				scope.logincallback = cb;
				//save properties server side as redirection clears some of this.
				$services.callServerSideApi("svyOkta", "setData", [properties, cb]);
				scope.render();
			}
		}
	}).run(function($rootScope, $services, $window) {

	var scope = $services.getServiceScope('svyOkta');

	/*
	 * Method to render the signin widget
	 */
	scope.render = function() {
		//initialize okta object if not yet done.
		if (!scope.oktaSignin) {
			scope.oktaSignin = new OktaSignIn(scope.properties);
		}

		scope.oktaSignin.session.get(function(res) {
			// Session exists, show logged in state.
			if (res.status === 'ACTIVE') {
				if (scope.logincallback) {
					//execute callback after login;
					$window.executeInlineScript(scope.logincallback.formname, scope.logincallback.script, [res]);
				}
				return;
			} else {
				// No session, show the login form
				scope.oktaSignin.renderEl({ el: '#okta-login-container' },
					function success(res) {
						// Nothing to do in this case, the widget will automatically redirect
						// the user to Okta for authentication, then back to this page if successful
					},
					function error(err) {
						// handle errors as needed
						console.error(err);
					}
				);
			}

		});
	}

	//create widget body
	var body = document.body;
	var el = document.createElement("div");
	el.id = 'okta-login-container';
	body.append(el);

	//startup widget after body is created.
	setTimeout(function() {
			//since we are using widget and redirection can clear scope data, get properties and callback server side.
			$services.callServerSideApi("svyOkta", "getData", []).then(function(data) {
				if (data.properties && data.callback) {
					scope.properties = data.properties;
					scope.logincallback = data.callback;
				}
				scope.render();
			});
		}, 0);
});