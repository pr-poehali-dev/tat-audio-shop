import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import CallbackForm from './CallbackForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Volume2" className="text-primary" size={32} />
            <span className="text-2xl font-bold">
              <span className="text-foreground">ТАТ</span>
              <span className="text-primary">audio</span>
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition">Главная</button>
            <button onClick={() => scrollToSection('catalog')} className="text-foreground hover:text-primary transition">Каталог</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition">Услуги</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition">Работы</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition">О нас</button>
            <button onClick={() => scrollToSection('articles')} className="text-foreground hover:text-primary transition">Статьи</button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition">Контакты</button>
          </nav>

          <div className="flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="hidden lg:flex">Заявка</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Оставить заявку</DialogTitle>
                </DialogHeader>
                <CallbackForm />
              </DialogContent>
            </Dialog>

            <button 
              className="lg:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-4 space-y-4 border-t border-border">
            <button onClick={() => scrollToSection('home')} className="block text-foreground hover:text-primary transition">Главная</button>
            <button onClick={() => scrollToSection('catalog')} className="block text-foreground hover:text-primary transition">Каталог</button>
            <button onClick={() => scrollToSection('services')} className="block text-foreground hover:text-primary transition">Услуги</button>
            <button onClick={() => scrollToSection('portfolio')} className="block text-foreground hover:text-primary transition">Работы</button>
            <button onClick={() => scrollToSection('about')} className="block text-foreground hover:text-primary transition">О нас</button>
            <button onClick={() => scrollToSection('articles')} className="block text-foreground hover:text-primary transition">Статьи</button>
            <button onClick={() => scrollToSection('contacts')} className="block text-foreground hover:text-primary transition">Контакты</button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">Заявка</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Оставить заявку</DialogTitle>
                </DialogHeader>
                <CallbackForm />
              </DialogContent>
            </Dialog>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
