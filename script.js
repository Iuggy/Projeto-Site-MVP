//var nomes=["Derrick Rose","Lebron James","Kevin Durant","Stephen Curry"," Russell Westbrook", "James Harden","Nikola Jokic","Giannis Antetokounmpo"]
var nomes ={ 2010: ["Derrick Rose"], 2011:["Lebron James"], 2012 :["Lebron James"], 2013:["Kevin Durant"], 2014:["Stephen curry"], 2015:["Stephen Cury"],
2016: ["Russel Westbrook"], 2017: ["James Harden"], 2018:["Giannis Antetokounmpo"], 2019: ["Giannis Antetokounmpo"], 2020:["Nikola Jokic"]
}
var wnba = {
    2010: ["Lauren Jackson"], 2011:["Tamika Catchings"], 2012 :["Tina Charles "], 2013:["Candace Parker"], 2014:["Maya Moore"], 2015:["Elena Delle Donne"],
    2016: ["Nneka Ogwumike"], 2017: ["Sylvia Fowles"], 2018:["Breanna Stewart "], 2019: ["Elena Delle Donne"], 2020:["A'ja Wilson"]
}


function verificar(){
   var ano = document.getElementById("txtano")
   var res=document.getElementById("res")
   var fsex= document.getElementsByName("ligarad")
   var img=document.getElementById("ii")
   if (fsex[0].checked ){      
if (ano.value == 2010){
    res.innerHTML = nomes[2010] 
    img.src="imagens/derrick.jpg"
}else if(ano.value == 2011 || ano.value == 2012) {
    res.innerHTML = nomes[2011]
    img.src="imagens/lebron.png"
}else if(ano.value == 2013){ 
    img.src="imagens/durant.png"
    res.innerHTML = nomes[2013]
}else if(ano.value == 2014 || ano.value ==2015 ) {
    res.innerHTML = nomes[2014]
    img.src="imagens/curry.png"
}else if(ano.value == 2016){
    res.innerHTML = nomes[2016]
    img.src="imagens/westbrook.png"
} else if(ano.value== 2017){
    res.innerHTML = nomes[2017]
    img.src="imagens/harden.png"
}
else if(ano.value == 2018 || ano.value== 2019 ){
    res.innerHTML = nomes[2018]
    img.src="imagens/giannis1.png"
}else if(ano.value == 2020){
    res.innerHTML = nomes[2020]
    img.src="imagens/jokic.png"
}

}if(fsex[1].checked){
    if(ano.value ==2010){
        res.innerHTML= wnba[2010]
        img.src="imagens/lauren.jpg"
    }
    else if(ano.value ==2011){
        res.innerHTML= wnba[2011]
        img.src="imagens/tamika.jpg"
    }else if(ano.value ==2012){
        res.innerHTML= wnba[2012]
        img.src="imagens/tina.png"
    }else if(ano.value ==2013){
        res.innerHTML= wnba[2013]
        img.src="imagens/candace.png"
    }else if(ano.value ==2014){
        res.innerHTML= wnba[2014]
        img.src="imagens/maya.jpg"
    }else if(ano.value ==2015){
        res.innerHTML= wnba[2015]
        img.src="imagens/elena.png"
    }else if(ano.value ==2016){
        res.innerHTML= wnba[2016]
        img.src="imagens/nneka.png"
    }else if(ano.value ==2017){
        res.innerHTML= wnba[2017]
        img.src="imagens/fowles.png"
    }else if(ano.value ==2018){
        res.innerHTML= wnba[2018]
        img.src="imagens/breanna.png"
    }else if(ano.value ==2019){
        res.innerHTML= wnba[2019]
        img.src="imagens/elena.png"
    }else if(ano.value ==2020){
        res.innerHTML= wnba[2020]
        img.src="imagens/aja.png"
    }

}

}

