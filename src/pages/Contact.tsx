import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout showHero={false}>
      <section className="min-h-screen bg-[#FFFDF9] text-[#1A0A0B] py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column – Contact Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-[#340608] mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We'd love to hear from you! Whether you have a question, need help
              planning your next adventure, or want to learn more about our
              safaris and tours — our friendly team is ready to assist.
            </p>

            <div className="space-y-8">
              {/* Kenya */}
              <div>
                <h2 className="text-xl font-semibold text-[#340608] mb-2">
                  Kenya (Head Office)
                </h2>
                <p className="text-gray-700">
                  Phone: <span className="font-medium">0700 012 344</span>
                </p>
                <p className="text-gray-700">
                  Email:{" "}
                  <a
                    href="mailto:info@alemansadventures.com"
                    className="underline hover:text-[#F5D547] transition-colors"
                  >
                    info@alemansadventures.com
                  </a>
                </p>
                <p className="text-gray-700">Location: Nairobi, Kenya</p>
                <p className="text-sm text-gray-500 mt-1">
                  Contact: John Mwangi – Regional Manager
                </p>
              </div>

              {/* UK */}
              <div>
                <h2 className="text-xl font-semibold text-[#340608] mb-2">
                  United Kingdom
                </h2>
                <p className="text-gray-700">Phone: +44 20 7946 1234</p>
                <p className="text-gray-700">Email: uk@alemansadventures.com</p>
                <p className="text-gray-700">Location: London, UK</p>
                <p className="text-sm text-gray-500 mt-1">
                  Contact: Sarah Thompson – UK Liaison
                </p>
              </div>

              {/* Germany */}
              <div>
                <h2 className="text-xl font-semibold text-[#340608] mb-2">
                  Germany
                </h2>
                <p className="text-gray-700">Phone: +49 30 5678 9012</p>
                <p className="text-gray-700">Email: de@alemansadventures.com</p>
                <p className="text-gray-700">Location: Berlin, Germany</p>
                <p className="text-sm text-gray-500 mt-1">
                  Contact: Hans Müller – German Representative
                </p>
              </div>

              {/* America */}
              <div>
                <h2 className="text-xl font-semibold text-[#340608] mb-2">
                  United States
                </h2>
                <p className="text-gray-700">Phone: +1 212 456 7890</p>
                <p className="text-gray-700">Email: us@alemansadventures.com</p>
                <p className="text-gray-700">Location: New York, USA</p>
                <p className="text-sm text-gray-500 mt-1">
                  Contact: James Carter – North America Coordinator
                </p>
              </div>
            </div>
          </div>

          {/* Right Column – Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-[#340608] mb-6 uppercase tracking-wide">
              Send Us a Message
            </h2>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white p-8 border border-[#1A0A0B]/10 rounded-none shadow-sm space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:outline-none focus:border-[#F5D547] rounded-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:outline-none focus:border-[#F5D547] rounded-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:outline-none focus:border-[#F5D547] rounded-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  placeholder="Write your message..."
                  rows={5}
                  className="w-full border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:outline-none focus:border-[#F5D547] rounded-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A0A0B] text-[#F5D547] uppercase tracking-widest py-3 font-semibold border border-[#F5D547]/40 hover:bg-[#F5D547] hover:text-[#1A0A0B] transition-all duration-300 rounded-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
