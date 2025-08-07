// 問題ページ
import { questions } from './data/question.js';
// 

import {
    first,
    questionPage,
    end,
    answer,
    answerpage2,
    data
} from './game-start.js';

import {
    showQuestion,
    randomQuestion,
    setCountIndex,
    setCountNumber
} from "./game-question.js";



const answerArea = document.getElementById('answer-area');


// 答え合わせページ
document.getElementById('answer-btn').addEventListener('click', () => {
    answer.style.display = 'block';
    first.style.display = 'none';
    questionPage.style.display = 'none';
    end.style.display = 'none';
    data.style.display = 'none';

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
    data.style.display = 'none';
});
// 

// 結果発表ページに戻るボタン
document.getElementById('end-btn').addEventListener('click', () => {
    end.style.display = 'block';
    answer.style.display = 'none';
    first.style.display = 'none';
    questionPage.style.display = 'none';
    answerpage2.style.display = 'none';
    data.style.display = 'none';
});
//

// 遊んだ記録に飛ぶボタン処理
document.getElementById('data-btn2').addEventListener('click', () => {
    data.style.display = 'block';
    first.style.display = 'none';
    end.style.display = 'none';
    questionPage.style.display = 'none';
    answer.style.display = 'none';
    answerpage2.style.display = 'none';
});
// 

// もう１回遊ぶボタン処理
document.getElementById('retry-btn2').addEventListener('click', () => {
    setCountIndex(0);
    setCountNumber(0);
    document.getElementById('cards-number').textContent = '0枚';

    randomQuestion.length = 0;
    randomQuestion.push(...[...questions].sort(() => Math.random() - 0.5).slice(0, 20));

    end.style.display = 'none';
    questionPage.style.display = 'block';
    answer.style.display = 'none';
    answerpage2.style.display = 'none';
    data.style.display = 'none';

    showQuestion();
});
// 

// トップに戻るボタン処理
document.getElementById('home-btn2').addEventListener('click', () => {
    setCountIndex(0);
    setCountNumber(0);
    document.getElementById('cards-number').textContent = '0枚';

    first.style.display = 'flex';
    end.style.display = 'none';
    questionPage.style.display = 'none';
    answer.style.display = 'none';
    answerpage2.style.display = 'none';
    data.style.display = 'none';
});
// 
