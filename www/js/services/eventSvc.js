angular.module('eventool.services')

.factory('Event', function($resource, Restangular) {
	var factory = {}

	var base = Restangular.all('events');

	factory.index = function() {
		return base.getList();
	};

	factory.show = function(id) {
		return base.get(id);
	};

	factory.create = function(params) {
		return base.post(params);
	};

	factory.update = function(entity) {
		return entity.put();
	};

	factory.delete = function(entity) {
		return entity.remove();
	};	

	factory.getTickets = function (entity) {
		return entity.getList('tickets');
	};

	return factory;
})