export interface NavBarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

export interface HomePageProps {
  onNavClick: (section: string) => void;
}

export interface MobileMenuHamburgerProps {
  activeSection: string | null;
  onNavClick: (section: string) => void;
}
