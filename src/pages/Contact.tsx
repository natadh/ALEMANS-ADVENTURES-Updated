import Layout from "../components/Layout";
import { useState } from "react";

export default function Contact() {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for submission status
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');
    setErrorMessage('');

    try {
      const formBody = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      const response = await fetch('http://localhost/ALEMANS_API/uzf321r2.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };
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
                  Phone: <span className="font-medium">+254 700 012 344</span>
                </p>
                <p className="text-gray-700">
                  Phone: <span className="font-medium">+254 713 491 692</span>
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
                <p className="text-gray-700">Location: Sagana, Kenya</p>
                <p className="text-sm text-gray-500 mt-1">P.O. BOX 63-10306 Jambo Centre Building</p>
                <p className="text-sm text-gray-500 mt-1">Contact: Jackson Miano – Regional Manager</p>
                <p className="text-sm text-gray-500 mt-1">Contact: Alex Murimi – Sales & Marketing Manager</p>
                <p className="text-gray-500 mt-1">
                  Office Emails: enquiries@alemansadventures.com, booking@alemanadventures.com, commenta@alemansadventures.com
                </p>
                <p className="text-gray-500 mt-1">24/7 Email: jackson@alemansadventures.com</p>

              </div>

              {/* UK */}
              {/* <div>
                <h2 className="text-xl font-semibold text-[#340608] mb-2">
                  United Kingdom
                </h2>
                <p className="text-gray-700">Phone: +44 7488 532906</p>
                <p className="text-gray-700">Email: uk@alemansadventures.com</p>
                <p className="text-gray-700">24/7 Email: sharonwmaina@gmail.com</p>
                <p className="text-gray-700">Location: Birmingham UK</p>
                <p className="text-sm text-gray-500 mt-1">Contact: Sharon Colin – UK Liaison</p>

              </div>

              {/* Germany */}
              {/* <div>
                <h2 className="text-xl font-semibold text-[#340608] mb-2">
                  Germany
                </h2>
                <p className="text-gray-700">Phone: +49 30 5678 9012</p>
                <p className="text-gray-700">Email: de@alemansadventures.com</p>
                <p className="text-gray-700">24/7 Email: p.frienderichs@gmx.de</p>
                <p className="text-gray-700">Location: Humburg, Germany</p>
                <p className="text-sm text-gray-500 mt-1">Contact: Phylis Frienderichs – German Representative</p>

              </div> */}

              {/* America */}
              {/* <div>
                <h2 className="text-xl font-semibold text-[#340608] mb-2">
                  United States
                </h2>
                <p className="text-gray-700">Phone: +1 818 523-7781</p>
                <p className="text-gray-700">Email: us@alemansadventures.com</p>
                <p className="text-gray-700">24/7 Email: dalemoh8@gmail.com</p>
                <p className="text-gray-700">Location: Seattle, California, USA</p>
                <p className="text-sm text-gray-500 mt-1">Contact: Andrew Alemoh – North America Coordinator</p>

              </div>  */}
            </div>
          </div>

          {/* Right Column – Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-[#340608] mb-6 uppercase tracking-wide">
              Send Us a Message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 border border-[#1A0A0B]/10 rounded-none shadow-sm space-y-6"
            >

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:outline-none focus:border-[#F5D547] rounded-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={5}
                  className="w-full border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:outline-none focus:border-[#F5D547] rounded-none resize-none"
                  required
                ></textarea>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <p className="text-sm font-medium text-green-800">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <p className="text-sm font-medium text-red-800">
                    ✗ {errorMessage || 'Failed to send message. Please try again.'}
                  </p>
                </div>
              )}
              <button
                type="submit"
                disabled={submitStatus === 'sending'}
                className="w-full bg-[#1A0A0B] text-[#F5D547] uppercase tracking-widest py-3 font-semibold border border-[#F5D547]/40 hover:bg-[#F5D547] hover:text-[#1A0A0B] transition-all duration-300 rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
