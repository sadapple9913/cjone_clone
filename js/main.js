// main.js
window.addEventListener("load" , ()=>{

const topMenudDD = document.querySelectorAll('dl.topMenu>dd')

topMenudDD[4].addEventListener('click' ,e=>{
  e.currentTarget.classList.toggle('on');
  if(e.currentTarget.classList.contains('on')){
    e.currentTarget.children[0].setAttribute("title", "고객센터 닫기")
  }else{
    e.currentTarget.children[0].setAttribute("title", "고객센터 열기")
  }
})

// 주메뉴
// .header_wrap.on
//nav.gnb>ul>li>ul.on

const headerWrap = document.querySelector('.header_wrap')
const menu  = document.querySelectorAll('nav.gnb>ul>li')
const subMenu = document.querySelectorAll('nav.gnb>ul>li>ul') 
console.log(subMenu);

for(var i=0; i<menu.length; i++){
  menu[i].addEventListener('mouseover' ,()=>{
    // 고객센터에 on붙어있으면 고객센터의 on을 지운다


    if(topMenudDD[4].classList.contains('on')){
      topMenudDD[4].classList.remove('on');
    }
    // 검색박스에 on붙어있으면 검색박스의 on을 지운다

    if(formsrch.classList.contains('on')){
      srchbtn.classList.remove('on')
      formsrch.classList.remove('on')
    };


  headerWrap.classList.add('on');
  subMenu.forEach(item =>{
    item.classList.add('on')
  });
  }); //mouseover

  menu[i].addEventListener('mouseleave' ,()=>{
    headerWrap.classList.remove('on');
    subMenu.forEach(item =>{
      item.classList.remove('on')
    });
  }); //mouseleave

  menu[i].children[0].addEventListener('focus',()=>{
    headerWrap.classList.add('on');
    subMenu.forEach(item =>{
      item.classList.add('on')
    });
  }); //focus

  menu[i].children[0].addEventListener('blur',()=>{
    headerWrap.classList.remove('on');
    subMenu.forEach(item =>{
      item.classList.remove('on')
    });
  }); //blur
}

// 검색 열기닫기

const srchbtn = document.querySelector(".srch_open")
const formsrch = document.querySelector(".srch")
srchbtn.addEventListener("click",e=>{
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
  formsrch.classList.toggle('on');

  if(e.currentTarget.classList.contains("on")){
    e.currentTarget.children[0],setAttribute('title','검색입력 닫기');
  }else{e.currentTarget.children[0],setAttribute('title','검색입력 열기');

}
});


// 로그인 이미지
// a.appear 안에 img 00000~00056.png
//a.loop 안에 img 00000~000081.png
const appear = document.querySelector('.appear')
const loop = document.querySelector('.loop')

for(i=0;i<57;i++){
  if(i<10){
    appear.innerHTML += `<img src="images/appear/appear_0000${i}.png" alt="${i}"/>`
  }else{
    appear.innerHTML += `<img src="images/appear/appear_000${i}.png" alt="${i}"/>`}
}

for(i=0;i<82;i++){
  if(i<10){
    loop.innerHTML += `<img src="images/loop/loop_0000${i}.png" alt="${i}"/>`
  }else{
    loop.innerHTML += `<img src="images/loop/loop_000${i}.png" alt="${i}"/>`}
}

// 로그인 애니메이션
//appear 0~56 이미지 각각에 animation 속성 적용
//animation: ani 2.85s linear 0s 1;
//animation: ani 2.85s linear 0.5s 1;
//animation: ani 2.85s linear 0.10s 1;
//animation: ani 2.85s linear 2.80s 1;

const appearImg = document.querySelectorAll('.appear>img')
console.log(appear);
let deley = 0.05

for(let i=0; i<appearImg.length; i++){
  appearImg[i].style.animation = `ani 2.85s linear ${i*deley}s 1`;
}

//loop 0~81 이미지 각각에 animation 속성 적용
//animation: ani 4.1s linear 0s 2.85 infinite;
//animation: ani 4.1s linear 0s 2.90 infinite;
//animation: ani 4.15s linear 0s 2.95 infinite;

const loopImg = document.querySelectorAll('.loop>img')

for(let i=0; i<loopImg.length; i++){
  loopImg[i].style.animation = `ani 4.1s linear ${2.85+(i*deley)}s infinite`;
}

// content1 - 퀵메뉴 이미지 생성
//for()문 이용해서<img>를 quick01_00000.png~quick01_00019.png생성
// span안에 넣기

const quick = document.querySelectorAll('.content1>ul>li>a>span')
console.log(quick);

for(let p=0; p<quick.length; p++){

for(let i=0;i<20;i++){
  if(i<10){
    quick[p].innerHTML += `<img src="images/quick0${p + 1}/quick0${p + 1}_0000${i}.png" alt="${i}"/>`
  }else{
    quick[p].innerHTML += `<img src="images/quick0${p + 1}/quick0${p + 1}_000${i}.png" alt="${i}"/>`
}
}
}

// content1
// li에 마우스 올렸을때 이미지 애니메이션 적용
// 마우스 땟을때 이미지에 애니메이션 삭제

const quickImg = document.querySelectorAll(".content1 ul li")
let dl = 0.05

for(let i=0; i<quickImg.length; i++){
  quickImg[i].addEventListener('mouseover' ,e=>{
    for(let p = 0; p < 20; p++){
      let imgLi = e.currentTarget.children[0].children[0].children;
      imgLi[p].style.animation = `ani 1s linear ${p*dl}s 1`;
    }
  });

  quickImg[i].addEventListener('mouseout' ,e=>{
    for(let k = 0; k < 20; k++){
      let imgLi = e.currentTarget.children[0].children[0].children;
      imgLi[k].style.animation = 'none';
    }
  });

};

// 배너
// next버튼을 눌렀을때
//배너번호 1증가
//배너번호 마지막 배너번호보다 크면 배너번호가 다시 0으로 
//페너프레임의 left값 변경해서 배너 움직이게
const bannerFrame = document.querySelector('.banner_frame');
const sections = bannerFrame.querySelectorAll('section');
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
// let w = 1;
// let bannerWid = document.body.clientWidth;
let bnnNum = 0;
let lastNum = sections.length -1
let bnnW = document.querySelector('body>section').offsetWidth;


window.addEventListener('resize',()=>{
  bnnW = document.querySelector('body>section').offsetWidth;
});

next.addEventListener('click', e=>{
  e.preventDefault();
  bnnNum++
  if(bnnNum>lastNum) bnnNum = 0;
  bannerFrame.style.left = `${bnnNum * -bnnW}px`
  secWhite(bnnNum);
})

// Prev 버튼 클릭 시
prev.addEventListener('click', e=>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum < 0) bnnNum = lastNum;
  bannerFrame.style.left = `${bnnNum * -bnnW}px`
  secWhite(bnnNum);
})

//오토배너 작동 - setTimeout 사용 , 재귀함수 사용,5초마다
function autoBanner(){
  // e.preventDefault();
  bnnNum++
  if(bnnNum>lastNum) bnnNum = 0;
  bannerFrame.style.left = `${bnnNum * -bnnW}px`
  secWhite(bnnNum);
  autoBnn = setTimeout(autoBanner,5000);//재귀함수
}
let autoBnn = setTimeout(autoBanner,5000);//최초함수 불러오기


//재생/멈춤 버튼
const playBtn = document.querySelector(".play");
flag = 0;
playBtn.addEventListener("click", e=>{
  e.preventDefault();
  if(flag == 0){
    playBtn.classList.add("pause");
    clearTimeout(autoBnn);
    flag = 1;
  }else {
    playBtn.classList.remove("pause");
    autoBnn = setTimeout(autoBanner, 5000);
    flag = 0;
  }
})

// 롤링 클릭
const rollingBtn = document.querySelectorAll('.rolling>ul>li>a')
const arrowA = document.querySelectorAll('.arrow>a')

for(let i= 0; i<rollingBtn.length; i++){
  rollingBtn[i].addEventListener('click' ,e=>{
    bannerFrame.style.left = `${i * -bnnW}px`
    clearTimeout(autoBnn);
    autoBnn = setTimeout(autoBanner, 5000);
    activ(i,rollingBtn);
});
}


// section에 .white가 있으면 각요소에 .white붙이기

let secWhite = (bannerNumber) =>{
  if(sections[bannerNumber].classList.contains('white')){
    arrowA.forEach(item =>{
      item.classList.add('white')
    })
    rollingBtn.forEach(item =>{
      item.classList.add('white')
    })
  }else{
    arrowA.forEach(item =>{
      item.classList.remove('white')
    })
    rollingBtn.forEach(item =>{
      item.classList.remove('white')
    })
  }

  rollingBtn.forEach(item =>{
    item.classList.remove('on');
  });
  rollingBtn[bannerNumber].classList.add('on');
};


function activ(index, list){
  for(let el of list){
    el.classList.remove('on','active')
  }
  list[index].classList.add('on','active')
}



// 스크롤 이벤트
window.addEventListener('scroll' , ()=>{
  let scroll = document.querySelector('html').scrollTop;
  console.log(scroll);
  const doughNut_Left_L = document.querySelector(".doughnut_Left_L")
  const doughNut_Left_s = document.querySelector(".doughnut_Left_s")
  const combine_Left = document.querySelector(".combine_Left")
  const doughNut_Center_L = document.querySelector(".doughnut_Center_L")
  const doughNut_Center_s =document.querySelector(".doughnut_Center_s")
  const doughnut_right = document.querySelector('.doughnut_right')
  const doughNut_right_M = document.querySelector('.doughnut_right_M')


  combine_Left.style.top = `${scroll*0.9}px`
  doughNut_Left_s.style.top = `${scroll*0.5}px`
  doughNut_Left_L.style.top = `${1310 - scroll*0.7}px`

  doughNut_Center_L.style.top = `${scroll*0.3}px`
  doughNut_Center_s.style.top = `${1300 - scroll*0.5}px`
  doughnut_right.style.top= `${scroll*0.8}px`
  
  if(1373<=scroll){
    doughNut_right_M.style.top = `${scroll*0.8}px`
  }
});


const all = document.querySelectorAll('.content3_inner>div>ul>li');

console.log(all);


all.forEach(item=>{
    item.addEventListener('mouseover' , e=>{
    e.currentTarget.classList.add('on');
  });

    item.addEventListener('mouseleave' ,e=>{
      e.currentTarget.classList.remove('on');
    })
});


// 대분류
// - 각 클래스 이름에 해당되는 li만 따로 모아서 저장해놓고
// - 모든 li 화면 안보이게 하고
//li a 하나하나를 클릭했을때
// class 속성을 가져와서 바꿔줌
// 변수값이랑 정확하게 일치하는 케이스 찾아서 
// 해당 클래스이름에 해당되는 li만 보이게 설정한다. 

const tag = document.querySelectorAll('.content3_inner>ul>li>a')
const ent = document.querySelectorAll('.content3_inner>div>ul>li.ent')
const shop = document.querySelectorAll('.content3_inner>div>ul>li.shop')
const diner = document.querySelectorAll('.content3_inner>div>ul>li.diner')
const box = document.querySelectorAll('.content3_inner>div>ul>li.box')


  tag.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      for(i of all){
        i.style.display = `none`;
      }
      let className = e.target.getAttribute('class');
      switch (className) {
        case 'all':
          show(all);
          break;
        case 'ent':
          show(ent);
          break;
        case 'shop':
          show(shop);
          break;
        case 'diner':
          show(diner);
          break;
        case 'box':
          show(box);
        default:
      }
    });
  });

function show(item) {
  item.forEach(e => {
    e.style.display = 'block';
  });
}

// 패밀리사이트 

const familySite = document.querySelector('.family_site')

familySite.addEventListener('click' ,e=>{
  e.preventDefault();
  e.currentTarget.classList.toggle('on');
  if(e.currentTarget.classList.contains('on')){
    e.currentTarget.children[0].setAttribute("title", "열기")
  }else{
    e.currentTarget.children[0].setAttribute("title", "닫음")
  }
})



// top

const topBtn = document.querySelector('.top')


topBtn.addEventListener('click', e => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
})


// 스크롤 위치에 따라 top버튼이 사라졌다 나왔다 위치고정까지

window.addEventListener('scroll',()=>{
  let scroll = document.querySelector('html').scrollTop;
  console.log(scroll);

  if(scroll<=100){
    topBtn.classList.remove('on','ab');
  }else if(scroll > 2400){
    topBtn.classList.add('ab');
    topBtn.classList.add('on');
  }else{
    topBtn.classList.remove('ab');
    topBtn.classList.add('on');
  }
})


// 햄버거 버튼 누르면 close버튼이랑 사이드메뉴나오게 배경 검은색으로 바뀌고

const body = document.querySelector('body')
const bg = document.querySelector('div.bg')
const mob = document.querySelector('div.mob')
const mobCloseBtn = document.querySelector('div.mobBtn_close')
const mobBtn = document.querySelector('div.mobBtn')


mobBtn.addEventListener('click' , e=>{
  e.preventDefault();
  body.classList.add('on')
  bg.classList.add('on')
  mobCloseBtn.classList.add('on')
  mob.classList.add('on')
})

mobCloseBtn.addEventListener('click' , e=>{
  e.preventDefault();
  body.classList.remove('on')
  bg.classList.remove('on')
  mobCloseBtn.classList.remove('on')
  mob.classList.remove('on')
})


// 고객센터

const service=document.querySelector('.service_center')
service.addEventListener('click', e=>{
  service.classList.toggle('on');
})

// mob_gnb
const mob_gnb_Li = document.querySelectorAll('.mob_gnb>ul>li')
console.log(mob_gnb_Li);

for (let i = 0; i < mob_gnb_Li.length; i++) {
  mob_gnb_Li[i].addEventListener('click', e => {
    for (let j = 0; j < mob_gnb_Li.length; j++) {
      if (i !== j && mob_gnb_Li[j].classList.contains('on')) {
        mob_gnb_Li[j].classList.remove('on');
      }
    }
    if (mob_gnb_Li[i].classList.contains('on')) {
      mob_gnb_Li[i].classList.remove('on');
    } else {
      mob_gnb_Li[i].classList.add('on');
    }
  });
};

});