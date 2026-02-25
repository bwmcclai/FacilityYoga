import './style.css';

// ===================================================
// MOCK DATA — Replace with Supabase later
// ===================================================
const CLASSES = [
  {
    id: 1, name: 'Morning Vinyasa Flow', type: 'yoga',
    instructor: 'Sarah Mitchell', duration: '60 min', level: 'All Levels',
    price: '$18', spots: 6, maxSpots: 8,
    description: 'Start your day with an energizing vinyasa flow that links breath to movement. This class builds heat, strength, and flexibility while cultivating mindfulness. Modifications offered for all levels.',
    dayOfWeek: 1, hour: 9, minute: 0,
  },
  {
    id: 2, name: 'Gentle Yoga & Restore', type: 'yoga',
    instructor: 'Sarah Mitchell', duration: '75 min', level: 'Beginner',
    price: '$20', spots: 4, maxSpots: 8,
    description: 'A slower-paced class focused on deep stretching, restorative poses, and guided relaxation. Perfect for unwinding, recovering, or easing into a yoga practice.',
    dayOfWeek: 2, hour: 10, minute: 30,
  },
  {
    id: 3, name: 'Dance Cardio Fusion', type: 'dance',
    instructor: 'Mia Torres', duration: '45 min', level: 'All Levels',
    price: '$15', spots: 7, maxSpots: 8,
    description: 'Get your heart pumping with this high-energy dance cardio class! Blending contemporary, hip-hop, and Latin-inspired moves into a fun, full-body workout.',
    dayOfWeek: 2, hour: 18, minute: 0,
  },
  {
    id: 4, name: 'Power Yoga', type: 'yoga',
    instructor: 'Sarah Mitchell', duration: '60 min', level: 'Intermediate',
    price: '$18', spots: 3, maxSpots: 8,
    description: 'A challenging, fitness-based vinyasa practice that builds strength, endurance, and focus. Expect arm balances, inversions, and creative sequencing.',
    dayOfWeek: 3, hour: 7, minute: 0,
  },
  {
    id: 5, name: 'Movement & Agility', type: 'agility',
    instructor: 'Jake Rivera', duration: '50 min', level: 'All Levels',
    price: '$16', spots: 5, maxSpots: 8,
    description: 'Functional movement patterns, mobility drills, and agility work designed to improve how your body moves in everyday life. Great for athletes and anyone looking to move better.',
    dayOfWeek: 3, hour: 17, minute: 30,
  },
  {
    id: 6, name: 'Yin Yoga', type: 'yoga',
    instructor: 'Sarah Mitchell', duration: '75 min', level: 'All Levels',
    price: '$20', spots: 6, maxSpots: 8,
    description: 'Hold poses for 3-5 minutes to target deep connective tissues. This meditative practice improves flexibility, circulation, and joint health.',
    dayOfWeek: 4, hour: 10, minute: 0,
  },
  {
    id: 7, name: 'Contemporary Dance', type: 'dance',
    instructor: 'Mia Torres', duration: '60 min', level: 'Intermediate',
    price: '$18', spots: 5, maxSpots: 8,
    description: 'Explore expression through contemporary dance technique. Includes warm-up, floor work, across-the-floor combinations, and choreography.',
    dayOfWeek: 4, hour: 19, minute: 0,
  },
  {
    id: 8, name: 'Morning Vinyasa Flow', type: 'yoga',
    instructor: 'Sarah Mitchell', duration: '60 min', level: 'All Levels',
    price: '$18', spots: 8, maxSpots: 8,
    description: 'Start your day with an energizing vinyasa flow linking breath to movement.',
    dayOfWeek: 5, hour: 9, minute: 0,
  },
  {
    id: 9, name: 'Kids Movement & Agility', type: 'agility',
    instructor: 'Jake Rivera', duration: '45 min', level: 'Kids',
    price: '$14', spots: 6, maxSpots: 8,
    description: 'Fun, engaging movement activities for kids! Build coordination, balance, and agility through play-based exercises and obstacle courses.',
    dayOfWeek: 5, hour: 15, minute: 30,
  },
  {
    id: 10, name: 'Weekend Flow & Restore', type: 'yoga',
    instructor: 'Sarah Mitchell', duration: '90 min', level: 'All Levels',
    price: '$25', spots: 5, maxSpots: 8,
    description: 'The ultimate weekend treat — a 90-minute journey from an invigorating flow into deep restorative poses with aromatherapy.',
    dayOfWeek: 6, hour: 10, minute: 0,
  },
  {
    id: 11, name: 'Ballet Basics (Kids)', type: 'dance',
    instructor: 'Mia Torres', duration: '45 min', level: 'Kids',
    price: '$14', spots: 8, maxSpots: 8,
    description: 'Introduce your child to the magic of ballet! Learn basic positions, simple choreography, and creative movement in a fun, encouraging environment.',
    dayOfWeek: 6, hour: 12, minute: 0,
  },
  {
    id: 12, name: 'Sunday Slow Flow', type: 'yoga',
    instructor: 'Sarah Mitchell', duration: '60 min', level: 'Beginner',
    price: '$18', spots: 7, maxSpots: 8,
    description: 'Ease into your Sunday with a gentle, mindful flow. Slower transitions, longer holds, and plenty of breathing space.',
    dayOfWeek: 0, hour: 10, minute: 30,
  },
];


// ===================================================
// INIT
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHeroParticles();
  initRevealAnimations();
  initCalendar();
  initModals();
});


// ===================================================
// NAVIGATION
// ===================================================
function initNav() {
  const nav = document.getElementById('main-nav');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}


// ===================================================
// HERO PARTICLES — leaf-like floating dots
// ===================================================
function initHeroParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;

  const colors = ['#b3cf93', '#d1e2bd', '#b8a9d4', '#89c4e1', '#d4a843'];
  const count = 25;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('hero-particle');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 3 + Math.random() * 5;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      animation-duration: ${10 + Math.random() * 15}s;
      animation-delay: ${Math.random() * 12}s;
    `;
    container.appendChild(p);
  }
}


// ===================================================
// REVEAL ANIMATIONS
// ===================================================
function initRevealAnimations() {
  const elements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}


// ===================================================
// CALENDAR
// ===================================================
let currentWeekStart = getStartOfWeek(new Date());

function getStartOfWeek(date) {
  const d = new Date(date);
  d.setDate(d.getDate() - d.getDay());
  d.setHours(0, 0, 0, 0);
  return d;
}

function initCalendar() {
  renderCalendar();

  document.getElementById('cal-prev-week').addEventListener('click', () => {
    currentWeekStart.setDate(currentWeekStart.getDate() - 7);
    renderCalendar();
  });

  document.getElementById('cal-next-week').addEventListener('click', () => {
    currentWeekStart.setDate(currentWeekStart.getDate() + 7);
    renderCalendar();
  });

  const weekBtn = document.getElementById('view-week-btn');
  const listBtn = document.getElementById('view-list-btn');
  const weekView = document.getElementById('calendar-week');
  const listView = document.getElementById('calendar-list');

  weekBtn.addEventListener('click', () => {
    weekBtn.classList.add('active');
    listBtn.classList.remove('active');
    weekView.classList.remove('hidden');
    listView.classList.add('hidden');
  });

  listBtn.addEventListener('click', () => {
    listBtn.classList.add('active');
    weekBtn.classList.remove('active');
    listView.classList.remove('hidden');
    weekView.classList.add('hidden');
  });
}

function renderCalendar() {
  const weekContainer = document.getElementById('calendar-week');
  const listContainer = document.getElementById('calendar-list');
  const weekLabel = document.getElementById('cal-week-label');

  const weekEnd = new Date(currentWeekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const startMonth = months[currentWeekStart.getMonth()];
  const endMonth = months[weekEnd.getMonth()];

  weekLabel.textContent = startMonth === endMonth
    ? `${startMonth} ${currentWeekStart.getDate()} – ${weekEnd.getDate()}, ${weekEnd.getFullYear()}`
    : `${startMonth} ${currentWeekStart.getDate()} – ${endMonth} ${weekEnd.getDate()}`;

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Week View
  weekContainer.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const date = new Date(currentWeekStart);
    date.setDate(date.getDate() + i);
    const isToday = date.getTime() === today.getTime();
    const dayClasses = CLASSES.filter(c => c.dayOfWeek === date.getDay());

    const dayEl = document.createElement('div');
    dayEl.className = `cal-day${isToday ? ' today' : ''}`;
    dayEl.innerHTML = `
      <div class="cal-day-header">
        <span class="cal-day-name">${dayNames[date.getDay()]}</span>
        <span class="cal-day-number">${date.getDate()}</span>
      </div>
      <div class="cal-day-classes">
        ${dayClasses.map(c => `
          <button class="cal-class-chip ${c.type}" data-class-id="${c.id}" data-date="${date.toISOString()}">
            ${c.name}
            <span class="cal-class-time">${formatTime(c.hour, c.minute)}</span>
          </button>
        `).join('')}
      </div>
    `;
    weekContainer.appendChild(dayEl);
  }

  // List View
  listContainer.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const date = new Date(currentWeekStart);
    date.setDate(date.getDate() + i);
    const dayClasses = CLASSES.filter(c => c.dayOfWeek === date.getDay());
    if (dayClasses.length === 0) continue;

    const groupEl = document.createElement('div');
    groupEl.className = 'list-day-group';
    groupEl.innerHTML = `
      <div class="list-day-label">${dayNames[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}</div>
      ${dayClasses.map(c => `
        <div class="list-class-card" data-class-id="${c.id}" data-date="${date.toISOString()}">
          <span class="list-class-time">${formatTime(c.hour, c.minute)}</span>
          <div class="list-class-indicator ${c.type}"></div>
          <div class="list-class-info">
            <div class="list-class-name">${c.name}</div>
            <div class="list-class-details">${c.instructor} · ${c.duration} · ${c.spots} spots left</div>
          </div>
          <button class="list-class-book" data-class-id="${c.id}" data-date="${date.toISOString()}">Book</button>
        </div>
      `).join('')}
    `;
    listContainer.appendChild(groupEl);
  }

  // Click handlers
  document.querySelectorAll('[data-class-id]').forEach(el => {
    el.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.dataset.classId);
      const dateStr = e.currentTarget.dataset.date;
      openClassModal(id, dateStr);
    });
  });
}

function formatTime(hour, minute) {
  const period = hour >= 12 ? 'PM' : 'AM';
  const h = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  return `${h}:${minute.toString().padStart(2, '0')} ${period}`;
}


// ===================================================
// MODALS
// ===================================================
let currentBookingClass = null;

function initModals() {
  document.getElementById('modal-close').addEventListener('click', closeClassModal);
  document.getElementById('class-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeClassModal();
  });

  document.getElementById('modal-book-btn').addEventListener('click', () => {
    closeClassModal();
    openBookingModal();
  });

  document.getElementById('booking-modal-close').addEventListener('click', closeBookingModal);
  document.getElementById('booking-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeBookingModal();
  });

  document.getElementById('booking-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('booking-email').value;
    document.getElementById('booking-step-1').classList.add('hidden');
    document.getElementById('booking-step-2').classList.remove('hidden');
    document.getElementById('booking-confirm-details').textContent =
      `${currentBookingClass.name} — Confirmation sent to ${email}`;
  });

  document.getElementById('booking-done-btn').addEventListener('click', closeBookingModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeClassModal(); closeBookingModal(); }
  });
}

function openClassModal(classId, dateStr) {
  const cls = CLASSES.find(c => c.id === classId);
  if (!cls) return;
  currentBookingClass = { ...cls, date: dateStr };

  const date = new Date(dateStr);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  document.getElementById('modal-type-badge').textContent = cls.type;
  document.getElementById('modal-type-badge').className = `class-type-badge ${cls.type}`;
  document.getElementById('modal-title').textContent = cls.name;
  document.getElementById('modal-datetime').textContent =
    `${days[date.getDay()]}, ${mons[date.getMonth()]} ${date.getDate()} · ${formatTime(cls.hour, cls.minute)}`;
  document.getElementById('modal-instructor').textContent = cls.instructor;
  document.getElementById('modal-duration').textContent = cls.duration;
  document.getElementById('modal-level').textContent = cls.level;
  document.getElementById('modal-spots').textContent = `${cls.spots} of ${cls.maxSpots}`;
  document.getElementById('modal-description-text').textContent = cls.description;
  document.getElementById('modal-price').textContent = cls.price;

  document.getElementById('class-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeClassModal() {
  document.getElementById('class-modal').classList.remove('active');
  document.body.style.overflow = '';
}

function openBookingModal() {
  if (!currentBookingClass) return;
  document.getElementById('booking-step-1').classList.remove('hidden');
  document.getElementById('booking-step-2').classList.add('hidden');
  document.getElementById('booking-form').reset();

  const date = new Date(currentBookingClass.date);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  document.getElementById('booking-class-summary').textContent =
    `${currentBookingClass.name} · ${days[date.getDay()]}, ${mons[date.getMonth()]} ${date.getDate()} at ${formatTime(currentBookingClass.hour, currentBookingClass.minute)}`;

  document.getElementById('booking-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  document.getElementById('booking-modal').classList.remove('active');
  document.body.style.overflow = '';
}
