document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const selected = document.querySelector('input[name="answer"]:checked');
  const result = document.getElementById('result');

  if (!selected) {
    result.innerHTML = 'Pilih dulu jawaban!';
    result.className = 'incorrect';
    return;
  }

  if (selected.value === 'A') {
    result.innerHTML = '<strong>Benar!</strong> Jawaban kamu tepat: 55% ; 0,58 ; 0,6 ; 2/3.';
    result.className = 'correct';
  } else {
    result.innerHTML = '<strong>Salah!</strong> Jawaban yang benar adalah: 55% ; 0,58 ; 0,6 ; 2/3.';
    result.className = 'incorrect';
  }
});

document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const selected = document.querySelector('input[name="answer"]:checked');
  const result = document.getElementById('result');

  if (!selected) {
    result.innerHTML = 'Pilih dulu jawaban!';
    result.className = 'incorrect';
    return;
  }

  if (selected.value === 'C') {
    result.innerHTML = '<strong>Benar!</strong> Jawaban kamu tepat: 1/27.';
    result.className = 'correct';
  } else {
    result.innerHTML = '<strong>Salah!</strong> Jawaban yang benar adalah: 1/27.';
    result.className = 'incorrect';
  }
});
