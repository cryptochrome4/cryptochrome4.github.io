/* ============================================================
   銘柄マスタ
============================================================ */
const JP_STOCKS = {
  SHIFT:{name:"SHIFT",code:"3697"}, NTT:{name:"NTT",code:"9432"},
  AEON:{name:"イオン",code:"8267"}, VALTES:{name:"バルテスHD",code:"4442"},
  TREND:{name:"トレンド",code:"4704"}, DIGIHA:{name:"デジハHD",code:"3676"},
  POLE:{name:"ポールHD",code:"3657"}, MEMBERS:{name:"メンバーズ",code:"2130"},
  GMO:{name:"GMO",code:"9449"}, SAKURA:{name:"さくらインターネット",code:"3778"},
  KEPCO:{name:"関西電力",code:"9503"}, TEPCO:{name:"東電力HD",code:"9501"},
};
const US_STOCKS = {
  NVDA:{name:"エヌビディア",ticker:"NVDA"}, AAPL:{name:"アップル",ticker:"AAPL"},
  TSLA:{name:"テスラ",ticker:"TSLA"}, MSFT:{name:"マイクロソフト",ticker:"MSFT"},
  AMZN:{name:"アマゾン ドット コム",ticker:"AMZN"}, GTLB:{name:"ギットラブ インク A",ticker:"GTLB"},
  U:{name:"ユニティ ソフトウェア",ticker:"U"}, DDOG:{name:"データドッグ A",ticker:"DDOG"},
  ACN:{name:"アクセンチュア A",ticker:"ACN"}, EPAM:{name:"EPAMシステムズ",ticker:"EPAM"},
  CTSH:{name:"コグニザント テクノロジー ソリューション A",ticker:"CTSH"},
  IBM:{name:"インターナショナル ビジネス マシーンズ",ticker:"IBM"},
  DOCN:{name:"デジタルオーシャン",ticker:"DOCN"}, AMD:{name:"アドバンスド マイクロ デバイシズ",ticker:"AMD"},
  CRWD:{name:"クラウドストライク ホールディングス A",ticker:"CRWD"},
  PANW:{name:"パロアルト ネットワークス",ticker:"PANW"}, ORCL:{name:"オラクル",ticker:"ORCL"},
};

/* ============================================================
   キャラクターデータ
============================================================ */
const CHARACTERS = [
  { id:1, name:"ハマ", type:"陰キャ公認会計士", img:"img372nontitle.jpg",
    jp:{NTT:180000,KEPCO:150000,TEPCO:80000,MEMBERS:60000}, us:{IBM:180000,ACN:150000,ORCL:100000} },
  { id:2, name:"モーリー", type:"陰キャ社長", img:"img373nontitle.jpg",
    jp:{SHIFT:80000,GMO:60000}, us:{NVDA:220000,MSFT:180000,CRWD:150000,DDOG:120000,ORCL:90000} },
  { id:3, name:"グッチ", type:"土方労働者のパワー系", img:"img374nontitle.jpg",
    jp:{AEON:200000,SHIFT:100000,KEPCO:80000,TEPCO:60000}, us:{AMD:150000,TSLA:120000,AAPL:100000,IBM:90000} },
  { id:4, name:"松崎", type:"入れ墨ラッパーヤンキー", img:"img375nontitle.jpg",
    jp:{SHIFT:80000,SAKURA:60000,GMO:50000}, us:{TSLA:220000,AMD:180000,CRWD:150000,U:130000,PANW:130000} },
  { id:5, name:"松葉", type:"背が高く顔も良しだがポンコツ君", img:"img376nontitle.jpg",
    jp:{NTT:100000,SHIFT:80000,AEON:60000,TREND:50000,KEPCO:50000},
    us:{AAPL:120000,MSFT:100000,NVDA:100000,ORCL:90000,IBM:50000,ACN:50000} },
  { id:6, name:"藤巻", type:"優等生男子", img:"img377nontitle.jpg",
    jp:{NTT:220000,KEPCO:150000,TEPCO:80000}, us:{AAPL:200000,MSFT:180000,ORCL:120000,IBM:50000} },
  { id:7, name:"青木", type:"パワハラ気質だか社会性の高い人", img:"img378nontitle.jpg",
    jp:{SHIFT:200000,TREND:150000,GMO:120000,VALTES:80000}, us:{ORCL:180000,ACN:150000,NVDA:120000} },
  { id:8, isVariant:true,
    variants:[{name:"和田",img:"img379nontitle.jpg"},{name:"あいか",img:"img380nontitle.jpg"}],
    type:"ギャル",
    jp:{AEON:150000,SAKURA:100000,SHIFT:80000,GMO:60000}, us:{TSLA:150000,AAPL:120000,NVDA:120000,U:120000,CRWD:100000} },
  { id:9, name:"ニコ", type:"優等生女子", img:"img381nontitle.jpg",
    jp:{NTT:180000,KEPCO:120000,SHIFT:80000}, us:{MSFT:200000,NVDA:150000,AAPL:120000,ORCL:150000} },
  { id:10, name:"まりな", type:"上品な女アイドル", img:"img382nontitle.jpg",
    jp:{NTT:200000,KEPCO:150000,TEPCO:100000}, us:{AAPL:200000,ORCL:150000,MSFT:120000,IBM:80000} },
  { id:11, name:"エリナ", type:"女性の権利を主張するバツイチのグラビア女", img:"img383nontitle.jpg",
    jp:{SHIFT:100000,SAKURA:60000}, us:{NVDA:220000,MSFT:200000,AMD:180000,AAPL:140000,CRWD:100000} },
  { id:12, name:"工場長", type:"工場で働く人", img:"img384nontitle.jpg",
    jp:{NTT:220000,KEPCO:180000,TEPCO:150000,AEON:100000}, us:{IBM:150000,ACN:100000,MSFT:100000} },
  { id:13, name:"能戸", type:"借金まみれのパチンカス", img:"img385nontitle.jpg",
    jp:{SAKURA:60000,SHIFT:40000}, us:{NVDA:250000,TSLA:220000,U:180000,DOCN:150000,AMD:100000} },
  { id:14, name:"為国", type:"成績優秀の営業マンだがリアリティーショーに参加すると尖ってる人", img:"img386nontitle.jpg",
    jp:{SHIFT:150000,VALTES:100000,TREND:80000,GMO:70000}, us:{ACN:150000,ORCL:120000,MSFT:120000,NVDA:110000,CTSH:100000} },
  { id:15, name:"せお丸", type:"バンドマンのプログラマー", img:"img387nontitle.jpg",
    jp:{SAKURA:180000,GMO:150000,SHIFT:120000,DIGIHA:80000}, us:{GTLB:150000,DDOG:150000,EPAM:100000,MSFT:70000} },
  { id:16, name:"のすけ", type:"親が金持ちの慶応のちゃら男", img:"img388nontitle.jpg",
    jp:{AEON:100000,NTT:80000,SHIFT:80000,KEPCO:60000},
    us:{AAPL:120000,NVDA:120000,MSFT:100000,AMZN:100000,TSLA:80000,ORCL:80000,IBM:60000} },
  { id:17, name:"かな", type:"一般的な主婦", img:"img389nontitle.jpg",
    jp:{NTT:220000,AEON:180000,KEPCO:180000,TEPCO:100000}, us:{AAPL:150000,MSFT:100000,ORCL:70000} },
];

/* ============================================================
   ユーティリティ
============================================================ */
function resolveCharacter(c){
  if (c.isVariant){
    const v = c.variants[Math.floor(Math.random()*c.variants.length)];
    return {...c, name:v.name, img:v.img};
  }
  return {...c};
}
const sumValues = obj => Object.values(obj).reduce((a,b)=>a+b,0);
const formatYen = n => '¥' + n.toLocaleString('ja-JP');

/* ============================================================
   疑似ドーナツ・スライダー
============================================================ */
const track = document.getElementById('track');
const slider = document.getElementById('slider');
const panel = document.getElementById('panel');
const RESOLVED = CHARACTERS.map(resolveCharacter);
const N = RESOLVED.length;

let progress = 0;
const SPEED = 0.0006;
let paused = false;
let currentFitGlobal = 'cover';
const individualFit = new Map();   // id → fit
let selectedId = null;
let cardEls = [];

const DEPTH_Y = 44;
const DEPTH_SCALE = 0.35;
const DEPTH_OPACITY = 0.5;

/* カード生成 */
function createCard(char){
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.id = char.id;
  card.innerHTML = `<img src="${char.img}" alt="${char.name}" loading="lazy" /><div class="card__badge">SELECTED</div>`;
  card.addEventListener('click', ()=> selectCharacter(char.id));
  return card;
}

function initSlider(){
  track.innerHTML = '';
  cardEls = [];
  RESOLVED.forEach(char=>{
    const card = createCard(char);
    track.appendChild(card);
    cardEls.push(card);
  });
  updateCards();
  requestAnimationFrame(animate);
}

function updateCards(){
  const cw = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--card-width'));
  for (let i=0; i<N; i++){
    const card = cardEls[i];
    const phase = ((i / N) + progress) % 1;
    const angle = phase * Math.PI * 2;
    const depth = (1 - Math.cos(angle)) / 2;
    const x = Math.sin(angle);

    const translateX = x * cw * 3.2;
    const translateY = -depth * DEPTH_Y;
    const scale      = 1 - depth * DEPTH_SCALE;
    const opacity    = 1 - depth * DEPTH_OPACITY;
    const z          = Math.round((1 - depth) * 1000);

    card.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    card.style.opacity = opacity;
    card.style.zIndex = z;
  }
}

function animate(){
  if (!paused){
    progress = (progress + SPEED) % 1;
    updateCards();
  }
  requestAnimationFrame(animate);
}

slider.addEventListener('mouseenter', ()=> paused = true);
slider.addEventListener('mouseleave', ()=> paused = false);
slider.addEventListener('touchstart', ()=> paused = true, {passive:true});
slider.addEventListener('touchend',   ()=> paused = false);

/* ============================================================
   選択
============================================================ */
function selectCharacter(id){
  selectedId = id;
  cardEls.forEach(el => el.classList.toggle('selected', Number(el.dataset.id) === id));
  const char = RESOLVED.find(c => c.id === id);
  if (char) renderPanel(char);
}

/* ============================================================
   パネル描画
============================================================ */
function renderPanel(char){
  const jpTotal = sumValues(char.jp);
  const usTotal = sumValues(char.us);
  const total = jpTotal + usTotal;
  const pct = n => ((n/total)*100).toFixed(1) + '%';

  const sortDesc = obj => Object.entries(obj).map(([k,a])=>({key:k, amount:a})).sort((a,b)=>b.amount-a.amount);

  const jpList = sortDesc(char.jp).map(o => ({...JP_STOCKS[o.key], amount:o.amount}));
  const usList = sortDesc(char.us).map(o => ({...US_STOCKS[o.key], amount:o.amount}));

  const holdingsHTML = (list, isUS) => list.map(h=>`
    <div class="holding">
      <div class="holding__name">${h.name}<span class="holding__code">${isUS?h.ticker:h.code}</span></div>
      <div class="holding__amount">${formatYen(h.amount)}</div>
      <div class="holding__pct">${pct(h.amount)}</div>
      <div class="holding__bar"><div class="holding__bar-fill" style="width:${pct(h.amount)}"></div></div>
    </div>`).join('');

  const indiv = individualFit.get(char.id) || '';
  const g = currentFitGlobal;

  panel.innerHTML = `
    <div class="char-head">
      <img class="char-head__img" id="charHeadImg" src="${char.img}" alt="${char.name}" />
      <div class="char-head__meta">
        <div class="char-head__no">No.${String(char.id).padStart(2,'0')} / Character</div>
        <div class="char-head__name">${char.name}</div>
        <div class="char-head__type">${char.type}</div>
      </div>
    </div>

    <div class="total-block">
      <div class="total-block__label">Total Investment</div>
      <div class="total-block__value">${formatYen(total)}<small>総投資額</small></div>
    </div>

    <div class="fit-panel">
      <div class="fit-row">
        <div class="fit-row__label">全体 FIT <strong>ALL</strong></div>
        <div class="fit-switch" id="fitGlobal">
          <button data-fit="cover"   class="${g==='cover'?'active':''}">COVER</button>
          <button data-fit="fill"    class="${g==='fill'?'active':''}">FILL</button>
          <button data-fit="contain" class="${g==='contain'?'active':''}">CONTAIN</button>
        </div>
      </div>
      <div class="fit-row">
        <div class="fit-row__label">個別 FIT <strong>${char.name}</strong></div>
        <div class="fit-switch" id="fitIndividual">
          <button data-fit="default" class="${indiv===''?'active':''}">DEFAULT</button>
          <button data-fit="cover"   class="${indiv==='cover'?'active':''}">COVER</button>
          <button data-fit="fill"    class="${indiv==='fill'?'active':''}">FILL</button>
          <button data-fit="contain" class="${indiv==='contain'?'active':''}">CONTAIN</button>
        </div>
      </div>
    </div>

    <div class="cat">
      <div class="cat__head">
        <div class="cat__title">国内株式</div>
        <div class="cat__sum">${formatYen(jpTotal)} ・ ${pct(jpTotal)}</div>
      </div>
      ${holdingsHTML(jpList,false)}
    </div>

    <div class="cat">
      <div class="cat__head">
        <div class="cat__title">米国株式</div>
        <div class="cat__sum">${formatYen(usTotal)} ・ ${pct(usTotal)}</div>
      </div>
      ${holdingsHTML(usList,true)}
    </div>
  `;

  bindFitEvents(char);
}

/* ============================================================
   fit切替イベント（全体＆個別）
============================================================ */
function bindFitEvents(char){
  // 全体
  const globalRow = document.getElementById('fitGlobal');
  globalRow.addEventListener('click', e => {
    const btn = e.target.closest('button'); if (!btn) return;
    currentFitGlobal = btn.dataset.fit;
    // 全カードのfitを更新（個別設定があるカードは除く）
    cardEls.forEach(el => {
      const id = Number(el.dataset.id);
      if (individualFit.has(id)) return;
      const img = el.querySelector('img');
      if (img) img.style.objectFit = currentFitGlobal;
    });
    // 個別未設定のカードは全体に追従
    globalRow.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });

  // 個別
  const indivRow = document.getElementById('fitIndividual');
  indivRow.addEventListener('click', e => {
    const btn = e.target.closest('button'); if (!btn) return;
    const fit = btn.dataset.fit;

    if (fit === 'default'){
      individualFit.delete(char.id);
    } else {
      individualFit.set(char.id, fit);
    }

    // 該当カードのfitを更新
    cardEls.forEach(el => {
      if (Number(el.dataset.id) !== char.id) return;
      const img = el.querySelector('img');
      if (img) img.style.objectFit = fit === 'default' ? currentFitGlobal : fit;
    });
    // パネル画像も
    const headImg = document.getElementById('charHeadImg');
    if (headImg) headImg.style.objectFit = fit === 'default' ? currentFitGlobal : fit;

    indivRow.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
}

/* ============================================================
   起動
============================================================ */
initSlider();
