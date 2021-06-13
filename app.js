let ul =document.querySelector('ul');
let inp=document.querySelector('input');
// let rem=document.createElement('button');
// rem.onclick =fn();
// rmbtn.onclick=removefromlist(ul,li);
let i=0;
function addtolist(){
    task=inp.value;
    let remove = document.createElement('button');
    let mark =document.createElement('button');
    mark.onclick=e=>underline(mark);
    mark.setAttribute("class","check");
    mark.innerHTML="check"
    remove.setAttribute("class","removebtn");
    remove.innerHTML="remove";
    remove.onclick=e=>removertask(remove,ul);
    let li=document.createElement('li'); 
    li.setAttribute("id",`${i}`);
    i++;
    li.append(mark,task,remove);
    ul.appendChild(li); 
    };
function removertask(btn,Uls){
  pele = btn.parentElement;
  Uls.removeChild(pele);
}
function underline(mbtn){
  set=mbtn.parentElement;
  console.log(set);
  set.setAttribute("class",'underline');
  console.log(set);
}
  

