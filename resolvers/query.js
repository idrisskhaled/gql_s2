import {db} from "../data/bd.js";

export const Query= {
        hello: (_, { name }) => `Hello ${name || 'World'}`,
        getTodo:(_,{id}) => {
            return db.todos.find(element=>element.id==id);
        },
        getUser:(_,{id})=>{
            return db.users.find(element=>element.id==id);
        }

    };