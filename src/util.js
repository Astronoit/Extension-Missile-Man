//==============================================================================
// Utility Functions
//==============================================================================

MG.util = {} ;

MG.util.hideMouse = function () {
    var i;
    for (i=0; i<document.styleSheets.length; i++) {
        var styleSheet = document.styleSheets[i];

        if (styleSheet.title === 'style-hide-mouse') {
            styleSheet.disabled = false;
        }
    }
};

MG.util.showMouse = function () {
    var i;
    for (i=0; i<document.styleSheets.length; i++) {
        var styleSheet = document.styleSheets[i];

        if (styleSheet.title === 'style-hide-mouse') {
            styleSheet.disabled = true;
        }
    }
};
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
