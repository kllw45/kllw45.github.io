// poem
var words = [
    '当你老了',
    '头白了',
    '睡意昏沉',
    '炉火旁打盹',
    '请取下这部诗歌',
    '慢慢读',
    '回想你过去眼神的柔和',
    '回想它们昔日浓重的阴影',
    '多少人爱你青春欢畅的时辰',
    '爱慕你的美丽',
    '假意或真心',
    '只有一个人爱你那朝圣者的灵魂',
    '爱你衰老了的脸上痛苦的皱纹',
    '垂下头来',
    '在红光闪耀的炉子旁',
    '凄然地轻轻诉说那爱情的消逝',
    '在头顶的山上它缓缓踱着步子',
    '在一群星星中间隐藏着脸庞',
    '青青子衿',
    '悠悠我心',
    '纵我不往',
    '子宁不嗣音',
    '青青子佩',
    '悠悠我思',
    '纵我不往',
    '子宁不来',
    '挑兮达兮',
    '在城阙兮',
    '一日不见',
    '如三月兮',
    '投我以木瓜，报之以琼琚',
    '匪报也，永以为好也！',
    '投我以木桃，报之以琼琚',
    '匪报也，永以为好！',
    '投我以木李，报之以琼玖',
    '匪报也，永以为好也！',
    '星星们高挂空中',
    '千万年一动不动',
    '彼此在遥遥相望',
    '满怀着爱的伤痛',
    '它们说着一种语言',
    '美丽悦耳，含义无穷',
    '世界上的语言学家',
    '谁也没法将它听懂',
    '可我学过这种语言',
    '并且牢记在了心中',
    '供我学习用的语法',
    '就是我爱人的面容',
    '关关雎鸠，在河之洲',
    '窈窕淑女，君子好逑',
    '参差荇菜，左右流之',
    '窈窕淑女，寤寐求之',
    '求之不得，寤寐思服',
    '悠哉悠哉，辗转反侧',
    '参差荇菜，左右采之',
    '窈窕淑女，琴瑟友之',
    '参差荇菜，左右芼之',
    '窈窕淑女，钟鼓乐之',
    '死生契阔，与子成悦',
    '执子之手，与子偕老',
    '于嗟阔兮，不我活兮',
    '于嗟洵兮，不我信兮',
    '我欲与君相知，长命无绝衰',
    '山无陵，江水为竭',
    '冬雷震震，夏雨雪',
    '天地合，乃敢与君绝',
    '东风夜放花千树，更吹落，星如雨',
    '宝马雕车香满路',
    '凤箫声动，玉壶光转，一夜鱼龙舞',
    '蛾儿雪柳黄金缕，笑语盈盈暗香去',
    '众里寻他千百度',
    '蓦然回首，那人却在，灯火阑珊处'
];
function randomNum(min, max) {
    var num = (Math.random() * (max - min + 1) + min).toFixed(2);
    return num;
}
function init() {
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w => {
        let word_box = document.createElement('div');
        let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top", randomNum(-40, 20) + 'vh');
        word_box.style.setProperty("--margin-left", randomNum(6, 35) + 'vw');
        word_box.style.setProperty("--animation-duration", randomNum(8, 20) + 's');
        word_box.style.setProperty("--animation-delay", randomNum(-20, 0) + 's');

        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load', init);
let textone = document.querySelector('.textone').querySelector('h1');
let texttwo = document.querySelector('.texttwo').querySelector('h1');
let textthree = document.querySelector('.textthree').querySelector('h1');

setTimeout(function () {
    textone.innerHTML = '今晚，整片星空将为你一人闪烁';
    textone.style.color = '#E8F9FD';
    textone.style.fontFamily = '楷体'
    texttwo.style.color = '#E8F9FD';
    texttwo.style.fontFamily = '楷体'
    textthree.style.color = '#E8F9FD';
    textthree.style.fontFamily = '楷体'
    texttwo.innerHTML = '';
}, 28000)
setTimeout(function () {
    textone.innerHTML = '从前从前,有个人爱你很久';
    texttwo.innerHTML = '但偏偏，风渐渐';
    textthree.innerHTML = '把距离吹的好远';
}, 112500)



