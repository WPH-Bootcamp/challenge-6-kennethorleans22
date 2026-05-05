"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bookManager_1 = require("./functions/bookManager");
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
console.log('Book Management Application - Week 6');
console.log('=====================================');
// Mulai pengujian di bawah ini
// I try to add some books 2 of them have similar names to ensure cases where I filter things:
(0, bookManager_1.addBook)({
    title: 'Kisahku Bermula dari Ubi Celembu',
    author: 'Sir Henry Rivardo',
    publicationYear: 2026,
});
(0, bookManager_1.addBook)({
    title: 'Romance of the Three Kingdoms',
    author: 'Luo Guanzhong',
    publicationYear: 1400,
});
(0, bookManager_1.addBook)({
    title: 'Romance and Love',
    author: 'Luo Yi',
    publicationYear: 1410,
});
// Show all books
console.log('---');
(0, bookManager_1.listBooks)();
// Find book(s) with keyword
console.log('---');
(0, bookManager_1.searchBook)('Romance');
// Find books with no keyword
console.log('---');
(0, bookManager_1.searchBook)();
