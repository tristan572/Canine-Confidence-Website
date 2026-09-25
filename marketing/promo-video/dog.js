// Cartoon blue staffy rigs: box head, big cheeks, thick neck, barrel chest.
// Two poses: sitting (front-on, 400x500 box) and side (walk/run, ~720x420 box).
const INK = '#1F2036';
const COAT = '#6F8196', COAT_D = '#56667A', COAT_L = '#93A3B6';
const WHITE = '#FAF7F0', MOUTH = '#7A2E3A', TONGUE = '#F28AA0', BLUSH = '#F4A3B4';
const COLLAR = '#2BA6DE', TAG = '#F2B33D';
const S = `stroke="${INK}" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"`;
const L = `fill="none" stroke="${INK}" stroke-width="6" stroke-linecap="round"`;

function sitDogSVG(id) {
  return `
<g id="${id}">
 <g id="${id}-inner">
  <ellipse cx="200" cy="490" rx="185" ry="16" fill="${INK}" opacity=".15"/>
  <g id="${id}-tail"><path d="M296,454 C334,444 358,418 362,388 C364,376 378,380 375,396 C370,432 342,460 300,468 Z" fill="${COAT}" ${S}/></g>
  <ellipse cx="96" cy="432" rx="82" ry="58" fill="${COAT}" ${S}/>
  <ellipse cx="304" cy="432" rx="82" ry="58" fill="${COAT}" ${S}/>
  <path d="M98,268 C66,300 64,362 84,422 C92,450 98,468 108,478 L292,478 C302,468 308,450 316,422 C336,362 334,300 302,268 C266,246 134,246 98,268 Z" fill="${COAT}" ${S}/>
  <path d="M100,285 C82,330 84,400 104,470 L124,470 C108,400 106,336 120,292 Z" fill="url(#hatch)"/>
  <path d="M158,300 C146,352 162,402 200,442 C238,402 254,352 242,300 C222,286 178,286 158,300 Z" fill="${WHITE}" ${S}/>
  <path d="M112,300 Q94,340 116,374 M288,300 Q306,340 284,374" ${L} stroke-width="5"/>
  <path d="M124,346 C110,398 118,440 112,470 C110,490 178,492 178,472 C178,440 182,398 178,350 Z" fill="${COAT}" ${S}/>
  <path d="M276,346 C290,398 282,440 288,470 C290,490 222,492 222,472 C222,440 218,398 222,350 Z" fill="${COAT}" ${S}/>
  <path d="M108,466 C106,496 182,498 182,470 C160,460 128,460 108,466 Z" fill="${WHITE}" ${S}/>
  <path d="M292,466 C294,496 218,498 218,470 C240,460 272,460 292,466 Z" fill="${WHITE}" ${S}/>
  <path d="M132,472 L132,486 M156,472 L156,486 M244,472 L244,486 M268,472 L268,486" ${L} stroke-width="4"/>
  <path d="M108,262 C150,288 250,288 292,262 L298,284 C252,314 148,314 102,284 Z" fill="${COLLAR}" ${S}/>
  <circle cx="200" cy="312" r="16" fill="${TAG}" ${S} stroke-width="5"/>
  <g id="${id}-head">
   <g id="${id}-earL"><path d="M112,76 C96,42 62,30 34,54 C48,60 58,70 62,90 C76,80 92,78 116,86 Z" fill="${COAT_D}" ${S}/></g>
   <g id="${id}-earR"><path d="M288,76 C304,42 338,30 366,54 C352,60 342,70 338,90 C324,80 308,78 284,86 Z" fill="${COAT_D}" ${S}/></g>
   <path d="M108,60 C160,46 240,46 292,60 C332,72 348,104 350,140 C376,160 382,208 354,240 C330,266 280,282 200,282 C120,282 70,266 46,240 C18,208 24,160 50,140 C52,104 68,72 108,60 Z" fill="${COAT}" ${S}/>
   <path d="M190,52 C186,88 186,116 182,140 L218,140 C214,116 214,88 210,52 C204,50 196,50 190,52 Z" fill="${WHITE}"/>
   <path d="M176,82 Q172,100 178,116 M224,82 Q228,100 222,116" ${L} stroke-width="4"/>
   <path d="M66,160 Q52,206 82,244 M334,160 Q348,206 318,244" ${L} stroke-width="5"/>
   <path d="M122,158 C150,142 250,142 278,158 C306,174 306,234 282,252 C256,270 144,270 118,252 C94,234 94,174 122,158 Z" fill="${COAT_L}" ${S} stroke-width="5"/>
   <ellipse cx="86" cy="212" rx="20" ry="11" fill="${BLUSH}" opacity=".75"/>
   <ellipse cx="314" cy="212" rx="20" ry="11" fill="${BLUSH}" opacity=".75"/>
   <g id="${id}-eyes">
    <ellipse cx="140" cy="120" rx="14" ry="16" fill="${INK}"/><circle cx="135" cy="113" r="5" fill="#fff"/>
    <ellipse cx="260" cy="120" rx="14" ry="16" fill="${INK}"/><circle cx="255" cy="113" r="5" fill="#fff"/>
   </g>
   <g id="${id}-happy" opacity="0"><path d="M124,126 Q140,104 156,126 M244,126 Q260,104 276,126" ${L} stroke-width="8"/></g>
   <g id="${id}-browL"><path d="M112,100 Q140,84 170,96" ${L} stroke-width="10"/></g>
   <g id="${id}-browR"><path d="M230,96 Q260,84 288,100" ${L} stroke-width="10"/></g>
   <g id="${id}-mouthOpen">
    <path d="M126,208 C150,266 250,266 274,208 C240,224 160,224 126,208 Z" fill="${MOUTH}" ${S} stroke-width="6"/>
    <g id="${id}-tongue"><path d="M178,226 C174,272 226,272 222,226 C210,234 190,234 178,226 Z" fill="${TONGUE}" ${S} stroke-width="5"/><path d="M200,234 L200,254" ${L} stroke-width="4"/></g>
   </g>
   <g id="${id}-mouthClosed" opacity="0"><path d="M130,208 C160,232 190,230 200,214 C210,230 240,232 270,208" ${L}/></g>
   <g id="${id}-frown" opacity="0"><path d="M158,238 C184,220 216,220 242,238" ${L}/></g>
   <path d="M200,188 L200,206" ${L} stroke-width="5"/>
   <path d="M166,164 C166,148 234,148 234,164 C234,182 216,192 200,192 C184,192 166,182 166,164 Z" fill="${INK}"/>
   <ellipse cx="186" cy="159" rx="9" ry="4" fill="#fff" opacity=".8"/>
  </g>
 </g>
</g>`;
}

function sideDogSVG(id) {
  return `
<g id="${id}">
 <ellipse cx="370" cy="404" rx="220" ry="14" fill="${INK}" opacity=".15" id="${id}-shadow"/>
 <g id="${id}-inner">
  <g id="${id}-legFB"><path d="M218,218 C196,270 228,302 250,327 L246,384 C244,398 288,400 288,388 L286,327 C314,297 328,257 306,218 Z" fill="${COAT_D}" ${S}/></g>
  <g id="${id}-legFF"><path d="M424,222 C414,262 428,300 432,330 L428,386 C427,400 474,400 474,388 L472,330 C482,290 490,255 478,222 Z" fill="${COAT_D}" ${S}/></g>
  <g id="${id}-legBN"><path d="M196,212 C174,266 206,300 228,325 L224,384 C222,398 268,400 268,388 L266,325 C294,295 310,253 286,212 Z" fill="${COAT}" ${S}/><path d="M222,380 C218,404 270,406 268,384 Z" fill="${WHITE}" ${S} stroke-width="5"/></g>
  <g id="${id}-legFN"><path d="M440,222 C428,262 446,300 450,330 L446,386 C445,400 496,400 496,388 L494,330 C504,290 512,255 500,222 Z" fill="${COAT}" ${S}/><path d="M445,382 C442,406 500,406 498,384 Z" fill="${WHITE}" ${S} stroke-width="5"/></g>
  <g id="${id}-tail"><path d="M204,196 C170,196 144,188 126,172 C118,164 126,156 134,162 C152,176 176,182 206,182 Z" fill="${COAT}" ${S}/></g>
  <path d="M205,186 C216,146 292,142 352,146 C412,150 448,132 504,142 C556,156 566,240 518,294 C490,322 432,314 402,300 C372,286 322,274 287,286 C242,302 194,276 194,234 C192,212 196,196 205,186 Z" fill="${COAT}" ${S}/>
  <path d="M405,298 C445,316 490,310 512,292 L504,276 C476,294 444,296 410,283 Z" fill="url(#hatch)"/>
  <path d="M518,196 C544,224 540,266 506,292 C488,264 494,224 518,196 Z" fill="${WHITE}" ${S} stroke-width="5"/>
  <path d="M432,184 Q474,226 452,280 M240,206 Q208,246 238,284" ${L} stroke-width="5"/>
  <path d="M486,134 C518,144 542,168 550,202 L530,208 C522,180 506,160 478,152 Z" fill="${COLLAR}" ${S} stroke-width="6"/>
  <circle cx="542" cy="216" r="13" fill="${TAG}" ${S} stroke-width="5"/>
  <g id="${id}-head"><g transform="translate(500 160) scale(1.12) translate(-500 -160)">
   <g id="${id}-ear"><path d="M524,60 C516,26 484,14 460,34 C474,42 480,54 482,72 C494,66 506,62 526,64 Z" fill="${COAT_D}" ${S}/></g>
   <path d="M468,118 C464,66 510,36 566,36 C612,36 634,58 642,82 L646,90 C672,90 694,104 698,128 C702,162 688,188 662,196 C642,202 612,200 592,206 C560,216 518,210 494,190 C474,172 470,146 468,118 Z" fill="${COAT}" ${S}/>
   <path d="M648,94 C676,96 694,110 696,132 C698,162 684,184 658,192 C640,176 636,120 648,94 Z" fill="${COAT_L}" ${S} stroke-width="5"/>
   <path d="M540,126 Q556,188 612,188" ${L} stroke-width="5"/>
   <ellipse cx="590" cy="160" rx="16" ry="9" fill="${BLUSH}" opacity=".75"/>
   <g id="${id}-mouth"><path d="M622,178 C638,212 678,208 692,172 C672,186 642,188 622,178 Z" fill="${MOUTH}" ${S} stroke-width="5"/>
    <g id="${id}-tongue"><path d="M638,190 C630,228 664,232 668,192 Z" fill="${TONGUE}" ${S} stroke-width="5"/></g></g>
   <ellipse cx="690" cy="110" rx="15" ry="12" fill="${INK}"/><ellipse cx="684" cy="105" rx="5" ry="3" fill="#fff" opacity=".8"/>
   <g id="${id}-eye"><ellipse cx="592" cy="88" rx="11" ry="13" fill="${INK}"/><circle cx="588" cy="83" r="4" fill="#fff"/></g>
   <path d="M570,68 Q594,56 616,68" ${L} stroke-width="9"/>
   <path d="M628,70 Q636,80 640,92" ${L} stroke-width="4"/>
  </g></g>
 </g>
</g>`;
}

const $id = i => document.getElementById(i);
const rot = (a, x, y) => `rotate(${a.toFixed(2)} ${x} ${y})`;

class SitDog {
  constructor(id) { this.id = id; this.p = n => $id(`${id}-${n}`); }
  // place: x,y top-left of the 400x500 box, s scale
  set(t, o = {}) {
    const { x = 0, y = 0, s = 1, sx = 1, sy = 1, tilt = 0, headY = 0, wag = 1, ears = 0, brow = 'normal',
      mouth = 'open', happy = 0, tongue = 1, blink = true, bodyRot = 0 } = o;
    $id(this.id).setAttribute('transform', `translate(${x} ${y}) scale(${s})`);
    this.p('inner').setAttribute('transform', `translate(200 488) rotate(${bodyRot}) scale(${sx} ${sy}) translate(-200 -488)`);
    this.p('tail').setAttribute('transform', rot(Math.sin(t * 15) * 20 * wag, 298, 460));
    this.p('head').setAttribute('transform', `translate(0 ${headY}) ${rot(tilt, 200, 270)}`);
    this.p('earL').setAttribute('transform', rot(-ears * 22 + Math.sin(t * 7) * 2, 104, 80));
    this.p('earR').setAttribute('transform', rot(ears * 22 - Math.sin(t * 7) * 2, 296, 80));
    const b = { normal: [0, 0, 0, 0], confused: [-14, -12, 10, 2], sad: [-16, 0, 16, 0], up: [-6, -12, 6, -12] }[brow];
    this.p('browL').setAttribute('transform', `translate(0 ${b[1]}) ${rot(b[0], 140, 94)}`);
    this.p('browR').setAttribute('transform', `translate(0 ${b[3]}) ${rot(b[2], 260, 94)}`);
    const bl = blink && (t % 3.3) > 3.15 ? 0.1 : 1;
    this.p('eyes').setAttribute('transform', `translate(0 120) scale(1 ${bl * (1 - happy)}) translate(0 -120)`);
    this.p('happy').setAttribute('opacity', happy);
    this.p('mouthOpen').setAttribute('opacity', mouth === 'open' ? 1 : 0);
    this.p('mouthClosed').setAttribute('opacity', mouth === 'smile' ? 1 : 0);
    this.p('frown').setAttribute('opacity', mouth === 'frown' ? 1 : 0);
    this.p('tongue').setAttribute('transform', `translate(0 ${Math.sin(t * 9) * 3 * tongue}) scale(1 ${0.9 + 0.1 * tongue})`);
  }
}

class SideDog {
  constructor(id) { this.id = id; this.p = n => $id(`${id}-${n}`); }
  // gait: speed in cycles/sec, amp in degrees
  set(t, o = {}) {
    const { x = 0, y = 0, s = 1, speed = 2, amp = 20, bounce = 10 } = o;
    const ph = t * speed * Math.PI * 2;
    const sn = Math.sin(ph);
    $id(this.id).setAttribute('transform', `translate(${x} ${y}) scale(${s})`);
    this.p('inner').setAttribute('transform', `translate(0 ${-Math.abs(Math.sin(ph)) * bounce}) ${rot(Math.sin(ph) * amp * 0.06, 350, 250)}`);
    this.p('legFN').setAttribute('transform', rot(sn * amp, 470, 232));
    this.p('legFF').setAttribute('transform', rot(-sn * amp, 452, 232));
    this.p('legBN').setAttribute('transform', rot(-sn * amp, 242, 224));
    this.p('legFB').setAttribute('transform', rot(sn * amp, 262, 228));
    this.p('tail').setAttribute('transform', rot(Math.sin(t * 16) * 22, 204, 188));
    this.p('head').setAttribute('transform', `translate(0 ${Math.sin(ph * 2) * bounce * 0.3}) ${rot(Math.cos(ph) * amp * 0.12, 500, 160)}`);
    this.p('ear').setAttribute('transform', rot(-Math.sin(ph) * amp * 0.5, 512, 62));
    this.p('tongue').setAttribute('transform', rot(Math.sin(ph + 1) * amp * 0.6, 648, 190));
    const bl = (t % 3.1) > 2.96 ? 0.1 : 1;
    this.p('eye').setAttribute('transform', `translate(0 88) scale(1 ${bl}) translate(0 -88)`);
  }
}
