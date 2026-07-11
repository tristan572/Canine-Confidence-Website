import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              Terms and Conditions
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Canine Confidence &mdash; ABN 95 140 676 440</p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8 space-y-8">

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Services</h2>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>Canine Confidence (ABN 95 140 676 440) provides private dog training services in Northside Brisbane, Queensland. Services include One-on-One Coaching, Walk and Train, In-Home Day Train, Adventure Walk, Local Walk, Virtual Coaching Call, and Initial Canine Success Assessment.</p>
                  <p>The specific service, duration, and location will be confirmed at the time of booking. Sessions take place at the client's home, an agreed outdoor location, or via video call as applicable.</p>
                  <p>Training outcomes depend on a range of factors including the dog's individual history, the client's consistency between sessions, and environmental conditions. Canine Confidence makes no guarantee as to specific results.</p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Booking and Payment</h2>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>Payment is due at the time of booking via SimplyBook.me, or in full prior to or at the start of each session. Sessions will not commence until payment has been received.</p>
                  <p>Package bookings are paid in full at the time of purchase and are non-refundable, except where the Australian Consumer Law entitles you to a refund, replacement, or other remedy — for example, if a service isn't provided with acceptable care and skill. Nothing in this clause limits those rights (see clause 7).</p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Cancellations and No-Shows</h2>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>Cancellations made with less than 24 hours' notice will be charged the full session fee. No-shows will be charged the full session fee.</p>
                  <p>Cancellations made with more than 24 hours' notice will be rescheduled at no additional cost.</p>
                  <p>Package sessions cancelled with less than 24 hours' notice or not attended will be forfeited. No refunds or credits will be issued for forfeited package sessions.</p>
                  <p>Canine Confidence reserves the right to cancel or reschedule a session due to safety concerns, adverse weather, or circumstances outside my control. In these cases, the session will be rescheduled at no cost to the client.</p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Client Responsibilities</h2>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>The client agrees to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Provide accurate information about the dog's behaviour, history, and any known health conditions prior to the first session</li>
                    <li>Follow all instructions and recommendations provided during and after sessions</li>
                    <li>Practise and reinforce training between sessions</li>
                    <li>Ensure the dog is on a secure lead or safely contained at the start of each session</li>
                    <li>Inform Canine Confidence immediately of any change in the dog's health or behaviour that may be relevant to training</li>
                  </ul>
                  <p>The client acknowledges that the dog may be exposed to environmental conditions during sessions including foot traffic, vehicles, other animals, and varying weather.</p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Equipment</h2>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>Where training equipment is provided by Canine Confidence, the client agrees to use it only as instructed. The client is responsible for the cost of replacing or repairing any provided equipment that is lost or damaged beyond normal wear and tear.</p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Photography and Media</h2>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>Canine Confidence may photograph or film the dog and training sessions for use in marketing, educational content, and social media including Instagram, Facebook, YouTube, and the Canine Confidence website.</p>
                  <p>If you do not consent to your dog being photographed or filmed, please advise in writing prior to your first session.</p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Liability</h2>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>The client accepts full responsibility for the behaviour and actions of their dog at all times, including during and after training sessions.</p>
                  <p>To the extent permitted by law, Canine Confidence is not liable for any injury, loss, or damage caused by the dog to people, animals, or property during or after a session.</p>
                  <p>Nothing in these terms excludes, restricts, or modifies any rights or remedies the client may have under the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)). Where liability cannot be excluded, Canine Confidence limits its liability to resupplying the relevant service.</p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Termination</h2>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>This agreement remains in place until all booked sessions are completed or the agreement is terminated.</p>
                  <p>Canine Confidence may terminate this agreement and decline to continue services if the dog poses a safety risk, the client acts in an unsafe or disrespectful manner, or the client materially breaches these terms. In such cases, no refund will be issued for sessions already completed.</p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Disputes</h2>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>In the event of a dispute, the parties agree to attempt to resolve the matter through direct negotiation before pursuing any formal process.</p>
                  <p>These terms are governed by the laws of Queensland, Australia.</p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Entire Agreement</h2>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>These terms supersede all prior written or verbal agreements between the client and Canine Confidence.</p>
                </div>
              </section>

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
