// Backbone Model

var Blog = Backbone.Model.extend({
	defaults: {
		author: '',
		title: '',
		url: '',
		action: ''
	}
});

//Backbone Collection

var Blogs = Backbone.Collection.extend({

});


// instatiate two blogs

var blog1 = new Blog({
	author: "Luke",
	title: "Luke\'s Blog",
	url:"lukewards.com"
});

var blog2 = new Blog({
	author: "Mike",
	title: "Michael\'s Blog",
	url:"michael.com"
});

//instatiate a collection 

var blogs = new Blogs([blog1, blog2])

//backbone View for one bolog

var BlogView = Backbone.View.extend({
	model: new Blog(),
	tagName: 'tr',
	initialize: function() {
		this.template = _.template($('.blog-list-template').html());
	},
	render: function () {
		this.$el.html(this.template(this.model.toJSON()));
	}

});


//backbone View for all blogs

var BlogsView = Backbone.View.extend({

});