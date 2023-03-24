eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < a ? "" : e(parseInt(c / a))) +
        ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if (!"".replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c);
      k = [
        function (e) {
          return r[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '1Z a=["\\k\\W\\s\\A\\G\\N\\o\\X\\O\\2a\\H\\A\\2b\\d\\t\\l\\w\\t\\E\\1j\\o\\I\\O\\H\\P\\Y\\p\\O\\W\\1k\\J\\J\\F\\E\\J\\1l\\2c\\1m\\J\\Q\\Z\\h\\P\\f\\J\\1a\\I\\w\\k\\1n\\2d","\\E\\m\\d\\c\\F\\m\\f\\d\\j\\b\\s\\Z\\t\\j\\b\\d\\b\\k\\l\\m\\1o\\t\\h\\j\\c\\m\\b\\d\\m\\1p\\d\\e\\p\\b\\k\\o\\m\\F\\b\\j\\o\\m\\d\\h\\m\\l\\h\\u\\c\\m\\j\\o\\f\\d\\m\\I\\x\\m\\w\\o\\f\\u\\f\\w\\j\\c\\u\\k\\v\\m\\1l\\b\\j\\o\\h\\t\\j\\m\\1o\\t\\h\\j\\f\\j\\b\\h\\d\\m\\l\\f\\u\\W\\k\\m\\f\\d\\K\\m\\K\\c\\k\\b\\e\\d\\f\\j\\b\\h\\d\\m\\h\\G\\m\\r\\c\\u\\k\\h\\d\\k\\v","\\f\\r\\r\\p\\b\\w\\f\\j\\b\\h\\d\\i\\1a\\k\\h\\d","\\Y\\c\\f\\u\\c\\u\\m","","\\k\\j\\u\\b\\d\\e\\b\\G\\D","\\c\\u\\u\\h\\u","\\f\\d\\j\\b\\F\\f\\u\\R\\f\\D\\b\\d\\e","\\e\\c\\j\\Q\\j\\c\\l","\\j\\c\\1b\\j\\1q\\h\\d\\j\\c\\d\\j","\\f\\d\\j\\b\\F\\f\\u\\s\\k\\f\\D\\b\\d\\e","\\e\\c\\j\\1p\\p\\c\\l\\c\\d\\j\\Y\\D\\Q\\K","\\w\\f\\j\\w\\o","\\u\\c\\r\\p\\f\\w\\c","\\j\\c\\1b\\j","\\w\\o\\h\\b\\w\\c\\k","\\k\\c\\j\\Q\\j\\c\\l","\\j\\o\\c\\d","\\1a\\k\\h\\d","\\o\\j\\j\\r\\k\\S\\i\\i\\f\\r\\b\\v\\h\\r\\c\\d\\f\\b\\v\\w\\h\\l\\i\\1r\\y\\i\\c\\d\\e\\b\\d\\c\\k\\i\\j\\c\\1b\\j\\s\\K\\f\\1r\\b\\d\\w\\b\\s\\x\\x\\A\\i\\w\\h\\l\\r\\p\\c\\j\\b\\h\\d\\k","\\Z\\2e\\R\\H","\\c\\d\\s\\1n\\R","\\E\\l\\c\\u\\b\\w\\f\\i\\1s\\h\\k\\2f\\E\\d\\e\\c\\p\\c\\k","\\j\\h\\1s\\h\\w\\f\\p\\c\\R\\j\\u\\b\\d\\e","\\1t\\m","\\k\\r\\p\\b\\j","\\i","\\m","\\S","\\x","\\E\\1m","\\e\\c\\j\\H\\b\\l\\c","\\1k\\c\\O\\u\\t\\f\\u\\D\\m\\A\\N\\1t\\m\\A\\x\\A\\A\\m\\x\\x\\S\\x\\x\\S\\x\\x","\\G\\p\\h\\h\\u","\\j\\b\\l\\c\\u","\\K\\f\\D\\k\\m\\h\\G\\m\\F\\f\\u\\m\\2g\\m","\\m\\2h\\m","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\y\\v\\r\\d\\e","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\A\\v\\r\\d\\e","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\P\\v\\r\\d\\e","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\N\\v\\r\\d\\e","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\I\\v\\r\\d\\e","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\1u\\v\\r\\d\\e","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\X\\v\\r\\d\\e","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\1j\\v\\r\\d\\e","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\2i\\v\\r\\d\\e","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\y\\x\\v\\r\\d\\e","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\y\\y\\v\\r\\d\\e","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\y\\A\\v\\r\\d\\e","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\y\\P\\v\\r\\d\\e","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\y\\N\\v\\r\\d\\e","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\y\\I\\v\\r\\d\\e","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\y\\1u\\v\\r\\d\\e","\\i\\b\\l\\f\\e\\c\\k\\i\\o\\t\\b\\p\\h\\s\\y\\X\\v\\r\\d\\e","\\p\\c\\d\\e\\j\\o","\\b\\l\\f\\e\\c","\\k\\u\\w"];q 1v=a[0];q 1c=a[1];q 1w={"\\1q\\h\\d\\j\\c\\d\\j\\s\\H\\D\\r\\c":a[2],2j:`${a[3]}${1v}${a[4]}`};q 1d=()=>{q 1x=2k[a[5]]({1c:1c,2l:1y,n:1,2m:0.7});2n(a[19],{2o:a[20],2p:1w,2q:1x})[a[17]]((1z)=>{2r 1z[a[18]]()})[a[17]]((1A)=>{q C=1A[a[15]][0][a[14]][a[13]](/"/g,a[4]);L[a[11]](a[10])[a[9]]=C;1e[a[16]](a[7],C)})[a[12]]((1B)=>{2s[a[6]](1B);q C=1e[a[8]](a[7]);L[a[11]](a[10])[a[9]]=C})};q 1C=()=>{q 1D=1f 1g();q 1E=1D[a[23]](a[21],{2t:a[22]});q[1F,1G]=1E[a[25]](a[24]);q[2u,2v,2w]=1F[a[25]](a[26]);q[1H,1I]=1G[a[25]](a[27]);q[1J,1K,1L]=1H[a[25]](a[28]);1M(1J===a[29]&&1K===a[29]&&1L===a[29]&&1I===a[1y]){1d()}};q 1N=()=>{q C=1e[a[8]](a[7]);1M(C){L[a[11]](a[10])[a[9]]=C}2x{1d()}};1N();1h(1C,B);q 1O=1f 1g(a[2y])[a[1P]]();q 1Q=()=>{q 1R=1f 1g()[a[1P]]();q M=1R-1O;q 1S=T[a[U]](M/(B*z*z*24));q 1T=T[a[U]]((M%(B*z*z*24))/(B*z*z));q 1U=T[a[U]]((M%(B*z*z))/(B*z));q 1V=T[a[U]]((M%(B*z))/B);q 1W=L[a[11]](a[2z]);1W[a[9]]=`${a[2A]}${1S}${a[2B]}${1T}${a[28]}${1U}${a[28]}${1V}${a[4]}`};1h(1Q,B);q 1i=[a[2C],a[2D],a[2E],a[2F],a[2G],a[2H],a[2I],a[2J],a[2K],a[2L],a[2M],a[2N],a[2O],a[2P],a[2Q],a[2R],a[2S]];2T V=0;q 1X=()=>{V=(V+1)%1i[a[2U]];q 1Y=L[a[11]](a[2V]);1Y[a[2W]]=1i[V]};1h(1X,2X)',
    62,
    184,
    "||||||||||_0x4770|x69|x65|x6E|x67|x61||x6F|x2F|x74|x73|x6D|x20||x68|x6C|const|x70|x2D|x75|x72|x2E|x63|x30|x31|60|x32|1000|_0x9f43x7|x79|x41|x77|x66|x54|x35|x4A|x64|document|_0x9f43x11|x34|x62|x33|x49|x53|x3A|Math|33|currentImage|x6B|x37|x42|x50|||||||||||x6A|x78|prompt|generateSaying|localStorage|new|Date|setInterval|images|x38|x46|x57|x4D|x55|x71|x45|x43|x76|x4C|x2C|x36|apiKey|requestHeaders|_0x9f43x5|30|_0x9f43x9|_0x9f43x8|_0x9f43x6|checkTimeAndGenerate|_0x9f43xb|_0x9f43xc|losAngelesDate|losAngelesTime|time|meridiem|hour|minute|second|if|getAntiwarSaying|startDate|31|updateTimer|_0x9f43x10|_0x9f43x12|_0x9f43x13|_0x9f43x14|_0x9f43x15|_0x9f43x16|changeImage|_0x9f43x1a|var|||||||||||x5A|x58|x51|x4B|x4F|x5F|u2013|x27|x39|Authorization|JSON|max_tokens|temperature|fetch|method|headers|body|return|console|timeZone|month|day|year|else|32|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|let|54|55|56|3000".split(
      "|"
    ),
    0,
    {}
  )
);

let canvas = document.getElementById('noisy-canvas'),
    ctx = canvas.getContext('2d');
function main() {
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();
    render();
}
function getRandom() {
    return Math.random() * 255;
}
function render() {
    let imageData = ctx.createImageData(ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
        const color = getRandom();
        imageData.data[i]     = color;
        imageData.data[i + 1] = color;
        imageData.data[i + 2] = color;
        imageData.data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    requestAnimationFrame(render);
}
function updateCanvasSize() {
    ctx.canvas.height = canvas.offsetHeight;
    ctx.canvas.width  = canvas.offsetWidth;
}
main();
