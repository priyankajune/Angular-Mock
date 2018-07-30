angular
	.module('ngCribs')
	.filter('cribsFilter', function () {
		/* body... */
		return function (listings, priceInfo) {
			/* body... */
			var filtered = []; //we will push in this filtered array and return it at the end
			
				var min = priceInfo.min;
			
		
			
				var max = priceInfo.max;
			
			
			
			angular.forEach( listings, function (listing) {
				/* body... */

				if (listing.price >= min && listing.price <= max) {
					filtered.push(listing);
				}
			});
			return filtered;
		}
	})