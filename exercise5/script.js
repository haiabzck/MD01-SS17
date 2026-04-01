let username= "huanrose@gmail.com";
let password= "123456";
let form = document.getElementById('myForm');
form.addEventListener('submit',(Event) => {
    
    let formData = new FormData(form); 
    console.log(formData.get('username'));
    console.log(formData.get('password'));
    let user = formData.get('username');
    let pass = formData.get('password');
    if(username === user && password===pass){
        alert(' Thông báo đăng nhập thành công ')
    }else{
      alert('Thông báo đăng nhập thất bại ')
    }
});
