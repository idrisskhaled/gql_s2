import {db} from "../data/bd.js";

export const User = {
    todos : (user)=>{
        return db.todos.filter((todo)=>todo.user===user.id)
    }
}