import { Student } from './students.js';
import { StudentList } from './studentList.js';

let instanciaDeList = new StudentList();

let Bianca = new Student("Bianca", 4);
let Pepita = new Student("Pepita", 3);
let Yuyu = new Student("Yuyu", 2);

instanciaDeList.addStudent(Bianca);
instanciaDeList.addStudent(Pepita);
instanciaDeList.addStudent(Yuyu);

let listadoGrupo = instanciaDeList.listStudents();
console.log(listadoGrupo);