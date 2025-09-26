import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8 space-y-8">
              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Personal Information</h3>
                    <p>We may collect the following personal information when you use our services:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Name and contact information (email, phone number, address)</li>
                      <li>Dog information (name, breed, age, behavioural history)</li>
                      <li>Payment information for booking and purchasing services</li>
                      <li>Communication preferences and service requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Automatically Collected Information</h3>
                    <p>When you visit our website, we automatically collect:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Browser type and version</li>
                      <li>Device information and IP address</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referring website information</li>
                    </ul>
                  </div>
                </div>
              </section>

              <Separator />

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  How We Use Your Information
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="mb-4">We use your information to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Provide and improve our dog training services</li>
                    <li>Process bookings and payments</li>
                    <li>Communicate with you about appointments and services</li>
                    <li>Send relevant training tips and business updates (with your consent)</li>
                    <li>Analyse website usage to improve user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </section>

              <Separator />

              {/* Photo and Video Policy */}
              <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Photo and Video Policy
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-3">
                  <p>
                    <strong>Training Session Documentation:</strong> During training sessions, we may take photos or videos to document your dog's progress and demonstrate training techniques.
                  </p>
                  <p>
                    <strong>Social Media Use:</strong> These photos and videos may be used on our social media platforms, website, and marketing materials to showcase our training methods and success stories.
                  </p>
                  <p>
                    <strong>Privacy Protection:</strong> We will not share any sensitive or private information about you or your family. We focus solely on training-related content that demonstrates positive outcomes.
                  </p>
                  <p>
                    <strong>Consent:</strong> By booking our services, you consent to this use of photos and videos. If you prefer not to have photos/videos taken or shared, please inform us before your session begins.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Information Sharing */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Information Sharing
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="mb-4">We do not sell or rent your personal information. We may share information only in these circumstances:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements or court orders</li>
                    <li>With trusted service providers who help us operate our business (payment processors, booking systems)</li>
                    <li>To protect our rights, property, or safety, or that of our clients</li>
                  </ul>
                </div>
              </section>

              <Separator />

              {/* Cookies and Tracking */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Cookies and Tracking
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="mb-4">We use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Remember your preferences and improve your experience</li>
                    <li>Analyse website traffic and usage patterns</li>
                    <li>Provide relevant content and advertisements</li>
                  </ul>
                  <p className="mt-4">You can control cookie settings through your browser preferences.</p>
                </div>
              </section>

              <Separator />

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Data Security
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="mb-4">We implement appropriate security measures to protect your information:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Secure SSL encryption for data transmission</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access to personal information by authorized personnel only</li>
                    <li>Secure payment processing through trusted providers</li>
                  </ul>
                </div>
              </section>

              <Separator />

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Your Rights
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Request deletion of your information (subject to legal requirements)</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request that we stop using photos/videos of your training sessions</li>
                  </ul>
                </div>
              </section>

              <Separator />

              {/* Third-Party Services */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Third-Party Services
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="mb-4">Our website may use third-party services:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Payment Processing:</strong> Stripe for secure payment handling</li>
                    <li><strong>Booking System:</strong> SimplyBook.me for appointment scheduling</li>
                    <li><strong>Analytics:</strong> Website analytics to improve our services</li>
                  </ul>
                  <p className="mt-4">These services have their own privacy policies, which we encourage you to review.</p>
                </div>
              </section>

              <Separator />

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Children's Privacy
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <p>
                    Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Changes to This Policy */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Changes to This Policy
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <p>
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Contact Information */}
              <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Us
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="mb-4">
                    If you have any questions about this privacy policy or our privacy practices, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> info@canineconfidence.com.au</p>
                    <p><strong>Phone:</strong> Available through our contact form</p>
                    <p><strong>Address:</strong> North Brisbane, Queensland</p>
                  </div>
                  <Button className="mt-4" onClick={() => window.location.href = '/contact'}>
                    Contact Us
                  </Button>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}