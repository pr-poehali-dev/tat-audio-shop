import { Button } from '@/components/ui/button';

interface HeroProps {
  onCallbackClick: () => void;
}

const Hero = ({ onCallbackClick }: HeroProps) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/projects/29bef879-6eba-45ae-9760-8875d01333fb/files/ddedcc68-7824-48a4-a26f-a7748b0cf6de.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">ТАТ</span>
          <span className="text-primary">AUDIO</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
          Профессиональная студия автозвука
        </p>
        
        <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Установка, настройка и подбор аудиосистем для вашего автомобиля. 
          Превращаем каждую поездку в концерт.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={onCallbackClick}
          >
            Оставить заявку
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Каталог услуг
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
