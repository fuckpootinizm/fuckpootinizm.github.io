eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2 f=\'E-F\';2 5="G H I J K\'s L M N, O g P Q R h S. T U V W X g Y.";2 i={"Z-10":"11/j",12:`13 ${f}`,};2 6=()=>{2 k=14.15({5:5,16:h,n:1,17:0.7,});18("19://1a.1b.1c/1d/1e/l-1f-1g/1h",{1i:"1j",1k:i,1l:k,}).m((o)=>o.j()).m((p)=>{2 3=p.1m[0].l;8.9("a-b").c=3;d.1n("3",3)}).1o((e)=>{1p.e(e);2 3=d.q("3");8.9("a-b").c=3})};2 r=()=>{2 t=1q 1r();2 u=t.1s("1t-1u",{1v:"1w/1x",});2[v,w]=u.4(", ");2[1y,1z,1A]=v.4("/");2[x,y]=w.4(" ");2[z,A,B]=x.4(":");C(z==="0"&&A==="0"&&B==="0"&&y==="1B"){6()}};2 D=()=>{2 3=d.q("3");C(3){8.9("a-b").c=3}1C{6()}};D();1D(r,1E);',62,103,'||const|antiwarSaying|split|prompt|generateSaying||document|getElementById|antiwar|saying|textContent|localStorage|error|apiKey|of|100|requestHeaders|json|requestData|text|then||response|data|getItem|checkTimeAndGenerate||currentDateTime|losAngelesDateTime|losAngelesDate|losAngelesTime|time|meridiem|hour|minute|second|if|getAntiwarSaying|sk|2f4h7bZT2XnumcuA8h5bT3BlbkFJJwAJWQMJIPo3aJj5csUK|New|quote|only|AGAINST|Putin|regime|in|English|consisting|no|more|than|letters|Without|quotation|marks|and|designation|persons|Content|Type|application|Authorization|Bearer|JSON|stringify|max_tokens|temperature|fetch|https|api|openai|com|v1|engines|davinci|002|completions|method|POST|headers|body|choices|setItem|catch|console|new|Date|toLocaleString|en|US|timeZone|America|Los_Angeles|month|day|year|PM|else|setInterval|1000'.split('|'),0,{}))

const startDate = new Date("February 24, 2022 00:00:00").getTime();

const updateTimer = () => {
  const now = new Date().getTime();
  const distance = now - startDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const timerEl = document.getElementById("timer");
  timerEl.textContent = `days of the war started by putin regime – ${days} ' ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} '`;
};

setInterval(updateTimer, 1000);

const images = [
  "images/huilo-1.png",
  "images/huilo-2.png",
  "images/huilo-3.png",
  "images/huilo-4.png",
  "images/huilo-5.png",
  "images/huilo-6.png",
  "images/huilo-7.png",
  "images/huilo-8.png",
  "images/huilo-9.png",
  "images/huilo-10.png",
  "images/huilo-11.png",
  "images/huilo-12.png",
  "images/huilo-13.png",
  "images/huilo-14.png",
  "images/huilo-15.png",
  "images/huilo-16.png",
  "images/huilo-17.png",
];

let currentImage = 0;

const changeImage = () => {
  currentImage = (currentImage + 1) % images.length;
  const imageEl = document.getElementById("image");
  imageEl.src = images[currentImage];
};

setInterval(changeImage, 1000);
