import mongoose from 'mongoose';

var CounterSchema = mongoose.Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});
const Counter = mongoose.model('counter', CounterSchema);

const initialize = async function(name) {
  console.log(`initializing counter ${name}`)
  let doc = await Counter.findByIdAndUpdate(name,
    {},
    {
      upsert: true,
      new: true
    });
}

const reset = async function(name) {
  console.log(`resetting counter ${name}`)
  return Counter.findByIdAndUpdate(name,
    { seq: 0 },
    {
      upsert: true,
      new: true
    });
}

const increment = function(name) {
  return function(next) {
    var saving = this;
    Counter.findByIdAndUpdate(
      name, 
      {$inc: { seq: 1} },
      {
// not thread safe to initialize at save time
//        upsert: true,
//        new: true,
        returnNewDocument: true
      },
      function(error, doc) {
        if(error) return next(error);
        // This is threaded so always increase no matter what
        if(!saving.id) {
          console.log(`getting counter from ${doc.id} with value ${doc.seq}`)
          saving.id = doc.seq;
        }
        console.log(`Reserving ${doc.seq} for id ${saving.id}`)
        return next();
      });
  };
}

export { increment, initialize, reset }

export default Counter;