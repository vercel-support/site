import { useForm } from "@statickit/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("contact-form");

  if (state.succeeded) {
    return <p>Thanks! I'll be in touch.</p>;
  }

  return (
    <form name="contact" onSubmit={handleSubmit}>
      <div className="mt-4">
        <label htmlFor="name" className="block text-sm font-bold text-gray-700">
          Name
        </label>
        <input
          required
          name="name"
          type="text"
          className="w-full mt-1 form-input"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="email"
          className="block text-sm font-bold text-gray-700"
        >
          Email
        </label>
        <input
          required
          name="email"
          type="email"
          className="w-full mt-1 form-input"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="block text-sm font-bold text-gray-700"
        >
          Message
        </label>
        <textarea
          required
          name="message"
          type="text"
          rows="5"
          className="w-full mt-1 form-textarea"
        />
      </div>
      <div className="flex justify-center">
        <button
          disabled={state.submitting}
          className="w-full px-3 py-2 mt-4 font-semibold text-white rounded shadow-md focus:shadow-outline bg-key"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
