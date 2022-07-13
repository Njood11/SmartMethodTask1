



 click_to_convert.addEventListener("click", function() {
   var speech=true;

 const recognition= new SpeechRecognition();
 if(speech ==true){recognition.start();}
 recognition.interimResults=true;

 recognition.addEventListener("result", e=> {
 const transcript=Array.from(e.results).map(result=> result.transcript).join('')

     convert_text.innerHTML= transcript;
})

})
 