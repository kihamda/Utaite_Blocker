window.addEventListener("load", main, false);

function main(e) {
  //読み込みの遅延を作る
  const jsInitCheckTimer = setInterval(jsLoaded, 600);

  function jsLoaded() {
    //クラス名から要素を選択
    var foo01 = document.getElementsByClassName(
      "title style-scope ytmusic-player-bar"
    );

    //title変数に曲名を代入
    var title = foo01[0].textContent;
    console.log(title);

    //歌ってみた検出
    if (title.match(/歌ってみた/)) {
      console.log("歌い手検出！");
      var next = document.getElementsByClassName(
        "next-button style-scope ytmusic-player-bar"
      );
      next[0].click();
    }

    //踊ってみた検出
    if (title.match(/踊ってみた/)) {
      console.log("踊り手検出！");
      var next = document.getElementsByClassName(
        "next-button style-scope ytmusic-player-bar"
      );
      next[0].click();
    }
  }
}
