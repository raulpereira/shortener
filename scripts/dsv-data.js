// shortener/scripts/dsv-data.js

const mongodb = require('mongodb');

mongodb.MongoClient.connect('mongodb://192.168.99.100:32771/shortener-dsv', (err, db) => {

	if (err) throw err;

    const sequences = [
        { _id: 'seq_shorturl', seq: 1 }
    ];

	db.collection('sequences').find({ _id: 'seq_shorturl' }).toArray((err, result) => {

		if (err) return console.log(err);
		if (result.length > 0) {
			console.log('\u001b[32m✓\u001b[0m \u001b[90mDEVELOPMENT DATABASE PREPARED\u001b[0m');
			process.exit(0);
			db.close();
		}

	});

	db.collection('sequences').insert(sequences, (err, inserted) => {

		if (err) return console.log(err);
		console.log('\u001b[32m✓\u001b[0m \u001b[90mDEVELOPMENT DATABASE PREPARED\u001b[0m');
		process.exit(0);
		db.close();

	});

});