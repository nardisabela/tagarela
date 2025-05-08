const sendSound = new Audio('sounds/send.mp3');
const receiveSound = new Audio('sounds/receive.mp3');

function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value.trim();
  if (!message) return;

  appendMessage("You", message);
  sendSound.play(); // 🔊 Play send sound
  input.value = "";

  const botResponse = getBotResponse(message);
  setTimeout(() => {
    appendMessage("Tagarela", botResponse);
    receiveSound.play(); // 🔉 Play receive sound
  }, 500);
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById('chat-box');
  const msg = document.createElement('div');
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  const msg = input.toLowerCase();
  if (msg.includes("hello")) return "Hello there! 👋";
  if (msg.includes("how are you")) return "I'm just a bunch of code, but I feel great! 😊";
  if (msg.includes("bye")) return "Goodbye! Come back soon.";
  if (msg.includes("who are you")) return "I am Tagarela the ChatBot! Feel free to ask me things - but please understand that I am an young ChatBot - I don't know a lot! 😊";
  if (msg.includes("tagarela")) return "Tagarela means 'chatty' in Brazilian Portuguese! My mom gave me this name because I am a very Chatty Bot! 😊";
  if (msg.includes("capital")) return "The capital of Brazil is Brasilia! Its architect, Oscar Niemeyer, created it so it would look like a plane.";
  if (msg.includes("discovered")) return "Brazil was discovered by the Portuguese in 1500, although the natives were already there for a long time.";
  if (msg.includes("food")) return "Some popular Brazilian food are coxinha, pão de queijo and brigadeiro";
  if (msg.includes("brigadeiro")) return "The recipe of brigadeiro is: a can of condensed milk, 5 spoonfuls of chocolate powder and 1 spoonful of butter. You mix it well in a pan, using the stove, until it looks like a cream. After it is cold, you roll little balls of the mix, and sprinkle them with chocolate bits.";
  if (msg.includes("drink")) return "The most popular Brazilian beverages are: guaraná, cachaça and café.";
  if (msg.includes("carnaval")) return "Brazilian people love Carnaval. Its their most popular holiday!";
  if (msg.includes("football" || "soccer")) return "Brazilian people love soccer. It is their most popular sport!";
  if (msg.includes("portugues" || "portuguese" || "português")) return "Eu falo um pouco de português! Olá, como vai?";
  if (msg.includes("brazil" || "brasil")) return "There are many theories about why Brazil is called Brazil, but my favorite one is that it comes from the tree Pau-Brasil.";
  if (msg.includes("where")) return "Brazil is located in South America - it is very hard not to see it in the map!";
  if (msg.includes("thank" || "obrigad")) return "De nada, my friend!";
  return "Hmm... I don't quite understand that yet. 🤔";
}

window.onload = function() {
  appendMessage("Tagarela", "Hello, I am Tagarela! Ask me something about Brazil.");
};