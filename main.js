/* ============================================================
   LUMA HOUSE — INTERACTIVE LUXURY ENGINE
   Features: Frosted Glass Nav, Specular Reflection Parallax,
   3D Card Tilt with Glare Tracking, Testimonial Rotator,
   Ambient Cursor Glow, and Fluid Scroll Reveals
   ============================================================ */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. AMBIENT CURSOR GLOW ────────────────────────────── */
  if (!reduced && window.matchMedia('(pointer: fine)').matches) {
    var cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    cursorGlow.style.cssText =
      'position: fixed;' +
      'width: 480px;' +
      'height: 480px;' +
      'border-radius: 50%;' +
      'background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.02) 45%, transparent 70%);' +
      'pointer-events: none;' +
      'z-index: 1;' +
      'transform: translate(-50%, -50%);' +
      'transition: opacity 600ms ease;' +
      'opacity: 0;' +
      'will-change: transform;';
    document.body.appendChild(cursorGlow);

    var curX = -500, curY = -500;
    var targetX = -500, targetY = -500;
    var glowVisible = false;

    window.addEventListener('mousemove', function (e) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!glowVisible) {
        cursorGlow.style.opacity = '1';
        glowVisible = true;
      }
    }, { passive: true });

    window.addEventListener('mouseleave', function () {
      cursorGlow.style.opacity = '0';
      glowVisible = false;
    });

    function loopCursor() {
      curX += (targetX - curX) * 0.12;
      curY += (targetY - curY) * 0.12;
      cursorGlow.style.left = curX + 'px';
      cursorGlow.style.top = curY + 'px';
      requestAnimationFrame(loopCursor);
    }
    requestAnimationFrame(loopCursor);
  }

  /* ── 2. HERO PARALLAX ──────────────────────────────────── */
  var heroImg = document.querySelector('.hero-media img');
  if (heroImg && !reduced) {
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (y < window.innerHeight * 1.4) {
        heroImg.style.transform = 'translateY(' + (y * 0.22) + 'px)';
      }
    }, { passive: true });
  }

  /* ── 3. FLOATING GLASS NAV: SCROLL SYNC ─────────────────── */
  var nav = document.querySelector('.nav');
  if (nav) {
    function syncNav() {
      var scrolled = window.scrollY > 40;
      nav.classList.toggle('solid', scrolled);
    }
    window.addEventListener('scroll', syncNav, { passive: true });
    syncNav();
  }

  /* ── 4. SCROLL REVEAL (INTERSECTION OBSERVER) ───────────── */
  var revealEls = document.querySelectorAll(
    '.reveal,' +
    '.reflection-eyebrow,' +
    '.reflection-tagline,' +
    '.reflection-img-wrap,' +
    '.reflection-statement,' +
    '.reflection-sub'
  );

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── 5. SPECULAR REFLECTION PARALLAX ───────────────────── */
  var refSection = document.querySelector('.reflection-section');
  var refPrimary = document.querySelector('.reflection-img-wrap img');
  var refMirror  = document.querySelector('.reflection-mirror img');

  if (refSection && refPrimary && refMirror && !reduced) {
    window.addEventListener('scroll', function () {
      var rect = refSection.getBoundingClientRect();
      var vh   = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      var p = Math.max(0, Math.min(1, 1 - rect.top / vh));
      refPrimary.style.transform = 'translateY(' + (-p * 18) + 'px)';
      refMirror.style.transform  = 'scaleY(-1) translateY(' + (-p * 9) + 'px)';
    }, { passive: true });
  }

  /* ── 6. SCROLL-DRIVEN 3D CAMERA ORBIT & MULTI-CHAPTER STAGE ── */
  var scrollSection = document.getElementById('horizon-scroll-section');
  var featuredCard = document.getElementById('featured-tilt-card');
  var featuredImg = document.getElementById('featured-showcase-img');
  var scrubberBar = document.getElementById('tilt-scrubber-bar');
  var hudText = document.getElementById('tilt-hud-text');
  var hudTabs = document.querySelectorAll('.hud-tab');

  var chap1 = document.getElementById('horizon-chap-1');
  var chap2 = document.getElementById('horizon-chap-2');
  var chap3 = document.getElementById('horizon-chap-3');

  if (featuredImg) {
    var totalFrames = 240;
    var currentFrame = 0;
    var frameCache = [];

    // Asynchronous background frame preloader
    function preloadFrames() {
      for (var i = 0; i < totalFrames; i++) {
        var img = new Image();
        var num = String(i).padStart(4, '0');
        img.src = 'assets/frames/frames2/frame_' + num + '.jpg';
        frameCache.push(img);
      }
    }
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(preloadFrames);
    } else {
      setTimeout(preloadFrames, 200);
    }

    function setFrame(idx) {
      idx = Math.max(0, Math.min(totalFrames - 1, Math.round(idx)));
      if (idx !== currentFrame) {
        currentFrame = idx;
        var num = String(idx).padStart(4, '0');
        featuredImg.src = 'assets/frames/frames2/frame_' + num + '.jpg';
        if (scrubberBar) {
          scrubberBar.style.width = ((idx / (totalFrames - 1)) * 100).toFixed(1) + '%';
        }
      }
    }

    // Interactive chapter tabs in HUD
    hudTabs.forEach(function (tab) {
      tab.addEventListener('click', function (e) {
        e.stopPropagation();
        if (!scrollSection) return;
        var targetChapter = parseInt(tab.getAttribute('data-chapter'), 10);
        var rect = scrollSection.getBoundingClientRect();
        var sectionTop = window.scrollY + rect.top;
        var totalScrollable = rect.height - window.innerHeight;
        
        var targetProgress = 0.08;
        if (targetChapter === 2) targetProgress = 0.48;
        if (targetChapter === 3) targetProgress = 0.82;

        window.scrollTo({
          top: sectionTop + (totalScrollable * targetProgress),
          behavior: 'smooth'
        });
      });
    });

    // Scroll scrubber & chapter director
    function handleScroll() {
      if (!scrollSection) return;
      var rect = scrollSection.getBoundingClientRect();
      var vh = window.innerHeight;
      var totalScrollable = rect.height - vh;
      if (totalScrollable <= 0) return;

      var scrolled = -rect.top;
      var progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      var target = Math.round(progress * (totalFrames - 1));
      setFrame(target);

      var degrees = Math.round(progress * 360);

      // Chapter Director: crossfades chapters smoothly over moving background
      if (progress < 0.33) {
        if (chap1) chap1.classList.add('active');
        if (chap2) chap2.classList.remove('active');
        if (chap3) chap3.classList.remove('active');
        if (hudText) hudText.textContent = '3D Orbit · Horizon Pavilion · ' + degrees + '°';
        syncHudTab(1);
      } else if (progress < 0.66) {
        if (chap1) chap1.classList.remove('active');
        if (chap2) chap2.classList.add('active');
        if (chap3) chap3.classList.remove('active');
        if (hudText) hudText.textContent = 'Spatial Scale & Metrics · ' + degrees + '°';
        syncHudTab(2);
      } else {
        if (chap1) chap1.classList.remove('active');
        if (chap2) chap2.classList.remove('active');
        if (chap3) chap3.classList.add('active');
        if (hudText) hudText.textContent = 'Studio Philosophy · Dusk · ' + degrees + '°';
        syncHudTab(3);
      }
    }

    function syncHudTab(chapNum) {
      hudTabs.forEach(function (tab) {
        var num = parseInt(tab.getAttribute('data-chapter'), 10);
        tab.classList.toggle('active', num === chapNum);
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial sync

    // 3D Perspective Tilt on Horizon Card
    if (featuredCard && !reduced) {
      featuredCard.addEventListener('pointermove', function (e) {
        var rect = featuredCard.getBoundingClientRect();
        var x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        var y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
        var rotY = (x - 0.5) * 14;
        var rotX = (0.5 - y) * 14;
        featuredCard.style.transform = 'perspective(1200px) rotateX(' + rotX.toFixed(2) + 'deg) rotateY(' + rotY.toFixed(2) + 'deg) scale3d(1.015, 1.015, 1.015)';
      });

      featuredCard.addEventListener('pointerleave', function () {
        featuredCard.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    }
  }

  // General 3D tilt for cards with [data-tilt]
  if (!reduced) {
    var otherCards = document.querySelectorAll('[data-tilt]:not(#featured-tilt-card)');
    otherCards.forEach(function (card) {
      card.style.transformStyle = 'preserve-3d';
      card.style.transition = 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 350ms ease';

      card.addEventListener('pointermove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width;
        var y = (e.clientY - rect.top) / rect.height;
        var rotY = (x - 0.5) * 10;
        var rotX = (0.5 - y) * 10;
        card.style.transform = 'perspective(1100px) rotateX(' + rotX.toFixed(2) + 'deg) rotateY(' + rotY.toFixed(2) + 'deg) scale3d(1.012, 1.012, 1.012)';
      });

      card.addEventListener('pointerleave', function () {
        card.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    });
  }

  /* ── 7. CIRCADIAN LIGHTING MOOD SWITCHER (REFLECTION STAGE) ─ */
  var lightBtns = document.querySelectorAll('[data-light-mode]');
  var refViewport = document.getElementById('reflection-viewport');

  lightBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      lightBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var mode = btn.getAttribute('data-light-mode');
      if (refViewport) {
        refViewport.classList.toggle('dusk', mode === 'dusk');
      }
    });
  });

  /* ── 8. BESPOKE SERVICES EXPANDABLE DRAWERS ─────────────── */
  var svcCards = document.querySelectorAll('.svc-glass-card');
  svcCards.forEach(function (card) {
    card.addEventListener('click', function () {
      var isOpen = card.classList.contains('open');
      // Optional: close other open drawers
      svcCards.forEach(function (c) { c.classList.remove('open'); });
      if (!isOpen) {
        card.classList.add('open');
      }
    });
  });

  /* ── 9. TESTIMONIAL CAROUSEL & PROGRESS BAR ─────────────── */
  var tWrap = document.querySelector('[data-testimonials]');
  if (tWrap) {
    var testimonials = [
      {
        quote:   'Luma House understood exactly what we didn’t know we wanted.',
        name:    'Sarah & Tom Ellison',
        project: 'Highgate Residence · 340 sqm',
        avatar:  'SE'
      },
      {
        quote:   'Every decision felt considered with profound restraint. Nothing was ever just decoration.',
        name:    'Michael Renner',
        project: 'Bermondsey Loft · 210 sqm',
        avatar:  'MR'
      },
      {
        quote:   'The interplay between raking daylight and raw Roman travertine creates a tranquility that transforms each morning.',
        name:    'Anaïs Girard',
        project: 'Chiswick Mews · 185 sqm',
        avatar:  'AG'
      },
      {
        quote:   'They gave us one unified direction, and it proved to be breathtakingly timeless.',
        name:    'Edward & Laura Vance',
        project: 'Dulwich House · 410 sqm',
        avatar:  'EV'
      }
    ];

    var qEl      = tWrap.querySelector('[data-quote]');
    var cEl      = tWrap.querySelector('[data-cite]');
    var cSubEl   = tWrap.querySelector('[data-cite-sub]');
    var avatarEl = document.getElementById('testimonial-avatar');
    var barEl    = document.getElementById('testimonial-progress');
    var dEl      = tWrap.querySelector('[data-dots]');
    var prevBtn  = tWrap.querySelector('.t-prev-btn');
    var nextBtn  = tWrap.querySelector('.t-next-btn');

    var tIdx     = 0;
    var dots     = [];
    var tDuration = 6000;
    var tStart   = Date.now();
    var isPaused = false;
    var tRafId   = null;

    testimonials.forEach(function (_, i) {
      var d = document.createElement('button');
      d.className = 't-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Testimonial ' + (i + 1));
      d.addEventListener('click', function () { goToTestimonial(i); });
      dEl.appendChild(d);
      dots.push(d);
    });

    function renderTestimonial() {
      var item = testimonials[tIdx];
      if (qEl) qEl.textContent = '\u201C' + item.quote + '\u201D';
      if (cEl) cEl.textContent = item.name;
      if (cSubEl) cSubEl.textContent = item.project;
      if (avatarEl) avatarEl.textContent = item.avatar;
      dots.forEach(function (d, i) { d.classList.toggle('active', i === tIdx); });
    }

    function goToTestimonial(i) {
      tIdx = (i + testimonials.length) % testimonials.length;
      tStart = Date.now();
      if (!reduced && qEl) {
        qEl.style.opacity   = '0';
        qEl.style.transform = 'translateY(8px)';
        setTimeout(function () {
          renderTestimonial();
          qEl.style.opacity   = '1';
          qEl.style.transform = 'translateY(0)';
        }, 220);
      } else {
        renderTestimonial();
      }
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goToTestimonial(tIdx - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goToTestimonial(tIdx + 1); });

    function loopProgress() {
      if (!isPaused) {
        var elapsed = Date.now() - tStart;
        var p = Math.min(1, elapsed / tDuration);
        if (barEl) barEl.style.width = (p * 100).toFixed(1) + '%';
        if (elapsed >= tDuration) {
          goToTestimonial(tIdx + 1);
        }
      }
      tRafId = requestAnimationFrame(loopProgress);
    }

    tWrap.addEventListener('mouseenter', function () { isPaused = true; });
    tWrap.addEventListener('mouseleave', function () { isPaused = false; tStart = Date.now(); });

    renderTestimonial();
    tRafId = requestAnimationFrame(loopProgress);
  }

  /* ── 10. CTA TYPOLOGY SELECTOR & QUICK CONTACT COPY ─────── */
  var typologyPills = document.querySelectorAll('.typology-pill');
  var ctaBtn = document.getElementById('cta-action-btn');
  var ctaBtnText = document.getElementById('cta-btn-text');

  typologyPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      typologyPills.forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
      var scope = pill.getAttribute('data-scope');
      if (ctaBtn) {
        ctaBtn.href = 'contact.html?scope=' + encodeURIComponent(scope);
      }
      if (ctaBtnText) {
        ctaBtnText.textContent = 'Enquire: ' + pill.textContent.trim();
      }
    });
  });

  var emailCopyBtn = document.getElementById('quick-email-copy');
  var copyStatus = document.getElementById('qc-copy-status');
  if (emailCopyBtn) {
    emailCopyBtn.addEventListener('click', function () {
      var email = emailCopyBtn.getAttribute('data-email') || 'clerkenwell@lumahouse.co.uk';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function () {
          if (copyStatus) {
            copyStatus.textContent = 'Copied ✓';
            copyStatus.style.color = '#4ade80';
            setTimeout(function () {
              copyStatus.textContent = 'Copy';
              copyStatus.style.color = 'var(--accent)';
            }, 2000);
          }
        });
      }
    });
  }

  /* ── 11. LIVE LONDON STUDIO CLOCK ───────────────────────── */
  var londonClock = document.getElementById('london-clock');
  function updateLondonClock() {
    if (!londonClock) return;
    var now = new Date();
    // Format in London time (Europe/London)
    var timeStr = now.toLocaleTimeString('en-GB', {
      timeZone: 'Europe/London',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    londonClock.textContent = 'London Studio · ' + timeStr + ' GMT · Open';
  }
  updateLondonClock();
  setInterval(updateLondonClock, 15000);

  /* ── 12. MONOGRAPH REQUEST FORM ─────────────────────────── */
  var monoForm = document.getElementById('monograph-form');
  var monoMsg = document.getElementById('monograph-msg');
  var monoInput = document.getElementById('monograph-email');
  if (monoForm) {
    monoForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (monoMsg && monoInput) {
        var email = monoInput.value.trim();
        monoMsg.textContent = 'Monograph requested for ' + email + ' · Digital PDF dispatched.';
        monoInput.value = '';
        monoInput.disabled = true;
      }
    });
  }

  /* ── 13. FLOATING BACK TO TOP BUTTON ────────────────────── */
  var backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    window.addEventListener('scroll', function () {
      var show = window.scrollY > window.innerHeight * 0.7;
      backToTopBtn.classList.toggle('visible', show);
    }, { passive: true });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── 14. CONTACT FORM INTERACTION (STANDALONE CONTACT PAGE) ─ */
  var inquiryForm = document.querySelector('.inquiry-form');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = inquiryForm.querySelector('.submit-btn');
      if (btn) {
        btn.textContent = 'Enquiry Received · Director in Touch Shortly';
        btn.disabled    = true;
      }
    });
  }

})();
