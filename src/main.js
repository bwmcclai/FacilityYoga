import './style.css';

// ===================================================
// MOCK DATA
// ===================================================
const CLASSES = [
  { id: 1, name: 'Morning Vinyasa Flow', type: 'yoga', instructor: 'Sarah Mitchell', duration: '60 min', level: 'All Levels', price: '$18', spots: 6, maxSpots: 8, desc: 'An energizing vinyasa flow linking breath to movement. Builds heat, strength, and flexibility. Modifications for all levels.', dayOfWeek: 1, hour: 9, minute: 0 },
  { id: 2, name: 'Gentle Yoga & Restore', type: 'yoga', instructor: 'Sarah Mitchell', duration: '75 min', level: 'Beginner', price: '$20', spots: 4, maxSpots: 8, desc: 'Deep stretching, restorative poses, and guided relaxation. Perfect for recovery or easing into yoga.', dayOfWeek: 2, hour: 10, minute: 30 },
  { id: 3, name: 'Dance Cardio Fusion', type: 'dance', instructor: 'Mia Torres', duration: '45 min', level: 'All Levels', price: '$15', spots: 7, maxSpots: 8, desc: 'High-energy dance cardio blending contemporary, hip-hop, and Latin-inspired moves. No experience needed.', dayOfWeek: 2, hour: 18, minute: 0 },
  { id: 4, name: 'Power Yoga', type: 'yoga', instructor: 'Sarah Mitchell', duration: '60 min', level: 'Intermediate', price: '$18', spots: 3, maxSpots: 8, desc: 'A challenging, fitness-based practice with arm balances, inversions, and creative sequencing.', dayOfWeek: 3, hour: 7, minute: 0 },
  { id: 5, name: 'Movement & Agility', type: 'agility', instructor: 'Jake Rivera', duration: '50 min', level: 'All Levels', price: '$16', spots: 5, maxSpots: 8, desc: 'Functional movement patterns, mobility drills, and agility work for everyday life.', dayOfWeek: 3, hour: 17, minute: 30 },
  { id: 6, name: 'Yin Yoga', type: 'yoga', instructor: 'Sarah Mitchell', duration: '75 min', level: 'All Levels', price: '$20', spots: 6, maxSpots: 8, desc: 'Hold poses for 3-5 minutes to target deep connective tissues. Meditative and calming.', dayOfWeek: 4, hour: 10, minute: 0 },
  { id: 7, name: 'Contemporary Dance', type: 'dance', instructor: 'Mia Torres', duration: '60 min', level: 'Intermediate', price: '$18', spots: 5, maxSpots: 8, desc: 'Explore expression through contemporary technique including floor work and choreography.', dayOfWeek: 4, hour: 19, minute: 0 },
  { id: 8, name: 'Morning Vinyasa Flow', type: 'yoga', instructor: 'Sarah Mitchell', duration: '60 min', level: 'All Levels', price: '$18', spots: 8, maxSpots: 8, desc: 'Start your day with breath and movement.', dayOfWeek: 5, hour: 9, minute: 0 },
  { id: 9, name: 'Kids Movement & Agility', type: 'agility', instructor: 'Jake Rivera', duration: '45 min', level: 'Kids', price: '$14', spots: 6, maxSpots: 8, desc: 'Fun movement activities for kids — coordination, balance, and agility through play.', dayOfWeek: 5, hour: 15, minute: 30 },
  { id: 10, name: 'Weekend Flow & Restore', type: 'yoga', instructor: 'Sarah Mitchell', duration: '90 min', level: 'All Levels', price: '$25', spots: 5, maxSpots: 8, desc: 'A 90-minute journey from invigorating flow into deep restorative poses.', dayOfWeek: 6, hour: 10, minute: 0 },
  { id: 11, name: 'Ballet Basics (Kids)', type: 'dance', instructor: 'Mia Torres', duration: '45 min', level: 'Kids', price: '$14', spots: 8, maxSpots: 8, desc: 'Introduce your child to ballet! Basic positions, simple choreography, and creative movement.', dayOfWeek: 6, hour: 12, minute: 0 },
  { id: 12, name: 'Sunday Slow Flow', type: 'yoga', instructor: 'Sarah Mitchell', duration: '60 min', level: 'Beginner', price: '$18', spots: 7, maxSpots: 8, desc: 'A gentle, mindful flow to ease into your Sunday.', dayOfWeek: 0, hour: 10, minute: 30 },
];


// ===================================================
// INIT
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initParallax();
  initReveal();
  initHeroAnimation();
  initCalendar();
  initModals();
});


// ===================================================
// NAV
// ===================================================
function initNav() {
  const nav = document.getElementById('nav');
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('solid', window.scrollY > 80);
  });

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  menu.querySelectorAll('.mm-link').forEach(l => {
    l.addEventListener('click', () => {
      btn.classList.remove('active');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}


// ===================================================
// PARALLAX
// ===================================================
function initParallax() {
  const heroBg = document.getElementById('hero-bg');
  const dividerBg = document.getElementById('divider-bg');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    // Hero parallax — move slower than scroll
    if (heroBg) {
      const heroH = document.querySelector('.hero').offsetHeight;
      if (y < heroH) {
        heroBg.style.transform = `translateY(${y * 0.35}px) scale(1.1)`;
      }
    }

    // Divider parallax
    if (dividerBg) {
      const rect = dividerBg.closest('.parallax-divider').getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.top < viewH && rect.bottom > 0) {
        const progress = (viewH - rect.top) / (viewH + rect.height);
        dividerBg.style.transform = `translateY(${(progress - 0.5) * 80}px) scale(1.15)`;
      }
    }

    // Fade scroll hint
    const hint = document.getElementById('scroll-hint');
    if (hint) {
      hint.style.opacity = Math.max(0, 1 - y / 200);
    }
  });
}


// ===================================================
// HERO — "Movement for Everybody" → "Every Body" animation
// ===================================================
function initHeroAnimation() {
  const el = document.getElementById('hero-wordplay');
  if (!el) return;

  // Phase 1: Show "Everybody" joined (already visible via CSS)
  // Phase 2: After delay, split into "Every Body" with a gap animation
  setTimeout(() => {
    el.classList.add('split');
  }, 2800);
}


// ===================================================
// SCROLL REVEAL
// ===================================================
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}


// ===================================================
// CALENDAR
// ===================================================
let weekStart = getWeekStart(new Date());

function getWeekStart(d) {
  const r = new Date(d);
  r.setDate(r.getDate() - r.getDay());
  r.setHours(0, 0, 0, 0);
  return r;
}

function initCalendar() {
  render();
  document.getElementById('cal-prev').addEventListener('click', () => { weekStart.setDate(weekStart.getDate() - 7); render(); });
  document.getElementById('cal-next').addEventListener('click', () => { weekStart.setDate(weekStart.getDate() + 7); render(); });
}

function render() {
  const grid = document.getElementById('schedule-grid');
  const label = document.getElementById('cal-label');
  const end = new Date(weekStart); end.setDate(end.getDate() + 6);
  const m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date(); today.setHours(0, 0, 0, 0);

  label.textContent = m[weekStart.getMonth()] === m[end.getMonth()]
    ? `${m[weekStart.getMonth()]} ${weekStart.getDate()} – ${end.getDate()}, ${end.getFullYear()}`
    : `${m[weekStart.getMonth()]} ${weekStart.getDate()} – ${m[end.getMonth()]} ${end.getDate()}`;

  grid.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart); d.setDate(d.getDate() + i);
    const isToday = d.getTime() === today.getTime();
    const cls = CLASSES.filter(c => c.dayOfWeek === d.getDay());
    grid.innerHTML += `
      <div class="sched-day${isToday ? ' today' : ''}">
        <div class="sched-day-head">
          <span class="sched-day-name">${dn[d.getDay()]}</span>
          <span class="sched-day-num">${d.getDate()}</span>
        </div>
        <div class="sched-classes">
          ${cls.map(c => `
            <button class="sched-chip ${c.type}" data-id="${c.id}" data-date="${d.toISOString()}">
              ${c.name}
              <span class="sched-chip-time">${fmtTime(c.hour, c.minute)}</span>
            </button>
          `).join('')}
        </div>
      </div>`;
  }

  grid.querySelectorAll('[data-id]').forEach(el => {
    el.addEventListener('click', () => openClass(+el.dataset.id, el.dataset.date));
  });
}

function fmtTime(h, m) {
  const p = h >= 12 ? 'PM' : 'AM';
  return `${h > 12 ? h - 12 : h || 12}:${String(m).padStart(2, '0')} ${p}`;
}


// ===================================================
// MODALS
// ===================================================
let booking = null;

function initModals() {
  const cm = document.getElementById('class-modal');
  const bm = document.getElementById('booking-modal');

  document.getElementById('modal-close').addEventListener('click', () => close(cm));
  cm.addEventListener('click', e => { if (e.target === cm) close(cm); });

  document.getElementById('m-book-btn').addEventListener('click', () => {
    close(cm);
    openBooking();
  });

  document.getElementById('booking-close').addEventListener('click', () => close(bm));
  bm.addEventListener('click', e => { if (e.target === bm) close(bm); });

  document.getElementById('book-form').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('book-email').value;
    document.getElementById('book-step-1').classList.add('hidden');
    document.getElementById('book-step-2').classList.remove('hidden');
    document.getElementById('book-confirm-text').textContent =
      `${booking.name} — confirmation sent to ${email}`;
  });

  document.getElementById('book-done-btn').addEventListener('click', () => close(bm));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { close(cm); close(bm); } });
}

function openClass(id, dateStr) {
  const c = CLASSES.find(x => x.id === id);
  if (!c) return;
  booking = { ...c, date: dateStr };
  const d = new Date(dateStr);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  document.getElementById('m-badge').textContent = c.type;
  document.getElementById('m-badge').className = `m-badge ${c.type}`;
  document.getElementById('m-title').textContent = c.name;
  document.getElementById('m-datetime').textContent = `${days[d.getDay()]}, ${mons[d.getMonth()]} ${d.getDate()} · ${fmtTime(c.hour, c.minute)}`;
  document.getElementById('m-instructor').textContent = c.instructor;
  document.getElementById('m-duration').textContent = c.duration;
  document.getElementById('m-level').textContent = c.level;
  document.getElementById('m-spots').textContent = `${c.spots} / ${c.maxSpots}`;
  document.getElementById('m-desc').textContent = c.desc;
  document.getElementById('m-price').textContent = c.price;

  document.getElementById('class-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openBooking() {
  if (!booking) return;
  document.getElementById('book-step-1').classList.remove('hidden');
  document.getElementById('book-step-2').classList.add('hidden');
  document.getElementById('book-form').reset();

  const d = new Date(booking.date);
  const dn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const mn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  document.getElementById('book-summary').textContent =
    `${booking.name} · ${dn[d.getDay()]}, ${mn[d.getMonth()]} ${d.getDate()} at ${fmtTime(booking.hour, booking.minute)}`;

  document.getElementById('booking-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function close(modal) {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
