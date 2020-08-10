"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTasks = getTasks;
exports.getOneTask = getOneTask;
exports.createTask = createTask;
exports.deleteTask = deleteTask;
exports.updateTask = updateTask;

var _database = require("./../database/database");

var _mongodb = require("mongodb");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTasks(_x, _x2) {
  return _getTasks.apply(this, arguments);
}

function _getTasks() {
  _getTasks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var db, tasks;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context.sent;
            _context.next = 6;
            return db.collection('tasks').find().toArray();

          case 6:
            tasks = _context.sent;
            res.json(tasks); // respuesta al cliente

            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _getTasks.apply(this, arguments);
}

function getOneTask(_x3, _x4) {
  return _getOneTask.apply(this, arguments);
}

function _getOneTask() {
  _getOneTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var db, id, task;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context2.sent;
            id = req.params.id; // id de la URL

            console.log(id);
            _context2.next = 8;
            return db.collection('tasks').findOne({
              "_id": (0, _mongodb.ObjectID)(id)
            });

          case 8:
            task = _context2.sent;
            // respuesta al ciente
            res.json({
              "data": task
            });
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return _getOneTask.apply(this, arguments);
}

function createTask(_x5, _x6) {
  return _createTask.apply(this, arguments);
}

function _createTask() {
  _createTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var db, _req$body, name, description, taskCreated;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context3.sent;
            _req$body = req.body, name = _req$body.name, description = _req$body.description; // datos que envia el cliente

            console.log(req.body);
            _context3.next = 8;
            return db.collection('tasks').insertOne({
              "name": name,
              "description": description
            });

          case 8:
            taskCreated = _context3.sent;
            // respuesta al cliente
            res.json({
              "message": "Task created",
              "data": taskCreated.ops[0]
            });
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return _createTask.apply(this, arguments);
}

function deleteTask(_x7, _x8) {
  return _deleteTask.apply(this, arguments);
}

function _deleteTask() {
  _deleteTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var db, id, taskDeleted;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context4.sent;
            id = req.params.id; // id de la URL

            console.log(id);
            _context4.next = 8;
            return db.collection('tasks').deleteOne({
              "_id": (0, _mongodb.ObjectID)(id)
            });

          case 8:
            taskDeleted = _context4.sent;
            // respuesta al cliente
            res.json({
              "message": "Task Deleted",
              "data": taskDeleted.result
            });
            _context4.next = 16;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return _deleteTask.apply(this, arguments);
}

function updateTask(_x9, _x10) {
  return _updateTask.apply(this, arguments);
}

function _updateTask() {
  _updateTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var db, id, _req$body2, name, description, taskUpdated;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context5.sent;
            id = req.params.id; // id de la URL

            console.log(id);
            _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description;
            console.log(req.body);
            _context5.next = 10;
            return db.collection('tasks').updateOne({
              "_id": (0, _mongodb.ObjectID)(id)
            }, {
              $set: {
                "name": name,
                "description": description
              }
            });

          case 10:
            taskUpdated = _context5.sent;
            // respuesta al cliente
            res.json({
              "message": "Task updated",
              "data": taskUpdated.result
            });
            _context5.next = 18;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 14]]);
  }));
  return _updateTask.apply(this, arguments);
}