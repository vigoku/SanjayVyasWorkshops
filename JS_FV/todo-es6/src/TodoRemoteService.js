export default class TodoRemoteService {
    constructor(){

    }

    async getAllTodos(){
        const response = await fetch("http://localhost:10000");
        const result = response.json();
        return result;
    }
}