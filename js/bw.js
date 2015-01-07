$(document).ready(function () {
  $('button').click(function () {
    $('button').removeClass('selected');
    $(this).addClass('selected');
  })

})

//Visual Arts

var artTag;

if (document.querySelectorAll) {
  visTag = document.querySelectorAll('.art');
}


$(function(){
  $('#Arts').click(function (){
    $('.all').addClass('bw');
    $('.all').removeClass('bor');
    console.log("here");
    console.log(visTag);
    $(visTag).removeClass('bw');
    $(visTag).addClass('bor');

  });
});



//Computer Science

var progTag;

if (document.querySelectorAll) {
  progTag = document.querySelectorAll('.prog');
}


$(function(){
  $('#Prog').click(function (){
    $('.all').addClass('bw');
    $('.all').removeClass('bor');
    console.log("here");
    console.log(progTag);
    $(progTag).removeClass('bw');
    $(progTag).addClass('bor');
    ;
  });
});



//Education


var edTag;

if (document.querySelectorAll) {
  edTag = document.querySelectorAll('.ed');
}


$(function(){
  $('#Ed').click(function (){
    $('.all').addClass('bw');
    $('.all').removeClass('bor');
    console.log("here");
    console.log(edTag);
    $(edTag).removeClass('bw');
    $(edTag).addClass('bor');
  });
});

//Communication


var comTag;

if (document.querySelectorAll) {
  comTag = document.querySelectorAll('.com');
}


$(function(){
  $('#Com').click(function (){
    $('.all').addClass('bw');
    $('.all').removeClass('bor');
    console.log("here");
    console.log(comTag);
    $(comTag).removeClass('bw');
    $(comTag).addClass('bor');
  });
});

//Entrepeneurship


var entreTag;

if (document.querySelectorAll) {
  entreTag = document.querySelectorAll('.entre');
}


$(function(){
  $('#Entre').click(function (){
    $('.all').addClass('bw');
    $('.all').removeClass('bor');
    console.log("here");
    console.log(entreTag);
    $(entreTag).removeClass('bw');
    $(entreTag).addClass('bor');
  });
});

// Economy and Politics


var SocScTag;

if (document.querySelectorAll) {
  econPTag = document.querySelectorAll('.soc');
}


$(function(){
  $('#SocSc').click(function (){
    $('.all').addClass('bw');
    $('.all').removeClass('bor');
    console.log("here");
    console.log(econTag);
    $(econTag).removeClass('bw');
    $(econTag).addClass('bor');
  });
});


//Literature


var litTag;

if (document.querySelectorAll) {
  litTag = document.querySelectorAll('.lit');
}


$(function(){
  $('#Lit').click(function (){
    $('.all').addClass('bw');
    $('.all').removeClass('bor');
    console.log("here");
    console.log(litTag);
    $(litTag).removeClass('bw');
    $(litTag).addClass('bor');
  });
});

//History


var hisTag;

if (document.querySelectorAll) {
  hisTag = document.querySelectorAll('.his');
}


$(function(){
  $('#His').click(function (){
    $('.all').addClass('bw');
    $('.all').removeClass('bor');
    console.log("here");
    console.log(hisTag);
    $(hisTag).removeClass('bw');
    $(hisTag).addClass('bor');
  });
});

//Philospphy


var philTag;

if (document.querySelectorAll) {
  philTag = document.querySelectorAll('.phil');
}


$(function(){
  $('#Phil').click(function (){
    $('.all').addClass('bw');
    $('.all').removeClass('bor');
    console.log("here");
    console.log(philTag);
    $(philTag).removeClass('bw');
    $(philTag).addClass('bor');
  });
});

//Natural Sciences

var natTag;

if (document.querySelectorAll) {
  natTag = document.querySelectorAll('.nat');
}


$(function(){
  $('#Nat').click(function (){
    $('.all').addClass('bw');
    $('.all').removeClass('bor');
    console.log("here");
    console.log(natTag);
    $(natTag).removeClass('bw');
    $(natTag).addClass('bor');
  });

});

