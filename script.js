/*/Function for player 1/*/
function rollTheDice(){
    var face1=["dice1.png"];    
      let random1="1";       
      output1.innerHTML=[random1];   

      var face2=["dice2.png"];   
        let random2="2";      
        output1.innerHTML=[random2]; 

        var face3=["dice3.png"];   
          let random3="3";      
          output1.innerHTML=[random3]; 

          var face4=["dice4.png"];   
          let random4="4";      
          output1.innerHTML=[random4];

          var face5=["dice5.png"];   
          let random5="5";      
          output1.innerHTML=[random5];

          var face6=["dice6.png"];   
          let random6="6";      
          output1.innerHTML=[random6];
          
          var function1=[face1,face2,face3,face4,face5,face6]
          var num1=[random1,random2,random3,random4,random5,random6];
          var result1=Math.floor(Math.random()*function1.length);

          output1.textContent=num1[result1];
          const a=num1[result1];                               
          dice1.src=function1[result1]; 
      

        var function2=[face1,face2,face3,face4,face5,face6]
          var num2=[random1,random2,random3,random4,random5,random6];
          var result2=Math.floor(Math.random()*function2.length);

          output2.textContent=num2[result2];
          const b=num2[result2];                               
          dice2.src=function2[result2]; 

         /*/Conditions/*/
            
          if (a>b) {
            document.getElementById("winner").innerHTML=`🎖️𝒑𝒍𝒂𝒚𝒆𝒓𝟏 𝒘𝒊𝒏🏆`;
          } 
          else if (a<b) {
            document.getElementById("winner").innerHTML=`🎖️𝒑𝒍𝒂𝒚𝒆𝒓𝟐 𝒘𝒊𝒏🏆`;
          } 
          else{
            document.getElementById("winner").innerHTML=`𝑴𝒂𝒕𝒄𝒉 𝒅𝒓𝒂𝒘`;
          } 
        };