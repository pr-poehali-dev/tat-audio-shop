import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Products = () => {
  const products = [
    {
      name: 'Головные устройства',
      description: 'Android и Apple CarPlay совместимые магнитолы',
      price: 'от 15 000 ₽',
      image: 'https://cdn.poehali.dev/projects/29bef879-6eba-45ae-9760-8875d01333fb/files/b47a72a9-a5bd-4991-bda2-1457d50a2a33.jpg',
    },
    {
      name: 'Акустика',
      description: 'Компонентная и коаксиальная акустика премиум-класса',
      price: 'от 3 000 ₽',
      image: 'https://cdn.poehali.dev/projects/29bef879-6eba-45ae-9760-8875d01333fb/files/007a626f-17f6-4f8f-853e-a0c8bdc2c962.jpg',
    },
    {
      name: 'Усилители',
      description: 'Многоканальные усилители мощности',
      price: 'от 8 000 ₽',
      image: 'https://cdn.poehali.dev/projects/29bef879-6eba-45ae-9760-8875d01333fb/files/45af2886-b4ca-4167-bddb-55021ceee6a4.jpg',
    },
    {
      name: 'Сабвуферы',
      description: 'Активные и пассивные сабвуферы',
      price: 'от 5 000 ₽',
      image: 'https://cdn.poehali.dev/projects/29bef879-6eba-45ae-9760-8875d01333fb/files/007a626f-17f6-4f8f-853e-a0c8bdc2c962.jpg',
    },
  ];

  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Каталог </span>
            <span className="text-primary">товаров</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Оборудование от ведущих мировых производителей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                  <Button size="sm" variant="outline">
                    <Icon name="ShoppingCart" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;