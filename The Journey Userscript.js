// ==UserScript==
// @name         The Journey Userscript
// @namespace    http://tampermonkey.net/
// @version      0.2
// @history      Added auto update
// @description  A userscript used for The Journey
// @author       riben
// @match        https://artofproblemsolving.com/*
// @grant        GM_xmlhttpRequest
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @downloadURL  https://raw.githubusercontent.com/riben123/The-Journey-Userscript/master/The%20Journey%20Userscript.js
// ==/UserScript==
$('head').append(`
<style>
@import url(//db.onlinewebfonts.com/c/04631057dd8d776a913255a96925bc33?family=Creepy);
@font-face {font-family: "Creepy"; src: url("//db.onlinewebfonts.com/t/04631057dd8d776a913255a96925bc33.eot"); src: url("//db.onlinewebfonts.com/t/04631057dd8d776a913255a96925bc33.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/04631057dd8d776a913255a96925bc33.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/04631057dd8d776a913255a96925bc33.woff") format("woff"), url("//db.onlinewebfonts.com/t/04631057dd8d776a913255a96925bc33.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/04631057dd8d776a913255a96925bc33.svg#Creepy") format("svg"); }
@import url(//db.onlinewebfonts.com/c/009943a6e511476a8e88fa74c11797d2?family=Zombie+Guts);
@font-face {font-family: "Zombie Guts"; src: url("//db.onlinewebfonts.com/t/009943a6e511476a8e88fa74c11797d2.eot"); src: url("//db.onlinewebfonts.com/t/009943a6e511476a8e88fa74c11797d2.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/009943a6e511476a8e88fa74c11797d2.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/009943a6e511476a8e88fa74c11797d2.woff") format("woff"), url("//db.onlinewebfonts.com/t/009943a6e511476a8e88fa74c11797d2.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/009943a6e511476a8e88fa74c11797d2.svg#Zombie Guts") format("svg"); }
#signup {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
#deposit {
  background-color: orange;
  border: none;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
#purchase {
  background-color: blue;
  border: none;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
#accumulation {
  background-color: pink;
  border: none;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
#nominate {
  background-color: red;
  border: none;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
#rankup {
  background-color: purple;
  border: none;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
#accept {
  background-color: aqua;
  border: none;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.bbcode-verbatim .bbcode_img{
display:none;
}
.bbcode-verbatim .jc:before{
content: ':jc:';
}
code .bbcode_img{
display:none;
}
code .jc:before{
content: ':jc:';
}
.bbcode-verbatim .thinking:before{
content: ':thinking:';
}
code .jc:before{
content: ':thinking:';
}
.bbcode-verbatim .rolling:before{
content: ':rolling:';
}
code .rolling:before{
content: ':rolling:';
}
.bbcode-verbatim .distraught:before{
content: ':distraught:';
}
code .distraught:before{
content: ':distraught:';
}
.bbcode-verbatim .xD:before{
content: ':xD:';
}
code .xD:before{
content: ':xD:';
}
.bbcode-verbatim .facepalm:before{
content: ':facepalm:';
}
code .facepalm:before{
content: ':facepalm:';
}
.display_count {
color: white;
height: 5px;
background-color: #1b365d;
}
span.bbcode_spoiler {
  background-color: black;
  font-family: Arial;
  color: black;
}
.blur {
   color: transparent;
   text-shadow: 0 0 5px rgba(0,0,0,0.5);
}
.bbcode-verbatim .blur{
all: inherit !important;
}
.bbcode-verbatim .blur:before{
content: "[blur]";
}
.bbcode-verbatim .blur:after{
content: "[/blur]";
}
code .blur {
all: inherit !important;
}
code .blur:before {
content: "[blur]";
}
code .blur:after {
content: "[/blur]";
}
.o {
text-decoration: overline !important;
}
.bbcode-verbatim .o{
all: inherit !important;
}
.bbcode-verbatim .o:before{
content: "[o]";
}
.bbcode-verbatim .o:after{
content: "[/o]";
}
code .o {
all: inherit !important;
}
code .o:before {
content: "[o]";
}
code .o:after {
content: "[/o]";
}
.reverse {
unicode-bidi:bidi-override;
  direction:rtl;
}
.bbcode-verbatim .reverse{
all: inherit !important;
}
.bbcode-verbatim .reverse:before{
content: "[reverse]";
}
.bbcode-verbatim .reverse:after{
content: "[/reverse]";
}
code .reverse {
all: inherit !important;
}
code .reverse:before {
content: "[reverse]";
}
code .reverse:after {
content: "[/reverse]";
}
.updown {
-moz-transform:rotate(-180deg); /* Firefox */
  -webkit-transform:rotate(-180deg); /* Webkit */
  -ms-transform:rotate(-180deg); /* IE */
  -o-transform:rotate(-180deg); /* Opera */
  transform:rotate(-180deg); /* future */
  position:absolute;
}
.bbcode-verbatim .updown{
all: inherit !important;
}
.bbcode-verbatim .updown:before{
content: "[updown]";
}
.bbcode-verbatim .updown:after{
content: "[/updown]";
}
code .updown {
all: inherit !important;
}
code .updown:before {
content: "[updown]";
}
code .updown:after {
content: "[/updown]";
}
.hl {
background-color: yellow;
}
.bbcode-verbatim .hl{
all: inherit !important;
}
.bbcode-verbatim .hl:before{
content: "[hl]";
}
.bbcode-verbatim .hl:after{
content: "[/hl]";
}
code .hl {
all: inherit !important;
}
code .hl:before {
content: "[hl]";
}
code .hl:after {
content: "[/hl]";
}
</style>
<script>
function waitForKeyElements (
    selectorTxt,    /* Required: The jQuery selector string that
                        specifies the desired element(s).
                    */
    actionFunction, /* Required: The code to run when elements are
                        found. It is passed a jNode to the matched
                        element.
                    */
    bWaitOnce,      /* Optional: If false, will continue to scan for
                        new elements even after the first match is
                        found.
                    */
    iframeSelector  /* Optional: If set, identifies the iframe to
                        search.
                    */
) {
    var targetNodes, btargetsFound;

    if (typeof iframeSelector == "undefined")
        targetNodes     = $(selectorTxt);
    else
        targetNodes     = $(iframeSelector).contents ()
                                           .find (selectorTxt);

    if (targetNodes  &&  targetNodes.length > 0) {
        btargetsFound   = true;
        /*--- Found target node(s).  Go through each and act if they
            are new.
        */
        targetNodes.each ( function () {
            var jThis        = $(this);
            var alreadyFound = jThis.data ('alreadyFound')  ||  false;

            if (!alreadyFound) {
                //--- Call the payload function.
                var cancelFound     = actionFunction (jThis);
                if (cancelFound)
                    btargetsFound   = false;
                else
                    jThis.data ('alreadyFound', true);
            }
        } );
    }
    else {
        btargetsFound   = false;
    }

    //--- Get the timer-control variable for this selector.
    var controlObj      = waitForKeyElements.controlObj  ||  {};
    var controlKey      = selectorTxt.replace (/[^\w]/g, "_");
    var timeControl     = controlObj [controlKey];

    //--- Now set or clear the timer as appropriate.
    if (btargetsFound  &&  bWaitOnce  &&  timeControl) {
        //--- The only condition where we need to clear the timer.
        clearInterval (timeControl);
        delete controlObj [controlKey]
    }
    else {
        //--- Set a timer, if needed.
        if ( ! timeControl) {
            timeControl = setInterval ( function () {
                    waitForKeyElements (    selectorTxt,
                                            actionFunction,
                                            bWaitOnce,
                                            iframeSelector
                                        );
                },
                300
            );
            controlObj [controlKey] = timeControl;
        }
    }
    waitForKeyElements.controlObj   = controlObj;
}
function check_signup(){
var username=prompt("What is your username?");
if (username==null) {
return false;
}
else {
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/signup{"+username+"}[/b]");
$('.cmty-submit-button.btn.btn-primary').trigger('click');
};}
function check_deposit(){
var username=prompt("What is your username?");
var amount=prompt("Type in the amount you want to deposit:");
var reason=prompt("State a reason for your deposit:");
if (username==null) {
return false;
}
else {
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/deposit{"+username+", "+amount+", "+reason+"}[/b] [accept][/accept]");
$('.cmty-submit-button.btn.btn-primary').trigger('click');
};}
function check_purchase(){
var username=prompt("What is your username?");
var item=prompt("Type the item that you want to purchase:");
var cost=prompt("Type the cost of the item:");
if (item==null) {
return false;
}
else if (cost==null) {
return false;
}
else {
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/purchase{"+username+", "+cost+", "+item+"}[/b] [accept][/accept]");
$('.cmty-submit-button.btn.btn-primary').trigger('click');
};}
function check_accumulation(){
var original_number=prompt("What is your current number?");
if (original_number==null) {
return false;
}
else if (original_number <= 50) {
var point=2;
var new_number=parseInt(original_number)+parseInt(point);
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/accumulate{"+point+"}[/b], "+new_number);
$('.cmty-submit-button.btn.btn-primary').trigger('click');
}
else if (original_number > 50 && original_number<=100) {
var point=3;
var new_number=parseInt(original_number)+parseInt(point);
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/accumulate{"+point+"}[/b], "+new_number);
$('.cmty-submit-button.btn.btn-primary').trigger('click');
}
else if (original_number > 100 && original_number<=175) {
var point=5;
var new_number=parseInt(original_number)+parseInt(point);
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/accumulate{"+point+"}[/b], "+new_number);
$('.cmty-submit-button.btn.btn-primary').trigger('click');
}
else if (original_number > 175 && original_number<=250) {
var point=7;
var new_number=parseInt(original_number)+parseInt(point);
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/accumulate{"+point+"}[/b], "+new_number);
$('.cmty-submit-button.btn.btn-primary').trigger('click');
}
else if (original_number > 250 && original_number<=350) {
var point=11;
var new_number=parseInt(original_number)+parseInt(point);
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/accumulate{"+point+"}[/b], "+new_number);
$('.cmty-submit-button.btn.btn-primary').trigger('click');
}
else if (original_number > 350 && original_number<=425) {
var point=13;
var new_number=parseInt(original_number)+parseInt(point);
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/accumulate{"+point+"}[/b], "+new_number);
$('.cmty-submit-button.btn.btn-primary').trigger('click');
}
else if (original_number > 425 && original_number<=500) {
var point=17;
var new_number=parseInt(original_number)+parseInt(point);
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/accumulate{"+point+"}[/b], "+new_number);
$('.cmty-submit-button.btn.btn-primary').trigger('click');
}
else if (original_number > 500 && original_number<=550) {
var point=19;
var new_number=parseInt(original_number)+parseInt(point);
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/accumulate{"+point+"}[/b], "+new_number);
$('.cmty-submit-button.btn.btn-primary').trigger('click');
}
else if (original_number > 550 && original_number<=625) {
var point=23;
var new_number=parseInt(original_number)+parseInt(point);
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/accumulate{"+point+"}[/b], "+new_number);
$('.cmty-submit-button.btn.btn-primary').trigger('click');
}
else if (original_number > 625 && original_number<=700) {
var point=29;
var new_number=parseInt(original_number)+parseInt(point);
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/accumulate{"+point+"}[/b], "+new_number);
$('.cmty-submit-button.btn.btn-primary').trigger('click');
}
else if (original_number > 700 && original_number<=750) {
var point=31;
var new_number=parseInt(original_number)+parseInt(point);
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/accumulate{"+point+"}[/b], "+new_number);
$('.cmty-submit-button.btn.btn-primary').trigger('click');
}
else if (original_number > 750 && original_number<=825) {
var point=37;
var new_number=parseInt(original_number)+parseInt(point);
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/accumulate{"+point+"}[/b], "+new_number);
$('.cmty-submit-button.btn.btn-primary').trigger('click');
}
else if (original_number > 825 && original_number<=900) {
var point=41;
var new_number=parseInt(original_number)+parseInt(point);
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/accumulate{"+point+"}[/b], "+new_number);
$('.cmty-submit-button.btn.btn-primary').trigger('click');
}
else{
var point=43;
var new_number=parseInt(original_number)+parseInt(point);
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/accumulate{"+point+"}[/b], "+new_number);
$('.cmty-submit-button.btn.btn-primary').trigger('click');
}};
function check_nominate(){
var game=prompt("Type the game you want to nominate:");
if (game==null) {
return false;
}
else {
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/nominate{"+game+"}[/b]");
$('.cmty-submit-button.btn.btn-primary').trigger('click');
};}
function check_rankup(){
var rank=prompt("Type the new rank you want to rank up to:");
if (rank==null) {
return false;
}
else {
$('.cmty-topic-mini-reply').trigger('click');
$('.cmty-post-textarea').append("[b]/rankup{"+rank+"}[/b]");
$('.cmty-submit-button.btn.btn-primary').trigger('click');
};}
function check_accept(button) {
var post_num_top=document.getElementsByClassName("cmty-post-middle");
for (var i = 0; i < post_num_top.length; i++) {
if (post_num_top[i].childNodes[3].childNodes[3].childNodes[1].innerHTML=="#1") {
var command=button.parentNode.textContent.split('{')[0].substr(1);
if (command=="deposit") {
var right=post_num_top[i].nextSibling;
var edit=right.childNodes[5];
var wanted_user=button.parentNode.textContent.split(',')[0];
var user=wanted_user.substring(9);
var deposit_amount=button.parentNode.textContent.split(',')[1];
$(edit).trigger('click');
waitForKeyElements("textarea.cmty-post-textarea",accept_search);
function accept_search() {
var search_for=document.getElementsByClassName("cmty-post-textarea")[0].value;
var original_amount=search_for.split(user+"'s Money:[/b]")[1].split(' ')[1];
var new_amount=parseInt(original_amount)+parseInt(deposit_amount);
var new_text=search_for.replace("[b]"+user+"'s Money:[/b] "+original_amount+' [img width="3"]https://funkyimg.com/i/36dTG.png[/img]',"[b]"+user+"'s Money:[/b] "+new_amount+' [img width="3"]https://funkyimg.com/i/36dTG.png[/img]');
document.getElementsByClassName("cmty-post-textarea")[0].value=new_text;
$('.cmty-submit-button.btn.btn-primary').trigger('click');
$('.aops-modal-btn.btn.btn-primary').trigger('click');}
var back_edit=button.parentNode.parentNode.parentNode.nextSibling.childNodes[5];
$(back_edit).trigger('click');
waitForKeyElements("textarea.cmty-post-textarea",cleanup);
function cleanup() {
var op=document.getElementsByClassName("cmty-post-textarea")[1].value;
var new_op=op.replace("[accept][/accept]","[color=red]Done![/color]");
document.getElementsByClassName("cmty-post-textarea")[1].value=new_op;
$('.cmty-submit-button.btn.btn-primary').trigger('click');
$('.cmty-posting-preview-bar-hidden').trigger('click');
$('.aops-modal-btn.btn.btn-primary').trigger('click');
setTimeout(location.reload.bind(location), 5000);
}}
else if (command=="purchase") {
var right=post_num_top[i].nextSibling;
var edit=right.childNodes[5];
var wanted_user=button.parentNode.textContent.split(',')[0];
var user=wanted_user.substring(10);
var withdrew_amount=button.parentNode.textContent.split(',')[1];
var add_item=button.parentNode.textContent.split(',')[2].slice(0,-3);
$(edit).trigger('click');
waitForKeyElements("textarea.cmty-post-textarea",accept_search);
function accept_search() {
var search_for=document.getElementsByClassName("cmty-post-textarea")[0].value;
var original_amount=search_for.split(user+"'s Money:[/b]")[1].split(' ')[1];
var original_items=search_for.split(user+"'s Inventory:[/b]")[1].split("[")[0];
original_items=original_items.slice(0,-1);
var new_amount=parseInt(original_amount)-parseInt(withdrew_amount);
if (new_amount<0) {
alert("The user does not have enough money to purchase this item!");
}
else {
if (original_items=="None") {
var new_item=add_item;
var new_text=search_for.replace("[b]"+user+"'s Money:[/b] "+original_amount+' [img width="3"]https://funkyimg.com/i/36dTG.png[/img]',"[b]"+user+"'s Money:[/b] "+new_amount+' [img width="3"]https://funkyimg.com/i/36dTG.png[/img]');
var newer_text=new_text.replace("[b]"+user+"'s Inventory:[/b] None","[b]"+user+"'s Inventory:[/b]"+new_item);
document.getElementsByClassName("cmty-post-textarea")[0].value=newer_text;
$('.cmty-submit-button.btn.btn-primary').trigger('click');
$('.aops-modal-btn.btn.btn-primary').trigger('click');
var back_edit=button.parentNode.parentNode.parentNode.nextSibling.childNodes[5];
$(back_edit).trigger('click');
waitForKeyElements("textarea.cmty-post-textarea",cleanup);
function cleanup() {
var op=document.getElementsByClassName("cmty-post-textarea")[1].value;
var new_op=op.replace("[accept][/accept]","[color=red]Done![/color]");
document.getElementsByClassName("cmty-post-textarea")[1].value=new_op;
$('.cmty-submit-button.btn.btn-primary').trigger('click');
$('.cmty-posting-preview-bar-hidden').trigger('click');
$('.aops-modal-btn.btn.btn-primary').trigger('click');
setTimeout(location.reload.bind(location), 5000);
}
}
else {
var new_items=original_items+", "+add_item;
console.log(new_items);
var new_text=search_for.replace("[b]"+user+"'s Money:[/b] "+original_amount+' [img width="3"]https://funkyimg.com/i/36dTG.png[/img]',"[b]"+user+"'s Money:[/b] "+new_amount+' [img width="3"]https://funkyimg.com/i/36dTG.png[/img]');
var newer_text=new_text.replace("[b]"+user+"'s Inventory:[/b]"+original_items,"[b]"+user+"'s Inventory:[/b] "+new_items);
document.getElementsByClassName("cmty-post-textarea")[0].value=newer_text;
$('.cmty-submit-button.btn.btn-primary').trigger('click');
$('.aops-modal-btn.btn.btn-primary').trigger('click');
var back_edit=button.parentNode.parentNode.parentNode.nextSibling.childNodes[5];
$(back_edit).trigger('click');
waitForKeyElements("textarea.cmty-post-textarea",cleanup);
function cleanup() {
var op=document.getElementsByClassName("cmty-post-textarea")[1].value;
var new_op=op.replace("[accept][/accept]","[color=red]Done![/color]");
document.getElementsByClassName("cmty-post-textarea")[1].value=new_op;
$('.cmty-submit-button.btn.btn-primary').trigger('click');
$('.cmty-posting-preview-bar-hidden').trigger('click');
$('.aops-modal-btn.btn.btn-primary').trigger('click');
setTimeout(location.reload.bind(location), 5000);
}
}
}
}
}
}
}
};
</script>
`);
// Signup Button
function signup() {
  $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code1 = '<input id="signup" type="button" onclick="check_signup()" value="Signup"/>';
      var code2= '</input>';
      $(this).html(text.replace('[signup]',code1).replace('[/signup]',code2));
  });
      $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code1 = '<input id="signup" type="button" onclick="check_signup()" value="Signup"/>';
      var code2= '</input>';
      $(this).html(text.replace('[signup]',code1).replace('[/signup]',code2));
  });
}
setInterval(signup, 3000);
// Journey Coin Emoji
function jc() {
  $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code = '<div class="jc" style="display: inline"><img class="bbcode_img" src="//cdn.artofproblemsolving.com/images/3/3/7/337ac130719ed3f965843c0ed8ca5df68dcaa816.png" alt="https://funkyimg.com/i/36dTG.png" width="3%"></img></div>';
      $(this).html(text.replace(':jc:',code));
  });
      $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code = '<div class="jc" style="display: inline"><img class="bbcode_img" src="//cdn.artofproblemsolving.com/images/3/3/7/337ac130719ed3f965843c0ed8ca5df68dcaa816.png" alt="https://funkyimg.com/i/36dTG.png" width="3%"></img></div>';
      $(this).html(text.replace(':jc:',code));
  });
}
setInterval(jc, 3000);
// Deposit Button
function deposit() {
  $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code1 = '<input id="deposit" type="button" onclick="check_deposit()" value="Deposit"/>';
      var code2= '</input>';
      $(this).html(text.replace('[deposit]',code1).replace('[/deposit]',code2));
  });
      $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code1 = '<input id="deposit" type="button" onclick="check_deposit()" value="Deposit"/>';
      var code2= '</input>';
      $(this).html(text.replace('[deposit]',code1).replace('[/deposit]',code2));
  });
}
setInterval(deposit, 3000);
// Purchase Button
function purchase() {
  $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code1 = '<input id="purchase" type="button" onclick="check_purchase()" value="Purchase"/>';
      var code2= '</input>';
      $(this).html(text.replace('[purchase]',code1).replace('[/purchase]',code2));
  });
      $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code1 = '<input id="purchase" type="button" onclick="check_purchase()" value="Purchase"/>';
      var code2= '</input>';
      $(this).html(text.replace('[purchase]',code1).replace('[/purchase]',code2));
  });
}
setInterval(purchase, 3000);
// Word Count. Special thanks to happycupcake for helping me realize that the code originally doesn't work without waitForKeyElements
function waitForKeyElements (
    selectorTxt,    /* Required: The jQuery selector string that
                        specifies the desired element(s).
                    */
    actionFunction, /* Required: The code to run when elements are
                        found. It is passed a jNode to the matched
                        element.
                    */
    bWaitOnce,      /* Optional: If false, will continue to scan for
                        new elements even after the first match is
                        found.
                    */
    iframeSelector  /* Optional: If set, identifies the iframe to
                        search.
                    */
) {
    var targetNodes, btargetsFound;

    if (typeof iframeSelector == "undefined")
        targetNodes     = $(selectorTxt);
    else
        targetNodes     = $(iframeSelector).contents ()
                                           .find (selectorTxt);

    if (targetNodes  &&  targetNodes.length > 0) {
        btargetsFound   = true;
        /*--- Found target node(s).  Go through each and act if they
            are new.
        */
        targetNodes.each ( function () {
            var jThis        = $(this);
            var alreadyFound = jThis.data ('alreadyFound')  ||  false;

            if (!alreadyFound) {
                //--- Call the payload function.
                var cancelFound     = actionFunction (jThis);
                if (cancelFound)
                    btargetsFound   = false;
                else
                    jThis.data ('alreadyFound', true);
            }
        } );
    }
    else {
        btargetsFound   = false;
    }

    //--- Get the timer-control variable for this selector.
    var controlObj      = waitForKeyElements.controlObj  ||  {};
    var controlKey      = selectorTxt.replace (/[^\w]/g, "_");
    var timeControl     = controlObj [controlKey];

    //--- Now set or clear the timer as appropriate.
    if (btargetsFound  &&  bWaitOnce  &&  timeControl) {
        //--- The only condition where we need to clear the timer.
        clearInterval (timeControl);
        delete controlObj [controlKey]
    }
    else {
        //--- Set a timer, if needed.
        if ( ! timeControl) {
            timeControl = setInterval ( function () {
                    waitForKeyElements (    selectorTxt,
                                            actionFunction,
                                            bWaitOnce,
                                            iframeSelector
                                        );
                },
                300
            );
            controlObj [controlKey] = timeControl;
        }
    }
    waitForKeyElements.controlObj   = controlObj;
}
waitForKeyElements ("textarea.cmty-post-textarea", word_count);
waitForKeyElements ("div.cmty-posting-box-container", add_counter);
function add_counter () {
$('.cmty-posting-box-container').append('<div class="display_count">0</div>');
}
function word_count () {
  var count = document.getElementsByClassName("cmty-post-textarea")[0].value.split(" ").length;
  document.getElementsByClassName('display_count')[0].innerHTML=count;
}
setInterval(word_count,1000);
// Tag Color Change
waitForKeyElements ("cmty-item-tag", tag_change);
function tag_change() {
var tag=document.getElementsByClassName("cmty-item-tag");
for (var i = 0; i < tag.length; i++) {
if (tag[i].textContent=='High quality') {
    tag[i].setAttribute("style", "background-color: green;");
}
else if (tag[i].textContent=='medium quality') {
    tag[i].setAttribute("style", "background-color: orange;");
}
else if (tag[i].textContent=='low quality') {
    tag[i].setAttribute("style", "background-color: red;");
}
}
};
setInterval(tag_change, 500);
// Accumulation Button
function accumulation() {
  $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code1 = '<input id="accumulation" type="button" onclick="check_accumulation()" value="Accumulation"/>';
      var code2= '</input>';
      $(this).html(text.replace('[accumulation]',code1).replace('[/accumulation]',code2));
  });
      $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code1 = '<input id="accumulation" type="button" onclick="check_accumulation()" value="Accumulation"/>';
      var code2= '</input>';
      $(this).html(text.replace('[accumulation]',code1).replace('[/accumulation]',code2));
  });
}
setInterval(accumulation, 3000);
// Blur
function blur() {
          $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code1 = '<span class=blur>';
      var code2= '</span>';
      $(this).html(text.replace('[blur]',code1).replace('[/blur]',code2));
  });
              $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code1 = '<span class=blur>';
      var code2= '</span>';
      $(this).html(text.replace('[blur]',code1).replace('[/blur]',code2));
  });
}
setInterval(blur, 3000);
// Overline
function o() {
          $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code1 = '<span class=o>';
      var code2= '</span>';
      $(this).html(text.replace('[o]',code1).replace('[/o]',code2));
  });
              $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code1 = '<span class=o>';
      var code2= '</span>';
      $(this).html(text.replace('[o]',code1).replace('[/o]',code2));
  });
}
setInterval(o, 3000);
// Nominate Button
function nominate() {
  $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code1 = '<input id="nominate" type="button" onclick="check_nominate()" value="Nominate"/>';
      var code2= '</input>';
      $(this).html(text.replace('[nominate]',code1).replace('[/nominate]',code2));
  });
      $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code1 = '<input id="nominate" type="button" onclick="check_nominate()" value="Nominate"/>';
      var code2= '</input>';
      $(this).html(text.replace('[nominate]',code1).replace('[/nominate]',code2));
  });
}
setInterval(nominate, 3000);
// Rankup Button
function rankup() {
  $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code1 = '<input id="rankup" type="button" onclick="check_rankup()" value="Rankup"/>';
      var code2= '</input>';
      $(this).html(text.replace('[rankup]',code1).replace('[/rankup]',code2));
  });
      $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code1 = '<input id="rankup" type="button" onclick="check_rankup()" value="Rankup"/>';
      var code2= '</input>';
      $(this).html(text.replace('[rankup]',code1).replace('[/rankup]',code2));
  });
}
setInterval(rankup, 3000);

// Helpers and Retired
$('head').append(`
<style>
a[href*="314159265"] {
color: blue;
}
a[href*="3141592657"] {
color: orange;
}
</style>
`);
// Cosmetics
waitForKeyElements ("div.cmty-phone-inline.cmty-post-top-inline", cosmetic);
function cosmetic() {
var test=document.getElementsByClassName("cmty-phone-inline cmty-post-top-inline");
for (var i = 0; i < test.length; i++) {
if (test[i].childNodes[1]==test[i].querySelectorAll("a[href='/community/user/254592']")[0]) {
/* Two next siblings is upvote, four next siblings is body */
    var body=test[i].nextSibling.nextSibling.nextSibling.nextSibling;
    body.setAttribute("style","background-color: pink;");
}
}};
setInterval(cosmetic, 3000);
// Accept Button
function accept() {
  $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code1 = '<input id="accept" type="button" onclick="check_accept(this)" value="Accept"/>';
      var code2= '</input>';
      $(this).html(text.replace('[accept]',code1).replace('[/accept]',code2));
  });
      $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code1 = '<input id="accept" type="button" onclick="check_accept(this)" value="Accept"/>';
      var code2= '</input>';
      $(this).html(text.replace('[accept]',code1).replace('[/accept]',code2));
  });
}
setInterval(accept, 3000);
// Thinking Emoji
function thinking() {
  $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code = '<div class="thinking" style="display: inline"><img class="bbcode_img" src="https://funkyimg.com/i/36qCo.png"></img></div>';
      $(this).html(text.replace(':thinking:',code));
  });
      $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code = '<div class="thinking" style="display: inline"><img class="bbcode_img" src="https://funkyimg.com/i/36qCo.png"></img></div>';
      $(this).html(text.replace(':thinking:',code));
  });
}
setInterval(thinking, 3000);
// Rolling Eyes Emoji
function rolling() {
  $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code = '<div class="rolling" style="display: inline"><img class="bbcode_img" src="https://funkyimg.com/i/36qCH.png"></img></div>';
      $(this).html(text.replace(':rolling:',code));
  });
      $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code = '<div class="rolling" style="display: inline"><img class="bbcode_img" src="https://funkyimg.com/i/36qCH.png"></img></div>';
      $(this).html(text.replace(':rolling:',code));
  });
}
setInterval(rolling, 3000);
// Distraught Emoji
function distraught() {
  $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code = '<div class="distraught" style="display: inline"><img class="bbcode_img" src="https://funkyimg.com/i/36qDa.png"></img></div>';
      $(this).html(text.replace(':distraught:',code));
  });
      $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code = '<div class="distraught" style="display: inline"><img class="bbcode_img" src="https://funkyimg.com/i/36qDa.png"></img></div>';
      $(this).html(text.replace(':distraught:',code));
  });
}
setInterval(distraught, 3000);
// xD Emoji
function xD() {
  $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code = '<div class="xD" style="display: inline"><img class="bbcode_img" src="https://funkyimg.com/i/36rje.png"></img></div>';
      $(this).html(text.replace(':xD:',code));
  });
      $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code = '<div class="xD" style="display: inline"><img class="bbcode_img" src="https://funkyimg.com/i/36rje.png"></img></div>';
      $(this).html(text.replace(':xD:',code));
  });
}
setInterval(xD, 3000);
// Facepalm Emoji
function facepalm() {
  $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code = '<div class="facepalm" style="display: inline"><img class="bbcode_img" src="https://funkyimg.com/i/36sfS.png"></img></div>';
      $(this).html(text.replace(':facepalm:',code));
  });
      $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code = '<div class="facepalm" style="display: inline"><img class="bbcode_img" src="https://funkyimg.com/i/36sfS.png"></img></div>';
      $(this).html(text.replace(':facepalm:',code));
  });
}
setInterval(facepalm, 3000);
// Reverse
function reverse() {
          $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code1 = '<span class="reverse">';
      var code2= '</span>';
      $(this).html(text.replace('[reverse]',code1).replace('[/reverse]',code2));
  });
              $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code1 = '<span class="reverse">';
      var code2= '</span>';
      $(this).html(text.replace('[reverse]',code1).replace('[/reverse]',code2));
  });
}
setInterval(reverse, 3000);
// Updown
function updown() {
          $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code1 = '<span class="updown">';
      var code2= '</span>';
      $(this).html(text.replace('[updown]',code1).replace('[/updown]',code2));
  });
              $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code1 = '<span class="updown">';
      var code2= '</span>';
      $(this).html(text.replace('[updown]',code1).replace('[/updown]',code2));
  });
}
setInterval(updown, 3000);
// Highlight
function hl() {
          $('.cmty-post-preview-text.aops-scroll-content').each(function() {
      var text = $(this).html();
      var code1 = '<span class="hl">';
      var code2= '</span>';
      $(this).html(text.replace('[hl]',code1).replace('[/hl]',code2));
  });
              $('.cmty-post-body').each(function() {
      var text = $(this).html();
      var code1 = '<span class="hl">';
      var code2= '</span>';
      $(this).html(text.replace('[hl]',code1).replace('[/hl]',code2));
  });
}
setInterval(hl, 3000);
