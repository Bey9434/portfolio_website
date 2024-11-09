document.body.addEventListener("click", drop, false);

function drop(e) {
    console.log("クリックされました", e.pageX, e.pageY);

    // 弾痕画像のURLリストを定義
    const bulletImages = [
        `${baseurl}/img/effects/k0100_0.png`,
        `${baseurl}/img/effects/k0100_1.png`,
        `${baseurl}/img/effects/k0100_2.png`,
        `${baseurl}/img/effects/k0100_3.png`
    ];

    // ランダムに1つの画像URLを選択
    const randomImage = bulletImages[Math.floor(Math.random() * bulletImages.length)];
    console.log("選択された画像URL:", randomImage); // URLを確認

    // 座標の取得
    const x = e.pageX;
    const y = e.pageY;

    // 弾痕になるdivを生成
    const bullet = document.createElement("div");
    bullet.style.top = y + "px";
    bullet.style.left = x + "px";
    bullet.style.backgroundImage = `url(${randomImage})`; // ランダム画像を設定
    document.body.appendChild(bullet);

    // アニメーションのクラスを設定
    bullet.className = "bullet";

    // アニメーション終了後に要素を削除
    bullet.addEventListener("animationend", function() {
        this.parentNode.removeChild(this);
    }, false);
}
