// // class students {
// //   // name, major, age, gender

// //   //properties
// //   name = "Mg Mg";
// //   major = "SWD";
// //   age = 18;
// //   gender = "male";

// //   //constructor
// //   constructor(x) {
// //     console.log("I'm constructor" , x);
// //   }

// //   //methods
// //   eat() {
// //     return this.name + " can eat";
// //   }

// //   learn() {
// //     return this.name + " can learn " + this.major;
// //   }
// // }

// // const st = new students(12);
// // // // console.table(st);

// // // console.log(st.name);
// // // console.log(st.eat());
// // console.log(st.learn());

// class Student {
//   //male = Mr, female = Mis

//   languages = {
//     SWD: ["HTML", "CSS", "JS"],
//   };

//   constructor(name, age, gender, major) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.major = major;

//     this.genderPrefix = gender === "male" ? "Mr " : "Mrs ";
//     this.fullName = this.genderPrefix + this.name;
//   }

//   learn() {
//     return ` ${this.name} can learn ${this.major} `;
//   }
// }

// const st1 = new Student("Mg Mg", 21, "male", "SWD");

// const st2 = new Student("Su Su", 28, "female", "wAD");

// const st3 = new Student("Kyaw Kyaw", 17, "male", "FWD");

// console.log(st1.fullName);
// console.log(st2.fullName);
// console.log(st3.fullName);

// // console.log(st1. learn());
// // console.log(st2. learn());
// // console.log(st3. learn());

// class Monitor extends Student {
//   section = "weekday";
// }

// const mt1 = new Monitor("Aung Aung", 30, "male", "WAD")

// console.log(mt1)

// class Test {
//   #x = 5;

//   getX() {
//     return this.#x +10;
//   }
//   setX(newX) {
//     this.#x = newX;
//     return this.#x;
//   }
// }

// const test = new Test;

// console.log(test.getX());
// console.log(test.setX(10));
// console.log(test.getX());

class Student {
  static Uniform = "green and white";

  static try() {
    return `Student much be try`
  }

  languages = {
    SWD: ["HTML", "CSS", "JS"],
    WAD: ["PHP", "SQL"],
  };

  prefixes = {
    Male: ["Mr "],
    Female: ["Miss "],
  };

  constructor(name, age, gender, major) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.major = major;
    this.genderPrefix = this.prefixes[this.gender];
    this.fullName = this.genderPrefix + name;
    this.languages = this.languages[this.major];
  }

  learn() {
    return `My name is ${this.fullName} and I'm learning ${
      this.major
    } including ${this.languages[this.major]}.`;
  }

  introduction() {
    return `My name is ${this.fullName} and ${this.age} year${
      this.age > 1 ? "s" : ""
    } old. Now I'm learning ${this.major} including ${
      this.languages[this.major]
    }.`;
  }
}

// const st1 = new Student("Ko Htet", 1, "Male", "SWD");
// const st2 = new Student("Mya Mya", 31, "Female", "WAD");
// const st3 = new Student("Ko Ye", 11, "Male", "SWD");

// console.log(st1);
// console.log(st1.learn());
// console.log(st1.introduction());

// console.log(st2);
// console.log(st2.learn());

// console.log(st3);
// console.log(st3.learn());

class Monitor extends Student {
  section = "weekday";
}

const mt1 = new Monitor("Kaung", 41, "Male", "SWD");

// console.log(mt1);

console.log(Student.Uniform)
console.log(Student.try())

const d = new Date()
console.log(d.getYear() + 1900)