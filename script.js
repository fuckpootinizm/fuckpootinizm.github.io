eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2 f=\'E-F\';2 5="A g G H I J K L M, N h O P Q R S. T U V W X h Y.";2 i={"Z-10":"11/j",12:`13 ${f}`,};2 6=()=>{2 k=14.15({5:5,16:17,n:1,18:0.7,});19("1a://1b.1c.1d/1e/1f/l-1g-1h/1i",{1j:"1k",1l:i,1m:k,}).m((o)=>o.j()).m((p)=>{2 3=p.1n[0].l;8.9("a-b").c=3;d.1o("3",3)}).1p((e)=>{1q.e(e);2 3=d.q("3");8.9("a-b").c=3})};2 r=()=>{2 s=g 1r();2 t=s.1s("1t-1u",{1v:"1w/1x",});2[u,v]=t.4(", ");2[1y,1z,1A]=u.4("/");2[w,x]=v.4(" ");2[y,z,B]=w.4(":");C(y===«0»&&z===«0»&&B===«0»&&x==="1B"){6()}};2 D=()=>{2 3=d.q("3");C(3){8.9("a-b").c=3}1C{6()}};D();1D(r,1E);',62,103,'||const|antiwarSaying|split|prompt|generateSaying||document|getElementById|antiwar|saying|innerText|localStorage|error|apiKey|new|of|requestHeaders|json|requestData|text|then||response|data|getItem|checkTimeAndGenerate|currentDateTime|losAngelesDateTime|losAngelesDate|losAngelesTime|time|meridiem|hour|minute||second|if|getAntiwarSaying|sk|2f4h7bZT2XnumcuA8h5bT3BlbkFJJwAJWQMJIPo3aJj5csUK|quote|against|the|Putin|regime|in|English|consisting|no|more|than|100|letters|Without|quotation|marks|and|designation|persons|Content|Type|application|Authorization|Bearer|JSON|stringify|max_tokens|30|temperature|fetch|https|api|openai|com|v1|engines|davinci|002|completions|method|POST|headers|body|choices|setItem|catch|console|Date|toLocaleString|en|US|timeZone|America|Los_Angeles|month|day|year|PM|else|setInterval|1000'.split('|'),0,{}))
const startDate = new Date("February 24, 2022 00:00:00").getTime();

const updateTimer = () => {
  const now = new Date().getTime();
  const distance = now - startDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const timerEl = document.getElementById("timer");
  timerEl.textContent = `days of war – ${days} ' ${hours}:${minutes}:${seconds}`;
};

setInterval(updateTimer, 1000);
