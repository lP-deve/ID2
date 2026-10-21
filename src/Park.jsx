import React from "react";
import "./Park.css";

const features = [
  {
    id: "evening-trails",
    category: "rest",
    categoryLabel: "სივრცე",
    title: "ბილიკები",
    text: "მოწესრიგებული, ფართო ბილიკები კომფორტული და მშვიდი გასეირნებისთვის.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19l16 0" />
        <path d="M4 15l16 0" />
        <path d="M8 5l8 14" />
      </svg>
    ),
  },
  {
    id: "light-path",
    category: "rest",
    categoryLabel: "განათება",
    title: "განათება",
    text: "რბილი, ბუნებრივ გარემოსთან შერწყმული და ენერგოეფექტური განათება, რომელიც პარკს საღამოობით განსაკუთრებულ, ჯადოსნურ ატმოსფეროს ანიჭებს.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ),
  },
  {
    id: "green-canopy-benches",
    category: "rest",
    categoryLabel: "დასვენება",
    title: "სკამები",
    text: "კომფორტული სკამები — საუკეთესო სივრცე კითხვისთვის, საუბრისა და განტვირთვისთვის.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-2V7a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v3H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z" />
        <path d="M6 18v3" />
        <path d="M18 18v3" />
      </svg>
    ),
  },

  {
    id: "open-air-cinema",
    category: "rest",
    categoryLabel: "ღონისძიებები",
    title: "ღია ცის ქვეშ კინოჩვენებები",
    text: "თბილ საღამოებსა და უქმეებზე — კლასიკური ფილმები, ანიმაციები და საგანმანათლებლო დოკუმენტური კინო ღია ცის ქვეშ, მყუდრო და მეგობრულ ატმოსფეროში.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    ),
  },
  {
    id: "sensory-garden",
    category: "nature",
    categoryLabel: "ბუნება",
    title: "სურნელოვანი ბალახების ბაღი",
    text: "ლავანდის, პიტნისა და არომატული მცენარეების კუთხე, სადაც სტუმრებს შეუძლიათ შეეხონ, შეიგრძნონ სურნელი და დაისვენონ.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    ),
    },
    {
    id: "quiet-zone",
    category: "rest",
    categoryLabel: "სიწყნარე",
    title: "მყუდრო მედიტაციისა და წიგნის კუთხე",
    text: "ხმაურისგან დაცული, სიმშვიდის ზონა  სადაც სტუმრებს შეუძლიათ განმარტოება და ბუნების ხმებით ტკბობა.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
  },
];

function Park() {
  return (
    <section className="park-poster">
      <header className="park-poster__hero">
        <span className="park-poster__label">ინოვაციური საზოგადოებრივი სივრცე</span>
      

      <div className="park-poster__quote">
        <span>„პარკი, სადაც დასვენება გიხარია“</span>
        <p>ინოვაცია • განათება • ჰარმონია • განტვირთვა</p>
              </div>
              </header>

      <div className="park-poster__grid">
        {features.map((feature, index) => (
          <article className="park-poster__card" key={feature.id}>
            <div className="park-poster__card-header">
              <div className="park-poster__icon-wrapper">{feature.icon}</div>
              <span className="park-poster__number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <span className="park-poster__badge">{feature.categoryLabel}</span>

            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>

      <footer className="park-poster__footer">
        <h2>ერთად შევქმნათ უფრო საინტერესო, თანამედროვე და სიცოცხლით სავსე სივრცე.</h2>
      </footer>
    </section>
  );
}

export default Park;