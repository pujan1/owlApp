//   /lib/models/crmModel.ts
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const owlOverallStandings = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    }
});