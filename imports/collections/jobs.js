import { Mongo } from 'meteor/mongo';

export const Jobs = new Mongo.Collection('jobs');


Jobs.attachSchema({
    jobTitle: {
        type: String
    },
    description: {
        label: 'Description',
        type: String
    }
});

//
//JobsSchema = new SimpleSchema({
//    jobTitle: {
//        type: String
//    }
//    //description: {
//    //    type: String,
//    //    label: 'Description',
//    //    srf: {
//    //        type: 'textarea'
//    //    }
//    //}
//});
//

