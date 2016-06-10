import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

export const Jobs = new Mongo.Collection('jobs');

const Location = Class.create({
	name: 'Location',
	fields: {
		city: {
			type: String,
			default: ''
		},
		province: {
			type: String,
			default: ''
		},
		country: {
			type: String,
			default: 'Canada'
		}
	}
});

const Contact = Class.create({
	name: 'Contact',
	fields: {
		email: {
			type: String,
			default: ''
		},
		phone: {
			type: String,
			default: '',
			optional: true
		}
	}
});

export const Job = Class.create({
	name: 'Job',
	collection: Jobs,
	fields: {
		jobTitle: {
			type: String,
			default: ''
		},
		createdAt: Date,
		jobDescription: {
			type: String,
			default: ''
		},
		company: {
			type: String,
			default: ''
		},
		location: {
			type: Location,
			default: () => {}
		},
		jobType: {
			type: String,
			default: '',
			optional: true
		},
		contact: {
			type: Contact,
			default: () => {}
		},
		salary: {
			type: Number,
			default: '',
			optional: true
		},
		dueDate: {
			type: Date
		}
	},
});

