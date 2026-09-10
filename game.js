// ===== 智能控制技术专业 · 就业抉择游戏 =====
const scenarios = [
    {
        story: "毕业季来了。你的专业课成绩中等，但课余时间自学了 3 个月 C 语言，能写 STM32 程序。现在两个机会：一家本地集成商招 PLC 调试（4K），一家深圳创业公司招嵌入式助理（6K）。你——",
        choices: [
            { text: "🏠 留本地做 PLC，离家近压力小", tech: 5, money: 0, growth: 5, interest: 5 },
            { text: "✈️ 去深圳做嵌入式，从底层啃起", tech: 15, money: 5, growth: 15, interest: 10 }
        ],
        insight: "嵌入式天花板比 PLC 调试高很多，但前两年苦。关键问题：你愿不愿意用前两年的舒适换后五年的选择权？"
    },
    {
        story: "入职半年，你发现每天的工作就是按图纸接线、用软件连硬件设备下载程序。技术含量不高，但很熟练了。同事劝你考个电工证，以后评职称用。你——",
        choices: [
            { text: "📋 考证，多一个证多一条路", tech: 5, money: 0, growth: 5, interest: -5 },
            { text: "💻 晚上自学 Python，往视觉方向转", tech: 10, money: -5, growth: 15, interest: 10 }
        ],
        insight: "证书是加分项但不是护城河。真正拉开差距的是：你下班后在学什么？电工证保下限，编程能力拉上限。"
    },
    {
        story: "公司接了个机器视觉项目，需要人做 OpenCV 图像处理。领导问你愿不愿意接，但要从零学起，前三个月会很痛苦。你——",
        choices: [
            { text: "🙋 接！不会就学，这是转型机会", tech: 15, money: 0, growth: 20, interest: 5 },
            { text: "🙅 不接，我电气已经很熟了，别折腾", tech: 0, money: 5, growth: 0, interest: -5 }
        ],
        insight: "视觉+控制是智能控制领域目前最值钱的交叉方向。舒适区里的熟练工，3年后和现在没区别。"
    },
    {
        story: "工作两年，你攒了点钱。一个学长在做 AGV 小车创业，邀请你加入，给股份但不给高薪。你现在的工作稳定但无聊。你——",
        choices: [
            { text: "🚀 加入，AGV 是风口，股份有想象空间", tech: 5, money: -15, growth: 25, interest: 10 },
            { text: "🛡️ 不去，创业九死一生，我输不起", tech: 0, money: 5, growth: 0, interest: -5 }
        ],
        insight: "AGV/AMR 确实是智能物流的大方向。但判断标准不是'风口'，而是：这个团队有没有真实订单？你能学到什么？"
    },
    {
        story: "你开始面试新工作。一家传统工厂给 7K 做设备维护，稳定双休；一家无人机公司给 9K 做飞控算法，加班多但技术前沿。你——",
        choices: [
            { text: "🏭 去工厂，10K 够花，双休很重要", tech: 0, money: 5, growth: 0, interest: -5 },
            { text: "🚁 去无人机公司，飞控是硬核技术", tech: 20, money: 5, growth: 15, interest: 10 }
        ],
        insight: "设备维护岗的 10K 可能 3 年不变，飞控算法岗的 12K 可能 2 年后变 20K。看起薪更要看'涨薪弹性'。"
    },
    {
        story: "工作三年，你发现同班转行做移动机器人的同学月薪 12K，而你目前的这份工作只有 10K。你动摇了，考虑转行软件。你——",
        choices: [
            { text: "🔄 转 移动机器人，薪资差距太大了", tech: -10, money: 10, growth: 5, interest: -10 },
            { text: "🎯 不转，我熟悉的设备才是我的壁垒", tech: 10, money: 0, growth: 15, interest: 10 }
            // 注意：这里 interest 是 +10，因为坚持自己方向
        ],
        insight: "转行的隐性成本：你要和科班出身的人竞争，且从零开始。调试的 10K 三年后可能到 13K，移动机器人 的 12K 三年后到 13K——差距会缩小。"
    },
    {
        story: "你 26 岁了。公司派你去德国培训一年，学工业 4.0 相关技术，回来后大概率升主管。但女朋友不想异地。你——",
        choices: [
            { text: "✈️ 去，这是职业跳板", tech: 15, money: 10, growth: 20, interest: -5 },
            { text: "💑 不去，感情比升职重要", tech: 0, money: 0, growth: 0, interest: 10 }
        ],
        insight: "工业 4.0 / 数字孪生是智能控制的高阶方向。但 26 岁的选择没有标准答案——有些人后来后悔没去，有些人觉得陪女朋友才是对的。"
    },
    {
        story: "最终，你站在 30 岁的节点回头看。你发现智能控制这个专业最大的优势不是某一门课，而是——你能连接'感知-决策-执行'整个链条。现在你要选下一步：深耕某个细分领域，还是往系统架构走？你——",
        choices: [
            { text: "🔬 深耕机器视觉+AI，做技术专家", tech: 20, money: 10, growth: 15, interest: 5 },
            { text: "🏗️ 往系统架构走，做技术管理", tech: 5, money: 15, growth: 15, interest: 5 }
        ],
        insight: "T型人才模型：一专多能。智能控制的学生最大的坑是'什么都学一点什么都不精'，最大的机会是'用控制思维串联软硬件'。"
    }
];

// ===== 结局系统 =====
const endings = [
    {
        title: "🤖 智能控制专家",
        desc: "你深耕技术，成为了视觉+控制交叉领域的专家。这个方向目前人才稀缺，你的选择被市场验证了。",
        match: (s) => s.tech >= 70 && s.growth >= 65
    },
    {
        title: "💼 技术管理双修",
        desc: "你既懂技术又懂人，从工程师走到了管理岗。智能控制背景让你在自动化项目中能统筹全局。",
        match: (s) => s.growth >= 70 && s.money >= 50
    },
    {
        title: "🔧 踏实的技术人",
        desc: "你没有大起大落，但技术扎实，是团队里最靠谱的人。这种稳定性本身就是竞争力。",
        match: (s) => s.tech >= 50 && s.tech <= 70 && s.money >= 40
    },
    {
        title: "😶‍🌫️ 还在寻找方向",
        desc: "你的属性没有明显突出。这很正常——智能控制专业的交叉性本身就是双刃剑，找到切口需要时间。",
        match: (s) => s.tech < 50 && s.growth < 50
    }
];

// ===== 游戏状态 =====
let state = {
    round: 0,
    tech: 40,
    money: 50,
    growth: 40,
    interest: 50,
    history: []
};

// ===== DOM =====
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const storyText = document.getElementById('story-text');
const choicesEl = document.getElementById('choices');
const progressFill = document.getElementById('progress-fill');
const roundText = document.getElementById('round-text');
const moneyVal = document.getElementById('money-val');
const happyVal = document.getElementById('happy-val');
const careerVal = document.getElementById('career-val');

// 改一下显示标签
document.querySelectorAll('.stat-icon')[0].textContent = '🔧';
document.querySelectorAll('.stat-icon')[1].textContent = '📈';
document.querySelectorAll('.stat-icon')[2].textContent = '💰';

// ===== 工具 =====
function clamp(v) { return Math.max(0, Math.min(100, v)); }

function showScreen(s) {
    document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
    s.classList.add('active');
}

function updateStats() {
    moneyVal.textContent = state.tech;   // 🔧 技术深度
    happyVal.textContent = state.growth; // 📈 成长空间
    careerVal.textContent = state.money; // 💰 生存指数
}

// ===== 游戏流程 =====
function startGame() {
    state = { round: 0, tech: 40, money: 50, growth: 40, interest: 50, history: [] };
    showScreen(gameScreen);
    renderRound();
}

function renderRound() {
    const s = scenarios[state.round];
    roundText.textContent = `第 ${state.round + 1} / ${scenarios.length} 轮`;
    progressFill.style.width = `${((state.round + 1) / scenarios.length) * 100}%`;
    storyText.textContent = s.story;

    const buttons = choicesEl.querySelectorAll('.btn-choice');
    s.choices.forEach((c, i) => {
        buttons[i].textContent = c.text;
        buttons[i].onclick = () => makeChoice(c, s.insight);
    });
    updateStats();
}

function makeChoice(choice, insight) {
    state.tech = clamp(state.tech + choice.tech);
    state.money = clamp(state.money + choice.money);
    state.growth = clamp(state.growth + choice.growth);
    state.interest = clamp(state.interest + choice.interest);
    state.history.push({ choice: choice.text, insight });
    state.round++;

    if (state.round >= scenarios.length) {
        showResult();
    } else {
        renderRound();
    }
}

function showResult() {
    let ending = endings[0];
    for (const e of endings) {
        if (e.match(state)) {
            ending = e;
            break;
        }
    }

    // 选 2 条最有价值的 insight 展示
    const topInsights = state.history.slice(-3).map(h => h.insight);

    document.getElementById('result-title').textContent = ending.title;
    document.getElementById('final-money').textContent = state.tech;
    document.getElementById('final-happy').textContent = state.growth;
    document.getElementById('final-career').textContent = state.money;

    let html = `<p style="margin-bottom:12px;">${ending.desc}</p>`;
    html += `<div style="background:#f8f6ff;border-radius:10px;padding:14px;margin-top:12px;text-align:left;">`;
    html += `<p style="font-size:13px;color:#666;margin-bottom:8px;">💡 你的职业复盘：</p>`;
    topInsights.forEach(l => {
        html += `<p style="font-size:13px;color:#555;line-height:1.6;margin-bottom:6px;">· ${l}</p>`;
    });
    html += `</div>`;

    // 兴趣匹配度提示
    if (state.interest >= 70) {
        html += `<p style="margin-top:12px;font-size:13px;color:#667eea;">✨ 你的兴趣匹配度很高，长期续航能力强——这是最被低估的职业优势。</p>`;
    } else if (state.interest <= 30) {
        html += `<p style="margin-top:12px;font-size:13px;color:#999;">⚠️ 你的兴趣匹配度偏低。技术路很长，没有兴趣驱动很难走远，建议重新审视方向。</p>`;
    }

    document.getElementById('result-desc').innerHTML = html;
    showScreen(resultScreen);
}

// ===== 绑定 =====
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('restart-btn').addEventListener('click', startGame);