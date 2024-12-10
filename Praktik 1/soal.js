"use strict";
// 1. Deklarasikan variabel berikut dengan tipe data yang sesuai:
// 1. Variabel username yang berisi string "Alice".
// 2. Variabel age yang berisi angka 25.
// 3. Variabel isAdmin yang berisi nilai boolean true.
// 4. Variabel colors yang berisi array string ["red", "green", "blue"].
const username = "Alice";
const age = 25;
const isAdmin = true;
const colors = ["red", "green", "blue"];
// 2. Buat fungsi bernama multiply yang menerima dua parameter bertipe number dan mengembalikan hasil perkalian keduanya.
function multiply(a, b) {
    return a * b;
}
const myCar = {
    brand: "Toyota",
    model: "Toyota",
    year: 2022,
};
// 4. Buat variabel bernama userId yang dapat bertipe string atau number. Berikan nilai awal "123".
const userId = "123";
// 5. Buat class bernama Animal dengan properti name (string) dan method makeSound yang mencetak "Some generic sound". Lalu, buat instance dari class tersebut.
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Some generic sound");
    }
}
const myAnimal = new Animal("Lion");
myAnimal.makeSound();
// 6. Buat class Dog yang mewarisi dari class Animal. Override method makeSound untuk mencetak "Woof!".
class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}
const myDog = new Dog("Shiba Inu");
myDog.makeSound();
// 7. Buat fungsi generic bernama identity yang menerima satu parameter dan mengembalikan parameter tersebut.
function identity(value) {
    return value;
}
const resultRedult = identity("Hello World!");
const poinA = {
    x: 10,
    y: 20,
};
// 9. Buat class BankAccount dengan:
// 1. Properti private balance (number).
// 2. Method deposit untuk menambah saldo.
// 3. Method getBalance untuk mendapatkan saldo.
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
}
const myAccount = new BankAccount(1000);
console.log(myAccount.getBalance());
myAccount.deposit(500);
console.log(myAccount.getBalance());
const user = {
    id: 1,
    name: "Alice",
};
const profileUpdate = {
    name: "Alice",
};
// 12. Buat enum Role dengan nilai:
// 1. Admin
// 2. User
// 3. Guest
// Lalu buat variabel currentRole dengan nilai Role.User.
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
const currentRole = Role.User;
const employeeManager = {
    id: 1,
    name: "Alice",
    salary: 5000,
    department: "HR",
};
// 14. Buat sebuah objek person dengan properti opsional address. Gunakan optional chaining untuk mengakses city di dalam address.
const userObject = {
    name: "Alice",
    age: 30,
    // address: "Bandung",
};
// 15. Buat fungsi calculateDiscount yang menerima dua parameter:
// 1. price (number)
// 2. discount (number, default: 10)
// Fungsi mengembalikan harga setelah diskon.
function calculateDiscount(price, discount = 10) {
    return price - (price * discount / 100);
}
