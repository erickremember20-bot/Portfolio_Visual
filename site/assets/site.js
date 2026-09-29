(function(){
  var root=document.documentElement;
  function fit(){var w=window.innerWidth;root.style.setProperty('--z',w>=1024&&w<1400?(w/1400).toFixed(4):1)}
  fit();window.addEventListener('resize',fit);

  // back to top
  var top=document.querySelector('.totop');
  function onScroll(){top&&top.classList.toggle('on',window.scrollY>600)}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  top&&top.addEventListener('click',function(){window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})});

  // copy e-mail
  var toast=document.querySelector('.toast'),tid;
  function say(){if(!toast)return;toast.classList.add('on');clearTimeout(tid);tid=setTimeout(function(){toast.classList.remove('on')},2200)}
  document.querySelectorAll('[data-copy]').forEach(function(b){b.addEventListener('click',function(){
    var v=b.getAttribute('data-copy');
    if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(v).then(say,function(){location.href='mailto:'+v})}
    else{var t=document.createElement('textarea');t.value=v;t.setAttribute('readonly','');t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();
      try{document.execCommand('copy');say()}catch(e){location.href='mailto:'+v}document.body.removeChild(t)}
  })});

  // videos: load when near the viewport, pause when away
  var still=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var vids=[].slice.call(document.querySelectorAll('video[data-src]'));
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){var v=e.target;
      if(e.isIntersecting){if(!v.src){v.src=v.getAttribute('data-src');v.preload='auto'}if(!still){var p=v.play();p&&p.catch&&p.catch(function(){})}}
      else if(v.src){v.pause()}})},{rootMargin:'300px 0px'});
    vids.forEach(function(v){io.observe(v)});
  }else{vids.forEach(function(v){v.src=v.getAttribute('data-src');if(still)v.removeAttribute('autoplay')})}

  // image lightbox (case pages)
  var lb=document.querySelector('.lb');
  var zooms=[].slice.call(document.querySelectorAll('img[data-zoom]'));
  if(lb&&zooms.length){
    var big=lb.querySelector('img'),x=lb.querySelector('.lb-x'),last=null;
    function open(img){last=img;big.src=img.currentSrc||img.src;big.alt=img.alt;lb.hidden=false;
      requestAnimationFrame(function(){lb.classList.add('on')});document.body.classList.add('lb-open');x.focus()}
    function close(){lb.classList.remove('on');document.body.classList.remove('lb-open');
      setTimeout(function(){lb.hidden=true;big.removeAttribute('src')},250);last&&last.focus()}
    zooms.forEach(function(img){img.setAttribute('tabindex','0');img.setAttribute('role','button');
      img.addEventListener('click',function(){open(img)});
      img.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open(img)}})});
    lb.addEventListener('click',function(e){if(e.target!==big)close()});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lb.classList.contains('on'))close()});
  }

  // current section in the case menu
  var links=[].slice.call(document.querySelectorAll('.view-d .menu-link'));
  if(links.length&&'IntersectionObserver' in window){
    var map={};links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a});
    var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){
      links.forEach(function(a){a.removeAttribute('aria-current')});var a=map[e.target.id];a&&a.setAttribute('aria-current','true')}})},{rootMargin:'-45% 0px -50% 0px'});
    Object.keys(map).forEach(function(id){var s=document.querySelector('.view-d #'+CSS.escape(id));s&&so.observe(s)});
  }
})();
