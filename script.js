

$(function () {
    // jqueryで値を取ってくる関数はval()
    // console.log('hello world');

    $('button').on('click', function () {
        let snack = $('input').val();
        let parameter = {
            apiky: snack


        }
        // Ajaxの書き方

        $.ajax({  
            url: 'https://sysbird.jp/toriko/api/', //アクセスするURL
            type: 'get', //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'jsonp',     //data type script・xmlDocument・jsonなど
            data: parameter,           //アクセスするときに必要なデータを記載      
        })
            .done(function (response) {
                //通信成功時の処理
                console.log(response);
                console.log(response.item[0].image);
                console.log(response.item[0].name);
                console.log(response.item[0].price);


                for (temple of response.item) {
                    console.log(temple);
                    let template = `<div class="result-01">
                    <img src="${temple.image}" alt="">
                    <h1>${temple.name}</h1>
                    <p>${temple.price}</p>
                </div>`;
                    $(".result").append(template);
                }





                //成功したとき実行したいスクリプトを記載
            })
            .fail(function (xhr) {
                //通信失敗時の処理
                //失敗したときに実行したいスクリプトを記載
            })
            .always(function (xhr, msg) {
                //通信完了時の処理
                //結果に関わらず実行したいスクリプトを記載
            });








        // $.ajax({
        //     url: 'https://sysbird.jp/toriko/api/', //アクセスするURL
        //     type: 'get', //post or get
        //     cache: false,        //cacheを使うか使わないかを設定
        //     dataType: 'json',     //data type script・xmlDocument・jsonなど
        //     data: parameter,           //アクセスするときに必要なデータを記載      
        // })
        //     .done(function (response) {
        //         //通信成功時の処理

        //         // 中身の取り出し方
        //         // 配列名[要素番号]

        //         // console.log();results[0]

        //         // DOMの操作　jquery append関数

        //         //成功したとき実行したいスクリプトを記載
        //     })

        //     .fail(function (xhr) {
        //         //通信失敗時の処理
        //         //失敗したときに実行したいスクリプトを記載
        //     })
        //     .always(function (xhr, msg) {
        //         //通信完了時の処理
        //         //結果に関わらず実行したいスクリプトを記載
        //     });







    })



}) //ここが最後

