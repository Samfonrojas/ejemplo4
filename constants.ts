import { ShapeStyle } from './types';

export const SHAPE_STYLES: ShapeStyle[] = [
  {
    id: 'sharp',
    name: '1. Esquinas Afiladas',
    description: 'Estilo profesional. Transmite orden, seriedad y estructura.',
    idealFor: 'Corporativo, Financiero, Tecnología',
    feeling: 'Botones y tarjetas rectas, menús definidos, diseño sobrio.',
    containerClass: 'rounded-none border-2 border-white',
    buttonClass: 'rounded-none',
    inputClass: 'rounded-none',
    imageClass: 'rounded-none',
  },
  {
    id: 'rounded',
    name: '2. Bordes Suaves',
    description: 'Estilo amigable y moderno. Transmite cercanía y calidez.',
    idealFor: 'Startups, Educación, Servicios',
    feeling: 'Tarjetas con bordes redondeados, botones suaves, limpio.',
    containerClass: 'rounded-xl border border-gray-600',
    buttonClass: 'rounded-lg',
    inputClass: 'rounded-lg',
    imageClass: 'rounded-lg',
  },
  {
    id: 'ultra',
    name: '3. Ultra Rounded',
    description: 'Estética fresca y juvenil. Muy usado en apps modernas.',
    idealFor: 'Apps sociales, Lifestyle, Música',
    feeling: 'Botones píldora (pill-shaped), contenedores muy curvos.',
    containerClass: 'rounded-3xl border-2 border-white',
    buttonClass: 'rounded-full',
    inputClass: 'rounded-full px-6',
    imageClass: 'rounded-3xl',
  },
  {
    id: 'organic',
    name: '4. Formas Orgánicas',
    description: 'Creativo y artístico. Transmite fluidez y movimiento.',
    idealFor: 'Branding visual, Artistas, Naturaleza',
    feeling: 'Asimetría, bordes impredecibles, sensación líquida.',
    containerClass: 'border border-white', // shape applied via customStyle
    buttonClass: '',
    inputClass: '',
    imageClass: '',
    customStyle: {
      borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    }
  },
  {
    id: 'geometric',
    name: '5. Estilo Geométrico',
    description: 'Innovación y diseño único. Combina triángulos y líneas.',
    idealFor: 'Arquitectura, Web3, Diseño Gráfico',
    feeling: 'Cortes angulares, polígonos, estructura rígida pero atrevida.',
    containerClass: 'border-2 border-white',
    buttonClass: '', // clipped manually in component
    inputClass: '',
    imageClass: '',
  }
];
