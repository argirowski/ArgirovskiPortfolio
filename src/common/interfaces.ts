export interface NavBarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

export interface HomePageProps {
  onNavClick: (section: string) => void;
}
