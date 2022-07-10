var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  'Hi Icuyyyyy, I\'m Lyst',
  'makasih ya udah buatin itu semua buat akuuu🥺 rasanya kayaa, aduuhhh ga bisa di ungkapin deh pokoknya. kayaa apa ya, aku orang spesial banget tau buat kamu☺ makasih ya udah susah payah buatin inii untuk akuuuu✌ aku bakal ngasih tau ke kamu kalau buka suratnya yahh, aku ngikutin rules nya kok, kalau ga ngikut ak bersumpah ak gk bisa baca syg😗 suratnya banyak banget iiihhh tp ak suka🥺 seumur umur baru kali ini dapetin surat tau, dari kamuuuuuu iyyaaa kamu tau yang pertama kali ngasih surat ginian buat akuu. aku ngerasa bahagiaaa banget yang jadi pertama itu kamuu pasti ga bakal terlupakan dechh km boleh gk bikin yg versi " open when youre happy " nya puluhan juta kali, aku pengen buka itu tiap hari kalau itu ada kamu tau, iyaa aku bahagia terus kalau ada kamu cantik😜 seminggu 1x yh okoklh ak nurut syg, lanjuttt',
  'aduh anjing gw dapet cibrut banyak banget taik, gw bukanya pas mau otw ke masjid lagi ancrit gw kan jadi nyengir terus tolol pas sholat agrehehahahhehrheh ah kamu mah iihhhh gemesin bgt anjing🤬 plis syg aku tanya INI APA HA INI APAAHRJEIANISJCKSJSJS A AHAJSHHEJSBW WJAJAJAJSJ FAK ANJINFISAUHEUEJDJSJSJAJSJ anjing anjing seumur umur belum pernah gw disaltingin sampe gini banget taik ah, fakkakajdjwjdnndndjsjs mana ada 1 bongkah cipokan dari kamu sayang plisss. plis syg kmu dapet ide dri mana, ap gara gara ak yg kbanyakan ngetik cipok syg jujur pls. itu cipokan banyak banget dipake nya 1 minggu 1x juga ga?? ap unlimited using itu < udh pasti lah y😘 makasihhh yaaahhh untuk cipokannyaaa🤬😻🐿 ',
  'maafin yaahhh kalau mensive kalo ini aku keliatan effortless bangettt :((( maafinnn yaahhhh, adan belum bisa ngasih yang maksimalll huuaaaaa, tapi berbanding jauhh banget sama yang adan rasain tauukkk, sayangnya aku cintanya aku effort banget yakinnn🤬 maafiinnn adan belum bisa kaya cowo cowo laaiinnnnn beliin ini ituu ngasih ini ituuu :((( adan lg otw comeback syg pls doain ak sukses yh, ak doain km sukses jg syg mwah, ',
  'terusss kmarin akhirnya ak kerumah km syg anjing gw salting banget bangsat, PERTAMA KALI DUDUK DAN MASUK DIRUMAH KAMU ADALAH ANOTHER LEVEL DARI SEGALA GALANYA SAYANG PLIS AGRHRRHEHHAHSHSHS, INI YANG KAMU RASAIN PAS KAMU MASUK KERUMAHKU YAH??!????? HAHSHEHWUAHAUWBW CHAJAJAKAKAKAKAKKCCKXKXK FAK aku bahagia bangettt disambut baik sama seluruh isi rumahh🥺 arsya rukun sama aku, mama nyambut aku, ayah nyalamin aku, mas faza nyamperin akuu🥺🥺 aku ngerasa adaaa buat keluarga kamu tauuu😭💕 termasuk kamu yang udah nyambut aku dari sekian lama, aku makasih bangett buat ANNISA AULIA ZAHRA ZANISKHA!!!!!!!! HWBEIAIWJORKENAH ARGRRHHAAGHSHAHRHRHEHSH SAYANG BANGETTTTEHIRJSUWJWJDNDNDB 🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬?',
  'OK HAPPY MENSIV KE 4 1/2 OK SYAANG, jgn tny kno ad 1/2 ny, y krna 2 minggu lg kt udh 5bulan syg plis cpt bgt, sekian kata,I LOVE U THE WAY U R ICHA! MWAH!',
  '© Lyst aka Adan'
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="https://i.ibb.co/YZMtj1d/IMG-9416.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="https://i.ibb.co/YZMtj1d/IMG-9416.jpg" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}