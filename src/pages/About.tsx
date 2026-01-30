import Header from "@/components/Header";
import { Sparkles, Calculator, FileJson, Code2, Rocket } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-24 pb-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">About PromptKit</h1>
        
        <div className="space-y-12">
          {/* Intro Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              The Essential Toolkit for AI Developers
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">PromptKit</strong> is the ultimate mobile companion designed specifically for AI engineers, prompt engineers, and developers working with Large Language Models (LLMs). We understand that building next-generation AI applications requires precision, efficiency, and the right set of tools—often while on the go.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              PromptKit bridges the gap between complex development workflows and mobile accessibility, putting powerful utilities right in your pocket.
            </p>
          </section>

          <div className="border-t border-border" />

          {/* Key Features */}
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              🛠 Key Features
            </h2>

            {/* Feature 1 */}
            <div className="space-y-3 bg-muted/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground">1. Prompt Linter</h3>
              <p className="text-muted-foreground leading-relaxed">
                Stop guessing if your prompts are optimal. Our advanced <strong className="text-foreground">Prompt Linter</strong> analyzes your prompts against industry best practices. It identifies potential issues, suggests refinements, and assigns a quality score, ensuring your inputs yield the best possible outputs from models like GPT-4, Claude, and Gemini.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-3 bg-muted/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                2. Token Counter & Cost Estimator
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Never be surprised by an API bill again.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Token Calculator:</strong> Instantly check token counts for any text input before sending it to an API.</li>
                <li><strong className="text-foreground">LLM Cost Calculator:</strong> Estimate daily and monthly costs based on your usage patterns, input/output token ratios, and specific model pricing. Plan your budget with confidence.</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="space-y-3 bg-muted/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <FileJson className="w-5 h-5 text-primary" />
                3. JSON Schema Generator
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Struggling to get structured data out of your LLM? Our <strong className="text-foreground">Schema Generator</strong> allows you to describe your data needs in plain English and instantly generates robust JSON schemas and validation examples. Perfect for ensuring type safety and structured outputs in your applications.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="space-y-3 bg-muted/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                4. Developer-First Design
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Built with a "developer-first" mindset, PromptKit features a clean, dark-mode optimized interface (because we know you love it), syntax highlighting, and quick-copy actions to streamline your workflow.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Mission */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <Rocket className="w-6 h-6 text-primary" />
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At PromptKit, our mission is to <strong className="text-foreground">empower the builders of the AI age</strong>. We believe that high-quality tools shouldn't be tethered to a desktop. Whether you're debugging a prompt during a commute or calculating costs for a client meeting, PromptKit ensures you have the answers you need, when you need them.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;