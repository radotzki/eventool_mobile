(function() {
	'use strict';

	angular
	.module('eventool.core')
	.config(restangularConfig)
	.config(stateConfig);

	/* @ngInject */
	function restangularConfig(RestangularProvider, HOST) {
		RestangularProvider.setBaseUrl(HOST.LOCALHOST);
	}

	/* @ngInject */
	function stateConfig($urlRouterProvider){
		$urlRouterProvider.otherwise("/app/clients");
	}

})();
