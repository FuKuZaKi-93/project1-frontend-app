
var wordArray = [
    { default:"する", changed:["する", "なさる，される", "させていただく", "いたします"] },
    { default:"言う", changed:["言う", "おっしゃる，言われる", "申し上げる", "申し上げます"] },
    { default:"行く", changed:["行く", "いらっしゃる", "うかがう", "参ります"] },
    { default:"来る", changed:["来る", "いらっしゃる，見える", "参る", "来ます"] },
    { default:"知る", changed:["知る", "お知りになる，ご存じだ", "存じる，承知する", "知っています"] },
    { default:"食べる", changed:["食べる", "召し上がる，おあがりになる", "いただく，頂戴する", "食べます"] },
    { default:"いる", changed:["いる", "いらっしゃる，おいでになる", "おる", "います"] },
    { default:"見る", changed:["見る", "ご覧になる", "拝見する", "見ます"] },
    { default:"聞く", changed:["聞く", "お聞きになる", "拝聴する，うかがう", "聞きます"] },
    { default:"会う", changed:["会う", "お会いになる", "お目にかかる", "会います"] },
    { default:"伝える", changed:["伝える", "お伝えになる", "申し伝える", "伝えます"] },
    { default:"わかる", changed:["わかる", "お分かりになる，ご理解いただく", "かしこまる，承知する", "わかります"] },
    { default:"読む", changed:["読む", "お読みになる", "拝読する", "読みます"] },
    { default:"与える", changed:["与える", "くださる", "いただく，頂戴する", "あげます，差し上げる"] },
    { default:"受け取る", changed:["受け取る", "お受け取りになる", "賜る，頂戴する", "受け取ります"] },
    { default:"思う", changed:["思う", "お思いになる，おぼし召す", "存じ上げる，拝察する", "思います"] },
    { default:"買う", changed:["買う", "お求めになる", "買わせていただく", "買います"] },
    { default:"考える", changed:["考える", "お考えになる，ご高察なさる", "考えておる，拝察する", "考えます"] },
    { default:"待つ", changed:["待つ", "お待ちになる", "お待ちする", "待ちます"] },
    { default:"帰る", changed:["帰る", "お帰りになる，帰られる", "おいとまする", "帰ります"] },
    { default:"持つ", changed:["頑張る", "ご尽力，お励みになる", "努力させていただく，努めさせていただく", "頑張ります"] },
    { default:"借りる", changed:["借りる", "お借りになる", "拝借する，お借りする", "借ります"] },
    { default:"助ける", changed:["助ける", "ご支援，お力添え", "お手伝いさせていただく", "助けます"] },
    { default:"尋ねる", changed:["尋ねる", "お尋ねになる，お問い合わせになる", "うかがう，お尋ねする", "尋ねます"] }
];


$('.lv').click(
    function(){$('.lv:not(this)').addClass('notselected')},
);
$('.lv').click(
    function(){$(this).removeClass('notselected')}
);


var level= 0;
$('#level1').click(
    function(){level = 1;}
);
$('#level2').click(
    function(){level = 2;}
);
$('#level3').click(
    function(){level = 3;}
);
function change(word){
    var flg = 0;
    return function(){
        if(level===1){
            if(flg===1){
                $(this).removeClass('level1');
                flg = 0;
            }else{
                $(this).removeClass('level2 level3');                
                $(this).addClass('level1');
                flg = 1;
            };
        }else if(level===2){
            if(flg===2){
                $(this).removeClass('level2');
                flg = 0;
            }else{
                $(this).removeClass('level1 level3');                
                $(this).addClass('level2');
                flg = 2;
            };
        }else if(level===3){
            if(flg===3){
                $(this).removeClass('level3');
                flg = 0;
            }else{
                $(this).removeClass('level1 level2')
                $(this).addClass('level3');
                flg = 3;
            }
        }else{
            flg = 0;
        };
        $(this).text(word[flg]);
    };
}
$.each(wordArray, function(index, value){
    var record = $("<tr></tr>")
        .append($("<td>" + value.changed[0] + "</td>")
            .click(change(value.changed)));
    $("#Words").append(record);
});