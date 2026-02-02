import Header from "@/components/Header";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-24 pb-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy for PromptKit</h1>

        <p className="text-lg text-muted-foreground mb-8">
          At <strong className="text-foreground">PromptKit</strong> we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our mobile application (the "App").
        </p>
        <p className="text-muted-foreground mb-8">
          By using PromptKit, you agree to the collection and use of information in accordance with this policy.
        </p>

        <div className="space-y-10">
          {/* Section 1 */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>

            <div className="space-y-4 bg-muted/30 p-6 rounded-xl">
              <h3 className="text-xl font-medium text-foreground">A. Personal Information</h3>
              <p className="text-muted-foreground">
                When you register for an account, we may collect minimal personal information to identify you, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Email Address:</strong> Used for account authentication and password recovery.</li>
                <li><strong className="text-foreground">Name:</strong> Used to personalize your user experience within the app.</li>
              </ul>
            </div>

            <div className="space-y-4 bg-muted/30 p-6 rounded-xl">
              <h3 className="text-xl font-medium text-foreground">B. Usage & Analytics Data</h3>
              <p className="text-muted-foreground">
                We collect non-personal information about how you interact with the App to help us improve our services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Feature Usage:</strong> We track which tools (e.g., Token Counter, Linter) you use and how frequently to optimize app performance.</li>
                <li><strong className="text-foreground">Device Information:</strong> Device model, operating system version, and other technical details to ensure compatibility and stability.</li>
              </ul>
            </div>

            <div className="space-y-4 bg-muted/30 p-6 rounded-xl">
              <h3 className="text-xl font-medium text-foreground">C. Input Data</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">User Inputs:</strong> Text prompts or descriptions you enter into the Prompt Linter, Schema Generator, or Token Counter are processed to provide the service.</li>
                <li><strong className="text-foreground">Data Persistence:</strong> While we process this data to generate results, we do not use your inputs to train our own models or share them with third parties for marketing purposes.</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <p className="text-muted-foreground">We use the collected data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Service Provision:</strong> To authenticate your access and provide the core functionalities of the App.</li>
              <li><strong className="text-foreground">Persisting State:</strong> To save your preferences and usage history (e.g., tracking your API usage limits for free/paid tiers).</li>
              <li><strong className="text-foreground">Improvement:</strong> To analyze usage trends and identify bugs or areas for enhancement.</li>
              <li><strong className="text-foreground">Communication:</strong> To send important updates regarding your account or the App (e.g., security alerts or policy changes).</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">3. Third-Party Services</h2>
            <p className="text-muted-foreground">
              We utilize trusted third-party services to operate our App. These providers have their own privacy policies addressing how they use such information.
            </p>

            <div className="space-y-4 bg-muted/30 p-6 rounded-xl">
              <h3 className="text-xl font-medium text-foreground">Google Firebase</h3>
              <p className="text-muted-foreground">We use Firebase for:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Authentication:</strong> To securely manage user sign-ins.</li>
                <li><strong className="text-foreground">Realtime Database:</strong> To store user settings and usage counters.</li>
              </ul>
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Firebase Privacy Policy
              </a>
            </div>

            <div className="space-y-4 bg-muted/30 p-6 rounded-xl">
              <h3 className="text-xl font-medium text-foreground">AI Providers (e.g., OpenAI, Google Gemini)</h3>
              <p className="text-muted-foreground">
                When you use features like the <em>Prompt Linter</em> or <em>Schema Generator</em>, your input text is sent to third-party LLM providers to generate the response. These providers serve as data processors and are not authorized to use your data for training their foundation models (subject to their enterprise API terms).
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Data Security</h2>
            <p className="text-muted-foreground">We implement industry-standard security measures to protect your data.</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>All data transmission between the App and our servers (and third-party services) is encrypted using <strong className="text-foreground">SSL/TLS</strong>.</li>
              <li>We rely on Firebase's secure infrastructure for authentication and storage, ensuring we do not store sensitive credentials (like passwords) directly on our own servers.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Children's Privacy</h2>
            <p className="text-muted-foreground">
              PromptKit is not intended for use by anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we become aware that we have collected such data, we will take steps to delete it.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this page periodically for any changes.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Account & Data Deletion</h2>
            <p className="text-muted-foreground">
              You have the right to request the deletion of your account and all associated data. To verify your identity and process your request, please contact us via email. We will process your deletion request within 30 days of receipt.
            </p>
            <p>
              <strong className="text-foreground">Request Deletion: </strong>
              <a
                href="mailto:syedrabeet2002@gmail.com?subject=Account Deletion Request"
                className="text-primary hover:underline"
              >
                syedrabeet2002@gmail.com
              </a>
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
            </p>
            <p>
              <strong className="text-foreground">Email: </strong>
              <a
                href="mailto:syedrabeet2002@gmail.com"
                className="text-primary hover:underline"
              >
                syedrabeet2002@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;