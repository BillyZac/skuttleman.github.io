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
  $('.picText').mouseenter(function() {
      $('#blurb' + $(this).attr('id')).fadeIn('slow');
      $('#blurb' + $(this).attr('id')).removeClass('invisible');
  });


  // Gif Hover
  $('.feelingPic').hover(function() {
      $('.hiddenText').addClass('invisible');
      $('#' + $(this).attr('id') + 'Hover').removeClass('invisible');
    }, function() {
      $('.hiddenText').addClass('invisible');
  });
}

$(document).ready(main);