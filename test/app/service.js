var app = angular.module('app', []);

app.factory('Book', function($http) {
	var format = function(rawData) {
		var book = null;

		if (typeof rawData !== 'undefined') {
			book = {
				title : rawData.mainTitle,
				author : rawData.author.name,
				synopsis : rawData.info.synopsis
			};
		}

		return book;
	};

	var getBook = function(isbn, book) {
		return $http.get('http://books.web.com/isbn/' + isbn);
	};

	return {
		format : format,
		get : getBook
	};
});
