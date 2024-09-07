# umeko-chan-embed

`umeko-chan-embed` は、Webコンポーネントライブラリ `haguruma-ui` をベースに、簡単に埋め込みスクリプトを作成できるデモサイトです。このサイトを利用することで、バナーやお知らせバーなどのコンポーネントを簡単にカスタマイズし、即座に埋め込みコードを生成して、Webサイトに手軽に導入することができます。

## `haguruma-ui` とは？

https://www.npmjs.com/package/haguruma-ui

[`haguruma-ui`](https://www.npmjs.com/package/haguruma-ui) は、ECサイトやブログに向けてバナーやお知らせバーを簡単に表示できるUIコンポーネントライブラリです。複雑な設定やプログラミングスキルがなくても、HTMLタグを追加するだけで簡単に導入できます。

## 主な特徴
バナー表示: セールやキャンペーン情報を目立つ形で表示できるバナーコンポーネント。
お知らせバー: ページ上部に固定表示され、重要な情報を訪問者に伝えるお知らせバー。
これらのコンポーネントは、テキストやリンク、デザイン（色など）をカスタマイズ可能で、柔軟にサイトのデザインに合わせることができます。

## `umeko-chan-embed` の特徴
`umeko-chan-embed` では、`haguruma-ui` のコンポーネントをラップして、さらに簡単に埋め込めるスクリプトを生成できる機能を提供しています。サイト上で設定を選び、プレビューを確認しながら埋め込みコードを生成し、そのままコピーペーストで利用できるため、初心者にも使いやすいツールです。

## 主な機能
- リアルタイムプレビュー: バナーやお知らせバーのカスタマイズ内容がリアルタイムでプレビューされ、即座に結果を確認できます。
- 埋め込みコードの自動生成: 必要なスクリプトとHTMLタグを自動生成し、ユーザーは簡単にコピーペーストで導入可能です。
JavaScriptラッパー: `haguruma-ui` の各コンポーネントをラップしたJavaScriptを利用することで、さらに簡単にカスタマイズされたコンポーネントを埋め込むことができます。

#### 使用例
以下は、お知らせバーを `umeko-chan-embed` を通じて簡単に導入する例です。

```html
<div id="umeko__informationBar" data-text="年末年始休業のお知らせ！" data-url="https://www.yahoo.co.jp" data-category="primary" data-position="fixed"></div><script type="module" src="https://haguruma-embed.web.app/informationBar.js"></script>
```

`haguruma-ui` をインストールして導入した場合下記のようなコードとなります。
```js
<h-information-bar
  text={'年末年始のお知らせ！'}
  url={'https://www.yahoo.co.jp'}
  category={'primary'}
  position={'fixed'}
></h-information-bar>
```

またこのスクリプトを作成するのに試すことができるサイト [`umeko-chan-demo-site`](https://umekochan.web.app/) があります。


このスクリプトをページに埋め込むだけで、設定したお知らせバーが表示されます。`umeko-chan-embed` では、このように簡単にコンポーネントのカスタマイズが可能で、すぐに導入できる埋め込みコードを提供しています。
