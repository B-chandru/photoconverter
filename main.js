  // assigning values 
  var file=document.getElementById("file")
  var img=document.getElementById("image");
  var reader=new FileReader();
  var input=document.getElementById("text")
  var ft=document.getElementsByName("filetype");;
  
  // making the uploaded image to diplay  on the screen
  file.addEventListener("change",(event)=>{
     
      reader.onload=()=>{
        img.src=reader.result;       
   };
    reader.readAsDataURL(event.target.files[0])
  });
  
  //use to download the uploaded image with our changes
  
  function save(){
      var fileformate
      for (let i= 0; i < ft.length; i++) {
      if (ft[i].checked) {
          fileformate=ft[i].value;
          
      }
  }
      const a=document.createElement("a");
          document.body.append(a);
          a.download=`${input.value}.${fileformate}`;
          a.href=reader.result
          a.click();
          a.remove();
         
         
  }