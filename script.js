window.onload = function() {
    let progress = 0;
    const bar = document.querySelector('.bar-fill');
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if(progress > 100) progress = 100;
        bar.style.width = progress + '%';
        if(progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loader').style.display = 'none';
                startCountdown();
                injectData();
            }, 500);
        }
    }, 100);
};

function startCountdown() {
    const target = new Date("Feb 6, 2026 00:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const diff = target - now;
        if (diff > 0) {
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('cd-days').innerText = d < 10 ? "0"+d : d;
            document.getElementById('cd-hours').innerText = h < 10 ? "0"+h : h;
            document.getElementById('cd-minutes').innerText = m < 10 ? "0"+m : m;
            document.getElementById('cd-seconds').innerText = s < 10 ? "0"+s : s;
        }
    }, 1000);
}

function scrollToSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active-section'));
    document.getElementById(id).classList.add('active-section');
}

function injectData() {
    const skills = ["PYTHON", "DJANGO", "JS", "CSS3", "GIT"];
    const sGrid = document.querySelector('.skill-grid');
    skills.forEach(s => { sGrid.innerHTML += `<div class="skill-card">${s}</div>` });

    const deck = document.querySelector('.holo-deck');
    deck.innerHTML = `
    <div class="glass-panel" style="margin-bottom:10px; border-left:3px solid #f00;">
        <h4>MISSION PACIFIC</h4><p style="font-size:0.7rem; color:#aaa">PORTFOLIO V1</p>
    </div>
    <div class="glass-panel" style="margin-bottom:10px; border-left:3px solid #0f0;">
        <h4>IOT SYSTEM</h4><p style="font-size:0.7rem; color:#aaa">ARDUINO CONTROL</p>
    </div>`;
}

function sendData() {
    const btn = document.querySelector('button');
    btn.innerText = "SENT";
    btn.style.color = "#0f0";
}
