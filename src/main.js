MG.init = function () {
    MG.fog.init();
    MG.banner.init();
    MG.game.init();
    MG.hud.init();

    document.addEventListener('mousemove', function(evt){
            MG.game.onMouseMove(evt.clientX, evt.clientY);
        }, false);

    window.addEventListener('mousedown', MG.game.onMouseClick, false);

    var update = function (dt) {
        MG.fog.update(dt);
        MG.game.update(dt);
        MG.hud.update(dt);
        MG.banner.update(dt);


        MG.fog.updateDOM();
        MG.game.updateDOM();
        MG.hud.updateDOM();
        MG.banner.updateDOM();
    }

    var lastTick = 0;
    var zeroCounter = 0;
    var useFallback = false;

    if (!window.requestAnimationFrame) {
        useFallback = true;
    }

    var mainLoop = function(thisTick) {
        var dt;

        // Some browsers don't pass in a time.  If `thisTick` isn't set for
        //  more than a few frames fall back to `setTimeout`
        if (!thisTick) {
            zeroCounter += 1;
        } else {
            zeroCounter = 0;
        }
        if (zeroCounter > 10) {
            useFallback = true;
        }

        thisTick = thisTick || 0;
        if (useFallback) {
            dt = 1/30;
        } else {
            var dt = (thisTick - lastTick)/1000;
        }
        // pretend that the frame rate is actually higher if it drops below
        // 10fps in order to avoid wierdness
        if (dt > 1/10) {
            dt = 1/10;
        }

        lastTick = thisTick;

        update(dt);

        if (useFallback) {
            window.setTimeout(mainLoop, 1000 / 30);
        } else {
            window.requestAnimationFrame(mainLoop);
        }
    }

    mainLoop();
}

MG.init();
 function Start()
     {
     pauseEnabled = false;
     Time.timeScale = 1;
     AudioListener.volume = 1;
     Screen.showCursor = false;
     }
      
     function Update()
     {
         //check if pause button (escape key) is pressed
         if(Input.GetKeyDown("escape"))
         {
             //check if game is already paused
             if(pauseEnabled == true)
             {
                 //unpause the game
                 pauseEnabled = false;
                 Time.timeScale = 1;
                 AudioListener.volume = 1;
                 Screen.showCursor = false;
             }
          
             //else if game isn't paused, then pause it
              else if(pauseEnabled == false)
             {
                 pauseEnabled = true;
                 AudioListener.volume = 0;
                 Time.timeScale = 0;
                 Screen.showCursor = true;
             }
         }
     }//end Update function
     function OnGUI()
     {
      
         if(pauseEnabled == true)
         {
             if(GUI.Button(Rect(Screen.width /2 - 100,Screen.height /2+25 ,250,50), "Option"))
             {
                 Debug.Log("GUI.Button : Options : pressed");
             }
             if(GUI.Button(Rect(Screen.width /2 - 100,Screen.height /2-25 ,250,50), "Resume"))
             {
                 if(pauseEnabled == true)
                 {
                     //unpause the game
                     pauseEnabled = false;
                     Time.timeScale = 1;
                     Screen.showCursor = false;
                     AudioListener.volume = 1;
                 }
             }
         }
 }//end OnGUI function    
