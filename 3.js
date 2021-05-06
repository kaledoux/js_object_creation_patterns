function Person(first, last, age, gender) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  console.log(this.firstName + ' ' + this.lastName);
}

Person.prototype.communicate = function() {
  console.log('communicating');
}

Person.prototype.eat = function() {
  console.log('eating');
}

Person.prototype.sleep = function() {
  console.log('sleeping');
}

function Doctor(first, last, age, gender, specialization) {
  Person.call(this, first, last, age, gender)
  this.specialization = specialization;
}
Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function() {
  console.log('you have a case of the Mondays...');
}

function Professor(first, last, age, gender, subject) {
  Person.call(this, first, last, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
  console.log('teaching');
}

function Student(first, last, age, gender, degree) {
  Person.call(this, first, last, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = ()=> console.log('studying');

function GraduateStudent(first, last, age, gender, gradDegree) {
  Student.call(this, first, last, age, gender);
  this.gradDegree = gradDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;
GraduateStudent.prototype.research = ()=> console.log('researching');

// class Person {
//   constructor(first, last, age, gender) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.gender = gender;
//   }
//   fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
//   communicate() {
//     console.log('Communicating');
//   }
//   eat() {
//     console.log('eating');
//   }
//   sleep() {
//     console.log('sleeping');
//   }
// }
// 
// class Doctor extends Person {
//   constructor(first, last, age, gender, specialization) {
//     super(first, last, age, gender);
//     this.specialization = specialization;
//   }
//   diagnose() {
//     console.log('you have a case of the Mondays...');
//   }
// }
// 
// class Professor extends Person {
//   constructor(first, last, age, gender, subject) {
//     super(first, last, age, gender);
//     this.subject = subject;
//   }
//   teach() {
//     console.log('I am teaching');
//   }
// }
// class Student extends Person {
//   constructor(first, last, age, gender, degree) {
//     super(first, last, age, gender);
//     this.degree = degree;
//   }
//   study() {
//     console.log('I am studying');
//   }
// }
// 
// class GraduateStudent extends Student {
//   constructor(first, last, age, gender, graduateDegree) {
//     super(first, last, age, gender);
//     this.graduateDegree = graduateDegree;
//   }
//   research() {
//     console.log('I am researching');
//   }
// }
// const person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

// const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'
// 
const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
