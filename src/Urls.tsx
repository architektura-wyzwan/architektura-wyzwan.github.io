const urls = {
	main: "/",
	news: "/news",
	current_edition: "/current_edition",
	previous_editions: (id?: number) => {return id === undefined ? "/previous_editions/:articleId" : "/previous_editions/" + id},
	all_galleries: "/gallery",
	gallery: (id?: number) => {return id === undefined ? "/gallery/:galleryId" : "/gallery/" + id},
	agenda: "/agenda",
	publications: "/publications",
	contact: "/contact",
	register: "/register",
	article: (id?: number) => {return id === undefined ? "/article/:articleId" : "/article/" + id},
	organizers: "/organizers",
	sponsors: "/sponsors",
}

export default urls;