import React from "react";

function ContactFrom() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-white mb-8">
        Get in <span className="text-green-400">Touch</span>
      </h1>

      <form className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Name *"
            className="w-full p-4 bg-neutral-800 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email *"
            className="w-full p-4 bg-neutral-800 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone number *"
            className="w-full p-4 bg-neutral-800 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full p-4 bg-neutral-800 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-4 rounded-md text-lg font-semibold hover:bg-green-600 transition-colors"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ContactFrom;
