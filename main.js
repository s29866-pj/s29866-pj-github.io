function timer(){
    var date = new Date();
    
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    minute = (minute<10)? '0'+minute : minute;
    hour = (hour<10)? '0'+hour : hour;
    second = (second<10)? '0'+second : second;
    
    let time = hour +' : '+ minute + ' : ' + second;
    
    document.getElementById('timer').innerHTML = time;
    }
    
    setInterval(timer, 1000)
    

    function swapStyleSheet(sheet) {
        document.getElementById("pageStyle").setAttribute("href", sheet);  
    }
    
    function initate() {
        let style1 = document.getElementById("lightDark");
        
        style1.onclick = function () {
            let pageStyle = document.getElementById("pageStyle").getAttribute("href");
            
            if (pageStyle === "style2.css") {
                swapStyleSheet("style1.css");
            } else {
                swapStyleSheet("style2.css");
            }
        };
    }
    
    window.onload = initate;
    
    
    