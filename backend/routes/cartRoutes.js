const express = require("express");
const router = express.Router();
const Todo= require("../models/cartSchema")


// router.get("/", async(req,res)=> {
//     try{
//         const todos = await Todo.find();
//         res.json(todos);
//     } catch (error) {
//         res.json({message: error })
// ;    }
// });

router.post("/item", async (req, res) => {
    console.log(req.body);;
    const todo = new Todo({
        item: req.body.item,
        qty: req.body.qty,
        price: req.body.qty,
    });

    try{
        console.log(todo);
        const saveTodo = await todo.save();
        res.status(200).json({message: "Item added successfully"});
    } catch(error) {
        res.json({ message: error });
    }
})

module.exports = router;