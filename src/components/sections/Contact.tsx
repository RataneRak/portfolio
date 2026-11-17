import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiAlertCircle, FiCheckCircle, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { profile } from "../../data/portfolio";
import { useInView } from "../../hooks";
import { Button, SectionHeader } from "../ui";
import "./Contact.css";

const initialForm = { name: "", email: "", subject: "", message: "" };

const contactInfo = [
  { icon: <FiMail />, title: "E-mail", value: profile.email, link: `mailto:${profile.email}` },
  { icon: <FiPhone />, title: "Téléphone", value: profile.phone, link: profile.phoneLink },
  { icon: <FiMapPin />, title: "Localisation", value: profile.location },
];

const Contact = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(profile.formspreeEndpoint, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus("success");
      setFormData(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section section-alt contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader
          id="contact-title"
          index="05"
          eyebrow="Contact"
          title="Travaillons ensemble"
          subtitle="Une offre d'emploi, une mission ou un projet ? Réponse sous 48 heures ouvrées."
        />

        <div ref={ref} className={`contact-grid reveal ${inView ? "is-visible" : ""}`}>
          <aside className="contact-info">
            <ul className="contact-list stagger">
              {contactInfo.map((info) => {
                const content = (
                  <>
                    <span className="contact-icon" aria-hidden="true">
                      {info.icon}
                    </span>
                    <span>
                      <span className="contact-label">{info.title}</span>
                      <span className="contact-value">{info.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={info.title}>
                    {info.link ? (
                      <a href={info.link} className="contact-item">
                        {content}
                      </a>
                    ) : (
                      <div className="contact-item">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="contact-social">
              <p>Également présent sur</p>
              <div>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub aria-hidden="true" /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin aria-hidden="true" /> LinkedIn
                </a>
              </div>
            </div>
          </aside>

          <form className="contact-form spotlight" onSubmit={handleSubmit}>
            {/* Champ piège anti-spam (Formspree) : invisible pour les humains */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              className="visually-hidden"
              aria-hidden="true"
            />
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jean Rakoto"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="vous@exemple.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                maxLength={150}
                value={formData.subject}
                onChange={handleChange}
                placeholder="Création d'un site web"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                minLength={10}
                maxLength={5000}
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez votre projet ou votre demande…"
              />
            </div>

            <Button type="submit" size="large" fullWidth loading={status === "sending"}>
              {status === "sending" ? (
                "Envoi en cours…"
              ) : (
                <>
                  Envoyer le message <FiSend aria-hidden="true" />
                </>
              )}
            </Button>

            <div aria-live="polite">
              {status === "success" && (
                <p className="form-status success">
                  <FiCheckCircle aria-hidden="true" /> Message envoyé&nbsp;! Une réponse vous sera apportée
                  dans les plus brefs délais.
                </p>
              )}
              {status === "error" && (
                <p className="form-status error">
                  <FiAlertCircle aria-hidden="true" /> Une erreur s'est produite. Réessayez ou
                  écrivez directement à {profile.email}.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
