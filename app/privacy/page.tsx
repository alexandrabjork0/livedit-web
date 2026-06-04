export const metadata = {
  title: "Privacy Policy — LivedIt",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#08080f] text-white min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <a href="/" className="text-blue-400 text-sm hover:underline mb-8 block">← Back to LivedIt</a>

        <h1 className="text-4xl font-black mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: June 2026</p>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-xl mb-3">1. Information We Collect</h2>
            <p>When you use LivedIt, we collect information you provide directly:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/60">
              <li>Account information (email address, username, profile photo)</li>
              <li>Content you create (experiences, photos, notes, comments)</li>
              <li>Location data (when you grant permission, used to show nearby experiences)</li>
              <li>Usage data (interactions within the app)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/60">
              <li>Provide and improve the LivedIt service</li>
              <li>Personalize your experience and show relevant content</li>
              <li>Enable social features (following, feeds, shared collections)</li>
              <li>Send notifications you have opted into</li>
              <li>Ensure the safety and security of the platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">3. Data Storage</h2>
            <p>
              Your data is stored securely using Google Firebase (Firestore, Firebase Auth, and Firebase Storage),
              which is hosted in Europe. We use industry-standard security measures to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">4. Sharing Your Information</h2>
            <p>
              We do not sell your personal information. Content you post publicly (completed experiences, profile)
              is visible to other users. We may share data with third-party services that help us operate the app
              (such as Algolia for search). These services are bound by their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">5. Location Data</h2>
            <p>
              Location access is optional. If granted, we use it only to show experiences near you.
              We do not store or share your precise location history.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/60">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Delete your account at any time from the app settings</li>
              <li>Withdraw consent for location access via your device settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">7. Children&apos;s Privacy</h2>
            <p>
              LivedIt is not intended for children under 13. We do not knowingly collect personal
              information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of significant
              changes via the app or email. Continued use of LivedIt after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">9. Contact</h2>
            <p>
              Questions about this policy? Contact us at{" "}
              <a href="mailto:hello@livedit.app" className="text-blue-400 hover:underline">
                hello@livedit.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
