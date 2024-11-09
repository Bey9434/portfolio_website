document.body.addEventListener("click", drop, false);

function drop(e) {
    let x, y;

    if (e.type === "touchstart") {
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
    } else {
        x = e.pageX;
        y = e.pageY;
    }

    // 弾痕画像のURLリストを定義
    const bulletImages = [
        `img/effects/k0100_0.png`,
        `img/effects/k0100_1.png`,
        `img/effects/k0100_2.png`,
        `img/effects/k0100_3.png`
    ];

    // ランダムに1つの画像URLを選択
    const randomImage = bulletImages[Math.floor(Math.random() * bulletImages.length)];

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
