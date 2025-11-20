import { AvatarStyle } from './constants';

const SURNAMES = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝坞安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁钟徐邱骆高夏蔡田樊胡凌霍虞万支柯昝管卢莫经房裘缪干解应宗丁宣贲邓郁单杭洪包诸左石崔吉钮龚";
const NAMES = "伟刚勇毅俊峰强军平保东文辉力明永健世广志义兴良海山仁波宁贵福生龙元全国胜学祥才发武新利清飞彬富顺信子杰涛昌成康星光天达安岩中茂进林有坚和彪博诚先敬震振壮会思群豪心邦承乐绍功松善厚庆磊民友裕河哲江超浩亮政谦亨奇固之轮翰朗伯宏言若鸣朋斌梁栋维启克伦翔旭鹏泽晨辰士以建家致树炎德行时泰盛雄琛钧冠策腾楠榕风航弘";

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateName = () => {
  const surname = SURNAMES[Math.floor(Math.random() * SURNAMES.length)];
  const nameLen = Math.random() > 0.5 ? 1 : 2;
  let name = surname;
  for (let j = 0; j < nameLen; j++) {
    name += NAMES[Math.floor(Math.random() * NAMES.length)];
  }
  return name;
};

const generateAvatarUrl = (seed, index, style) => {
  const baseUrl = 'https://picsum.photos';
  const size = '100'; 
  let url = `${baseUrl}/seed/${seed}-${index}/${size}/${size}`;
  if (style === AvatarStyle.Grayscale) {
    url += '?grayscale';
  } else if (style === AvatarStyle.Blur) {
    url += '?blur=2';
  }
  return url;
};

export const generateChatList = (count, message, style, regenerateKey = 0) => {
  const newList = [];
  const now = new Date();
  let timeCursor = new Date(now.getTime());
  const baseSeed = Math.floor(Math.random() * 100000) + regenerateKey;

  for (let i = 0; i < count; i++) {
    const hours = String(timeCursor.getHours()).padStart(2, '0');
    const minutes = String(timeCursor.getMinutes()).padStart(2, '0');
    const displayTime = `${hours}:${minutes}`;
    
    newList.push({
      id: i,
      name: generateName(),
      time: displayTime,
      avatarUrl: generateAvatarUrl(baseSeed, i, style),
      message: message
    });

    // 每9条记录使用相同的时间（微信最多一次选取9位好友分享）
    // 只在第9、18、27...条后才更新时间
    if ((i + 1) % 9 === 0) {
      const secondsToSubtract = randomInt(5, 45);
      timeCursor = new Date(timeCursor.getTime() - secondsToSubtract * 1000);
    }
  }
  return newList;
};
