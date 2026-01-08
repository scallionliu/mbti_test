const QUESTIONS = [
    // EI - Extroversion (E) vs Introversion (I)
    { id: 1, text: "在社交场合中，你通常是：", options: [{ text: "充满能量，主动与人交谈", score: { E: 1 } }, { text: "比较安静，倾向于观察", score: { I: 1 } }] },
    { id: 2, text: "忙碌了一周后，你更倾向于如何放松？", options: [{ text: "和朋友聚会或参加活动", score: { E: 1 } }, { text: "独自待着，看书或休息", score: { I: 1 } }] },
    { id: 3, text: "当你遇到陌生人时，你通常：", options: [{ text: "很容易找到话题并开始交谈", score: { E: 1 } }, { text: "需要一点时间来适应和开口", score: { I: 1 } }] },
    { id: 4, text: "你更喜欢哪种工作环境？", options: [{ text: "开放式办公室，有很多互动", score: { E: 1 } }, { text: "安静、独立的私人空间", score: { I: 1 } }] },
    { id: 5, text: "在会议中，你通常：", options: [{ text: "边想边说，直接表达想法", score: { E: 1 } }, { text: "先在心里想好再开口", score: { I: 1 } }] },
    { id: 6, text: "当电话响起时，你通常：", options: [{ text: "立刻接听，想知道是谁", score: { E: 1 } }, { text: "如果没准备好，可能不想接", score: { I: 1 } }] },
    { id: 7, text: "你觉得自己更像一个：", options: [{ text: "行动派", score: { E: 1 } }, { text: "深思熟虑者", score: { I: 1 } }] },
    { id: 8, text: "你喜欢参加派对是因为：", options: [{ text: "能认识新朋友并感到快乐", score: { E: 1 } }, { text: "虽然也能享受，但很快会累", score: { I: 1 } }] },
    { id: 9, text: "你的社交圈通常是：", options: [{ text: "广泛且多样化", score: { E: 1 } }, { text: "小而精，只有几个好友", score: { I: 1 } }] },
    { id: 10, text: "对于突如其来的访客，你会：", score: { E: 1, I: 1 }, options: [{ text: "表示欢迎并很快适应", score: { E: 1 } }, { text: "觉得被打扰或感到压力", score: { I: 1 } }] },

    // SN - Sensing (S) vs Intuition (N)
    { id: 11, text: "你更倾向于关注：", options: [{ text: "当下的事实和细节", score: { S: 1 } }, { text: "未来的可能性和意义", score: { N: 1 } }] },
    { id: 12, text: "在解决问题时，你更喜欢：", options: [{ text: "使用经过验证的标准方法", score: { S: 1 } }, { text: "尝试新颖、有创意的方法", score: { N: 1 } }] },
    { id: 13, text: "别人常说你是一个：", options: [{ text: "脚踏实地的务实主义者", score: { S: 1 } }, { text: "充满想象力的理想主义者", score: { N: 1 } }] },
    { id: 14, text: "在阅读说明书时，你通常：", options: [{ text: "仔细阅读每一个步骤", score: { S: 1 } }, { text: "跳着看，大概理解逻辑", score: { N: 1 } }] },
    { id: 15, text: "你更喜欢哪种类型的电影？", options: [{ text: "写实风格或真实事件改编", score: { S: 1 } }, { text: "科幻、魔幻或隐喻性强的", score: { N: 1 } }] },
    { id: 16, text: "当你在描述一个活动时，你倾向于：", options: [{ text: "具体描述发生了什么事", score: { S: 1 } }, { text: "描述给人的感觉和氛围", score: { N: 1 } }] },
    { id: 17, text: "你更看重：", options: [{ text: "常识和经验的积累", score: { S: 1 } }, { text: "灵感和直觉的闪现", score: { N: 1 } }] },
    { id: 18, text: "如果让你设计一个东西，你会：", options: [{ text: "先考虑它的实际功用", score: { S: 1 } }, { text: "先考虑它的概念和意义", score: { N: 1 } }] },
    { id: 19, text: "你有时会因为：", options: [{ text: "太关注细节而忽略了大局", score: { S: 1 } }, { text: "太关注大局而忽略了细节", score: { N: 1 } }] },
    { id: 20, text: "你更喜欢讨论：", options: [{ text: "真实发生的新闻和琐事", score: { S: 1 } }, { text: "抽象的理论、哲学或规划", score: { N: 1 } }] },

    // TF - Thinking (T) vs Feeling (F)
    { id: 21, text: "在做决策时，你更依赖：", options: [{ text: "逻辑分析和客观标准", score: { T: 1 } }, { text: "个人价值观和对他人的影响", score: { F: 1 } }] },
    { id: 22, text: "当朋友遇到困难来找你，你第一反应是：", options: [{ text: "帮他分析问题并给予建议", score: { T: 1 } }, { text: "安抚他的情绪并表示理解", score: { F: 1 } }] },
    { id: 23, text: "你认为在职场中，最重要的是：", options: [{ text: "效率和公平的原则", score: { T: 1 } }, { text: "和谐的人际关系", score: { F: 1 } }] },
    { id: 24, text: "你更容易被什么样的理由说服？", options: [{ text: "无可辩驳的证据和逻辑", score: { T: 1 } }, { text: "动之以情的诚意和愿景", score: { F: 1 } }] },
    { id: 25, text: "你会为了：", options: [{ text: "坚持真相而伤害感情", score: { T: 1 } }, { text: "维持感情而隐藏部分真相", score: { F: 1 } }] },
    { id: 26, text: "批评别人时，你通常：", options: [{ text: "直接了当，客观评估", score: { T: 1 } }, { text: "委婉含蓄，顾及对方自尊", score: { F: 1 } }] },
    { id: 27, text: "你最难以忍受：", options: [{ text: "逻辑混乱或低效率", score: { T: 1 } }, { text: "冷漠或不被尊重", score: { F: 1 } }] },
    { id: 28, text: "你觉得自己更具有：", options: [{ text: "理性的一面", score: { T: 1 } }, { text: "感性的一面", score: { F: 1 } }] },
    { id: 29, text: "在争论中，你更关注：", options: [{ text: "谁说的更有道理", score: { T: 1 } }, { text: "大家的感受是否良好", score: { F: 1 } }] },
    { id: 30, text: "你更受：", options: [{ text: "头脑的支配", score: { T: 1 } }, { text: "心灵的支配", score: { F: 1 } }] },

    // JP - Judging (J) vs Perceiving (P)
    { id: 31, text: "你更喜欢什么样的生活节奏？", options: [{ text: "有计划、有条理、可预测", score: { J: 1 } }, { text: "随性、灵活、顺其自然", score: { P: 1 } }] },
    { id: 32, text: "面对一个截止日期，你通常：", options: [{ text: "提前开始，按部就班完成", score: { J: 1 } }, { text: "最后时刻冲刺，效率最高", score: { P: 1 } }] },
    { id: 33, text: "你的工作台或房间通常是：", options: [{ text: "整洁且固定的，东西都有位置", score: { J: 1 } }, { text: "稍微凌乱，但你找得到东西", score: { P: 1 } }] },
    { id: 34, text: "旅行前，你通常：", options: [{ text: "制定详细的行程单和预订", score: { J: 1 } }, { text: "只定大方向，到时候看心情", score: { P: 1 } }] },
    { id: 35, text: "当计划被打乱时，你：", options: [{ text: "感到烦躁或焦虑", score: { J: 1 } }, { text: "觉得没什么，调整一下就好", score: { P: 1 } }] },
    { id: 36, text: "你更习惯于：", options: [{ text: "先把工作做完，再彻底玩耍", score: { J: 1 } }, { text: "边做边玩，或者先玩再说", score: { P: 1 } }] },
    { id: 37, text: "对于突发奇想的想法，你通常：", options: [{ text: "先放一放，执行当下的任务", score: { J: 1 } }, { text: "立刻停下手中的事去探索", score: { P: 1 } }] },
    { id: 38, text: "你更喜欢：", options: [{ text: "尘埃落定、得出结论", score: { J: 1 } }, { text: "保持开放、等待更多选择", score: { P: 1 } }] },
    { id: 39, text: "在别人眼中，你是一个：", options: [{ text: "靠谱、守时的执行者", score: { J: 1 } }, { text: "自由、随性的适应者", score: { P: 1 } }] },
    { id: 40, text: "你通常：", options: [{ text: "按清单办事，划掉完成项", score: { J: 1 } }, { text: "跟着直觉走，随机应变", score: { P: 1 } }] }
];

const TYPE_DETAILS = {
    'INTJ': {
        title: '建筑师', desc: '富于想象力且战略性的思考者，一切皆在计划之中。',
        work: '适合战略规划、科研或复杂工程。你倾向于独立工作，追求高效率和高标准。',
        love: '寻找智力上的平等伙伴，看重真诚和共同成长。',
        life: '注意不要过于批判，学着接受生活中的\'非逻辑\'感性时刻。',
        social: '在社交中显得冷淡且有选择性，讨厌闲聊，更喜欢有深度的讨论。',
        match: 'ENFP, ENTP', traits: ['逻辑', '独立', '预见性', '条理']
    },
    'INTP': {
        title: '逻辑学家', desc: '具有创造力的发明家，对知识有着止不住的渴望。',
        work: '适合理论研究、程序开发或创意设计。你擅长发现系统漏洞并改进。',
        love: '需要足够的空间，沟通直接，讨厌虚伪和繁文缛节。',
        life: '注意将想法付诸行动，别让完美的构想只停留在脑海中。',
        social: '沟通时逻辑严密但有时显得有些脱节，喜欢分享新奇想法而非琐事。',
        match: 'ENTJ, ENFJ', traits: ['创意', '分析', '好奇心', '客观']
    },
    'ENTJ': {
        title: '指挥官', desc: '大胆、富有想象力且意志强大的领导者。',
        work: '适合企业管理、创业或任何高效决策岗位。你天生就是组织者。',
        love: '关系中倾向于领导，寻找志同道合、有进取心的伴侣。',
        life: '注意倾听他人的情感需求，成功不应以牺牲关系为代价。',
        social: '极具气场和说服力，直截了当，有时显得过于强硬和好辩。',
        match: 'INTP, INFP', traits: ['果断', '效率', '战略', '自信']
    },
    'ENTP': {
        title: '辩论家', desc: '聪明好奇的思考者，无法抗拒智力挑战。',
        work: '适合法律、顾问、营销等需要快速反应和创意的行业。',
        love: '追求新鲜感和挑战，希望伴侣能跟上你的思维跳跃。',
        life: '注意耐心面对枯燥但重要的细节，不要半途而废。',
        social: '天生的辩论者，思维敏捷、充满幽默，注意不要为了赢而伤感情。',
        match: 'INFJ, INTJ', traits: ['敏锐', '灵活', '幽默', '挑剔']
    },
    'INFJ': {
        title: '提倡者', desc: '安静而神秘，同时又是鼓舞人心且理想主义。',
        work: '适合咨询、写作、教育或心理健康领域。渴望工作带来深远意义。',
        love: '性格深沉且浪漫，寻找灵魂伴侣，极度看重忠诚和精神契合。',
        life: '注意给自己充电，不要过度消耗同理心背负他人苦难。',
        social: '善于建立深度联系，擅长倾听并温和地影响他人。',
        match: 'ENFP, ENTP', traits: ['洞察', '理想', '同理心', '坚定']
    },
    'INFP': {
        title: '调停者', desc: '诗意、善良且利他主义的人，渴望帮助他人。',
        work: '适合艺术创作、公益、编辑或个性化心理咨询。',
        love: '理想主义爱情观，包容力强，但也容易受伤害。',
        life: '注意现实实务，别让完美的理想阻碍你的自我表达。',
        social: '沟通温和真诚，通常保持低调，但在探讨价值观时极具共情。',
        match: 'ENFJ, ENTJ', traits: ['同情', '忠诚', '创意', '敏感']
    },
    'ENFJ': {
        title: '主人公', desc: '富有魅力且鼓舞人心的领导者。',
        work: '适合人力资源、公关或教学。擅长激发他人潜力。',
        love: '全心全意投入，支持性强，注意别因关注对方而忽略自己。',
        life: '注意接受你无法让每个人都满意的现实。',
        social: '极具感染力和社交天分，总能带动气氛，让每个人感到被重视。',
        match: 'INFP, INTP', traits: ['热情', '卓越领袖', '支持', '合群']
    },
    'ENFP': {
        title: '竞选者', desc: '热情、有创造力且自由自在的灵魂。',
        work: '适合媒体、艺术或充满变化的社交岗位。',
        love: '情感丰富且热烈，喜欢探索可能，寻找理解你自由灵魂的人。',
        life: '注意管理时间和注意力，把伟大的想法最终落地实现。',
        social: '社交达人，充满好奇心和活力，总能发现他人优点。',
        match: 'INFJ, INTJ', traits: ['开朗', '社交', '自发', '感性']
    },
    'ISTJ': {
        title: '物流师', desc: '务实且注重事实的人，可靠性不容怀疑。',
        work: '适合财务、法律、行政或安保。规则的坚定捍卫者。',
        love: '非常可靠，通过实际行动表达爱意，不喜欢感情用事。',
        life: '注意尝试打破常规，生活中有时可以有一些灵活的改变。',
        social: '严肃且传统，沟通直接诚实，不喜欢夸张，是极其靠谱的朋友。',
        match: 'ESFP, ESTP', traits: ['勤奋', '诚实', '传统', '冷静']
    },
    'ISFJ': {
        title: '守卫者', desc: '专注且温暖的守护者，时刻准备保护爱的人。',
        work: '适合医疗护理、社会工作或办公室管理。关注细节。',
        love: '奉献型伴侣，看重稳定和家庭，需要对方感受到你的付出。',
        life: '注意学会拒绝，不要因过度承担而导致身心俱疲。',
        social: '社交场合较被动，但极其体贴，默默照顾每个人的需求。',
        match: 'ESFJ, ESTJ', traits: ['奉献', '务实', '细致', '谦逊']
    },
    'ESTJ': {
        title: '总经理', desc: '出色的管理者，在事务/人管理方面无伦。',
        work: '适合中高层管理、军事或法律。以结果为导向。',
        love: '直接且负责，生活非常有条理。',
        life: '注意身边的情感需求，生活不仅仅是达成目标。',
        social: '自信且善于组织，喜欢清晰沟通和明确规则。',
        match: 'ISFJ, ISTJ', traits: ['条理', '直接', '责任', '坚韧']
    },
    'ESFJ': {
        title: '执政官', desc: '极度乐于助人、受欢迎且有良知的人。',
        work: '适合社区服务、销售或组织活动。朋友圈的润滑剂。',
        love: '依赖社交认同，寻找忠诚伴侣，关注家庭和谐。',
        life: '注意独立思考，不要总是为了迎合群体而压抑自己。',
        social: '社交明星，非常看重和谐，擅长照顾他人感受和传统社交。',
        match: 'ISFJ, ISTP', traits: ['慷慨', '负责', '忠诚', '关系']
    },
    'ISTP': {
        title: '鉴赏家', desc: '大胆且实际的实验家，擅长使用各类工具。',
        work: '适合机械、数据分析或紧急救援。喜欢动手解决。',
        love: '看重个人独立空间，不太喜欢过分浓烈的情感表达。',
        life: '注意不要过于冷淡以至于疏远了真正在乎你的人。',
        social: '话不多且独立，观察力敏锐，通过共同行动建立联系。',
        match: 'ESFJ, ESTJ', traits: ['冷静', '灵活', '务实', '好奇']
    },
    'ISFP': {
        title: '冒险家', desc: '灵活且有魅力的艺术家，随时准备探索新鲜。',
        work: '适合设计、自由职业或艺术。通过作品表达自我。',
        love: '害羞但深情，强调感官体验和谐，需要温情回报。',
        life: '注意为长期规划做准备，而不只是活在当下。',
        social: '温和且具神秘感，社交中非常含蓄，看重真诚。',
        match: 'ENFJ, ESFJ', traits: ['温柔', '自发', '感性', '审美']
    },
    'ESTP': {
        title: '企业家', desc: '聪明精力充沛的人，真心享受生活边缘。',
        work: '适合销售、体育或挑战型岗位。擅长把握机会。',
        love: '追求感官兴奋，魅力极高但可能缺乏持久性。',
        life: '注意评估风险，并不是所有的冲动都是好点子。',
        social: '活跃且外向，沟通幽默充满动感，是聚会的焦点。',
        match: 'ISFJ, ISTJ', traits: ['大胆', '感知', '务实', '社交']
    },
    'ESFP': {
        title: '表演者', desc: '自发的、精力充沛的人，生活永不枯燥。',
        work: '适合演艺、培训或旅游。天生的明星。',
        love: '活在当下，喜欢浪漫和惊喜，需要能享乐的伴侣。',
        life: '注意认真对待责任，不要总是逃避冲突。',
        social: '热情洋溢且具表演欲，社交天赋高，让身边人快乐。',
        match: 'ISTJ, ISFJ', traits: ['活泼', '慷慨', '爱交际', '关注事实']
    }
};

let currentQuestionIndex = 0;
let selectedQuestions = [];
let userAnswers = [];
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

const quizView = document.getElementById('view-quiz');
const landingView = document.getElementById('view-landing');
const loadingView = document.getElementById('view-loading');
const resultView = document.getElementById('view-result');
const questionContainer = document.getElementById('question-container');
const progressFill = document.getElementById('progress-fill');
const questionNumberText = document.getElementById('question-number');
const progressPercentageText = document.getElementById('progress-percentage');

// TODO: Replace with your actual Server Public IP after deployment
// Example: const API_BASE_URL = 'http://123.45.67.89:3000/api';
const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:3000/api'
    : 'http://PLEASE_REPLACE_WITH_YOUR_SERVER_IP:3000/api';

const activationModal = document.getElementById('activation-modal');
const activationInput = document.getElementById('invitation-code-input');
const activateBtn = document.getElementById('activate-btn');
const activationError = document.getElementById('activation-error');

// Event Listeners for Activation
activateBtn.addEventListener('click', verifyCode);
activationInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') verifyCode();
});

// Close modal if clicking outside
activationModal.addEventListener('click', (e) => {
    if (e.target === activationModal) {
        activationModal.classList.add('hidden');
    }
});

function initQuiz() {
    if (!localStorage.getItem('device_activated')) {
        showActivationModal();
        return;
    }
    selectedQuestions = [];
    for (let i = 0; i < 4; i++) {
        const pool = QUESTIONS.slice(i * 10, (i + 1) * 10);
        const shuffled = [...pool].sort(() => 0.5 - Math.random());
        selectedQuestions.push(...shuffled.slice(0, 5));
    }
    selectedQuestions.sort(() => 0.5 - Math.random());
    currentQuestionIndex = 0;
    userAnswers = [];
    Object.keys(scores).forEach(k => scores[k] = 0);
    showView('quiz');
    renderQuestion();
}

function renderQuestion() {
    const q = selectedQuestions[currentQuestionIndex];
    const progress = (currentQuestionIndex / selectedQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    questionNumberText.innerText = `第 ${currentQuestionIndex + 1} / ${selectedQuestions.length} 题`;
    progressPercentageText.innerText = `${Math.round(progress)}%`;
    questionContainer.innerHTML = `<div class="question-card"><h2>${q.text}</h2><div class="options-grid">${q.options.map((opt, idx) => `<button class="option-btn" onclick="handleSelect(${idx})">${opt.text}</button>`).join('')}</div></div>`;
}

function handleSelect(optionIndex) {
    const q = selectedQuestions[currentQuestionIndex];
    const scoreKey = Object.keys(q.options[optionIndex].score)[0];
    scores[scoreKey]++;
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) renderQuestion();
    else finishQuiz();
}

function finishQuiz() {
    showView('loading');
    setTimeout(() => {
        const type = (scores.E >= scores.I ? "E" : "I") + (scores.S >= scores.N ? "S" : "N") + (scores.T >= scores.F ? "T" : "F") + (scores.J >= scores.P ? "J" : "P");
        renderResult(type);
    }, 1250);
}

function renderResult(type) {
    const detail = TYPE_DETAILS[type];

    // Calculate percentages for both sides
    const getPercentage = (val1, val2) => {
        const total = val1 + val2;
        if (total === 0) return { p1: 50, p2: 50 };
        const p1 = Math.round((val1 / total) * 100);
        return { p1: p1, p2: 100 - p1 };
    };

    const ei = getPercentage(scores.E, scores.I);
    const sn = getPercentage(scores.S, scores.N);
    const tf = getPercentage(scores.T, scores.F);
    const jp = getPercentage(scores.J, scores.P);

    resultView.innerHTML = `
        <div class="result-card">
            <div class="result-header">
                <div class="type-code">${type}</div>
                <h2 class="type-title">${detail.title}</h2>
                <p class="type-desc">${detail.desc}</p>
            </div>
            
            <div class="traits-container">
                <h3 class="section-title">📊 性格维度分布</h3>
                <div class="traits-grid">
                    ${renderTraitBar('外向 (E)', '内向 (I)', ei.p1, ei.p2, 'ei')}
                    ${renderTraitBar('实感 (S)', '直觉 (N)', sn.p1, sn.p2, 'sn')}
                    ${renderTraitBar('思考 (T)', '情感 (F)', tf.p1, tf.p2, 'tf')}
                    ${renderTraitBar('判断 (J)', '知觉 (P)', jp.p1, jp.p2, 'jp')}
                </div>
            </div>

            <div class="analysis-sections">
                <div class="analysis-item">
                    <h4>💼 工作与职业</h4>
                    <p>${detail.work}</p>
                </div>
                <div class="analysis-item">
                    <h4>❤️ 爱情与关系</h4>
                    <p>${detail.love}</p>
                </div>
                <div class="analysis-item">
                    <h4>💬 社交与沟通</h4>
                    <p>${detail.social}</p>
                </div>
                <div class="analysis-item">
                    <h4>💡 生活建议</h4>
                    <p>${detail.life}</p>
                </div>
            </div>

            <div class="soulmate-banner">
                <h4>🤝 灵魂伴侣推荐</h4>
                <p class="match-text">${detail.match}</p>
            </div>

            <button class="btn-primary" onclick="window.location.reload()">重新测试</button>
        </div>
    `;
    showView('result');
}

function renderTraitBar(label1, label2, p1, p2, colorClass) {
    return `
        <div class="trait-bar-container ${colorClass}">
            <div class="trait-labels">
                <span>${label1}</span>
                <span>${label2}</span>
            </div>
            <div class="bar-outer">
                <div class="bar-fill" style="width: ${p1}%"></div>
                <div class="bar-percentage-label p1">${p1}%</div>
                <div class="bar-percentage-label p2">${p2}%</div>
            </div>
        </div>
    `;
}

function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${viewId}`).classList.add('active');
}

document.getElementById('start-btn').addEventListener('click', initQuiz);
window.handleSelect = handleSelect;

// Activation Logic
function showActivationModal() {
    activationModal.classList.remove('hidden');
    activationInput.focus();
}

async function verifyCode() {
    const code = activationInput.value.trim();
    if (!code) {
        showError('请输入邀请码');
        return;
    }

    setLoading(true);

    try {
        const response = await fetch(`${API_BASE_URL}/validate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code })
        });

        const data = await response.json();

        if (response.ok && data.success) {
            localStorage.setItem('device_activated', 'true');
            activationModal.classList.add('hidden');
            alert('激活成功！开始测试...');
            initQuiz();
        } else {
            showError(data.error || '激活码无效或已使用');
        }
    } catch (err) {
        console.error('Activation Error:', err);
        showError('网络错误，请检查您的网络连接或稍后再试');
    } finally {
        setLoading(false);
    }
}

function showError(msg) {
    activationError.innerText = msg;
    activationInput.classList.add('shake');
    setTimeout(() => activationInput.classList.remove('shake'), 500);
}

function setLoading(isLoading) {
    if (isLoading) {
        activateBtn.innerText = '验证中...';
        activateBtn.disabled = true;
    } else {
        activateBtn.innerText = '激活并开始';
        activateBtn.disabled = false;
    }
}
