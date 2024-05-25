import { Photo } from '@/types';

export enum FILTERS {
  JARDIN = 'JARDIN',
  RDC = 'RDC',
  ETAGE1 = 'ETAGE1',
  CHAMBRE1 = 'CHAMBRE1',
  CHAMBRE2 = 'CHAMBRE2',
  SDB = 'SDB',
}

export const JARDIN: Photo[] = [
  {
    filters: [FILTERS.JARDIN],
    src: '/images/jardin/jardin-1.webP',
    name: 'vue-du-jardin-1',
    id: '3b4aa1ba-076c-476c-aa8e-75f54f5944c7',
    alt: 'Vue panoramique du jardin avec des fleurs colorées',
    description: 'Une magnifique vue du jardin montrant une variété de fleurs colorées et un espace vert bien entretenu.'
  },
  {
    filters: [FILTERS.JARDIN],
    src: '/images/jardin/jardin-2.webP',
    name: 'vue-du-jardin-2',
    id: '6a5bb2ca-237d-485d-b22f-6d3e5f8849c8',
    alt: 'Jardin avec des allées de pierre et des arbres',
    description: 'Un jardin avec des allées de pierre sinueuses et des arbres majestueux créant une atmosphère paisible.'
  },
  {
    filters: [FILTERS.JARDIN],
    src: '/images/jardin/jardin-3.webP',
    name: 'vue-du-jardin-3',
    id: '1f8cb1da-9465-4a4b-9b76-4c5a8e0a8e9b',
    alt: 'Coin détente dans le jardin avec des chaises longues',
    description: 'Un coin détente confortable dans le jardin avec des chaises longues et un environnement paisible.'
  },
  {
    filters: [FILTERS.JARDIN],
    src: '/images/jardin/jardin-4.webP',
    name: 'vue-du-jardin-4',
    id: '2f9dc3ea-1576-40b5-8b6b-5e3d7e7c7d6a',
    alt: 'Fontaine au centre du jardin avec des plantes environnantes',
    description: 'Une belle fontaine située au centre du jardin entourée de diverses plantes et fleurs.'
  },
  {
    filters: [FILTERS.JARDIN],
    src: '/images/jardin/jardin-5.webP',
    name: 'vue-du-jardin-5',
    id: '3eacb5fa-7685-4e8c-a7e6-6f5d9e8a9f7b',
    alt: 'Jardin avec une pelouse verte et des arbustes taillés',
    description: 'Un vaste jardin avec une pelouse verte impeccable et des arbustes taillés soigneusement.'
  },
  {
    filters: [FILTERS.JARDIN],
    src: '/images/jardin/jardin-6.webP',
    name: 'vue-du-jardin-6',
    id: '4fbce6fa-9486-4d8c-a8f7-7e6d8e9b8f8c',
    alt: 'Chemin de pierre traversant le jardin avec des fleurs',
    description: 'Un charmant chemin de pierre traversant le jardin, bordé de fleurs colorées et de verdure.'
  }
];

export const RDC: Photo[] = [
  {
    filters: [FILTERS.RDC],
    src: '/images/rdc/rdc-1.webP',
    name: 'vue-du-rdc-1',
    id: '5fdae7fb-9577-4e9c-a9f8-8f7d8f9c9g9d',
    alt: 'Salon lumineux au rez-de-chaussée',
    description: 'Un salon lumineux et spacieux situé au rez-de-chaussée, avec des meubles modernes et une grande fenêtre.'
  },
  {
    filters: [FILTERS.RDC],
    src: '/images/rdc/rdc-2.webP',
    name: 'vue-du-rdc-2',
    id: '6ebdf8fc-a686-4f9c-baf9-9f8e9f0d0h0e',
    alt: 'Cuisine ouverte moderne au rez-de-chaussée',
    description: "Une cuisine ouverte et moderne au rez-de-chaussée, équipée de tous les appareils nécessaires et d'un grand îlot central."
  },
  {
    filters: [FILTERS.RDC],
    src: '/images/rdc/rdc-3.webP',
    name: 'vue-du-rdc-3',
    id: '7fcdf9fd-b796-5fab-cbfa-af9f0a1e1i1f',
    alt: 'Salle à manger élégante au rez-de-chaussée',
    description: 'Une salle à manger élégante au rez-de-chaussée, avec une grande table en bois et des chaises confortables.'
  },
  {
    filters: [FILTERS.RDC],
    src: '/images/rdc/rdc-4.webP',
    name: 'vue-du-rdc-4',
    id: '8gde0afe-c8a7-6fac-dcgb-bg0a1b2f2j2g',
    alt: 'Bureau moderne au rez-de-chaussée',
    description: 'Un bureau moderne et fonctionnel au rez-de-chaussée, idéal pour le travail à domicile avec un bureau spacieux et des étagères.'
  },
  {
    filters: [FILTERS.RDC],
    src: '/images/rdc/rdc-5.webP',
    name: 'vue-du-rdc-5',
    id: '9hed1bgf-d9b8-7gbd-edhc-ch1b2c3g3k3h',
    alt: 'Salle de bain au rez-de-chaussée',
    description: 'Une salle de bain bien aménagée au rez-de-chaussée, avec une douche moderne et des équipements de haute qualité.'
  },
  {
    filters: [FILTERS.RDC],
    src: '/images/rdc/rdc-6.webP',
    name: 'vue-du-rdc-6',
    id: 'ahfe2chf-ebc9-8hde-feid-di2c3d4h4l4i',
    alt: 'Entrée accueillante au rez-de-chaussée',
    description: 'Une entrée accueillante et spacieuse au rez-de-chaussée, avec un grand placard et un miroir.'
  }
];

export const ETAGE1: Photo[] = [
  {
    filters: [FILTERS.ETAGE1],
    src: '/images/etage1/etage1-1.webP',
    name: 'vue-de-l-etage1-1',
    id: 'biga3dih-fcd1-9ifg-gfhj-ej3d4e5i5m5j',
    alt: 'Chambre principale à l’étage',
    description: 'Une chambre principale spacieuse et lumineuse située à l’étage, avec un grand lit et une décoration élégante.'
  },
  {
    filters: [FILTERS.ETAGE1],
    src: '/images/etage1/etage1-2.webP',
    name: 'vue-de-l-etage1-2',
    id: 'chjb4ejg-gde2-ahj1-hgik-fk4e5f6j6n6k',
    alt: 'Salle de bain à l’étage',
    description: 'Une salle de bain moderne et bien équipée à l’étage, avec une grande baignoire et un lavabo design.'
  }
];

export const CHAMBRE1: Photo[] = [
  {
    filters: [FILTERS.CHAMBRE1],
    src: '/images/chambre1/chambre1-1.webP',
    name: 'vue-de-la-chambre1-1',
    id: 'dika5fkh-hfe3-bik2-ijhl-gl5f6g7k7o7l',
    alt: 'Chambre d’invité lumineuse',
    description: 'Une chambre d’invité lumineuse et accueillante, avec un lit double confortable et une décoration chaleureuse.'
  },
  {
    filters: [FILTERS.CHAMBRE1],
    src: '/images/chambre1/chambre1-2.webP',
    name: 'vue-de-la-chambre1-2',
    id: 'ejlb6glj-igf4-cjl3-jkmn-hm6g7h8l8p8m',
    alt: 'Chambre d’invité avec vue sur le jardin',
    description: 'Une chambre d’invité offrant une vue magnifique sur le jardin, avec un espace de rangement ample et une ambiance relaxante.'
  }
];

export const CHAMBRE2: Photo[] = [
  {
    filters: [FILTERS.CHAMBRE2],
    src: '/images/chambre2/chambre2-1.webP',
    name: 'vue-de-la-chambre2-1',
    id: 'fkcm7hmi-jhg5-dkm4-klno-in7h8i9m9q9n',
    alt: 'Chambre d’enfant colorée',
    description: 'Une chambre d’enfant colorée et joyeuse, avec des meubles adaptés aux enfants et des jouets.'
  },
  {
    filters: [FILTERS.CHAMBRE2],
    src: '/images/chambre2/chambre2-2.webP',
    name: 'vue-de-la-chambre2-2',
    id: 'glnd8inj-kih6-el5m-lmop-jo8i9janar0o',
    alt: 'Chambre d’enfant avec espace de jeu',
    description: 'Une chambre d’enfant avec un espace de jeu dédié, décorée de manière ludique et fonctionnelle.'
  },
  {
    filters: [FILTERS.CHAMBRE2],
    src: '/images/chambre2/chambre2-3.webP',
    name: 'vue-de-la-chambre2-3',
    id: 'hmqe9jok-lji7-fm6n-mnpq-kp9j0kbobs1p',
    alt: 'Chambre d’enfant avec lit superposé',
    description: 'Une chambre d’enfant équipée d’un lit superposé, idéale pour deux enfants, avec un espace de rangement intégré.'
  }
];

export const SDB: Photo[] = [
  {
    filters: [FILTERS.SDB],
    src: '/images/sdb/sdb-1.webP',
    name: 'vue-de-la-salle-de-bain-1',
    id: 'inrf0klp-mkj8-gn7o-noqr-lqak1lcpc2q',
    alt: 'Salle de bain moderne avec douche italienne',
    description: 'Une salle de bain moderne dotée d’une douche à l’italienne, de carrelage design et d’équipements haut de gamme.'
  },
  {
    filters: [FILTERS.SDB],
    src: '/images/sdb/sdb-2.webP',
    name: 'vue-de-la-salle-de-bain-2',
    id: 'jo0g1lmn-nlk9-ho8p-oprs-mrbl2mdqds3r',
    alt: 'Salle de bain avec baignoire et double vasque',
    description: 'Une salle de bain spacieuse avec une grande baignoire et une double vasque, idéale pour une famille.'
  },
  {
    filters: [FILTERS.SDB],
    src: '/images/sdb/sdb-3.webP',
    name: 'vue-de-la-salle-de-bain-3',
    id: 'kp1h2mno-olm0-ip9q-pqst-nscm3netet4s',
    alt: 'Petite salle de bain fonctionnelle',
    description: 'Une petite salle de bain bien aménagée, avec une douche et des rangements optimisés pour un espace réduit.'
  }
];

export const PHOTOS: Photo[] = [
  ...JARDIN,
  ...RDC,
  ...ETAGE1,
  ...CHAMBRE1,
  ...CHAMBRE2,
  ...SDB,
];
