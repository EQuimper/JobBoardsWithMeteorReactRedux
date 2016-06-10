import { Mongo } from 'meteor/mongo';

export const Jobs = new Mongo.Collection('jobs');

JobsSchema = new SimpleSchema({
    jobTitle: {
        type: String
    }
});
