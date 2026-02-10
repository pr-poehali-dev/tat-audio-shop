import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onCallbackClick: () => void;
}

const Header = ({ onCallbackClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Главная', id: 'hero' },
    { label: 'Услуги', id: 'services' },
    { label: 'Товары', id: 'products' },
    { label: 'Работы', id: 'portfolio' },
    { label: 'О нас', id: 'about' },
    { label: 'Статьи', id: 'blog' },
    { label: 'Контакты', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Icon name="Volume2" className="text-primary" size={32} />
            <div className="text-2xl font-bold">
              <span className="text-white">ТАТ</span>
              <span className="text-primary">Audio</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button onClick={onCallbackClick} className="hidden md:flex">
              Обратный звонок
            </Button>

            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button onClick={onCallbackClick} className="w-full mt-2">
                Обратный звонок
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;