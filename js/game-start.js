
// 問題ページ
import { questions } from './data/question.js';
// 

import {
    randomQuestion,
    showQuestion
} from "./game-question.js";



const first = document.getElementById('game-start');
const questionPage = document.getElementById('game-question');
const start = document.getElementById('start-btn');
const end = document.getElementById('game-end');
const answer = document.getElementById('game-answer');
const answerpage2 = document.getElementById('game-answer2');
const data = document.getElementById('game-data');

// スタート画面切り替え＋リセット
start.addEventListener('click', () => {
    first.style.display = 'none';
    questionPage.style.display = 'block';
    end.style.display = 'none';
    answer.style.display = 'none';
    answerpage2.style.display = 'none';
    data.style.display = 'none';

    randomQuestion.splice(0, randomQuestion.length, ...questions.sort(() => Math.random() - 0.5).slice(0, 2));

    showQuestion();
});
//

export {
    first,
    questionPage,
    end,
    answer,
    answerpage2,
    data
};
