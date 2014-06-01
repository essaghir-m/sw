$(function(){
    
    $("#leftzone > ul > li:first div").css({height:"200px"});
    
    $(".prod").mouseover(function(){
        

        $(this).find("img").css({top:"-195px"});
        $(this).find(".divopa").css({height:"195px","background-color":"#fff"})
        $(this).find(".prodinfo").stop().animate({"background-color":"#D73131"},1000);
        $(this).find(".prodbrand,.prodname, .pricerow").stop().animate({color:"#fff"},1000);
        
        $(this).find(".divopa").stop().animate({"background-color":"#666"},1000);
    });
    $(".prod").mouseout(function(){
       
        $(this).find("img").stop().css({top:"0px"});
        $(this).find(".divopa").stop().animate({height:"0px"},200);
        $(this).find(".prodinfo").stop().animate({"background-color":"#fff"},200);
        $(this).find(".prodbrand,.prodname, .pricerow").stop().animate({color:"#666"},200);
    });
    
    $("#leftzone > ul > li").click(function(){
        var h_d = $(this).find("div").height();
        
        if(h_d==0){
            $(this).parent().find("div").animate({height:"0px"},200);
           
            var lnght = $(this).find("li").length;
            if(lnght<=5){
                $(this).find("div").animate({height:lnght*25},500);
            }else{
                $(this).find("div").animate({height:"200px"},500);
            }
            
        }else if(h_d>0){
            $(this).find("div").animate({height:"0px"},500);
            $(this).parent().find("div:first").animate({height:"200px"},500);
        }
        return false;
    });
    
    $("#inprch").click(function(){
        $("#inprch").animate({width:"240px"},500)
    });
    $("#inprch").focusout(function(){
        if($(this).val() == ""){
            $("#inprch").animate({width:"30px"},500)
        }
        
    });
    
})
// end JQuery.
