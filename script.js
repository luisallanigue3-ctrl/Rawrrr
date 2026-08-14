function sayYes() {

  const card =
    document.getElementById("card");

  const surprise =
    document.getElementById("surprise");

  const song =
    document.getElementById("song");

  const finalHeart =
    document.getElementById("finalHeart");

  const finalMessage =
    document.getElementById("finalMessage");

  const replay =
    document.getElementById("replay");

  const goodbye =
    document.getElementById("goodbye");

  const message =
    document.getElementById("message");


  /* =================================
     RESET EVERYTHING
     ================================= */

  message.classList.remove("show");

  finalHeart.classList.remove("show");

  finalMessage.classList.remove("show");

  replay.classList.remove("show");

  goodbye.classList.remove("show");


  surprise.classList.remove(
    "scene1",
    "scene2",
    "scene3",
    "scene4",
    "scene5"
  );


  /* =================================
     HIDE CARD
     ================================= */

  card.classList.add("vanish");


  /* =================================
     START
     ================================= */

  setTimeout(() => {

    surprise.classList.add("show");

    surprise.classList.add("scene1");


    /* =================================
       MUSIC
       ================================= */

    song.currentTime = 0;

    song.volume = 0.7;

    song.play().catch(error => {

      console.log(
        "Audio could not start:",
        error
      );

    });


    /* =================================
       BACKGROUND CHANGES
       ================================= */

    setTimeout(() => {

      surprise.classList.remove("scene1");

      surprise.classList.add("scene2");

    }, 8000);


    setTimeout(() => {

      surprise.classList.remove("scene2");

      surprise.classList.add("scene3");

    }, 16000);


    setTimeout(() => {

      surprise.classList.remove("scene3");

      surprise.classList.add("scene4");

    }, 24000);


    /* =================================
       MESSAGES
       ================================= */

    showMessage(
      "I know you didn't really ask for this.",
      1200,
      3500
    );

    showMessage(
      "But I wanted to make something just for you.",
      4300,
      6600
    );

    showMessage(
      "I don't say it as much as I should.",
      7400,
      9500
    );

    showMessage(
      "But you genuinely make my days better.",
      10300,
      13000
    );

    showMessage(
      "Even in ways you don't mean to.",
      13800,
      16000
    );

    showMessage(
      "You always find a way to make me smile.",
      16800,
      19500
    );

    showMessage(
      "I don't need a reason to appreciate you.",
      20500,
      23000
    );

    showMessage(
      "I just do.",
      24000,
      26000
    );

    showMessage(
      "So...",
      27000,
      29500
    );

    showMessage(
      "Thank you for being you.",
      30000,
      33000
    );

    showMessage(
      "Thank you for always bringing me up, even on the most draining days.",
      33800,
      37500
    );


    /* =================================
       FINAL HEART
       ================================= */

    setTimeout(() => {

      finalHeart.classList.add("show");

    }, 38500);


    /* =================================
       FINAL MESSAGE
       ================================= */

    setTimeout(() => {

      finalMessage.classList.add("show");

    }, 40500);


    /* =================================
       REPLAY QUESTION
       ================================= */

    setTimeout(() => {

      replay.classList.add("show");

    }, 44000);


  }, 900);
}


/* =================================
   SHOW MESSAGE
   ================================= */

function showMessage(
  text,
  startTime,
  endTime
) {

  setTimeout(() => {

    const message =
      document.getElementById("message");


    message.textContent =
      text;


    message.classList.remove(
      "show"
    );


    void message.offsetWidth;


    message.classList.add(
      "show"
    );

  }, startTime);


  setTimeout(() => {

    const message =
      document.getElementById("message");


    message.classList.remove(
      "show"
    );

  }, endTime);
}


/* =================================
   RESTART
   ================================= */

function restart() {

  const card =
    document.getElementById("card");

  const surprise =
    document.getElementById("surprise");

  const song =
    document.getElementById("song");

  const finalHeart =
    document.getElementById("finalHeart");

  const finalMessage =
    document.getElementById("finalMessage");

  const replay =
    document.getElementById("replay");

  const goodbye =
    document.getElementById("goodbye");

  const message =
    document.getElementById("message");


  /* Stop music */

  song.pause();

  song.currentTime = 0;


  /* Hide ending */

  finalHeart.classList.remove("show");

  finalMessage.classList.remove("show");

  replay.classList.remove("show");

  goodbye.classList.remove("show");

  message.classList.remove("show");


  /* Reset background */

  surprise.classList.remove(
    "scene1",
    "scene2",
    "scene3",
    "scene4",
    "scene5"
  );


  /* Hide surprise */

  surprise.classList.remove("show");


  /* Bring card back */

  card.classList.remove("vanish");


  /* Force a clean reset */

  void card.offsetWidth;
}


/* =================================
   NO BUTTON
   ================================= */

function finish() {

  const surprise =
    document.getElementById("surprise");

  const finalHeart =
    document.getElementById("finalHeart");

  const finalMessage =
    document.getElementById("finalMessage");

  const replay =
    document.getElementById("replay");

  const goodbye =
    document.getElementById("goodbye");


  /* Hide previous ending */

  finalHeart.classList.remove("show");

  finalMessage.classList.remove("show");

  replay.classList.remove("show");


  /* Change the entire atmosphere */

  surprise.classList.remove(
    "scene4"
  );

  surprise.classList.add(
    "scene5"
  );


  /* Show final message */

  setTimeout(() => {

    goodbye.classList.add("show");

  }, 1200);
}
