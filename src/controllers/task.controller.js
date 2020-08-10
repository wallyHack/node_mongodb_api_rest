
// funciones útiles para administrar tareas

// database conection
import { connect } from './../database/database';
import { ObjectID } from 'mongodb';

export async function getTasks(req, res){
    try {
        const db = await connect();
        const tasks = await db.collection('tasks').find().toArray();
        res.json(tasks); // respuesta al cliente
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });        
    }
}

export async function getOneTask(req, res){
   try {
        const db = await connect();
        const { id } = req.params; // id de la URL
        console.log(id);
        const task = await db.collection('tasks').findOne({"_id": ObjectID(id)});
        // respuesta al ciente
        res.json({
            "data": task
        });
   } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });        
    }
}

export async function createTask(req, res){
    try {
        const db = await connect();
        const { name, description } = req.body; // datos que envia el cliente
        console.log(req.body);
        const taskCreated = await db.collection('tasks').insertOne({"name": name, "description": description});
        // respuesta al cliente
        res.json({
            "message": "Task created",
            "data": taskCreated.ops[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });     
    }
}

export async function deleteTask(req, res){
   try {
        const db = await connect();
        const { id } = req.params; // id de la URL
        console.log(id);
        const taskDeleted = await db.collection('tasks').deleteOne({"_id": ObjectID(id)});
        // respuesta al cliente
        res.json({
            "message": "Task Deleted",
            "data": taskDeleted.result
        });
   } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });   
   }
}

export async function updateTask(req, res){
    try {
        const db = await connect();
        const { id } = req.params; // id de la URL
        console.log(id);
        const { name, description } = req.body;
        console.log(req.body);
        const taskUpdated = await db.collection('tasks').updateOne({"_id": ObjectID(id)}, {$set: {"name": name, "description": description}});

        // respuesta al cliente
        res.json({
            "message": "Task updated",
            "data": taskUpdated.result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });   
    }
}