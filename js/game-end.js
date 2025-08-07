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
    countNumber,
    randomQuestion,
    showQuestion,
    setCountIndex,
    setCountNumber,
} from "./game-question.js";

import {
    score,
    updateMonthSelect,
    drawGraph,
    getMonth
} from './game-data.js';

// もう１回遊ぶボタン処理
document.getElementById('retry-btn').addEventListener('click', () => {
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

// 遊んだ記録に飛ぶボタン処理
document.getElementById('data-btn').addEventListener('click', () => {
    score(countNumber); // ←ここで記録するのが正解！

    updateMonthSelect();   // ←セレクト再更新
    drawGraph(getMonth());
    data.style.display = 'block';
    first.style.display = 'none';
    end.style.display = 'none';
    questionPage.style.display = 'none';
    answer.style.display = 'none';
    answerpage2.style.display = 'none';
});
// 

// トップに戻るボタン処理
document.getElementById('home-btn').addEventListener('click', () => {
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