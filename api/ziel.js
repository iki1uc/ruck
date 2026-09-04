// ================================================================
// GLEICHUNG – Orbit‑Berechnung
// ================================================================
const Gleichung = {
  stage: 0,

  setStage(v) {
    this.stage = v;
  },

  run() {
    // Beispiel‑Gleichung: Orbit‑Transformation
    // Du kannst sie später ersetzen
    const x = this.stage;

    // Orbit‑Formel (A81‑Logik)
    const result = (x * 3) % 243;

    return result;
  }
};
