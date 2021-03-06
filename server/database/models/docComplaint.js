const mongoose = require('mongoose');
mongoose.promise = Promise;
const Schema = mongoose.Schema;

const DocComplaintSchema = new Schema({
  content: {type: String, required: true},
  fromUserId: {type: Schema.Types.ObjectId, ref: 'User'},
  date_created: {type: Date, default: Date.now},
  processed: {type: Boolean, default: false},
  revisionId: {type: Schema.Types.ObjectId, ref: 'Revision'},
  docId: {type: Schema.Types.ObjectId, ref: 'Document'}
})

const docComplaint = mongoose.model('DocComplaint', DocComplaintSchema);
module.exports = docComplaint;
