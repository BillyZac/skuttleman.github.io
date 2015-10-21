function resizit() {
  $('#backgroundPic').css({ top: ((window.innerHeight - $('#backgroundPic').height()) / 2),
    left: ((window.innerWidth - $('#backgroundPic').width()) / 2) });
  $('#popup').css({ width: window.innerWidth - 40, height: window.innerHeight - 40 });
  $('#popupClose').css({ left: window.innerWidth - 40 - $('#popupClose').width() })
}


function main()
{
  // Audio Library
  var songs = {};
  songs['The Next Step'] = { songTitle: "The Next Step", albumTitle: "Story of My Life",
                           src: "music/TheNextStep.mp3", albumArt: "music/story-of-my-life.jpg",
                           link: "https://itunes.apple.com/us/album/story-of-my-life/id444023700" };
  songs['Sworn to Secrecy'] = { songTitle: "Sworn to Secrecy", albumTitle: "Slave to Time",
                           src: "music/SwornToSecrecy.mp3", albumArt: "music/slave-to-time.jpg",
                           link: "https://itunes.apple.com/us/album/slave-to-time/id276812547" };
  songs['Let\'s Put the Past Back Together'] = { songTitle: "Let's Put the Past Back Together", albumTitle: "Story of My Life",
                           src: "music/LetsPutThePastBackTogether.mp3", albumArt: "music/story-of-my-life.jpg",
                           link: "https://itunes.apple.com/us/album/story-of-my-life/id444023700" };
  songs['Morning After Pill'] = { songTitle: "Morning After Pill", albumTitle: "Slave to Time",
                           src: "music/MorningAfterPill.mp3", albumArt: "music/slave-to-time.jpg",
                           link: "https://itunes.apple.com/us/album/slave-to-time/id276812547" };
  var firstsong = true;
  for (var song in songs) {
    $('#songList').append('<li class="dotless song' + (firstsong ? ' selected' : '') + '">' + songs[song].songTitle + '</li>');
    if (firstsong) $('#audioControls').append('<source src="' + songs[song].src + '" type="audio/mpeg" />');
    firstsong = false;
  }

  var currentSong = -1;
  function imgFile(file, newnum)
  {
    return file.substr(0, file.length - 5) + newnum + ".png";
  }
  function updateAlbumDetails(song)
  {
    $('#albumArt').attr('src', songs[song]['albumArt']);
    $('#albumTitle').text(songs[song]['albumTitle']);
    $('#linkItunes').attr('href', songs[song]['link']);
  }


  // Audio Controls
  if ($('audio')[0] != null)
  {
    $('audio')[0].onplaying = function() {
      $('#songList').removeClass('invisible');
      $('#albumDetails').removeClass('invisible');
      updateAlbumDetails($('.song.selected').text());
    };
    $('.song').click(function() {
      if (!$(this).hasClass('selected'))
      {
        audioControl = $('audio')[0];
        $('.song').removeClass('selected');
        $(this).addClass('selected');
        audioControl.src = songs[$('.song.selected').text()]['src'];
        updateAlbumDetails($('.song.selected').text());
        audioControl.play();
      }
    });
  }

  
  // Image MouseEnter
  function timeout(e, a, off) {
    $(e).css('color', 'rgba(224,255,255,' + a + ')');
    if ((off < 0.0 && a > 0.0) || (off > 0.0 && a < 1.0)) window.setTimeout(timeout, 75, e, a + off, off);
  }
  $('.blurbtastic').hover(function() {
    if ($('#blurb' + $(this).attr('id')).position()["left"] <= -73) {
      $('#blurb' + $(this).attr('id')).animate({ left: '0px', opacity: 1.0 }, 750);
      window.setTimeout(timeout, -450, this, 1.0, -0.15);
    }
  }, function() {
    $('#blurb' + $(this).attr('id')).animate( { left: '-500px', opacity: 0.0 }, 750);
    window.setTimeout(timeout, 50, this, 0.0, 0.15);
  });


  // Gif Hover
  $('.feelingPic').hover(function() {
      $('.hiddenText').addClass('invisible');
      $('#' + $(this).attr('id') + 'Hover').removeClass('invisible');
    }, function() {
      $('.hiddenText').addClass('invisible');
  });


  // popup Functionality
  var poptext = ["Click on this annoying pop-up ad!", "Stuff you don't want or need. BUY NOW!", "Visiting this page for a specific reason? Buy something unrelated!"];
  var popcount = 0;
  function showpopup() {
    if (popcount < poptext.length) {
      $('#popupText').text(poptext[popcount]);
      $('#popup').removeClass('invisible');
      resizit();
      popcount ++;
    }
  }
  //window.setTimeout(showpopup, 5000);
  $('#popupClose').hover(function() { $(this).attr('src', 'pics/close2.png'); },
    function() { $(this).attr('src',  'pics/close1.png'); });
  $('#popupClose').click(function() {
    $('#popup').addClass('invisible');
    window.setTimeout(showpopup, 2000);
  });



  resizit();
}

$(document).ready(main);
$(window).resize(resizit);