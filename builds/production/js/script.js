!function t(e,r,o){function a(i,s){if(!r[i]){if(!e[i]){var l="function"==typeof require&&require;if(!s&&l)return l(i,!0);if(c)return c(i,!0);throw new Error("Cannot find module '"+i+"'")}var n=r[i]={exports:{}};e[i][0].call(n.exports,function(t){var r=e[i][1][t];return a(r||t)},n,n.exports,t,e,r,o)}return r[i].exports}for(var c="function"==typeof require&&require,i=0;i<o.length;i++)a(o[i]);return a}({1:[function(t,e,r){function o(t){this.dd=t,this.placeholder=this.dd.children("span"),this.opts=this.dd.find("ul.dropdown > li"),this.val="",this.index=-1,this.initEvents()}d3.csv("./data/scores.csv",function(t){return{id:t.SchoolID,district:t.districtname_new,school:t.SCHOOLNAME_NEW,type:t.Grades,metro:t.Metro7county,region:t.Location,location:t.SchoolLocationCountyName,county:t.SchoolLocationCountyName,year:String(t.dataYear),subject:t.subject,profpct:+t.PctProf,freelunch:+t.FreeLunch,povertypct:+t.PctPoverty,povertycat:t.PovertyCategory,minoritypct:+t.PctMinority,overallcat:t.Overall,predicted:+t.Predicted,residual:+t.Residual,category:t.CategoryName,enrollment:t.K12Enr}},function(t,e){function r(t,e){var r=0,o=0,a=0,c=0;if(1==e)for(var i=0;i<y.length;i++)"M"==y[i].subject&&"15 to 16"==y[i].year&&(r++,"Medium"==y[i].povertycat&&a++,"High"==y[i].povertycat&&o++,"Low"==y[i].povertycat&&c++);else for(var i=0;i<y.length;i++)y[i].district==t&&"M"==y[i].subject&&"15 to 16"==y[i].year&&(r++,"Medium"==y[i].povertycat&&a++,"High"==y[i].povertycat&&o++,"Low"==y[i].povertycat&&c++);$("#failP").html(d3.format("%")(o/r)),$("#metP").html(d3.format("%")(a/r)),$("#betterP").html(d3.format("%")(c/r))}function o(t,e){var r=0,o=0,a=0,c=0;if(1==e)for(var i=0;i<y.length;i++)"M"==y[i].subject&&"15 to 16"==y[i].year&&(r++,"As expected"==y[i].overallcat&&a++,"Falling short"==y[i].overallcat&&o++,"Beating the odds"==y[i].overallcat&&c++);else for(var i=0;i<y.length;i++)y[i].district==t&&"M"==y[i].subject&&"15 to 16"==y[i].year&&(r++,"As expected"==y[i].overallcat&&a++,"Falling short"==y[i].overallcat&&o++,"Beating the odds"==y[i].overallcat&&c++);$("#failO").html(d3.format("%")(o/r)),$("#metO").html(d3.format("%")(a/r)),$("#betterO").html(d3.format("%")(c/r))}function a(t,e){var r=0,o=0,a=0,c=0;if(1==e)for(var i=0;i<y.length;i++)"M"==y[i].subject&&"15 to 16"==y[i].year&&(r++,"About as expected"==y[i].category&&a++,"Falling short"==y[i].category&&o++,"Better than expected"==y[i].category&&c++);else for(var i=0;i<y.length;i++)y[i].district==t&&"M"==y[i].subject&&"15 to 16"==y[i].year&&(r++,"About as expected"==y[i].category&&a++,"Falling short"==y[i].category&&o++,"Better than expected"==y[i].category&&c++);$("#failM").html(d3.format("%")(o/r)),$("#metM").html(d3.format("%")(a/r)),$("#betterM").html(d3.format("%")(c/r))}function c(t,e){var r=0,o=0,a=0,c=0;if(1==e)for(var i=0;i<y.length;i++)"R"==y[i].subject&&"15 to 16"==y[i].year&&(r++,"About as expected"==y[i].category&&a++,"Falling short"==y[i].category&&o++,"Better than expected"==y[i].category&&c++);else for(var i=0;i<y.length;i++)y[i].district==t&&"R"==y[i].subject&&"15 to 16"==y[i].year&&(r++,"About as expected"==y[i].category&&a++,"Falling short"==y[i].category&&o++,"Better than expected"==y[i].category&&c++);$("#failR").html(d3.format("%")(o/r)),$("#metR").html(d3.format("%")(a/r)),$("#betterR").html(d3.format("%")(c/r))}function i(t,e){var r=[];r[0]="x";var o=1,a=[],c=[];a[0]="Reading",c[0]="Math",dataRP=0,dataMP=0;for(var i=!1,s=0;s<y.length;s++)t==y[s].school&&e==y[s].district&&(i=!0,"R"==y[s].subject&&(a[o]=y[s].profpct,r[o]=y[s].year,o++,dataRP=y[s].predicted));o=1;for(var s=0;s<y.length;s++)t==y[s].school&&e==y[s].district&&(i=!0,"M"==y[s].subject&&(c[o]=y[s].profpct,r[o]=y[s].year,o++,dataMP=y[s].predicted));if(1==i){var l={top:20,right:60,bottom:20,left:70};c3.generate({bindto:"#chart",padding:l,data:{x:"x",columns:[r,a,c],type:"line"},legend:{show:!1},color:{pattern:["#51373E","#E3B5A4"]},axis:{y:{max:1,min:0,padding:{bottom:0,top:0},tick:{count:4,format:d3.format("%"),values:[0,.33,.66,1]}},x:{type:"category",categories:["'00 to '01","'01 to '02","'02 to '03","'03 to '04","'04 to '05","'05 to '06","'06 to '07","'07 to '08","'08 to '09","'09 to '10","'10 to '11","'11 to '12","'12 to '13","'13 to '14","'14 to '15","'15 to '16"],tick:{count:4,rotate:-75,multiline:!1},height:30}},grid:{y:{lines:[]}}});d3.select("#chart svg").append("text").attr("x",200).attr("y",30).style("text-anchor","right").text("Proficiency change over time")}}var s,l,n,d,h,y=e,m="",g="All";d3.select("#schoolsList").selectAll(".switch").data(y.filter(function(t){return"15 to 16"==t.year&&"R"==t.subject})).enter().append("div").attr("class",function(t){return"switch"}).attr("categoryr",function(t){return"About as expected"==t.category?"expected":"Better than expected"==t.category?"better":"Falling short"==t.category&&"worse",t.category}).attr("categoryo",function(t){var e;return"About as expected"==t.categoryO?e="expected":"Better than expected"==t.categoryO?e="better":"Falling short"==t.categoryO&&(e="worse"),e}).attr("categoryp",function(t){var e;return"High"==t.povertycat?e="High":"Medium"==t.povertycat?e="Medium":"Low"==t.povertycat&&(e="Low"),e}).attr("categorym",function(t){for(var e,r=0;r<y.length;r++)y[r].school==t.school&&y[r].district==t.district&&"M"==y[r].subject&&"15 to 16"==y[r].year&&(e=y[r].category);return e}).attr("district",function(t){return t.district}).attr("id",function(t){return"s"+t.id}).attr("latitude",function(t){return t.latitude}).attr("longitude",function(t){return t.longitude}).on("click",function(t){$("#minority").removeClass("gray5"),$("#minority").removeClass("gray4"),$("#minority").removeClass("gray3"),$("#minority").removeClass("gray2"),$("#minority").removeClass("gray1"),$("#poverty,#freelunch").removeClass("gray5"),$("#poverty,#freelunch").removeClass("gray4"),$("#poverty,#freelunch").removeClass("gray3"),$("#poverty,#freelunch").removeClass("gray2"),$("#poverty,#freelunch").removeClass("gray1"),$("#categoryR,#categoryM").removeClass("better"),$("#categoryR,#categoryM").removeClass("worse"),$("#categoryR,#categoryM").removeClass("expected"),$("#categoryR,#categoryM").removeClass("nan"),i(t.school,t.district);for(var e=0;e<y.length;e++)y[e].school==t.school&&y[e].district==t.district&&"M"==y[e].subject&&"15 to 16"==y[e].year&&($("#categoryM").html(y[e].category),$("#categoryR").html(t.category),$("#mPCT").html(d3.format("%")(y[e].profpct)+" proficiency"),$("#rPCT").html(d3.format("%")(t.profpct)+" proficiency"),$("#mPCTP").html(d3.format("%")(y[e].predicted)+" predicted"),$("#rPCTP").html(d3.format("%")(t.predicted)+" predicted"),"About as expected"==y[e].category&&(h="expected"),"Falling short"==y[e].category&&(h="worse"),"Better than expected"==y[e].category&&(h="better"),"Not enough students tested"==y[e].category&&(h="nan"));var r=t.freelunch/t.enrollment;r>=.7?n="gray5":r>=.5?n="gray4":r>=.4?n="gray3":r>=.2?n="gray2":r>=0&&(n="gray1"),t.minoritypct>=.7?l="gray5":t.minoritypct>=.5?l="gray4":t.minoritypct>=.4?l="gray3":t.minoritypct>=.2?l="gray2":t.minoritypct>=0&&(l="gray1"),t.povertypct>=.7?s="gray5":t.povertypct>=.5?s="gray4":t.povertypct>=.4?s="gray3":t.povertypct>=.2?s="gray2":t.povertypct>=0&&(s="gray1"),"About as expected"==t.category&&(d="expected"),"Falling short"==t.category&&(d="worse"),"Better than expected"==t.category&&(d="better"),"Not enough students tested"==t.category&&(d="nan"),$("#schoolname").html(t.school),$("#district").html(t.district),$("#enrolled").html(d3.format(",")(t.enrollment)),$("#type").html(t.type),$("#location").html(" ("+t.location+")"),$("#category").html(t.category),$("#freelunch").html(d3.format("%")(r)),$("#poverty").html(d3.format("%")(t.povertypct)),$("#minority").html(d3.format("%")(t.minoritypct)),$("#freelunch").addClass(n),$("#minority").addClass(l),$("#poverty").addClass(s),$("#categoryR").addClass(d),$("#categoryM").addClass(h)}).html(function(t){return m!=t.district&&(m=t.district,$("#listedSchools").append("<li class='district'>"+m+"</li>")),t.school}),$("#districtSelect").click(function(){$("#listedSchools").slideToggle()}),$("li.district").click(function(){$("li.district").removeClass("selected"),$(".cell").removeClass("selected2"),$(this).addClass("selected"),$("#listedSchools").slideToggle(),$("#thisDistrict").html($(this).text()),$(".switch").hide(),$(".switch[district='"+$(this).text()+"']").show(),r($(this).text(),!1),a($(this).text(),!1),c($(this).text(),!1),o($(this).text(),!1),g=$(this).text()}),$(".cell").click(function(){$(".cell").removeClass("selected2"),$(this).addClass("selected2"),$(".switch").hide(),"All"==g?"R"==$(this).attr("type")?$(".switch[categoryr='"+$(this).attr("data")+"']").show():"M"==$(this).attr("type")?$(".switch[categorym='"+$(this).attr("data")+"']").show():"O"==$(this).attr("type")?$(".switch[categoryo='"+$(this).attr("data")+"']").show():"P"==$(this).attr("type")&&$(".switch[categoryp='"+$(this).attr("data")+"']").show():"R"==$(this).attr("type")?$(".switch[categoryr='"+$(this).attr("data")+"'][district='"+g+"']").show():"M"==$(this).attr("type")?$(".switch[categorym='"+$(this).attr("data")+"'][district='"+g+"']").show():"O"==$(this).attr("type")?$(".switch[categoryo='"+$(this).attr("data")+"'][district='"+g+"']").show():"P"==$(this).attr("type")&&$(".switch[categoryp='"+$(this).attr("data")+"'][district='"+g+"']").show()}),$("#filter_box").on("keyup search",function(t){$(".switch").hide();var e=$("#filter_box").val();$(".switch").each(function(){-1!=$(this).text().toUpperCase().indexOf(e.toUpperCase())&&$(this).show()})}),$("#filter2 input").on("keyup search",function(t){$(".district").hide();var e=$("#filter2 input").val();$(".district").each(function(){-1!=$(this).text().toUpperCase().indexOf(e.toUpperCase())&&$(this).show()})}),$(".switch").click(function(){$(".switch").removeClass("selected"),$(this).addClass("selected"),$("#instructions").hide(),$("#infobox,#chart,#chartLabel").show()}),$("#infobox,#chart,#chartLabel").hide(),$("#instructions").show(),$("#schoolname").html(y[4].school),$("#district").html(y[4].district),$("#enrolled").html(y[4].enrollment),$("#freelunch").html(d3.format("%")(y[4].freelunch/y[4].enrollment)),$("#type").html(y[4].type),$("#location").html(" ("+y[4].location+")"),$("#categoryR").html(y[4].category),$("#categoryM").html(y[5].category),$("#poverty").html(d3.format("%")(y[4].povertypct)),$("#povertycat").html(y[4].povertycat),$("#minority").html(d3.format("%")(y[4].minoritypct)),$("#minority").addClass("gray1"),$("#poverty").addClass("gray3"),$("#freelunch").addClass("gray3"),$("#categoryR,#categoryM").addClass("better"),$("#mPCT").html(d3.format("%")(y[4].profpct)+" proficiency"),$("#rPCT").html(d3.format("%")(y[5].profpct)+" proficiency"),$("#mPCTP").html(d3.format("%")(y[4].predicted)+" predicted"),$("#rPCTP").html(d3.format("%")(y[5].predicted)+" predicted"),r("",!0),a("",!0),c("",!0),o("",!0),$(".zoom, #filter, #filter2").on("click keyup search",function(){return g="All",$("#infobox,#chart,#chartLabel").hide(),$("#instructions").show(),$(".switch, li.district").removeClass("selected"),$(".switch").show(),$("li.district").show(),$("#listedSchools").hide(),$("#thisDistrict").html("All"),$("#schoolsList").animate({scrollTop:0},800),$("#listedSchools").animate({scrollTop:0},800),$("#filter input, #filter2 input").val(""),$("#enrolled").html(y[4].enrollment),$("#minority").removeClass("gray5"),$("#minority").removeClass("gray4"),$("#minority").removeClass("gray3"),$("#minority").removeClass("gray2"),$("#minority").removeClass("gray1"),$("#poverty,#freelunch").removeClass("gray5"),$("#poverty,#freelunch").removeClass("gray4"),$("#poverty,#freelunch").removeClass("gray3"),$("#poverty,#freelunch").removeClass("gray2"),$("#poverty,#freelunch").removeClass("gray1"),$("#categoryR,#categoryM").removeClass("better"),$("#categoryR,#categoryM").removeClass("worse"),$("#categoryR,#categoryM").removeClass("expected"),$("#categoryR,#categoryM").removeClass("nan"),$("#mPCT").html("75% math proficiency"),$("#rPCT").html("65% reading proficiency"),$("#mPCTP").html("57% predicted"),$("#rPCTP").html("54% predicted"),$("#categoryR").html(y[4].category),$("#categoryM").html(y[5].category),$("#schoolname").html(y[4].school),$("#district").html(y[4].district),$("#type").html(y[4].type),$("#location").html(" ("+y[0].location+")"),$("#category").html(y[4].category),$("#poverty").html(d3.format("%")(y[4].povertypct)),$("#povertycat").html(y[4].povertycat),$("#minority").html(d3.format("%")(y[4].minoritypct)),$("#minority").addClass("gray1"),$("#freelunch").addClass("gray3"),$("#poverty").addClass("gray3"),r("",!0),a("",!0),c("",!0),o("",!0),$("#categoryR,#categoryM").addClass("better"),$(".cell").removeClass("selected2"),i("A.C.G.C. SECONDARY"),!1}),i("A.C.G.C. SECONDARY"),$(".switch").first().addClass("selected")}),o.prototype={initEvents:function(){var t=this;t.dd.on("click",function(t){return $(this).toggleClass("active"),!1}),t.opts.on("click",function(){var e=$(this);t.val=e.text(),t.index=e.index(),t.placeholder.text(t.val)})},getValue:function(){return this.val},getIndex:function(){return this.index}},$(function(){new o($("#dd")),new o($("#ddY"));$(document).click(function(){$(".wrapper-dropdown-1").removeClass("active")})})},{}]},{},[1]);