// devolver: de la lista this.students, que para cada Student, este pase por la función displayStudent en Student class, y los una separados por ,
import { Student } from './students.js';

export class StudentList {
    constructor() {
        this.students = [];
    }

    addStudent(estudiante) {
        this.students.push(estudiante);
    }

    listStudents() {
        return this.students.map(estudiante => estudiante.displayStudent()).join(', ');
    }
    // sin instanciar directamente a Student, el código por algún motivo se rompe:
    instanciarStudent(name, grade){
        let nuevoEstudiante = new Student(name, grade);
        this.addStudent(nuevoEstudiante)
    }
}

