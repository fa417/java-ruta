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

// 問題ページ
import { questions } from './data/question.js';
// 

// 2ページ目「戻る」
document.getElementById('return1').addEventListener('click', () => {
    answer.style.display = 'block';
    answerpage2.style.display = 'none';
    end.style.display = 'none';
    first.style.display = 'none';
    questionPage.style.display = 'none';
    data.style.display = 'none';
});
// 

// 結果発表ページに戻るボタン
document.getElementById('end-btn2').addEventListener('click', () => {
    end.style.display = 'block';
    answer.style.display = 'none';
    first.style.display = 'none';
    questionPage.style.display = 'none';
    answerpage2.style.display = 'none';
    data.style.display = 'none';
});
//

// 遊んだ記録に飛ぶボタン処理
document.getElementById('data-btn3').addEventListener('click', () => {
    data.style.display = 'block';
    first.style.display = 'none';
    end.style.display = 'none';
    questionPage.style.display = 'none';
    answer.style.display = 'none';
    answerpage2.style.display = 'none';
});
//

// もう１回遊ぶボタン処理
document.getElementById('retry-btn3').addEventListener('click', () => {
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
document.getElementById('home-btn3').addEventListener('click', () => {
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