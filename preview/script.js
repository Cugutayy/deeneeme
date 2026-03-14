const smoothContent = document.getElementById('smoothContent');

let targetY = 0;
let currentY = 0;
const ease = 0.08;
let lastAppliedY = -1;

function resizeBody() {
  if (!smoothContent) return;
  document.body.style.height = `${smoothContent.getBoundingClientRect().height}px`;
}

function smoothLoop() {
  targetY = window.scrollY || 0;
  currentY += (targetY - currentY) * ease;
  if (Math.abs(targetY - currentY) < 0.1) currentY = targetY;

  if (smoothContent && Math.abs(currentY - lastAppliedY) > 0.05) {
    smoothContent.style.transform = `translate3d(0, ${-currentY}px, 0)`;
    lastAppliedY = currentY;
  }

  applyParallax();
  animateRoute();
  syncStoryStrip();
  runCounters();
  requestAnimationFrame(smoothLoop);
}

window.addEventListener('resize', resizeBody);
window.addEventListener('load', () => {
  resizeBody();
  requestAnimationFrame(smoothLoop);
  setTimeout(() => document.getElementById('introVeil')?.remove(), 2200);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      if (entry.target.classList.contains('blur-reveal')) entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal, .blur-reveal').forEach((el) => observer.observe(el));

function applyTilt(el, x, y) {
  const rect = el.getBoundingClientRect();
  const px = (x - rect.left) / rect.width;
  const py = (y - rect.top) / rect.height;
  const rx = (0.5 - py) * 8;
  const ry = (px - 0.5) * 10;
  el.style.setProperty('--tx', `${rx}deg`);
  el.style.setProperty('--ty', `${ry}deg`);
}

document.querySelectorAll('[data-tilt]').forEach((el) => {
  el.addEventListener('mousemove', (e) => applyTilt(el, e.clientX, e.clientY));
  el.addEventListener('mouseleave', () => {
    el.style.setProperty('--tx', '0deg');
    el.style.setProperty('--ty', '0deg');
  });
});

function applyParallax() {
  document.querySelectorAll('.parallax').forEach((el) => {
    const speed = Number(el.getAttribute('data-speed') || 0.05);
    const r = el.getBoundingClientRect();
    const offset = (window.innerHeight / 2 - r.top) * speed;
    el.style.setProperty('--parallax', `${offset.toFixed(2)}px`);
  });
}

function syncStoryStrip() {
  const section = document.getElementById('story-strip');
  const strip = document.getElementById('storyStrip');
  if (!section || !strip) return;
  const rect = section.getBoundingClientRect();
  const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));
  const maxScroll = strip.scrollWidth - strip.clientWidth;
  strip.scrollLeft = maxScroll * progress;
}

const counters = document.querySelectorAll('[data-counter]');
let countersDone = false;
function runCounters() {
  if (countersDone) return;
  const section = document.getElementById('counter-scene');
  if (!section) return;
  const r = section.getBoundingClientRect();
  if (r.top > window.innerHeight * 0.72) return;
  countersDone = true;
  counters.forEach((el) => {
    const end = Number(el.getAttribute('data-counter'));
    const duration = 1200;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const value = Math.round(end * progress);
      el.textContent = value.toLocaleString('en-US');
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  });
}

const path = document.getElementById('routePath');
const dot = document.getElementById('runnerDot');
let routeLength = 0;
if (path && dot) {
  try {
    routeLength = path.getTotalLength();
    path.style.strokeDasharray = `${routeLength}`;
    path.style.strokeDashoffset = `${routeLength}`;
  } catch {
    path.style.strokeDasharray = 'none';
    path.style.strokeDashoffset = '0';
  }
}

function animateRoute() {
  if (!path || !dot || !routeLength) return;
  const section = document.getElementById('route-map');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight * 0.2)));
  const draw = routeLength * (1 - progress);
  path.style.strokeDashoffset = `${draw}`;
  try {
    const point = path.getPointAtLength(routeLength * progress);
    dot.setAttribute('cx', `${point.x}`);
    dot.setAttribute('cy', `${point.y}`);
  } catch {
    dot.setAttribute('cx', '30');
    dot.setAttribute('cy', '250');
  }
}

const dialog = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeBtn = document.getElementById('closeLightbox');
document.querySelectorAll('.editorial-grid img').forEach((img) => {
  img.addEventListener('click', () => {
    if (!dialog || !lightboxImage) return;
    lightboxImage.src = img.src;
    dialog.showModal();
  });
});
if (dialog) {
  dialog.addEventListener('click', (e) => {
    const r = dialog.getBoundingClientRect();
    const inside = r.top <= e.clientY && e.clientY <= r.top + r.height && r.left <= e.clientX && e.clientX <= r.left + r.width;
    if (!inside) dialog.close();
  });
}
if (closeBtn) closeBtn.addEventListener('click', () => dialog?.close());
