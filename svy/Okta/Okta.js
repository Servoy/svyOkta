angular.module('svyOkta', ['servoy']).factory("svyOkta", function($services, $window) {
		var scope = $services.getServiceScope('svyOkta');
		return {
			close: function(callback) {
				scope.oktaSignin.session.close(function(err) {
					$window.executeInlineScript(callback.formname, callback.script, [err]);
				});

			},

			refresh: function(callback) {
				scope.oktaSignin.session.refresh(function(res) {
					if (res.status === 'ACTIVE') {
						$window.executeInlineScript(callback.formname, callback.script, [res]);
						// The session now has an extended lifetime
					} else if (res.status === 'INACTIVE') {
						// There is no current session, render the Sign-In Widget
						$window.executeInlineScript(callback.formname, callback.script, [res]);
					}
				});
			},

			init: function(properties) {
				scope.properties = properties;
				//initialize okta object if not yet done.
				if (!scope.oktaSignin) {
					scope.oktaSignin = new OktaSignIn(scope.properties);
				}
			}
		}
	}).run(function($rootScope, $services) { });