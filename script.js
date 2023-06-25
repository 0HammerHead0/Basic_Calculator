function addLog(msg){
    var ul=document.getElementById("log")
    var li=document.createElement("li")
    var msg_text_node = document.createTextNode(msg)
    li.appendChild(msg_text_node)
    ul.appendChild(li)
}
function calculate(){
    expression=document.getElementById("expression").value;
    if(expression){
        try{
            answer=eval(expression);
            console.log(eval(expression));
            document.getElementById("expression").value=answer;
            addLog(expression +"="+ answer)
        }
        catch(e){
            console.log("exception occurred")
            addLog(expression + "is bad. please fix it")
        }
    }
}
function input_number(x){
    expression=document.getElementById("expression").value;
    expression=expression + x;
    document.getElementById("expression").value=expression    
}
function delete_number(){
    expression=document.getElementById("expression").value;
    expression=expression.substring(0,expression.length-1);
    document.getElementById("expression").value=expression;
}
function clearExpression() {
    document.getElementById("expression").value = "";
}

var btn=document.getElementById("btn1")
console.log(btn);
console.log(document.getElementsByClassName("btn").length);
for (var i = 0; i < 18; i++) {
    console.log("hello");
    // Add event listener for button click
    btn[i].addEventListener("click", function() {
      btn[i].classList.add("zoom-animation");
      console.log("helo");
    });
}

// $(".btn").click(function(event){
//     btn[i].classList.add("zoom-animation");
// });