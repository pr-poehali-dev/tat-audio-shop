import Icon from '@/components/ui/icon';

const Contact = () => {
  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Наши </span>
            <span className="text-primary">контакты</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Приезжайте к нам или свяжитесь любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Адрес студии</h3>
                  <p className="text-muted-foreground">г. Казань, ул. Примерная, д. 123</p>
                  <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 20:00, Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Телефон</h3>
                  <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +7 (999) 123-45-67
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
                  <a href="mailto:info@tataudio.ru" className="text-muted-foreground hover:text-primary transition-colors">
                    info@tataudio.ru
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Мессенджеры</h3>
                  <div className="flex gap-3 mt-2">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      WhatsApp
                    </a>
                    <span className="text-muted-foreground">|</span>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Telegram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden h-[400px] lg:h-auto">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=49.122,55.796&z=12&l=map"
              width="100%"
              height="100%"
              frameBorder="0"
              className="grayscale"
              title="Карта"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;