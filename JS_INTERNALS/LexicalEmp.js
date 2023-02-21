function Employee(id, name){
    this.id = id;
    this.name = name;

    console.log(this.id, this.name);

    function printf() {

        console.log(this.id, this.name);

        //Lex env is printf
        printlng = () => {
            console.log(this.id, this.name);
        }
        printlng(); 
    }

    // lex envionment is Employee function
    printl = () => {
        console.log(this.id, this.name);
    }

    printf();
    printl();
}
// lex scope ends

var eich = new Employee(1, "Brendan");
//eich.printf() -> cannot call 

println = () => {
    console.log(this.id, this.name);
}
println(); /// anonymous object scope