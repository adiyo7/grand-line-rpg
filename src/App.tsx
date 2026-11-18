
import { useState } from "react";
import {
  ArrowRight, Award, BookOpen, Check, ChevronRight,
  Compass, Flame, Heart, Menu, Moon, Shield,
  Sparkles, Users, Waves, X
} from "lucide-react";

type CrewMate = {
  name: string;
  role: string;
  emoji: string;
  color: string;
  description: string;
};

const crew: CrewMate[] = [
  {
    name: "Captain",
    role: "Bold & upbeat",
    emoji: "☀️",
    color: "#f5a94e",
    description: "Celebrates every small win."
  },
  {
    name: "Swordsman",
    role: "Calm & focused",
    emoji: "⚔️",
    color: "#78c7a3",
    description: "Keeps you patient and focused."
  },
  {
    name: "Navigator",
    role: "Curious & clever",
    emoji: "🧭",
    color: "#8ba8ff",
    description: "Helps plan your weekly adventure."
  },
  {
    name: "Cook",
    role: "Warm & encouraging",
    emoji: "🍳",
    color: "#ff9b83",
    description: "Reminds you that rest matters too."
  }
];

const quests = [
  {
    title: "Warm-up voyage",
    detail: "Try 5 minutes of gentle mobility",
    reward: 20,
    icon: "🌊"
  },
  {
    title: "Deckhand duties",
    detail: "Take a relaxed movement break",
    reward: 15,
    icon: "⚓"
  },
  {
    title: "Logbook entry",
    detail: "Write one thing you enjoyed today",
    reward: 10,
    icon: "📖"
  }
];

export default function App() {
  const [selected, setSelected] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);
  const [showCrew, setShowCrew] = useState(false);
  const [restMode, setRestMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const berries = completed.reduce(
    (sum, index) => sum + quests[index].reward,
    0
  );

  function toggleQuest(index: number) {
    setCompleted(current =>
      current.includes(index)
        ? current.filter(item => item !== index)
        : [...current, index]
    );
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#">
          <span className="brand-mark">
            <Waves size={21} />
          </span>
          <span>GRAND LINE <b>RPG</b></span>
        </a>

        <nav className={showMenu ? "nav-links open" : "nav-links"}>
          <a href="#voyage">Voyage</a>
          <a href="#quests">Quests</a>
          <a href="#crew">Crew</a>
        </nav>

        <div className="top-actions">
          <div className="berry-pill">
            <span>🍒</span>
            <b>{berries}</b>
            <small>BERRIES</small>
          </div>

          <button
            className="icon-button menu-button"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle menu"
          >
            {showMenu ? <X size={19} /> : <Menu size={19} />}
          </button>

          <div className="avatar">☠️</div>
        </div>
      </header>

      <main>
        <section className="hero" id="voyage">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              YOUR NEXT ADVENTURE STARTS HERE
            </div>

            <h1>
              Set sail on your
              <br />
              <span>own grand journey.</span>
            </h1>

            <p className="hero-text">
              A little movement. A little adventure.
              A crew that cheers you on every step.
            </p>

            <div className="hero-buttons">
              <a className="primary-button" href="#quests">
                Explore today's quests <ArrowRight size={17} />
              </a>

              <button
                className="secondary-button"
                onClick={() => setShowCrew(true)}
              >
                <Users size={17} /> Meet your crew
              </button>
            </div>

            <div className="hero-note">
              <Shield size={15} />
              No streak pressure. Your pace is the right pace.
            </div>
          </div>

          <div className="hero-art">
            <div className="sun-glow" />
            <div className="sun" />
            <div className="cloud cloud-a" />
            <div className="cloud cloud-b" />
            <div className="island">
              <div className="island-top" />
              <div className="palm palm-a">🌴</div>
              <div className="palm palm-b">🌴</div>
            </div>
            <div className="sea sea-back" />
            <div className="sea sea-front" />
            <div className="ship">
              <div className="sail sail-one" />
              <div className="sail sail-two" />
              <div className="mast" />
              <div className="hull" />
              <div className="flag">✦</div>
            </div>
            <div className="art-label">
              <Compass size={14} /> THE OPEN SEA
            </div>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon gold"><Award size={19} /></div>
            <div>
              <small>ADVENTURE RANK</small>
              <strong>Deckhand <span>Ⅰ</span></strong>
              <p>Your journey is just beginning</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon blue"><Sparkles size={19} /></div>
            <div>
              <small>TOTAL BERRIES</small>
              <strong>{berries.toLocaleString()}</strong>
              <p>Earned at your own pace</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green"><Heart size={19} /></div>
            <div>
              <small>QUESTS COMPLETED</small>
              <strong>{completed.length}<span> / 3</span></strong>
              <p>Every effort counts</p>
            </div>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel quests-panel" id="quests">
            <div className="section-heading">
              <div>
                <div className="eyebrow">YOUR DAILY ADVENTURE</div>
                <h2>Today's quests</h2>
              </div>
              <span className="date-chip">
                DAY 01 <Sparkles size={13} />
              </span>
            </div>

            <p className="section-subtitle">
              Choose what feels right today. You can skip any quest.
            </p>

            <div className="quest-list">
              {quests.map((quest, index) => {
                const done = completed.includes(index);

                return (
                  <button
                    key={quest.title}
                    className={`quest-row ${done ? "done" : ""}`}
                    onClick={() => toggleQuest(index)}
                  >
                    <span className="quest-emoji">{quest.icon}</span>

                    <span className="quest-info">
                      <strong>{quest.title}</strong>
                      <small>{quest.detail}</small>
                    </span>

                    <span className="quest-reward">
                      +{quest.reward} <small>🍒</small>
                    </span>

                    <span className="quest-check">
                      {done
                        ? <Check size={16} />
                        : <ChevronRight size={17} />}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="quest-footer">
              <span><Flame size={15} /> Small steps make a great voyage.</span>
              <span>{completed.length} of 3 done</span>
            </div>
          </div>

          <div className="side-column">
            <div className="panel companion-panel" id="crew">
              <div className="section-heading">
                <div>
                  <div className="eyebrow">YOUR COMPANION</div>
                  <h2>Choose your guide</h2>
                </div>

                <button
                  className="text-button"
                  onClick={() => setShowCrew(true)}
                >
                  See all <ArrowRight size={14} />
                </button>
              </div>

              <div className="companion-card">
                <div
                  className="companion-avatar"
                  style={{
                    background: `${crew[selected].color}22`,
                    borderColor: `${crew[selected].color}66`
                  }}
                >
                  {crew[selected].emoji}
                </div>

                <div className="companion-details">
                  <strong>{crew[selected].name}</strong>
                  <small>{crew[selected].role}</small>
                  <p>{crew[selected].description}</p>
                </div>
              </div>

              <div className="crew-dots">
                {crew.map((mate, index) => (
                  <button
                    key={mate.name}
                    className={selected === index ? "active" : ""}
                    onClick={() => setSelected(index)}
                    aria-label={`Choose ${mate.name}`}
                    style={{
                      "--mate-color": mate.color
                    } as React.CSSProperties}
                  >
                    {mate.emoji}
                  </button>
                ))}
              </div>

              <div className="companion-quote">
                “Every great voyage begins with one small step.”
              </div>
            </div>

            <div className={`panel rest-panel ${restMode ? "rest-active" : ""}`}>
              <div className="rest-icon"><Moon size={18} /></div>

              <div className="rest-copy">
                <strong>
                  {restMode ? "Rest day activated" : "Need a quieter day?"}
                </strong>
                <p>
                  {restMode
                    ? "No quests today. Rest is part of the adventure."
                    : "Switch to rest mode whenever you need it."}
                </p>
              </div>

              <button
                className="toggle"
                onClick={() => setRestMode(!restMode)}
                aria-label="Toggle rest mode"
              >
                <span />
              </button>
            </div>
          </div>
        </section>

        <section className="bottom-banner">
          <div className="banner-icon"><BookOpen size={22} /></div>

          <div>
            <strong>Your logbook is waiting.</strong>
            <p>Keep track of the little wins that make your story yours.</p>
          </div>

          <button
            className="banner-button"
            onClick={() => alert("Logbook is coming in a future update!")}
          >
            Open logbook <ArrowRight size={15} />
          </button>
        </section>

        <footer>
          <span>GRAND LINE RPG <b>·</b> FAN-MADE CONCEPT</span>
          <span>Made for adventure, not pressure. <Heart size={12} /></span>
        </footer>
      </main>

      {showCrew && (
        <div
          className="modal-backdrop"
          onClick={() => setShowCrew(false)}
        >
          <div
            className="crew-modal"
            onClick={event => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowCrew(false)}
              aria-label="Close"
            >
              <X size={19} />
            </button>

            <div className="eyebrow">PICK YOUR ADVENTURE STYLE</div>
            <h2>Meet the crew</h2>

            <p className="section-subtitle">
              Choose the encouragement you want.
              You can change it anytime.
            </p>

            <div className="modal-crew-list">
              {crew.map((mate, index) => (
                <button
                  key={mate.name}
                  className={`modal-crew-item ${selected === index ? "selected" : ""}`}
                  onClick={() => {
                    setSelected(index);
                    setShowCrew(false);
                  }}
                >
                  <span
                    className="modal-emoji"
                    style={{ background: `${mate.color}22` }}
                  >
                    {mate.emoji}
                  </span>

                  <span>
                    <strong>{mate.name}</strong>
                    <small>{mate.description}</small>
                  </span>

                  {selected === index && <Check size={18} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
                 }
                
