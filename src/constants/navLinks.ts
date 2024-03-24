import { FaDiscord } from 'react-icons/fa';
import Logomark from '@/icons/logomark.svg?react';
import X from '@/icons/x.svg?react';
import { NavLinks } from '@/types/types';
import PagePaths from './pagePaths';
import AriaLabels from './ariaLabels';

const navLinks: NavLinks = [
  { path: PagePaths.homePath, icon: FaDiscord, ariaLabel: AriaLabels.discord },
  { path: PagePaths.homePath, icon: Logomark, ariaLabel: AriaLabels.logomark },
  { path: PagePaths.homePath, icon: X, ariaLabel: AriaLabels.x },
];

export default navLinks;
