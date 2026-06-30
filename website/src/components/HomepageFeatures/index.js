import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import {hub, curricula} from 'literacy-site-theme/ecosystem';
import styles from './styles.module.css';

const features = [
  {
    title: 'Emotions are Telemetry, Not Commands',
    description:
      'Students learn that fear, anger, and anxiety are biological data packets — information to read, not directives to obey.',
  },
  {
    title: 'The Amygdala Hijack is a State Machine Change',
    description:
      'Students learn to recognize when the brain forces a hard context-switch and how to pause and clear the buffer before responding.',
  },
  {
    title: 'Social Capital is a Ledger',
    description:
      'Every interaction is a deposit or a withdrawal. Students learn to manage their trust ledger intentionally.',
  },
  {
    title: 'Conflict is a System Mismatch',
    description:
      'Friction rarely stems from malice — it is usually a mismatch in goals or asymmetric information. Students learn to diagnose, not attack.',
  },
  {
    title: 'The Network Effect of Communication',
    description:
      'Every signal sent creates ripples. Students analyze communication by how it is decoded by the receiving hardware, not just their own intent.',
  },
];

const roadmapSections = [
  {
    title: 'Internal Telemetry',
    weeks: 'Weeks 1–4',
    description: 'Sensory inputs, processing capacity, and the nervous system',
  },
  {
    title: 'Debugging the Signal Noise',
    weeks: 'Weeks 5–8',
    description: 'Cognitive distortions, internal narratives, and filtering',
  },
  {
    title: 'Trust, Ledgers & Network Security',
    weeks: 'Weeks 9–11',
    description: 'Boundary setting, reliability, and social capital',
  },
  {
    title: 'Game Theory in Groups',
    weeks: 'Weeks 12–14',
    description: 'Social dynamics, cooperation, and asymmetric information',
  },
  {
    title: 'The Social Interface Patch',
    weeks: 'Weeks 15–18',
    description: 'Conflict resolution and protocol design',
  },
];

const currentSiteHref = 'https://emotional.literacy-for-kids.com/';

function FeatureCard({title, description}) {
  return (
    <article className={styles.card}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

function RoadmapCard({title, weeks, description}) {
  return (
    <article className={styles.roadmapCard}>
      <p className={styles.eyebrow}>{weeks}</p>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

function LiteracyCard({label, href, description, isCurrent}) {
  return (
    <article className={styles.card}>
      <Heading as="h3">
        <Link href={href} className={styles.literacyLink}>
          {label}
        </Link>
        {isCurrent && <span className={styles.currentBadge}>Current curriculum</span>}
      </Heading>
      <p>{description}</p>
    </article>
  );
}

export default function HomepageFeatures() {
  const roadmapImageUrl = useBaseUrl('/img/roadmap.png');
  return (
    <div className={styles.pageSections}>
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Introduction</Heading>
          <p className={styles.sectionLead}>
            Emotional &amp; Social Literacy for Kids is an 18-week curriculum for ages 8–12, built for
            classroom teachers, homeschool families, caregivers, and after-school leaders.
            Students move from understanding their own internal signals to engineering their
            social interfaces — learning how emotions work, how trust is built, and how to
            resolve conflict as a diagnostic problem across three short sessions per week.
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Part of the Literacy for Kids Ecosystem</Heading>
          <p className={styles.sectionLead}>
            This curriculum is part of{' '}
            <Link href={hub.href}>{hub.label}</Link>
            , a collection of open-source curricula designed to help children
            ages 8–12 understand the systems that shape the modern world.
          </p>
          <div className={styles.callout}>
            <Heading as="h3">Explore the other literacies</Heading>
            <div className={styles.cardGrid}>
              {curricula.map((literacy) => (
                <LiteracyCard
                  key={literacy.href}
                  {...literacy}
                  isCurrent={literacy.href === currentSiteHref}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Core Concepts</Heading>
          <p className={styles.sectionLead}>
            The curriculum is organized around mental models that help students transition from
            being driven by emotional reactivity to intentionally debugging their internal states
            and navigating social architectures.
          </p>
          <div className={styles.cardGrid}>
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Curriculum Roadmap</Heading>
          <p className={styles.sectionLead}>
            The learning progression moves from internal telemetry and signal debugging through
            trust networks and game theory, culminating in a real-world protocol design project.
          </p>
          <div className={styles.roadmapVisual}>
            <img
              className={styles.roadmapImage}
              src={roadmapImageUrl}
              alt="Visual roadmap showing the Emotional &amp; Social Literacy for Kids curriculum sequence"
            />
          </div>
          <div className={styles.roadmapGrid}>
            {roadmapSections.map((section) => (
              <RoadmapCard key={section.title} {...section} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container">
          <Heading as="h2">Start Teaching Emotional &amp; Social Literacy</Heading>
          <p className={styles.sectionLead}>
            Begin with the Welcome page, then review the facilitator guides before Week 1.
            Sessions are designed as three short meetings per week, each about 20 to 30 minutes.
          </p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Get Started
            </Link>
          </div>
          <p className={styles.feedbackPrompt}>
            Found a mistake or have a suggestion?{' '}
            <Link to="https://github.com/literacy-for-kids/emotional_and_social_literacy_for_kids/issues">
              Open an issue on GitHub.
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
