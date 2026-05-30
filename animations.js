

(function () {
  let audioCtx = null;
  let ambientOsc = null;
  let ambientGain = null;

  function initAudio() {
    if (audioCtx) return;
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      setupAmbientHum();
    } catch (e) {
      console.warn("Web Audio API not supported on this browser:", e);
    }
  }

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

      lfo.connect(lfoGain);
      lfoGain.connect(ambientOsc.frequency);
      lfo.start();

      ambientGain.gain.setValueAtTime(0.024, audioCtx.currentTime); 

      ambientOsc.connect(ambientGain);
      ambientGain.connect(audioCtx.destination);
      ambientOsc.start();
    } catch (err) {
      console.error("Ambient hum setup failed:", err);
    }
  }

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

  window.playClickSound = function () {
    initAudio();
    if (!audioCtx || window.isMuted) return;

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.07);
  };

  let lastSliderTime = 0;
  window.playSliderSound = function () {
    initAudio();
    if (!audioCtx || window.isMuted) return;

    const now = audioCtx.currentTime;
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

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
    } else if (type === 'innocent') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now); 
      osc.frequency.linearRampToValueAtTime(130, now + 0.15); 

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

      triggerGlitchEffect();
    } else {
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
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  });

  setInterval(updateAmbientHum, 500);


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

  function triggerGlitchEffect() {
    const layout = document.querySelector('.layout');
    if (!layout) return;

    layout.style.transition = 'none';
    layout.style.filter = 'hue-rotate(90deg) contrast(1.5) saturate(1.8)';
    document.body.style.boxShadow = 'inset 0 0 45px rgba(255, 68, 68, 0.28)';

    setTimeout(() => {
      layout.style.filter = '';
      layout.style.transition = 'filter 0.4s ease';
      document.body.style.boxShadow = '';
    }, 120);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createHUDOverlay);
  } else {
    createHUDOverlay();
  }
})();