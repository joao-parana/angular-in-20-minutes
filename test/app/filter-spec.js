describe('Testing', function() {
	var encodeFilter;

	// setup and teardown
	beforeEach(angular.mock.module('filterTest')); //

	beforeEach(inject(function($filter) {
		encodeFilter = $filter('encode');
	 }));

	it('should encode a URL with unusual characters', function() {
		var url = 'Cassy & Jones éí%';
		var urlExpected = 'Bassy%20&%20Jones%20%C3%A9%C3%AD%25';
		expect(encodeFilter(url)).toBe(urlExpected);
	});
});
