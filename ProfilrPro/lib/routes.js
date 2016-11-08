import {Profiles} from '../imports/api/profiles.js'

Router.route('/p/:_id', function () {
  var params = this.params; // { _id: "5" }
  var id = params._id; // "5"
  this.render("profile", {
    data: function() { return Profiles.findOne({userId: this.id });}
  });
}, {
    name: 'profile'
});

Router.route('/all', function () {
  this.render("all");
});

Router.route('/new', function () {
  this.render("new");
});

Router.route('/home', function() {
  this.render("home");
});

Router.route('/', function() {
  this.render("profilrpro");
});
