let edad = 65;

if (edad === 0) {
    console.log('\nEres recien nacid@\n');
} else if (edad >= 1 && edad < 12) {
    console.log('\nEres niñ@\n');
} else if (edad >= 12 && edad < 18) {
    console.log('\nEres adolescente\n');
} else if (edad >= 18 && edad < 30) {
    console.log('\nEres joven\n');
} else if (edad >= 30 && edad < 60) {
    console.log('\nEres chav@ ruc@\n');
} else if (edad >= 60 && edad < 100) {
    console.log('\nEres viej@\n');
} else if (edad >= 100) {
    console.log('\nYa necesitas que te entierren debajo de la tierra\n');
} else {
    console.log('Error: Escribe la edad correcta')
}