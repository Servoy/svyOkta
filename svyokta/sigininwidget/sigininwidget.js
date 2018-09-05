angular.module('svyoktaSigininwidget', ['servoy']).directive('svyoktaSigininwidget', function() {
		return {
			restrict: 'E',
			scope: {
				model: '=svyModel',
				api: "=svyApi",
				handlers: "=svyHandlers",
			},
			controller: function($scope, $element, $attrs, $window) {
				$scope.oktaSignin = null;

				$scope.api.logout = function() {
					$scope.oktaSignin.signOut();
				}

				var init = function() {
					try {
						if (!OktaSignIn) return;
					} catch (e) {
						return;
					}

					//finish init
					clearInterval(login);
					$scope.oktaSignin = new OktaSignIn($scope.model.properties);					
					$scope.oktaSignin.session.get(function(res) {
						// Session exists, show logged in state.
						if (res.status === 'ACTIVE') {
							if ($scope.handlers.loginCallback) {
								$scope.handlers.loginCallback(res);
							}
							return;
						}
						// No session, show the login form
						$scope.oktaSignin.renderEl({ el: '#okta-login-container' },
							function success(res) {								
								// Nothing to do in this case, the widget will automatically redirect
								// the user to Okta for authentication, then back to this page if successful
							},
							function error(err) {
								// handle errors as needed
								console.error(err);
							}
						);
					});
				}

				var login = setInterval(init, 0);
			},
			templateUrl: 'svyokta/sigininwidget/sigininwidget.html'
		};
	})