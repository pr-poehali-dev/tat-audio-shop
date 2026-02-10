import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Icon name="Volume2" className="text-primary" size={28} />
            <div className="text-xl font-bold">
              <span className="text-white">ТАТ</span>
              <span className="text-primary">Audio</span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © 2026 ТАТAudio. Все права защищены.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Facebook" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Youtube" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
