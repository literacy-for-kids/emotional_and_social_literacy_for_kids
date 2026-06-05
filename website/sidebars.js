// @ts-check

import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const {hub, curricula} = require('literacy-site-theme/ecosystem');
const currentSiteHref = 'https://literacy-for-kids.github.io/emotional_and_social_literacy_for_kids/';

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  curriculumSidebar: [
    'intro',
    'facilitator-safety-guide',
    'caregiver-and-facilitator-guidance',
    'facilitator-implementation-guide',
    'curriculum-overview',
    'competency-map',
    'outcomes',
    'sel-checkpoint',
    'assessment-checkpoints',
    'self-assessment',
    {
      type: 'category',
      label: 'Internal Telemetry',
      description: 'Weeks 1–4: Sensory inputs, processing, and the nervous system',
      collapsed: false,
      items: [
        'week01-internal-telemetry',
        'week02-hardware-states',
        'week03-the-amygdala-switch',
        'week04-the-telemetry-log',
      ],
    },
    {
      type: 'category',
      label: 'Debugging the Signal Noise',
      description: 'Weeks 5–8: Cognitive distortions, internal narratives, and filtering',
      items: [
        'week05-cognitive-distortions',
        'week06-false-narratives',
        'week07-catastrophic-thinking',
        'week08-the-signal-audit',
      ],
    },
    {
      type: 'category',
      label: 'Trust, Ledgers, and Network Security',
      description: 'Weeks 9–11: Boundary setting, reliability, and social capital',
      items: [
        'week09-the-trust-ledger',
        'week10-boundary-setting',
        'week11-network-reliability',
      ],
    },
    {
      type: 'category',
      label: 'Game Theory in Groups',
      description: 'Weeks 12–14: Social dynamics, cooperation, and asymmetric information',
      items: [
        'week12-peer-pressure',
        'week13-rumors-and-information',
        'week14-collaboration-dynamics',
      ],
    },
    {
      type: 'category',
      label: 'The Social Interface Patch',
      description: 'Weeks 15–18: Conflict resolution and protocol design',
      items: [
        'week15-identifying-friction',
        'week16-protocol-design',
        'week17-protocol-deployment',
        'week18-retrospective',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      description: 'Optional extension weeks',
      items: [
        'week-optional-1-emotional-regulation-advanced',
        'week-optional-2-group-systems',
      ],
    },
    'student-tools-and-printables',
    'assessment-and-reflection-guide',
    'glossary',
    {
      type: 'category',
      label: 'Explore Other Literacies',
      items: [
        {type: 'link', label: hub.label, href: hub.href},
        ...curricula
          .filter((curriculum) => curriculum.href !== currentSiteHref)
          .map((curriculum) => ({
            type: 'link',
            label: curriculum.label,
            href: curriculum.href,
          })),
      ],
    },
    {
      type: 'category',
      label: 'Facilitator Resources',
      description: 'Guides, tools, and planning support for parents, teachers, and facilitators',
      collapsed: true,
      items: [
        'facilitator-guide',
        'curriculum-map',
        'scenario-cards',
        'exit-ticket-bank',
        'checks-for-understanding',
        'skills-alignment',
        'offline-use',
      ],
    },
    'license',
  ],
};

export default sidebars;
