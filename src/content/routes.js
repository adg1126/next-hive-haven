import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const userRoutes = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About' },
  { href: '/team', title: 'Team' },
];

export const adminRoutes = [
  {
    href: '/admin',
    title: 'Sentiment Analysis',
    icon: () => <FontAwesomeIcon icon={faHeart} />,
  },
  {
    href: '/admin/text-mining',
    title: 'Text Mining',
    icon: () => <FontAwesomeIcon icon={faMagnifyingGlass} />,
  },
];