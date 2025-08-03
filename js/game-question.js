// 問題ページ
import { questionPage } from './game-start.js';
// 

// 問題画面
export function showQuestion() {
    const q = randomQuestion[countIndex];

    document.getElementById('coment').style.display = 'none';
    document.getElementById('showresult').style.display = 'none';

    const questionContent = document.getElementById('question-count');
    const questionText = document.getElementById('question-text');
    const nextBanner = document.getElementById('next-banner');

    // 問題数カウント
    if (!nextBanner.hasAttribute('data-set')) {
        nextBanner.addEventListener('click', () => {
            countIndex++;
            showQuestion();
        });
        nextBanner.setAttribute('data-set', 'true');
    }

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

    [...q.answer].sort(() => Math.random() - 0.5).forEach((choice) => {
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

// 0にしてからエクスポート
export let countIndex = 0;
export let countNumber = 0;
export let randomQuestion = [];

export function setCountIndex(val) {
    countIndex = val;
}

export function setCountNumber(val) {
    countNumber = val;
}
// 