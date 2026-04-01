let  add = document.getElementsByTagName('td');
let view = "";
for(let i =0 ;i<add.length;i++){
   add[i].addEventListener('click',()=>{
        let expr = document.getElementById('view').textContent += add[i].textContent;
        if(add[i].textContent==='='){
            view = expr.slice(0, -1);
             try {
                let expression = document.getElementById('view').textContent;
                if (/\/0(?!\d)/.test(expression)) {
                    throw new Error("Chia cho 0");
                }
                let  result = new Function('return ' + view)();
                document.getElementById('view').textContent = Number.isInteger(result) ? result : result.toFixed(4);
            } catch (error) {
               document.getElementById('view').textContent = "Lỗi";
            }
           
        }else if(add[i].textContent==='C'){
            document.getElementById('view').textContent='';
        }
    });
   
}

            