# The Panopticon Dial: India Surveillance Policy Simulator

An interactive, high-fidelity web-based simulator designed to explore the friction between national state surveillance (Nazar) and constitutional civil liberty (Aazadi) in India. The simulation models and figures are sourced from national reports and ground truth frameworks, including NCRB 2023, the Internet Freedom Foundation (IFF), NATGRID, SFLC.in, and the International Association of Privacy Professionals (IAPP).

## Overview

The simulator places you in control of India's national surveillance policy. By adjusting a central Surveillance Index Dial from 0 to 100, you scale active state policies—ranging from localized, warrant-based oversight to total algorithmic control—and witness their direct mathematical impact on state security, minority profiling, public trust, and individual liberties.

## Core Features

### 1. Interactive Policy Levers

- Granular Control: Shift from Minimal Oversight to Targeted Warrants, Balanced Watch, Mass Collection, and the Total Panopticon.

- Dynamic Policy Levers: Actively toggles real-world instruments like Smart City ANPR networks, DigiYatra biometrics, Pegasus precedents, CERT-In retention rules, IT Act Section 69 intercepts, and NATGRID integration.

### 2. Synthesised Retro-Cyber SFX Engine

- Procedural Mainframe Hum: Generates an ambient 55Hz mainframe hum pulsing with a low-frequency oscillator mod.

- Low-Latency Tactile Audio: Synthesizes custom square and triangle wave clicks on tab toggles and slider shifts to simulate hardware buttons.

- Alert Alarms: Plays clean frequency success chords for neutralized threats vs distorted sawtooth warning sweeps on civil liberties violations.

- Header Audio Controller: Includes a dedicated audio mute switch to toggle synthesised oscillators instantly.

### 3. Real-Time Graphical HUD

- Dynamic Metric Graphing: Draws a high-tech glowing canvas chart inside the Left Pane plotting False Positive Rates, Civil Liberty Indices, and Detection Efficacy over a running timeline.

- Visual Glitch Scanlines: Implements subtle analog overlay scanlines and flashes a heavy full-screen color rotation filter when critical rights violations trigger.

### 4. Interactive Diagnostics Panel

- Real-Time Feed: Tracks crime preventions and false profiling occurrences under active threat indices.

- City Camera Densities: Details CCTV counts and crime rates across major metros (Delhi, Mumbai, Bengaluru, Hyderabad, and more).

- Legal Framework: Explains legal statutes like Puttaswamy v. UoI (2017), the DPDP Act 2023, CERT-In directions, and legacy laws like the Telegraph Act 1885.

- Budget Assessments: Evaluates fiscal spending in INR Crore for CCTV, FRT, and AI networks based on index requirements.

- Historical Event Simulator: Replays situations like the 2008 Mumbai Attacks, Covid Lockdown, and Farmers Protests under current index parameters.

- National Security Feed: Fetches live regional headlines, falling back automatically to a localized secure news telemetry feed in offline environments.

### 5. Datasets Analyzer

- Upload `.json`, `.csv`, or `.pdf` criminal datasets.

- Parses records dynamically (using robust regex for quote-protected commas and configured PDF.js worker instances) to assess threat neutralizations versus profiling risks.

## Technical Stack

- Core: HTML5, Canvas API
- Styling: HSL Vanilla CSS
- Logic: Client-Side Vanilla JavaScript
- Audio: Web Audio API
- Parsing: PDF.js (v4.4.168)

## Local Development and Hosting

Since the simulator is entirely client-side, it operates directly as a local file or under standard web hosts.

### Option A: Local Browser File (Direct Run)
Double-click `index.html` to open the simulator directly in your browser. All audio synthesizers and news fallback caches function natively.

### Option B: Local Web Server
To resolve any localized browser origin restrictions (such as PDF uploading CORS safety rules), launch a simple server in your directory:

Using Python 3:
```bash
python -m http.server 8000
```
Using Node.js:
```bash
npx http-server -p 8000
```

Once running, navigate to `http://localhost:8000` in your web browser.

## Data and Reference Disclaimers

This simulation models political compromises using NCRB Conviction statistics, commercial CCTV projection CAGR rates, and reports published by digital liberties advocates. All calculations represent hypothetical scenarios designed for academic demonstration and system design studies.
