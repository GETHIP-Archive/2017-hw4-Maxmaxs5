export const Profiles = new Mongo.Collection('profiles');

Comment_schema = new SimpleSchema({
  posterFullName: {
    type: String
  },
  comment: {
    type: String,
    max: 140
  }
});

Profiles.schema = new SimpleSchema({
  firstName: {
    type: String,
    max: 30
  },
  lastName: {
    type: String,
    max: 30
  },
  bio: {
    type: String,
    max: 500
  },
  strengths: {
    type: String,
    max: 500
  },
  age: {
    type: Number
  },
  userId: {
    type: String
  },
  picture: {
    type: String,
    defaultValue: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbezqZpEuwGSvitKy3wrwnth5kysKdRqBW54cAszm_wiutku3R",
    optional: true
  },
  pwidth: {
    type: Number,
    min:1,
    max:300,
    defaultValue: 160,
    optional:true
  },
  pheight: {
    type: Number,
    min:1,
    max:300,
    defaultValue: 160,
    optional:true
  },
  comments: {
    type: [Comment_schema],
    optional: true
  }
});

Profiles.attachSchema(Profiles.schema);
