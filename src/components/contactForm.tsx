import { useForm } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("contact-form");

  if (state.succeeded) {
    return <p>Thanks! I'll be in touch.</p>;
  }

  return (
    <form name="contact" onSubmit={handleSubmit}>
      <div>
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
          rows={5}
          className="w-full mt-1 form-textarea"
        />
      </div>
      <div className="flex justify-center">
        <button
          disabled={state.submitting}
          className="inline-block w-full px-3 py-2 font-medium text-white no-underline bg-blue-500 shadow-md rounded-md hover:bg-blue-400 active:bg-blue-600 transition-colors duration-75 ease-out"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
