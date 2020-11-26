const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ names: [] }).write();

exports.write = (friendlyName, wish) => {
  name = friendlyName.toLowerCase();

  if (db.get("names").find({ name }).value() !== undefined) {
    db.get("names").remove({ name }).write();
  }
  db.get("names").push({ name, friendlyName, wish }).write();
};

exports.get = (name) => {
  name = name.toLowerCase();

  return db.get("names").find({ name }).value();
};

exports.getAll = () => {
  return db.get("names").sortBy("friendlyName").value();
};

exports.remove = (name) => {
  name = name.toLowerCase();

  db.get("names").remove({ name }).write();
};
