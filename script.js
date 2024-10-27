// JavaScript for handling button interactions, generating responses, animating the answer-box, and playing background music

document.addEventListener("DOMContentLoaded", () => {
  const inspireMe = [
    "The horizon is only the beginning for those who dare to look beyond it.",
    "Success isn’t in never falling, but in how you rise after each fall.",
    "The smallest spark can ignite the brightest flame if you believe in its power.",
    "Dreams become reality when you stop waiting for tomorrow and act today.",
    "Your greatest strength lies in your ability to keep moving, even when the path is unclear.",
    "The power of change begins with the courage to take the first step.",
    "Happiness is not found; it’s created with every choice you make.",
    "True growth begins the moment you embrace the challenges you fear the most.",
    "In the quiet moments of doubt, listen closely—your heart already knows the way.",
    "Light shines brightest through the cracks of a life well lived.",
    "The journey is long, but it is your steps that make it worth traveling.",
    "You were born to do more than just survive; you were meant to thrive.",
    "Strength is not in what you can carry, but in what you choose to let go.",
    "Every day is a new chance to write the story you’ve always wanted to live.",
    "You are never as small as the obstacles that stand in your way.",
    "Your potential is only limited by the boundaries you place on your own dreams.",
    "In every ending, there is a seed for a new beginning—nurture it.",
    "Life rewards those who remain open to growth, even in the face of adversity.",
    "Hope is the bridge that turns impossibility into reality.",
    "The world changes when you decide to show up as your truest self.",
    "Failure is not the end—it's just a new way to see the path forward.",
    "The greatest lessons often come from the failures we feared the most.",
    "Changing your perspective on failure turns every setback into a stepping stone.",
    "Failure is simply success in progress, seen from a different angle.",
    "When you shift your focus, failure becomes the fuel for growth.",
    "What feels like a dead end is often just a curve in the road to success.",
    "Failure is a mirror, showing us where we need to grow, not where we need to stop.",
    "Perspective transforms failure from a loss into a powerful teacher.",
    "Sometimes, the only thing standing between failure and success is how you choose to see it.",
    "Every failure holds a hidden gift, but it’s your perspective that unlocks it.",
    "Success is the art of seeing failure not as a defeat, but as an opportunity.",
    "With the right perspective, failure becomes a step toward mastery, not the end of the road.",
    "Your failures do not define you—your ability to see beyond them does.",
    "When you embrace failure as part of the journey, you free yourself to keep moving forward.",
    "The distance between failure and breakthrough is often just a shift in how you see the challenge.",
    "Failure is only final if you see it that way—change your perspective, and the journey continues.",
    "In failure lies the blueprint for success; it all depends on how you interpret the plans.",
    "A change in perspective turns stumbling blocks into building blocks.",
    "Failure is never wasted if it opens your eyes to new possibilities.",
    "The power of failure lies in how you choose to see it: as a barrier or as a bridge.",
  ];
  const adviseMe = [
    "Take time to know yourself; the most important relationship you have is with you.",
    "Don’t be afraid to say no—boundaries are essential to a balanced life.",
    "Focus on progress, not perfection; every step forward is growth.",
    "Choose kindness, even when it’s difficult—it’s a strength, not a weakness.",
    "Listen twice as much as you speak; understanding others is a path to wisdom.",
    "Invest in experiences, not things; memories outlast material possessions.",
    "Learn to forgive—holding onto anger only weighs you down.",
    "Trust your instincts, but always keep a mind open to learning.",
    "Be present; time is one thing you can never get back.",
    "Surround yourself with people who inspire growth, not comfort.",
    "Face your fears; what you avoid controls you.",
    "Set goals, but be flexible—the journey is often more valuable than the destination.",
    "Take care of your body; it’s the only place you have to live.",
    "Be kind to yourself—self-compassion is just as important as self-discipline.",
    "Do not compare your path to others; each journey is unique.",
    "Make time for quiet reflection—it’s the best way to understand what truly matters.",
    "Let go of what you can’t control; peace often lies in surrender.",
    "Remember, consistency beats intensity over time.",
    "Save for the future, but remember to live in the present.",
    "Learn to ask for help; strength is found in recognizing your limits.",
    "Read often; knowledge is a lifelong gift that broadens your perspective.",
    "Laugh often and don’t take yourself too seriously—it’s the best medicine for stress.",
    "Embrace change; it’s the only constant, and it brings new opportunities.",
    "Cherish your relationships; people are more valuable than achievements.",
    "Learn to listen to silence—it speaks volumes in moments of uncertainty.",
    "Never stop learning; curiosity keeps you young at heart.",
    "Treat setbacks as lessons, not failures; they’re part of the process.",
    "Give without expecting anything in return—generosity is a gift to yourself.",
    "Spend more time with those who make you feel at ease and at peace.",
    "Appreciate the little things; happiness is often found in the simple moments.",
    "Bitcoin is the revolution that proves true power belongs to those who dare to decentralize.",
    "In a world of walls, Bitcoin builds bridges of financial freedom.",
    "The future of wealth isn’t in banks—it’s in the hands of those who understand Bitcoin.",
    "Bitcoin is more than a currency; it's a movement toward true economic independence.",
    "Owning Bitcoin is owning the future, one block at a time.",
    "Bitcoin is the beacon that shines where traditional finance fears to tread.",
    "Every Bitcoin you hold is a vote for a freer, more transparent world.",
    "The true value of Bitcoin isn’t in its price; it’s in the change it creates.",
    "Bitcoin is not just digital gold, it’s a key to unlock financial empowerment for all.",
    "Where traditional systems falter, Bitcoin offers the promise of something better.",
    "Bitcoin is the code that rewrites the rules of wealth for everyone, everywhere.",
    "The rise of Bitcoin signals the fall of the need for middlemen.",
    "In Bitcoin, we trust the code, not the institution.",
    "Bitcoin is the power shift from the few to the many.",
    "The strength of Bitcoin lies in the belief that anyone can own their own future.",
    "With Bitcoin, financial freedom is no longer a dream but a decentralized reality.",
    "Bitcoin isn’t just a currency; it's a declaration of independence from the old guard.",
    "To own Bitcoin is to own a stake in the next chapter of human innovation.",
    "Bitcoin proves that true value doesn’t need permission—it only needs belief.",
    "The beauty of Bitcoin is that it belongs to everyone, and answers to no one.",
  ];
  const degradeMe = [
    "I’d explain it to you, but I left my crayons at home.",
    "I envy everyone who hasn’t met you.",
    "You're not stupid; you just have bad luck thinking.",
    "If I threw a stick, you’d leave, right?",
    "You bring everyone so much joy when you leave the room.",
    "I'd agree with you, but then we'd both be wrong.",
    "Your secrets are always safe with me—I never listen anyway.",
    "You’re the reason shampoo has instructions.",
    "I'd offer you a comeback, but it looks like nature already did.",
    "Somewhere, a tree is working hard to replace the oxygen you waste.",
    "Are you always this ignorant, or are you making a special effort today?",
    "If laughter is the best medicine, your face must be curing the world.",
    "You're about as useful as a screen door on a submarine.",
    "I would insult you, but nature already did a great job.",
    "I’d tell you to go to hell, but you’d probably just get lost again.",
    "You’re like a software update: nobody wants you, but we’re stuck with you.",
    "You’re proof that evolution can go in reverse.",
    "Is your drama elective, or are you just naturally this tragic?",
    "Your brain has two sides: ‘left’ and ‘right.’ On the left, there’s nothing right, and on the right, there’s nothing left.",
    "I’d love to insult you, but then you’d just feel more important than you are.",
    "You’re not the dumbest person on the planet, but you better hope they don’t die.",
    "I’d ask how old you are, but I’d rather not spend 20 minutes watching you count.",
    "You’re like a cloud—when you disappear, it’s a beautiful day.",
    "You have an entire life to be an idiot; why not take a day off?",
    "I’d explain it to you, but I’m not fluent in ‘stupid.’",
    "I see you’ve set aside this special time to humiliate yourself in public.",
    "You’re the human version of a participation trophy.",
    "Some people bring happiness wherever they go; you bring happiness whenever you go.",
    "You’re a gray sprinkle on a rainbow cupcake.",
    "The last time I saw something like you, I flushed it.",
    "If ignorance is bliss, you must be the happiest person alive.",
    "You couldn’t pour water out of a boot with instructions on the heel.",
    "I’ve seen better arguments in a fortune cookie.",
    "Your mind is like a steel trap—rusty and illegal in most states.",
    "You have the charisma of a damp rag.",
    "You’re about as sharp as a marble.",
    "You’re not even the worst thing in this room, but that’s only because I'm here too.",
    "I’d give you a nasty look, but you already have one.",
    "Your life is a shining example of what happens when you ignore red flags.",
    "You remind me of a software bug: annoying, everywhere, and no one knows how to fix you.",
    "You’re like a broken pencil—completely pointless.",
  ];

  let inspireMeCopy = [...inspireMe];
  let adviseMeCopy = [...adviseMe];
  let degradeMeCopy = [...degradeMe];

  const erby = document.getElementById("erby");
  const answerBox = document.getElementById("answer-box");
  const buttons = document.querySelectorAll(".option-btn");
  const soundIcon = document.getElementById("sound");
  const audio = new Audio("music/music.wav");
  audio.loop = true;
  let isPlaying = false;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => (btn.disabled = true));
      buttons.forEach((btn) => (btn.style = "border: 1px solid #CAC9CD"));
      if (button.id === "inspire") {
        erby.src = "images/Erby.png";
        handleResponse(inspireMeCopy, inspireMe);
      } else if (button.id === "Advise") {
        erby.src = "images/Erby.png";
        handleResponse(adviseMeCopy, adviseMe);
      } else if (button.id === "Degrade") {
        erby.src = "images/meanErby.png";
        handleResponse(degradeMeCopy, degradeMe);
      } else if (button.id === "yes/no") {
        erby.src = "images/Erby.png";
        generateYesNo();
      } else if (button.id === "luckyNum") {
        erby.src = "images/Erby.png";
        generateLuckyNumber();
      }
    });
  });

  soundIcon.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      soundIcon.src = "images/speakerOff.svg";
    } else {
      audio.play();
      soundIcon.src = "images/speaker.svg";
    }
    isPlaying = !isPlaying;
  });

  function handleResponse(copyArray, originalArray) {
    showThinkingAnimation();
    setTimeout(() => {
      if (copyArray.length === 0) {
        // Instead of reassigning, push all elements from originalArray into copyArray
        copyArray.push(...originalArray);
      }
      const randomIndex = Math.floor(Math.random() * copyArray.length);
      const response = copyArray.splice(randomIndex, 1)[0];
      typeOutMessage(response);
    }, 2000);
  }

  function showThinkingAnimation() {
    answerBox.innerHTML =
      "<p>Thinking<span class='dot'>.</span><span class='dot'>.</span><span class='dot'>.</span></p>";
    let dots = 0;
    const interval = setInterval(() => {
      dots = (dots + 1) % 4;
      const dotElements = answerBox.querySelectorAll(".dot");
      dotElements.forEach((dot, index) => {
        dot.style.opacity = index < dots ? 1 : 0;
      });
    }, 500);
    setTimeout(() => clearInterval(interval), 2000);
  }

  function typeOutMessage(message) {
    answerBox.innerHTML = " ";
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < message.length) {
        answerBox.innerHTML += message[index];
        index++;
      } else {
        clearInterval(typingInterval);
        buttons.forEach((btn) => (btn.disabled = false));
        buttons.forEach(
          (btn) => (btn.style = "border: 1px solid var(--mainColor)")
        );
      }
    }, 50);
  }

  function generateYesNo() {
    const responses = [
      "Yes",
      "No",
      "Yes, but proceed with caution",
      "No, that would not be wise",
      "Absolutely",
      "Definitely not",
      "Maybe",
      "It's uncertain",
    ];
    showThinkingAnimation();
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * responses.length);
      typeOutMessage(responses[randomIndex]);
    }, 2000);
  }

  function generateLuckyNumber() {
    showThinkingAnimation();
    setTimeout(() => {
      const luckyNumber = Math.floor(Math.random() * 69) + 1;
      typeOutMessage(`Your lucky number is: ${luckyNumber}`);
    }, 2000);
  }
});
