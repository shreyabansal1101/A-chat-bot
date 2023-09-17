var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","How can I help you?"],
        options: ["Movies <span class='emoji'> &#128250;</span>","News","Shopping <span class='emoji'> &#128090;</span>","Music <span class='emoji'> &#127925;</span>"]
    },
    movies: {
        title:["Please select category"],
        options:['Bollywood','Hollywood','Web Series','Others'],
        url : {
            
        }
    },
    
    news: {
        title:["Today's Top 5 Headlines"],
        options:["The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA.","The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA.","The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA."],
        url : {
            more:"https://www.youtube.com/",
            link:["https://www.youtube.com/","https://www.youtube.com/","https://www.youtube.com/","https://www.youtube.com/"]
        }
    },
    shopping: {
        title:["Thanks for your response","Welcome to shopping zone <span class='emoji'> &#128090;</span>","Please select one of the below options to proceed further"],
        options:['Electronics','Beauty products','Mobiles','Men Fashion','Women fashion'],
        url : {
            more:"https://www.google.com/",
            link:["https://www.lg.com/in","https://www.nykaa.com/","https://www.google.com/","https://www.myntra.com/men-clothing","https://www.myntra.com/women"]
        }
    },
    electronics: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Televisions','Cameras','Gaming Consoles','Headphones','Speakers'],
        url : {
            more:"https://www.google.com/",
            link:["https://www.lg.com/in","https://www.lg.com/in","https://www.lg.com/in","https://www.lg.com/in","https://www.lg.com/in"]
        }
    },
    beauty: {
        title:["Thanks for your response","Here are some beauty products for you","Click on it to know more"],
        options:['Make-up & Nails','Skin Care','Fragrance','Hair care'],
        url : {
            more:"https://www.google.com/",
            link:["https://www.nykaa.com/","https://www.nykaa.com/","https://www.nykaa.com/","https://www.nykaa.com/"]
        }
    },
    mobiles: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Mobile Phones','Cases & Covers','Power Banks','Tablets'],
        url : {
            more:"https://www.google.com/",
            link:["https://www.google.com/","https://www.google.com/","https://www.google.com/","https://www.google.com/"]
        }
    },
    men: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Shirts','T-shirts','Innerwear','Jeans'],
        url : {
            more:"https://www.google.com/",
            link:["https://www.myntra.com/men-clothing","https://www.myntra.com/men-clothing","https://www.myntra.com/men-clothing","https://www.myntra.com/men-clothing","https://www.myntra.com/men-clothing"]
        }
    },
    women: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
        url : {
            more:"https://www.google.com/",
            link:["https://www.myntra.com/women","https://www.myntra.com/women","https://www.myntra.com/women","https://www.myntra.com/women"]
        }
    },
    music: {
        title:["These are some latest songs <span class='emoji'> &#127925;</span>"],
        options: ["song 1","song 2","song 3","song 4","song 5"],
        url : {
            more:"https://open.spotify.com/?",
            link:["https://open.spotify.com/track/4nc6XiUze2Yh7wFueGOPv7","https://open.spotify.com/track/6NJ8Z5GDoHe47R6gGX6sLq","https://open.spotify.com/track/2KEJ0tKc3K8f88JMLrc3vm","https://open.spotify.com/track/6VBhH7CyP56BXjp8VsDFPZ"]
        }
    },
    hollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/",
            link:["https://www.youtube.com/","https://www.youtube.com/","https://www.youtube.com/","https://www.youtube.com/","https://www.youtube.com/"]
        }
    },
    bollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/",
            link:["https://www.youtube.com/","https://www.youtube.com/","https://www.youtube.com/","https://www.youtube.com/","https://www.youtube.com/"]
        }
    },
    web: {
        title: ["Thanks for your response","Here are some genre based web series"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/",
            link:["https://www.netflix.com/in/","https://www.netflix.com/in/","https://www.netflix.com/in/","https://www.netflix.com/in/","https://www.netflix.com/in/"]
        }
    },
    others: {
        title: ["Here are some more options for you"],
        options: ["YouTube","Netflix","Amazon Prime","Hot Star"],
        url: {
            more:"https://www.youtube.com/",
            link:["https://www.youtube.com/","https://www.netflix.com/in/","https://www.primevideo.com/","https://www.hotstar.com/in/home?ref=%2Fin"]
        }
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}