export interface Project {
  slug: string;
  name: string;
  description: string;
  stage: 'seeding' | 'sprouting' | 'growing' | 'grown' | 'harvested';
  url?: string;
  icon?: string;
  details: string;
}

export const projects: Project[] = [
  {
    slug: 'hothack',
    name: 'HotHack',
    description:
      'Brisbane\'s hackathon for junior developers. Innovative solutions, hot off the press.',
    stage: 'grown',
    url: 'https://hothack.co/',
    details:
      'HotHack is a hackathon designed specifically for junior developers. Participants are paired with experienced industry mentors and work in teams over a weekend to build projects from concept to completion. Projects are presented to judges at the end, with prizes awarded to winning teams.',
  },
  {
    slug: 'techmas',
    name: 'Techmas',
    description:
      'An annual Christmas party for the tech ecosystem of Brisbane.',
    stage: 'grown',
    url: 'https://techmas.co/',
    icon: '\u{1F384}',
    details:
      'Techmas is an annual Christmas party that brings together Brisbane\'s tech community to celebrate the end of the year. It\'s a night of networking, fun, and festive vibes for developers, designers, founders, and everyone in between.',
  },
  {
    slug: 'rubyhash',
    name: 'Rubyhash',
    description:
      'Diff your Ruby hashes. A web tool for comparing Minitest hash output.',
    stage: 'sprouting',
    url: 'https://rubyhash.dev/',
    details:
      'Rubyhash is a web tool that helps Ruby developers compare hash outputs from Minitest. Paste in your Minitest hash diff and get a clean side by side comparison. It converts Ruby hash syntax to JSON, sorts keys alphabetically, and highlights exactly which values have changed.',
  },
  {
    slug: 'pokepath-item-injector',
    name: 'Pokepath Item Injector',
    description:
      'A browser tool for injecting items, currency, and more into PokePath TD saves.',
    stage: 'harvested',
    url: 'https://builtbyproxy.github.io/pokepath-injector/',
    icon: '\u{26A1}',
    details:
      'PokePath TD Item Injector is a web-based utility that lets players inject items, Pokemon, and currency into their PokePath TD game saves via browser localStorage. Pick from 100+ items including Mega Stones and fossils, generate a console command, paste it into DevTools, and restart the game.',
  },
];
