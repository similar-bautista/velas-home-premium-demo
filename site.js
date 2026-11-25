(function () {
  const variant = document.body.dataset.variant || 'professional';
  const phone = '(631) 555-0142';
  const phoneLink = '+16315550142';
  const services = [
    ['01', 'Home Remodeling', 'Thoughtful updates that make your home work better, room by room.', 'home-remodeling'],
    ['02', 'Hardwood Flooring', 'Warm, lasting floors installed with care and attention to detail.', 'hardwood-flooring'],
    ['03', 'Bathroom Remodeling', 'A more comfortable bathroom, shaped around your everyday routine.', 'bathroom-remodeling'],
    ['04', 'Kitchen Remodeling', 'A refreshed kitchen designed for cooking, gathering and living.', 'kitchen-remodeling'],
    ['05', 'Painting Services', 'Interior and exterior painting to bring a fresh finish to your space.', 'painting'],
    ['06', 'Tree Cutting & Removal', 'Tree removal and trimming planned with care for your property.', 'tree-removal']
  ];
  const serviceCards = services.map(function (item) {
    return '<article class="service-item"><span class="service-number">' + item[0] + ' / SERVICE</span><h3>' + item[1] + '</h3><p>' + item[2] + '</p></article>';
  }).join('');
  const premiumServiceCards = services.map(function (item) {
    return '<article class="premium-service-card"><span class="service-number">' + item[0] + ' / SPECIALTY</span><h3>' + item[1] + '</h3><p>' + item[2] + '</p><a href="services/' + item[3] + '.html">Explore this service <span>↗</span></a></article>';
  }).join('');  const header = function (solid) {
    let links = '<a href="#services">Services</a><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact</a>';
    if (variant === 'essential') links = '<a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a>';
    if (variant === 'premium') links = '<a href="#services">Services</a><a href="#projects">Portfolio</a><a href="#process">Our process</a><a href="#faq">FAQs</a><a href="#contact">Contact</a>';
    return '<header class="site-header' + (solid ? ' solid' : '') + '"><a class="logo" href="#top" aria-label="Velas Home Improvement home"><span class="logo-symbol">V</span><span class="logo-name">VELAS HOME<small>IMPROVEMENT LLC</small></span></a><button class="menu-toggle" aria-label="Open menu" aria-expanded="false">☰</button><nav class="main-nav">' + links + '<a class="nav-cta" href="#contact">' + (variant === 'essential' ? 'Call now' : 'Request an estimate') + ' <span>↗</span></a></nav></header>';
  };  const footer = '<footer class="site-footer"><span>VELAS HOME IMPROVEMENT LLC</span></footer>';
  const heroActions = variant === 'essential'
    ? '<div class="hero-actions"><a class="button" href="#contact">Contact details <span>↗</span></a><a class="button outline" href="tel:' + phoneLink + '">Call now</a></div>'
    : variant === 'professional'
      ? '<div class="hero-actions"><a class="button" href="#contact">Request an estimate <span>↗</span></a><a class="button outline" href="https://wa.me/16315550142?text=Hello%20Velas%20Home%20Improvement" target="_blank" rel="noopener">WhatsApp <span>↗</span></a></div>'
      : '<div class="hero-actions premium-actions"><a class="button" href="#contact">Plan a project <span>↗</span></a><a class="button light" href="https://wa.me/16315550142?text=Hello%20Velas%20Home%20Improvement" target="_blank" rel="noopener">WhatsApp <span>↗</span></a><a class="button outline" href="tel:' + phoneLink + '">Call ' + phone + '</a></div>';
  const form = '<form class="estimate-form"><div class="form-grid"><div class="field"><label for="full-name">Your name</label><input id="full-name" name="name" placeholder="Jane Smith" required></div><div class="field"><label for="email">Email address</label><input id="email" name="email" type="email" placeholder="you@example.com" required></div><div class="field"><label for="service">Service needed</label><input id="service" name="service" placeholder="Kitchen remodeling"></div><div class="field"><label for="zip">ZIP code</label><input id="zip" name="zip" placeholder="11701"></div><div class="field full"><label for="message">Tell us about your project</label><textarea id="message" name="message" placeholder="What would you like to improve?"></textarea></div><div class="field full"><button class="button dark" type="submit">Send estimate request <span>↗</span></button><p class="form-success">Demo form only. No information was sent.</p></div></div></form>';
  const premiumForm = [
    '<form class="quote-wizard">',
    '<div class="wizard-heading"><div><span class="eyebrow">PROJECT PLANNER · DEMO</span><h3>Tell us what you are planning.</h3><button type="button" class="sample-request-button">Preview a sample request ↗</button></div><span class="wizard-count">STEP <b class="current-step">1</b> OF 3</span></div>',
    '<div class="wizard-progress"><span></span></div>',
    '<fieldset class="quote-step active"><legend>What would you like help with?</legend><div class="service-choices">',
    '<label><input type="radio" name="project-service" value="Home Remodeling" required><span>Home remodeling</span></label><label><input type="radio" name="project-service" value="Hardwood Flooring"><span>Hardwood flooring</span></label><label><input type="radio" name="project-service" value="Bathroom Remodeling"><span>Bathroom</span></label><label><input type="radio" name="project-service" value="Kitchen Remodeling"><span>Kitchen</span></label><label><input type="radio" name="project-service" value="Painting Services"><span>Painting</span></label><label><input type="radio" name="project-service" value="Tree Removal"><span>Tree removal</span></label></div><div class="wizard-actions"><span></span><button class="button dark wizard-next" type="button">Next step <span>→</span></button></div></fieldset>',
    '<fieldset class="quote-step" hidden><legend>Where and when?</legend><div class="form-grid"><div class="field"><label for="quote-zip">Project ZIP code</label><input id="quote-zip" name="zip" inputmode="numeric" placeholder="11701" required></div><div class="field"><label for="quote-time">When are you hoping to begin?</label><select id="quote-time" name="time" required><option value="">Select a timeframe</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Just exploring ideas</option></select></div><div class="field full"><label for="quote-notes">A little about the project</label><textarea id="quote-notes" name="notes" placeholder="What would you like to improve?"></textarea></div></div><div class="wizard-actions"><button class="button outline wizard-back" type="button">← Back</button><button class="button dark wizard-next" type="button">Next step <span>→</span></button></div></fieldset>',
    '<fieldset class="quote-step" hidden><legend>How can the team reach you?</legend><div class="form-grid"><div class="field"><label for="quote-name">Name</label><input id="quote-name" name="name" placeholder="Your name" required></div><div class="field"><label for="quote-email">Email</label><input id="quote-email" name="email" type="email" placeholder="you@example.com" required></div><div class="field full"><label for="quote-phone">Phone</label><input id="quote-phone" name="phone" type="tel" placeholder="Your phone number"></div><div class="field full"><label for="quote-contact">Preferred contact method</label><select id="quote-contact" name="contact-method" required><option value="">Choose one</option><option>Phone call</option><option>Text message</option><option>WhatsApp</option><option>Email</option></select></div></div><p class="wizard-privacy">Demo only: this form does not transmit or store your answers.</p><div class="wizard-actions"><button class="button outline wizard-back" type="button">← Back</button><button class="button dark" type="submit">Review request <span>↗</span></button></div></fieldset>',
    '<p class="form-success">Demo request preview complete. No information was sent.</p></form>'
  ].join('');  let markup = '';
  if (variant === 'essential') {
    markup = '<div id="top">' + header(false) + '<section class="hero"><div class="hero-content"><div class="eyebrow">HOME IMPROVEMENT · LONG ISLAND, NY (SAMPLE)</div><h1>A home that feels more like you.</h1><p>From the first idea to the finishing touches, discover a simpler way to make your home work beautifully.</p>' + heroActions + '<div class="hero-meta"><span>Remodeling</span><span>Flooring</span><span>Painting</span></div></div></section></div>' +
      '<section class="section compact" id="services"><div class="section-heading"><div class="eyebrow">WHAT WE DO</div><h2>Good work starts with a clear plan.</h2><p>A straightforward overview of the home improvement services available in this sample concept.</p></div><div class="service-grid">' + serviceCards + '</div></section>' +
      '<section class="section muted-bg"><div class="split"><div class="split-photo" role="img" aria-label="Illustrative remodeled interior stock photo"></div><div class="split-copy" id="about"><div class="eyebrow">A BETTER HOME, MADE SIMPLE</div><h2>One team for the spaces you live in.</h2><p>Tell us what you want to change. We will listen, talk through the possibilities and help you plan a next step that fits your home.</p><ul class="check-list"><li>Clear communication from first contact</li><li>Careful attention to the details</li><li>Work planned around your space</li></ul><a class="button dark" href="#contact">Talk about your project <span>↗</span></a></div></div></section>' +
      '<section class="center-cta"><div class="eyebrow">LET’S GET STARTED</div><h2>What would you like to improve?</h2><p>Reach out to discuss your project and request an estimate.</p><a class="button light" href="#contact">Contact our team <span>↗</span></a></section>' +
      '<section class="section essential-contact" id="contact"><div class="essential-contact-card"><div><div class="eyebrow">ONE SIMPLE NEXT STEP</div><h2>Call and talk it through.</h2><p>Keep the first version simple: a direct phone call and email, with no long form to fill out.</p></div><div class="essential-contact-actions"><a class="button dark" href="tel:' + phoneLink + '">Call ' + phone + ' <span>↗</span></a><a class="button outline" href="mailto:hello@velashome.example">Email the team <span>↗</span></a><small>Sample hours: Mon–Fri · 8:00 AM–5:00 PM<br>Sample service area: Long Island, New York</small></div></div></section>' + footer;
  } else if (variant === 'professional') {
    markup = '<div id="top">' + header(false) + '<section class="hero"><div class="hero-content"><div class="hero-kicker">REMODELING · FLOORING · PAINTING</div><div class="eyebrow" style="margin-top:22px">LONG ISLAND, NY · SAMPLE SERVICE AREA</div><h1>Spaces made for living.</h1><p>Bring new life to your home with considered remodeling, quality finishes and a team that puts your project first.</p>' + heroActions + '</div></section></div>' +
      '<div class="trust-strip"><div><strong>01—06</strong>Home improvement services</div><div><strong>Built around you</strong>Personal project conversations</div><div><strong>Sample concept</strong>Replace with approved facts</div></div>' +
      '<section class="section" id="services"><div class="section-heading"><div class="eyebrow">OUR SERVICES</div><h2>From one room to a whole-home refresh.</h2><p>Clear service descriptions make it easy to find the right place to start.</p></div><div class="service-grid">' + serviceCards + '</div></section>' +
      '<section class="section muted-bg" id="projects"><div class="section-heading"><div class="eyebrow">PROJECT INSPIRATION</div><h2>Imagine what your space could become.</h2><p>These stock images set the visual direction. They are not photos of Velas Home Improvement projects.</p></div><div class="before-after-wrap"><div class="before-after"><div class="ba-panel before"><span class="ba-label">BEFORE · SAMPLE IMAGE</span></div><div class="ba-panel after"><span class="ba-label">AFTER · SAMPLE IMAGE</span></div><div class="ba-warning">Illustrative concept only · unrelated stock photos · not a real before/after project</div></div></div><div class="project-grid" style="margin-top:18px"><article class="project-card"><img src="https://images.unsplash.com/photo-1690310588533-6043216b0b5f?auto=format&fit=crop&w=1200&q=85" alt="Modern white kitchen inspiration"><div class="project-caption"><small>Kitchen inspiration · stock image</small><h3>A brighter place to gather.</h3></div></article><article class="project-card"><img src="https://images.unsplash.com/photo-1638799869566-b17fa794c4de?auto=format&fit=crop&w=900&q=85" alt="Contemporary bathroom inspiration"><div class="project-caption"><small>Bathroom inspiration · stock image</small><h3>Everyday, reimagined.</h3></div></article></div></section>' +
      '<section class="section"><div class="split"><div class="split-copy" id="about"><div class="eyebrow">A SIMPLE PROCESS</div><h2>Good communication, at every step.</h2><p>Home projects feel easier when everyone knows what happens next. This sample process gives visitors a clear path from first question to a finished space.</p><ul class="check-list"><li>Share your idea and project needs</li><li>Discuss the scope and next steps</li><li>Plan the work and refresh your home</li></ul><a class="button dark" href="#contact">Start a conversation <span>↗</span></a></div><div class="split-photo" role="img" aria-label="Warm modern home inspiration photo"></div></div></section>' +
      '<section class="center-cta"><div class="eyebrow">YOUR NEXT PROJECT</div><h2>Let’s make room for what’s next.</h2><p>Use a clear call to action to help homeowners take the next step.</p><a class="button light" href="#contact">Request an estimate <span>↗</span></a></section>' +
      '<section class="section" id="contact"><div class="contact-grid"><div><div class="eyebrow">GET IN TOUCH</div><div class="section-heading"><h2>Tell us what you have in mind.</h2><p>Share a few details and start a conversation about your home.</p></div><div class="contact-detail"><small>Call or text · sample number</small><strong>' + phone + '</strong></div><div class="contact-detail"><small>Email · sample address</small><strong>hello@velashome.example</strong></div><div class="contact-detail"><small>Sample service area</small><strong>Long Island, New York</strong></div><div class="contact-detail"><small>Sample hours</small><strong>Mon–Fri · 8:00 AM–5:00 PM</strong></div><div class="contact-actions"><a class="button dark" href="tel:+16315550142">Call</a><a class="button whatsapp" href="https://wa.me/16315550142?text=Hello%20Velas%20Home%20Improvement" target="_blank" rel="noopener">WhatsApp ↗</a></div></div><div>' + form + '</div></div></section>' + footer;
  } else {
    markup = '<div id="top">' + header(true) + '<section class="hero"><div class="hero-content"><div class="eyebrow">VELAS HOME IMPROVEMENT · SAMPLE CONCEPT</div><h1>Considered renovations. Beautifully lived in.</h1><p>Thoughtful home improvements with a personal approach, from the first conversation to the final detail.</p>' + heroActions + '<div class="hero-meta"><span>Long Island, NY · sample area</span><span>Residential renovation</span></div></div></section></div>' +
      '<section class="section" id="about"><div class="premium-intro"><div><div class="eyebrow">THE VELAS APPROACH</div><div class="big-number">01</div></div><div><h2 class="section-heading" style="margin-bottom:14px">A home should feel good to come back to.</h2><p>This expanded concept gives the company room to tell a fuller story: what it does, how a project moves forward, and where a homeowner can start. All company claims and details remain placeholders pending approval.</p></div></div></section>' +
      '<section class="section muted-bg" id="services"><div class="section-heading"><div class="eyebrow">SERVICES, WITH CARE</div><h2>Thoughtful work for the spaces that matter.</h2><p>Explore the areas where the team can help. Final service details should be reviewed by the owner.</p></div><div class="service-grid">' + premiumServiceCards + '</div></section>' +
      '<section class="section" id="projects"><div class="section-heading"><div class="eyebrow">PROJECT STORIES</div><h2>Ideas for a more considered home.</h2><p>Sample editorial gallery. Replace each inspiration image with an authorized client project photo before publication.</p></div><div class="story-grid"><article class="story-card"><img src="https://images.unsplash.com/photo-1682888813789-c39fe30921e2?auto=format&fit=crop&w=1200&q=85" alt="Open-plan kitchen inspiration"><div class="story-card-copy"><span class="sample-tag">STOCK PHOTO · CONCEPT ONLY</span><h3>A kitchen with room to gather.</h3><p>Use project stories to show the space, the homeowner’s goals and the design decisions behind the finished result.</p></div></article><article class="story-card"><img src="https://images.unsplash.com/photo-1638799869566-b17fa794c4de?auto=format&fit=crop&w=1200&q=85" alt="Modern bathroom inspiration"><div class="story-card-copy"><span class="sample-tag">STOCK PHOTO · CONCEPT ONLY</span><h3>A calmer start to the day.</h3><p>Add before-and-after images only when they document the same real project and the client approves their use.</p></div></article></div><div class="premium-carousel" aria-label="Project inspiration slideshow"><div class="carousel-topline"><span>THE PROJECT EDIT</span><span>INSPIRATION GALLERY · SAMPLE PHOTOS</span></div><div class="carousel-frame"><button type="button" class="carousel-arrow" data-dir="-1" aria-label="Previous slide">←</button><div class="carousel-track"><article class="premium-slide active"><img src="https://images.unsplash.com/photo-1690310588533-6043216b0b5f?auto=format&fit=crop&w=1600&q=85" alt="White marble kitchen inspiration"><div class="slide-caption"><small>01 / KITCHEN</small><h3>Light, considered, made for gathering.</h3></div></article><article class="premium-slide"><img src="https://images.unsplash.com/photo-1638799869566-b17fa794c4de?auto=format&fit=crop&w=1600&q=85" alt="Modern bathroom inspiration"><div class="slide-caption"><small>02 / BATHROOM</small><h3>A quieter start to the day.</h3></div></article><article class="premium-slide"><img src="https://images.unsplash.com/photo-1682888813789-c39fe30921e2?auto=format&fit=crop&w=1600&q=85" alt="Open-plan kitchen inspiration"><div class="slide-caption"><small>03 / OPEN PLAN</small><h3>Room to cook, talk and stay awhile.</h3></div></article><article class="premium-slide"><img src="https://images.unsplash.com/photo-1755316388093-faff473ffdfb?auto=format&fit=crop&w=1600&q=85" alt="Kitchen island and countertop inspiration"><div class="slide-caption"><small>04 / DETAILS</small><h3>Materials that make the room feel personal.</h3></div></article></div><button type="button" class="carousel-arrow" data-dir="1" aria-label="Next slide">→</button></div><div class="carousel-controls"><div class="carousel-dots" aria-label="Choose a slide"></div><span class="carousel-note">Stock imagery · not company projects</span></div></div><div class="before-after" style="margin-top:20px"><div class="ba-panel before"><span class="ba-label">BEFORE · SAMPLE IMAGE</span></div><div class="ba-panel after"><span class="ba-label">AFTER · SAMPLE IMAGE</span></div><div class="ba-warning">Demonstration treatment only · two unrelated stock photos, not an actual project pair</div></div></section>' +
      '<section class="section muted-bg" id="process"><div class="section-heading"><div class="eyebrow">HOW IT COMES TOGETHER</div><h2>A clear path from idea to finished space.</h2></div><div class="process-grid"><article class="process-item"><span>STEP 01</span><h3>Listen</h3><p>Learn what matters most to the homeowner and the space.</p></article><article class="process-item"><span>STEP 02</span><h3>Plan</h3><p>Confirm project details, priorities and the next steps.</p></article><article class="process-item"><span>STEP 03</span><h3>Build</h3><p>Carry out the work with clear communication along the way.</p></article><article class="process-item"><span>STEP 04</span><h3>Enjoy</h3><p>Welcome a refreshed space that feels right for home.</p></article></div></section>' +
      '<section class="section" id="faq"><div class="section-heading" style="text-align:center;margin-left:auto;margin-right:auto"><div class="eyebrow">GOOD TO KNOW</div><h2>Common questions, answered.</h2><p>These sample responses must be replaced with client-approved details.</p></div><div class="faq-list"><details class="faq-item"><summary>Which areas do you serve?</summary><p>Sample response: Long Island, New York. Confirm the actual cities and counties with the business owner before publication.</p></details><details class="faq-item"><summary>How do I request an estimate?</summary><p>Use the contact form or call the sample phone number shown in this demo. Replace it with a verified business contact before launch.</p></details><details class="faq-item"><summary>Can I see examples of your previous work?</summary><p>This preview uses stock photos for design direction. Add only real project photos that the company owns or has permission to publish.</p></details></div></section>' +
      '<section class="center-cta"><div class="eyebrow">A MORE PERSONAL HOME STARTS HERE</div><h2>Let’s talk about what you’re imagining.</h2><p>Invite homeowners to share their goals and begin a project conversation.</p><a class="button light" href="#contact">Request an estimate <span>↗</span></a></section>' +
      '<section class="section" id="contact"><div class="contact-grid"><div><div class="eyebrow">CONTACT THE TEAM</div><div class="section-heading"><h2>Tell us a little about your project.</h2><p>Complete the steps to see how a request would appear in the sample inbox. No email is sent.</p></div><div class="contact-detail"><small>Call or text · sample number</small><strong>' + phone + '</strong></div><div class="contact-detail"><small>Sample email</small><strong>hello@velashome.example</strong></div><div class="contact-detail"><small>Sample service area</small><strong>Long Island, New York</strong></div><div class="contact-detail"><small>Sample hours</small><strong>Mon–Fri · 8:00 AM–5:00 PM</strong></div><div class="premium-contact-actions"><a class="button dark" href="tel:+16315550142">Call now <span>↗</span></a><a class="button outline" href="sms:+16315550142">Text us <span>↗</span></a><a class="button whatsapp" href="https://wa.me/16315550142?text=Hello%20Velas%20Home%20Improvement" target="_blank" rel="noopener">WhatsApp <span>↗</span></a></div><div class="coverage-card"><div><div class="eyebrow">SAMPLE SERVICE AREA</div><h3>Long Island, New York</h3><p>Illustrative coverage only. Confirm the cities and counties before launch.</p><div class="coverage-tags"><span>Nassau · sample</span><span>Suffolk · sample</span></div></div><svg class="coverage-map" viewBox="0 0 420 180" role="img" aria-label="Illustrative Long Island service area diagram"><path d="M8 96 C72 70 112 88 160 82 C218 75 256 99 310 81 C352 67 379 65 412 44" fill="none" stroke="#b5a47d" stroke-width="30" stroke-linecap="round"/><path d="M8 96 C72 70 112 88 160 82 C218 75 256 99 310 81 C352 67 379 65 412 44" fill="none" stroke="#f6f2e9" stroke-width="2" stroke-dasharray="6 9"/><path d="M66 20 L108 155 M183 18 L222 160 M314 16 L280 148" stroke="#cbd0c4" stroke-width="2"/><circle cx="120" cy="84" r="8" fill="#726f54"/><circle cx="298" cy="82" r="8" fill="#726f54"/><text x="80" y="58" font-size="11" fill="#555d55">NASSAU*</text><text x="260" y="58" font-size="11" fill="#555d55">SUFFOLK*</text></svg></div><small class="map-caption">*Placeholder labels · not a navigation map or confirmed service boundary</small></div></div><div class="contact-panel">' + premiumForm + '</div></div></section>' + footer;
  }
  if (variant === 'premium') markup += '<div class="mail-preview-backdrop" id="mail-preview" aria-hidden="true"><section class="mail-app" role="dialog" aria-modal="true" aria-labelledby="mail-title"><header class="mail-app-header"><div class="mail-app-brand"><span class="mail-app-logo">V</span><div><strong id="mail-title">Velas Demo Inbox</strong><small>LOCAL PREVIEW · NO EMAIL SENT</small></div></div><button type="button" class="mail-close" aria-label="Close inbox preview">×</button></header><div class="mail-toolbar"><span>INBOX</span><span class="mail-demo-badge">DEMO MAILBOX</span></div><div class="mail-layout"><aside class="mail-side"><div class="mail-compose">✉ &nbsp; Inbox</div><div class="mail-folder active">Inbox <b>1</b></div><div class="mail-folder">Starred</div><div class="mail-folder">Sent</div><div class="mail-folder">Drafts</div><div class="mail-folder">Archive</div><div class="mail-side-note">This is a simulated inbox shown only inside the local website demo.</div></aside><main class="mail-message"><div class="mail-message-label">NEW PROJECT REQUEST <span>JUST ARRIVED · DEMO</span></div><h2 id="mail-subject">New estimate request</h2><div class="mail-sender"><div class="mail-avatar" id="mail-avatar">J</div><div class="mail-sender-info"><strong id="mail-sender-name">Jordan Example</strong><span id="mail-sender-email">jordan@example.com</span><small>to Velas Home Improvement · demo inbox</small></div><time id="mail-received-time">Just now</time></div><div class="mail-details"><div><small>SERVICE</small><strong id="mail-service">Kitchen Remodeling</strong></div><div><small>PROJECT ZIP</small><strong id="mail-zip">11701</strong></div><div><small>TIMING</small><strong id="mail-timing">Within 1–3 months</strong></div><div><small>PREFERRED CONTACT</small><strong id="mail-contact">Email</strong></div><div><small>PHONE</small><strong id="mail-phone">(631) 555-0134</strong></div></div><div class="mail-body"><small>PROJECT NOTES</small><p id="mail-notes">Update the kitchen layout, cabinets and countertops.</p></div><div class="mail-demo-footer"><span>LOCAL SIMULATION</span><p>This preview is not an actual email. The form answers were not transmitted or saved.</p><button type="button" class="button dark mail-close-action">Return to the Premium site</button></div></main></div></section></div>';  const demoBanner = document.getElementById('demo-banner');
  if (demoBanner) demoBanner.innerHTML = '<div class="demo-ribbon">DEMO PREVIEW</div>';
  const siteRoot = document.getElementById('site-root');
  if (siteRoot) siteRoot.innerHTML = markup + '<div class="demo-toast" role="status">Demo only — nothing was sent.</div>';
  if (variant === 'premium' && siteRoot) siteRoot.insertAdjacentHTML('beforeend', '<aside class="floating-contact" aria-label="Quick contact actions"><span>QUICK CONTACT · DEMO</span><a href="tel:+16315550142" aria-label="Call sample number">☎</a><a href="sms:+16315550142" aria-label="Text sample number">✉</a><a href="https://wa.me/16315550142?text=Hello%20Velas%20Home%20Improvement" target="_blank" rel="noopener" aria-label="WhatsApp sample number">◉</a></aside>');  const slides = Array.from(document.querySelectorAll('.premium-slide'));
  const dotsHost = document.querySelector('.carousel-dots');
  if (slides.length && dotsHost) {
    let activeSlide = 0;
    dotsHost.innerHTML = slides.map(function (_, index) { return '<button type="button" class="carousel-dot' + (index === 0 ? ' active' : '') + '" data-slide="' + index + '" aria-label="Go to slide ' + (index + 1) + '"></button>'; }).join('');
    const dots = Array.from(dotsHost.querySelectorAll('.carousel-dot'));
    function showSlide(index) {
      activeSlide = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) { slide.classList.toggle('active', i === activeSlide); });
      dots.forEach(function (dot, i) { dot.classList.toggle('active', i === activeSlide); });
    }
    document.querySelectorAll('.carousel-arrow').forEach(function (button) { button.addEventListener('click', function () { showSlide(activeSlide + Number(button.dataset.dir)); }); });
    dots.forEach(function (dot) { dot.addEventListener('click', function () { showSlide(Number(dot.dataset.slide)); }); });
  }  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.textContent = open ? '×' : '☰'; });
    nav.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', function () { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = '☰'; }); });
  }
  function openInboxPreview(values) {
    const inbox = document.getElementById('mail-preview');
    if (!inbox) return;
    const setText = function (id, value, fallback) { const node = inbox.querySelector('#' + id); if (node) node.textContent = value || fallback; };
    const service = values.service || 'Home improvement project';
    const name = values.name || 'Website visitor';
    setText('mail-subject', 'New estimate request — ' + service, 'New estimate request');
    setText('mail-sender-name', name, 'Website visitor');
    setText('mail-sender-email', values.email, 'No email provided');
    setText('mail-avatar', name.trim().charAt(0).toUpperCase(), 'V');
    setText('mail-service', service, 'Not selected');
    setText('mail-zip', values.zip, 'Not provided');
    setText('mail-timing', values.time, 'Not provided');
    setText('mail-contact', values.contact, 'Not selected');
    setText('mail-phone', values.phone, 'Not provided');
    setText('mail-notes', values.notes, 'No project notes added.');
    setText('mail-received-time', new Date().toLocaleString('en-US', { hour: 'numeric', minute: '2-digit' }), 'Just now');
    inbox.classList.add('open');
    inbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('mail-preview-open');
    const closeButton = inbox.querySelector('.mail-close');
    if (closeButton) closeButton.focus();
  }
  function closeInboxPreview() {
    const inbox = document.getElementById('mail-preview');
    if (!inbox) return;
    inbox.classList.remove('open');
    inbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('mail-preview-open');
  }
  document.querySelectorAll('.mail-close, .mail-close-action').forEach(function (button) { button.addEventListener('click', closeInboxPreview); });
  const inboxBackdrop = document.getElementById('mail-preview');
  if (inboxBackdrop) inboxBackdrop.addEventListener('click', function (event) { if (event.target === inboxBackdrop) closeInboxPreview(); });
  document.addEventListener('keydown', function (event) { if (event.key === 'Escape') closeInboxPreview(); });
  function readQuoteValues(wizard) {
    const data = new FormData(wizard);
    return { service: data.get('project-service'), zip: data.get('zip'), time: data.get('time'), notes: data.get('notes'), name: data.get('name'), email: data.get('email'), phone: data.get('phone'), contact: data.get('contact-method') };
  }
  document.querySelectorAll('.sample-request-button').forEach(function (button) {
    button.addEventListener('click', function () {
      const wizard = button.closest('.quote-wizard');
      if (!wizard) return;
      const sample = { service: 'Kitchen Remodeling', zip: '11701', time: 'Within 1–3 months', notes: 'Update the kitchen layout, cabinets and countertops.', name: 'Jordan Example', email: 'jordan@example.com', phone: '(631) 555-0134', contact: 'Email' };
      const service = wizard.querySelector('input[name="project-service"][value="Kitchen Remodeling"]');
      if (service) service.checked = true;
      const fields = { zip: sample.zip, time: sample.time, notes: sample.notes, name: sample.name, email: sample.email, phone: sample.phone, 'contact-method': sample.contact };
      Object.keys(fields).forEach(function (key) { const input = wizard.querySelector('[name="' + key + '"]'); if (input) input.value = fields[key]; });
      openInboxPreview(sample);
    });
  });  document.querySelectorAll('.quote-wizard').forEach(function (wizard) {
    const steps = Array.from(wizard.querySelectorAll('.quote-step'));
    const counter = wizard.querySelector('.current-step');
    const progress = wizard.querySelector('.wizard-progress span');
    let stepIndex = 0;
    function showStep(index) {
      stepIndex = Math.max(0, Math.min(index, steps.length - 1));
      steps.forEach(function (step, i) { step.hidden = i !== stepIndex; step.classList.toggle('active', i === stepIndex); });
      if (counter) counter.textContent = String(stepIndex + 1);
      if (progress) progress.style.width = ((stepIndex + 1) / steps.length * 100) + '%';
    }
    wizard.querySelectorAll('.wizard-next').forEach(function (button) {
      button.addEventListener('click', function () {
        const fields = Array.from(steps[stepIndex].querySelectorAll('input, select, textarea'));
        const invalid = fields.find(function (field) { return !field.checkValidity(); });
        if (invalid) { invalid.reportValidity(); return; }
        showStep(stepIndex + 1);
      });
    });
    wizard.querySelectorAll('.wizard-back').forEach(function (button) {
      button.addEventListener('click', function () { showStep(stepIndex - 1); });
    });
    wizard.addEventListener('submit', function (event) {
      event.preventDefault();
      openInboxPreview(readQuoteValues(wizard));
      const success = wizard.querySelector('.form-success');
      if (success) success.classList.add('show');
    });
    showStep(0);
  });  document.querySelectorAll('.estimate-form').forEach(function (estimateForm) {
    estimateForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const success = estimateForm.querySelector('.form-success');
      if (success) success.classList.add('show');
      const toast = document.querySelector('.demo-toast');
      if (toast) { toast.classList.add('show'); window.setTimeout(function () { toast.classList.remove('show'); }, 2800); }
      estimateForm.reset();
    });
  });
}());













