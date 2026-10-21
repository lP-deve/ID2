
import { useState } from "react";
import "./Edu.css";

const sections = [
  {
    id: "need",
    category: "need",
    badge: "საჭიროება",
    title: "რატომ არის პროექტი მნიშვნელოვანი?",
    desc: "პანკისის ხეობაში მცხოვრები ახალგაზრდებისთვის ახმეტაში ან სხვა დასახლებებში გადაადგილება დამატებით დროსა და ფინანსურ ხარჯებთან არის დაკავშირებული. ადგილობრივი საგანმანათლებლო სივრცე მათ მისცემს შესაძლებლობას, საჭირო ცოდნა და ციფრული უნარები საცხოვრებელ ადგილთან ახლოს განივითარონ."
  },
  {
    id: "education",
    category: "goals",
    badge: "განათლება",
    title: "საგანმანათლებლო შესაძლებლობები",
    desc: "კომპიუტერებითა და ინტერნეტით აღჭურვილი სივრცის შექმნა, სადაც ახალგაზრდები შეძლებენ ციფრული წიგნიერების განვითარებას, ონლაინ რესურსების გამოყენებასა და პროფესიული განათლების შესაძლებლობების გაცნობას."
  },
  {
    id: "digital",
    category: "goals",
    badge: "ციფრული უნარები",
    title: "ციფრული ცოდნის განვითარება",
    desc: "კომპიუტერის გამოყენების, ინტერნეტში ინფორმაციის მოძიების, ონლაინ სახელმწიფო სერვისებით სარგებლობისა და ციფრული უნარების განვითარების ხელშეწყობა."
  },
  {
    id: "career",
    category: "results",
    badge: "პროფესიული განვითარება",
    title: "ახალი შესაძლებლობები ახალგაზრდებისთვის",
    desc: "პროფესიული განათლების, კარიერული დაგეგმვისა და დასაქმების შესაძლებლობების შესახებ ინფორმირებულობის გაზრდა."
  },
  {
    id: "inclusion",
    category: "results",
    badge: "თანაბარი შესაძლებლობები",
    title: "განათლება ყველასთვის",
    desc: "საგანმანათლებლო რესურსებზე ხელმისაწვდომობის გაუმჯობესება ქალებისთვის, ახალგაზრდებისთვის, შშმ პირებისა და სხვა დაინტერესებული მაცხოვრებლებისთვის."
  },
  {
    id: "reintegration",
    category: "results",
    badge: "რეინტეგრაცია",
    title: "დაბრუნებული მიგრანტების ჩართულობა",
    desc: "დაბრუნებული მიგრანტებისთვის ახალი უნარების განვითარების, გამოცდილების გაზიარებისა და ადგილობრივ საზოგადოებრივ ცხოვრებაში ჩართულობის შესაძლებლობების შექმნა."
  }
];

const filters = [
  { id: "all", label: "ყველა" },
  { id: "need", label: "საჭიროება" },
  { id: "goals", label: "მიზნები" },
  { id: "results", label: "შედეგები" }
];

function Edu() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSections =
    activeTab === "all"
      ? sections
      : sections.filter(
          (item) => item.category === activeTab
        );

  return (
    <main className="center-container">
      <header className="center-hero">
        <span className="center-hero__badge">
          სათემო პროექტის იდეა • პანკისის ხეობა
        </span>

        <h1 className="center-hero__title">
          ახალგაზრდებისა და ციფრული უნარების სათემო ცენტრი
        </h1>

        <p className="center-hero__subtitle">
          განათლებაზე ხელმისაწვდომობის გაზრდა, ციფრული უნარების
          განვითარება და პროფესიული შესაძლებლობების ხელშეწყობა
          პანკისის ხეობაში.
        </p>

        <div className="center-hero__stats">
          <div className="stat-card">
            <span className="stat-card__val">
              განათლება
            </span>
            <span className="stat-card__lbl">
              ცოდნისა და უნარების განვითარება
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-card__val">
              ხელმისაწვდომობა
            </span>
            <span className="stat-card__lbl">
              სწავლა საცხოვრებელ ადგილთან ახლოს
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-card__val">
              განვითარება
            </span>
            <span className="stat-card__lbl">
              პროფესიული და სოციალური შესაძლებლობები
            </span>
          </div>
        </div>
      </header>

      <section className="center-section">
        <h2 className="section-title">
          პროექტის იდეა
        </h2>

        <div className="bento-grid">
          <article className="bento-card bento-card--featured">
            <span className="bento-card__tag">
              მთავარი მიზანი
            </span>

            <h3>
              განათლებისა და ციფრული რესურსების ხელმისაწვდომობა
            </h3>

            <p>
              პანკისის ხეობაში თანამედროვე სასწავლო სივრცის შექმნა,
              რომელიც ახალგაზრდებსა და ადგილობრივ მოსახლეობას
              დაეხმარება ციფრული წიგნიერების განვითარებაში,
              პროფესიული შესაძლებლობების გაცნობასა და ახალი
              ცოდნის მიღებაში.
            </p>
          </article>

          <article className="bento-card">
            <span className="bento-card__tag">
              საჭიროება
            </span>

            <h3>
              სწავლის ბარიერების შემცირება
            </h3>

            <p>
              ადგილობრივი სასწავლო სივრცე შეამცირებს ახმეტაში
              გადაადგილების საჭიროებას და ხელს შეუწყობს
              საგანმანათლებლო რესურსებზე წვდომას.
            </p>
          </article>

          <article className="bento-card">
            <span className="bento-card__tag">
              საზოგადოებრივი სარგებელი
            </span>

            <h3>
              თემის გაძლიერება
            </h3>

            <p>
              ცენტრი ხელს შეუწყობს ცოდნის გაზიარებას, პროფესიულ
              განვითარებას, თანაბარ შესაძლებლობებსა და დაბრუნებული
              მიგრანტების საზოგადოებრივ ცხოვრებაში ჩართულობას.
            </p>
          </article>
        </div>
      </section>

      <section className="center-section">
        <h2 className="section-title">
          რას მოიცავს პროექტი?
        </h2>

        <div className="tripartite-grid">
          <article className="tripartite-card">
            <div
              className="tripartite-card__num"
              aria-hidden="true"
            >
              01
            </div>

            <h3>სასწავლო სივრცე</h3>

            <ul>
              <li>კომპიუტერები და ინტერნეტი</li>
              <li>სასწავლო მაგიდები და სკამები</li>
              <li>ხელმისაწვდომი და უსაფრთხო გარემო</li>
              <li>სასწავლო რესურსები</li>
            </ul>
          </article>

          <article className="tripartite-card">
            <div
              className="tripartite-card__num"
              aria-hidden="true"
            >
              02
            </div>

            <h3>საგანმანათლებლო აქტივობები</h3>

            <ul>
              <li>ციფრული წიგნიერება</li>
              <li>
                კომპიუტერისა და ონლაინ სერვისების გამოყენება
              </li>
              <li>
                პროფესიული განათლების შესახებ ინფორმირება
              </li>
              <li>კარიერული განვითარების ხელშეწყობა</li>
            </ul>
          </article>

          <article className="tripartite-card">
            <div
              className="tripartite-card__num"
              aria-hidden="true"
            >
              03
            </div>

            <h3>თანამშრომლობა</h3>

            <ul>
              <li>მუნიციპალიტეტთან თანამშრომლობა</li>
              <li>საგანმანათლებლო პარტნიორების მოძიება</li>
              <li>ტრენერებისა და მენტორების ჩართვა</li>
              <li>მოვლა-პატრონობის გეგმის შემუშავება</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="center-section">
        <div className="section-header-flex">
          <h2 className="section-title">
            მიზნები და მოსალოდნელი შედეგები
          </h2>

          <div
            className="tab-filters"
            role="group"
            aria-label="შედეგების კატეგორიის ფილტრი"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`tab-btn ${
                  activeTab === filter.id ? "active" : ""
                }`}
                aria-pressed={activeTab === filter.id}
                onClick={() => setActiveTab(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="results-grid" aria-live="polite">
          {filteredSections.map((item) => (
            <article
              className="result-card"
              key={item.id}
            >
              <span className="result-card__badge">
                {item.badge}
              </span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </article>
          ))}
        </div>

        {filteredSections.length === 0 && (
          <p className="empty-state">
            ამ კატეგორიაში ინფორმაცია ჯერ არ არის.
          </p>
        )}
      </section>

      <footer className="center-footer">
        <h2>
          ცოდნა ქმნის ახალ შესაძლებლობებს
        </h2>

        <p>
          პროექტის შემდგომი განვითარება დაეფუძნება თემის საჭიროებებს,
          მოსახლეობის მხარდაჭერას, პარტნიორებთან თანამშრომლობასა
          და ცენტრის მდგრადი ფუნქციონირების გეგმას.
        </p>
      </footer>
    </main>
  );
}

export default Edu;