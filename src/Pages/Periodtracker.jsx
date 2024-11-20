import React, { useState } from "react";
import "./CSS/Periodtracker.css";

const PeriodTracker = () => {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28); // Default average cycle length
  const [nextPeriod, setNextPeriod] = useState("");

  const calculateNextPeriod = () => {
    if (lastPeriod) {
      const lastDate = new Date(lastPeriod);
      lastDate.setDate(lastDate.getDate() + cycleLength);
      setNextPeriod(lastDate.toDateString());
    }
  };

  return (
    <div className="period-tracker-container">
      <header className="tracker-header">
        <h1>Period Tracker & Awareness</h1>
        <p>Track your cycle and learn more about menstrual health.</p>
      </header>

      {/* Period Tracker Section */}
      <section className="tracker-section">
        <h2>Track Your Cycle</h2>
        <form onSubmit={(e) => e.preventDefault()} className="tracker-form">
          <label>
            Last Period Start Date:
            <input
              type="date"
              value={lastPeriod}
              onChange={(e) => setLastPeriod(e.target.value)}
            />
          </label>
          <label>
            Average Cycle Length (days):
            <input
              type="number"
              min="21"
              max="35"
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
            />
          </label>
          <button type="button" onClick={calculateNextPeriod}>
            Predict Next Period
          </button>
        </form>
        {nextPeriod && (
          <div className="tracker-result">
            <h3>Your next period is expected on:</h3>
            <p>{nextPeriod}</p>
          </div>
        )}
      </section>

      {/* Educational Content Section */}
      <section className="education-section">
        <h2>All About Periods</h2>
        <p>
          Menstruation, commonly known as a period, is a natural process that occurs in the female body as part of the menstrual cycle. It involves the shedding of the uterine lining when pregnancy does not occur.
        </p>
        <ul className="tips-list">
          <li><strong>Common Symptoms:</strong> Cramps, bloating, mood swings, and fatigue.</li>
          <li><strong>Hygiene Tips:</strong> Use clean sanitary products, wash regularly, and avoid scented products.</li>
          <li><strong>Dietary Advice:</strong> Stay hydrated, eat iron-rich foods, and limit caffeine.</li>
        </ul>
      </section>

      {/* FAQs Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What is a menstrual cycle?</h3>
          <p>
            A menstrual cycle is the monthly hormonal cycle a woman's body goes through to prepare for pregnancy. The average cycle length is 28 days, but it can vary.
          </p>
        </div>
        <div className="faq-item">
          <h3>How can I reduce cramps?</h3>
          <p>
            Exercise regularly, use a heating pad, stay hydrated, and consider over-the-counter pain relief if necessary.
          </p>
        </div>
        <div className="faq-item">
          <h3>What are irregular periods?</h3>
          <p>
            Irregular periods occur when the cycle length varies significantly. Causes include stress, hormonal imbalances, and lifestyle changes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PeriodTracker;
