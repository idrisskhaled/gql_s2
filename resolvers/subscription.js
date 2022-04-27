export const Subscription = {
    addTodo: {
        subscribe (parent, args, { pubSub }, info) {
            return pubSub.asyncIterator('Todo');
        }
    },
    updateTodo: {
        subscribe (parent, args, { pubSub }, info) {
            return pubSub.asyncIterator('Todo');
        }
    },
    removeTodo:  {
        subscribe (parent, args, { pubSub }, info) {
            return pubSub.asyncIterator('Todo');
        }
    }
}