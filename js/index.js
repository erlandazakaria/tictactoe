// JavaScript Document
// width 3x3 - row1 = 1 until width(3) 
//           - row2 = width+1(4) until widthx2(6) 
//           - row3 = widthx2(6)+1 until widthx3(9)
// width 4x4 - row1 = 1 until width(4) 
//           - row2 = width+1(5) until widthx2(8) 
//           - row3 = widthx2(8)+1 until width3(12) 
//           - row4 = widthx3(12)+1 until widthx4(16)
// width 5x5 - row1 = 1 until width(5) 
//           - row2 = width+1(6) until widthx2(10) 
//           - row3 = widthx2(11)+1 until width3(15) 
//           - row4 = widthx3(15)+1 until widthx4(20) 
//           - row5 = widthx4(20)+1 until widthx5(25)

// width 3x3 - column1 = 1, width+1=4, (widthx2)+1=7 
//           - column2 = 2, width+2=5, (widthx2)+2=8 
//           - column3 = 3, width+3=6, (widthx2)+3=9
// width 4x4 - column1 = 1, width+1=5, (widthx2)+1=9, (widthx3)+1=13 
//           - column2 = 2, width+2=6, (widthx2)+2=10, (widthx3)+2=14 
//           - column3 = 3, width+3=7, (widthx2)+3=11, (widthx3)+3=15 
//           - column4 = 4, width+4=8, (widthx2)+4=12, (widthx3)+4=16
// width 5x5 - column1 = 1, width+1=6, (widthx2)+1=11, (widthx3)+1=16, (widthx4)+1=21 
//           - column2 = 2, width+2=7, (widthx2)+2=12, (widthx3)+2=17, (widthx4)+2=22 
//           - column3 = 3, width+3=8, (widthx2)+3=13, (widthx3)+3=18, (widthx4)+3=24 
//           - column4 = 4, width+4=9, (widthx2)+4=14, (widthx3)+4=19, (widthx4)+4=24 
//           - column5 = 5, width+5=10, (widthx2)+5=15, (widthx3)+5=20, (widthx4)+5=25

// width 3x3 - diagonal1 = 1, width+2=5, (widthx2)+3=9 
//           - diagonal2 = width, (widthx2)-1=5, (widthx3)-2=7
// width 4x4 - diagonal1 = 1, width+2=6, (widthx2)+3=11, (widthx3)+4=16 
//           - diagonal2 = width, (widthx2)-1=7, (widthx3)-2=10, (widthx4)-3=13
// width 5x5 - diagonal1 = 1, width+2=7, (widthx2)+3=13, (widthx3)+4=19, (widthx4)+5=25 
//           - diagonal2 = width, (widthx2)-1=9, (widthx3)-2=13, (widthx4)-3=17. (widthx5)-4=21
             
var count = 0;
var arraySubmittedO = [];
var arraySubmittedX = [];
var o_win = 0;
var x_win = 0;

function tambah(idnya){
    // addRows();
    let attrId = $(idnya).attr("id");
    let stringIdnya = String(attrId);
    let board_size_dua = $('.input_size').val();
    let board_size_dua_number = Number(board_size_dua);
    let totalCount = (board_size_dua_number*board_size_dua_number)-1;
    if(count == totalCount){
        alert('Its a tie. The game will restart.');
        // $('.input_size').val("");
        // $('#playgame').removeAttr("disabled");
        // $('.input_size').removeAttr("disabled");
        // $('.divX').remove();
        // count = 0;
        // arraySubmittedO = [];
        // arraySubmittedX = [];
        restart();
    }
    else if(count%2 == 0){
        count++
        $(idnya).text("O");
        $(idnya).addClass('disable btn-primary');
        $(idnya).attr("disabled", "disabled");
        arraySubmittedO.push(stringIdnya);
        console.log("arraySubmittedO :" + arraySubmittedO);
        checkRows();
        checkCols();
        checkDiags();
    }
    else{
        count++
        $(idnya).text("X");
        $(idnya).addClass('disable btn-info');
        $(idnya).attr("disabled", "disabled");
        arraySubmittedX.push(stringIdnya);
        console.log("arraySubmittedX :" + arraySubmittedX);
        checkRows();
        checkCols();
        checkDiags();
    }
}

function checkRows(){
    let board_size_tiga = $('.input_size').val();
    let objectInput = {};
    let jumlahabc = Number(board_size_tiga);
    let jumlahArray = jumlahabc + 1;
    for(let k = 1; k < jumlahArray; k++){
        let kString = String(k);
        let namaArray = "rows" + kString;
        let isiArray = [];
        for(let l = 0; l < board_size_tiga; l++){
            let penambahan = (jumlahabc*k)-l;
            isiArray.push(penambahan);
        }
        isiArray.reverse();
        objectInput[namaArray] = isiArray;
    }

    for(let m = 1; m < jumlahArray; m++){
        let mString = String(m);
        let namaArraySatu = "rows" + mString;
        let gege = objectInput[namaArraySatu];
        let jumlahygsamaO = 0;
        let jumlahygsamaX = 0;
        gege.forEach(carilah =>{
            let atolah = arraySubmittedO.find(function(aww){
                let cocok = aww == carilah;
                return cocok;
            });
            let ayolah = arraySubmittedX.find(function(awwa){
                let cocoka = awwa == carilah;
                return cocoka;
            });
            if(atolah != null){ jumlahygsamaO++ }
            else if(ayolah != null){ jumlahygsamaX++ }
            else{  }
        });
        if(jumlahygsamaO == jumlahabc){ alert("O WINS"); oWins(); } 
        if(jumlahygsamaX == jumlahabc){ alert("X WINS"); xWins(); }
    }
}
function checkCols(){
    let board_size_tiga = $('.input_size').val();
    let objectInput = {};
    let jumlahabc = Number(board_size_tiga);
    let jumlahArray = jumlahabc + 1;
    for(let k = 1; k < jumlahArray; k++){
        let kString = String(k);
        let namaArray = "cols" + kString;
        let isiArray = [];
        for(let l = 0; l < board_size_tiga; l++){
            let penambahanKolom = (jumlahabc*l)+k;
            isiArray.push(penambahanKolom);
        }
        isiArray.reverse();
        objectInput[namaArray] = isiArray;
    }

    for(let m = 1; m < jumlahArray; m++){
        let mString = String(m);
        let namaArraySatu = "cols" + mString;
        let gege = objectInput[namaArraySatu];
        let jumlahygsamaO = 0;
        let jumlahygsamaX = 0;
        gege.forEach(carilah =>{
            let atolah = arraySubmittedO.find(function(aww){
                let cocok = aww == carilah;
                return cocok;
            });
            let ayolah = arraySubmittedX.find(function(awwa){
                let cocoka = awwa == carilah;
                return cocoka;
            });
            if(atolah != null){ jumlahygsamaO++ }
            else if(ayolah != null){ jumlahygsamaX++ }
            else{ }
        });
        if(jumlahygsamaO == jumlahabc){ alert("O WINS"); oWins();} 
        if(jumlahygsamaX == jumlahabc){ alert("X WINS"); xWins();}
    }
}
function checkDiags(){
    let board_size_tiga = $('.input_size').val();
    let objectInput = {};
    let jumlahabc = Number(board_size_tiga);
    let jumlahArray = jumlahabc + 1;
    for(let k = 1; k < 3; k++){
        let kString = String(k);
        let namaArray = "diags" + kString;
        let isiArray = [];
        //1 5 9
        //3 5 7
        //   - diagonal1 = 1, width+2=5, (widthx2)+3=9 
        //   - diagonal2 = width, (widthx2)-1=5, (widthx3)-2=7
        //   - diagonal1 = (widthx0)+1, (widthx1)+2=5, (widthx2)+3=9
        //   - diagonal2 = (widthx1)-0=3 , (widthx2)-1=5 (widthx3)-2=7
        //k 1
        //l 0
        //abc 3
        if(kString == 1){
            let km = 1;
            for(let l = 0; l < jumlahabc; l++, km++){
                let penambahanDiags = (jumlahabc*l)+km;
                isiArray.push(penambahanDiags);
                // console.log("l adalah", l);
                // console.log("k adalah", k);
                // console.log("yg masuk arr adalah", penambahanDiags);
            }
        }
        else{
            let nm = 1;
            for(let n = 0; n < jumlahabc; n++, nm++){
                let penambahanDiags = (jumlahabc*nm)-n;
                isiArray.push(penambahanDiags);
            }
        }
        objectInput[namaArray] = isiArray;
    }

    for(let m = 1; m < 3; m++){
        let mString = String(m);
        let namaArraySatu = "diags" + mString;
        let gege = objectInput[namaArraySatu];
        let jumlahygsamaO = 0;
        let jumlahygsamaX = 0;
        gege.forEach(carilah =>{
            let atolah = arraySubmittedO.find(function(aww){
                let cocok = aww == carilah;
                return cocok;
            });
            let ayolah = arraySubmittedX.find(function(awwa){
                let cocoka = awwa == carilah;
                return cocoka;
            });
            if(atolah != null){ jumlahygsamaO++ }
            else if(ayolah != null){ jumlahygsamaX++ }
            else{  }
        });
        if(jumlahygsamaO == jumlahabc){ alert("O WINS"); oWins(); } 
        if(jumlahygsamaX == jumlahabc){ alert("X WINS"); xWins(); }
    }
}
function oWins(){
    o_win++
    $('#o_win').text(o_win);
}
function xWins(){
    x_win++
    $('#x_win').text(x_win);
}
function restart(){
    $('.input_size').val("");
    $('#playgame').removeAttr("disabled");
    $('.input_size').removeAttr("disabled");
    $('.divX').remove();
    count = 0;
    arraySubmittedO = [];
    arraySubmittedX = [];
}

$(document).ready(function() {
    
    $('#playgame').click(function(){
    $('#playgame').attr("disabled", "disabled");
    $('.input_size').attr("disabled", "disabled");
    let board_size = $('.input_size').val();
    if(board_size == 0){
        alert("Fill Board Size First!!");
        $('#playgame').removeAttr("disabled");
        $('.input_size').removeAttr("disabled");
    }
    else if(board_size < 3){
        alert("Board Size Cannot be Negative or Less Than 3!!");
        $('#playgame').removeAttr("disabled");
        $('.input_size').removeAttr("disabled");
    }
    else if(board_size > 14){
        alert("Board Size Cannot Be More Than 14 For Fineness Purpose!!");
        $('#playgame').removeAttr("disabled");
        $('.input_size').removeAttr("disabled");
    }
    else{
        
        let column= "";
        for(let j = 0; j < board_size; j++){
            column = column + " 60px"
        }
        let masukkan = "grid-template-columns:" + column;
        $('.gamespace').attr("style", masukkan);
        let board_area = board_size*board_size;
        for(let i = 0; i < board_area; i++){
            let iplus = i +1;
            $('.gamespace').append("<div class=\"divX\"><button class=\"btnplus btn\" id=\"" + iplus + "\" onClick=\"tambah(this)\" >+</button></div>");
        }
    }
    });
        $("#restartgame").click(function () {
            $('.input_size').val("");
            $('#playgame').removeAttr("disabled");
            $('.input_size').removeAttr("disabled");
            $('.divX').remove();
            count = 0;
            arraySubmittedO = [];
            arraySubmittedX = [];
        });
});