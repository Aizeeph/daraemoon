const reasons = [
  "You make ordinary days feel special.", "Your laugh is seriously contagious.", "You care so deeply about people.", "You are effortlessly, beautifully you.", "You always know how to make me smile.", "You have the softest, kindest heart.", "You make every memory more fun.", "You are stronger than you give yourself credit for.", "You bring your own kind of sunshine.", "You listen, even to my longest stories.", "You have the cutest little quirks.", "You make people feel welcome.", "You are brave enough to be yourself.", "You make friendship feel easy and safe.", "You deserve every good thing coming your way.", "You have a glow that is all your own.", "You make the world a little lovelier.", "You're my favorite person to call Daraemoon."
];
const compliments = [
  "You have the kind of heart people feel lucky to know.", "You are someone's favorite person—and definitely mine.", "Your smile deserves its own little fan club.", "You make being a good friend look so natural.", "You are lovely in ways that have nothing to do with how you look.", "The world got a little softer the day you were born.", "You are doing better than you think, and I'm proud of you.", "Being your friend is one of my favorite things.", "You are the main character, birthday girl.", "Don't forget: you are so, so loved."
];

const grid = document.querySelector('.reason-grid');
if (grid) {
  reasons.forEach((text, index) => {
    const card = document.createElement('button');
    card.className = 'reason';
    card.type = 'button';
    card.innerHTML = `<span class="number">NO. ${String(index + 1).padStart(2, '0')}</span><span class="tap">Tap to open ♡</span><span class="hidden-text"></span>`;
    card.querySelector('.hidden-text').textContent = text;
    card.addEventListener('click', () => {
      card.classList.toggle('revealed');
      if (card.classList.contains('revealed')) popHearts(card, 1);
    });
    grid.appendChild(card);
  });
}

const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

const complimentButton = document.getElementById('complimentButton');
if (complimentButton) {
  complimentButton.addEventListener('click', () => {
    const text = document.getElementById('complimentText');
    let next = compliments[Math.floor(Math.random() * compliments.length)];
    if (text && text.textContent === next) next = compliments[(compliments.indexOf(next) + 1) % compliments.length];
    if (text) text.textContent = next;
    popHearts(complimentButton, 3);
  });
}

function popHeart(origin) {
  if (!origin) return;
  const rect = origin.getBoundingClientRect();
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = ['♡', '♥', '✧'][Math.floor(Math.random() * 3)];
  heart.style.left = `${rect.left + rect.width * Math.random()}px`;
  heart.style.top = `${rect.top + rect.height * .45}px`;
  heart.style.setProperty('--drift', `${Math.random() * 90 - 45}px`);
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1800);
}
function popHearts(origin, count = 8) {
  for (let i = 0; i < count; i++) setTimeout(() => popHeart(origin), i * 90);
}

const modal = document.getElementById('mediaModal');
const modalContent = document.getElementById('modalContent');
const closeButton = document.getElementById('modalClose');
function closeModal() {
  if (!modal || !modalContent) return;
  modal.classList.remove('show');
  modalContent.replaceChildren();
}

document.querySelectorAll('.memory-card').forEach((card) => {
  card.addEventListener('click', () => {
    if (!modal || !modalContent) return;
    const source = card.dataset.media;
    const kind = card.dataset.kind;
    const title = card.querySelector('strong')?.textContent || 'A special memory';
    modalContent.replaceChildren();
    if (kind === 'video') {
      const video = document.createElement('video');
      video.src = source;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      modalContent.appendChild(video);
    } else {
      const image = document.createElement('img');
      image.src = source;
      image.alt = title;
      image.onerror = () => {
        const note = document.createElement('p');
        note.style.cssText = 'padding:30px;color:#593b4b';
        note.textContent = `Add a photo at ${source} to see this memory ♡`;
        modalContent.replaceChildren(note);
      };
      modalContent.appendChild(image);
    }
    modal.classList.add('show');
    closeButton?.focus();
  });
});

closeButton?.addEventListener('click', closeModal);
modal?.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });
