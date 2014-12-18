$(document).ready(function(){
      $("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "HELP!!!",
            m4v: "vid/GizmoRun.mp4",
            ogg: "vid/GizmoRun.ogg",
            poster: "img/Gizmo.jpg"
          });
        },
        cssSelectorAncestor: "#jp_container_1",
        swfPath: "js",
        supplied: "m4v, ogg",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
      });
    });

      $("#jquery_jplayer_2").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Gremlins!",
            m4a: "aud/Gremlins.m4a",
            ogg: "aud/Gremlins.ogg"
          });
        },
        cssSelectorAncestor: "#jp_container_2",
        swfPath: "/js",
        supplied: "m4a, ogg",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
      });
    });
