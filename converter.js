
let dollar=document.getElementById("dollar");
let euro=document.getElementById("euro");
let naira=document.getElementById("naira");
let cad=document.getElementById("cad");
let inr=document.getElementById("inr");
let bitcoin=document.getElementById("bitcoin");
let gold=document.getElementById("gold");
let silver=document.getElementById("silver");

dollar.addEventListener('input' , function(){conv(this.id,this.value);});
euro.addEventListener('input', function(){conv(this.id,this.value);});
naira.addEventListener('input', function(){conv(this.id,this.value);});
cad.addEventListener('input',function(){conv(this.id,this.value);});
inr.addEventListener('input',function(){conv(this.id,this.value);});
bitcoin.addEventListener('input',function(){conv(this.id,this.value);});
gold.addEventListener('input' ,function(){conv(this.id,this.value);});
silver.addEventListener('input',function(){conv(this.id,this.value);});

function conv(id,value){
    if(id=="dollar"){
        euro.value=value*0.82;
        naira.value=value*382.5;
        cad.value=value*1.26;
        inr.value=value*73.08;
        bitcoin.value=value*0.000026;
        gold.value=value*.00054;
        silver.value=value*0.039;
    }else if(id=="euro"){
        dollar.value=value*1.22;
        naira.value=value*464.93;
        cad.value=value*1.54;
        inr.value=value*88.83;
        bitcoin.value=value*0.000031;
        gold.value=value*0.00066;
        silver.value=value*0.048;
    }else if(id=="naira"){
        dollar.value=value*0.0026;
        euro.value=value*0.0022;
        cad.value=value*0.0033;
        inr.value=value*0.19;
        bitcoin.value=value*0.0000000067;
        gold.value=value*0.0000014;
        silver.value=value*0.0001
    }else if(id=="cad"){
        dollar.value=value*0.79;
        euro.value=value*.65;
        naira.value=value*302.48;
        inr.value=value*57.79;
        bitcoin.value=value*.00002;
        gold.value=value*.00043;
        silver.value=value*.031;
    }else if(id=="inr"){
        dollar.value=value*.014;
        euro.value=value*.011;
        naira.value=value*5.23;
        cad.value=value*.017;
        bitcoin.value=value*.000000035;
        gold.value=value*.0000074;
        silver.value=value*.00053;
    }else if(id=="bitcoin"){
        dollar.value=value*39021.047;
        euro.value=value*32103.14;
        naira.value=value*14925671.02;
        cad.value=value*49343.81;
        inr.value=value*2851657.81;
        gold.value=value*21.12;
        silver.value=value*1525.028;
    }else if(id=="gold"){
        dollar.value=value*1847.25;
        euro.value=value*1519.76;
        naira.value=value*706575.99;
        cad.value=value*2335.95;
        inr.value=value*134996.96;
        bitcoin.value=value*0.047;
        silver.value=value*72.19;
    }else if(id=="silver"){
        dollar.value=value*25.59;
        euro.value=value*21.051;
        naira.value=value*9787.11;
        cad.value=value*32.36;
        inr.value=value*1869.91;
        bitcoin.value=value*0.00066;
        gold.value=value*0.014;
        
    }
    
}