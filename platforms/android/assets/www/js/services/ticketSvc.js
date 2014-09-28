angular.module('eventool.services')

.factory('Ticket', function(Restangular) {
	var factory = {}

	factory.index = function(clientId) {
		return Restangular.one('clients', clientId).getList('tickets');
	};

	factory.show = function(clientId, ticketId) {
		return Restangular.one('clients', clientId).one('tickets', ticketId).get();
	};

	factory.create = function(clientId, params) {
		return Restangular.one('clients', clientId).post("tickets", params);
	};

	factory.update = function(entity) {
		return entity.put();
	};

	factory.delete = function(entity) {
		return entity.remove();
	};	

	factory.checkin = function(clientId, ticketId) {
		return Restangular.one('clients', clientId).one('tickets', ticketId).customPUT({},"checkin");
	};	

	factory.changePrice = function(clientId, ticketId, priceId) {
		return Restangular.one('clients', clientId).one('tickets', ticketId).customPUT({},"change_price",  {event_price_id: priceId});
	};	

	return factory;
})