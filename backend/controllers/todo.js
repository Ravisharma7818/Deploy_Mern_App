const Todo = require("../models/todo");

exports.getAllTodo = async (req, res) => {




    Todo.find()
        .then((todo) => res.json(todo))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Todo not found", error: err.message })
        );
};

exports.postCreateTodo = async (req, res) => {
    const { title, description } = req.body;
    try {
        const TodoDoc = await Todo.create({
            title,
            description
        });
        res.json(TodoDoc);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }

};

exports.putUpdateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update todo", error: err.message })
        );
};

exports.deleteTodo = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "todo deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};