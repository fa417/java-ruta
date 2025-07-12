import { questions } from "./question.js";

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const from = params.get('from');

  const backLink = document.getElementById('back-home');
  const isFromPortfolio = from === 'portfolio';
  const isSP = window.matchMedia('(max-width: 768px)').matches;

  if (isFromPortfolio && isSP) {
    backLink.style.display = 'block';
  }

  const first = document.getElementById('game-start');
  const questionPage = document.getElementById('question');
  const start = document.getElementById('start-btn');
  const end = document.getElementById('game-end');
  const answer = document.getElementById('game-answer');
  const answerpage2 = document.getElementById('game-answer2');

  const questionContent = document.getElementById('question-count');
  const questionText = document.getElementById('question-text');
  const nextBanner = document.getElementById('next-banner');
  const answerArea = document.getElementById('answer-area');

  let randomQuestion = [];

  // スタート画面切り替え＋リセット
  start.addEventListener('click', () => {
    first.style.display = 'none';
    questionPage.style.display = 'block';
    end.style.display = 'none';
    answer.style.display = 'none';
    answerpage2.style.display = 'none';

    countIndex = 0;
    countNumber = 0;
    randomQuestion = [...questions].sort(() => Math.random() - 0.5).slice(0, 20);

    showQuestion();
  });
  // 

  let countIndex = 0;
  let countNumber = 0;

  // 問題画面
  function showQuestion() {
    const q = randomQuestion[countIndex];

    document.getElementById('coment').style.display = 'none';
    document.getElementById('showresult').style.display = 'none';

    questionContent.textContent = `第${countIndex + 1}問`;
    questionText.textContent = q.text;

    const cardArea = document.getElementById('card-area');
    cardArea.innerHTML = '';

    const correctBanner = document.getElementById('correct-banner');
    const incorrectBanner = document.getElementById('incorrect-banner');
    const action = document.getElementById('action');


    correctBanner.style.display = 'none';
    incorrectBanner.style.display = 'none';
    nextBanner.style.display = 'none';
    action.style.display = 'none';

    q.answer.forEach((choice) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.textContent = choice.text;

      const randomRotation = Math.floor(Math.random() * 30) - 15;
      card.style.transform = `rotate(${randomRotation}deg)`;

      card.addEventListener('click', () => {
        const allCards = document.querySelectorAll('.card');
        allCards.forEach(c => c.style.pointerEvents = 'none');

        if (choice.isCorrect) {
          correctBanner.style.display = 'block';
          action.style.display = 'block';

          countNumber++;
          const cardsNumber = document.getElementById('cards-number');
          cardsNumber.textContent = `${countNumber}枚`;

        } else {
          incorrectBanner.style.display = 'block';
          action.style.display = 'block';
        }

        if (countIndex < randomQuestion.length - 1) {
          nextBanner.style.display = 'block';
        } else {
          const coment = document.getElementById('coment');
          const showresult = document.getElementById('showresult');

          coment.style.display = 'block';
          showresult.style.display = 'block';;
        }
      });
      cardArea.appendChild(card);
    });
  }
  // 

  // questionから結果を見るボタン処理
  document.getElementById('showresult').addEventListener('click', () => {
    questionPage.style.display = 'none';
    document.getElementById('game-end').style.display = 'block';
    document.getElementById('acquisition').textContent = `${countNumber}枚`;
    document.getElementById('not-earned').textContent = `${20 - countNumber}枚`;

    const allBanner = document.getElementById('all-banner');
    allBanner.innerHTML = `<span style="font-size: 16px;">20枚</span> / ${countNumber}枚獲得`;
  });
  // 

  // 問題数カウント
  nextBanner.addEventListener('click', () => {
    countIndex++;
    showQuestion();
  });
  // 

  // もう１回遊ぶボタン処理
  document.getElementById('retry-btn').addEventListener('click', () => {
    countIndex = 0;
    countNumber = 0;
    document.getElementById('cards-number').textContent = '0枚';

    randomQuestion.length = 0;
    randomQuestion.push(...[...questions].sort(() => Math.random() - 0.5).slice(0, 20));

    end.style.display = 'none';
    questionPage.style.display = 'block';
    answer.style.display = 'none';
    answerpage2.style.display = 'none';

    showQuestion();
  });

  document.getElementById('retry-btn-answer').addEventListener('click', () => {
    countIndex = 0;
    countNumber = 0;
    document.getElementById('cards-number').textContent = '0枚';

    randomQuestion.length = 0;
    randomQuestion.push(...[...questions].sort(() => Math.random() - 0.5).slice(0, 20));

    end.style.display = 'none';
    questionPage.style.display = 'block';
    answer.style.display = 'none';
    answerpage2.style.display = 'none';

    showQuestion();
  });

  document.getElementById('retry-btn-answer2').addEventListener('click', () => {
    countIndex = 0;
    countNumber = 0;
    document.getElementById('cards-number').textContent = '0枚';

    randomQuestion.length = 0;
    randomQuestion.push(...[...questions].sort(() => Math.random() - 0.5).slice(0, 20));

    end.style.display = 'none';
    questionPage.style.display = 'block';
    answer.style.display = 'none';
    answerpage2.style.display = 'none';

    showQuestion();
  });
  // 

  // トップに戻るボタン処理
  document.getElementById('home-btn').addEventListener('click', () => {
    countIndex = 0;
    countNumber = 0;
    document.getElementById('cards-number').textContent = '0枚';

    first.style.display = 'flex';
    end.style.display = 'none';
    questionPage.style.display = 'none';
    answer.style.display = 'none';
    answerpage2.style.display = 'none';
  });

  document.getElementById('home-btn-answer').addEventListener('click', () => {
    countIndex = 0;
    countNumber = 0;
    document.getElementById('cards-number').textContent = '0枚';

    first.style.display = 'flex';
    end.style.display = 'none';
    questionPage.style.display = 'none';
    answer.style.display = 'none';
    answerpage2.style.display = 'none';
  });

  document.getElementById('home-btn-answer2').addEventListener('click', () => {
    countIndex = 0;
    countNumber = 0;
    document.getElementById('cards-number').textContent = '0枚';

    first.style.display = 'flex';
    end.style.display = 'none';
    questionPage.style.display = 'none';
    answer.style.display = 'none';
    answerpage2.style.display = 'none';
  });
  // 

  // 答え合わせページ
  document.getElementById('answer-btn').addEventListener('click', () => {
    answer.style.display = 'block';
    first.style.display = 'none';
    questionPage.style.display = 'none';
    end.style.display = 'none';

    answerArea.innerHTML = '';

    // 1ページ目
    randomQuestion.slice(0, 10).forEach((q, index) => {
      const correctAnswer = q.answer.find(ans => ans.isCorrect).text;

      const block = document.createElement('div');
      block.className = 'answer-block';

      const number = document.createElement('p');
      number.className = 'count-number';
      number.textContent = `第${index + 1}問`;

      const question = document.createElement('p');
      question.className = 'question-text';
      question.textContent = q.text;

      const correct = document.createElement('p');
      correct.className = 'answer-correct';
      correct.textContent = `正解：${correctAnswer}`;

      const explanation = document.createElement('p');
      explanation.className = 'answer-explanation';
      explanation.innerHTML = `<span class="label">解説</span>${q.explanation}`;

      block.appendChild(number);
      block.appendChild(question);
      block.appendChild(correct);
      block.appendChild(explanation);

      answerArea.appendChild(block);
    });

    // 2ページ目
    randomQuestion.slice(10, 20).forEach((q, index) => {
      const correctAnswer = q.answer.find(ans => ans.isCorrect).text;

      const block = document.createElement('div');
      block.className = 'answer-block';

      const number = document.createElement('p');
      number.className = 'count-number';
      number.textContent = `第${index + 11}問`;

      const question = document.createElement('p');
      question.className = 'question-text';
      question.textContent = q.text;

      const correct = document.createElement('p');
      correct.className = 'answer-correct';
      correct.textContent = `正解：${correctAnswer}`;

      const explanation = document.createElement('p');
      explanation.className = 'answer-explanation';
      explanation.innerHTML = `<span class="label">解説</span>${q.explanation}`;

      block.appendChild(number);
      block.appendChild(question);
      block.appendChild(correct);
      block.appendChild(explanation);

      document.getElementById('answer-area2').appendChild(block);
    });
  });
  // 

  // 1ページ目「次へ」
  document.getElementById('next2').addEventListener('click', () => {
    answerpage2.style.display = 'block';
    end.style.display = 'none';
    answer.style.display = 'none';
    first.style.display = 'none';
    questionPage.style.display = 'none';
  });
  // 

  // 2ページ目「戻る」
  document.getElementById('return1').addEventListener('click', () => {
    answer.style.display = 'block';
    answerpage2.style.display = 'none';
    end.style.display = 'none';
    first.style.display = 'none';
    questionPage.style.display = 'none';
  });
  // 

  // 結果発表ページに戻るボタン
  document.getElementById('end-btn').addEventListener('click', () => {
    end.style.display = 'block';
    answer.style.display = 'none';
    first.style.display = 'none';
    questionPage.style.display = 'none';
    answerpage2.style.display = 'none';
  });

  document.getElementById('end-btn2').addEventListener('click', () => {
    end.style.display = 'block';
    answer.style.display = 'none';
    first.style.display = 'none';
    questionPage.style.display = 'none';
    answerpage2.style.display = 'none';
  });
  //
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./js/service-worker.js')
    .then(reg => {
      console.log('✅ Service Worker registered:', reg.scope);
    })
    .catch(err => {
      console.log('❌ Service Worker registration failed:', err);
    });
}