import Logomark from '@/icons/logomark.svg?react';
import X from '@/icons/x.svg?react';
import { FaDiscord } from 'react-icons/fa';
import PagePaths from './pagePaths';
import { NavLinks } from '@/types/types';

const navLinks: NavLinks = [
  { path: PagePaths.homePath, icon: FaDiscord },
  { path: PagePaths.homePath, icon: Logomark },
  { path: PagePaths.homePath, icon: X },
];

export default navLinks;
