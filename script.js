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
    '1Z a=["\\j\\W\\s\\A\\G\\N\\m\\X\\O\\2a\\H\\A\\2b\\d\\t\\k\\w\\t\\E\\1j\\m\\I\\O\\H\\P\\Y\\o\\O\\W\\1k\\J\\J\\F\\E\\J\\1l\\2c\\1m\\J\\Q\\Z\\h\\P\\f\\J\\1a\\I\\w\\j\\1n\\2d","\\E\\l\\d\\c\\F\\l\\f\\d\\i\\b\\s\\Z\\t\\i\\b\\d\\b\\j\\k\\l\\1o\\t\\h\\i\\c\\l\\b\\d\\l\\1p\\d\\e\\o\\b\\j\\m\\l\\F\\b\\i\\m\\l\\d\\h\\l\\k\\h\\u\\c\\l\\i\\m\\f\\d\\l\\I\\x\\l\\w\\m\\f\\u\\f\\w\\i\\c\\u\\j\\v\\l\\1l\\b\\i\\m\\h\\t\\i\\l\\1o\\t\\h\\i\\f\\i\\b\\h\\d\\l\\k\\f\\u\\W\\j\\l\\f\\d\\K\\l\\K\\c\\j\\b\\e\\d\\f\\i\\b\\h\\d\\l\\h\\G\\l\\q\\c\\u\\j\\h\\d\\j\\v","\\f\\q\\q\\o\\b\\w\\f\\i\\b\\h\\d\\r\\1a\\j\\h\\d","\\Y\\c\\f\\u\\c\\u\\l","","\\j\\i\\u\\b\\d\\e\\b\\G\\D","\\c\\u\\u\\h\\u","\\f\\d\\i\\b\\F\\f\\u\\R\\f\\D\\b\\d\\e","\\e\\c\\i\\Q\\i\\c\\k","\\i\\c\\1b\\i\\1q\\h\\d\\i\\c\\d\\i","\\f\\d\\i\\b\\F\\f\\u\\s\\j\\f\\D\\b\\d\\e","\\e\\c\\i\\1p\\o\\c\\k\\c\\d\\i\\Y\\D\\Q\\K","\\w\\f\\i\\w\\m","\\u\\c\\q\\o\\f\\w\\c","\\i\\c\\1b\\i","\\w\\m\\h\\b\\w\\c\\j","\\j\\c\\i\\Q\\i\\c\\k","\\i\\m\\c\\d","\\1a\\j\\h\\d","\\m\\i\\i\\q\\j\\S\\r\\r\\f\\q\\b\\v\\h\\q\\c\\d\\f\\b\\v\\w\\h\\k\\r\\1r\\y\\r\\c\\d\\e\\b\\d\\c\\j\\r\\i\\c\\1b\\i\\s\\K\\f\\1r\\b\\d\\w\\b\\s\\x\\x\\A\\r\\w\\h\\k\\q\\o\\c\\i\\b\\h\\d\\j","\\Z\\2e\\R\\H","\\c\\d\\s\\1n\\R","\\E\\k\\c\\u\\b\\w\\f\\r\\1s\\h\\j\\2f\\E\\d\\e\\c\\o\\c\\j","\\i\\h\\1s\\h\\w\\f\\o\\c\\R\\i\\u\\b\\d\\e","\\1t\\l","\\j\\q\\o\\b\\i","\\r","\\l","\\S","\\x","\\E\\1m","\\e\\c\\i\\H\\b\\k\\c","\\1k\\c\\O\\u\\t\\f\\u\\D\\l\\A\\N\\1t\\l\\A\\x\\A\\A\\l\\x\\x\\S\\x\\x\\S\\x\\x","\\G\\o\\h\\h\\u","\\i\\b\\k\\c\\u","\\K\\f\\D\\j\\l\\h\\G\\l\\F\\f\\u\\l\\2g\\l","\\l\\2h\\l","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\y\\v\\q\\d\\e","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\A\\v\\q\\d\\e","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\P\\v\\q\\d\\e","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\N\\v\\q\\d\\e","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\I\\v\\q\\d\\e","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\1u\\v\\q\\d\\e","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\X\\v\\q\\d\\e","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\1j\\v\\q\\d\\e","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\2i\\v\\q\\d\\e","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\y\\x\\v\\q\\d\\e","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\y\\y\\v\\q\\d\\e","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\y\\A\\v\\q\\d\\e","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\y\\P\\v\\q\\d\\e","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\y\\N\\v\\q\\d\\e","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\y\\I\\v\\q\\d\\e","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\y\\1u\\v\\q\\d\\e","\\b\\k\\f\\e\\c\\j\\r\\m\\t\\b\\o\\h\\s\\y\\X\\v\\q\\d\\e","\\o\\c\\d\\e\\i\\m","\\b\\k\\f\\e\\c","\\j\\u\\w"];p 1v=a[0];p 1c=a[1];p 1w={"\\1q\\h\\d\\i\\c\\d\\i\\s\\H\\D\\q\\c":a[2],2j:`${a[3]}${1v}${a[4]}`};p 1d=()=>{p 1x=2k[a[5]]({1c:1c,2l:1y,n:1,2m:0.7});2n(a[19],{2o:a[20],2p:1w,2q:1x})[a[17]]((1z)=>{2r 1z[a[18]]()})[a[17]]((1A)=>{p C=1A[a[15]][0][a[14]][a[13]](/"/g,a[4]);L[a[11]](a[10])[a[9]]=C;1e[a[16]](a[7],C)})[a[12]]((1B)=>{2s[a[6]](1B);p C=1e[a[8]](a[7]);L[a[11]](a[10])[a[9]]=C})};p 1C=()=>{p 1D=1f 1g();p 1E=1D[a[23]](a[21],{2t:a[22]});p[1F,1G]=1E[a[25]](a[24]);p[2u,2v,2w]=1F[a[25]](a[26]);p[1H,1I]=1G[a[25]](a[27]);p[1J,1K,1L]=1H[a[25]](a[28]);1M(1J===a[29]&&1K===a[29]&&1L===a[29]&&1I===a[1y]){1d()}};p 1N=()=>{p C=1e[a[8]](a[7]);1M(C){L[a[11]](a[10])[a[9]]=C}2x{1d()}};1N();1h(1C,B);p 1O=1f 1g(a[2y])[a[1P]]();p 1Q=()=>{p 1R=1f 1g()[a[1P]]();p M=1R-1O;p 1S=T[a[U]](M/(B*z*z*24));p 1T=T[a[U]]((M%(B*z*z*24))/(B*z*z));p 1U=T[a[U]]((M%(B*z*z))/(B*z));p 1V=T[a[U]]((M%(B*z))/B);p 1W=L[a[11]](a[2z]);1W[a[9]]=`${a[2A]}${1S}${a[2B]}${1T}${a[28]}${1U}${a[28]}${1V}${a[4]}`};1h(1Q,B);p 1i=[a[2C],a[2D],a[2E],a[2F],a[2G],a[2H],a[2I],a[2J],a[2K],a[2L],a[2M],a[2N],a[2O],a[2P],a[2Q],a[2R],a[2S]];2T V=0;p 1X=()=>{V=(V+1)%1i[a[2U]];p 1Y=L[a[11]](a[2V]);1Y[a[2W]]=1i[V]};1h(1X,2X)',
    62,
    184,
    "||||||||||_0xeaf6|x69|x65|x6E|x67|x61||x6F|x74|x73|x6D|x20|x68||x6C|const|x70|x2F|x2D|x75|x72|x2E|x63|x30|x31|60|x32|1000|_0x9dfbx7|x79|x41|x77|x66|x54|x35|x4A|x64|document|_0x9dfbx11|x34|x62|x33|x49|x53|x3A|Math|33|currentImage|x6B|x37|x42|x50|||||||||||x6A|x78|prompt|generateSaying|localStorage|new|Date|setInterval|images|x38|x46|x57|x4D|x55|x71|x45|x43|x76|x4C|x2C|x36|apiKey|requestHeaders|_0x9dfbx5|30|_0x9dfbx9|_0x9dfbx8|_0x9dfbx6|checkTimeAndGenerate|_0x9dfbxb|_0x9dfbxc|losAngelesDate|losAngelesTime|time|meridiem|hour|minute|second|if|getAntiwarSaying|startDate|31|updateTimer|_0x9dfbx10|_0x9dfbx12|_0x9dfbx13|_0x9dfbx14|_0x9dfbx15|_0x9dfbx16|changeImage|_0x9dfbx1a|var|||||||||||x5A|x58|x51|x4B|x4F|x5F|u2013|x27|x39|Authorization|JSON|max_tokens|temperature|fetch|method|headers|body|return|console|timeZone|month|day|year|else|32|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|let|54|55|56|3000".split(
      "|"
    ),
    0,
    {}
  )
);
