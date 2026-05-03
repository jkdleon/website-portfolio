import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { personal } from '@/lib/constants/personal';

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">
          06. Contact
        </p>
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted mb-8 max-w-lg leading-relaxed">
          I&apos;m actively looking for remote opportunities in Cloud &amp; DevOps. Whether you have a
          question or just want to say hi, my inbox is always open.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="px-6 py-3 bg-accent text-white font-semibold rounded hover:bg-accent/90 transition-colors"
          >
            Send an Email
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-muted font-semibold rounded hover:border-accent hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-muted font-semibold rounded hover:border-accent hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
