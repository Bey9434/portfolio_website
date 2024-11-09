document.body.addEventListener("click", drop, false);
function drop(e) {

    console.log("クリックされました", e.pageX, e.pageY);
    // 4つの弾痕画像のURLリスト
    const bulletImages = [
        `${baseurl}/img/effects/k0100_0.png`,
        `${baseurl}/img/effects/k0100_1.png`,
        `${baseurl}/img/effects/k0100_2.png`,
        `${baseurl}/img/effects/k0100_3.png`
    ];

    console.log(randomImage); // 正しいパスが表示されているか確認

     // ランダムに1つの画像URLを選択
     const randomImage = bulletImages[Math.floor(Math.random() * bulletImages.length)];

    //座標の取得
    var x = e.pageX;
    var y = e.pageY;

    //bulletになるdivの生成、座標の設定
    var bullet = document.createElement("div");
    bullet.style.top = y + "px";
    bullet.style.left = x + "px";
    bullet.style.backgroundImage = `url(${randomImage})`; // ランダム画像を設定
    document.body.appendChild(bullet);

    //アニメーションをする className を付ける
    bullet.className = "bullet";
    

    //アニメーションが終わった事を感知してbulletを remove する
    bullet.addEventListener("animationend", function() {
        this.parentNode.removeChild(this);
    }, false);
}