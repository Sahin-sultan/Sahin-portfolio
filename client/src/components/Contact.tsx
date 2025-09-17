import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Github, Linkedin, Twitter, Mail, Instagram, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Add haptic feedback for mobile
    if (navigator.vibrate) {
      navigator.vibrate(50); // Short vibration
    }
    
    try {
      // Use FormData for better mobile compatibility
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      // Add additional fields for better Formspree compatibility
      formDataToSend.append('_replyto', formData.email);
      formDataToSend.append('_subject', `Portfolio Contact: ${formData.subject}`);

      const response = await fetch('https://formspree.io/f/mwpndrvb', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Success haptic feedback
        if (navigator.vibrate) {
          navigator.vibrate([100, 50, 100]); // Success pattern
        }
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        const errorData = await response.json();
        console.error('Form submission failed:', errorData);
        setSubmitStatus('error');
        // Error haptic feedback
        if (navigator.vibrate) {
          navigator.vibrate([200, 100, 200]); // Error pattern
        }
        // Auto-hide error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      // Error haptic feedback
      if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]); // Error pattern
      }
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection
          className="text-4xl md:text-5xl font-light text-foreground mb-12"
          data-testid="contact-title"
          delay={0}
          y={50}
        >
          <h2 style={{ fontFamily: 'DM Serif Text, serif' }}>Let's Work Together</h2>
        </AnimatedSection>
        
        <AnimatedSection
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          data-testid="contact-description"
          delay={0.1}
          y={40}
        >
          <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.25rem', fontStyle: 'italic', fontWeight: '400' }}>
            "I'm open to new opportunities and creative projects. Feel free to reach out—whether it's a question, collaboration, or just to say hi, I'd be happy to connect."
          </p>
        </AnimatedSection>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
          <AnimatedSection
            className="flex space-x-6"
            data-testid="social-links"
            delay={0.2}
            y={30}
          >
            <a
              href="mailto:sahinsultan095@gmail.com"
              className="text-muted-foreground hover:text-blue-400 transition-colors transform hover:scale-110"
              data-testid="contact-email"
              aria-label="Send me an email"
            >
              <span className="sr-only">Email</span>
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Sahin-sultan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110"
              data-testid="social-github"
              aria-label="Visit my GitHub profile"
            >
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/sahin-sultan-917b50331"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-600 transition-colors transform hover:scale-110"
              data-testid="social-linkedin"
              aria-label="Visit my LinkedIn profile"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/sahin_sultan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-400 transition-colors transform hover:scale-110"
              data-testid="social-twitter"
              aria-label="Visit my Twitter profile"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/sahin_edition/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-pink-500 transition-colors transform hover:scale-110"
              data-testid="social-instagram"
              aria-label="Visit my Instagram profile"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="w-6 h-6" />
            </a>
          </AnimatedSection>
        </div>

        {/* Contact Form */}
        <AnimatedSection
          delay={0.1}
          y={20}
        >
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="relative bg-white/5 rounded-2xl p-8 md:p-10 shadow-xl border border-white/20">
              {/* Mobile Loading Overlay */}
              {isSubmitting && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                  <div className="text-center text-white">
                    <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-lg font-medium">Sending your message...</p>
                    <p className="text-sm text-gray-300 mt-2">Please wait</p>
                  </div>
                </div>
              )}
              
              <h3 className="text-2xl md:text-3xl font-light text-foreground mb-8 text-center" style={{ fontFamily: 'DM Serif Text, serif' }}>
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-150"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-150"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-150"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-150 resize-vertical"
                    placeholder="Tell me about your project, idea, or just say hello..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto md:min-w-[200px] px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 disabled:scale-100 disabled:shadow-none flex items-center justify-center space-x-2 mx-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-6 bg-green-500/20 border-2 border-green-500/40 rounded-lg text-green-300 text-center text-lg font-medium shadow-lg animate-pulse">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl">✅</span>
                      <span>Message sent successfully!</span>
                    </div>
                    <p className="text-sm text-green-400 mt-2">I'll get back to you soon.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-6 bg-red-500/20 border-2 border-red-500/40 rounded-lg text-red-300 text-center text-lg font-medium shadow-lg animate-pulse">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl">❌</span>
                      <span>Failed to send message</span>
                    </div>
                    <p className="text-sm text-red-400 mt-2">Please try again or email me directly at sahinsultan095@gmail.com</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
