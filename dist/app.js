const WHATSAPP = '919915246433';
const videos = ['GiW2zo3pO7U', '8Glh4ZfECj4', 'eBnSdc46igQ', 'lvqPyfd58RE', '95XPZCVrktw', 'HpvYmydk2No'];
const collections = {
  bollywood: {
    title: 'Bollywood Dance Events', label: 'DANCE · CULTURE · SPECIAL ACTS',
    photos: ['assets/wedding-group.jpg', 'assets/women-stage.jpg', 'assets/bhangra-group.jpg', 'assets/sitting-show.jpg'],
    services: [
      ['Traditional Dance Performance','A vibrant stage presentation built around Indian dance traditions, colourful costumes and expressive group choreography.'],
      ['Religious Dance Performance','A devotional performance for religious celebrations, with graceful movement and music suited to the occasion.'],
      ['Patriotic Dance Performance','A spirited dance presentation celebrating India through energetic choreography and a strong group finale.'],
      ['Sufi Dance Performance','A flowing performance with expressive movement and a soulful atmosphere for cultural programmes and special evenings.'],
      ['Theme-Based Dance Performance','A dance story shaped around your event theme, selected music, stage space and audience.'],
      ['Celebrity Dance Performance','A headline dance segment planned around the artist or celebrity brief. Artist participation is subject to availability.'],
      ['Water Dance Performance','A visually striking performance concept for venues with a suitable water stage or feature.'],
      ['Glamour Performance','A polished, high-energy stage act with bold movement, coordinated looks and a dramatic finish.'],
      ['TV Award Shows','Stage dance and special acts designed to fit an awards programme, show running order and production brief.'],
      ['Music Videos & Movies','Dance performers and choreography support for Punjabi music videos, films and other camera-led productions.'],
      ['Folk Performances','Colourful folk dance presentations that bring regional music and traditional movement to the stage.'],
      ['Live Sitting Shows','An intimate live presentation with music and performance arranged for a seated audience.'],
      ['Jaggo Group & Dholi','A lively Jaggo procession with Dholi and performers to bring family and guests into the celebration.'],
      ['Bhangra Group, Comedy & Dholi','A high-energy combination of Bhangra, Dhol and comic performance moments for a lively crowd.'],
      ['Bhangra Performances','Powerful group Bhangra with energetic formations, music and a crowd-ready finale.'],
      ['Stage Bhangra','A focused Bhangra stage act planned for a show slot, venue and audience size.'],
      ['Traditional Bhangra','A spirited presentation of traditional Bhangra movement, music and colourful Punjabi attire.'],
      ['International Artists','International performance artists and dance acts can be arranged to match the event brief and availability.'],
      ['Belly Dancers','A stylish solo dance feature for stage shows, celebrations and themed events.']
    ]
  },
  weddings: {
    title: 'Wedding Events', label: 'SANGEET · ENTRIES · CHOREOGRAPHY',
    photos: ['assets/wedding-couple.jpg', 'assets/wedding-group.jpg', 'assets/women-stage.jpg', 'assets/upen-white-suit.jpg'],
    services: [
      ['Ladies Sangeet','A joyful Sangeet programme with dance performances and choreography for family and friends.'],
      ['Bride’s Special Entry','A memorable bridal entrance planned with music, performers and staging to suit the venue.'],
      ['Groom’s Special Entry','An energetic groom’s entry with a personalised soundtrack and performers to welcome the celebration.'],
      ['Couple Entry','A coordinated entrance for the couple with music, movement and a clear moment for guests to celebrate.'],
      ['Ring Ceremony Entry','A graceful entrance concept for the ring ceremony, tailored to the couple and event setting.'],
      ['Reception Entry','A polished reception entrance that brings the couple into the room with a celebratory performance.'],
      ['Cocktail Entry','A stylish, upbeat entry planned to match the mood and music of a cocktail evening.'],
      ['Haldi Entry','A bright, playful entrance for the Haldi celebration with suitable music and performers.'],
      ['Carnival Entry','A colourful procession-style entrance with performers and festive movement for the wedding celebration.'],
      ['Grand Wedding Entry with Props','A dramatic wedding entrance planned with stage-safe props, performers and music for the venue.'],
      ['Sangeet Performance','A complete performance feature for the Sangeet night, with choreography and acts arranged around the programme.'],
      ['Shadow Revealing Entry','A theatrical reveal using backlighting and silhouettes to create a dramatic entrance moment.']
    ]
  },
  corporate: {
    title: 'Corporate Events', label: 'BRANDS · LAUNCHES · LIVE SHOWS',
    photos: ['assets/bhangra-group.jpg', 'assets/wedding-group.jpg', 'assets/upen-formal.jpg', 'assets/sitting-show.jpg'],
    services: [
      ['Colors of India','A colourful cultural showcase featuring Indian dance styles and music for company events and celebrations.'],
      ['New Product Launch','A launch performance or reveal act timed to support the product presentation and event programme.'],
      ['Main Guest Entry','A coordinated welcome performance for the main guest, designed around the event’s formal tone.'],
      ['Bollywood Theme Performance','A lively Bollywood dance feature built around familiar music and a theme that fits the corporate occasion.'],
      ['Opening Act: Ganesh Vandana','A traditional Ganesh Vandana opening to begin the programme with a devotional performance.'],
      ['Interactive Act','A participatory segment that invites guests to join the energy of the show.'],
      ['Special Act','A distinctive stage feature shaped around the event concept, schedule and audience.'],
      ['Traditional Performance','A cultural dance presentation suited to formal programmes, celebrations and guest welcomes.'],
      ['Flash Mob','A surprise group routine that begins unexpectedly and builds into a coordinated dance performance.'],
      ['Surprise Performance','A planned reveal performance for a special moment in the programme.'],
      ['Brand Promotion','A branded performance concept designed to bring a product or campaign moment onto the stage.'],
      ['International Artists','International dance acts and performers can be arranged to complement the event brief and availability.'],
      ['Belly Dancers','A featured dance act for corporate celebrations, awards nights and themed evenings.']
    ]
  }
};

const serviceDetails = {"bollywood": [["Rooted in tradition, brought to the stage", "Discuss the regional dance style, costume palette and live or recorded music that best represents your celebration."], ["Devotion expressed through movement", "Share the deity, festival and devotional music you have in mind so the choreography can respect the occasion and its traditions."], ["A tribute to the spirit of India", "Plan a patriotic soundtrack, coordinated formations and a finale for national celebrations, school programmes or community events."], ["Soulful music, graceful storytelling", "Explore flowing movement, lyrical expression and a gentle build that suits a reflective cultural evening."], ["Your concept becomes a dance story", "Bring a theme or story; discuss how music edits, costumes and transitions can carry it from the opening scene to the finale."], ["Create a headline moment", "Share the preferred artist, event date and performance format. Availability, appearance terms and production requirements are confirmed before booking."], ["Movement meets the spectacle of water", "Discuss venue suitability, water depth, flooring, electrical separation and rehearsal access before selecting this performance concept."], ["Style, confidence and stage presence", "Explore a glamorous costume direction and upbeat choreography suited to your audience, stage size and evening programme."], ["Choreography for the spotlight and camera", "Share show timings, camera positions, rehearsal slots and transition cues so the dance segment can fit the awards running order."], ["Dance designed for the lens", "Discuss the track, shoot location, casting brief and camera coverage to plan performers, movement and rehearsal requirements."], ["Regional rhythms, shared celebration", "Choose the region and folk tradition you want to feature, with music and presentation discussed around your cultural programme."], ["An intimate atmosphere for seated guests", "Discuss audience layout, music preferences and performance pacing for a relaxed gathering where guests enjoy the show from their seats."], ["Bring the Jaggo celebration to life", "Plan the procession route, gathering point and Dhol moments around family participation and the venue’s sound timings."], ["Punjabi energy with a playful twist", "Discuss how Bhangra, comic interludes and Dhol can alternate to keep your audience involved throughout the segment."], ["Powerful beats, infectious energy", "Plan group size, song selection and audience interaction for a vibrant Punjabi dance feature at your celebration."], ["A sharp, show-ready Bhangra routine", "Share stage dimensions and your allotted show slot so formations, entrances and the finishing pose can be planned together."], ["Celebrate Punjabi dance heritage", "Explore traditional steps, Punjabi attire and Dhol-led musical direction for a cultural presentation with a festive spirit."], ["A world of talent for your occasion", "Share the desired art form, date and location. Artist availability, travel and technical needs are discussed before confirmation."], ["Expressive dance with a distinctive rhythm", "Discuss a solo or group format, music direction and audience setting to shape a suitable featured dance segment."]], "weddings": [["Family, music and memories on one stage", "Bring together favourite songs, family groups and playful dance moments. Discuss rehearsal support, easy-to-follow routines and a running order that welcomes every generation."], ["Her entrance, her moment", "Explore a romantic or celebratory music cue, a comfortable walking pace and supporting dancers. Coordinate the route and final pose with your photographer."], ["Arrive with personality and energy", "Choose a soundtrack that reflects the groom and discuss Dhol, friends or supporting dancers to build a lively welcome."], ["Two people, one unforgettable entrance", "Plan a coordinated arrival, meaningful song and simple movement so the couple can enjoy the moment together without feeling rushed."], ["An elegant opening to your engagement", "Discuss a short entrance, a musical pause for the ring exchange and a clear photo moment that keeps the ceremony at the centre."], ["A warm welcome to your next chapter", "Plan the couple’s arrival around the reception host, stage lighting and guest seating, with music that sets the evening’s mood."], ["Set the tone for a sparkling evening", "Explore a contemporary soundtrack, confident choreography and a stylish reveal to open the cocktail celebration."], ["Sunshine, colour and joyful movement", "Discuss cheerful music, a simple procession and family participation suited to a daytime Haldi gathering and its available space."], ["A festive procession full of colour", "Explore lively performers, playful formations and a route that makes your wedding welcome feel like a carnival."], ["A dramatic arrival with a personal touch", "Share your entrance idea and venue measurements. Prop selection, setup access and safe clearances are agreed before the concept is finalised."], ["A show built around your love story", "Plan dance medleys, family appearances and transitions as one coordinated Sangeet feature with a clear opening and finale."], ["A silhouette, a reveal, a lasting impression", "Discuss screen placement, backlighting and the reveal cue. Venue darkness and rehearsal time help achieve a clear silhouette effect."]], "corporate": [["Celebrate India’s cultural diversity", "Explore regional dance segments and musical transitions for a cultural showcase that fits your company celebration and audience."], ["Build anticipation for the reveal", "Share the product story and launch cue so choreography can lead naturally into the presentation without distracting from the reveal."], ["A welcome that honours the occasion", "Coordinate arrival timing, escort route and music volume with the event host for a respectful guest welcome."], ["Familiar songs, shared excitement", "Discuss Bollywood eras, song preferences and a suitable energy level for employees, partners or clients attending the event."], ["Begin with grace and devotion", "Plan the devotional track, stage arrangement and duration so Ganesh Vandana creates a thoughtful opening to your programme."], ["Turn spectators into participants", "Explore simple audience prompts, voluntary participation and host coordination that help guests join comfortably."], ["A distinctive feature for your programme", "Share the desired mood and production brief to discuss an act format, its technical needs and its place in the event schedule."], ["Cultural expression for a formal stage", "Choose a dance tradition and presentation style suited to a company anniversary, cultural day or formal guest reception."], ["An unexpected burst of shared energy", "Plan performer positions, music cues and crowd space so the surprise can build smoothly into a coordinated routine."], ["Save a memorable reveal for your guests", "Coordinate the surprise cue with your host and event team, keeping timing and entrances aligned with the running order."], ["Bring your campaign into the performance", "Discuss brand colours, campaign messages and approved creative elements to shape a performance around your communication goals."], ["Global talent for your company event", "Discuss the artist style and audience profile alongside availability, travel arrangements and the venue’s technical facilities."], ["A featured act for a themed evening", "Explore the performance format, music and styling for an entertainment segment suited to your corporate celebration."]]};

const portfolioVideos = {"GiW2zo3pO7U": {"id": "GiW2zo3pO7U", "title": "Kaur B Mashup | Dragon Dance Company | Upen Rathour"}, "8Glh4ZfECj4": {"id": "8Glh4ZfECj4", "title": "Angreji Vali Madam | Dragon Dance Company® 9915246433 Upen Rathour"}, "eBnSdc46igQ": {"id": "eBnSdc46igQ", "title": "Yaadan Supne | Kulwinder Billa | Dr Zeus | Dragon Dance Company®"}, "lvqPyfd58RE": {"id": "lvqPyfd58RE", "title": "Gippy Grewal | Mashup | Dragon Dance Company® 9915246433 Upen Rathour"}, "95XPZCVrktw": {"id": "95XPZCVrktw", "title": "Endless Jatti_Nisha Bano | Dragon Dance Company®"}, "HpvYmydk2No": {"id": "HpvYmydk2No", "title": "Practice | Dragon Dance Company® 9x Tashan Nite"}, "Z4aYVKg3ebs": {"id": "Z4aYVKg3ebs", "title": "Half Window Down | ikka &amp; Dragon Dance Company ® 9915246433 Upen Rathour"}, "9w67pHKTrbo": {"id": "9w67pHKTrbo", "title": "Get Down | ikka | Dragon Dance Company ®"}, "u9jFHuJdYpY": {"id": "u9jFHuJdYpY", "title": "Mainu Maaf Kari | Zorawar | Dragon Dance Company®"}, "lpWPUh3BS0c": {"id": "lpWPUh3BS0c", "title": "Jeana Waliya | Dragon Dance Company® 9915246433"}, "SZAttsXD4Xo": {"id": "SZAttsXD4Xo", "title": "Making Of Fulljhadi Song Shoot | Savvy Nagra | Gurlej Akhtar | Dragon Dance Company ®"}, "r4er_bfEkAo": {"id": "r4er_bfEkAo", "title": "Youngveer | Dragon Dance Company ® 9915246433 Upen Rathour"}, "-9CdLdjW-_s": {"id": "-9CdLdjW-_s", "title": "TAVEET_Dragon Dance Company® Upen Rathour 9915246433_Singer Mehak Jamaal"}, "G9TMyvbut-U": {"id": "G9TMyvbut-U", "title": "Shooting Song Four Twenty Baby_Song_Dragon Dance Company® 9915246433 Upen Rathour"}, "0GTXgrcrDa0": {"id": "0GTXgrcrDa0", "title": "KADE V NAI_Dragon Dance Company® 9915246433 Upen Rathour_Singer Actor is VADDA GREWAL}"}, "pZdY0iOngGA": {"id": "pZdY0iOngGA", "title": "Bajirao Mastani By Dragon Dance Company® 9915246433 Upen Rathour"}, "cdp6sQLJ9_Y": {"id": "cdp6sQLJ9_Y", "title": "London Punjab | Jeet Khaira | Dragon Dance Company® Upen Rathour 9915246433"}, "inUY51P62J8": {"id": "inUY51P62J8", "title": "Naina Di Bandook | Himani Kapoor | Dragon Dance Company® Upen Rathour 9915246433"}, "KZCeXFzoMKI": {"id": "KZCeXFzoMKI", "title": "Tip Tip Barsa Paani New | Martini Water | Dragon Dance Company® 9915246433"}, "ewu1SzvhE_Y": {"id": "ewu1SzvhE_Y", "title": "Sukh E |  Musical Doctorz | Dragon Dance Company | Upen Rathour 9915246433"}, "x4Tkqnb7XKg": {"id": "x4Tkqnb7XKg", "title": "insane Sukhe | Jaani | Dragon Dance Company | Upen Rathour | 99152-46433"}, "KHLsyqFuvbo": {"id": "KHLsyqFuvbo", "title": "Mann Bharrya | Jaani | Himani Kapoor | Dragon Dance Company ® Upen Rathour 99152-46433"}, "3E6kWgO28sE": {"id": "3E6kWgO28sE", "title": "Shake it Your Boom | Rikki Jai | Dragon Dance Company ®"}, "X5xn-y5sck4": {"id": "X5xn-y5sck4", "title": "Making Song Trap | Dr. Moudgil | Dragon Dance Company® Upen Rathour 9915246433"}, "zglcMrOuh3g": {"id": "zglcMrOuh3g", "title": "Sukhwinder Singh | Dragon Dance Company®"}, "DjkjFLhvEAM": {"id": "DjkjFLhvEAM", "title": "Peg Sheg | Kamal Grewal | Dragon Dance Company® 9915246433"}, "5yJHziAOo4w": {"id": "5yJHziAOo4w", "title": "Making Of Song Lakhwinder Wadali | Dragon Dance Company ® Upen Rathour | 9915246433"}, "EILG90xgXqQ": {"id": "EILG90xgXqQ", "title": "Laembadgini Diljit Dosanjh | Dragon Dance Company | Upen Rathour"}, "_DYXs-iFYbo": {"id": "_DYXs-iFYbo", "title": "DD Punjabi New Year | Dragon Dance Company | Upen Rathour 9915246433"}, "3DTT0tuf9fw": {"id": "3DTT0tuf9fw", "title": "Bahubali Concept | Apsara | Dragon Dance Company® 9915246433 Upen Rathour"}, "9Y8tI4bf1HQ": {"id": "9Y8tI4bf1HQ", "title": "Madhuri Dixit Dance | Dragon Dance Company® 9915246433"}, "uzBiB4ghwFI": {"id": "uzBiB4ghwFI", "title": "Dhoom &amp; Rockstar Performance | Dragon Dance Company® 9915246433 Upen Rathour"}, "C_P8_U65mZE": {"id": "C_P8_U65mZE", "title": "B Boying &amp; Battle | Dragon Dance Company® 9915246433 Upen Rathour"}, "z_MOLx_WeMk": {"id": "z_MOLx_WeMk", "title": "Apsara Theme | Dragon Dance Company® 9915246433 Upen Rathour"}, "XjELgwoJ_cA": {"id": "XjELgwoJ_cA", "title": "Martini Glass Water | Dragon Dance Company®_Upen Rathour_9915246433"}, "hnYLyB6_xKc": {"id": "hnYLyB6_xKc", "title": "Belly Dance | Dragon Dance Company® Upen Rathour 9915246433"}, "ihYz52g8ePg": {"id": "ihYz52g8ePg", "title": "Hip Hop | Dragon Dance Company® Upen Rathour 9915246433"}};
const mediaGroups = {"bollywood": ["9Y8tI4bf1HQ", "pZdY0iOngGA", "uzBiB4ghwFI", "GiW2zo3pO7U"], "theme": ["3DTT0tuf9fw", "z_MOLx_WeMk", "pZdY0iOngGA", "uzBiB4ghwFI"], "water": ["KZCeXFzoMKI", "XjELgwoJ_cA", "z_MOLx_WeMk", "3DTT0tuf9fw"], "belly": ["hnYLyB6_xKc", "z_MOLx_WeMk", "3E6kWgO28sE", "3DTT0tuf9fw"], "shoot": ["SZAttsXD4Xo", "X5xn-y5sck4", "G9TMyvbut-U", "5yJHziAOo4w"], "punjabi": ["GiW2zo3pO7U", "EILG90xgXqQ", "lvqPyfd58RE", "cdp6sQLJ9_Y"], "stage": ["uzBiB4ghwFI", "C_P8_U65mZE", "ihYz52g8ePg", "3E6kWgO28sE"], "celebrity": ["zglcMrOuh3g", "ewu1SzvhE_Y", "lvqPyfd58RE", "9Y8tI4bf1HQ"], "tv": ["_DYXs-iFYbo", "HpvYmydk2No", "GiW2zo3pO7U", "lvqPyfd58RE"], "soul": ["5yJHziAOo4w", "KHLsyqFuvbo", "u9jFHuJdYpY", "eBnSdc46igQ"]};
const mediaAssignments = {"bollywood": ["theme", "theme", "stage", "soul", "theme", "celebrity", "water", "bollywood", "tv", "shoot", "punjabi", "soul", "punjabi", "punjabi", "punjabi", "punjabi", "punjabi", "stage", "belly"], "weddings": ["punjabi", "theme", "punjabi", "bollywood", "soul", "bollywood", "stage", "punjabi", "theme", "theme", "bollywood", "theme"], "corporate": ["theme", "stage", "theme", "bollywood", "theme", "stage", "water", "theme", "stage", "theme", "stage", "stage", "belly"]};
function getServiceMedia(category,index) {
 const group=mediaAssignments[category][index];
 const ids=mediaGroups[group];
 const weddingPhotos=['assets/wedding-couple.jpg','assets/portfolio-19.jpg','assets/portfolio-20.jpg','assets/wedding-group.jpg'];
 const photoLabel=category==='weddings'?'wedding portfolio inspiration':'related performance video still';
 const photos=category==='weddings'?weddingPhotos:ids.map(id=>`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
 const exact=(category==='bollywood' && [4,6,9].includes(index)) || (category==='corporate' && index===3);
 return {photos,photoLabel,videos:ids.slice(0,2).map(id=>portfolioVideos[id]),note:exact?'Selected company videos relevant to this performance style. Final acts are tailored to your event.':'Related company portfolio examples. Ask us for photos and videos of this exact service when planning your event.'};
}

// Responsive navigation: tap the Services item to open its menu on touch screens.
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const navDrop = document.querySelector('.nav-dropdown');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  nav.classList.toggle('is-open', open);
});
document.querySelector('.nav-services').addEventListener('click', (event) => {
  if (window.matchMedia('(max-width: 760px)').matches) {
    event.preventDefault();
    navDrop.classList.toggle('open');
  }
});
document.querySelectorAll('.dropdown-menu a[href^="#"]').forEach(link => link.addEventListener('click', event => {
  const key = link.getAttribute('href').slice(1);
  if (collections[key]) { event.preventDefault(); selectService(key, true); }
}));
document.querySelectorAll('.main-nav a[href^="#"]').forEach(link => link.addEventListener('click', () => {
  if (!link.classList.contains('nav-services')) {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
  }
}));

// Accessible, touch-friendly hero slider with pause on tab/background changes.
const slides = [...document.querySelectorAll('.hero-slide')];
const dots = document.querySelector('.slider-dots');
const hero = document.querySelector('.hero');
let activeSlide = 0;
let slideTimer;
const progress = document.querySelector('.hero-progress span');
slides.forEach((slide, i) => {
  const dot = document.createElement('button');
  dot.className = `slider-dot${i === 0 ? ' active' : ''}`;
  dot.type = 'button'; dot.setAttribute('role', 'tab');
  dot.setAttribute('aria-label', `Show slide ${i + 1}`);
  dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
  dot.addEventListener('click', () => showSlide(i));
  dots.append(dot);
});
function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('is-active', i === activeSlide));
  document.querySelectorAll('.slider-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === activeSlide);
    dot.setAttribute('aria-selected', i === activeSlide ? 'true' : 'false');
  });
  const current = slides[activeSlide];
  document.querySelector('.hero-kicker').textContent = current.dataset.kicker;
  document.querySelector('.hero-title').innerHTML = current.dataset.title;
  document.querySelector('.hero-copy').textContent = current.dataset.copy;
  document.querySelector('.hero-tag').textContent = current.dataset.tag;
  const booking = document.querySelector('.hero-book');
  const eventName = ['Bollywood Dance Events','Wedding Events','Corporate Events'][activeSlide];
  booking.innerHTML = `Book ${eventName} <span>↗</span>`;
  booking.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hello Dragon Dance Company, I would like to book ${eventName}. Please share availability and details.`)}`;
  document.querySelector('.slide-count b').textContent = `0${activeSlide + 1}`;
  progress.style.transition = 'none'; progress.style.width = '0';
  requestAnimationFrame(() => requestAnimationFrame(() => { progress.style.transition = 'width 6.5s linear'; progress.style.width = '100%'; }));
  clearInterval(slideTimer);
  if (!document.hidden && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) slideTimer = setInterval(() => showSlide(activeSlide + 1), 6500);
}
document.querySelector('.slider-control .prev').addEventListener('click', () => showSlide(activeSlide - 1));
document.querySelector('.slider-control .next').addEventListener('click', () => showSlide(activeSlide + 1));
document.addEventListener('visibilitychange', () => { if (document.hidden) clearInterval(slideTimer); else showSlide(activeSlide); });
let touchStart = 0;
hero.addEventListener('touchstart', e => { touchStart = e.changedTouches[0].clientX; }, {passive:true});
hero.addEventListener('touchend', e => { const delta = e.changedTouches[0].clientX - touchStart; if (Math.abs(delta) > 55) showSlide(activeSlide + (delta < 0 ? 1 : -1)); }, {passive:true});
showSlide(0);

// The service explorer keeps category selection, subservice list and media in sync.
const serviceCards = [...document.querySelectorAll('[data-service]')];
const subserviceList = document.querySelector('.subservice-list');
const explorerDetail = document.querySelector('.explorer-detail');
const explorerCount = document.querySelector('.explorer-category-count');
let selectedCategory = 'bollywood';
let selectedSubservice = 0;
const serviceArtDirection = {"bollywood": [["heritage", "HERITAGE IN MOTION", "Regional roots \u00b7 Timeless rhythm"], ["sacred", "A DEVOTIONAL EXPRESSION", "Grace \u00b7 Faith \u00b7 Celebration"], ["patriotic", "THE SPIRIT OF INDIA", "Unity \u00b7 Pride \u00b7 Powerful movement"], ["sufi", "POETRY IN MOTION", "Soulful music \u00b7 Flowing movement"], ["cinema", "YOUR STORY, ON STAGE", "Concept \u00b7 Costume \u00b7 Choreography"], ["spotlight", "THE HEADLINE MOMENT", "Star presence \u00b7 Stage energy"], ["water", "MAKE WAVES", "Fluid movement \u00b7 Visual spectacle"], ["glamour", "AFTER DARK, IN STYLE", "Bold looks \u00b7 Confident movement"], ["spotlight", "MADE FOR THE SPOTLIGHT", "Camera cues \u00b7 Show choreography"], ["cinema", "FROM REHEARSAL TO FRAME", "Casting \u00b7 Movement \u00b7 Camera"], ["heritage", "MANY ROOTS. ONE STAGE.", "Folk traditions \u00b7 Regional colour"], ["sufi", "AN EVENING TO SAVOUR", "Intimate setting \u00b7 Live atmosphere"], ["festive", "LET THE CELEBRATION BEGIN", "Jaggo \u00b7 Dhol \u00b7 Family"], ["festive", "BEATS, LAUGHTER & BHANGRA", "Punjabi energy \u00b7 Playful moments"], ["festive", "FEEL EVERY BEAT", "Power \u00b7 Rhythm \u00b7 Celebration"], ["spotlight", "PUNJABI ENERGY, CENTRE STAGE", "Formations \u00b7 Dhol beats"], ["heritage", "PUNJAB AT HEART", "Traditional steps \u00b7 Punjabi attire"], ["glamour", "A WORLD OF PERFORMANCE", "Global styles \u00b7 Distinctive talent"], ["glamour", "RHYTHM WITH EXPRESSION", "Musicality \u00b7 Grace \u00b7 Stage presence"]], "weddings": [["rose", "YOUR PEOPLE. YOUR SONGS.", "Family \u00b7 Friends \u00b7 Favourite songs"], ["royal", "HER MOMENT TO SHINE", "Bridal grace \u00b7 A personal entrance"], ["festive", "ARRIVE WITH ENERGY", "Groom squad \u00b7 Dhol \u00b7 Celebration"], ["rose", "TOGETHER, IN THE SPOTLIGHT", "Two hearts \u00b7 One entrance"], ["royal", "THE START OF FOREVER", "Elegance \u00b7 A meaningful moment"], ["glamour", "A WELCOME TO REMEMBER", "Evening elegance \u00b7 Celebration"], ["glamour", "LET THE EVENING SPARKLE", "Contemporary music \u00b7 Stylish entry"], ["haldi", "A LITTLE SUNSHINE & JOY", "Colour \u00b7 Family \u00b7 Playful beats"], ["festive", "A CARNIVAL OF HAPPINESS", "Colourful performers \u00b7 Festive arrival"], ["royal", "MAKE A GRAND ARRIVAL", "Statement props \u00b7 A personal reveal"], ["rose", "YOUR LOVE STORY, DANCED", "Medleys \u00b7 Family acts \u00b7 Memories"], ["cinema", "FIRST A SHADOW. THEN YOU.", "Silhouette \u00b7 Light \u00b7 Reveal"]], "corporate": [["heritage", "ONE COUNTRY. MANY RHYTHMS.", "Culture \u00b7 Diversity \u00b7 Celebration"], ["tech", "BUILD THE BIG REVEAL", "Product story \u00b7 Launch moment"], ["royal", "A WELCOME WITH PRESENCE", "Guest arrival \u00b7 Coordinated cues"], ["spotlight", "BOLLYWOOD MEETS YOUR BRAND", "Familiar hits \u00b7 Team celebration"], ["sacred", "AN AUSPICIOUS BEGINNING", "Devotion \u00b7 Grace \u00b7 Opening act"], ["tech", "BRING EVERYONE INTO THE SHOW", "Participation \u00b7 Shared energy"], ["cinema", "THE UNEXPECTED HIGHLIGHT", "Creative concept \u00b7 Signature moment"], ["heritage", "CULTURE TAKES THE STAGE", "Tradition \u00b7 Formal presentation"], ["tech", "SURPRISE. CONNECT. CELEBRATE.", "Unexpected start \u00b7 Group energy"], ["cinema", "SAVE THE BEST SURPRISE", "Reveal cues \u00b7 A memorable moment"], ["tech", "YOUR MESSAGE, IN MOTION", "Campaign \u00b7 Brand story \u00b7 Performance"], ["glamour", "A GLOBAL TOUCH", "International styles \u00b7 Live talent"], ["glamour", "A DISTINCTIVE EVENING FEATURE", "Rhythm \u00b7 Expression \u00b7 Entertainment"]]};

let detailTimer;
let detailPhotoIndex = 0;
let detailPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function setDetailPhoto(index) {
  const frames = [...explorerDetail.querySelectorAll('.service-photo-frame')];
  if (!frames.length) return;
  detailPhotoIndex = (index + frames.length) % frames.length;
  frames.forEach((frame,i)=>{frame.classList.toggle('active',i===detailPhotoIndex);frame.setAttribute('aria-hidden',String(i!==detailPhotoIndex));});
  explorerDetail.querySelectorAll('.service-photo-dot').forEach((dot,i)=>dot.setAttribute('aria-current',String(i===detailPhotoIndex)));
  explorerDetail.querySelector('.service-photo-count').textContent = `${String(detailPhotoIndex+1).padStart(2,'0')} / 04`;
}
function runDetailSlider() {
  clearInterval(detailTimer);
  if (!detailPaused && !document.hidden) detailTimer=setInterval(()=>setDetailPhoto(detailPhotoIndex+1),4000);
}
function renderServiceDetail() {
  clearInterval(detailTimer);
  const category = collections[selectedCategory];
  const [name, description] = category.services[selectedSubservice];
  const [subheading, information] = serviceDetails[selectedCategory][selectedSubservice];
  const media = getServiceMedia(selectedCategory, selectedSubservice);
  const enquire = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hello Dragon Dance Company, I’m interested in ${name}. Please share matching photos, videos, availability and booking details.`)}`;
  const [theme, headline, tags] = serviceArtDirection[selectedCategory][selectedSubservice];
  explorerDetail.dataset.theme = theme;
  explorerDetail.dataset.composition = ['editorial','poster','framed'][selectedSubservice % 3];
  document.querySelector('.service-explorer').dataset.collection = selectedCategory;
  explorerDetail.innerHTML = `<div class="service-art-banner" aria-hidden="true"><span class="art-orbit"></span><span class="art-line"></span><div><span class="art-edition">DRAGON DANCE COMPANY / ${String(selectedSubservice+1).padStart(2,'0')}</span><strong>${headline}</strong></div><span class="art-spark">✦</span></div><div class="detail-copy"><span class="eyebrow">${category.label}</span><span class="detail-index">${String(selectedSubservice+1).padStart(2,'0')} / ${String(category.services.length).padStart(2,'0')}</span><h3>${name}</h3><h4 class="detail-subheading">${subheading}</h4><div class="service-mood-tags">${tags.split(" · ").map(tag=>`<span>${tag}</span>`).join("")}</div><p>${description}</p><p>${information}</p></div>
  <section class="service-photo-section" aria-label="${name} photo inspiration"><div class="service-media-heading"><span><b class="media-step">01</b> THE LOOK & THE MOMENT</span><span class="service-photo-count">01 / 04</span></div><div class="service-photo-slider" aria-roledescription="carousel">${media.photos.map((photo,i)=>`<figure class="service-photo-frame${i===0?' active':''}" aria-hidden="${i!==0}"><img src="${photo}" alt="Dragon Dance Company ${media.photoLabel}" loading="lazy"><figcaption>${media.photoLabel}</figcaption></figure>`).join('')}</div><div class="service-slider-controls"><button type="button" data-photo-action="prev" aria-label="Previous service photo">←</button><div class="service-photo-dots">${media.photos.map((_,i)=>`<button class="service-photo-dot" data-photo-index="${i}" aria-label="Show photo ${i+1}" aria-current="${i===0}"></button>`).join('')}</div><button type="button" data-photo-action="next" aria-label="Next service photo">→</button><button type="button" data-photo-action="pause" aria-label="Pause or play photo slideshow">${detailPaused?'Play':'Pause'}</button></div></section>
  <section class="service-video-section"><div class="service-media-heading"><span><b class="media-step">02</b> WATCH THE PERFORMANCE</span><span>02 VIDEOS</span></div><div class="service-video-grid">${media.videos.map((video,i)=>`<article class="service-video-card"><iframe src="https://www.youtube-nocookie.com/embed/${video.id}?rel=0" title="${video.title}" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><p>${video.title}</p><a href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noopener">Watch on YouTube ↗</a></article>`).join('')}</div><p class="service-media-note">${media.note}</p></section><div class="service-detail-footer"><div><span class="eyebrow">MAKE IT YOURS</span><p>Tell us your date, venue and ideas.</p></div><a class="button detail-book" href="${enquire}" target="_blank" rel="noopener">Enquire about ${name} ↗</a></div>`;
  detailPhotoIndex=0;runDetailSlider();
}
function renderSubservices() {
  const category = collections[selectedCategory];
  explorerCount.textContent = `${String(category.services.length).padStart(2,'0')} PERFORMANCES`;
  subserviceList.innerHTML = '';
  category.services.forEach(([name], index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `subservice-option${index === selectedSubservice ? ' is-active' : ''}`;
    button.setAttribute('role','tab');
    button.setAttribute('aria-selected', index === selectedSubservice ? 'true' : 'false');
    button.innerHTML = `<span class="subservice-number">${String(index + 1).padStart(2,'0')}</span><span class="subservice-name"></span><span class="subservice-arrow">↗</span>`;
    button.querySelector('.subservice-name').textContent = name;
    button.addEventListener('click', () => {
      selectedSubservice = index;
      subserviceList.querySelectorAll('.subservice-option').forEach((option, i) => {
        option.classList.toggle('is-active', i === index);
        option.setAttribute('aria-selected', i === index ? 'true' : 'false');
      });
      renderServiceDetail();
    });
    subserviceList.append(button);
  });
  renderServiceDetail();
}
function selectService(key, scroll = false) {
  if (!collections[key]) return;
  selectedCategory = key; selectedSubservice = 0;
  serviceCards.forEach(card => {
    const active = card.dataset.service === key;
    card.classList.toggle('is-selected', active);
    card.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  renderSubservices();
  if (scroll) document.querySelector('#service-explorer').scrollIntoView({behavior:'smooth',block:'start'});
}
serviceCards.forEach(card => card.addEventListener('click', () => selectService(card.dataset.service, true)));
document.querySelectorAll('[data-open-service]').forEach(button => button.addEventListener('click', () => selectService(button.dataset.openService, true)));
explorerDetail.addEventListener('click',event=>{
 const dot=event.target.closest('[data-photo-index]');
 const control=event.target.closest('[data-photo-action]');
 if(dot){setDetailPhoto(Number(dot.dataset.photoIndex));runDetailSlider();}
 if(control){const action=control.dataset.photoAction;if(action==='pause'){detailPaused=!detailPaused;control.textContent=detailPaused?'Play':'Pause';}else setDetailPhoto(detailPhotoIndex+(action==='next'?1:-1));runDetailSlider();}
});
let detailTouchX=0;
explorerDetail.addEventListener('touchstart',e=>{if(e.target.closest('.service-photo-slider'))detailTouchX=e.changedTouches[0].clientX;},{passive:true});
explorerDetail.addEventListener('touchend',e=>{if(e.target.closest('.service-photo-slider')){const delta=e.changedTouches[0].clientX-detailTouchX;if(Math.abs(delta)>40){setDetailPhoto(detailPhotoIndex+(delta<0?1:-1));runDetailSlider();}}},{passive:true});
document.addEventListener('visibilitychange',runDetailSlider);
selectService('bollywood');

// Photo viewer opens as a native dialog so tap targets work consistently on touch and desktop.
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const photoTiles = [...document.querySelectorAll('.photo-tile')];
let photoIndex = 0, photoTimer;
function showPhoto(index) {
  photoIndex = (index + photoTiles.length) % photoTiles.length;
  const tile = photoTiles[photoIndex];
  lightboxImage.src = tile.dataset.image;
  lightboxImage.alt = tile.querySelector('img').alt;
  lightbox.querySelector('.gallery-count').textContent = `${String(photoIndex+1).padStart(2,'0')} / ${photoTiles.length}`;
}
function pausePhotos() { clearInterval(photoTimer); photoTimer = null; lightbox.querySelector('.gallery-play').textContent = 'Play'; }
function playPhotos() { pausePhotos(); photoTimer = setInterval(()=>showPhoto(photoIndex+1),4000); lightbox.querySelector('.gallery-play').textContent = 'Pause'; }
function openPhotos(index) { showPhoto(index); lightbox.showModal(); document.body.classList.add('dialog-open'); }
photoTiles.forEach((tile,index)=>tile.addEventListener('click',()=>openPhotos(index)));
document.querySelector('.gallery-start').addEventListener('click',()=>{openPhotos(0);playPhotos();});
lightbox.querySelector('.gallery-first').addEventListener('click',()=>showPhoto(0));
lightbox.querySelector('.gallery-last').addEventListener('click',()=>showPhoto(photoTiles.length-1));
lightbox.querySelector('.gallery-prev').addEventListener('click',()=>showPhoto(photoIndex-1));
lightbox.querySelector('.gallery-next').addEventListener('click',()=>showPhoto(photoIndex+1));
lightbox.querySelector('.gallery-play').addEventListener('click',()=>photoTimer?pausePhotos():playPhotos());
lightbox.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();showPhoto(photoIndex+1);}if(e.key==='ArrowLeft'){e.preventDefault();showPhoto(photoIndex-1);}});
lightbox.querySelector('.dialog-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('close', () => {pausePhotos();document.body.classList.remove('dialog-open');});
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });
document.addEventListener('visibilitychange',()=>{if(document.hidden)pausePhotos();});

// Turn the booking form into a prefilled WhatsApp enquiry; the visitor confirms Send.
document.querySelector('#booking-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const fields = [
    'Hello Dragon Dance Company, I would like to enquire about an event.',
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Event type: ${data.get('event')}`,
    data.get('date') ? `Event date: ${data.get('date')}` : '',
    data.get('location') ? `Location: ${data.get('location')}` : '',
    data.get('message') ? `Details: ${data.get('message')}` : ''
  ].filter(Boolean).join('\n');
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(fields)}`, '_blank', 'noopener');
});
document.querySelector('#year').textContent = new Date().getFullYear();
