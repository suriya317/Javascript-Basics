// see all database
// --> show dbs
// create or access a db
// --> use [db-name]
// read all collections
// --> show collections
// --> two ways
// 1. db.createCollection('task')
// 2. db.(collectionName).insertMany([])

// find the data
db.task.find();
db.task.find({ completed: true });
db.task.find({ _id: Objected("677a19ade1f45f88404eeb86") });
db.task.find().sort({ createdTime: 1 }); //1: dec- 1 asc
db.task.find({ createdTime: { $gt: 173484111 } }); //greater than
db.task.find({ createdTime: { $1t: 1734844111 } }); //lesser than
db.task.find({ createdTime: { $gte: 1734844111 } }); //greater than
db.task.find({ createdTime: { $lte: 1734844111 } }); //lesser than
db.task.find({ completed: false }).count(); //count
db.task.find({ createdTime: { $gt: 1734844171, $1t: 1734761151675 } }); //in
db.task.find({
  createdTime: { $not: { $gt: 1734844171, $lt: 1734761151675 } },
}); //not
db.task.find({
  $or: [
    { createdTime: { $gt: 17434844171, $lt: 1734761151675 } },
    { completed: true },
  ],
}); //or

//update
db.task.updateOne(
  { _id: ObjectId("677a19ade1f45f88404eeb87") },
  { $set: { completed: true } }
);

// delete
db.task.deleteOne({ _id: ObjectId("677a19ade1f45f88404eeb87") });

db.task
  .aggregate([
    {
      $group: {
        _id: "$text",
        duplicate: { $addToSet: "$_id" },
        totalCount: { $sum: 1 },
      },
    },
    {
      $match: {
        totalCount: { $gt: 1 },
      },
    },
  ])
  .forEach((doc) => {
    doc.duplicate.shift();
    db.task.deleteMany({ _id: { $in: doc.duplicate } });
  });
