export interface Category {
  id: number;
  CategoryId: string;
  name: string;
}

export const categories:Category[]=[
  {
    id:1,
    CategoryId:'Comics',
    name:'Comics'
  },
  {
    id:2,
    CategoryId:'Remeras',
    name:'Remeras'
  },
  {
    id:3,
    CategoryId:'Videojuegos',
    name:'Videojuegos'
  },
  {
    id:4,
    CategoryId:'Funko Pops',
    name:'Funko Pops'
  },
  {
    id:5,
    CategoryId:'Disfraces',
    name:'Disfraces'
  },
  {
    id:6,
    CategoryId:'Figuras',
    name:'Figuras'
  },
  {
    id:7,
    CategoryId:'Mochilas',
    name:'Mochilas'
  },
  {
    id:8,
    CategoryId:'Consolas',
    name:'Consolas'
  },
  {
    id:9,
    CategoryId:'Gorras',
    name:'Gorras'
  },
  {
    id:10,
    CategoryId:'Camperas',
    name:'Camperas'
  },
]

export interface Product{
  id: number;
  CategoryId: string;
  name: string;
  image: string;
  price: string;
  cents:string;
  Description:string;
}

export const products:Product[]=[
  {
    id: 1,
    CategoryId: 'Comics',
    name: 'COMIC MARVEL X MEN 92 SECRET WARS',
    image: '/Productos/Categories/Comics/x-men92/1.webp',
    price: '$7200',
    cents:'',
    Description:'Comic Marvel X Men 92 Secret Wars, De Chad Bowers., Vol. 1. Editorial Marvel, Tapa Blanda En Español, 2016',
  },
  {
    id: 2,
    CategoryId: 'Comics',
    name: 'MARVEL MUST HAVE 05 - DEADPOOL MATA AL UNIVERSO MARVEL',
    image: '/Productos/Categories/Comics/Deadpool/1.webp',
    price: '$14.000',
    cents:'',
    Description:'Marvel Must Have 05 - Deadpool Mata Al Universo Marvel',
  },
  {
    id: 3,
    CategoryId: 'Comics',
    name: 'MARVEL SAGA TPB EL ASOMBROSO SPIDERMAN N°1',
    image: '/Productos/Categories/Comics/AsombrosoSpiderman/1.webp',
    price: '$85.813',
    cents:'',
    Description:'Marvel Saga Tpb El Asombroso Spiderman N 1',
  },
  {
    id: 4,
    CategoryId: 'Comics',
    name: 'WOLVERINE: EL VIEJO LOGAN. EDICIÓN 1 EN CASTELLANO, 2023',
    image: '/Productos/Categories/Comics/Logan/1.webp',
    price: '$13.000',
    cents:'',
    Description:'Marvel Must-have: Wolverine: El Viejo Logan, De Mark Millar. Serie Marvel Must-have, Vol. 5. Editorial Panini, Tapa Dura, Edición 1 En Castellano, 2023',
  },
  {
    id: 5,
    CategoryId: 'Comics',
    name: 'X-MEN PHOENIX RESURRECTION TPB - MARVEL',
    image: '/Productos/Categories/Comics/DarkPhoenix/1.webp',
    price: '$41.900',
    cents:'',
    Description:'X-men Phoenix Resurrection Tpb - Marvel',
  },
  {
    id: 6,
    CategoryId: 'Comics',
    name: 'MARVEL DELUXE. SECRET WARS INTEGRAL - JONATHAN HICKMAN',
    image: '/Productos/Categories/Comics/MarvelSW/1.webp',
    price: '$90.000',
    cents:'',
    Description:'Marvel Deluxe. Secret Wars Integral - Jonathan Hickman',
  },
  {
    id: 1,
    CategoryId: 'Remeras',
    name: 'REMERA ESTAMPADA DTG FULL HD MARVEL COMICS PELIS SERIES',
    image: '/Productos/Categories/Remeras/Avengers/1.webp',
    price: '$21.990',
    cents:'',
    Description:'Remera Estampada Dtg Full Hd Marvel Comics Pelis Series',
  },
  {
    id: 1,
    CategoryId: 'Videojuegos',
    name: 'JUEGO SPIDERMAN MILES MORALES PS4 NUEVO ORIGINAL FISICO',
    image: '/Productos/Categories/Videjuegos/MilesMorales/1.webp',
    price: '$94.551',
    cents:'60',
    Description:'Juego Spiderman Miles Morales Ps4 Nuevo Original Fisico',
  },
  {
    id: 2,
    CategoryId: 'Videojuegos',
    name: 'JUEGO PS4 SPIDERMAN GOTY PLAYSTATION 4 FÍSICO SONY ORIGINAL',
    image: '/Productos/Categories/Videjuegos/SpiderMan/1.webp',
    price: '$85.519',
    cents:'50',
    Description:'Juego Ps4 Spiderman Goty Playstation 4 Físico Sony Original',
  },
  {
    id: 1,
    CategoryId: 'Funko Pops',
    name: 'FUNKO POP FIGURA MOON KNIGHT MARVEL STUDIOS 1047 ORIGINAL',
    image: '/Productos/Categories/Funko Pops/MoonKnight/1.webp',
    price: '$53.480',
    cents:'',
    Description:'Funko Pop Figura Moon Knight Marvel Studios 1047 Original',
  },
  {
    id: 2,
    CategoryId: 'Funko Pops',
    name: 'FUNKO POP MARVEL ACROSS THE SPIDER-VERSE SPIDER-GWEN',
    image: '/Productos/Categories/Funko Pops/SpiderGwen/1.webp',
    price: '$39.995',
    cents:'',
    Description:'Funko Pop Marvel Across The Spider-verse Spider-gwen',
  },
  {
    id: 3,
    CategoryId: 'Funko Pops',
    name: 'FUNKO POP SPIDER-MAN 2099 SPIDER-MAN: ACROSS THE SPIDER-VERSE',
    image: '/Productos/Categories/Funko Pops/Spiderman2099/1.webp',
    price: '$38.433',
    cents:'58',
    Description:'Figura De Accion Spider-man 2099 1225 Spider-man: Across The Spider-verse Marvel Funko Pop',
  },
  {
    id: 4,
    CategoryId: 'Funko Pops',
    name: 'FUNKO POP MARVEL FANTASTIC FOUR DOCTOR DOOM ORIGINAL',
    image: '/Productos/Categories/Funko Pops/DoctorDoom/1.webp',
    price: '$42.000',
    cents:'',
    Description:'Funko Pop Marvel Fantastic Four Doctor Doom Original',
  },
  {
    id: 5,
    CategoryId: 'Funko Pops',
    name: 'FIGURA DE ACCIÓN MARVEL BRUJA ESCARLATA DE FUNKO POP',
    image: '/Productos/Categories/Funko Pops/BrujaEscarlata/1.webp',
    price: '$45.999',
    cents:'',
    Description:'Figura De Acción Marvel Bruja Escarlata De Funko Pop',
  },
  {
    id: 6,
    CategoryId: 'Funko Pops',
    name: 'JEAN GREY MARVEL FUNKO POP GLOW BRILLA EXC COLLECTOYS',
    image: '/Productos/Categories/Funko Pops/JeanGrey/1.webp',
    price: '$35.000',
    cents:'16',
    Description:'Jean Grey Marvel Funko Pop Glow Brilla Exc Collectoys',
  },
  {
    id: 1,
    CategoryId: 'Disfraces',
    name: 'MASCARA DEADPOOL COSPLAY',
    image: '/Productos/Categories/Disfraces/Deadpool/1.webp',
    price: '$90.000',
    cents:'',
    Description:'Mascara Deadpool Cosplay',
  },
  {
    id: 1,
    CategoryId: 'Figuras',
    name: 'HOT TOYS MARVEL CARNAGE - FIGURA COLECCIONABLE',
    image: '/Productos/Categories/Figuras/Carnage/2.webp',
    price: '$1.511.103',
    cents:'48',
    Description:'Figura de Carnage',
  },
  {
    id: 2,
    CategoryId: 'Figuras',
    name: 'HOT TOYS MARVEL VENOM - FIGURA COLECCIONABLE',
    image: '/Productos/Categories/Figuras/Venom/2.webp',
    price: '$1.894.906',
    cents:'28',
    Description:'Figura de Venom',
  },
  {
    id: 3,
    CategoryId: 'Figuras',
    name: 'HOT TOYS SPIDER-MAN 2099 PS4 EXCLUSIVE',
    image: '/Productos/Categories/Figuras/Spiderman2099/2.webp',
    price: '$745.945',
    cents:'20',
    Description:'Figura de Spider-Man 2099',
  },
  {
    id: 4,
    CategoryId: 'Figuras',
    name: 'HOT TOYS SPIDER-MAN VGM45 DELUXE',
    image: '/Productos/Categories/Figuras/SpidermanBlackSuit/1.webp',
    price: '$742.203',
    cents:'',
    Description:'Figura de SpidermanBlackSuit',
  },
  {
    id: 5,
    CategoryId: 'Figuras',
    name: 'FIGURA COLECCIONABLE DEADPOOL, 45 CM DE ALTO',
    image: '/Productos/Categories/Figuras/Deadpool/1.webp',
    price: '$176.000',
    cents:'',
    Description:'Figura de Deadpool',
  },
  {
    id: 6,
    CategoryId: 'Figuras',
    name: 'IRON STUDIOS HULK MARVEL COMICS LIMITED EDITION',
    image: '/Productos/Categories/Figuras/Hulk/1.webp',
    price: '$540.000',
    cents:'',
    Description:'Figura de Hulk',
  },
  {
    id: 7,
    CategoryId: 'Figuras',
    name: 'IRON STUDIOS THANOS INFINITY WAR DELUXE',
    image: '/Productos/Categories/Figuras/Thanos/1.webp',
    price: '$850.000',
    cents:'',
    Description:'Figura de Thanos',
  },
  {
    id: 7,
    CategoryId: 'Figuras',
    name: 'IRON STUDIOS X-MEN ICEMAN LIMITED EDITION',
    image: '/Productos/Categories/Figuras/IceMan/1.webp',
    price: '$390.000',
    cents:'',
    Description:'Figura de IceMan',
  },
  {
    id: 1,
    CategoryId: 'Mochilas',
    name: 'MOCHILA ESCOLAR SPIDERMAN',
    image: '/Productos/Categories/Mochilas/SpiderMan/1.webp',
    price: '$31.002',
    cents:'29',
    Description:'Mochila Escolar Spiderman Para Espalda De 12 Pulgadas',
  },
  {
    id: 1,
    CategoryId: 'Consolas',
    name: 'PLAYSTATION 5 SLIM 1 TB DIGITAL SPIDER-MAN 2',
    image: '/Productos/Categories/Consolas/PS5/1.webp',
    price: '$1.633.662',
    cents:'',
    Description:'Playstation 5 Slim 1 Tb Digital Spider-man 2 Color Blanco',
  },
  {
    id: 1,
    CategoryId: 'Gorras',
    name: 'GORRA TRUCKER MARVEL LOS VENGADORES UNISEX',
    image: '/Productos/Categories/Gorras/Marvel/1.webp',
    price: '$4.990',
    cents:'',
    Description:'Gorra Trucker Marvel Los Vengadores Unisex',
  },
  {
    id: 1,
    CategoryId: 'Camperas',
    name: 'CAMPERA CHAQUETA ECO SIMIL CUERO DEADPOOL COSPLAY MARVEL',
    image: '/Productos/Categories/Camperas/Deadpool/1.webp',
    price: '$160.000',
    cents:'',
    Description:'Campera Chaqueta Eco Simil Cuero Deadpool Cosplay Marvel',
  },
]