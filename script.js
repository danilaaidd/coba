document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const selected = document.querySelector('input[name="answer"]:checked');
  const result = document.getElementById('result');

  if (!selected) {
    result.innerHTML = 'Pilih dulu jawaban!';
    result.className = 'incorrect';
    return;
  }

  if (selected.value === 'D') {
    result.innerHTML = '<strong>Benar!</strong> Jawaban kamu tepat: HCl dan NaOH.';
    result.className = 'correct';
  } else {
    result.innerHTML = '<strong>Salah!</strong> Jawaban yang benar adalah: HCl dan NaOH.';
    result.className = 'incorrect';
  }
});
