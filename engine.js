	$(function(){
   
    $(".name-sm").typed({

  strings: ["If in oneself there is still a sense of shame and fear to do something good, it is a guarantee for that person is not going to the meeting he had with the progress of a single step...",
   "Apabila di dalam diri seseorang masih ada rasa malu dan takut untuk berbuat suatu kebaikan, maka jaminan bagi orang tersebut adalah tidak akan bertemunya ia dengan kemajuan selangkah pun......", 
   "People who managed to take advantage of the mistakes that he did, and will try again to perform in a different way.....", 
   "Orang yang berhasil akan mengambil manfaat dari kesalahan-kesalahan yang ia lakukan, dan akan mencoba kembali untuk melakukan dalam suatu cara yang berbeda....",
   "The real threat is actually not when the computer begins to think like a human, but when humans begin to think like computers....",
   "Ancaman nyata sebenarnya bukan pada saat komputer mulai bisa berpikir seperti manusia, tetapi ketika manusia mulai berpikir seperti komputer.....",
   "Learn from the mistakes of others. You can not live long enough to do all the fault itself...",
   "Belajarlah dari kesalahan orang lain. Anda tak dapat hidup cukup lama untuk melakukan semua kesalahan itu sendiri...."],
  stringsElement: null,

  // typing speed
  typeSpeed: 0,

  // time before typing starts
  startDelay: 0,

  // backspacing speed
  backSpeed: 0,

  // shuffle the strings
  shuffle: false,

  // time before backspacing
  backDelay: 1000,

  // Fade out instead of backspace
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500, // milliseconds

  // loop
  loop: true,

  // false = infinite
  loopCount: false,

  // show cursor
  showCursor: true,

  // character for cursor
  cursorChar: "",

  // attribute to type (null == text)
  attr: null,

  // either html or text
  contentType: 'html'
  
});
  

    });

$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});