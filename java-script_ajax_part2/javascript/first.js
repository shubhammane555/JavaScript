function Person(obj, path){
    this.obj = obj;
    this.path = path;

    let details = ()=>{
        if(this.obj === null || this.obj === undefined){
            return false;
        }
        else if(this.obj[firstName] === undefined || this.obj[firstName] === null){
            return false;
        }
        else{
            return this.obj[firstName];
        }
    }
}

let name = {
    firstName : "shubham",
}

let p = new Person(name , "abc");
console.log(p.details());