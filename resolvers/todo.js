import {db} from "../data/bd.js";

export const Todo = {
    user : (todo)=>{
        return db.users.find((user)=>user.id==todo.user)
    }
}
