import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { Calendar, MapPin, X, ArrowRight, ArrowLeft, ArrowRight as ArrowRightIcon, Star, Target, Users } from 'lucide-react';

const UPCOMING_CLASSES = [
    { id: 1, name: "Children's Ballet & Movement", dateObj: new Date(2026, 9, 9, 15, 30), time: '3:30 PM', instructor: 'Mia Torres', duration: '45 min', desc: 'Ballet basics and creative movement for children.', photo: '/photos/yoga2.jpg', tag: 'dance', price: '$15' },
    { id: 2, name: "Adult Ballet Fitness", dateObj: new Date(2026, 9, 9, 18, 0), time: '6:00 PM', instructor: 'Mia Torres', duration: '60 min', desc: 'Ballet-based fitness focusing on core strength and flexibility.', photo: '/photos/yoga1.jpg', tag: 'dance', price: '$20' },
    { id: 3, name: "Student-Athlete Yoga", dateObj: new Date(2026, 9, 10, 16, 0), time: '4:00 PM', instructor: 'Sarah Mitchell', duration: '60 min', desc: 'Functional yoga for student-athletes focusing on injury prevention and recovery.', photo: '/photos/yoga4.jpg', tag: 'yoga', price: '$18' },
    { id: 4, name: "Personal Yoga Instruction", dateObj: new Date(2026, 9, 11, 9, 0), time: '9:00 AM', instructor: 'Sarah Mitchell', duration: '60 min', desc: 'Individualized yoga training built entirely around your personal goals.', photo: '/photos/yoga3.jpg', tag: 'yoga', price: '$40' },
    { id: 5, name: "Adult Athlete Yoga", dateObj: new Date(2026, 9, 12, 17, 30), time: '5:30 PM', instructor: 'Jake Rivera', duration: '60 min', desc: 'Yoga for adult athletes: deep stretching, mobility, and sport-specific recovery.', photo: '/photos/yoga1.jpg', tag: 'yoga', price: '$20' },
    { id: 6, name: "Private Dance Coaching", dateObj: new Date(2026, 9, 14, 11, 0), time: '11:00 AM', instructor: 'Mia Torres', duration: '60 min', desc: 'Private coaching tailored for upcoming dance auditions or competitions.', photo: '/photos/yoga2.jpg', tag: 'dance', price: '$50' },
    { id: 7, name: "Team Sports Yoga", dateObj: new Date(2026, 9, 14, 14, 0), time: '2:00 PM', instructor: 'Sarah Mitchell', duration: '90 min', desc: 'Private group session designed for sports teams.', photo: '/photos/facility.jpg', tag: 'yoga', price: '$150' },
];

export default function App() {
    const [selectedClass, setSelectedClass] = useState(null);
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [currentWeekStart, setCurrentWeekStart] = useState(new Date(2026, 9, 4));
    const [selectedCalendarDate, setSelectedCalendarDate] = useState(new Date(2026, 9, 9));

    const closeModal = () => {
        setSelectedClass(null);
        setTimeout(() => setIsCheckingOut(false), 300); // Reset state after animate out
    };

    // Smooth scroll using Lenis
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    const { scrollYProgress } = useScroll();

    // Floating background motion values
    const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
    const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const layer4Y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

    const leftTextVariants = {
        hidden: { x: 0 },
        split: {
            x: 0,
            transition: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1], delay: 1.5 }
        },
        hovered: {
            x: "-0.2em",
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const rightTextVariants = {
        hidden: { x: 0 },
        split: {
            x: "0.8em",
            transition: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1], delay: 1.5 }
        },
        hovered: {
            x: "1.0em",
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const pillBgVariants = {
        hidden: { opacity: 0, scale: 0.85 },
        split: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, delay: 2.7 }
        },
        hovered: {
            backgroundColor: "rgba(142, 204, 130, 1)",
            transition: { duration: 0.3 }
        }
    };

    const textHoverVariants = {
        hidden: { color: "var(--text-primary)" },
        split: { color: "var(--text-primary)" },
        hovered: { color: "var(--white)", transition: { duration: 0.3 } }
    };

    const nextWeek = () => {
        const next = new Date(currentWeekStart);
        next.setDate(currentWeekStart.getDate() + 7);
        setCurrentWeekStart(next);
    };

    const prevWeek = () => {
        const prev = new Date(currentWeekStart);
        prev.setDate(currentWeekStart.getDate() - 7);
        setCurrentWeekStart(prev);
    };

    const getDaysInWeek = () => {
        let days = [];
        for (let i = 0; i < 7; i++) {
            const d = new Date(currentWeekStart);
            d.setDate(currentWeekStart.getDate() + i);
            days.push(d);
        }
        return days;
    };

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const currentDays = getDaysInWeek();
    const currentMonthStr = monthNames[currentDays[3].getMonth()];
    const currentYearStr = currentDays[3].getFullYear();

    const selectedClasses = UPCOMING_CLASSES.filter(c =>
        c.dateObj.getDate() === selectedCalendarDate.getDate() &&
        c.dateObj.getMonth() === selectedCalendarDate.getMonth() &&
        c.dateObj.getFullYear() === selectedCalendarDate.getFullYear()
    ).sort((a, b) => a.dateObj - b.dateObj);


    return (
        <div className="app-container">
            {/* Interactive Framer Motion Background - Vibrant #8ECC82 Focus */}
            <div className="interactive-bg">
                <motion.div className="bg-shape shape-1" style={{ y: layer1Y }} />
                <motion.div className="bg-shape shape-2" style={{ y: layer2Y }} />
                <motion.div className="bg-shape shape-3" style={{ y: layer3Y }} />

                <motion.div className="bg-lines" style={{ y: layer4Y }}>
                    <svg viewBox="0 0 1440 400" preserveAspectRatio="none">
                        <path fill="none" stroke="rgba(142, 204, 130, 0.3)" strokeWidth="1.5" d="M0,200 Q360,400 720,200 T1440,200" />
                        <path fill="none" stroke="rgba(26, 45, 35, 0.05)" strokeWidth="1" d="M0,250 Q360,50 720,250 T1440,250" />
                        <path fill="none" stroke="rgba(142, 204, 130, 0.15)" strokeWidth="3" d="M0,150 Q360,300 720,150 T1440,150" />
                    </svg>
                </motion.div>
            </div>

            {/* Navigation */}
            <nav className="navbar-y">
                <motion.div
                    className="nav-logo-y"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="/photos/facility.jpg" alt="Facility Logo" className="brand-logo" />
                    <span className="brand-name">Facility</span>
                </motion.div>



                <motion.a
                    href="#schedule"
                    className="btn-nav-y"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Book Now
                </motion.a>
            </nav>

            {/* Totally Redesigned Data-Rich Hero Section */}
            <section className="hero-y">
                <div className="hero-y-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="hero-cert-badge"
                    >
                        <Star size={14} className="icon-green" /> 30 Years Experience • 200-Hr Certified
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                    >
                        Healthy Movement<br />
                        for <motion.span
                            className="wordplay-container"
                            initial="hidden"
                            animate="split"
                            whileHover="hovered"
                        >
                            <motion.span variants={leftTextVariants} className="pill-container">
                                <motion.div variants={pillBgVariants} className="pill-bg" />
                                <motion.span variants={textHoverVariants} className="pill-text">Every</motion.span>
                            </motion.span><motion.span variants={rightTextVariants} className="pill-container">
                                <motion.div variants={pillBgVariants} className="pill-bg" />
                                <motion.span variants={textHoverVariants} className="pill-text">body.</motion.span>
                            </motion.span>
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="hero-y-sub"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Blending Yoga, Classical Dance, and Functional Agility to build strength, mobility, and lifelong health.
                    </motion.p>

                    <motion.div
                        className="hero-focus-areas"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        <div className="focus-pill"><Target size={16} /> Private Dance & Audition Prep</div>
                        <div className="focus-pill"><Users size={16} /> Sport-Specific Team Yoga</div>
                        <div className="focus-pill"><Star size={16} /> Adult & Child Ballet Fitness</div>
                    </motion.div>

                    <motion.div
                        className="hero-y-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <a href="#schedule" className="btn-solid-y">
                            View Schedule <ArrowRight size={18} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Premium Horizontal Calendar View */}
            <section id="schedule" className="schedule-section-y">
                <div className="container-y">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="schedule-header-y"
                    >
                        <h2>Upcoming Sessions</h2>
                        <p className="schedule-subheader">Individual or small group focused movement.</p>
                    </motion.div>

                    <div className="calendar-view-container">
                        <div className="cal-header-panel">
                            <h3>{currentMonthStr} {currentYearStr}</h3>
                            <div className="cal-nav-arrows">
                                <button onClick={prevWeek} className="cal-nav-btn"><ArrowLeft size={20} /></button>
                                <button onClick={nextWeek} className="cal-nav-btn"><ArrowRightIcon size={20} /></button>
                            </div>
                        </div>

                        {/* Week Strip */}
                        <div className="cal-week-strip">
                            {currentDays.map((day, idx) => {
                                const dayClasses = UPCOMING_CLASSES.filter(c =>
                                    c.dateObj.getDate() === day.getDate() &&
                                    c.dateObj.getMonth() === day.getMonth() &&
                                    c.dateObj.getFullYear() === day.getFullYear()
                                );
                                const isActive = selectedCalendarDate.toDateString() === day.toDateString();
                                const isToday = new Date().toDateString() === day.toDateString();

                                return (
                                    <div
                                        key={idx}
                                        className={`cal-day-tab ${isActive ? 'active' : ''} ${isToday ? 'today' : ''}`}
                                        onClick={() => setSelectedCalendarDate(day)}
                                    >
                                        <span className="cal-weekday">{daysOfWeek[day.getDay()]}</span>
                                        <span className="cal-daynum">{day.getDate()}</span>
                                        {dayClasses.length > 0 && <span className="cal-dot"></span>}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Selected Day View */}
                        <div className="cal-selected-view">
                            <div className="selected-date-header">
                                <h4>{daysOfWeek[selectedCalendarDate.getDay()]}, {monthNames[selectedCalendarDate.getMonth()]} {selectedCalendarDate.getDate()}</h4>
                            </div>

                            <AnimatePresence mode="wait">
                                {selectedClasses.length > 0 ? (
                                    <motion.div
                                        key={selectedCalendarDate.toISOString()}
                                        className="cal-classes-list"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {selectedClasses.map((c, i) => (
                                            <motion.div
                                                key={c.id}
                                                className={`cal-list-card border-${c.tag}`}
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                onClick={() => setSelectedClass(c)}
                                                whileHover={{ scale: 1.01, boxShadow: "0 10px 30px rgba(142, 204, 130, 0.15)" }}
                                            >
                                                <div className="time-col">{c.time}</div>
                                                <div className="info-col">
                                                    <h3>{c.name}</h3>
                                                    <p>{c.duration} with {c.instructor}</p>
                                                </div>
                                                <div className="tag-col">
                                                    <span className={`sc-badge label-${c.tag}`}>{c.tag}</span>
                                                </div>
                                                <div className="action-col">
                                                    <button className="book-btn-small">Select</button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key={`empty-${selectedCalendarDate.toISOString()}`}
                                        className="no-classes-msg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <p>No sessions scheduled for this date.</p>
                                        <span>Check other available dates in the calendar above.</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="text-center mt-12 mb-8">
                        <span className="featured-title">Featured Classes</span>
                    </div>

                    <div className="schedule-cards-y">
                        {UPCOMING_CLASSES.slice(0, 2).map((c, i) => (
                            <motion.div
                                key={c.id}
                                className="sc-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                onClick={() => setSelectedClass(c)}
                            >
                                <div className="sc-image">
                                    <img src={c.photo} alt={c.name} />
                                    <div className="sc-overlay"></div>
                                </div>
                                <div className="sc-content">
                                    <div className="sc-top">
                                        <span className="sc-date">{c.dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} &nbsp;—&nbsp; {c.time}</span>
                                        <span className={`sc-badge label-${c.tag}`}>{c.tag}</span>
                                    </div>
                                    <div className="sc-bottom">
                                        <div>
                                            <h3>{c.name}</h3>
                                            <p>{c.instructor} &nbsp;|&nbsp; {c.duration}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Minimal Footer */}
            <footer className="footer-y">
                <div className="footer-content">
                    <div className="footer-logo">FACILITY</div>
                    <div className="footer-links">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="/admin.html">Admin</a>
                    </div>
                </div>
            </footer>

            {/* Modal */}
            <AnimatePresence>
                {selectedClass && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedClass(null)}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="close-btn" style={{ zIndex: 10 }} onClick={closeModal}><X /></button>

                            {!isCheckingOut ? (
                                <>
                                    <div className="modal-header-img">
                                        <img src={selectedClass.photo} alt="Class Preview" />
                                    </div>
                                    <div className="modal-inner">
                                        <span className={`sc-badge label-${selectedClass.tag}`}>{selectedClass.tag}</span>
                                        <h3>{selectedClass.name}</h3>
                                        <div className="modal-meta">
                                            <p><Calendar size={16} /> {selectedClass.dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })} at {selectedClass.time}</p>
                                            <p><MapPin size={16} /> {selectedClass.duration} with {selectedClass.instructor}</p>
                                        </div>
                                        <p className="modal-desc">{selectedClass.desc}</p>
                                        <div className="modal-footer">
                                            <span className="price">{selectedClass.price}</span>
                                            <button className="btn-solid-y" onClick={() => setIsCheckingOut(true)}>Book Now</button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="simple-checkout-header">
                                        <div className="simple-checkout-title">
                                            <h3>{selectedClass.name}</h3>
                                            <p>{selectedClass.dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} • {selectedClass.time}</p>
                                        </div>
                                        <span className="simple-checkout-price">{selectedClass.price}</span>
                                    </div>

                                    <div className="modal-checkout-form">
                                        <div className="express-checkout-container">
                                            <button className="btn-express apple-pay" onClick={() => alert('Apple Pay stubbed')}> Pay</button>
                                            <button className="btn-express venmo" onClick={() => alert('Venmo stubbed')}>venmo</button>
                                            <button className="btn-express google-pay" onClick={() => alert('G Pay stubbed')}>G Pay</button>
                                        </div>

                                        <div className="checkout-separator"><span>OR</span></div>

                                        <div className="checkout-section">
                                            <div className="checkout-input-group">
                                                <input type="text" placeholder="Full name" className="checkout-input" />
                                                <input type="email" placeholder="Email address" className="checkout-input" />
                                            </div>
                                        </div>

                                        <div className="checkout-section">
                                            <div className="payment-box-body">
                                                <input type="text" placeholder="Card number" className="checkout-input" />
                                                <div className="checkout-input-group">
                                                    <input type="text" placeholder="MM / YY" className="checkout-input" />
                                                    <input type="text" placeholder="CVC" className="checkout-input" />
                                                </div>
                                            </div>
                                        </div>

                                        <button className="btn-pay-now" onClick={() => {
                                            alert('Payment flow stubbed');
                                            closeModal();
                                        }}>Pay {selectedClass.price}</button>

                                        <div className="checkout-back-nav">
                                            <button className="btn-back" onClick={() => setIsCheckingOut(false)}>Back to Class Details</button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}
