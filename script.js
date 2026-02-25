/* ============================================================
   SCRIPT — Site Storytelling Cinematográfico
   ============================================================ */

// ============================================================
// ❶ CONFIGURAÇÃO — Altere esses valores!
// ============================================================

/**
 * Data de início do NAMORO.
 * Formato: new Date(ano, mês-1, dia, hora, minuto)
 * Exemplo: 25 de janeiro de 2026 às 20:00 → new Date(2026, 0, 25, 20, 0)
 *   - O MÊS começa em 0! (Jan=0, Fev=1, Mar=2, ..., Dez=11)
 */
const RELATIONSHIP_START = new Date(2026, 0, 25, 18, 30);

/**
 * PLAYLIST — Suas músicas.
 * Coloque os arquivos .mp3 na pasta "musicas/" (ou onde preferir).
 * Adicionar = novo caminho no array. Remover = deletar a linha.
 * Ao terminar a última música, volta para a primeira (loop infinito).
 */
const PLAYLIST = [
    "musicas/01.mp3"
    // Adicione mais músicas aqui...
];

/**
 * TIMELINE — Seus highlights.
 * Adicionar = novo objeto. Remover = deletar o objeto. Fácil.
 */
const TIMELINE_DATA = [
    // 1
    {
        date: "Out 2023",
        photo: "fotos/01.jpg",
        title: "Roller Jam",
        text: "Onde tudo começou. Mal eu sabia onde ia chegar."
    },
    // 2
    {
        date: "Nov 2023",
        photo: "fotos/02.JPEG",
        title: "Primeira piscininha juntos",
        text: "Aqui eu já estava apaixonado e queria passar todo o meu tempo com você."
    },
    // 3
    {
        date: "Mar 2024",
        photo: "fotos/03.JPEG",
        title: "Hopi Hari",
        text: "Esse dia foi incrível, nos divertimos muito o dia inteiro. Lembro como se fosse hoje o quão linda você estava."
    },
    // 4
    {
        date: "Abr 2024",
        photo: "fotos/04.JPEG",
        title: "Seu aniversário de 20 anos",
        text: "Me lembro perfeitamente da usa vó me olhando e zoando você, como se ela já soubesse o que estaria por vir."
    },
    // 5
    {
        date: "Abr 2024",
        photo: "fotos/05.JPEG",
        title: "Hope Jump",
        text: "Esse dia foram tantas coisas. Foi a primeira vez que dormimos juntos. Acordamos cedo e fomos pular da ponte juntos (fofo e incrível). Me lembro do seu gritinho caindo no hope e eu tentando pedalar no ar kkkkk."
    },
    // 6
    {
        date: "Jul 2024",
        photo: "fotos/06.JPEG",
        title: "Beto Carrero",
        text: "Nossa primeira viagem juntos. Gostamos tanto do Hopi Hari que fomos para o Beto Carrero. Foi bem divertido. Aproveitamos um monte o parque."
    },
    // 7
    {
        date: "Jul 2024",
        photo: "fotos/07.JPEG",
        title: "Balneário Camboriú",
        text: "Teve seus altos e baixos, mas tivemos momentos muito bons juntos nessa viagem. Eu amo essa foto nossa, apesar de eu estar horrorosso."
    },
    // 8
    {
        date: "Jan 2025",
        photo: "fotos/08.JPEG",
        title: "Show do Twenty One Pilots",
        text: "Nosso segundo show juntos. Foi muito bom viver essa experiência ao seu lado."
    },
    // 9
    {
        date: "Jun 2025",
        photo: "fotos/09.jpg",
        title: "Show do Alok",
        text: "E la vamos nós para mais um show kkkkk. Você sabe que não sou dos mais fãs, mas com você qualuqer lugar é divertido, qualquer memória é marcante. Você estava linda, como sempre."
    },
    // 10
    {
        date: "Set 2025",
        photo: "fotos/10.JPEG",
        title: "Lençóis Maranhenses",
        text: "Uma viagem maravilhosa. Vive momentos incríveis com você lá. Peço desculpas por ter causado memórias ruins em uma viagem tão incrível."
    },
    // 11
    {
        date: "Out 2025",
        photo: "fotos/11.JPEG",
        title: "Quase menina!",
        text: "Essa foi a minha melhor tentativa para te desviver. Foi por um diazinho... Brincadeiras de lado, a comida estava muito boa!"
    },
    // 12
    {
        date: "Dez 2025",
        photo: "fotos/12.JPEG",
        title: "Comida japonesa em casa juntos",
        text: "Quando a gente deciciu do nada que irimaos fazer comida japonesa em casa. Foi muito legal todo mundo em conjunto e se esforçando para fazer dar certo. No final nós arrasamos"
    },
    // 13
    {
        date: "Jan 2026",
        photo: "fotos/13.JPEG",
        title: "Viagem com a trupe Praia Grande",
        text: "Uma viagem para sairmos da rotina. Do nada decidimos e fizemos dar certo, mesmo que com os perregues e imporvisos necessários foi muito divertido. História para contar, e memórias para guardar."
    },
    // 14
    {
        date: "Jan 2026",
        photo: "fotos/14.JPEG",
        title: "O pedido",
        text: "O grande dia, finalmente oficializamos o que o coração já sabia há tempos. Sempre foi você."
    },
    // 15
    {
        date: "Fev 2026",
        placeholder: "Next Step",
        title: "1 Mês",
        text: "Nosso primeiro mês juntos. Esse é só o primeiro capítulo de muitos por vir."
    },
];


// ============================================================
// ❷ CONTADOR DE TEMPO
// ============================================================
const $cDays = document.getElementById('cDays');
const $cHours = document.getElementById('cHours');
const $cMins = document.getElementById('cMins');
const $cSecs = document.getElementById('cSecs');

function pad(n) { return String(n).padStart(2, '0'); }

function tickCounter() {
    const diff = Date.now() - RELATIONSHIP_START.getTime();
    if (diff < 0) return;
    const s = Math.floor(diff / 1000);
    $cDays.textContent = pad(Math.floor(s / 86400));
    $cHours.textContent = pad(Math.floor((s % 86400) / 3600));
    $cMins.textContent = pad(Math.floor((s % 3600) / 60));
    $cSecs.textContent = pad(s % 60);
}
tickCounter();
setInterval(tickCounter, 1000);


// ============================================================
// ❸ GERAR TIMELINE — Cenas imersivas full-screen + marcadores de ano
// ============================================================
const tlTrack = document.getElementById('tlTrack');
const totalItems = TIMELINE_DATA.length;

// Extrai o ano de uma string como "Out 2023" → "2023"
function extractYear(dateStr) {
    const match = dateStr.match(/\d{4}/);
    return match ? match[0] : '';
}

let lastYear = '';

TIMELINE_DATA.forEach((item, i) => {
    const year = extractYear(item.date);

    // Se o ano mudou, insere um marcador de ano
    if (year && year !== lastYear) {
        const marker = document.createElement('div');
        marker.classList.add('tl-year-marker');
        marker.innerHTML = `<span class="tl-year-text">${year}</span>`;
        tlTrack.appendChild(marker);
        lastYear = year;
    }

    // Se tem placeholder em vez de foto, mostra texto grande
    const photoHTML = item.placeholder
        ? `<div class="tl-scene-placeholder"><span>${item.placeholder}</span></div>`
        : `<img class="tl-scene-photo" src="${item.photo}" alt="${item.title}" loading="lazy">`;

    const scene = document.createElement('div');
    scene.classList.add('tl-scene');
    scene.innerHTML = `
        <div class="tl-scene-dot"></div>
        <div class="tl-scene-card">
            <span class="tl-scene-date">${item.date}</span>
            ${photoHTML}
            <h3 class="tl-scene-title">${item.title}</h3>
            <p class="tl-scene-text">${item.text}</p>
            <p class="tl-scene-counter">${String(i + 1).padStart(2, '0')} / ${String(totalItems).padStart(2, '0')}</p>
        </div>
    `;
    tlTrack.appendChild(scene);
});


// ============================================================
// ❹ INTERSECTION OBSERVER — Ativa cenas quando visíveis
// ============================================================

// Observer para reveal de elementos genéricos (hero text, etc)
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            revealObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Observer para cenas da timeline — toggle ativo/inativo
const sceneObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        e.target.classList.toggle('is-active', e.isIntersecting);
    });
}, {
    threshold: 0.4,
    rootMargin: '-10% 0px -10% 0px'
});

document.querySelectorAll('.tl-scene').forEach(el => sceneObserver.observe(el));


// ============================================================
// ❺ HERO PARALLAX
// ============================================================
const heroBody = document.querySelector('.hero-body');

function heroParallax() {
    const scrollY = window.scrollY;
    const heroH = window.innerHeight;
    if (scrollY < heroH && heroBody) {
        const ratio = scrollY / heroH;
        heroBody.style.transform = `translateY(${scrollY * 0.3}px)`;
        heroBody.style.opacity = Math.max(1 - ratio * 1.5, 0);
    }
}

window.addEventListener('scroll', () => {
    heroParallax();
}, { passive: true });


// ============================================================
// ❻ LETTER — Zoom-out reveal via IntersectionObserver
// ============================================================
const letterPaper = document.getElementById('letterPaper');

const letterObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            letterObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });

if (letterPaper) letterObserver.observe(letterPaper);


// ============================================================
// ❼ MUSIC PLAYER — Playlist com loop + Autoplay
// ============================================================
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let musicPlaying = false;
let currentTrack = 0;

bgMusic.volume = 0.4;

// Carrega a faixa atual no player
function loadTrack(index) {
    if (PLAYLIST.length === 0) return;
    currentTrack = index % PLAYLIST.length;
    bgMusic.src = PLAYLIST[currentTrack];
    bgMusic.load();
}

// Quando uma música termina, toca a próxima (loop infinito)
bgMusic.addEventListener('ended', () => {
    currentTrack = (currentTrack + 1) % PLAYLIST.length;
    loadTrack(currentTrack);
    bgMusic.play();
});

// Inicia a música e atualiza o visual do botão
function startMusic() {
    if (musicPlaying) return;
    bgMusic.play().then(() => {
        musicPlaying = true;
        musicToggle.classList.add('is-playing');
    }).catch(() => { });
}

// Carrega a primeira faixa
loadTrack(0);

// ── AUTOPLAY ──
// Tenta tocar ao carregar. Se o browser bloquear, inicia no
// primeiro toque/clique/scroll (ela nem percebe).
startMusic();

function onFirstInteraction() {
    startMusic();
    document.removeEventListener('click', onFirstInteraction);
    document.removeEventListener('touchstart', onFirstInteraction);
    document.removeEventListener('scroll', onFirstInteraction);
}
document.addEventListener('click', onFirstInteraction);
document.addEventListener('touchstart', onFirstInteraction);
document.addEventListener('scroll', onFirstInteraction, { passive: true });

// Botão manual (Play/Pause)
musicToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (musicPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('is-playing');
        musicPlaying = false;
    } else {
        bgMusic.play().catch(() => {
            alert("Crie a pasta 'musicas/' e coloque seus arquivos .mp3 lá dentro!");
        });
        musicToggle.classList.add('is-playing');
        musicPlaying = true;
    }
});


// ============================================================
// ❽ HERO PARTICLES
// ============================================================
const heroParticlesContainer = document.getElementById('heroParticles');

function spawnParticle() {
    if (!heroParticlesContainer) return;
    const p = document.createElement('span');
    p.classList.add('hero-particle');
    p.style.left = `${Math.random() * 100}%`;
    p.style.bottom = '0';
    const sz = (Math.random() * 2 + 1).toFixed(1);
    p.style.width = p.style.height = `${sz}px`;
    const dur = (Math.random() * 12 + 10).toFixed(1);
    p.style.animationDuration = `${dur}s`;
    heroParticlesContainer.appendChild(p);
    setTimeout(() => p.remove(), parseFloat(dur) * 1000 + 500);
}
setInterval(spawnParticle, 1500);
for (let i = 0; i < 8; i++) setTimeout(spawnParticle, i * 300);

// Initial calls
heroParallax();
