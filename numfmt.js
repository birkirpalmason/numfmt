!function(e,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports.numfmt=a():e.numfmt=a()}("undefined"!=typeof self?self:this,(function(){return(()=>{"use strict";var e={d:(a,t)=>{for(var r in t)e.o(t,r)&&!e.o(a,r)&&Object.defineProperty(a,r,{enumerable:!0,get:t[r]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a)},a={};e.d(a,{default:()=>ae});const t={1078:"af",1052:"sq",1118:"am",5121:"ar_DZ",15361:"ar_BH",3073:"ar_EG",2049:"ar_IQ",11265:"ar_JO",13313:"ar_KW",12289:"ar_LB",4097:"ar_LY",6145:"ar_MA",8193:"ar_OM",16385:"ar_QA",1025:"ar_SA",10241:"ar_SY",7169:"ar_TN",14337:"ar_AE",9217:"ar_YE",1067:"hy",1101:"as",2092:"az_AZ",1068:"az_AZ",1069:"eu",1059:"be",2117:"bn",1093:"bn_IN",5146:"bs",1026:"bg",1109:"my",1027:"ca",2052:"zh_CN",3076:"zh_HK",5124:"zh_MO",4100:"zh_SG",1028:"zh_TW",1050:"hr",1029:"cs",1030:"da",1125:"dv",2067:"nl_BE",1043:"nl_NL",1126:"bin",3081:"en_AU",10249:"en_BZ",4105:"en_CA",9225:"en_CB",2057:"en_GB",16393:"en_IN",6153:"en_IE",8201:"en_JM",5129:"en_NZ",13321:"en_PH",7177:"en_ZA",11273:"en_TT",1033:"en_US",12297:"en_ZW",1061:"et",1071:"mk",1080:"fo",1065:"fa",1124:"fil",1035:"fi",2060:"fr_BE",11276:"fr_CM",3084:"fr_CA",9228:"fr_CG",12300:"fr_CI",1036:"fr_FR",5132:"fr_LU",13324:"fr_ML",6156:"fr_MC",14348:"fr_MA",10252:"fr_SN",4108:"fr_CH",7180:"fr",1122:"fy_NL",2108:"gd_IE",1084:"gd",1110:"gl",1079:"ka",3079:"de_AT",1031:"de_DE",5127:"de_LI",4103:"de_LU",2055:"de_CH",1032:"el",1140:"gn",1095:"gu",1279:"en",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig_NG",1057:"id",1040:"it_IT",2064:"it_CH",1041:"ja",1099:"kn",1120:"ks",1087:"kk",1107:"km",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1142:"la",1062:"lv",1063:"lt",2110:"ms_BN",1086:"ms_MY",1100:"ml",1082:"mt",1112:"mni",1153:"mi",1102:"mr",1104:"mn",2128:"mn",1121:"ne",1044:"no_NO",2068:"no_NO",1096:"or",1045:"pl",1046:"pt_BR",2070:"pt_PT",1094:"pa",1047:"rm",2072:"ro_MO",1048:"ro_RO",1049:"ru",2073:"ru_MO",1083:"se",1103:"sa",3098:"sr_SP",2074:"sr_SP",1072:"st",1074:"tn",1113:"sd",1115:"si",1051:"sk",1060:"sl",1143:"so",1070:"sb",11274:"es_AR",16394:"es_BO",13322:"es_CL",9226:"es_CO",5130:"es_CR",7178:"es_DO",12298:"es_EC",17418:"es_SV",4106:"es_GT",18442:"es_HN",2058:"es_MX",19466:"es_NI",6154:"es_PA",15370:"es_PY",10250:"es_PE",20490:"es_PR",1034:"es_ES",14346:"es_UY",8202:"es_VE",1089:"sw",2077:"sv_FI",1053:"sv_SE",1114:"syc",1064:"tg",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1073:"ts",1055:"tr",1090:"tk",1058:"uk",1056:"ur",2115:"uz_UZ",1091:"uz_UZ",1075:"ve",1066:"vi",1106:"cy",1076:"xh",1085:"yi",1077:"zu"};function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=/^([a-z\d]+)(?:[_-]([a-z\d]+))?(?:\.([a-z\d]+))?(?:@([a-z\d]+))?$/i,i={},o={group:" ",decimal:".",positive:"+",negative:"-",percent:"%",exponent:"E",nan:"NaN",infinity:"∞",ampm:["AM","PM"],mmmm6:["Muharram","Safar","Rabiʻ I","Rabiʻ II","Jumada I","Jumada II","Rajab","Shaʻban","Ramadan","Shawwal","Dhuʻl-Qiʻdah","Dhuʻl-Hijjah"],mmm6:["Muh.","Saf.","Rab. I","Rab. II","Jum. I","Jum. II","Raj.","Sha.","Ram.","Shaw.","Dhuʻl-Q.","Dhuʻl-H."],mmmm:["January","February","March","April","May","June","July","August","September","October","November","December"],mmm:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dddd:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ddd:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]};function s(e){var a=n.exec(e);if(!a)throw new SyntaxError("Malformed locale: ".concat(e));return{lang:a[1]+(a[2]?"_"+a[2]:""),language:a[1],territory:a[2]||"",codeset:a[3]||"",modifier:a[4]||""}}function m(e){if("number"==typeof e)return t[65535&e]||null;var a=parseInt(e,16);return isFinite(a)&&t[65535&a]?t[65535&a]||null:n.test(e)?e:null}function d(e){var a=m(e),t=null;if(a){var r=s(a);t=i[r.lang]||i[r.language]||null}return t}function u(e){return Object.assign({},o,e)}function l(e,a){var t="object"===r(a)?a:s(a);return i[t.lang]=u(e),t.language===t.lang||i[t.language]||(i[t.language]=u(e)),i[t.lang]}var p=u({group:","});function c(e,a){if("number"!=typeof e)return e;if(e<0)return-c(-e,a);if(a){var t=Math.pow(10,a||0)||1;return c(e*t,0)/t}return Math.round(e)}p.isDefault=!0,l({group:",",ampm:["上午","下午"],mmmm:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],mmm:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dddd:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],ddd:["周日","周一","周二","周三","周四","周五","周六"]},"zh_CN"),l({group:",",nan:"非數值",ampm:["上午","下午"],mmmm:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],mmm:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dddd:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],ddd:["週日","週一","週二","週三","週四","週五","週六"]},"zh_TW"),l({group:",",ampm:["午前","午後"],mmmm:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],mmm:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dddd:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],ddd:["日","月","火","水","木","金","土"]},"ja"),l({group:",",ampm:["오전","오후"],mmmm:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],mmm:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dddd:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],ddd:["일","월","화","수","목","금","토"]},"ko"),l({group:",",ampm:["ก่อนเที่ยง","หลังเที่ยง"],mmmm:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],mmm:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],dddd:["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"],ddd:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."]},"th"),l({decimal:",",ampm:["dop.","odp."],mmmm:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"],mmm:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],dddd:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],ddd:["ne","po","út","st","čt","pá","so"]},"cs"),l({group:".",decimal:",",mmmm:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],mmm:["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],dddd:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],ddd:["søn.","man.","tir.","ons.","tor.","fre.","lør."]},"da"),l({group:".",decimal:",",ampm:["a.m.","p.m."],mmmm:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],mmm:["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],dddd:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],ddd:["zo","ma","di","wo","do","vr","za"]},"nl"),l({group:","},"en"),l({decimal:",",nan:"epäluku",ampm:["ap.","ip."],mmmm:["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kesäkuuta","heinäkuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"],mmm:["tammik.","helmik.","maalisk.","huhtik.","toukok.","kesäk.","heinäk.","elok.","syysk.","lokak.","marrask.","jouluk."],dddd:["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"],ddd:["su","ma","ti","ke","to","pe","la"]},"fi"),l({group:" ",decimal:",",mmmm:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],mmm:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],dddd:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],ddd:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."]},"fr"),l({group:".",decimal:",",mmmm:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],mmm:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sept.","Okt.","Nov.","Dez."],dddd:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],ddd:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]},"de"),l({group:".",decimal:",",ampm:["π.μ.","μ.μ."],mmmm:["Ιανουαρίου","Φεβρουαρίου","Μαρτίου","Απριλίου","Μαΐου","Ιουνίου","Ιουλίου","Αυγούστου","Σεπτεμβρίου","Οκτωβρίου","Νοεμβρίου","Δεκεμβρίου"],mmm:["Ιαν","Φεβ","Μαρ","Απρ","Μαΐ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],dddd:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],ddd:["Κυρ","Δευ","Τρί","Τετ","Πέμ","Παρ","Σάβ"]},"el"),l({decimal:",",ampm:["de.","du."],mmmm:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],mmm:["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec."],dddd:["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"],ddd:["V","H","K","Sze","Cs","P","Szo"]},"hu"),l({group:".",decimal:",",ampm:["f.h.","e.h."],mmmm:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"],mmm:["jan.","feb.","mar.","apr.","maí","jún.","júl.","ágú.","sep.","okt.","nóv.","des."],dddd:["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"],ddd:["sun.","mán.","þri.","mið.","fim.","fös.","lau."]},"is"),l({group:".",decimal:",",mmmm:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],mmm:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],dddd:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],ddd:["Min","Sen","Sel","Rab","Kam","Jum","Sab"]},"id"),l({group:".",decimal:",",mmmm:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],mmm:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],dddd:["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],ddd:["dom","lun","mar","mer","gio","ven","sab"]},"it"),l({decimal:",",ampm:["a.m.","p.m."],mmmm:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],mmm:["jan.","feb.","mar.","apr.","mai","jun.","jul.","aug.","sep.","okt.","nov.","des."],dddd:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],ddd:["søn.","man.","tir.","ons.","tor.","fre.","lør."]},"nb"),l({decimal:",",mmmm:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"],mmm:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],dddd:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],ddd:["niedz.","pon.","wt.","śr.","czw.","pt.","sob."]},"pl"),l({group:".",decimal:",",mmmm:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],mmm:["jan.","fev.","mar.","abr.","mai.","jun.","jul.","ago.","set.","out.","nov.","dez."],dddd:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],ddd:["dom.","seg.","ter.","qua.","qui.","sex.","sáb."]},"pt"),l({decimal:",",nan:"не число",mmmm:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],mmm:["янв.","февр.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],dddd:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],ddd:["вс","пн","вт","ср","чт","пт","сб"]},"ru"),l({decimal:",",mmmm:["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"],mmm:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],dddd:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],ddd:["ne","po","ut","st","št","pi","so"]},"sk"),l({group:".",decimal:",",ampm:["a. m.","p. m."],mmmm:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],mmm:["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","sept.","oct.","nov.","dic."],dddd:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],ddd:["dom.","lun.","mar.","mié.","jue.","vie.","sáb."]},"es"),l({decimal:",",ampm:["fm","em"],mmmm:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],mmm:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],dddd:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],ddd:["sön","mån","tis","ons","tors","fre","lör"]},"sv"),l({group:".",decimal:",",ampm:["ÖÖ","ÖS"],mmmm:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],mmm:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],dddd:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],ddd:["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"]},"tr");function f(e,a,t){var r,n,i=e<0?-1:1,o=Math.pow(10,a||2),s=Math.pow(10,t||2),m=Math.abs(e),d=0,u=0,l=0,p=1;if((e=m)%1==0)n=[e*i,1];else if(e<1e-19)n=[i,1e19];else if(e>1e19)n=[1e19*i,1];else{do{if(m=1/(m-Math.floor(m)),r=p,p=p*Math.floor(m)+d,d=r,u=l,(l=Math.floor(e*p+.5))>=o||p>=s)return[i*u,d]}while(Math.abs(e-l/p)>=1e-10&&m!==Math.floor(m));n=[i*l,p]}return n}function g(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function h(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var v={overflow:"######",dateErrorThrows:!1,dateErrorNumber:!0,dateSpanLarge:!0,leap1900:!0,nbsp:!0,throws:!0,invalid:"######",locale:"",ignoreTimezone:!1},b=Object.assign({},v);function _(e){if(null===e&&(e=v),e)for(var a in e)if(a in v){var t=e[a];b[a]=null==t?v[a]:t}return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?g(Object(t),!0).forEach((function(a){h(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},b)}var y=Math.pow(2,2),j=Math.pow(2,3),M=Math.pow(2,4),k=Math.pow(2,5),z=Math.pow(2,6),w=Math.pow(2,7),x=Math.pow(2,8),F=Math.pow(2,9),S={"#":"",0:"0","?":" "},O={"@":"text","-":"minus","+":"plus"},C=["#000","#FFF","#F00","#0F0","#00F","#FF0","#F0F","#0FF","#000","#FFF","#F00","#0F0","#00F","#FF0","#F0F","#0FF","#800","#080","#008","#880","#808","#088","#CCC","#888","#99F","#936","#FFC","#CFF","#606","#F88","#06C","#CCF","#008","#F0F","#FF0","#0FF","#808","#800","#088","#00F","#0CF","#CFF","#CFC","#FF9","#9CF","#F9C","#C9F","#FC9","#36F","#3CC","#9C0","#FC0"];function A(e,a,t){return a[t+"_max"]=e.length,a[t+"_min"]=e.replace(/#/g,"").length,a}var E={};function P(e){if(!(e in E)){for(var a=[],t=e.replace(/^[#,]+/,"").replace(/[1-9]\d*/g,(function(e){return"?".repeat(e.length)})),r=0;r<t.length;r++){var n=t.charAt(r);a[r]=n in S?S[n]:n}E[e]=a.join("")}return E[e]}function N(e,a){"string"==typeof e&&(e={type:"string",value:e=e.replace(/ /g,S["?"])}),"string"===e.type&&a.length&&"string"===a[a.length-1].type?a[a.length-1].value+=e.value:a.push(e)}function D(e){for(var a,t,r=[],n={scale:1,percent:!1,text:!1,date:0,date_eval:!1,date_system:null,sec_decimals:0,general:!1,clock:24,int_pattern:[],frac_pattern:[],man_pattern:[],den_pattern:[],num_pattern:[],tokens:r},i=e+"",o="int",s=!1,d=null,u=[],l=!1;i&&!s;){if(a=/^General/i.exec(i))n.general=!0,N({type:"general"},r);else if("int"===o&&(a=/^[#?0]+(?:,[#?0]+)*/.exec(i))||"den"===o&&(a=/^[#?\d]+/.exec(i))||(a=/^[#?0]+/.exec(i)))n[o+"_pattern"].push(a[0]),N(d={type:o,num:a[0]},r);else if((a=/^\//.exec(i))&&n[o+"_pattern"].length){if(!d)throw new SyntaxError("Missing a numerator in pattern ".concat(e));n.fractions=!0,n.num_pattern.push(n[o+"_pattern"].pop()),d.type="num",o="den",N({type:"div"},r)}else if(a=/^,+/.exec(i)){var p=i.charAt(1)in S;t.slice(-1)in S&&(a[0].length>1||!p)?n.scale=Math.pow(.001,a[0].length):N(a[0],r)}else{if(a=/^;/.exec(i)){s=!0;break}if(a=/^[@+-]/.exec(i))"@"===a[0]&&(n.text=!0),N({type:O[a[0]]},r);else if(a=/^(?:\[(h+|m+|s+)\])/i.exec(i)){var c=a[1].toLowerCase(),f=c[0],g={type:"",size:0,date:1,raw:a[0],pad:c.length};"h"===f?(g.size=M,g.type="hour-elap"):"m"===f?(g.size=k,g.type="min-elap"):(g.size=z,g.type="sec-elap"),n.date=n.date|g.size,u.push(g),N(g,r)}else if(a=/^(?:B2)/i.exec(i))l||(n.date_system=6);else if(a=/^(?:B1)/i.exec(i))l||(n.date_system=1);else if(a=/^(?:([hHmMsSyYbBdDegG])\1*)/.exec(i)){var h={type:"",size:0,date:1,raw:a[0]},v=a[0].toLowerCase(),b=v[0];if("y"===v||"yy"===v)h.size=2,h.type="year-short";else if("y"===b||"e"===b)h.size=2,h.type="year";else if("b"===v||"bb"===v)h.size=2,h.type="b-year-short";else if("b"===b)h.size=2,h.type="b-year";else if("d"===v||"dd"===v)h.size=j,h.type="day",h.pad=/dd/.test(v);else if("ddd"===v)h.size=j,h.type="weekday-short";else if("d"===b)h.size=j,h.type="weekday";else if("h"===b)h.size=M,h.type="hour",h.pad=/hh/i.test(v);else if("m"===b){3===v.length?(h.size=y,h.type="monthname-short"):5===v.length?(h.size=y,h.type="monthname-single"):v.length>=4&&(h.size=y,h.type="monthname");var _=u[u.length-1];!h.type&&_&&!_.used&&_.size&(M|z)&&(_.used=!0,h.size=k,h.type="min",h.pad=/mm/.test(v)),h.type||(h.size=y,h.type="month",h.pad=/mm/.test(v),h.indeterminate=!0)}else if("s"===b){h.size=z,h.type="sec",h.pad=/ss/.test(v);var E=u[u.length-1];E&&E.size&k?h.used=!0:E&&E.indeterminate&&(delete E.indeterminate,E.size=k,E.type="min",h.used=!0)}n.date=n.date|h.size,n.date_eval=!0,u.push(h),N(h,r)}else if(a=/^(?:AM\/PM|am\/pm|A\/P)/.exec(i))n.clock=12,n.date=n.date|M,n.date_eval=!0,N({type:"am",short:"A/P"===a[0]},r);else if(n.date&&(a=/^\.0{1,3}/i.exec(i))){var D=a[0].length-1,I=[z,w,x,F][D];n.date=n.date|I,n.date_eval=!0,n.sec_decimals=Math.max(n.sec_decimals,D),N({type:"subsec",size:I,decimals:D,date:1,raw:a[0]},r)}else if((a=/^\\(.)/.exec(i))||(a=/^"([^"]*?)"/.exec(i)))N(a[1],r);else if(a=/^\[(<[=>]?|>=?|=)\s*(-?[.\d]+)\]/.exec(i))n.condition=[a[1],parseFloat(a[2],10)];else if(a=/^\[\$([^\]]+)\]/.exec(i)){var J=a[1].split("-"),T=J.length<2?"":J[J.length-1],L=J[0];L&&N(L,r);var R=m(T);R&&(n.locale=R);var B=parseInt(T,16);if(isFinite(B)&&16711680&B)6===(B>>16&255)&&(n.date_system=6);l=!0}else if(a=/^\[(black|blue|cyan|green|magenta|red|white|yellow|color\s*(\d+))\]/i.exec(i))n.color=a[2]?C[parseInt(a[2],10)]||"#000":a[1].toLowerCase();else if(a=/^\[(DBNum1|ENG|HIJ|JPN|TWN)\]/i.exec(i));else if(a=/^%/.exec(i))n.scale=100,n.percent=!0,N("%",r);else if(a=/^_(\\.|.)/.exec(i))N(" ",r);else if(a=/^\./.exec(i))N({type:"point",value:a[0]},r),n.dec_fractions=!0,o="frac";else if(a=/^[Ee]([+-]?|(?=[0#?]))/.exec(i))n.exponential=!0,n.exp_plus="+"===a[1],o="man",N({type:"exp",plus:"+"===a[1]},r);else if(a=/^\*(\\.|.)/.exec(i));else{if(a=/^[BENn[]/.exec(i))throw new SyntaxError("Unexpected char ".concat(i.charAt(0)," in pattern ").concat(e));N((a=[i[0]])[0],r)}}t=a[0],i=i.slice(a?a[0].length:1)}if(n.pattern=e.slice(0,e.length-i.length),/^((?:\[[^\]]+\])+)(;|$)/.test(n.pattern)&&!/^\[(?:h+|m+|s+)\]/.test(n.pattern)&&N({type:"text"},r),n.fractions&&n.dec_fractions||n.fractions&&n.exponential)throw new SyntaxError("Invalid pattern: ".concat(n.pattern));var H=n.int_pattern.join("");if(n.grouping=H.indexOf(",")>=0,n.grouping){var U=H.split(","),G=U.length;2===G?(n.group_pri=U[1].length,n.group_sec=n.group_pri):G>2&&(n.group_pri=U[G-1].length,n.group_sec=U[G-2].length)}else n.group_pri=0,n.group_sec=0;A(H.replace(/[,]/g,""),n,"int"),A(n.frac_pattern.join(""),n,"frac"),A(n.man_pattern.join(""),n,"man");var Z=n.num_pattern.join(""),K=n.den_pattern.join(""),W=/\?/.test(K)||/\?/.test(Z);if(K=K.replace(/\d/g,W?"?":"#"),W&&(K=K.replace(/#$/g,"?")),A(Z,n,"num"),A(K,n,"den"),W&&(Z=Z.replace(/#$/g,"?")),n.int_padding=P(n.int_pattern.join("")),n.frac_padding=P(n.frac_pattern.join("")),n.man_padding=P(n.man_pattern.join("")),n.num_padding=P(Z),n.den_padding=P(K),n.den_pattern.length&&(n.denominator=parseInt(n.den_pattern.join("").replace(/\D/g,""),10)),n.integer=!!n.int_pattern.join("").length,n.fractions&&r.forEach((function(e,a){var t=r[a+1];"string"===e.type&&t&&("num"===t.type?e.rule="num+int":"div"===t.type?e.rule="num":"den"===t.type&&(e.rule="den"))})),(n.date||n.general)&&(n.int_pattern.length||n.frac_pattern.length||1!==n.scale||n.text))throw new Error("Illegal format");return n.date_system||(n.date_system=1),n}function I(e){var a,t=[],r=!1,n=null,i=e,o=0,s=!1,d=0,u=0;do{(s=D(i)).condition&&(u++,r=!0),s.text&&(n=s),s.locale&&(a=m(s.locale)),t.push(s),o=";"===i.charAt(s.pattern.length)?1:0,i=i.slice(s.pattern.length+o),d++}while(o&&d<4&&u<3);if(u>2)throw new Error("Unexpected condition");if(o)throw new Error("Unexpected partition");if(!r){if(t.length<4&&n)for(var l=0,p=t.length;l<p;l++)t[l]===n&&t.splice(l,1);if(t.length<1&&n&&(t[0]=D("General")),t.length<2){var c=D(t[0].pattern);c.tokens.unshift({type:"minus",volatile:!0}),t.push(c)}t.length<3&&t.push(D(t[0].pattern)),t.length<4&&t.push(n||D("@")),t[0].condition=[">",0],t[1].condition=["<",0],t[2].condition=null}return{pattern:e,partitions:t,locale:a}}function J(e,a){if(e instanceof Date){var t=1*e;a&&a.ignoreTimezone||(t-=60*e.getTimezoneOffset()*1e3);var r=t/864e5;return r-(r<=-25509?-25568:-25569)}return e}var T={total:1,sign:0,period:0,int:1,frac:0};var L=function(e,a){return e.replace(/\./,a.decimal)};function R(e,a,t,r){var n=0|t,i=t<0&&(!a.condition||"<>"===a.condition[0]||">="===a.condition[0]||">"===a.condition[0]);if("string"==typeof t)e.push(t);else if(t===n)i&&e.push(r.negative),e.push(Math.abs(n));else{i&&e.push(r.negative);var o=0,s=Math.abs(t);s&&(o=Math.floor(Math.log10(s)));var m=o<0?s*Math.pow(10,-o):s/Math.pow(10,o);10===m&&(m=1,o++);var d=function(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=Math.abs(e);if(!t)return T;var r=a&&e<0?1:0,n=Math.floor(t),i=Math.floor(Math.log10(t)+1),o=0,s=0;if(n!==t){o=1;for(var m=String(c(i<0?t*Math.pow(10,-i):t/Math.pow(10,i),15)),d=m.length,u=!0,l=0;l<=m.length;){if("."===m[l]){d--;break}"0"===m[l]&&u?d--:u=!1,l++}(s=d-i)<0&&(s=0,o=0)}return{total:r+Math.max(i,1)+o+s,digits:Math.max(i,0)+s,sign:r,period:o,int:Math.max(i,1),frac:s}}(s),u=function(){var a,t=Math.abs(o);a=1===m?m:c(m,5),e.push(L(a+"",r),r.exponent,o<0?r.negative:r.positive,t<10?"0":"",t)};if(o>=-4&&o<=-1){var l=s.toPrecision(10+o).replace(/0+$/,"");e.push(L(l,r))}else if(10===o){var p=s.toFixed(10).slice(0,12).replace(/\.$/,"");e.push(L(p,r))}else if(Math.abs(o)<=9){if(d.total<=11){var f=c(s,9).toFixed(d.frac);e.push(L(f,r))}else 9===o?e.push(Math.floor(s)):o>=0&&o<9?e.push(c(s,9-o)):u()}else d.total>=12?u():Math.floor(s)===s?e.push(Math.floor(s)):e.push(L(c(s,9).toFixed(d.frac),r))}return e}var B=Math.floor;function H(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(a&&e>=0){if(0===e)return[1900,1,0];if(60===e)return[1900,2,29];if(e<60)return[1900,e<32?1:2,(e-1)%31+1]}var t=e+68569+2415019,r=B(4*t/146097);t-=B((146097*r+3)/4);var n=B(4e3*(t+1)/1461001);t=t-B(1461*n/4)+31;var i=B(80*t/2447),o=t-B(2447*i/80),s=i+2-12*(t=B(i/11)),m=100*(r-49)+n+t;return[0|m,0|s,0|o]}function U(e){return H(e+1462)}function G(e){if(60===e)throw new Error("#VALUE!");if(e<=1)return[1317,8,29];if(e<60)return[1317,e<32?9:10,1+(e-2)%30];var a=10631/30,t=.1335,r=e+466935,n=B(r/10631),i=B(((r-=10631*n)-t)/a);r-=B(i*a+t);var o=B((r+28.5001)/29.5);return 13===o?[30*n+i,12,30]:[30*n+i,o,r-B(29.5001*o-29)]}var Z=86400,K={int:"integer",frac:"fraction",man:"mantissa",num:"numerator",den:"denominator"};function W(e,a,t,r){var n="",i="",o="",s="",m="",d=0,u=0|e,l=0,g=0,h=1,v=0,b=0,_=0,y=0,j=0,O=0,C=r||p;if(!a.text&&isFinite(a.scale)&&1!==a.scale&&(e=function(e){if(0===e)return e;var a=Math.ceil(Math.log10(e<0?-e:e)),t=Math.pow(10,16-Math.floor(a));return Math.round(e*t)/t}(e*a.scale)),a.exponential){var A=Math.abs(e);A&&(d=Math.floor(Math.log(A)/Math.LN10)),a.int_max>1&&(d=Math.floor(d/a.int_max)*a.int_max),A=d<0?A*Math.pow(10,-d):A/Math.pow(10,d),e=e<0?-A:A,n+=Math.abs(d)}if(a.integer){var E=Math.abs(c(e,a.fractions?1:a.frac_max));m+=E<1?"":Math.floor(E)}if(a.grouping){var P="",N=m.length;for(N>a.group_pri&&(N-=a.group_pri,P=C.group+m.slice(N,N+a.group_pri)+P);N>a.group_sec;)N-=a.group_sec,P=C.group+m.slice(N,N+a.group_sec)+P;m=N?m.slice(0,N)+P:P}a.dec_fractions&&(s=String(c(e,a.frac_max)).split(".")[1]||"");var D=!1;if(a.fractions){var I=Math.abs(a.integer?e%1:e);if(I)if(D=!0,isFinite(a.denominator))o+=a.denominator,"0"===(i+=c(I*a.denominator))&&(i="",o="",D=!1,m||(m="0"));else{var J=f(I,a.integer?a.num_max:1/0,a.den_max);i+=J[0],o+=J[1],a.integer&&"0"===i&&(m||(m="0"),i="",o="",D=!1)}}if(a.date_eval&&function(e,a){return a?e<-694324||e>=35830291:e<0||e>=2958466}(e,t.dateSpanLarge)){if(t.dateErrorThrows)throw new Error("Date out of bounds");return t.dateErrorNumber?R([],{},e,C).join(""):t.overflow}if(a.date){var T=Z*(e-(u=0|e));if(O=T-(l=Math.floor(T)),Math.abs(O)<1e-6?O=0:O>.9999&&(O=0,(l+=1)===Z&&(l=0,u+=1)),u||a.date_system){var L=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=Math.floor(e);return 6===a?G(r):-1===a?U(r):H(r,t)}(e,a.date_system,t.leap1900);g=L[0],h=L[1],v=L[2]}if(l||O){var B=a.date&F||a.date&x||a.date&w||a.date&z||a.date&k||a.date&M;(B===F&&O>.9995||B===x&&O>.995||B===w&&O>.95||B===z&&O>=.5||B===k&&O>=.5||B===M&&O>=.5)&&(l++,O=0);var W=l<0?Z+l:l;j=Math.floor(W)%60,y=Math.floor(W/60)%60,_=Math.floor(W/60/60)%60}b=(6+u)%7}a.int_padding&&(m=1===a.int_padding.length?m||a.int_padding:a.int_padding.substring(0,a.int_padding.length-m.length)+m),a.num_padding&&(i=1===a.num_padding.length?i||a.num_padding:a.num_padding.substring(0,a.num_padding.length-i.length)+i),a.den_padding&&(o=1===a.den_padding.length?o||a.den_padding:o+a.den_padding.slice(o.length));var Y=a.frac_padding;if(a.man_padding){var $=a.exp_plus?"+":"";n=1===a.man_padding.length?(d<0?"-":$)+(n||a.man_padding):(d<0?"-":$)+a.man_padding.slice(0,a.man_padding.length-n.length)+n}for(var q=[],Q=0,V={int:0,frac:0,man:0,num:0,den:0},X=0,ee=a.tokens.length;X<ee;X++){var ae=a.tokens[X],te=ae.num?ae.num.length:0;if("string"===ae.type)ae.rule?"num"===ae.rule?D?q.push(ae.value):(a.num_min>0||a.den_min>0)&&q.push(ae.value.replace(/./g,S["?"])):"num+int"===ae.rule?D&&m?q.push(ae.value):a.den_min>0&&(m||a.num_min)&&q.push(ae.value.replace(/./g,S["?"])):"den"===ae.rule&&(D?q.push(ae.value):(a.den_min>0||a.den_min>0)&&q.push(ae.value.replace(/./g,S["?"]))):q.push(ae.value);else if("error"===ae.type)q.push(t.invalid);else if("point"===ae.type)q.push(a.date?ae.value:C.decimal);else if("general"===ae.type)R(q,a,e,C);else if("exp"===ae.type)q.push(C.exponent);else if("minus"===ae.type)ae.volatile&&a.date||(ae.volatile&&!a.fractions&&(a.integer||a.dec_fractions)?(m&&"0"!==m||s)&&q.push(C.negative):q.push(C.negative));else if("plus"===ae.type)q.push(C.positive);else if("text"===ae.type)q.push(e);else if("div"===ae.type)D?q.push("/"):a.num_min>0||a.den_min>0?q.push(S["?"]):q.push(S["#"]);else if("int"===ae.type)if(1===a.int_pattern.length)q.push(m);else{var re=Q?a.int_pattern.join("").length-V.int:1/0,ne=Q===a.int_pattern.length-1?0:a.int_pattern.join("").length-(V.int+ae.num.length);q.push(m.substring(m.length-re,m.length-ne)),Q++,V.int+=ae.num.length}else if("frac"===ae.type)1===a.frac_pattern.length?q.push(Y.length<2?s||Y:s+Y.slice(s.length)):(q.push(s.slice(V.frac,V.frac+te)),V.frac+=te);else if(ae.type in K)1===a[ae.type+"_pattern"].length?("int"===ae.type&&q.push(m),"frac"===ae.type&&q.push(s),"man"===ae.type&&q.push(n),"num"===ae.type&&q.push(i),"den"===ae.type&&q.push(o)):(q.push(K[ae.type].slice(V[ae.type],V[ae.type]+te)),V[ae.type]+=te);else if("year"===ae.type)g<0&&q.push(C.negative),q.push(String(Math.abs(g)).padStart(4,"0"));else if("year-short"===ae.type){var ie=g%100;q.push(ie<10?"0":"",ie)}else if("month"===ae.type)q.push(ae.pad&&h<10?"0":"",h);else if("monthname-single"===ae.type)6===a.date_system?q.push(C.mmmm6[h-1].charAt(0)):q.push(C.mmmm[h-1].charAt(0));else if("monthname-short"===ae.type)6===a.date_system?q.push(C.mmm6[h-1]):q.push(C.mmm[h-1]);else if("monthname"===ae.type)6===a.date_system?q.push(C.mmmm6[h-1]):q.push(C.mmmm[h-1]);else if("weekday-short"===ae.type)q.push(C.ddd[b]);else if("weekday"===ae.type)q.push(C.dddd[b]);else if("day"===ae.type)q.push(ae.pad&&v<10?"0":"",v);else if("hour"===ae.type){var oe=_%a.clock||(a.clock<24?a.clock:0);q.push(ae.pad&&oe<10?"0":"",oe)}else if("min"===ae.type)q.push(ae.pad&&y<10?"0":"",y);else if("sec"===ae.type)q.push(ae.pad&&j<10?"0":"",j);else if("subsec"===ae.type){q.push(C.decimal);var se=O.toFixed(a.sec_decimals);q.push(se.slice(2,2+ae.decimals))}else if("am"===ae.type){var me=_<12?0:1;ae.short&&!r?q.push("AP"[me]):q.push(C.ampm[me])}else if("hour-elap"===ae.type){e<0&&q.push(C.negative);var de=24*u+Math.floor(Math.abs(l)/3600);q.push(String(Math.abs(de)).padStart(ae.pad,"0"))}else if("min-elap"===ae.type){e<0&&q.push(C.negative);var ue=1440*u+Math.floor(Math.abs(l)/60);q.push(String(Math.abs(ue)).padStart(ae.pad,"0"))}else if("sec-elap"===ae.type){e<0&&q.push(C.negative);var le=u*Z+Math.abs(l);q.push(String(Math.abs(le)).padStart(ae.pad,"0"))}else if("b-year"===ae.type)q.push(g+543);else if("b-year-short"===ae.type){var pe=(g+543)%100;q.push(pe<10?"0":"",pe)}}return t.nbsp?q.join(""):q.join("").replace(/\u00a0/g," ")}function Y(e,a){for(var t=0;t<3;t++){var r=a[t];if(r){var n=void 0;if(r.condition){var i=r.condition[0],o=r.condition[1];"="===i?n=e===o:">"===i?n=e>o:"<"===i?n=e<o:">="===i?n=e>=o:"<="===i?n=e<=o:"<>"===i&&(n=e!==o)}else n=!0;if(n)return r}}}var $=D("@"),q="black";function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var V={};function X(e,a){var t=e.pattern,r=e.partitions,n=e.locale,i=function(e){var t=Object.assign({},_(),a,e);return n&&(t.locale=n),t},o=function(e,a){var t=i(a);return function(e,a,t){var r=d(t.locale),n=a[3]?a[3]:$;if("boolean"==typeof e&&(e=e?"TRUE":"FALSE"),null==e)return"";if("number"!=typeof e)return W(e,n,t,r);if(!isFinite(e)){var i=r||p;return isNaN(e)?i.nan:(e<0?i.negative:"")+i.infinity}var o=Y(e,a);return o?W(e,o,t,r):""}(J(e,t),r,t)};return o.color=function(e,a){return function(e,a){if("number"!=typeof e||!isFinite(e))return(a[3]?a[3].color:$.color)||q;var t=Y(e,a);return t&&t.color||q}(J(e,i(a)),r)},o.isPercent=function(){return function(e){return!!(e[0]&&e[0].percent||e[1]&&e[1].percent||e[2]&&e[2].percent||e[3]&&e[3].percent)}(r)},o.isDate=function(){return function(e){return!!(e[0]&&e[0].date||e[1]&&e[1].date||e[2]&&e[2].date||e[3]&&e[3].date)}(r)},o.pattern=t,e.error&&(o.error=e.error),o.options=i,o.locale=n||a&&a.locale||"",Object.freeze(o)}function ee(e,a){e||(e="General");var t=null;V[e]?t=V[e]:(t=Object.assign({},_(),a).throws?I(e):function(e){try{return I(e)}catch(t){var a={tokens:[{type:"error"}]};return{pattern:e,partitions:[a,a,a,a],error:t.message,locale:null}}}(e)).error||(V[e]=t);return X(t,a)}ee.isDate=function(e){return ee(e,{throws:!1}).isDate()},ee.isPercent=function(e){return ee(e,{throws:!1}).isPercent()},ee.dateToSerial=J,ee.options=_,ee.dec2frac=f,ee.round=c,ee.codeToLocale=t,ee.parseLocale=s,ee.getLocale=d,ee.addLocale=function(e,a){var t=s(a);return delete V[t.lang],delete V[t.language],l(e,t)},ee.format=function(e,a,t){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=t&&"object"===Q(t)?t:{locale:t,throws:!r};return ee(e,n)(J(a,n),n)},ee.is_date=ee.isDate;const ae=ee;return a=a.default})()}));