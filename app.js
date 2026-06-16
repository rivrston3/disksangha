// ============================================
// ALCENTE — Library App
// Practice data + filtering + card expansion
// ============================================

const PRACTICES = [
  {
    id: 1,
    name: "Left Thumbs In",
    scale: ["pod", "circle"],
    type: "ritual",
    time: "2 min",
    tagline: "A gesture of belonging. Closest to the heart.",
    description: "A simple opening and closing ritual that calls a group into shared intention. Used at the start and end of Ultimate Frisbee team huddles — and anywhere a group wants to mark the threshold of their time together.",
    steps: [
      "Form a huddle — everyone close enough to lean in.",
      "Each person places their left thumb into the center. Left, because it's closest to the heart.",
      "One person names what you're stepping into, or what you're stepping out of.",
      "Together: a breath, a word, a sound. Whatever the group decides is true."
    ],
    when: "Arrivals, departures, transitions — any threshold moment that deserves marking.",
    source: "Ultimate frisbee culture, adapted"
  },
  {
    id: 2,
    name: "Spirit Circle",
    scale: ["pod", "circle"],
    type: "ritual",
    time: "10–20 min",
    tagline: "Close out together. Lift each other up.",
    description: "A closing circle where group members offer specific appreciations — things they actually witnessed, felt, or received from others during the time together. Ends any gathering on a high note of genuine mutual recognition. The rule: specific, not generic.",
    steps: [
      "Form a circle — standing or sitting.",
      "Open the space: anyone can speak, no obligation to speak.",
      "Offer specific appreciations. Not 'great job everyone' but 'I noticed when you...'",
      "Shout-outs can go to individuals, to the group, or to the space itself.",
      "When the energy feels complete, close with a shared gesture or word."
    ],
    when: "Closing a practice, a gathering, a season together. Especially after something hard or beautiful.",
    source: "Ultimate Peace camp tradition"
  },
  {
    id: 3,
    name: "What's Alive? What's Heavy?",
    scale: ["dyad", "pod"],
    type: "conversation",
    time: "5–30 min",
    tagline: "Two questions that hold the whole range.",
    description: "The simplest honest check-in we know. These two questions hold the full range of a person's experience — what's generative, and what's weighing on them — without demanding a performance or a therapy session. Just the truth, as it is right now.",
    steps: [
      "Sit facing each other (or in a small circle).",
      "One person asks: 'What's alive in you right now? And what's heavy?'",
      "The speaker takes their time. No rush.",
      "The listener reflects back what they heard — not to analyze, just to say: I heard you.",
      "Switch. Repeat.",
      "You can close with: 'What do you need from me right now?' or just sit in the quiet."
    ],
    when: "Opening a gathering, checking in with a friend, any time you want real contact instead of small talk.",
    source: "Adapted from Joanna Macy's Work That Reconnects"
  },
  {
    id: 4,
    name: "Name Toss",
    scale: ["pod", "circle"],
    type: "game",
    time: "10–15 min",
    tagline: "Learn everyone's name. Make it embodied. Make it fun.",
    description: "A classic energizer for learning names that works because it's physical — the movement anchors memory in a way that going around the circle does not. Scales well and gets loud fast. Works with strangers.",
    steps: [
      "Stand in a circle. Get a ball, a frisbee, or anything tosable.",
      "One person says someone's name across the circle, makes eye contact, tosses it to them.",
      "That person catches it, says 'thank you [name],' then calls and tosses to someone new.",
      "Build speed. Once the pattern is established, add a second object.",
      "Variation: use made-up names. Or animal sounds. Or the sound of their vibe."
    ],
    when: "Any time a group has just met. Perfect for the first ten minutes of a new gathering.",
    source: "Theater and facilitation tradition"
  },
  {
    id: 5,
    name: "One Word Check-in",
    scale: ["pod", "circle", "gathering"],
    type: "conversation",
    time: "3–10 min",
    tagline: "How are you, actually — in one word.",
    description: "A rapid but real check-in that scales surprisingly well. One word forces people to crystallize their inner state, which often reveals more than a paragraph would. Works with 5 people or 50. No commentary, no advice — just the word, offered and received.",
    steps: [
      "Go around the circle (or by popcorn in a large group).",
      "Each person offers one word that captures where they are right now.",
      "No explanation required unless someone genuinely wants to add one.",
      "Variation: use a metaphor instead — 'what's your weather right now?'"
    ],
    when: "Opening any gathering. Especially useful before a difficult conversation or creative session.",
    source: "Widely used in facilitation practice"
  },
  {
    id: 6,
    name: "The Appreciation Seat",
    scale: ["pod", "circle"],
    type: "ritual",
    time: "5–10 min per person",
    tagline: "The practice of being fully seen, and fully receiving it.",
    description: "One person sits or stands in the center. Everyone else offers specific appreciations — things they've actually witnessed, felt, or received. The person in the center has one job: receive without deflecting. No 'oh I didn't really...' Just: thank you. Surprisingly powerful.",
    steps: [
      "Someone sits in the center of the group.",
      "Others offer appreciations — specific, observed, true. Not performance.",
      "The person in the center says only: 'thank you.' Nothing else.",
      "No deflecting. No minimizing. Practice receiving.",
      "When appreciations feel complete, the person in the center shares one thing they're taking with them."
    ],
    when: "Birthdays, farewells, milestones. Also: whenever someone in the group needs to be seen.",
    source: "Authentic Relating tradition"
  },
  {
    id: 7,
    name: "Talking Piece Council",
    scale: ["circle", "gathering"],
    type: "ritual",
    time: "30–90 min",
    tagline: "Ancient technology. Still one of the best things humans have figured out.",
    description: "A council held by an object. Whoever holds the piece speaks; everyone else listens — not planning their response, but actually listening. One of the oldest social technologies on earth. Works for sharing, for conflict, for decision-making, for grief, for celebration.",
    steps: [
      "Sit in a circle. Place a meaningful object in the center.",
      "Name the question or theme: What are we here to witness together?",
      "Whoever feels called picks up the object and speaks from the heart.",
      "Everyone else listens without interruption, side conversation, or note-taking.",
      "The piece returns to center when the speaker is done.",
      "Silence between speakers is welcome. Don't rush to fill it."
    ],
    when: "Deep group sharing, processing conflict or grief, marking transitions, celebrating together.",
    source: "Indigenous council traditions, widely adapted"
  },
  {
    id: 8,
    name: "Catch & Release",
    scale: ["dyad"],
    type: "embodied",
    time: "5–20 min",
    tagline: "The frisbee as teacher. Receive. Release. Repeat.",
    description: "A mindful practice of throwing and catching — no game, no score — as a form of moving meditation. The disk becomes a simple teacher: you cannot hold on to it. The whole practice is receive and release. It mirrors the most fundamental movement of your life: your breath.",
    steps: [
      "Find a partner. Get some distance — enough that it takes a real throw.",
      "Throw without strategy. Catch without agenda.",
      "Try: catching on a breath in. Throwing on the breath out.",
      "Notice the moment of receiving. Notice the moment of letting go.",
      "Play in silence for at least five minutes. Then: talk about it if you want."
    ],
    when: "Warm-up, transition, meditative pause, any time you need to leave your head.",
    source: "alcente — River Stone"
  },
  {
    id: 9,
    name: "What is Meaningful to You?",
    scale: ["dyad", "pod"],
    type: "conversation",
    time: "20–60 min",
    tagline: "The question that bypasses everything and goes straight to the heart.",
    description: "A single, direct question offered with genuine curiosity and real patience. It tends to take people to the center of their lives — past the social presentation, past the polished answer, to what actually matters. Best used with strangers who have opted into depth, or old friends who need to remember each other.",
    steps: [
      "Sit together with enough time — at least 20 minutes.",
      "One person asks: 'What is meaningful to you?'",
      "The asker listens fully — without rushing to respond, without formulating their own answer.",
      "Good follow-up: 'Is there more?' or 'What does that connect to for you?'",
      "Switch when it feels right.",
      "Close by naming one thing you heard that stayed with you."
    ],
    when: "First real conversations with someone new. Reconnecting with an old friend. Anytime you want to skip the surface.",
    source: "alcente; adapted from various dialogue traditions"
  },
  {
    id: 10,
    name: "Song of the Circle",
    scale: ["circle", "gathering"],
    type: "song",
    time: "5–15 min",
    tagline: "Singing together does something to the nervous system that nothing else does.",
    description: "Learning a simple song together and singing it as a group. It doesn't matter if people can carry a tune. What matters is the shared vibration — the moment when voices find each other and something larger than any individual comes through. Collective singing builds trust faster than almost anything else.",
    steps: [
      "Choose a simple song: a round, a call-and-response, a folk song, a chant.",
      "Teach it line by line. Don't explain too much — just sing it.",
      "Sing it together three times: once learning, once settling, once flying.",
      "Add harmonies if they emerge. Split into sections. Let it grow.",
      "Variation: invite the group to hum together first, without a song — just find the same note."
    ],
    when: "Arrivals, closings, celebrations, moments that need marking, any gathering that's lost its thread.",
    source: "Global folk and sacred music traditions"
  },
  {
    id: 11,
    name: "Weekly Check-in Format",
    scale: ["pod", "community"],
    type: "conversation",
    time: "30–60 min",
    tagline: "A recurring container that keeps a group genuinely connected over time.",
    description: "A lightweight structure for groups that gather regularly — pods, teams, study circles, households, chosen families. The same two questions every week, held without advice unless asked for. Keeps the relational thread alive. Surprisingly powerful in its consistency.",
    steps: [
      "Gather at the same time each week. Consistency is the practice.",
      "Go around: each person answers 'What am I celebrating this week?' and 'What am I working with?'",
      "No advice unless explicitly asked for. Just witnessing.",
      "Optional: one person shares something they learned, a poem, a song, a question.",
      "Close with a brief shared ritual — left thumbs in, a breath, a word."
    ],
    when: "Any group committed to staying connected through time. Teams, pods, households, longterm friends.",
    source: "Adapted from various community and team practices"
  },
  {
    id: 12,
    name: "Nature Noticing Walk",
    scale: ["dyad", "pod"],
    type: "embodied",
    time: "20–60 min",
    tagline: "Pay attention to the world together. Something always shifts.",
    description: "Walk together with the shared intention of noticing what's alive — in the environment, in yourselves. Less conversation, more attention. A practice of co-presence with the more-than-human world that reliably gets people out of their heads and into contact with something real.",
    steps: [
      "Walk somewhere with natural elements — park, field, street with trees, riverbank.",
      "Set the frame: 'Let's just notice. No destination. Share what calls your attention.'",
      "Walk slowly. Point things out: a sound, a texture, a smell, a creature, a light.",
      "Speak only about what you're actually observing. Let silence be welcome.",
      "Close: each person names one thing they're taking with them."
    ],
    when: "Transitions, stress, any time you need to leave the conceptual mind and arrive somewhere real.",
    source: "Naturalist and somatic traditions; inspired by Robin Wall Kimmerer"
  }
];

// ============================================
// Filter State
// ============================================
const state = {
  scale: 'all',
  type: 'all'
};

// ============================================
// Render
// ============================================
function renderPractices() {
  const grid = document.getElementById('practice-grid');
  const noResults = document.getElementById('no-results');
  let visibleCount = 0;

  grid.innerHTML = '';

  PRACTICES.forEach(p => {
    const scaleMatch = state.scale === 'all' || p.scale.includes(state.scale);
    const typeMatch  = state.type === 'all'  || p.type === state.type;
    const show = scaleMatch && typeMatch;

    if (show) visibleCount++;

    const card = document.createElement('div');
    card.className = 'practice-card' + (show ? '' : ' hidden');
    card.dataset.id = p.id;

    const scaleBadges = p.scale.map(s =>
      `<span class="badge badge--scale">${s}</span>`
    ).join('');

    card.innerHTML = `
      <div class="practice-card__header">
        <div>
          <h3 class="practice-card__title">${p.name}</h3>
          <p class="practice-card__tagline">${p.tagline}</p>
          <div class="practice-card__expand" aria-label="Expand practice">
            <svg class="expand-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" stroke-width="1.2"/>
              <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" stroke-width="1.2"/>
            </svg>
            <span class="expand-label">How it works</span>
          </div>
        </div>
        <div class="practice-card__meta">
          <span class="badge badge--type">${p.type}</span>
          ${scaleBadges}
          <span class="badge--time">${p.time}</span>
        </div>
      </div>
      <div class="practice-card__body">
        <div class="practice-card__inner">
          <div>
            <p class="practice-card__section-label">About</p>
            <p class="practice-card__desc">${p.description}</p>
          </div>
          <div>
            <p class="practice-card__section-label">How it works</p>
            <ol class="practice-card__steps">
              ${p.steps.map(s => `<li>${s}</li>`).join('')}
            </ol>
          </div>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div>
              <p class="practice-card__section-label">When to use it</p>
              <p class="practice-card__when">${p.when}</p>
            </div>
            <div>
              <p class="practice-card__section-label">Source</p>
              <p class="practice-card__source">${p.source}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Toggle expand on click
    card.addEventListener('click', () => {
      const body = card.querySelector('.practice-card__body');
      const label = card.querySelector('.expand-label');
      const isOpen = card.classList.contains('open');

      card.classList.toggle('open');
      body.classList.toggle('open');
      label.textContent = isOpen ? 'How it works' : 'Close';
    });

    grid.appendChild(card);
  });

  noResults.classList.toggle('show', visibleCount === 0);
}

// ============================================
// Filter chips
// ============================================
function initFilters() {
  document.querySelectorAll('[data-filter-scale]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-scale]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.scale = btn.dataset.filterScale;
      renderPractices();
    });
  });

  document.querySelectorAll('[data-filter-type]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-type]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.type = btn.dataset.filterType;
      renderPractices();
    });
  });
}

// ============================================
// Scroll animations
// ============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ============================================
// Boot
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initFilters();
  renderPractices();
  initScrollAnimations();
});
