import {v4 as uuidv4} from "uuid"

export const Mutation = {
    addTodo: (_,{ addTodoInput },{db,pubSub}) => {
        const todo = {id: uuidv4(),...addTodoInput};
        db.todos.push(todo);
        pubSub.publish("Todo", { Todo : todo , operation : "add" });
        return todo;
    },
    updateTodo : (_,{id,updateTodoInput},{db,pubSub}) =>
        {
            const todo=db.todos.find((todo)=>todo.id==id)
            if(todo === undefined) throw new Error("todo unknown")
            const user=db.users.find((el)=>el.id==todo.user)
            if(user === undefined) throw new Error("user unknown")
            const index= db.todos.findIndex((element)=>element.id==todo.id)
            db.todos.splice(index)
            db.todos.push(id,...updateTodoInput)
            pubSub.publish("Todo", { Todo : todo , operation : "update" });
            return todo
        },
    deleteTodo : (_,{id},{db,pubSub}) =>
    {
        const todo = db.todos.find((todo)=>todo.id===id)
        if(todo === undefined) throw new Error ("Unknown todo")
        const index= db.todos.findIndex((element)=>element.id===todo.id)
        db.todos.splice(index)
        pubSub.publish("Todo", { Todo : todo , operation : "remove" });
        return todo
    }
}