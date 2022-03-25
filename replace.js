const PI = Math.PI;

var r = {};

r.replace = function(answers) {
    if(answers.indexOf('氨')!=-1&&answers.indexOf('氮')!=-1) answers = answers.replace(/氨/g, "氦");
    if(answers.indexOf('戈')!=-1&&answers.indexOf('矛')!=-1) answers = answers.replace(/载/g, "戟");
    if(answers.indexOf('泰')!=-1&&answers.indexOf('樱')!=-1) answers = answers.replace(/泰/g, "菽");
    if(answers.indexOf('缘')!=-1&&answers.indexOf('舜')!=-1) answers = answers.replace(/缘/g, "鲧");
    if(answers.indexOf('放松活动')!=-1&&answers.indexOf('基本活动')!=-1) answers = answers.replace(/一/g, "");
    if(answers.indexOf('辑拿')!=-1&&answers.indexOf('绳拿')!=-1) answers = answers.replace(/绳拿/g, "缉拿");
    if(answers.indexOf('黄海')!=-1&&answers.indexOf('潮海')!=-1) answers = answers.replace(/潮海/g, "渤海");
    answers = answers.replace(/差造/g, "差遣");
    answers = answers.replace(/青营素/g, "青蒿素");
    answers = answers.replace(/奴购/g, "奴婢");
    answers = answers.replace(/嘴之以鼻/g, "嗤之以鼻");
    answers = answers.replace(/款收/g, "歉收");
    answers = answers.replace(/链而走险/g, "铤而走险");
    answers = answers.replace(/母康置疑/g, "毋庸置疑");
    answers = answers.replace(/JI/g, "川");
    answers = answers.replace(/叫苦不送/g, "叫苦不迭");
    answers = answers.replace(/虫胡/g, "蝴");
    answers = answers.replace(/鱼鲤/g, "鱼鳔");
    answers = answers.replace(/沉缅/g, "沉湎");
    answers = answers.replace(/表秀/g, "裴秀");
    answers = answers.replace(/泽炼/g, "淬炼");
    answers = answers.replace(/bu/g, "bù");
    answers = answers.replace(/夏然而止/g, "戛然而止");
    answers = answers.replace(/垫伏/g, "蛰伏");
    answers = answers.replace(/从我/g, "从戎");
    answers = answers.replace(/跨踏/g, "踌躇");
    answers = answers.replace(/漂岭/g, "嘌呤");
    answers = answers.replace(/快密/g, "诀窍");
    answers = answers.replace(/决密/g, "诀窍");
    answers = answers.replace(/令媛/g, "令嫒");
    answers = answers.replace(/朱捷/g, "朱棣");
    answers = answers.replace(/雾淞/g, "雾凇");
    answers = answers.replace(/.阳湖/g, "潘阳湖");
    answers = answers.replace(/赔然失色/g, "黯然失色");
    answers = answers.replace(/相形见细/g, "相形见绌");
    answers = answers.replace(/饮鸽止渴/g, "饮鸩止渴");
    answers = answers.replace(/何族/g, "侗族");
    answers = answers.replace(/切碳/g, "切磋");
    answers = answers.replace(/不胜而走/g, "不胫而走");
    answers = answers.replace(/\+/g, "十");
    answers = answers.replace(/李诚/g, "李诫");
    answers = answers.replace(/蹄红/g, "蹿红");
    return answers
};

module.exports = r;