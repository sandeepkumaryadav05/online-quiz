    const questions = document.querySelectorAll('.question');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    let current = 0;

    function showQuestion(index) {
      questions.forEach((q, i) => {
        q.classList.toggle('active', i === index);
      });
      prevBtn.disabled = index === 0;
      nextBtn.style.display = index === questions.length - 1 ? 'none' : '';
      submitBtn.style.display = index === questions.length - 1 ? '' : 'none';
    }

    prevBtn.addEventListener('click', () => {
      if (current > 0) {
        current--;
        showQuestion(current);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (current < questions.length - 1) {
        current++;
        showQuestion(current);
      }
    });
    document.getElementById('quizForm').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') e.preventDefault();
    });
    showQuestion(current);