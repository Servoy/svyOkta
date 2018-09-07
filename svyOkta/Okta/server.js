var properties;
var callback;

$scope.setData = function(p, c) {
	properties = p;
	callback = c;
}

$scope.getData = function() {
	return {
		properties: properties,
		callback: callback
	}
}