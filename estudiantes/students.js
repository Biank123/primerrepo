export class Student {
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }
    displayStudent(){
        return `Estudiante: ${this.name}, Nota: ${this.grade} / 4`;
    }
}