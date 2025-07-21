import {
  first,
  questionPage,
  end,
  answer,
  answerpage2,
  data
} from './game-start.js';

import {
  countIndex,
  countNumber,
  randomQuestion,
  showQuestion,
  setCountIndex,
  setCountNumber
} from "./game-question.js";

// 問題ページ
import { questions } from './data/question.js';
// 


// 過去の記録表示処理
function getToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate();
  return `${year}-${month}-${day}`;
}

function getMonth() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0')
  return `${year}-${month}`;
}

function score(countNumber) {
  const monthKey = getMonth();
  const todayKey = getToday();
  const data = JSON.parse(localStorage.getItem(monthKey)) || {};

  data[todayKey] = countNumber;
  localStorage.setItem(monthKey, JSON.stringify(data));
}

function loadScore() {
  const monthKey = getMonth();
  const data = JSON.parse(localStorage.getItem(monthKey)) || {};

  console.log(data);
}

const select = document.getElementById('month-choice');
// ダミー
const dummyJuly = {
  "2025-07-01": 10,
  "2025-07-05": 16,
  "2025-07-15": 20
};

const dummyAugust = {
  "2025-08-02": 8,
  "2025-08-07": 16,
  "2025-08-15": 20
};

localStorage.setItem("2025-07", JSON.stringify(dummyJuly));
localStorage.setItem("2025-08", JSON.stringify(dummyAugust));
const allKey = Object.keys(localStorage);

select.innerHTML = '';

allKey.forEach(key => {
  if (/^\d{4}-\d{2}$/.test(key)) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = key;
    select.appendChild(option);

  }
});

function drawGraph(monthKey) {

  // 保存データーそのもの
  const Scoredata = JSON.parse(localStorage.getItem(monthKey)) || {};
  // 
  const graphArea = document.getElementById('bar-graph');
  graphArea.innerHTML = '';


  for (const date in Scoredata) {
    const score = Scoredata[date];

    const barRow = document.createElement('div');
    barRow.style.display = 'flex';
    barRow.classList.add('bar-wrapper');

    const label = document.createElement('div');
    label.textContent = date;
    label.classList.add('label-day');

    const barInner = document.createElement('div');
    barInner.classList.add('bar-inner');

    const bar = document.createElement('div');
    bar.classList.add('bar');

    let scal;
    if (window.innerWidth < 379) {
      scal = 15;
    } else if (window.innerWidth < 767) {
      scal = 18;
    } else if (window.innerWidth < 1024) {
      scal = 28;
    } else {
      scal = 20;
    }

    bar.style.width = `${score * scal}px`;

    const scoreNumber = document.createElement('div');
    scoreNumber.classList.add('score-number');
    scoreNumber.textContent = `${score}点`;

    graphArea.appendChild(barRow);
    barRow.appendChild(label);
    barRow.appendChild(barInner);
    barInner.appendChild(bar);
    barInner.appendChild(scoreNumber);

  }
}
// 

// 最初の表示
window.addEventListener('DOMContentLoaded', () => {
  const graphArea = document.getElementById('bar-graph');

  const newMonth = allKey
    .filter(key => /^\d{4}-\d{2}$/.test(key))
    .sort((a, b) => a.localeCompare(b))
    .reverse()[0];

  select.value = newMonth;
  drawGraph(newMonth);

  select.addEventListener('change', () => {
    drawGraph(select.value);
  });
});
// 


// 結果発表ページに戻るボタン
document.getElementById('end-btn3').addEventListener('click', () => {
  end.style.display = 'block';
  answer.style.display = 'none';
  first.style.display = 'none';
  questionPage.style.display = 'none';
  answerpage2.style.display = 'none';
  data.style.display = 'none';
});
//

// もう１回遊ぶボタン処理
document.getElementById('retry-btn4').addEventListener('click', () => {
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
document.getElementById('home-btn4').addEventListener('click', () => {
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

