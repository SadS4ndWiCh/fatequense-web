export const siteConfig = {
  name: 'Fatequense',
  description:
    'Plataforma para visualizar os dados de estudante dos alunos da Fatec',
  url: process.env.VERCEL_URL!,
  links: {
    github: 'https://github.com/SadS4ndWiCh/fatequense-web',
  },
}

export type SiteConfig = typeof siteConfig
