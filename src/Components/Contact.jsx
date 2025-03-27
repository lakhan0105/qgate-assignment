import React from "react";

function Contact() {
  return (
    <section className="bg-white w-full py-12" id="contact">
      <div className="w-full md:max-w-[1100px] mx-auto flex flex-col md:flex-row justify-betwee gap-10 px-4 md:p-0">
        {/* left */}
        <div className="w-full md:max-w-[45%]">
          <h2 className="text-3xl font-medium md:mb-4">Get In Touch</h2>
          <p className="hidden md:block">
            Feel free to reach out to us. Whether you have a question or just
            want to say hello — we’d love to hear from you!
          </p>

          <div className="hidden md:block">
            <p className="mt-4">
              <span className="font-medium">Name</span> : xyz
            </p>
            <p>
              <span className="font-medium">Email</span> : example@email.com
            </p>
            <p>
              <span className="font-medium">Message</span> : write anything
            </p>
          </div>
        </div>

        {/* right */}
        <form className="md:w-[500px]">
          <div className="w-full mb-4">
            <label htmlFor="name" className="capitalize text-sm">
              name
            </label>
            <input
              type="text"
              id="name"
              placeholder="xyz"
              className="border border-black/20 rounded block w-full p-1 text-sm"
            />
          </div>

          <div className="w-full mb-4">
            <label htmlFor="email" className="capitalize text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              className="border border-black/20 rounded block w-full p-1 text-sm"
            />
          </div>

          <div className="w-full">
            <label htmlFor="name" className="capitalize text-sm">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="border border-black/20 block w-full px-2 py-1"
            />
          </div>

          <button
            type="submit"
            className="border px-3 py-1 mt-4 border-black/20 rounded bg-black text-white cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
