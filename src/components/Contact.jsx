import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_n747ja6", // Remplace avec ton ID de service EmailJS
        "template_yourTemplateID", // Remplace avec ton template ID
        e.target, 
        "Cz9y3UlbPrivWzCew" // Remplace avec ton User ID
      )
      .then(
        (response) => {
          setStatus("Message envoyé avec succès !");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          setStatus("Erreur lors de l'envoi du message. Essayez encore.");
        }
      );
  };

  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Contactez Moi !
          </span>
        </h1>
        <p className="text-center text-lg font-semibold text-gray-500">
          Veuillez remplir le formulaire pour m'envoyer un message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
          <div>
            <label htmlFor="name" className="block text-lg text-gray-500">Nom</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Entrez votre nom complet"
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg text-gray-500">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Entrez votre adresse email"
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-lg text-gray-500">Sujet</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Entrez le sujet de votre message"
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg text-gray-500">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Écrivez votre message ici"
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
          <button type="submit" className="w-full p-3 bg-indigo-600 text-white rounded-lg">
            Envoyer
          </button>
        </form>

        {status && <p className="text-center mt-4 text-lg font-semibold text-gray-700">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
