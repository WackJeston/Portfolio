new TypeIt("#typing", {
  speed: 50,
  waitUntilVisible: true,
  loop: true,
  startDelay: 500
}).type("I'm a Web Developer!", {
  delay: 500
}).delete(1).type(", in training...", {
  delay: 2000
}).delete(35, {
  delay: 300
}).go();
