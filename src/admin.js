import './admin.css';

// ===================================================
// MOCK DATA
// ===================================================
const CLASSES = [
    { id: 1, name: 'Morning Vinyasa Flow', type: 'yoga', instructor: 'Sarah Mitchell', duration: 60, level: 'All Levels', price: 18, maxSpots: 8, dayOfWeek: 1, hour: 9, minute: 0 },
    { id: 2, name: 'Gentle Yoga & Restore', type: 'yoga', instructor: 'Sarah Mitchell', duration: 75, level: 'Beginner', price: 20, maxSpots: 8, dayOfWeek: 2, hour: 10, minute: 30 },
    { id: 3, name: 'Dance Cardio Fusion', type: 'dance', instructor: 'Mia Torres', duration: 45, level: 'All Levels', price: 15, maxSpots: 8, dayOfWeek: 2, hour: 18, minute: 0 },
    { id: 4, name: 'Power Yoga', type: 'yoga', instructor: 'Sarah Mitchell', duration: 60, level: 'Intermediate', price: 18, maxSpots: 8, dayOfWeek: 3, hour: 7, minute: 0 },
    { id: 5, name: 'Movement & Agility', type: 'agility', instructor: 'Jake Rivera', duration: 50, level: 'All Levels', price: 16, maxSpots: 8, dayOfWeek: 3, hour: 17, minute: 30 },
    { id: 6, name: 'Yin Yoga', type: 'yoga', instructor: 'Sarah Mitchell', duration: 75, level: 'All Levels', price: 20, maxSpots: 8, dayOfWeek: 4, hour: 10, minute: 0 },
    { id: 7, name: 'Contemporary Dance', type: 'dance', instructor: 'Mia Torres', duration: 60, level: 'Intermediate', price: 18, maxSpots: 8, dayOfWeek: 4, hour: 19, minute: 0 },
    { id: 8, name: 'Morning Vinyasa Flow', type: 'yoga', instructor: 'Sarah Mitchell', duration: 60, level: 'All Levels', price: 18, maxSpots: 8, dayOfWeek: 5, hour: 9, minute: 0 },
    { id: 9, name: 'Kids Movement & Agility', type: 'agility', instructor: 'Jake Rivera', duration: 45, level: 'Kids', price: 14, maxSpots: 8, dayOfWeek: 5, hour: 15, minute: 30 },
    { id: 10, name: 'Weekend Flow & Restore', type: 'yoga', instructor: 'Sarah Mitchell', duration: 90, level: 'All Levels', price: 25, maxSpots: 8, dayOfWeek: 6, hour: 10, minute: 0 },
    { id: 11, name: 'Ballet Basics (Kids)', type: 'dance', instructor: 'Mia Torres', duration: 45, level: 'Kids', price: 14, maxSpots: 8, dayOfWeek: 6, hour: 12, minute: 0 },
    { id: 12, name: 'Sunday Slow Flow', type: 'yoga', instructor: 'Sarah Mitchell', duration: 60, level: 'Beginner', price: 18, maxSpots: 8, dayOfWeek: 0, hour: 10, minute: 30 },
];

const MOCK_BOOKINGS = [
    { id: 1, name: 'Emma Thompson', email: 'emma@email.com', phone: '555-0101', classId: 1, date: '2026-02-23', status: 'confirmed' },
    { id: 2, name: 'Liam Johnson', email: 'liam@email.com', phone: '555-0102', classId: 4, date: '2026-02-25', status: 'confirmed' },
    { id: 3, name: 'Sofia Martinez', email: 'sofia@email.com', phone: '555-0103', classId: 3, date: '2026-02-24', status: 'pending' },
    { id: 4, name: 'Noah Williams', email: 'noah@email.com', phone: '555-0104', classId: 5, date: '2026-02-25', status: 'confirmed' },
    { id: 5, name: 'Olivia Davis', email: 'olivia@email.com', phone: '555-0105', classId: 10, date: '2026-02-22', status: 'confirmed' },
    { id: 6, name: 'Jackson Brown', email: 'jackson@email.com', phone: '555-0106', classId: 2, date: '2026-02-24', status: 'confirmed' },
    { id: 7, name: 'Ava Wilson', email: 'ava@email.com', phone: '555-0107', classId: 11, date: '2026-02-22', status: 'confirmed' },
    { id: 8, name: 'Lucas Garcia', email: 'lucas@email.com', phone: '555-0108', classId: 7, date: '2026-02-26', status: 'pending' },
    { id: 9, name: 'Mia Anderson', email: 'mia@email.com', phone: '555-0109', classId: 6, date: '2026-02-26', status: 'confirmed' },
    { id: 10, name: 'Ethan Taylor', email: 'ethan@email.com', phone: '555-0110', classId: 1, date: '2026-02-23', status: 'cancelled' },
    { id: 11, name: 'Isabella Moore', email: 'isabella@email.com', phone: '555-0111', classId: 8, date: '2026-02-27', status: 'confirmed' },
    { id: 12, name: 'Aiden Thomas', email: 'aiden@email.com', phone: '555-0112', classId: 12, date: '2026-02-22', status: 'confirmed' },
    { id: 13, name: 'Harper Lee', email: 'harper@email.com', phone: '555-0113', classId: 9, date: '2026-02-27', status: 'confirmed' },
    { id: 14, name: 'Mason Clark', email: 'mason@email.com', phone: '555-0114', classId: 5, date: '2026-02-25', status: 'confirmed' },
    { id: 15, name: 'Ella Rodriguez', email: 'ella@email.com', phone: '555-0115', classId: 3, date: '2026-02-24', status: 'confirmed' },
    { id: 16, name: 'James Lewis', email: 'james@email.com', phone: '555-0116', classId: 4, date: '2026-02-25', status: 'pending' },
    { id: 17, name: 'Grace Walker', email: 'grace@email.com', phone: '555-0117', classId: 10, date: '2026-03-01', status: 'confirmed' },
    { id: 18, name: 'Benjamin Hall', email: 'ben@email.com', phone: '555-0118', classId: 6, date: '2026-02-26', status: 'confirmed' },
    { id: 19, name: 'Lily Allen', email: 'lily@email.com', phone: '555-0119', classId: 2, date: '2026-02-24', status: 'cancelled' },
    { id: 20, name: 'Henry Young', email: 'henry@email.com', phone: '555-0120', classId: 11, date: '2026-03-01', status: 'pending' },
    { id: 21, name: 'Zoe King', email: 'zoe@email.com', phone: '555-0121', classId: 1, date: '2026-03-02', status: 'confirmed' },
    { id: 22, name: 'Sebastian Wright', email: 'seb@email.com', phone: '555-0122', classId: 7, date: '2026-02-26', status: 'confirmed' },
    { id: 23, name: 'Chloe Scott', email: 'chloe@email.com', phone: '555-0123', classId: 12, date: '2026-03-01', status: 'confirmed' },
    { id: 24, name: 'Daniel Green', email: 'daniel@email.com', phone: '555-0124', classId: 9, date: '2026-02-27', status: 'confirmed' },
];

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


// ===================================================
// INIT
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initTopbar();
    initMobileSidebar();
    renderDashboard();
    renderBookings();
    renderClasses();
    initClassForm();
});


// ===================================================
// TAB NAVIGATION
// ===================================================
function initTabs() {
    const navBtns = document.querySelectorAll('.sidebar-link[data-tab]');
    const tabs = document.querySelectorAll('.tab-content');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            tabs.forEach(t => t.classList.remove('active'));
            document.getElementById(`tab-${tabId}`).classList.add('active');
            document.getElementById('topbar-title').textContent =
                tabId === 'dashboard' ? 'Dashboard' : tabId === 'bookings' ? 'Bookings' : 'Manage Classes';

            // Close mobile sidebar
            document.getElementById('sidebar').classList.remove('open');
        });
    });

    // Dashboard "View All" link
    document.getElementById('dash-view-all-bookings').addEventListener('click', () => {
        document.getElementById('nav-bookings').click();
    });
}

function initTopbar() {
    const now = new Date();
    const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('topbar-date').textContent = now.toLocaleDateString('en-US', opts);
}

function initMobileSidebar() {
    document.getElementById('mobile-sidebar-btn').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
    });
}


// ===================================================
// DASHBOARD
// ===================================================
function renderDashboard() {
    // Stats
    const confirmed = MOCK_BOOKINGS.filter(b => b.status === 'confirmed').length;
    const uniqueStudents = new Set(MOCK_BOOKINGS.map(b => b.email)).size;
    const weekRevenue = MOCK_BOOKINGS
        .filter(b => b.status === 'confirmed')
        .reduce((sum, b) => {
            const cls = CLASSES.find(c => c.id === b.classId);
            return sum + (cls ? cls.price : 0);
        }, 0);

    document.getElementById('stat-bookings').textContent = MOCK_BOOKINGS.length;
    document.getElementById('stat-students').textContent = uniqueStudents;
    document.getElementById('stat-classes').textContent = CLASSES.length;
    document.getElementById('stat-revenue').textContent = `$${weekRevenue}`;

    // Recent bookings (last 6)
    const recentBookings = [...MOCK_BOOKINGS].reverse().slice(0, 6);
    const tbody = document.querySelector('#recent-bookings-table tbody');
    tbody.innerHTML = recentBookings.map(b => {
        const cls = CLASSES.find(c => c.id === b.classId);
        return `
      <tr>
        <td><span class="student-name">${b.name}</span></td>
        <td>${cls ? cls.name : 'Unknown'}</td>
        <td>${b.date}</td>
        <td><span class="status-badge ${b.status}">${b.status}</span></td>
      </tr>
    `;
    }).join('');

    // Upcoming classes
    const today = new Date();
    const upcomingContainer = document.getElementById('upcoming-classes');
    const upcoming = CLASSES
        .map(c => ({ ...c, nextDate: getNextOccurrence(c.dayOfWeek, c.hour, c.minute) }))
        .sort((a, b) => a.nextDate - b.nextDate)
        .slice(0, 5);

    upcomingContainer.innerHTML = upcoming.map(c => `
    <div class="upcoming-card">
      <div class="upcoming-indicator ${c.type}"></div>
      <div class="upcoming-info">
        <div class="upcoming-name">${c.name}</div>
        <div class="upcoming-details">${c.instructor} · ${c.level} · ${c.maxSpots} spots</div>
      </div>
      <div class="upcoming-time">${dayNamesShort[c.dayOfWeek]} ${formatTime(c.hour, c.minute)}</div>
    </div>
  `).join('');
}

function getNextOccurrence(dayOfWeek, hour, minute) {
    const now = new Date();
    const d = new Date(now);
    const diff = (dayOfWeek - d.getDay() + 7) % 7;
    d.setDate(d.getDate() + (diff === 0 && (d.getHours() > hour || (d.getHours() === hour && d.getMinutes() >= minute)) ? 7 : diff));
    d.setHours(hour, minute, 0, 0);
    return d;
}


// ===================================================
// BOOKINGS
// ===================================================
function renderBookings() {
    // Populate class filter
    const classFilter = document.getElementById('booking-filter-class');
    classFilter.innerHTML = '<option value="">All Classes</option>' +
        CLASSES.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

    const render = () => {
        const classId = classFilter.value;
        const status = document.getElementById('booking-filter-status').value;

        let filtered = [...MOCK_BOOKINGS];
        if (classId) filtered = filtered.filter(b => b.classId === parseInt(classId));
        if (status) filtered = filtered.filter(b => b.status === status);

        const tbody = document.querySelector('#all-bookings-table tbody');
        tbody.innerHTML = filtered.map(b => {
            const cls = CLASSES.find(c => c.id === b.classId);
            return `
        <tr>
          <td><span class="student-name">${b.name}</span></td>
          <td><span class="student-email">${b.email}</span></td>
          <td>${cls ? cls.name : '—'}</td>
          <td>${b.date} · ${cls ? formatTime(cls.hour, cls.minute) : ''}</td>
          <td><span class="status-badge ${b.status}">${b.status}</span></td>
          <td>
            ${b.status !== 'cancelled'
                    ? `<button class="table-action-btn" onclick="alert('Action: cancel booking #${b.id}')">Cancel</button>`
                    : '<span style="color:var(--text-3);font-size:0.78rem">—</span>'}
          </td>
        </tr>
      `;
        }).join('');
    };

    classFilter.addEventListener('change', render);
    document.getElementById('booking-filter-status').addEventListener('change', render);
    render();
}


// ===================================================
// CLASSES MANAGEMENT
// ===================================================
function renderClasses() {
    const grid = document.getElementById('classes-grid');
    grid.innerHTML = CLASSES.map(c => {
        const enrolled = MOCK_BOOKINGS.filter(b => b.classId === c.id && b.status === 'confirmed').length;
        return `
      <div class="class-manage-card">
        <div class="class-manage-header">
          <span class="class-manage-badge ${c.type}">${c.type}</span>
          <div class="class-manage-actions">
            <button class="icon-btn" title="Edit" onclick="alert('Edit class: ${c.name}')">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.5 2.5l2 2-8 8H3.5v-2l8-8z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>
            </button>
            <button class="icon-btn danger" title="Delete" onclick="alert('Delete class: ${c.name}')">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 5h8l-.5 8.5H4.5L4 5zM6 5V3.5h4V5M3 5h10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>
        </div>
        <div class="class-manage-name">${c.name}</div>
        <div class="class-manage-meta">
          <span>📅 ${dayNames[c.dayOfWeek]}</span>
          <span>🕐 ${formatTime(c.hour, c.minute)}</span>
          <span>⏱ ${c.duration} min</span>
          <span>👤 ${c.instructor}</span>
        </div>
        <div class="class-manage-footer">
          <span class="enrolled-count">${enrolled} / ${c.maxSpots} enrolled</span>
          <span class="class-price">$${c.price}</span>
        </div>
      </div>
    `;
    }).join('');
}


// ===================================================
// CLASS FORM MODAL
// ===================================================
function initClassForm() {
    const modal = document.getElementById('class-form-modal');
    const openBtn = document.getElementById('add-class-btn');
    const closeBtn = document.getElementById('class-form-close');
    const cancelBtn = document.getElementById('class-form-cancel');
    const form = document.getElementById('class-form');

    openBtn.addEventListener('click', () => modal.classList.add('active'));
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    cancelBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // In real app, this would save to Supabase
        alert('Class saved! (In production this would save to the database)');
        modal.classList.remove('active');
        form.reset();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') modal.classList.remove('active');
    });
}


// ===================================================
// HELPERS
// ===================================================
function formatTime(hour, minute) {
    const period = hour >= 12 ? 'PM' : 'AM';
    const h = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${h}:${minute.toString().padStart(2, '0')} ${period}`;
}
