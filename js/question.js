// 問題100問
export const questions = [
  {
    text: 'filterの説明で正しいものは？',
    answer: [
      { text: '配列の中から条件に合う要素だけ取り出す', isCorrect: true },
      { text: '配列の要素を逆順に並べる', isCorrect: false },
      { text: 'すべての要素を足し合わせる', isCorrect: false },
      { text: '条件に一致しない要素を削除する', isCorrect: false }
    ],
    explanation: 'filter() は、指定した条件に合う要素だけを取り出して新しい配列を作るメソッドです。元の配列は変更されません。'
  },
  {
    text: 'mapの説明で正しいものは？',
    answer: [
      { text: '配列の各要素に処理をして新しい配列を作る', isCorrect: true },
      { text: '配列をソートする', isCorrect: false },
      { text: '要素の一部を削除する', isCorrect: false },
      { text: '重複する値を取り除く', isCorrect: false }
    ],
    explanation: 'map() は、配列の全ての要素に関数を実行し、その結果を新しい配列として返すメソッドです。元の配列には影響しません。'
  },
  {
    text: 'forEachの正しい使い方は？',
    answer: [
      { text: '配列のすべての要素に対して関数を実行する', isCorrect: true },
      { text: '配列の特定の要素のみ処理する', isCorrect: false },
      { text: '配列を文字列に変換する', isCorrect: false },
      { text: '配列に要素を追加する', isCorrect: false }
    ],
    explanation: 'forEach() は配列のすべての要素に対して1回ずつ関数を実行するためのメソッドです。戻り値は返しません。'
  },
  {
    text: 'reduceの説明で正しいのは？',
    answer: [
      { text: '配列の各要素を使って1つの値にまとめる', isCorrect: true },
      { text: '要素を文字列に変換する', isCorrect: false },
      { text: '要素をフィルタリングする', isCorrect: false },
      { text: '要素を並び替える', isCorrect: false }
    ],
    explanation: 'reduce() は配列のすべての要素を、1つの値にまとめるために使います。合計や平均を出すのによく使われます。'
  },
  {
    text: 'includesの説明として正しいものは？',
    answer: [
      { text: '配列に特定の値が含まれているかを判定する', isCorrect: true },
      { text: '配列に新しい値を追加する', isCorrect: false },
      { text: '配列の先頭の値を削除する', isCorrect: false },
      { text: '配列の長さを取得する', isCorrect: false }
    ],
    explanation: 'includes() は配列の中に特定の値があるかどうかを true または false で返すメソッドです。文字列にも使えます。'
  },
  {
    text: 'pushの機能はどれ？',
    answer: [
      { text: '配列の末尾に要素を追加する', isCorrect: true },
      { text: '配列の最初に要素を追加する', isCorrect: false },
      { text: '配列を結合する', isCorrect: false },
      { text: '配列を並び替える', isCorrect: false }
    ],
    explanation: 'push() は配列の一番最後に新しい要素を追加し、追加後の配列の長さを返すメソッドです。'
  },
  {
    text: 'popの動作はどれ？',
    answer: [
      { text: '配列の最後の要素を取り出して削除する', isCorrect: true },
      { text: '配列の最初の要素を削除する', isCorrect: false },
      { text: '配列を逆順に並び替える', isCorrect: false },
      { text: '配列の要素数を取得する', isCorrect: false }
    ],
    explanation: 'pop() は配列の最後の要素を削除し、その削除した要素を返すメソッドです。元の配列は変化します。'
  },
  {
    text: 'shiftの説明で正しいのは？',
    answer: [
      { text: '配列の先頭の要素を削除して返す', isCorrect: true },
      { text: '配列に要素を追加する', isCorrect: false },
      { text: '配列を結合する', isCorrect: false },
      { text: '配列から重複を削除する', isCorrect: false }
    ],
    explanation: 'shift() は配列の最初の要素を削除し、その削除した要素を返します。元の配列は変化します。'
  },
  {
    text: 'unshiftの正しい使い方は？',
    answer: [
      { text: '配列の先頭に要素を追加する', isCorrect: true },
      { text: '配列の末尾から要素を削除する', isCorrect: false },
      { text: '配列を逆順にする', isCorrect: false },
      { text: '配列を空にする', isCorrect: false }
    ],
    explanation: 'unshift() は配列の先頭に1つ以上の要素を追加し、新しい配列の長さを返します。'
  },
  {
    text: 'lengthプロパティの意味は？',
    answer: [
      { text: '配列や文字列の長さを取得する', isCorrect: true },
      { text: '配列に新しい要素を追加する', isCorrect: false },
      { text: '配列の中身をコピーする', isCorrect: false },
      { text: '文字列を数値に変換する', isCorrect: false }
    ],
    explanation: 'length プロパティは、配列の要素数や文字列の文字数を取得するのに使われます。'
  },
  {
    text: 'typeof演算子の使い方は？',
    answer: [
      { text: '値のデータ型を文字列で返す', isCorrect: true },
      { text: '変数を削除する', isCorrect: false },
      { text: '配列の長さを取得する', isCorrect: false },
      { text: '関数を実行する', isCorrect: false }
    ],
    explanation: "typeof は、与えられた値のデータ型（number, string, boolean など）を文字列として返す演算子。変数や値の型を調べたいときに使う。"
  },
  {
    text: 'constで宣言された変数について正しいのは？',
    answer: [
      { text: '再代入できない', isCorrect: true },
      { text: '再宣言できる', isCorrect: false },
      { text: '再代入できる', isCorrect: false },
      { text: 'ブロックスコープを持たない', isCorrect: false }
    ],
    explanation: "const で宣言した変数は再代入できない。再宣言もできず、ブロックスコープを持つ。主に定数の定義に使われる。"
  },
  {
    text: 'NaNの意味として正しいのは？',
    answer: [
      { text: '数値ではないことを示す', isCorrect: true },
      { text: 'nullと同じ意味', isCorrect: false },
      { text: '未定義の変数', isCorrect: false },
      { text: '空文字列', isCorrect: false }
    ],
    explanation: "NaN は 'Not a Number' の略で、数値として不正な演算の結果に現れる特殊な値。数値型には属するが有効な数値ではない。"
  },
  {
    text: '=== の特徴は？',
    answer: [
      { text: '値と型の両方を比較する', isCorrect: true },
      { text: '値のみを比較する', isCorrect: false },
      { text: '変数の宣言に使う', isCorrect: false },
      { text: '関数の呼び出しに使う', isCorrect: false }
    ],
    explanation: "=== は厳密等価演算子で、値だけでなく型も同時に比較する。型が異なる場合は false になる。"
  },
  {
    text: 'Math.random() は何を返す？',
    answer: [
      { text: '0以上1未満のランダムな数', isCorrect: true },
      { text: '1以上のランダムな整数', isCorrect: false },
      { text: '0から100の整数', isCorrect: false },
      { text: 'ランダムな配列', isCorrect: false }
    ],
    explanation: "Math.random() は 0以上1未満のランダムな小数を返す関数。整数が必要な場合は別途 Math.floor() や Math.round() と組み合わせる。"
  },
  {
    text: 'setTimeoutの役割は？',
    answer: [
      { text: '指定時間後に処理を実行する', isCorrect: true },
      { text: '即時に処理を実行する', isCorrect: false },
      { text: 'イベントをキャンセルする', isCorrect: false },
      { text: '処理をループさせる', isCorrect: false }
    ],
    explanation: "setTimeout は、指定したミリ秒後に関数などの処理を1回だけ実行するためのタイマー関数。"
  },
  {
    text: 'isNaN関数の正しい用途は？',
    answer: [
      { text: '値がNaNかどうかを判定する', isCorrect: true },
      { text: '文字列の長さを調べる', isCorrect: false },
      { text: '数値を丸める', isCorrect: false },
      { text: '日付を取得する', isCorrect: false }
    ],
    explanation: "isNaN 関数は、与えられた値が NaN（数値ではない）かどうかを判定する。数値に変換できない場合に true を返す。"
  },
  {
    text: '配列の要素を逆順にするには？',
    answer: [
      { text: 'reverse()を使う', isCorrect: true },
      { text: 'slice()を使う', isCorrect: false },
      { text: 'concat()を使う', isCorrect: false },
      { text: 'join()を使う', isCorrect: false }
    ],
    explanation: "reverse() は配列の要素を逆順に並べ替えるメソッドで、元の配列自体を変更する。"
  },
  {
    text: 'nullの正しい説明は？',
    answer: [
      { text: '意図的に値がないことを表す', isCorrect: true },
      { text: '未定義の状態を表す', isCorrect: false },
      { text: '0の代わりに使う値', isCorrect: false },
      { text: 'falseと同じ意味', isCorrect: false }
    ],
    explanation: "null は、開発者が意図的に『値がない』ことを示すために使う特別な値。undefinedとは意味が異なる。"
  },
  {
    text: 'undefinedの意味として正しいのは？',
    answer: [
      { text: '値が設定されていないことを表す', isCorrect: true },
      { text: '空文字列', isCorrect: false },
      { text: 'nullと同じ', isCorrect: false },
      { text: '0の別名', isCorrect: false }
    ],
    explanation: "undefined は、変数が宣言されたけど値がまだ設定されていないときに自動的に与えられる値。nullとは異なる。"
  },
  {
    text: 'switch文の用途は？',
    answer: [
      { text: '複数の条件分岐を簡潔に書ける', isCorrect: true },
      { text: '繰り返し処理を行う', isCorrect: false },
      { text: '関数を定義する', isCorrect: false },
      { text: 'イベントを検知する', isCorrect: false }
    ],
    explanation: "switch文は、与えられた値に応じて複数の条件分岐を簡潔に記述できる構文。caseごとに処理を分けて書く。"
  },
  {
    text: 'イベントリスナーaddEventListenerの正しい使い方は？',
    answer: [
      { text: 'イベントが起きたときに処理を登録する', isCorrect: true },
      { text: '変数を定義する', isCorrect: false },
      { text: 'ページをリロードする', isCorrect: false },
      { text: '配列を操作する', isCorrect: false }
    ],
    explanation: "addEventListener は、クリックやキー押下などのイベントが起きたときに実行する処理を登録するためのメソッド。"
  },
  {
    text: 'JSONの特徴は？',
    answer: [
      { text: 'データを文字列形式でやりとりできる', isCorrect: true },
      { text: '画像を圧縮できる', isCorrect: false },
      { text: 'CSSを記述する形式', isCorrect: false },
      { text: 'サーバーのエラー処理形式', isCorrect: false }
    ],
    explanation: "JSON（JavaScript Object Notation）は、データを文字列として表現しやりとりするためのフォーマットで、構造化データの保存や通信に使われる。"
  },
  {
    text: 'fetch関数の用途は？',
    answer: [
      { text: '外部データを非同期で取得する', isCorrect: true },
      { text: 'ページのスクロール量を取得する', isCorrect: false },
      { text: 'HTML要素を取得する', isCorrect: false },
      { text: 'CSSを適用する', isCorrect: false }
    ],
    explanation: "fetch 関数は、外部のサーバーなどからデータを非同期で取得するための関数で、Promise を返す。"
  },
  {
    text: '正規表現の使い道は？',
    answer: [
      { text: '文字列のパターンマッチングを行う', isCorrect: true },
      { text: '数値を計算する', isCorrect: false },
      { text: '配列をソートする', isCorrect: false },
      { text: 'イベントを設定する', isCorrect: false }
    ],
    explanation: "正規表現は、特定の文字列パターンを検索・一致・置換するために使われる表現方法で、文字列の検証や抽出に便利。"
  },
  {
    text: '関数の戻り値とは？',
    answer: [
      { text: '関数の処理結果として返される値', isCorrect: true },
      { text: '引数として渡される値', isCorrect: false },
      { text: '関数名そのもの', isCorrect: false },
      { text: 'イベント名', isCorrect: false }
    ],
    explanation: "関数の戻り値とは、関数内で処理された結果として return 文で返される値。呼び出し元で利用できる。"
  },
  {
    text: 'argumentsオブジェクトとは？',
    answer: [
      { text: '関数内で渡されたすべての引数を格納する', isCorrect: true },
      { text: 'すべての変数を取得する', isCorrect: false },
      { text: '関数を終了させる', isCorrect: false },
      { text: '関数の戻り値を取得する', isCorrect: false }
    ],
    explanation: "arguments オブジェクトは、関数内で渡されたすべての引数を配列のように保持する特殊なオブジェクト（ただし arrow関数では使えない）。"
  },
  {
    text: '配列の中身を文字列に変換するメソッドは？',
    answer: [
      { text: 'join()', isCorrect: true },
      { text: 'slice()', isCorrect: false },
      { text: 'push()', isCorrect: false },
      { text: 'filter()', isCorrect: false }
    ],
    explanation: "join() メソッドは、配列のすべての要素を指定した区切り文字でつなぎ、1つの文字列として返す。"
  },
  {
    text: '関数式（関数リテラル）とは？',
    answer: [
      { text: '変数に代入された関数の定義方法', isCorrect: true },
      { text: '関数を繰り返し実行する方法', isCorrect: false },
      { text: '無名関数を即実行する方法', isCorrect: false },
      { text: '関数をHTMLで定義する方法', isCorrect: false }
    ],
    explanation: "関数式（関数リテラル）は、関数を変数に代入する形で定義する方法で、主に無名関数と一緒に使われる。"
  },
  {
    text: '再帰関数とは？',
    answer: [
      { text: '自分自身を呼び出す関数', isCorrect: true },
      { text: '1回だけ実行される関数', isCorrect: false },
      { text: '引数を複数取れる関数', isCorrect: false },
      { text: '外部ファイルを読み込む関数', isCorrect: false }
    ],
    explanation: "再帰関数は、自分自身を関数内で呼び出す関数で、繰り返し処理や分割処理などに使われる。必ず終了条件を設ける必要がある。"
  },
  {
    text: 'DOMとは何の略？',
    answer: [
      { text: 'Document Object Model', isCorrect: true },
      { text: 'Data Object Mode', isCorrect: false },
      { text: 'Display Object Map', isCorrect: false },
      { text: 'Document Output Module', isCorrect: false }
    ],
    explanation: "DOM は Document Object Model の略で、HTMLやXML文書をプログラムから操作するための仕組み。要素の取得・変更・追加などができる。"
  },
  {
    text: 'querySelectorの特徴は？',
    answer: [
      { text: 'CSSセレクタで最初の要素を取得', isCorrect: true },
      { text: 'すべての要素を配列で取得', isCorrect: false },
      { text: 'id属性しか取得できない', isCorrect: false },
      { text: 'HTML全体を文字列として取得', isCorrect: false }
    ],
    explanation: "querySelector は、CSSセレクタを使って一致する最初の要素1つだけを取得するDOMメソッド。複数欲しい場合は querySelectorAll を使う。"
  },
  {
    text: 'addEventListenerの正しい使い方は？',
    answer: [
      { text: 'イベントを登録して処理を実行する', isCorrect: true },
      { text: '関数を削除する', isCorrect: false },
      { text: '変数を宣言する', isCorrect: false },
      { text: '配列をループする', isCorrect: false }
    ],
    explanation: "addEventListener は、指定したイベント（例: click, input など）が発生したときに実行する関数（イベントハンドラ）を登録するために使う。"
  },
  {
    text: 'localStorageの用途は？',
    answer: [
      { text: 'ブラウザにデータを保存する', isCorrect: true },
      { text: 'HTMLの構造を管理する', isCorrect: false },
      { text: '外部ファイルを読み込む', isCorrect: false },
      { text: 'ページを再読み込みする', isCorrect: false }
    ],
    explanation: "localStorage は、ブラウザにデータをキーと値のペアで永続的に保存できる仕組みで、ページを再読み込みしても保持される。"
  },
  {
    text: 'innerHTMLの使い方で正しいのは？',
    answer: [
      { text: 'HTML要素の中身を設定・取得する', isCorrect: true },
      { text: 'CSSを設定する', isCorrect: false },
      { text: '要素を削除する', isCorrect: false },
      { text: 'ページのURLを取得する', isCorrect: false }
    ],
    explanation: 'innerHTMLは、指定したHTML要素の中身（HTML構造含む）を文字列として取得・設定するためのプロパティ。直接HTMLタグを文字列で書き換えられるため便利だが、XSS対策には注意が必要。'
  },
  {
    text: '== と === の違いは？',
    answer: [
      { text: '== は型を無視して比較、=== は型も比較', isCorrect: true },
      { text: 'どちらも全く同じ', isCorrect: false },
      { text: '== は数値専用、=== は文字列専用', isCorrect: false },
      { text: '=== はバグが多いので使わない', isCorrect: false }
    ],
    explanation: '== は型を自動変換して値を比較する緩い比較、=== は型も値も完全に一致しているかを比較する厳密な比較。予期せぬ型変換によるバグを防ぐため、通常は === を使うことが推奨される。'
  },
  {
    text: 'イベントバブリングとは？',
    answer: [
      { text: 'イベントが親要素へ伝播すること', isCorrect: true },
      { text: 'イベントが即時実行されること', isCorrect: false },
      { text: 'イベントが無限ループになること', isCorrect: false },
      { text: '関数の中でのみ使えるイベント', isCorrect: false }
    ],
    explanation: 'イベントバブリングとは、子要素で発生したイベントが親要素へと順に伝わっていく仕組みのこと。click などのイベントが内側から外側へ伝播するため、親要素にも同じ種類のイベントが発火する可能性がある。'
  },
  {
    text: 'document.getElementByIdの用途は？',
    answer: [
      { text: 'idで指定したHTML要素を取得する', isCorrect: true },
      { text: '要素を削除する', isCorrect: false },
      { text: 'CSSスタイルを変更する', isCorrect: false },
      { text: 'HTML全体を取得する', isCorrect: false }
    ],
    explanation: 'document.getElementById は、指定した id 属性を持つ HTML 要素を1つ取得するためのメソッド。最も基本的なDOM操作の方法で、取得した要素に対して内容の変更やスタイルの適用ができる。'
  },
  {
    text: 'clickイベントとは何か？',
    answer: [
      { text: 'クリックされたときに発生するイベント', isCorrect: true },
      { text: '自動的に繰り返される処理', isCorrect: false },
      { text: 'フォーム送信時に発生するイベント', isCorrect: false },
      { text: 'ページが読み込まれたときのイベント', isCorrect: false }
    ],
    explanation: 'clickイベントは、ユーザーが要素をマウスでクリックしたときに発生するイベント。ボタンやリンクなどの操作に反応させたいときに使われ、addEventListenerなどで設定する。'
  },
  {
    text: 'e.preventDefault() の効果は？',
    answer: [
      { text: 'デフォルトの動作をキャンセルする', isCorrect: true },
      { text: 'エラーを強制的に発生させる', isCorrect: false },
      { text: '変数を初期化する', isCorrect: false },
      { text: '配列の中身を消す', isCorrect: false }
    ],
    explanation: 'e.preventDefault() は、フォームの送信やリンクの遷移など、要素に設定されたブラウザの標準動作（デフォルト動作）をキャンセルするために使う。イベントリスナー内で使用される。'
  },
  {
    text: 'イベントリスナーを削除する方法は？',
    answer: [
      { text: 'removeEventListener', isCorrect: true },
      { text: 'deleteEventHandler', isCorrect: false },
      { text: 'clearListener', isCorrect: false },
      { text: 'resetEvent', isCorrect: false }
    ],
    explanation: 'removeEventListener は、addEventListener で登録したイベントリスナーを削除するためのメソッド。同じ関数・イベントタイプ・オプションでなければ削除できない点に注意が必要。'
  },
  {
    text: '関数の引数に()をつけるとどうなる？',
    answer: [
      { text: '関数がその場で実行される', isCorrect: true },
      { text: '関数が保存されるだけ', isCorrect: false },
      { text: '引数が無効になる', isCorrect: false },
      { text: 'エラーになる', isCorrect: false }
    ],
    explanation: '関数名のあとに () をつけると、その関数は即座に実行される。イベントリスナーなどに関数を渡す場合、() をつけるとすぐに実行されてしまうため注意が必要。'
  },
  {
    text: 'for文の基本構文は？',
    answer: [
      { text: 'for (初期化; 条件; 増減)', isCorrect: true },
      { text: 'for (条件; 初期化; 増減)', isCorrect: false },
      { text: 'for 条件 then 実行', isCorrect: false },
      { text: 'if (条件) { 繰り返し }', isCorrect: false }
    ],
    explanation: 'for文は、初期化・条件式・増減式の3つの要素で構成され、条件がtrueの間はブロック内の処理を繰り返す。最も基本的なループ構文としてよく使われる。'
  },
  {
    text: 'Math.floor(3.9) の結果は？',
    answer: [
      { text: '3', isCorrect: true },
      { text: '4', isCorrect: false },
      { text: '3.9', isCorrect: false },
      { text: 'エラーになる', isCorrect: false }
    ],
    explanation: 'Math.floor(3.9) は、小数点以下を切り捨てて最も近い整数（3）を返す。常に下方向に丸めるため、負の数では注意が必要。'
  },
  {
    text: '配列の最後の要素を取得するには？',
    answer: [
      { text: 'arr[arr.length - 1]', isCorrect: true },
      { text: 'arr[0]', isCorrect: false },
      { text: 'arr.last()', isCorrect: false },
      { text: 'arr.end', isCorrect: false }
    ],
    explanation: '配列の最後の要素は、配列の長さ（length）から1を引いたインデックスで取得できる。arr[arr.length - 1] のように書くことで、常に末尾の要素にアクセスできる。'
  },
  {
    text: 'HTMLのid属性の役割は？',
    answer: [
      { text: '一意の識別子を付ける', isCorrect: true },
      { text: '複数の要素に付けるクラス名', isCorrect: false },
      { text: '画像の読み込みに使う', isCorrect: false },
      { text: '画面遷移を行う', isCorrect: false }
    ],
    explanation: 'HTMLのid属性は、各要素に一意の識別子を与えるために使われる。1つのページ内で同じidは1回しか使えず、JavaScriptやCSSから特定の要素を操作する際によく使われる。'
  },
  {
    text: 'JavaScriptの用途で正しいのは？',
    answer: [
      { text: 'Webページに動きを加える', isCorrect: true },
      { text: 'データベース管理専用', isCorrect: false },
      { text: 'CSSスタイル定義のみ', isCorrect: false },
      { text: '画像編集', isCorrect: false }
    ],
    explanation: 'JavaScriptは、Webページに動きやインタラクション（クリック、スクロール、入力など）を加えるために使われるプログラミング言語。HTMLとCSSと組み合わせて、動的なWebサイトを作るのに欠かせない。'
  },
  {
    text: '関数の戻り値を返すには？',
    answer: [
      { text: 'return を使う', isCorrect: true },
      { text: 'break を使う', isCorrect: false },
      { text: 'exit を使う', isCorrect: false },
      { text: 'output を使う', isCorrect: false }
    ],
    explanation: 'return は関数の処理結果（戻り値）を呼び出し元に返すためのキーワード。return の後に値を書くことで、関数の実行結果としてその値を返すことができる。'
  },
  {
    text: '配列の要素を追加する関数は？',
    answer: [
      { text: 'push()', isCorrect: true },
      { text: 'pop()', isCorrect: false },
      { text: 'shift()', isCorrect: false },
      { text: 'map()', isCorrect: false }
    ],
    explanation: 'push() は、配列の末尾に新しい要素を追加するメソッド。追加後の配列の長さを返す。複数の要素を一度に追加することもできる。'
  },
  {
    text: '「変数」の正しい定義は？',
    answer: [
      { text: 'データを一時的に保存するための名前付きの箱', isCorrect: true },
      { text: '画像を表示するタグ', isCorrect: false },
      { text: 'Webページのスタイル定義', isCorrect: false },
      { text: 'ファイルの種類', isCorrect: false }
    ],
    explanation: '変数とは、値（データ）を一時的に保存しておくための名前付きの領域（箱）のこと。あとから値を参照・変更するために使われる。'
  },
  {
    text: 'spliceメソッドの特徴は？',
    answer: [
      { text: '配列の要素を追加・削除・置換できる', isCorrect: true },
      { text: '配列を文字列に変換する', isCorrect: false },
      { text: '配列を昇順にソートする', isCorrect: false },
      { text: '配列の要素を検索する', isCorrect: false }
    ],
    explanation: 'splice() は、配列の指定した位置に要素を追加・削除・置換できる強力なメソッド。元の配列を直接変更するため、注意して使う必要がある。'
  },
  {
    text: 'sliceメソッドの特徴は？',
    answer: [
      { text: '指定範囲の配列を新しい配列として返す', isCorrect: true },
      { text: '元の配列から要素を削除する', isCorrect: false },
      { text: '配列をランダムに並び替える', isCorrect: false },
      { text: '配列の長さを変更する', isCorrect: false }
    ],
    explanation: 'slice() は、配列の一部を指定して取り出し、新しい配列として返すメソッド。元の配列は変更されず、開始位置と終了位置（終了位置は含まれない）を指定できる。'
  },
  {
    text: '文字列を配列に変換するには？',
    answer: [
      { text: 'split() を使う', isCorrect: true },
      { text: 'join() を使う', isCorrect: false },
      { text: 'toString() を使う', isCorrect: false },
      { text: 'parse() を使う', isCorrect: false }
    ],
    explanation: 'split() は、文字列を指定した区切り文字で分割し、配列として返すメソッド。たとえばカンマやスペースで区切って単語の配列を作るときに使う。'
  },
  {
    text: 'toFixed(2) の意味は？',
    answer: [
      { text: '小数点以下2桁までに丸めた文字列を返す', isCorrect: true },
      { text: '2桁の整数に変換する', isCorrect: false },
      { text: '2進数に変換する', isCorrect: false },
      { text: '小数点を切り捨てる', isCorrect: false }
    ],
    explanation: 'toFixed(2) は、数値を小数点以下2桁に丸めた**文字列**を返すメソッド。表示のために小数の桁数を制限したいときなどに使う。'
  },
  {
    text: 'typeof null の結果は？',
    answer: [
      { text: '"object"', isCorrect: true },
      { text: '"null"', isCorrect: false },
      { text: '"undefined"', isCorrect: false },
      { text: '"boolean"', isCorrect: false }
    ],
    explanation: 'typeof null の結果は "object" になる。これは JavaScript の歴史的なバグであり、仕様としてそのまま残っている。null は実際にはオブジェクトではないが、typeof では "object" と返る。'
  },
  {
    text: '関数を即時実行するには？',
    answer: [
      { text: '(function() { ... })();', isCorrect: true },
      { text: 'function now(){}', isCorrect: false },
      { text: 'runFunction()', isCorrect: false },
      { text: 'setTimeout(func)', isCorrect: false }
    ],
    explanation: '即時実行関数（IIFE）は、(function() { ... })(); のように定義してすぐに実行する関数のこと。グローバルスコープを汚さずに処理を実行したいときに使われる。'
  },
  {
    text: 'null と undefined の違いは？',
    answer: [
      { text: 'null は意図的、undefined は未定義', isCorrect: true },
      { text: '両方同じ意味', isCorrect: false },
      { text: 'undefined は数値、null は文字列', isCorrect: false },
      { text: 'null は未定義、undefined は削除済み', isCorrect: false }
    ],
    explanation: 'null は「意図的に値がない」ことを示すが、undefined は「値がまだ設定されていない（未定義）」状態を表す。どちらも「値がない」状態だが意味が異なる。'
  },
  {
    text: 'Math.ceil(2.1) の結果は？',
    answer: [
      { text: '3', isCorrect: true },
      { text: '2', isCorrect: false },
      { text: '2.1', isCorrect: false },
      { text: 'エラー', isCorrect: false }
    ],
    explanation: 'Math.ceil(2.1) は、小数点以下を切り上げて最も近い整数（この場合は 3）を返すメソッド。常に「上の整数」になる点が特徴。'
  },
  {
    text: 'NaN を判定する正しい方法は？',
    answer: [
      { text: 'Number.isNaN()', isCorrect: true },
      { text: 'typeof NaN === "undefined"', isCorrect: false },
      { text: 'NaN == null', isCorrect: false },
      { text: 'typeof NaN === "boolean"', isCorrect: false }
    ],
    explanation: 'NaN（Not-a-Number）は数値ではないことを示す特殊な値。正しく判定するには Number.isNaN() を使う。isNaN() と違って、数値以外を渡した場合の誤判定を防げる。'
  },
  {
    text: '論理演算子 && の役割は？',
    answer: [
      { text: '両方がtrueの時にtrueを返す', isCorrect: true },
      { text: 'どちらか一方がtrueならtrue', isCorrect: false },
      { text: 'どちらもfalseの時にtrue', isCorrect: false },
      { text: '常にfalseを返す', isCorrect: false }
    ],
    explanation: '論理演算子 && は、左辺と右辺の両方が true の場合にのみ true を返す。どちらか一方でも false であれば結果は false になる。'
  },
  {
    text: '論理演算子 || の役割は？',
    answer: [
      { text: 'どちらかがtrueならtrue', isCorrect: true },
      { text: 'どちらもtrueのときfalse', isCorrect: false },
      { text: 'trueでもfalseでもない', isCorrect: false },
      { text: '常にfalseを返す', isCorrect: false }
    ],
    explanation: '論理演算子 || は、左辺または右辺のどちらかが true の場合に true を返す。両方とも false のときだけ false を返す。'
  },
  {
    text: 'テンプレート文字列の構文は？',
    answer: [
      { text: '`文字列 ${変数}`', isCorrect: true },
      { text: '"文字列 + 変数"', isCorrect: false },
      { text: "'${変数}'", isCorrect: false },
      { text: '"${変数}"', isCorrect: false }
    ],
    explanation: 'テンプレート文字列はバッククォート（`）を使い、${} の中に変数や式を埋め込む構文。文字列の結合が簡単になる。'
  },
  {
    text: '三項演算子の構文は？',
    answer: [
      { text: '条件 ? 真 : 偽', isCorrect: true },
      { text: 'if ? true : false', isCorrect: false },
      { text: '条件 ? 偽 : 真', isCorrect: false },
      { text: '条件 then 真 else 偽', isCorrect: false }
    ],
    explanation: '三項演算子は「条件 ? 真の場合の値 : 偽の場合の値」という形式で、if文を短く書ける構文です。'
  },
  {
    text: 'JavaScriptの主な実行環境は？',
    answer: [
      { text: 'Webブラウザ', isCorrect: true },
      { text: 'Photoshop', isCorrect: false },
      { text: 'Word', isCorrect: false },
      { text: 'Excel', isCorrect: false }
    ],
    explanation: 'JavaScriptの主な実行環境はWebブラウザで、HTMLと連携して動的なWebページを作成するのに使用されます。'
  },
  {
    text: 'オブジェクトのプロパティへアクセスするには？',
    answer: [
      { text: 'obj.key または obj["key"]', isCorrect: true },
      { text: 'obj->key', isCorrect: false },
      { text: 'obj::key', isCorrect: false },
      { text: 'obj.get(key)', isCorrect: false }
    ],
    explanation: 'オブジェクトのプロパティにアクセスするには、ドット記法（obj.key）またはブラケット記法（obj["key"]）を使います。用途によって使い分けされます。'
  },
  {
    text: '配列に存在しないインデックスを指定すると？',
    answer: [
      { text: 'undefinedになる', isCorrect: true },
      { text: 'エラーになる', isCorrect: false },
      { text: 'nullになる', isCorrect: false },
      { text: '0が返る', isCorrect: false }
    ],
    explanation: '配列に存在しないインデックスを指定すると、その要素は存在しないため undefined が返されます。エラーにはならず、値が未定義であることを示します。'
  },
  {
    text: 'isFinite(100/0) の結果は？',
    answer: [
      { text: 'false', isCorrect: true },
      { text: 'true', isCorrect: false },
      { text: 'undefined', isCorrect: false },
      { text: 'null', isCorrect: false }
    ],
    explanation: 'isFinite(100/0) は、100を0で割った結果（Infinity）が有限かどうかを判定します。Infinity は有限ではないため、false を返します。'
  },
  {
    text: '空の配列をbooleanに変換すると？',
    answer: [
      { text: 'true', isCorrect: true },
      { text: 'false', isCorrect: false },
      { text: 'NaN', isCorrect: false },
      { text: 'null', isCorrect: false }
    ],
    explanation: '空の配列（[]）は、JavaScriptにおいて truthy な値とみなされます。そのため、Boolean([]) の結果は true になります。'
  },
  {
    text: 'parseInt("10px") の結果は？',
    answer: [
      { text: '10', isCorrect: true },
      { text: 'NaN', isCorrect: false },
      { text: '"10px"', isCorrect: false },
      { text: '0', isCorrect: false }
    ],
    explanation: 'parseInt("10px") は文字列の先頭から数字を読み取り、数字以外の文字に達した時点で変換を終了します。そのため結果は数値の 10 になります。'
  },
  {
    text: 'typeof [] の結果は？',
    answer: [
      { text: '"object"', isCorrect: true },
      { text: '"array"', isCorrect: false },
      { text: '"list"', isCorrect: false },
      { text: '"function"', isCorrect: false }
    ],
    explanation: 'typeof [] の結果は "object" になります。JavaScriptでは配列もオブジェクトの一種と見なされるためです。配列かどうかを判定したい場合は Array.isArray() を使います。'
  },
  {
    text: '関数宣言と関数式の違いは？',
    answer: [
      { text: '関数式は代入後にしか呼び出せない', isCorrect: true },
      { text: 'どちらも同じタイミングで実行できる', isCorrect: false },
      { text: '関数式はグローバルになる', isCorrect: false },
      { text: '関数宣言はエラーになりやすい', isCorrect: false }
    ],
    explanation: '関数宣言はホイスティングされるため、定義より前でも呼び出せます。一方、関数式（変数に代入された関数）は代入後でないと呼び出せません。これが2つの主な違いです。'
  },
  {
    text: 'typeof function(){} の結果は？',
    answer: [
      { text: '"function"', isCorrect: true },
      { text: '"object"', isCorrect: false },
      { text: '"undefined"', isCorrect: false },
      { text: '"string"', isCorrect: false }
    ],
    explanation: 'JavaScriptでは、関数は特別なオブジェクトであり、typeof 演算子を使うと "function" という文字列が返されます。他の値と区別できるようになっています。'
  },
  {
    text: 'オブジェクトの値をすべて取り出すには？',
    answer: [
      { text: 'Object.values()', isCorrect: true },
      { text: 'Object.keys()', isCorrect: false },
      { text: 'Object.entries()', isCorrect: false },
      { text: 'Object.get()', isCorrect: false }
    ],
    explanation: 'Object.values() は、指定したオブジェクトのすべての値だけを配列として返します。キーではなく値を取り出したいときに便利です。'
  },
  {
    text: 'Object.entries(obj) の結果は？',
    answer: [
      { text: 'キーと値のペアの配列', isCorrect: true },
      { text: 'キーの一覧', isCorrect: false },
      { text: '値の一覧', isCorrect: false },
      { text: 'オブジェクトの長さ', isCorrect: false }
    ],
    explanation: 'Object.entries(obj) は、オブジェクトのすべてのキーと値のペアを [キー, 値] の形式で格納した配列を返します。オブジェクトをループ処理したいときなどに使われます。'
  },
  {
    text: 'parseInt("10.5") の結果は？',
    answer: [
      { text: '10', isCorrect: true },
      { text: '10.5', isCorrect: false },
      { text: '"10.5"', isCorrect: false },
      { text: 'エラーになる', isCorrect: false }
    ],
    explanation: 'parseInt("10.5") は文字列を整数として解析し、小数点以下は無視されるため結果は 10 になります。文字列の先頭が数値であれば、その部分だけを整数として返します。'
  },
  {
    text: 'isFinite(100 / 0) の結果は？',
    answer: [
      { text: 'false', isCorrect: true },
      { text: 'true', isCorrect: false },
      { text: '0', isCorrect: false },
      { text: 'Infinity', isCorrect: false }
    ],
    explanation: '100 / 0 は Infinity になりますが、isFinite(Infinity) は false を返します。isFinite() は、与えられた値が有限数かどうかを判定する関数です。'
  },
  {
    text: 'typeof null の結果は？',
    answer: [
      { text: '"object"', isCorrect: true },
      { text: '"null"', isCorrect: false },
      { text: '"undefined"', isCorrect: false },
      { text: '"boolean"', isCorrect: false }
    ],
    explanation: 'typeof null は "object" を返します。これは JavaScript の歴史的なバグによるもので、null はオブジェクトではありませんが、typeof でそう判定されてしまいます。'
  },
  {
    text: 'オブジェクトにプロパティを追加する正しい方法は？',
    answer: [
      { text: 'obj.key = value;', isCorrect: true },
      { text: 'add.key(obj, value);', isCorrect: false },
      { text: 'obj.push(key, value);', isCorrect: false },
      { text: 'set obj.key = value;', isCorrect: false }
    ],
    explanation: 'オブジェクトにプロパティを追加するには、ドット記法（obj.key = value）またはブラケット記法（obj["key"] = value）を使います。これは簡単に動的にプロパティを追加・変更できる基本的な方法です。'
  },
  {
    text: '関数のデフォルト引数はどう定義する？',
    answer: [
      { text: 'function greet(name = "ゲスト")', isCorrect: true },
      { text: 'function greet(default name = "ゲスト")', isCorrect: false },
      { text: 'function greet(name: "ゲスト")', isCorrect: false },
      { text: 'function greet(name | "ゲスト")', isCorrect: false }
    ],
    explanation: '関数のデフォルト引数は、引数に代入する形で定義します（例：function greet(name = "ゲスト")）。引数が省略された場合に、このデフォルト値が自動的に使用されます。'
  },
  {
    text: '配列の中で条件に合う最初の要素を返すのは？',
    answer: [
      { text: 'find()', isCorrect: true },
      { text: 'filter()', isCorrect: false },
      { text: 'includes()', isCorrect: false },
      { text: 'map()', isCorrect: false }
    ],
    explanation: 'find() は、配列内で指定した条件を満たす最初の要素を返します。条件に合う要素が見つからない場合は undefined を返します。filter() と違って最初の1つだけを返すのが特徴です。'
  },
  {
    text: '論理演算子 "||" の意味は？',
    answer: [
      { text: 'どちらかが true なら true', isCorrect: true },
      { text: 'どちらも true のとき true', isCorrect: false },
      { text: 'false を反転する', isCorrect: false },
      { text: '値を比較する', isCorrect: false }
    ],
    explanation: '論理演算子 "||" は、左側の値が true ならそれを返し、false の場合は右側の値を評価します。つまり、どちらかが true であれば true を返す「または」の意味を持ちます。'
  },
  {
    text: '文字列の末尾に文字を追加するには？',
    answer: [
      { text: 'str += "文字";', isCorrect: true },
      { text: 'str.add("文字")', isCorrect: false },
      { text: 'str.push("文字")', isCorrect: false },
      { text: 'str.insert("文字")', isCorrect: false }
    ],
    explanation: '文字列に文字を追加するには `+=` 演算子を使います。例えば `str += "文字";` と書くと、元の文字列の末尾に指定した文字列が追加され、新しい文字列になります。'
  },
  {
    text: '文字列を分割するには？',
    answer: [
      { text: 'split()', isCorrect: true },
      { text: 'slice()', isCorrect: false },
      { text: 'join()', isCorrect: false },
      { text: 'splice()', isCorrect: false }
    ],
    explanation: 'split() は、文字列を指定した区切り文字で分割し、配列として返すメソッドです。たとえば "a,b,c".split(",") は ["a", "b", "c"] を返します。'
  },
  {
    text: '配列の中にオブジェクトがあるときのアクセス方法は？',
    answer: [
      { text: 'arr[0].key', isCorrect: true },
      { text: 'arr.key[0]', isCorrect: false },
      { text: 'arr->0.key', isCorrect: false },
      { text: 'arr.key.0', isCorrect: false }
    ],
    explanation: '配列の中にオブジェクトがある場合、まず配列のインデックスで対象のオブジェクトを取得し、次にドット記法でプロパティにアクセスします。例：arr[0].key。'
  },
  {
    text: 'Object.keys(obj) の返り値は？',
    answer: [
      { text: 'キー名の配列', isCorrect: true },
      { text: '値の配列', isCorrect: false },
      { text: 'オブジェクトそのもの', isCorrect: false },
      { text: '文字列に変換したもの', isCorrect: false }
    ],
    explanation: 'Object.keys(obj) は、指定したオブジェクトのすべてのキー（プロパティ名）を配列として返します。値ではなく、キーのみを取り出すのが特徴です。'
  },
  {
    text: 'Object.values(obj) の返り値は？',
    answer: [
      { text: '値の配列', isCorrect: true },
      { text: 'キーの配列', isCorrect: false },
      { text: '関数の一覧', isCorrect: false },
      { text: 'JSON形式の文字列', isCorrect: false }
    ]
  },
  {
    text: 'オブジェクトを文字列に変換するには？',
    answer: [
      { text: 'JSON.stringify(obj)', isCorrect: true },
      { text: 'obj.toText()', isCorrect: false },
      { text: 'string(obj)', isCorrect: false },
      { text: 'String.to(obj)', isCorrect: false }
    ]
  },
  {
    text: 'オブジェクトを配列に変換する方法は？',
    answer: [
      { text: 'Object.entries(obj)', isCorrect: true },
      { text: 'obj.toArray()', isCorrect: false },
      { text: 'Array(obj)', isCorrect: false },
      { text: 'obj.push()', isCorrect: false }
    ]
  },
  {
    text: '配列を文字列に変換するには？',
    answer: [
      { text: 'join()', isCorrect: true },
      { text: 'concat()', isCorrect: false },
      { text: 'split()', isCorrect: false },
      { text: 'replace()', isCorrect: false }
    ]
  },
  {
    text: 'スプレッド構文の使い方は？',
    answer: [
      { text: '[...array]', isCorrect: true },
      { text: '[*array]', isCorrect: false },
      { text: '[array...]', isCorrect: false },
      { text: 'spread(array)', isCorrect: false }
    ]
  },
  {
    text: '分割代入の例で正しいのは？',
    answer: [
      { text: 'const [a, b] = array;', isCorrect: true },
      { text: 'const a = array{0};', isCorrect: false },
      { text: 'let a := array[0];', isCorrect: false },
      { text: 'var a => array[0];', isCorrect: false }
    ]
  },
  {
    text: 'テンプレートリテラルの正しい書き方は？',
    answer: [
      { text: '`こんにちは、${name}さん`', isCorrect: true },
      { text: '"こんにちは、${name}さん"', isCorrect: false },
      { text: "'こんにちは、$[name]さん'", isCorrect: false },
      { text: '`こんにちは、$(name)さん`', isCorrect: false }
    ]
  },
  {
    text: '再代入が可能な変数の宣言方法は？',
    answer: [
      { text: 'let', isCorrect: true },
      { text: 'const', isCorrect: false },
      { text: 'define', isCorrect: false },
      { text: 'function', isCorrect: false }
    ]
  },
  {
    text: '関数の即時実行（IIFE）の例は？',
    answer: [
      { text: '(function(){})();', isCorrect: true },
      { text: 'function(){};', isCorrect: false },
      { text: '(function){};', isCorrect: false },
      { text: 'call(function{})', isCorrect: false }
    ]
  },
  {
    text: 'setIntervalの特徴は？',
    answer: [
      { text: '一定間隔で繰り返し処理する', isCorrect: true },
      { text: '一度だけ処理を行う', isCorrect: false },
      { text: 'ページを更新する', isCorrect: false },
      { text: '変数を監視する', isCorrect: false }
    ]
  },
  {
    text: '非同期処理の予約語は？',
    answer: [
      { text: 'async', isCorrect: true },
      { text: 'defer', isCorrect: false },
      { text: 'delay', isCorrect: false },
      { text: 'thread', isCorrect: false }
    ]
  },
  {
    text: 'awaitの役割は？',
    answer: [
      { text: 'Promiseの完了を待つ', isCorrect: true },
      { text: '関数を止める', isCorrect: false },
      { text: '関数の戻り値を取得する', isCorrect: false },
      { text: '条件分岐を作る', isCorrect: false }
    ]
  },
  {
    text: 'typeof [] の結果は？',
    answer: [
      { text: '"object"', isCorrect: true },
      { text: '"array"', isCorrect: false },
      { text: '"list"', isCorrect: false },
      { text: '"collection"', isCorrect: false }
    ]
  },
  {
    text: 'JavaScriptで改行を入れるには？',
    answer: [
      { text: '\\n', isCorrect: true },
      { text: '&br;', isCorrect: false },
      { text: '/n', isCorrect: false },
      { text: '<<br>>', isCorrect: false }
    ]
  },
  {
    text: '配列のコピー（シャローコピー）は？',
    answer: [
      { text: '[...array]', isCorrect: true },
      { text: 'array.copy()', isCorrect: false },
      { text: 'array.slice(1)', isCorrect: false },
      { text: 'array.link()', isCorrect: false }
    ]
  },
  {
    text: 'NaNかどうかの判定に使う関数は？',
    answer: [
      { text: 'isNaN()', isCorrect: true },
      { text: 'isNull()', isCorrect: false },
      { text: 'checkNaN()', isCorrect: false },
      { text: 'typeofNaN()', isCorrect: false }
    ]
  },
  {
    text: 'const obj = {}; obj.name = "A"; の結果は？',
    answer: [
      { text: 'エラーにならず name が追加される', isCorrect: true },
      { text: 'エラーになる', isCorrect: false },
      { text: '再代入とみなされる', isCorrect: false },
      { text: 'undefined になる', isCorrect: false }
    ]
  },
  {
    text: 'null == undefined の結果は？',
    answer: [
      { text: 'true', isCorrect: true },
      { text: 'false', isCorrect: false },
      { text: 'エラー', isCorrect: false },
      { text: 'undefined', isCorrect: false }
    ]
  },
  {
    text: 'null === undefined の結果は？',
    answer: [
      { text: 'false', isCorrect: true },
      { text: 'true', isCorrect: false },
      { text: 'null', isCorrect: false },
      { text: 'undefined', isCorrect: false }
    ]
  },
  {
    text: '条件演算子（三項演算子）の構文は？',
    answer: [
      { text: '条件 ? trueの処理 : falseの処理', isCorrect: true },
      { text: 'if ? then : else', isCorrect: false },
      { text: '条件 | true処理 , false処理', isCorrect: false },
      { text: '条件 => true : false', isCorrect: false }
    ]
  },
  {
    text: 'typeof NaN の結果は？',
    answer: [
      { text: '"number"', isCorrect: true },
      { text: '"NaN"', isCorrect: false },
      { text: '"undefined"', isCorrect: false },
      { text: '"null"', isCorrect: false }
    ]
  },
  {
    text: '数値を文字列に変換する方法は？',
    answer: [
      { text: 'String(123)', isCorrect: true },
      { text: '123.toText()', isCorrect: false },
      { text: 'text(123)', isCorrect: false },
      { text: 'toString(123)', isCorrect: false }
    ]
  },
  {
    text: '文字列を数値に変換するには？',
    answer: [
      { text: 'Number("123")', isCorrect: true },
      { text: 'parseNum("123")', isCorrect: false },
      { text: 'toNum("123")', isCorrect: false },
      { text: 'convert("123")', isCorrect: false }
    ]
  },
  {
    text: '関数の中で自分自身を参照するキーワードは？',
    answer: [
      { text: 'this', isCorrect: true },
      { text: 'self', isCorrect: false },
      { text: 'own', isCorrect: false },
      { text: 'me', isCorrect: false }
    ]
  },
  {
    text: 'JavaScriptで小数点以下を切り捨てるには？',
    answer: [
      { text: 'Math.floor()', isCorrect: true },
      { text: 'Math.ceil()', isCorrect: false },
      { text: 'Math.round()', isCorrect: false },
      { text: 'parseInt()', isCorrect: false }
    ]
  },
  {
    text: 'Math.ceil(2.3) の結果は？',
    answer: [
      { text: '3', isCorrect: true },
      { text: '2', isCorrect: false },
      { text: '2.3', isCorrect: false },
      { text: 'undefined', isCorrect: false }
    ]
  },
  {
    text: 'Math.round(4.6) の結果は？',
    answer: [
      { text: '5', isCorrect: true },
      { text: '4', isCorrect: false },
      { text: '4.5', isCorrect: false },
      { text: 'undefined', isCorrect: false }
    ]
  },
  {
    text: '文字列の長さを取得するには？',
    answer: [
      { text: 'str.length', isCorrect: true },
      { text: 'str.size', isCorrect: false },
      { text: 'length(str)', isCorrect: false },
      { text: 'str.count()', isCorrect: false }
    ]
  },
  {
    text: '文字列を1文字ずつ分割するには？',
    answer: [
      { text: 'split("")', isCorrect: true },
      { text: 'split(" ")', isCorrect: false },
      { text: 'split(",", 1)', isCorrect: false },
      { text: 'join("")', isCorrect: false }
    ]
  },
  {
    text: '配列の最後の要素を取り出すには？',
    answer: [
      { text: 'pop()', isCorrect: true },
      { text: 'shift()', isCorrect: false },
      { text: 'slice()', isCorrect: false },
      { text: 'push()', isCorrect: false }
    ]
  },
  {
    text: '配列の先頭の要素を取り出すには？',
    answer: [
      { text: 'shift()', isCorrect: true },
      { text: 'pop()', isCorrect: false },
      { text: 'unshift()', isCorrect: false },
      { text: 'splice()', isCorrect: false }
    ]
  },
  {
    text: '配列に要素を先頭に追加するには？',
    answer: [
      { text: 'unshift()', isCorrect: true },
      { text: 'push()', isCorrect: false },
      { text: 'shift()', isCorrect: false },
      { text: 'concat()', isCorrect: false }
    ]
  },
  {
    text: 'parseInt("08")の結果は？',
    answer: [
      { text: '8', isCorrect: true },
      { text: '0', isCorrect: false },
      { text: 'NaN', isCorrect: false },
      { text: '"08"', isCorrect: false }
    ]
  },
  {
    text: '配列に要素が含まれているか調べるには？',
    answer: [
      { text: 'includes()', isCorrect: true },
      { text: 'has()', isCorrect: false },
      { text: 'exist()', isCorrect: false },
      { text: 'check()', isCorrect: false }
    ]
  },
  {
    text: '配列を逆順に並べ替えるには？',
    answer: [
      { text: 'reverse()', isCorrect: true },
      { text: 'sort()', isCorrect: false },
      { text: 'map().reverse()', isCorrect: false },
      { text: 'join().split()', isCorrect: false }
    ]
  },
  {
    text: 'typeof null の結果は？',
    answer: [
      { text: '"object"', isCorrect: true },
      { text: '"null"', isCorrect: false },
      { text: '"undefined"', isCorrect: false },
      { text: '"boolean"', isCorrect: false }
    ]
  },
  {
    text: 'undefined の typeof の結果は？',
    answer: [
      { text: '"undefined"', isCorrect: true },
      { text: '"null"', isCorrect: false },
      { text: '"object"', isCorrect: false },
      { text: '"NaN"', isCorrect: false }
    ]
  },
  {
    text: '文字列の先頭を確認するには？',
    answer: [
      { text: 'startsWith()', isCorrect: true },
      { text: 'beginsWith()', isCorrect: false },
      { text: 'first()', isCorrect: false },
      { text: 'substring(0)', isCorrect: false }
    ]
  },
  {
    text: '値が falsy に含まれないのは？',
    answer: [
      { text: '[]', isCorrect: true },
      { text: '0', isCorrect: false },
      { text: '""', isCorrect: false },
      { text: 'null', isCorrect: false }
    ]
  },
  {
    text: '「==」の特徴は？',
    answer: [
      { text: '型変換して比較', isCorrect: true },
      { text: '厳密な比較', isCorrect: false },
      { text: 'オブジェクト専用', isCorrect: false },
      { text: '比較できない', isCorrect: false }
    ]
  },
  {
    text: '「===」の特徴は？',
    answer: [
      { text: '型も値も一致するか比較', isCorrect: true },
      { text: '値だけ比較', isCorrect: false },
      { text: '文字列専用', isCorrect: false },
      { text: 'nullだけ比較', isCorrect: false }
    ]
  },
  {
    text: 'forEach()の戻り値は？',
    answer: [
      { text: 'undefined', isCorrect: true },
      { text: '配列', isCorrect: false },
      { text: '数値', isCorrect: false },
      { text: 'boolean', isCorrect: false }
    ]
  },
  {
    text: 'map()とforEach()の違いは？',
    answer: [
      { text: 'mapは新しい配列を返す', isCorrect: true },
      { text: 'mapは処理を止められる', isCorrect: false },
      { text: 'forEachは値を返す', isCorrect: false },
      { text: 'mapはundefinedを返す', isCorrect: false }
    ]
  },
  {
    text: 'イベントが発火した要素を取得するには？',
    answer: [
      { text: 'event.target', isCorrect: true },
      { text: 'this.element', isCorrect: false },
      { text: 'event.source', isCorrect: false },
      { text: 'getElement(event)', isCorrect: false }
    ]
  },
  {
    text: 'HTMLのクラスを取得するには？',
    answer: [
      { text: 'document.getElementsByClassName()', isCorrect: true },
      { text: 'document.getElementById()', isCorrect: false },
      { text: 'document.querySelectorAll()', isCorrect: false },
      { text: 'document.getElements()', isCorrect: false }
    ]
  },
  {
    text: '条件に一致する最初の要素を取得するには？',
    answer: [
      { text: 'document.querySelector()', isCorrect: true },
      { text: 'document.querySelectorAll()', isCorrect: false },
      { text: 'getElementByClass()', isCorrect: false },
      { text: 'selectElement()', isCorrect: false }
    ]
  },
  {
    text: '文字列を数値に変換するには？',
    answer: [
      { text: 'parseInt()', isCorrect: true },
      { text: 'String()', isCorrect: false },
      { text: 'split()', isCorrect: false },
      { text: 'toFixed()', isCorrect: false }
    ]
  },
  {
    text: '関数を一度だけ実行したいときの関数は？',
    answer: [
      { text: '即時関数(IIFE)', isCorrect: true },
      { text: '無名関数', isCorrect: false },
      { text: 'コールバック関数', isCorrect: false },
      { text: 'setInterval', isCorrect: false }
    ]
  },
  {
    text: 'setIntervalの役割は？',
    answer: [
      { text: '一定間隔で処理を繰り返す', isCorrect: true },
      { text: '一度だけ処理を行う', isCorrect: false },
      { text: 'HTMLを更新する', isCorrect: false },
      { text: '要素を非表示にする', isCorrect: false }
    ]
  },
  {
    text: 'if文の構文で正しいのは？',
    answer: [
      { text: 'if (条件) { 処理 }', isCorrect: true },
      { text: 'if 条件 then { 処理 }', isCorrect: false },
      { text: 'if: { 処理 }', isCorrect: false },
      { text: '条件 if { 処理 }', isCorrect: false }
    ]
  },
  {
    text: '要素を非表示にするCSSは？',
    answer: [
      { text: 'display: none;', isCorrect: true },
      { text: 'display: hidden;', isCorrect: false },
      { text: 'visibility: block;', isCorrect: false },
      { text: 'opacity: 100;', isCorrect: false }
    ]
  },
  {
    text: 'JSで非表示にするには？',
    answer: [
      { text: 'element.style.display = "none"', isCorrect: true },
      { text: 'element.hidden = false', isCorrect: false },
      { text: 'element.class = "hidden"', isCorrect: false },
      { text: 'display.none()', isCorrect: false }
    ]
  },
  {
    text: 'NaNの判定で使う関数は？',
    answer: [
      { text: 'isNaN()', isCorrect: true },
      { text: 'NaN()', isCorrect: false },
      { text: 'isNull()', isCorrect: false },
      { text: 'checkNaN()', isCorrect: false }
    ]
  },
  {
    text: '数値を文字列に変換するには？',
    answer: [
      { text: 'toString()', isCorrect: true },
      { text: 'Number()', isCorrect: false },
      { text: 'parseInt()', isCorrect: false },
      { text: 'String.to()', isCorrect: false }
    ]
  },
  {
    text: 'テンプレート文字列で使う記号は？',
    answer: [
      { text: '`バッククォート`', isCorrect: true },
      { text: '"ダブルクォート"', isCorrect: false },
      { text: "'シングルクォート'", isCorrect: false },
      { text: '<テンプレート>', isCorrect: false }
    ]
  },
  {
    text: 'スプレッド構文の記号は？',
    answer: [
      { text: '...', isCorrect: true },
      { text: '@@', isCorrect: false },
      { text: '::', isCorrect: false },
      { text: '=>', isCorrect: false }
    ]
  },
  {
    text: 'nullとundefinedの違いは？',
    answer: [
      { text: 'nullは意図的、undefinedは未定義', isCorrect: true },
      { text: 'どちらも同じ', isCorrect: false },
      { text: 'undefinedはエラー', isCorrect: false },
      { text: 'nullは関数名', isCorrect: false }
    ]
  },
  {
    text: '文字列の一部を取り出すには？',
    answer: [
      { text: 'slice()', isCorrect: true },
      { text: 'split()', isCorrect: false },
      { text: 'push()', isCorrect: false },
      { text: 'splice()', isCorrect: false }
    ]
  },
  {
    text: 'querySelectorAll()の戻り値は？',
    answer: [
      { text: 'NodeList', isCorrect: true },
      { text: '配列', isCorrect: false },
      { text: 'HTMLCollection', isCorrect: false },
      { text: 'オブジェクト', isCorrect: false }
    ]
  },
  {
    text: 'クラス名を追加するには？',
    answer: [
      { text: 'element.classList.add()', isCorrect: true },
      { text: 'element.class +=', isCorrect: false },
      { text: 'element.addClass()', isCorrect: false },
      { text: 'element.setClass()', isCorrect: false }
    ]
  },
  {
    text: 'インクリメント演算子は？',
    answer: [
      { text: '++', isCorrect: true },
      { text: '+', isCorrect: false },
      { text: '--', isCorrect: false },
      { text: '**', isCorrect: false }
    ]
  },
  {
    text: 'forEachの中でreturnすると？',
    answer: [
      { text: 'そのループだけスキップされる', isCorrect: true },
      { text: 'すべて終了する', isCorrect: false },
      { text: '何も変わらない', isCorrect: false },
      { text: 'falseが返る', isCorrect: false }
    ]
  },
  {
    text: '三項演算子の正しい形式は？',
    answer: [
      { text: '条件 ? 値1 : 値2', isCorrect: true },
      { text: 'if ? then : else', isCorrect: false },
      { text: '条件 if 値 else 値', isCorrect: false },
      { text: '条件 : 値1 ? 値2', isCorrect: false }
    ]
  },
  {
    text: '画面が読み込まれた後に処理したい場合は？',
    answer: [
      { text: 'window.onload', isCorrect: true },
      { text: 'window.ready()', isCorrect: false },
      { text: 'DOMContentLoaded()', isCorrect: false },
      { text: 'load.start()', isCorrect: false }
    ]
  }
];

