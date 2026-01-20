import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const products = [
    {
      name: "Бодрость",
      description: "Кипрей узколистный, облепиха крушиновидная, череда трехраздельная, душица обыкновенная",
      benefit: "Природный тоник для энергии и выносливости",
      volume: "500 мл",
      fullDescription: "Тонизирующий напиток на основе кипрея и облепихи. Дарит чистую энергию и концентрацию без кофеина, укрепляет естественную сопротивляемость организма. Идеален для активного начала дня, спорта и высокой работоспособности.",
      ingredients: [
        { name: "Иван-чай", amount: "250 мг" },
        { name: "Элеутерококк", amount: "200 мг" },
        { name: "Облепиха", amount: "150 мг" },
        { name: "Экстракт зеленого чая", amount: "100 мг" },
      ],
      howToUse: "Принимать по 250 мл утром за 30 минут до еды. Курс: 30 дней.",
      contraindications: "Не рекомендуется при гипертонии, беременности и индивидуальной непереносимости.",
    },
    {
      name: "Баланс",
      description: "Кипрей узколистный, облепиха крушиновидная, череда трехраздельная, душица обыкновенная",
      benefit: "Природный тоник для энергии и выносливости",
      volume: "500 мл",
      fullDescription: "Гармонизирующий напиток с лабазником, мятой и малиной. Помогает мягко снять напряжение, способствует восстановлению после стресса и нормализации пищеварения. Для моментов, когда нужно перезагрузиться и обрести внутреннее равновесие.",
      ingredients: [
        { name: "Экстракт мяты", amount: "200 мг" },
        { name: "Мелисса лекарственная", amount: "250 мг" },
        { name: "Ромашка аптечная", amount: "150 мг" },
        { name: "Корень валерианы", amount: "100 мг" },
      ],
      howToUse: "Принимать по 250 мл вечером за 1-2 часа до сна.",
      contraindications: "Не рекомендуется при управлении транспортом и работе с механизмами.",
    },
    {
      name: "Гармония",
      description: "Зелёный чай, малина обыкновенная, кипрей узколистный, череда трёхраздельная, тимьян ползучий",
      benefit: "Напиток для естественной защиты и тонуса",
      volume: "500 мл",
      fullDescription: "Антиоксидантный напиток на основе зелёного чая и чабреца. Защищает клетки от окислительного стресса, поддерживает иммунитет и способствует естественному очищению организма. Для ежедневной заботы о долгосрочном здоровье и тонусе.",
      ingredients: [
        { name: "Эхинацея пурпурная", amount: "300 мг" },
        { name: "Экстракт шиповника", amount: "250 мг" },
        { name: "Облепиха", amount: "200 мг" },
        { name: "Черная смородина", amount: "150 мг" },
      ],
      howToUse: "Принимать по 250 мл 2 раза в день во время еды. Курс: 14-21 день.",
      contraindications: "Не рекомендуется при аутоиммунных заболеваниях и аллергии на компоненты.",
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Спасибо за подписку!",
        description: "Мы отправим вам информацию о новинках и специальных предложениях.",
      });
      setEmail("");
    }
  };

  const scientificFacts = [
    {
      icon: "Award",
      title: "100% натуральный состав",
      description: "Только травы Башкортостана без синтетических добавок",
    },
    {
      icon: "Leaf",
      title: "0 г сахара",
      description: "Естественная сладость стевии без калорий",
    },
  ];

  const ingredients = [
    {
      name: "Родиола розовая",
      effect: "Адаптоген",
      description: "Повышает устойчивость к стрессу и физическим нагрузкам. Содержит розавин и салидрозид.",
    },
    {
      name: "Элеутерококк",
      effect: "Энергия",
      description: "Улучшает выносливость и когнитивные функции. Богат элеутерозидами.",
    },
    {
      name: "Эхинацея пурпурная",
      effect: "Иммунитет",
      description: "Стимулирует иммунную систему и обладает противовирусным действием.",
    },
    {
      name: "Шиповник",
      effect: "Витамин C",
      description: "Содержит в 50 раз больше витамина C, чем лимон. Мощный антиоксидант.",
    },
  ];

  const stores = [
    { name: "Перекресток", cities: "Москва, Санкт-Петербург" },
    { name: "Азбука Вкуса", cities: "Москва" },
    { name: "ВкусВилл", cities: "По всей России" },
    { name: "Wildberries", cities: "Доставка по России" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="bg-muted/50 py-3 border-b border-border">
          <div className="container mx-auto px-4 flex items-center justify-center gap-4 text-sm text-muted-foreground bg-[#ffffff]">
            <span className="font-medium">Проект создан при поддержке ФСИ</span>
            <img
              src="https://cdn.poehali.dev/projects/be015741-f2a1-4265-97b5-2c321af44282/bucket/fa5a77d7-ac32-407b-a5a7-153ab830d467.jpg"
              alt="Фонд Содействия Инновациям"
              className="h-12 object-contain"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Leaf" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">Травяной заряд</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Продукты
            </a>
            <a href="#science" className="text-foreground hover:text-primary transition-colors">
              Наука
            </a>
            <a href="#ingredients" className="text-foreground hover:text-primary transition-colors">
              Состав
            </a>
            <a href="#stores" className="text-foreground hover:text-primary transition-colors">
              Где купить
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button className="hidden md:flex">Купить онлайн</Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Icon name="Leaf" className="text-primary" size={28} />
                    <span className="text-xl font-bold text-primary">Травяной заряд</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 mt-8">
                  <a
                    href="#products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center gap-3 p-3 hover:bg-accent rounded-lg"
                  >
                    <Icon name="Droplet" size={20} />
                    Продукты
                  </a>
                  <a
                    href="#science"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center gap-3 p-3 hover:bg-accent rounded-lg"
                  >
                    <Icon name="Microscope" size={20} />
                    Наука
                  </a>
                  <a
                    href="#ingredients"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center gap-3 p-3 hover:bg-accent rounded-lg"
                  >
                    <Icon name="Leaf" size={20} />
                    Состав
                  </a>
                  <a
                    href="#stores"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center gap-3 p-3 hover:bg-accent rounded-lg"
                  >
                    <Icon name="Store" size={20} />
                    Где купить
                  </a>
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button className="w-full" size="lg">
                      <Icon name="ShoppingCart" className="mr-2" size={20} />
                      Купить онлайн
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section className="relative py-24 md:py-32 bg-gradient-to-b from-accent/30 to-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
                Напитки с силой трав Башкортостана
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Функциональные травяные напитки на основе научных исследований. Без сахара, ГМО и консервантов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  Заказать сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Узнать больше
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary"></div>
                  <div className="text-sm text-muted-foreground"></div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Натуральный состав</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">0г</div>
                  <div className="text-sm text-muted-foreground">Сахара</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/be015741-f2a1-4265-97b5-2c321af44282/files/e4f69368-0465-484e-9e92-8004fe936d96.jpg"
                alt="Травяной заряд - три ПЭТ-бутылки"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Линейка продуктов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый напиток создан для решения конкретной задачи на основе научных исследований
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Droplet" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground italic">{product.description}</p>
                  <p className="text-base text-foreground font-medium">{product.benefit}</p>
                  <div className="pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">{product.volume}</span>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" variant="outline">
                        Подробнее
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-3xl font-bold">{product.name}</DialogTitle>
                        <DialogDescription className="text-base">{product.benefit}</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6 mt-4">
                        <div>
                          <h4 className="font-semibold text-lg mb-2">Описание</h4>
                          <p className="text-muted-foreground leading-relaxed">{product.fullDescription}</p>
                        </div>


                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <div className="flex gap-2">
                            <Icon name="AlertTriangle" className="text-yellow-600 flex-shrink-0" size={20} />
                            <div>
                              <h4 className="font-semibold text-sm mb-1">Противопоказания</h4>
                              <p className="text-xs text-muted-foreground">{product.contraindications}</p>
                            </div>
                          </div>
                        </div>
                        <Button className="w-full" size="lg">Купить</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="science" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Научный подход</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы не просто используем травы — мы изучаем их свойства в собственной лаборатории. Каждый ингредиент
                проходит клинические испытания и сертификацию.
              </p>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/be015741-f2a1-4265-97b5-2c321af44282/files/43013234-ab22-4239-879a-96c170adae2f.jpg"
                alt="Научная лаборатория"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scientificFacts.map((fact, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-3 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name={fact.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{fact.title}</h3>
                  <p className="text-sm text-muted-foreground">{fact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="ingredients" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/be015741-f2a1-4265-97b5-2c321af44282/files/f40d0a45-8eec-4de3-b3f0-895e66d25bd1.jpg"
                alt="Травы Башкортостана"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Состав и польза</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Все травы собраны в экологически чистых районах Башкортостана. Мы используем только проверенные
                растения с доказанной эффективностью.
              </p>
              <div className="flex items-center gap-3 bg-accent p-4 rounded-lg">
                <Icon name="AlertCircle" className="text-primary flex-shrink-0" size={24} />
                <p className="text-sm text-foreground">
                  Без сахара, ГМО, консервантов и искусственных красителей
                </p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {ingredients.map((ingredient, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-foreground">{ingredient.name}</h3>
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {ingredient.effect}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ingredient.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-4 mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Mail" className="text-primary" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Подпишитесь на новости</h2>
                  <p className="text-muted-foreground">
                    Узнавайте первыми о новых вкусах, специальных предложениях и научных исследованиях
                  </p>
                </div>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Ваш email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 h-12"
                    />
                    <Button type="submit" size="lg" className="sm:w-auto">
                      Подписаться
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="stores" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Где купить</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Наши напитки доступны в крупнейших ретейлерах России и онлайн
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stores.map((store, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                    <Icon name="Store" className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white text-left">{store.name}</h3>
                  <p className="text-sm text-white/70">{store.cities}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="secondary" className="text-lg">
              <Icon name="ShoppingCart" className="mr-2" size={20} />
              Заказать онлайн с доставкой
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="Leaf" className="text-primary" size={28} />
                <span className="text-xl font-bold">Травяной заряд</span>
              </div>
              <p className="text-sm opacity-70">Функциональные напитки с научным подходом</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Продукты</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li>Энергия</li>
                <li>Спокойствие</li>
                <li>Иммунитет</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li>О нас</li>
                <li>Лаборатория</li>
                <li>Сертификаты</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li>info@travyanoycharge.ru</li>
                <li>+7 (800) 555-35-35</li>
                <li>Башкортостан, Уфа</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm opacity-70">
            <p>© 2026 Травяной заряд. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;