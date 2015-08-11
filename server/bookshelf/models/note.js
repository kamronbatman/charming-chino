var db = require( '../config' );
var Event = require( './event' );
var User = require( './user' );

var Note = db.Model.extend( {
  tableName: 'notes',
  hasTimestamps: true,

  user: function() {
    return this.belongsTo( User );
  },

  event: function() {
    this.belongsTo( Event );
  },
});

module.exports = Note;