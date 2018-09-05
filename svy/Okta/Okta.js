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
					$window.executeInlineScript(callback.formname, callback.script, [res]);
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