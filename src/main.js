// main.js — entry point (stub; full implementation in Task 6)
import './style.css';

// Auto-update footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
