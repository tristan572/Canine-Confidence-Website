import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-extrabold leading-[1.05] text-charcoal lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="text-xl text-medium-grey">
              Your privacy is important to me. This policy explains how I collect, use, and protect your information, in line with the Australian Privacy Principles under the Privacy Act 1988 (Cth).
            </p>
            <p className="text-sm text-medium-grey mt-4">
              Last updated: 11 July 2026
            </p>
          </div>

          <Card className="rounded-[22px] border-navy/10 bg-white shadow-none">
            <CardContent className="p-8 space-y-8">
              {/* Information We Collect */}
              <section>
                <h2 className="mb-4 text-2xl font-extrabold text-charcoal">
                  Information I Collect
                </h2>
                <div className="space-y-4 text-medium-grey">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Personal Information</h3>
                    <p>I may collect the following personal information when you use my services:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Name and contact information (email, phone number, address)</li>
                      <li>Dog information (name, breed, age, behavioural history)</li>
                      <li>Payment information for booking and purchasing services</li>
                      <li>Communication preferences and service requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Automatically Collected Information</h3>
                    <p>When you visit my website, I automatically collect:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Browser type and version</li>
                      <li>Device information and IP address</li>
                      <li>Pages visited and time spent on my site</li>
                      <li>Referring website information</li>
                    </ul>
                  </div>
                </div>
              </section>

              <Separator />

              {/* How We Use Your Information */}
              <section>
                <h2 className="mb-4 text-2xl font-extrabold text-charcoal">
                  How I Use Your Information
                </h2>
                <div className="text-medium-grey">
                  <p className="mb-4">I use your information to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Provide and improve my dog training services</li>
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
              <section className="rounded-2xl bg-sand p-6">
                <h2 className="mb-4 text-2xl font-extrabold text-charcoal">
                  Photo and Video Policy
                </h2>
                <div className="text-medium-grey space-y-3">
                  <p>
                    <strong>Training Session Documentation:</strong> During training sessions, I may take photos or videos to document your dog's progress and demonstrate training techniques.
                  </p>
                  <p>
                    <strong>Social Media Use:</strong> These photos and videos may be used on my social media platforms, website, and marketing materials to showcase my training methods and success stories.
                  </p>
                  <p>
                    <strong>Privacy Protection:</strong> I will not share any sensitive or private information about you or your family. I focus solely on training-related content that demonstrates positive outcomes.
                  </p>
                  <p>
                    <strong>Consent:</strong> By booking my services, you consent to this use of photos and videos. If you prefer not to have photos/videos taken or shared, please inform me before your session begins.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Information Sharing */}
              <section>
                <h2 className="mb-4 text-2xl font-extrabold text-charcoal">
                  Information Sharing
                </h2>
                <div className="text-medium-grey">
                  <p className="mb-4">I do not sell or rent your personal information. I may share information only in these circumstances:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements or court orders</li>
                    <li>With trusted service providers who help me operate my business (payment processors, booking systems)</li>
                    <li>To protect my rights, property, or safety, or that of my clients</li>
                  </ul>
                </div>
              </section>

              <Separator />

              {/* Cookies and Tracking */}
              <section>
                <h2 className="mb-4 text-2xl font-extrabold text-charcoal">
                  Cookies and Tracking
                </h2>
                <div className="text-medium-grey">
                  <p className="mb-4">I use cookies and similar technologies to:</p>
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
                <h2 className="mb-4 text-2xl font-extrabold text-charcoal">
                  Data Security
                </h2>
                <div className="text-medium-grey">
                  <p className="mb-4">I implement appropriate security measures to protect your information:</p>
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
                <h2 className="mb-4 text-2xl font-extrabold text-charcoal">
                  Your Rights
                </h2>
                <div className="text-medium-grey">
                  <p className="mb-4">Under the Australian Privacy Principles (Privacy Act 1988 (Cth)), you have the right to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Request deletion of your information (subject to legal requirements)</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request that I stop using photos/videos of your training sessions</li>
                    <li>Make a complaint about how I've handled your personal information</li>
                  </ul>
                  <p className="mt-4">
                    If you'd like to make a complaint, contact me first using the details below. If you're not satisfied with my response, you can lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at{" "}
                    <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">oaic.gov.au</a> or on 1300 363 992.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Third-Party Services */}
              <section>
                <h2 className="mb-4 text-2xl font-extrabold text-charcoal">
                  Third-Party Services
                </h2>
                <div className="text-medium-grey">
                  <p className="mb-4">My website may use third-party services:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Booking &amp; Payment:</strong> SimplyBook.me for appointment scheduling and secure payment handling</li>
                    <li><strong>Email:</strong> Resend for sending booking, consultation, and contact form notifications</li>
                    <li><strong>Analytics:</strong> Google Analytics to understand how visitors use my website</li>
                  </ul>
                  <p className="mt-4">These services have their own privacy policies, which I encourage you to review.</p>
                </div>
              </section>

              <Separator />

              {/* Children's Privacy */}
              <section>
                <h2 className="mb-4 text-2xl font-extrabold text-charcoal">
                  Children's Privacy
                </h2>
                <div className="text-medium-grey">
                  <p>
                    My services are provided to adult clients on behalf of their dogs. Where a child is present during a session, I don't knowingly collect personal information directly from them, and any photos or videos are focused on the dog and training, not identifying details of children. If you have concerns about information relating to a child in your household, please contact me.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Changes to This Policy */}
              <section>
                <h2 className="mb-4 text-2xl font-extrabold text-charcoal">
                  Changes to This Policy
                </h2>
                <div className="text-medium-grey">
                  <p>
                    I may update this privacy policy from time to time. I will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. I encourage you to review this policy periodically.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Contact Information */}
              <section className="rounded-2xl bg-sand p-6">
                <h2 className="mb-4 text-2xl font-extrabold text-charcoal">
                  Contact Me
                </h2>
                <div className="text-medium-grey">
                  <p className="mb-4">
                    If you have any questions about this privacy policy or my privacy practices, please contact me:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> info@canineconfidence.com.au</p>
                    <p><strong>Phone:</strong> Available through my contact form</p>
                    <p><strong>Address:</strong> North Brisbane, Queensland</p>
                  </div>
                  <Button className="mt-4" onClick={() => window.location.href = '/contact'}>
                    Contact Me
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