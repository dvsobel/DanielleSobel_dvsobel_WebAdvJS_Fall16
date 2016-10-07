var Xray = require('x-ray');
var x = Xray();

// 1st argument: URL you want to scrape
// 2nd argument: the selector that you want to grab
// 3rd argument: the array containing object of what you want to be passed on
x('https://www.youtube.com/results?search_query=baby', '.item-section', [{ //look inside this list of mb movies
	videos: x('.yt-lockup-dismissable', [{// node please make the movies inside the categories top movies
		title: '.yt-lockup-title a@title',
		link: '.yt-lockup-title a@href',
		datesPosted: '.yt-lockup-meta-info li',
		// rank: '.lister-item-index',
		// rating: '.ratings-imdb-rating strong',
		// thumbnail: '.lister-item-image img@src',
		// genre: ['.genre'],
		// people: x('.lister-item-content p a', [{
		// 	name: '',
		// 	link: '@href'
		// }]),
		// poster: x('.lister-item-header a@href', 'head meta[property="og:image"]@content')
	}])
}])
	// .paginate('a.lister-page-next.next-page@href')
	// .limit(20)
    .limit(20)
    .write('results.json');