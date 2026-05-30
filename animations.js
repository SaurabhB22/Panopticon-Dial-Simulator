
/**
 * Panopticon Dial — Premium Cyber-HUD & SFX Engine
 * Implements retro-futuristic synthesised audio feedback via Web Audio API
 * and immersive visual scanline overlay HUD mechanics.
 */

(function () {
  let audioCtx = null;
  let ambientOsc = null;
  let ambientGain = null;


  // Initialize Web Audio API safely on first user gesture

  function initAudio() {
    if (audioCtx) return;
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      setupAmbientHum();
    } catch (e) {
      console.warn("Web Audio API not supported on this browser:", e);
    }
  }


  // Setup a deep, futuristic science-fiction background hum

  function setupAmbientHum() {
    if (!audioCtx || window.isMuted) return;

    try {
      ambientOsc = audioCtx.createOscillator();
      ambientGain = audioCtx.createGain();


      ambientOsc.type = 'sine';
      ambientOsc.frequency.setValueAtTime(55, audioCtx.currentTime); 

      const lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.setValueAtTime(0.35, audioCtx.currentTime); 
      lfoGain.gain.setValueAtTime(12, audioCtx.currentTime); 

      // Deep frequency for an ambient mainframe computer hum
      ambientOsc.type = 'sine';
      ambientOsc.frequency.setValueAtTime(55, audioCtx.currentTime); // 55Hz (low A)

      // Add a low-frequency oscillator (LFO) to create a gentle breathing/pulse effect
      const lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.setValueAtTime(0.35, audioCtx.currentTime); // 0.35Hz pulse
      lfoGain.gain.setValueAtTime(12, audioCtx.currentTime); // mod frequency by 12Hz


      lfo.connect(lfoGain);
      lfoGain.connect(ambientOsc.frequency);
      lfo.start();


      ambientGain.gain.setValueAtTime(0.024, audioCtx.currentTime); 

      ambientGain.gain.setValueAtTime(0.024, audioCtx.currentTime); // Very subtle, non-intrusive volume

      ambientOsc.connect(ambientGain);
      ambientGain.connect(audioCtx.destination);
      ambientOsc.start();
    } catch (err) {
      console.error("Ambient hum setup failed:", err);
    }
  }


  // Handle ambient hum volume changes

  function updateAmbientHum() {
    if (!audioCtx) return;
    if (window.isMuted) {
      if (ambientGain) {
        ambientGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.1);
      }
    } else {
      if (!ambientOsc) {
        setupAmbientHum();
      } else if (ambientGain) {
        ambientGain.gain.setTargetAtTime(0.024, audioCtx.currentTime, 0.2);
      }
    }
  }

  // Synthesize a retro high-tech chirpy click/beep sound
  window.playClickSound = function () {
    initAudio();
    if (!audioCtx || window.isMuted) return;

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';

    // Chirp: start high and pitch down rapidly

    osc.frequency.setValueAtTime(1800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.07);
  };


  // Synthesize a soft tactile click for rapid slider adjustments
  let lastSliderTime = 0;
  window.playSliderSound = function () {
    initAudio();
    if (!audioCtx || window.isMuted) return;

    const now = audioCtx.currentTime;


    // Throttle slider sound slightly to prevent extreme distortion
    if (now - lastSliderTime < 0.04) return;
    lastSliderTime = now;

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.setValueAtTime(260, now + 0.01);

    gain.gain.setValueAtTime(0.03, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(now + 0.03);
  };

  // Synthesize high-fidelity alarm signals
  window.playAlertSound = function (type) {
    initAudio();
    if (!audioCtx || window.isMuted) return;

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    if (type === 'threat') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); 
      osc.frequency.setValueAtTime(880.00, now + 0.08); 
      // "Threat neutralized" — Success, clean cyber-melody (glowing green event)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.setValueAtTime(880.00, now + 0.08); // A5
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
    } else if (type === 'innocent') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now); 
      osc.frequency.linearRampToValueAtTime(130, now + 0.15); 
      // "Innocents profiled" — Error, dramatic dual-pitch alarm (glowing red event)
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now); // Low A
      osc.frequency.linearRampToValueAtTime(130, now + 0.15); // Slide down
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

      triggerGlitchEffect();
    } else {

      // Trigger a visual glitch overlay on the screen for threat level red
      triggerGlitchEffect();
    } else {
      // Neutral log tick
      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, now);
      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
    }

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(now + 0.3);
  };
  window.addEventListener('click', function () {
  // Listen to mute events
  window.addEventListener('click', function () {
    // Standard user-interaction audio context bootstrapper
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  });


  setInterval(updateAmbientHum, 500);

  // Watch window.isMuted changes to toggle background hum
  setInterval(updateAmbientHum, 500);

  // --- Cyber-HUD Glitch Scanlines and Screen Glitch Overlay ---

  // Dynamic visual scanner overlay
  function createHUDOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'cyberScanlines';
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(
        to bottom,
        rgba(255,255,255,0),
        rgba(255,255,255,0) 50%,
        rgba(0, 0, 0, 0.15) 50%,
        rgba(0, 0, 0, 0.15)
      );
      background-size: 100% 4px;
      pointer-events: none;
      z-index: 9998;
      opacity: 0.22;
    `;
    document.body.appendChild(overlay);
  }
  // Flash glitch effect when a civil liberties infringement event triggers
  function triggerGlitchEffect() {
    const layout = document.querySelector('.layout');
    if (!layout) return;

    layout.style.transition = 'none';
    layout.style.filter = 'hue-rotate(90deg) contrast(1.5) saturate(1.8)';
    
    // Add a glowing alert border briefly
    document.body.style.boxShadow = 'inset 0 0 45px rgba(255, 68, 68, 0.28)';

    setTimeout(() => {
      layout.style.filter = '';
      layout.style.transition = 'filter 0.4s ease';
      document.body.style.boxShadow = '';
    }, 120);
  }
  // Initialize visual systems on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createHUDOverlay);
  } else {
    createHUDOverlay();
  }
})();