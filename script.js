// Untuk soal 1
document.getElementById('quiz-form-1').addEventListener('submit', function(e) {
    e.preventDefault();

    const selected = document.querySelector('input[name="answer1"]:checked');
    const result = document.getElementById('result1');

    if (!selected) {
        result.innerHTML = 'Pilih dulu jawaban!';
        result.className = 'incorrect';
        return;
    }

    if (selected.value == 'A') {
        result.innerHTML = '<strong>Benar!</strong> Jawaban kamu tepat: 55%; 0,58; 0,6; 2/3.';
        result.className = 'correct';
    } else {
        result.innerHTML = '<strong>Salah!</strong> Jawaban yang benar adalah: 55%; 0,58; 0,6; 2/3.';
        result.className = 'incorrect';
    }
});

// Untuk soal 2
document.getElementById('quiz-form-2').addEventListener('submit', function(e) {
    e.preventDefault();

    const selected = document.querySelector('input[name="answer2"]:checked');
    const result = document.getElementById('result2');

    if (!selected) {
        result.innerHTML = 'Pilih dulu jawaban!';
        result.className = 'incorrect';
        return;
    }

    if (selected.value == 'B') { // Jawaban B untuk soal ke-2
        result.innerHTML = '<strong>Benar!</strong> Jawaban kamu tepat: 1/27.';
        result.className = 'correct';
    } else {
        result.innerHTML = '<strong>Salah!</strong> Jawaban yang benar adalah: 1/27.';
        result.className = 'incorrect';
    }
});
