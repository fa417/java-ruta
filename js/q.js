export const questions = [
  {
    text: "コンポーネントは何のために使う？",
    answer: [
      { text: "UIを部品化して再利用可能にするため", isCorrect: true },
      { text: "ファイルを読み込むため", isCorrect: false },
      { text: "APIを呼ぶため", isCorrect: false },
      { text: "スタイルを適用するため", isCorrect: false },
    ]
  },
  {
    text: "Reactで1つのコンポーネントは何を返す？",
    answer: [
      { text: "1つの要素または要素のグループ", isCorrect: true },
      { text: "関数の配列", isCorrect: false },
      { text: "HTMLファイル", isCorrect: false },
      { text: "複数の値", isCorrect: false },
    ]
  },
  {
    text: "JSXとは何ですか？",
    answer: [
      { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
      { text: "ReactのAPI", isCorrect: false },
      { text: "データベース言語", isCorrect: false },
      { text: "CSS記法", isCorrect: false },
    ]
  },
  {
    text: "Reactで親から子へデータを渡す方法は？",
    answer: [
      { text: "propsを使う", isCorrect: true },
      { text: "contextを使う", isCorrect: false },
      { text: "emitを使う", isCorrect: false },
      { text: "stateを使う", isCorrect: false },
    ]
  },
  {
    text: "useEffectの第二引数に空配列を渡すと？",
    answer: [
      { text: "マウント時に一度だけ実行される", isCorrect: true },
      { text: "毎回実行される", isCorrect: false },
      { text: "一度も実行されない", isCorrect: false },
      { text: "アンマウント時だけ実行される", isCorrect: false },
    ]
  },
  {
    text: "Reactで副作用の処理に使うフックは？",
    answer: [
      { text: "useEffect", isCorrect: true },
      { text: "useLayout", isCorrect: false },
      { text: "useRender", isCorrect: false },
      { text: "useState", isCorrect: false },
    ]
  },
  {
    text: "useStateの初期値はどうやって設定する？",
    answer: [
      { text: "useState(初期値)", isCorrect: true },
      { text: "state.init(初期値)", isCorrect: false },
      { text: "useState = 初期値", isCorrect: false },
      { text: "new State(初期値)", isCorrect: false },
    ]
  },
  {
    text: "Reactで状態管理に使うフックは？",
    answer: [
      { text: "useState", isCorrect: true },
      { text: "useClass", isCorrect: false },
      { text: "useEffect", isCorrect: false },
      { text: "useVar", isCorrect: false },
    ]
  },
  {
    text: "Reactとは何ですか？",
    answer: [
      { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
      { text: "Pythonライブラリ", isCorrect: false },
      { text: "HTMLテンプレートエンジン", isCorrect: false },
      { text: "CSSフレームワーク", isCorrect: false },
    ]
  },
  {
    text: "Reactアプリのエントリーポイントは？",
    answer: [
      { text: "index.js", isCorrect: true },
      { text: "server.js", isCorrect: false },
      { text: "App.js", isCorrect: false },
      { text: "main.html", isCorrect: false },
    ]
  },
  {
    text: "コンポーネントは何のために使う？",
    answer: [
      { text: "UIを部品化して再利用可能にするため", isCorrect: true },
      { text: "スタイルを適用するため", isCorrect: false },
      { text: "APIを呼ぶため", isCorrect: false },
      { text: "ファイルを読み込むため", isCorrect: false },
    ]
  },
  {
    text: "Reactで親から子へデータを渡す方法は？",
    answer: [
      { text: "propsを使う", isCorrect: true },
      { text: "contextを使う", isCorrect: false },
      { text: "stateを使う", isCorrect: false },
      { text: "emitを使う", isCorrect: false },
    ]
  },
  {
    text: "useStateの初期値はどうやって設定する？",
    answer: [
      { text: "useState(初期値)", isCorrect: true },
      { text: "state.init(初期値)", isCorrect: false },
      { text: "new State(初期値)", isCorrect: false },
      { text: "useState = 初期値", isCorrect: false },
    ]
  },
  {
    text: "useEffectの第二引数に空配列を渡すと？",
    answer: [
      { text: "マウント時に一度だけ実行される", isCorrect: true },
      { text: "毎回実行される", isCorrect: false },
      { text: "アンマウント時だけ実行される", isCorrect: false },
      { text: "一度も実行されない", isCorrect: false },
    ]
  },
  {
    text: "Reactで状態管理に使うフックは？",
    answer: [
      { text: "useState", isCorrect: true },
      { text: "useClass", isCorrect: false },
      { text: "useEffect", isCorrect: false },
      { text: "useVar", isCorrect: false },
    ]
  },
  {
    text: "Reactで1つのコンポーネントは何を返す？",
    answer: [
      { text: "1つの要素または要素のグループ", isCorrect: true },
      { text: "HTMLファイル", isCorrect: false },
      { text: "関数の配列", isCorrect: false },
      { text: "複数の値", isCorrect: false },
    ]
  },
  {
    text: "JSXとは何ですか？",
    answer: [
      { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
      { text: "データベース言語", isCorrect: false },
      { text: "ReactのAPI", isCorrect: false },
      { text: "CSS記法", isCorrect: false },
    ]
  },
  {
    text: "Reactで副作用の処理に使うフックは？",
    answer: [
      { text: "useEffect", isCorrect: true },
      { text: "useLayout", isCorrect: false },
      { text: "useState", isCorrect: false },
      { text: "useRender", isCorrect: false },
    ]
  },
  {
    text: "Reactとは何ですか？",
    answer: [
      { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
      { text: "Pythonライブラリ", isCorrect: false },
      { text: "CSSフレームワーク", isCorrect: false },
      { text: "HTMLテンプレートエンジン", isCorrect: false },
    ]
  },
  {
    text: "Reactアプリのエントリーポイントは？",
    answer: [
      { text: "index.js", isCorrect: true },
      { text: "main.html", isCorrect: false },
      { text: "App.js", isCorrect: false },
      { text: "server.js", isCorrect: false },
    ]
  },
  {
    text: "Reactで親から子へデータを渡す方法は？",
    answer: [
      { text: "propsを使う", isCorrect: true },
      { text: "stateを使う", isCorrect: false },
      { text: "emitを使う", isCorrect: false },
      { text: "contextを使う", isCorrect: false },
    ]
  },
  {
    text: "コンポーネントは何のために使う？",
    answer: [
      { text: "UIを部品化して再利用可能にするため", isCorrect: true },
      { text: "スタイルを適用するため", isCorrect: false },
      { text: "ファイルを読み込むため", isCorrect: false },
      { text: "APIを呼ぶため", isCorrect: false },
    ]
  },
  {
    text: "Reactで副作用の処理に使うフックは？",
    answer: [
      { text: "useEffect", isCorrect: true },
      { text: "useState", isCorrect: false },
      { text: "useRender", isCorrect: false },
      { text: "useLayout", isCorrect: false },
    ]
  },
  {
    text: "Reactアプリのエントリーポイントは？",
    answer: [
      { text: "index.js", isCorrect: true },
      { text: "server.js", isCorrect: false },
      { text: "App.js", isCorrect: false },
      { text: "main.html", isCorrect: false },
    ]
  },
  {
    text: "Reactとは何ですか？",
    answer: [
      { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
      { text: "CSSフレームワーク", isCorrect: false },
      { text: "HTMLテンプレートエンジン", isCorrect: false },
      { text: "Pythonライブラリ", isCorrect: false },
    ]
  },
  {
    text: "useEffectの第二引数に空配列を渡すと？",
    answer: [
      { text: "マウント時に一度だけ実行される", isCorrect: true },
      { text: "アンマウント時だけ実行される", isCorrect: false },
      { text: "毎回実行される", isCorrect: false },
      { text: "一度も実行されない", isCorrect: false },
    ]
  },
  {
    text: "JSXとは何ですか？",
    answer: [
      { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
      { text: "データベース言語", isCorrect: false },
      { text: "ReactのAPI", isCorrect: false },
      { text: "CSS記法", isCorrect: false },
    ]
  },
  {
    text: "Reactで1つのコンポーネントは何を返す？",
    answer: [
      { text: "1つの要素または要素のグループ", isCorrect: true },
      { text: "関数の配列", isCorrect: false },
      { text: "HTMLファイル", isCorrect: false },
      { text: "複数の値", isCorrect: false },
    ]
  },
  {
    text: "Reactで状態管理に使うフックは？",
    answer: [
      { text: "useState", isCorrect: true },
      { text: "useClass", isCorrect: false },
      { text: "useVar", isCorrect: false },
      { text: "useEffect", isCorrect: false },
    ]
  },
  {
    text: "useStateの初期値はどうやって設定する？",
    answer: [
      { text: "useState(初期値)", isCorrect: true },
      { text: "new State(初期値)", isCorrect: false },
      { text: "useState = 初期値", isCorrect: false },
      { text: "state.init(初期値)", isCorrect: false },
    ]
  },
  {
    text: "Reactで1つのコンポーネントは何を返す？",
    answer: [
      { text: "1つの要素または要素のグループ", isCorrect: true },
      { text: "HTMLファイル", isCorrect: false },
      { text: "複数の値", isCorrect: false },
      { text: "関数の配列", isCorrect: false },
    ]
  },
  {
    text: "Reactとは何ですか？",
    answer: [
      { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
      { text: "CSSフレームワーク", isCorrect: false },
      { text: "Pythonライブラリ", isCorrect: false },
      { text: "HTMLテンプレートエンジン", isCorrect: false },
    ]
  },
  {
    text: "useEffectの第二引数に空配列を渡すと？",
    answer: [
      { text: "マウント時に一度だけ実行される", isCorrect: true },
      { text: "毎回実行される", isCorrect: false },
      { text: "一度も実行されない", isCorrect: false },
      { text: "アンマウント時だけ実行される", isCorrect: false },
    ]
  },
  {
    text: "コンポーネントは何のために使う？",
    answer: [
      { text: "UIを部品化して再利用可能にするため", isCorrect: true },
      { text: "スタイルを適用するため", isCorrect: false },
      { text: "APIを呼ぶため", isCorrect: false },
      { text: "ファイルを読み込むため", isCorrect: false },
    ]
  },
  {
    text: "JSXとは何ですか？",
    answer: [
      { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
      { text: "データベース言語", isCorrect: false },
      { text: "ReactのAPI", isCorrect: false },
      { text: "CSS記法", isCorrect: false },
    ]
  },
  {
    text: "Reactで親から子へデータを渡す方法は？",
    answer: [
      { text: "propsを使う", isCorrect: true },
      { text: "emitを使う", isCorrect: false },
      { text: "contextを使う", isCorrect: false },
      { text: "stateを使う", isCorrect: false },
    ]
  },
  {
    text: "useStateの初期値はどうやって設定する？",
    answer: [
      { text: "useState(初期値)", isCorrect: true },
      { text: "state.init(初期値)", isCorrect: false },
      { text: "new State(初期値)", isCorrect: false },
      { text: "useState = 初期値", isCorrect: false },
    ]
  },
  {
    text: "Reactアプリのエントリーポイントは？",
    answer: [
      { text: "index.js", isCorrect: true },
      { text: "server.js", isCorrect: false },
      { text: "main.html", isCorrect: false },
      { text: "App.js", isCorrect: false },
    ]
  },
  {
    text: "Reactで副作用の処理に使うフックは？",
    answer: [
      { text: "useEffect", isCorrect: true },
      { text: "useLayout", isCorrect: false },
      { text: "useRender", isCorrect: false },
      { text: "useState", isCorrect: false },
    ]
  },
  {
    text: "Reactで状態管理に使うフックは？",
    answer: [
      { text: "useState", isCorrect: true },
      { text: "useClass", isCorrect: false },
      { text: "useVar", isCorrect: false },
      { text: "useEffect", isCorrect: false },
    ]
  },
  {
    text: "Reactで親から子へデータを渡す方法は？",
    answer: [
      { text: "propsを使う", isCorrect: true },
      { text: "stateを使う", isCorrect: false },
      { text: "emitを使う", isCorrect: false },
      { text: "contextを使う", isCorrect: false },
    ]
  },
  {
    text: "コンポーネントは何のために使う？",
    answer: [
      { text: "UIを部品化して再利用可能にするため", isCorrect: true },
      { text: "ファイルを読み込むため", isCorrect: false },
      { text: "APIを呼ぶため", isCorrect: false },
      { text: "スタイルを適用するため", isCorrect: false },
    ]
  },
  {
    text: "Reactアプリのエントリーポイントは？",
    answer: [
      { text: "index.js", isCorrect: true },
      { text: "App.js", isCorrect: false },
      { text: "server.js", isCorrect: false },
      { text: "main.html", isCorrect: false },
    ]
  },
  {
    text: "useEffectの第二引数に空配列を渡すと？",
    answer: [
      { text: "マウント時に一度だけ実行される", isCorrect: true },
      { text: "アンマウント時だけ実行される", isCorrect: false },
      { text: "毎回実行される", isCorrect: false },
      { text: "一度も実行されない", isCorrect: false },
    ]
  },
  {
    text: "Reactで1つのコンポーネントは何を返す？",
    answer: [
      { text: "1つの要素または要素のグループ", isCorrect: true },
      { text: "HTMLファイル", isCorrect: false },
      { text: "関数の配列", isCorrect: false },
      { text: "複数の値", isCorrect: false },
    ]
  },
  {
    text: "JSXとは何ですか？",
    answer: [
      { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
      { text: "ReactのAPI", isCorrect: false },
      { text: "CSS記法", isCorrect: false },
      { text: "データベース言語", isCorrect: false },
    ]
  },
  {
    text: "Reactで状態管理に使うフックは？",
    answer: [
      { text: "useState", isCorrect: true },
      { text: "useClass", isCorrect: false },
      { text: "useVar", isCorrect: false },
      { text: "useEffect", isCorrect: false },
    ]
  },
  {
    text: "Reactとは何ですか？",
    answer: [
      { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
      { text: "HTMLテンプレートエンジン", isCorrect: false },
      { text: "CSSフレームワーク", isCorrect: false },
      { text: "Pythonライブラリ", isCorrect: false },
    ]
  },
  {
    text: "Reactで副作用の処理に使うフックは？",
    answer: [
      { text: "useEffect", isCorrect: true },
      { text: "useState", isCorrect: false },
      { text: "useRender", isCorrect: false },
      { text: "useLayout", isCorrect: false },
    ]
  },
  {
    text: "useStateの初期値はどうやって設定する？",
    answer: [
      { text: "useState(初期値)", isCorrect: true },
      { text: "state.init(初期値)", isCorrect: false },
      { text: "new State(初期値)", isCorrect: false },
      { text: "useState = 初期値", isCorrect: false },
    ]
  },
  {
    text: "Reactで1つのコンポーネントは何を返す？",
    answer: [
      { text: "1つの要素または要素のグループ", isCorrect: true },
      { text: "複数の値", isCorrect: false },
      { text: "関数の配列", isCorrect: false },
      { text: "HTMLファイル", isCorrect: false },
    ]
  },
  {
    text: "Reactとは何ですか？",
    answer: [
      { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
      { text: "Pythonライブラリ", isCorrect: false },
      { text: "HTMLテンプレートエンジン", isCorrect: false },
      { text: "CSSフレームワーク", isCorrect: false },
    ]
  },
  {
    text: "Reactアプリのエントリーポイントは？",
    answer: [
      { text: "index.js", isCorrect: true },
      { text: "server.js", isCorrect: false },
      { text: "App.js", isCorrect: false },
      { text: "main.html", isCorrect: false },
    ]
  },
  {
    text: "useEffectの第二引数に空配列を渡すと？",
    answer: [
      { text: "マウント時に一度だけ実行される", isCorrect: true },
      { text: "毎回実行される", isCorrect: false },
      { text: "一度も実行されない", isCorrect: false },
      { text: "アンマウント時だけ実行される", isCorrect: false },
    ]
  },
  {
    text: "useStateの初期値はどうやって設定する？",
    answer: [
      { text: "useState(初期値)", isCorrect: true },
      { text: "useState = 初期値", isCorrect: false },
      { text: "state.init(初期値)", isCorrect: false },
      { text: "new State(初期値)", isCorrect: false },
    ]
  },
  {
    text: "Reactで親から子へデータを渡す方法は？",
    answer: [
      { text: "propsを使う", isCorrect: true },
      { text: "stateを使う", isCorrect: false },
      { text: "contextを使う", isCorrect: false },
      { text: "emitを使う", isCorrect: false },
    ]
  },
  {
    text: "JSXとは何ですか？",
    answer: [
      { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
      { text: "ReactのAPI", isCorrect: false },
      { text: "CSS記法", isCorrect: false },
      { text: "データベース言語", isCorrect: false },
    ]
  },
  {
    text: "コンポーネントは何のために使う？",
    answer: [
      { text: "UIを部品化して再利用可能にするため", isCorrect: true },
      { text: "スタイルを適用するため", isCorrect: false },
      { text: "ファイルを読み込むため", isCorrect: false },
      { text: "APIを呼ぶため", isCorrect: false },
    ]
  },
  {
    text: "Reactで状態管理に使うフックは？",
    answer: [
      { text: "useState", isCorrect: true },
      { text: "useClass", isCorrect: false },
      { text: "useEffect", isCorrect: false },
      { text: "useVar", isCorrect: false },
    ]
  },
  {
    text: "Reactで副作用の処理に使うフックは？",
    answer: [
      { text: "useEffect", isCorrect: true },
      { text: "useState", isCorrect: false },
      { text: "useLayout", isCorrect: false },
      { text: "useRender", isCorrect: false },
    ]
  },
  {
    text: "Reactとは何ですか？",
    answer: [
      { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
      { text: "CSSフレームワーク", isCorrect: false },
      { text: "Pythonライブラリ", isCorrect: false },
      { text: "HTMLテンプレートエンジン", isCorrect: false },
    ]
  },
  {
    text: "コンポーネントは何のために使う？",
    answer: [
      { text: "UIを部品化して再利用可能にするため", isCorrect: true },
      { text: "ファイルを読み込むため", isCorrect: false },
      { text: "APIを呼ぶため", isCorrect: false },
      { text: "スタイルを適用するため", isCorrect: false },
    ]
  },
  {
    text: "Reactで副作用の処理に使うフックは？",
    answer: [
      { text: "useEffect", isCorrect: true },
      { text: "useState", isCorrect: false },
      { text: "useLayout", isCorrect: false },
      { text: "useRender", isCorrect: false },
    ]
  },
  {
    text: "Reactアプリのエントリーポイントは？",
    answer: [
      { text: "index.js", isCorrect: true },
      { text: "server.js", isCorrect: false },
      { text: "App.js", isCorrect: false },
      { text: "main.html", isCorrect: false },
    ]
  },
  {
    text: "useStateの初期値はどうやって設定する？",
    answer: [
      { text: "useState(初期値)", isCorrect: true },
      { text: "state.init(初期値)", isCorrect: false },
      { text: "useState = 初期値", isCorrect: false },
      { text: "new State(初期値)", isCorrect: false },
    ]
  },
  {
    text: "Reactで状態管理に使うフックは？",
    answer: [
      { text: "useState", isCorrect: true },
      { text: "useEffect", isCorrect: false },
      { text: "useClass", isCorrect: false },
      { text: "useVar", isCorrect: false },
    ]
  },
  {
    text: "JSXとは何ですか？",
    answer: [
      { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
      { text: "ReactのAPI", isCorrect: false },
      { text: "CSS記法", isCorrect: false },
      { text: "データベース言語", isCorrect: false },
    ]
  },
  {
    text: "Reactで親から子へデータを渡す方法は？",
    answer: [
      { text: "propsを使う", isCorrect: true },
      { text: "emitを使う", isCorrect: false },
      { text: "stateを使う", isCorrect: false },
      { text: "contextを使う", isCorrect: false },
    ]
  },
  {
    text: "useEffectの第二引数に空配列を渡すと？",
    answer: [
      { text: "マウント時に一度だけ実行される", isCorrect: true },
      { text: "毎回実行される", isCorrect: false },
      { text: "一度も実行されない", isCorrect: false },
      { text: "アンマウント時だけ実行される", isCorrect: false },
    ]
  },
  {
    text: "Reactで1つのコンポーネントは何を返す？",
    answer: [
      { text: "1つの要素または要素のグループ", isCorrect: true },
      { text: "複数の値", isCorrect: false },
      { text: "関数の配列", isCorrect: false },
      { text: "HTMLファイル", isCorrect: false },
    ]
  },
  {
    text: "コンポーネントは何のために使う？",
    answer: [
      { text: "UIを部品化して再利用可能にするため", isCorrect: true },
      { text: "ファイルを読み込むため", isCorrect: false },
      { text: "APIを呼ぶため", isCorrect: false },
      { text: "スタイルを適用するため", isCorrect: false },
    ]
  },
  {
    text: "useEffectの第二引数に空配列を渡すと？",
    answer: [
      { text: "マウント時に一度だけ実行される", isCorrect: true },
      { text: "一度も実行されない", isCorrect: false },
      { text: "毎回実行される", isCorrect: false },
      { text: "アンマウント時だけ実行される", isCorrect: false },
    ]
  },
  {
    text: "Reactで状態管理に使うフックは？",
    answer: [
      { text: "useState", isCorrect: true },
      { text: "useClass", isCorrect: false },
      { text: "useVar", isCorrect: false },
      { text: "useEffect", isCorrect: false },
    ]
  },
  {
    text: "Reactで1つのコンポーネントは何を返す？",
    answer: [
      { text: "1つの要素または要素のグループ", isCorrect: true },
      { text: "HTMLファイル", isCorrect: false },
      { text: "関数の配列", isCorrect: false },
      { text: "複数の値", isCorrect: false },
    ]
  },
  {
    text: "Reactとは何ですか？",
    answer: [
      { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
      { text: "HTMLテンプレートエンジン", isCorrect: false },
      { text: "CSSフレームワーク", isCorrect: false },
      { text: "Pythonライブラリ", isCorrect: false },
    ]
  },
  {
    text: "JSXとは何ですか？",
    answer: [
      { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
      { text: "CSS記法", isCorrect: false },
      { text: "データベース言語", isCorrect: false },
      { text: "ReactのAPI", isCorrect: false },
    ]
  },
  {
    text: "useStateの初期値はどうやって設定する？",
    answer: [
      { text: "useState(初期値)", isCorrect: true },
      { text: "new State(初期値)", isCorrect: false },
      { text: "useState = 初期値", isCorrect: false },
      { text: "state.init(初期値)", isCorrect: false },
    ]
  },
  {
    text: "Reactで副作用の処理に使うフックは？",
    answer: [
      { text: "useEffect", isCorrect: true },
      { text: "useState", isCorrect: false },
      { text: "useRender", isCorrect: false },
      { text: "useLayout", isCorrect: false },
    ]
  },
  {
    text: "Reactで親から子へデータを渡す方法は？",
    answer: [
      { text: "propsを使う", isCorrect: true },
      { text: "emitを使う", isCorrect: false },
      { text: "contextを使う", isCorrect: false },
      { text: "stateを使う", isCorrect: false },
    ]
  },
  {
    text: "Reactアプリのエントリーポイントは？",
    answer: [
      { text: "index.js", isCorrect: true },
      { text: "App.js", isCorrect: false },
      { text: "main.html", isCorrect: false },
      { text: "server.js", isCorrect: false },
    ]
  },
  {
    text: "Reactで親から子へデータを渡す方法は？",
    answer: [
      { text: "propsを使う", isCorrect: true },
      { text: "emitを使う", isCorrect: false },
      { text: "stateを使う", isCorrect: false },
      { text: "contextを使う", isCorrect: false },
    ]
  },
  {
    text: "JSXとは何ですか？",
    answer: [
      { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
      { text: "ReactのAPI", isCorrect: false },
      { text: "データベース言語", isCorrect: false },
      { text: "CSS記法", isCorrect: false },
    ]
  },
  {
    text: "useEffectの第二引数に空配列を渡すと？",
    answer: [
      { text: "マウント時に一度だけ実行される", isCorrect: true },
      { text: "毎回実行される", isCorrect: false },
      { text: "一度も実行されない", isCorrect: false },
      { text: "アンマウント時だけ実行される", isCorrect: false },
    ]
  },
  {
    text: "コンポーネントは何のために使う？",
    answer: [
      { text: "UIを部品化して再利用可能にするため", isCorrect: true },
      { text: "APIを呼ぶため", isCorrect: false },
      { text: "スタイルを適用するため", isCorrect: false },
      { text: "ファイルを読み込むため", isCorrect: false },
    ]
  },
  {
    text: "Reactで状態管理に使うフックは？",
    answer: [
      { text: "useState", isCorrect: true },
      { text: "useVar", isCorrect: false },
      { text: "useClass", isCorrect: false },
      { text: "useEffect", isCorrect: false },
    ]
  },
  {
    text: "Reactアプリのエントリーポイントは？",
    answer: [
      { text: "index.js", isCorrect: true },
      { text: "main.html", isCorrect: false },
      { text: "server.js", isCorrect: false },
      { text: "App.js", isCorrect: false },
    ]
  },
  {
    text: "Reactで副作用の処理に使うフックは？",
    answer: [
      { text: "useEffect", isCorrect: true },
      { text: "useLayout", isCorrect: false },
      { text: "useRender", isCorrect: false },
      { text: "useState", isCorrect: false },
    ]
  },
  {
    text: "useStateの初期値はどうやって設定する？",
    answer: [
      { text: "useState(初期値)", isCorrect: true },
      { text: "useState = 初期値", isCorrect: false },
      { text: "new State(初期値)", isCorrect: false },
      { text: "state.init(初期値)", isCorrect: false },
    ]
  },
  {
    text: "Reactで1つのコンポーネントは何を返す？",
    answer: [
      { text: "1つの要素または要素のグループ", isCorrect: true },
      { text: "複数の値", isCorrect: false },
      { text: "HTMLファイル", isCorrect: false },
      { text: "関数の配列", isCorrect: false },
    ]
  },
  {
    text: "Reactとは何ですか？",
    answer: [
      { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
      { text: "Pythonライブラリ", isCorrect: false },
      { text: "HTMLテンプレートエンジン", isCorrect: false },
      { text: "CSSフレームワーク", isCorrect: false },
    ]
  },
  {
    text: "JSXとは何ですか？",
    answer: [
      { text: "JavaScript内でHTMLのような構文を使うための記法", isCorrect: true },
      { text: "ReactのAPI", isCorrect: false },
      { text: "データベース言語", isCorrect: false },
      { text: "CSS記法", isCorrect: false },
    ]
  },
  {
    text: "Reactで状態管理に使うフックは？",
    answer: [
      { text: "useState", isCorrect: true },
      { text: "useEffect", isCorrect: false },
      { text: "useVar", isCorrect: false },
      { text: "useClass", isCorrect: false },
    ]
  },
  {
    text: "useStateの初期値はどうやって設定する？",
    answer: [
      { text: "useState(初期値)", isCorrect: true },
      { text: "new State(初期値)", isCorrect: false },
      { text: "state.init(初期値)", isCorrect: false },
      { text: "useState = 初期値", isCorrect: false },
    ]
  },
  {
    text: "コンポーネントは何のために使う？",
    answer: [
      { text: "UIを部品化して再利用可能にするため", isCorrect: true },
      { text: "APIを呼ぶため", isCorrect: false },
      { text: "スタイルを適用するため", isCorrect: false },
      { text: "ファイルを読み込むため", isCorrect: false },
    ]
  },
  {
    text: "Reactで副作用の処理に使うフックは？",
    answer: [
      { text: "useEffect", isCorrect: true },
      { text: "useLayout", isCorrect: false },
      { text: "useRender", isCorrect: false },
      { text: "useState", isCorrect: false },
    ]
  },
  {
    text: "Reactで親から子へデータを渡す方法は？",
    answer: [
      { text: "propsを使う", isCorrect: true },
      { text: "contextを使う", isCorrect: false },
      { text: "emitを使う", isCorrect: false },
      { text: "stateを使う", isCorrect: false },
    ]
  },
  {
    text: "useEffectの第二引数に空配列を渡すと？",
    answer: [
      { text: "マウント時に一度だけ実行される", isCorrect: true },
      { text: "アンマウント時だけ実行される", isCorrect: false },
      { text: "毎回実行される", isCorrect: false },
      { text: "一度も実行されない", isCorrect: false },
    ]
  },
  {
    text: "Reactとは何ですか？",
    answer: [
      { text: "ユーザーインターフェースを構築するためのJavaScriptライブラリ", isCorrect: true },
      { text: "CSSフレームワーク", isCorrect: false },
      { text: "Pythonライブラリ", isCorrect: false },
      { text: "HTMLテンプレートエンジン", isCorrect: false },
    ]
  },
  {
    text: "Reactで1つのコンポーネントは何を返す？",
    answer: [
      { text: "1つの要素または要素のグループ", isCorrect: true },
      { text: "複数の値", isCorrect: false },
      { text: "関数の配列", isCorrect: false },
      { text: "HTMLファイル", isCorrect: false },
    ]
  },
  {
    text: "Reactアプリのエントリーポイントは？",
    answer: [
      { text: "index.js", isCorrect: true },
      { text: "server.js", isCorrect: false },
      { text: "App.js", isCorrect: false },
      { text: "main.html", isCorrect: false },
    ]
  },
];

