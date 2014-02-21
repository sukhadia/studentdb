var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('studentdb', server, {safe: true});

db.open(function(err, db) {
    if(!err) {
		console.log("Connected to 'studentdb' database");
    }
});

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving student: ' + id);
    db.collection('students', function(err, collection) {
        collection.ensureIndex( { "_id": -1 } );
		collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    console.log('Query params: ' + req.params);
    var sortfield = req.params.sortfield,
        sortorder = req.params.sortorder,
        activeInactive = req.params.browseType === 'INACTIVE'? 'N': (req.params.browseType === 'ACTIVE')? 'Y': '',
        keyword = req.params.keyword;
    sortfield = ((sortfield) ? sortfield : 'lastname');
    sortorder = (('DESC'===sortorder) ? -1 : 1);
    var sortoptions = {},
        searchoptions = {};
    sortoptions[sortfield] = sortorder;
    console.log('sortoptions: [' + sortfield + ', ' + sortorder + ']')
    db.collection('students', function(err, collection) {
        collection.ensureIndex( { "active": -1 } );
        collection.ensureIndex( { "lastname": 0 } );
		collection.ensureIndex( { "firstname": 1 } );
		if (keyword) {
            searchoptions['$or'] = [
                                    {'lastname': { $regex: '[.]*'+keyword+'[.]*', $options: 'i' }}, 
                                    {'firstname': { $regex: '[.]*'+keyword+'[.]*', $options: 'i' }}
                                   ];
            console.log('Searching by keyword: ' + keyword);
            collection.find(searchoptions)
                .sort(sortoptions).toArray(function(err, items) {
                    res.send(items);
                });
        } 
        else {
            if (activeInactive) {
                collection.find({'active': activeInactive}).sort(sortoptions).toArray(function(err, items) {
                    res.send(items);
                });
            }
            else {
                collection.find().sort(sortoptions).toArray(function(err, items) {
                    res.send(items);
                });
            }
        }
    });
};

exports.addStudent = function(req, res) {
    var student = req.body;
    console.log('Adding student: ' + JSON.stringify(student));
    db.collection('students', function(err, collection) {
        collection.insert(student, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}

exports.updateStudent = function(req, res) {
    var id = req.params.id;
    var student = req.body;
    delete student._id;
    console.log('Updating student: ' + id);
    console.log(JSON.stringify(student));
    db.collection('students', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, student, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating student: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(student);
            }
        });
    });
}

exports.deleteStudent = function(req, res) {
    var id = req.params.id;
    console.log('Deleting student: ' + id);
    db.collection('students', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}
