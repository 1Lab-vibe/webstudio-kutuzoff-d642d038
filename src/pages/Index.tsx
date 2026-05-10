import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Phone, MapPin, Shield, FileCheck, Award, Building2,
  Home, Key, Scale, Calculator, ChevronRight, Check, Star, Clock
} from "lucide-react";

import agentImg from "@/assets/agent.jpg";
import apt1 from "@/assets/apt1.jpg";
import apt2 from "@/assets/apt2.jpg";
import apt3 from "@/assets/apt3.jpg";
import keysImg from "@/assets/keys.jpg";
import teamImg from "@/assets/team.jpg";

const listings = [
  { img: apt1, title: "2-комн. в ЖК «Сколково Парк»", area: "64 м²", price: "24 900 000 ₽", tag: "Свежее", meta: "Можайский р-н · 7/12 эт." },
  { img: apt2, title: "3-комн. с панорамой, Раменки", area: "92 м²", price: "39 500 000 ₽", tag: "Эксклюзив", meta: "Раменки · 14/22 эт." },
  { img: apt3, title: "1-комн. рядом с метро Кутузовская", area: "42 м²", price: "16 200 000 ₽", tag: "Готова к сделке", meta: "Дорогомилово · 5/9 эт." },
];

const services = [
  { icon: Home, title: "Продажа квартиры", text: "Оценка по рынку, фото, реклама на ЦИАН и Авито, показы, выход на сделку." },
  { icon: Key, title: "Подбор и покупка", text: "Подбираем варианты под бюджет и задачу, проверяем объект перед авансом." },
  { icon: Calculator, title: "Ипотека", text: "Подаём заявки сразу в несколько банков, помогаем со ставкой и одобрением." },
  { icon: Scale, title: "Юридическое сопровождение", text: "Проверка истории, договор, расчёты через аккредитив или ячейку." },
];

const cases = [
  { title: "Продали 3-комн. в Раменках за 21 день", text: "Сделали профессиональные фото, скорректировали цену по аналогам — 4 показа, две оферты.", price: "38,2 млн ₽" },
  { title: "Подобрали квартиру с детским садом во дворе", text: "Семья с двумя детьми. 9 объектов, 3 просмотра, торг —1,1 млн ₽ от стартовой цены.", price: "19,4 млн ₽" },
  { title: "Сложная сделка с ипотекой и материнским капиталом", text: "Сопроводили альтернативу: продажа + покупка + опека. Закрыли за 6 недель.", price: "27,0 млн ₽" },
];

const reviews = [
  { name: "Анна М.", text: "Работали с Сергеем по продаже квартиры на Кутузовском. Всё чётко, без давления, по договору. Цена получилась выше, чем мы рассчитывали.", rating: 5 },
  { name: "Дмитрий К.", text: "Подбирали первую квартиру в ипотеку. Объяснили все риски, проверили документы продавца, помогли с банком.", rating: 5 },
  { name: "Ольга С.", text: "Спокойный, деловой подход. Никто не торопил с авансом. Сделку провели через аккредитив, всё прозрачно.", rating: 5 },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Укажите имя и телефон");
      return;
    }
    toast.success("Заявка принята. Перезвоним в течение 30 минут.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b hairline">
        <div className="container-tight flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-md grid place-items-center" style={{ background: "hsl(var(--primary))" }}>
              <span className="text-primary-foreground font-bold">К</span>
            </span>
            <span className="font-semibold tracking-tight text-lg">Кутузофф</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#listings" className="hover:text-foreground transition">Объекты</a>
            <a href="#services" className="hover:text-foreground transition">Услуги</a>
            <a href="#cases" className="hover:text-foreground transition">Кейсы</a>
            <a href="#about" className="hover:text-foreground transition">О нас</a>
            <a href="#contact" className="hover:text-foreground transition">Контакты</a>
          </nav>
          <a href="tel:+74955177642" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium">
            <Phone className="w-4 h-4 gold-text" /> 8 (495) 517-76-42
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-tight pt-12 pb-16 md:pt-20 md:pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 fade-up">
            <div className="badge-trust mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]" />
              Агентство недвижимости в Москве · 5 лет на рынке
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
              Купим, продадим или подберём квартиру —
              <span className="gold-text"> по договору, без давления.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Кутузофф — это команда риелторов, которая работает в Москве с 2020 года. Прозрачная комиссия, юридическое сопровождение и реальные сделки в районе.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact">
                <Button size="lg" className="bg-[hsl(var(--primary))] text-primary-foreground hover:bg-[hsl(var(--gold-soft))] h-12 px-6 font-semibold">
                  Получить подборку объектов <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
              <a href="#valuation">
                <Button size="lg" variant="outline" className="h-12 px-6 border-hairline bg-transparent hover:bg-secondary">
                  Узнать стоимость моей квартиры
                </Button>
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5 text-sm">
              {[
                { k: "5 лет", v: "на рынке Москвы" },
                { k: "180+", v: "закрытых сделок" },
                { k: "РГР", v: "членство гильдии" },
                { k: "0 ₽", v: "до подписания договора" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="text-2xl font-semibold gold-text">{s.k}</div>
                  <div className="text-muted-foreground mt-0.5">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border hairline">
              <img
                src={agentImg}
                alt="Риелтор агентства Кутузофф"
                width={1280}
                height={1600}
                className="w-full h-[480px] md:h-[560px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/85 backdrop-blur rounded-xl p-4 border hairline">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-[hsl(var(--primary))]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm text-muted-foreground">Рейтинг на Яндекс Картах</span>
                </div>
                <div className="text-sm mt-1">Сергей Кутузов, ведущий агент · работает с клиентом лично</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LISTINGS */}
      <section id="listings" className="py-20 border-t hairline">
        <div className="container-tight">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="text-sm gold-text uppercase tracking-widest font-medium">Подборка</div>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Свежие объекты в продаже</h2>
              <p className="text-muted-foreground mt-2 max-w-lg">Реальные квартиры, проверенные нашими юристами. Полная подборка — по запросу.</p>
            </div>
            <a href="#contact" className="text-sm gold-text hover:underline">Запросить полный список →</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {listings.map((l) => (
              <article key={l.title} className="surface rounded-2xl overflow-hidden border hairline group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={l.img} alt={l.title} loading="lazy" width={1280} height={960}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <span className="absolute top-3 left-3 badge-trust !bg-background/90">{l.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg leading-tight">{l.title}</h3>
                  <div className="text-sm text-muted-foreground mt-1">{l.meta}</div>
                  <div className="flex items-end justify-between mt-4 pt-4 border-t hairline">
                    <span className="text-xl font-bold gold-text">{l.price}</span>
                    <span className="text-sm text-muted-foreground">{l.area}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 border-t hairline">
        <div className="container-tight">
          <div className="max-w-2xl mb-12">
            <div className="text-sm gold-text uppercase tracking-widest font-medium">Услуги</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Что мы делаем для клиента</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="surface rounded-2xl p-6 border hairline">
                <div className="w-11 h-11 rounded-lg grid place-items-center mb-4"
                  style={{ background: "hsl(var(--secondary))" }}>
                  <s.icon className="w-5 h-5 gold-text" />
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          {/* PROCESS — animated SVG */}
          <div className="mt-16 surface rounded-2xl p-6 md:p-10 border hairline">
            <h3 className="text-xl md:text-2xl font-semibold mb-8">Как проходит работа со сделкой</h3>
            <div className="relative">
              <svg viewBox="0 0 800 110" className="w-full h-auto" aria-hidden="true">
                <line x1="60" y1="55" x2="740" y2="55" stroke="hsl(var(--hairline))" strokeWidth="2" />
                <line x1="60" y1="55" x2="740" y2="55" stroke="hsl(var(--primary))" strokeWidth="2" className="draw-line" />
                {[60, 230, 400, 570, 740].map((x, i) => (
                  <g key={x}>
                    <circle cx={x} cy="55" r="9" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <circle cx={x} cy="55" r="4" fill="hsl(var(--primary))" className="pulse-dot" style={{ animationDelay: `${i * 0.4}s` }} />
                  </g>
                ))}
              </svg>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4 text-sm">
                {["Бесплатная встреча", "Договор и оценка", "Реклама / подбор", "Показы и торг", "Сделка и ключи"].map((t, i) => (
                  <div key={t}>
                    <div className="text-xs gold-text font-mono">0{i + 1}</div>
                    <div className="font-medium mt-1">{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-20 border-t hairline">
        <div className="container-tight">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="text-sm gold-text uppercase tracking-widest font-medium">Кейсы</div>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Реальные сделки</h2>
              <p className="text-muted-foreground mt-3">Каждая история — это конкретные люди, район и цифры. Подробности — по запросу под NDA.</p>
              <div className="mt-6 rounded-xl overflow-hidden border hairline">
                <img src={keysImg} alt="Передача ключей" loading="lazy" width={1280} height={900} className="w-full h-56 object-cover" />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4">
              {cases.map((c) => (
                <div key={c.title} className="surface rounded-2xl p-6 border hairline flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{c.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1.5">{c.text}</p>
                  </div>
                  <div className="md:text-right">
                    <div className="text-xs text-muted-foreground">Сумма сделки</div>
                    <div className="text-xl font-bold gold-text">{c.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 border-t hairline">
        <div className="container-tight grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden border hairline">
            <img src={teamImg} alt="Команда Кутузофф" loading="lazy" width={1280} height={900} className="w-full h-[420px] object-cover" />
          </div>
          <div>
            <div className="text-sm gold-text uppercase tracking-widest font-medium">О команде</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">5 лет в Москве. Без обещаний — только сделки.</h2>
            <p className="text-muted-foreground mt-4">
              Мы небольшая команда практикующих риелторов. Работаем в Западном и Центральном округах, знаем районы, дома и типичные ловушки в документах.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { icon: Award, t: "Сертифицированные агенты" },
                { icon: Building2, t: "Член гильдии риелторов (РГР)" },
                { icon: Clock, t: "Средний срок продажи — 38 дней" },
                { icon: Shield, t: "Страхование ответственности" },
              ].map((b) => (
                <div key={b.t} className="flex items-start gap-3">
                  <b.icon className="w-5 h-5 gold-text mt-0.5 shrink-0" />
                  <span className="text-sm">{b.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 border-t hairline">
        <div className="container-tight">
          <div className="text-sm gold-text uppercase tracking-widest font-medium">Отзывы</div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">Что говорят клиенты</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="surface rounded-2xl p-6 border hairline">
                <div className="flex items-center gap-1 gold-text mb-3">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm leading-relaxed">«{r.text}»</p>
                <div className="mt-4 pt-4 border-t hairline text-sm text-muted-foreground">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="py-20 border-t hairline">
        <div className="container-tight">
          <div className="text-sm gold-text uppercase tracking-widest font-medium">Гарантии</div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">Прозрачно с первого звонка</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: FileCheck, t: "Договор с фиксированной комиссией", d: "Оплата только по факту сделки. Без скрытых процентов и доплат." },
              { icon: Shield, t: "Юридическая проверка объекта", d: "История переходов, обременения, прописанные, согласие супругов." },
              { icon: Check, t: "Расчёты через банк", d: "Аккредитив или ячейка. Деньги уходят продавцу только после регистрации." },
            ].map((g) => (
              <div key={g.t} className="surface rounded-2xl p-6 border hairline">
                <g.icon className="w-6 h-6 gold-text" />
                <h3 className="font-semibold mt-4">{g.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 border-t hairline">
        <div className="container-tight grid lg:grid-cols-2 gap-10">
          <div id="valuation">
            <div className="text-sm gold-text uppercase tracking-widest font-medium">Заявка</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Получить подборку или оценку</h2>
            <p className="text-muted-foreground mt-3">Оставьте контакты — перезвоним в течение 30 минут, уточним задачу и пришлём 5–7 подходящих вариантов или оценку вашей квартиры.</p>

            <form onSubmit={submit} className="mt-8 space-y-4">
              <div>
                <label className="text-sm text-muted-foreground">Имя</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5 h-12 bg-secondary border-hairline" placeholder="Как к вам обращаться" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Телефон</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1.5 h-12 bg-secondary border-hairline" placeholder="+7 (___) ___-__-__" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Что нужно (необязательно)</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1.5 bg-secondary border-hairline min-h-[96px]"
                  placeholder="Например: подбор 2-комн. до 22 млн в Раменках" />
              </div>
              <Button type="submit" size="lg"
                className="w-full bg-[hsl(var(--primary))] text-primary-foreground hover:bg-[hsl(var(--gold-soft))] h-12 font-semibold">
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
            </form>
          </div>

          <div className="space-y-5">
            <div className="surface rounded-2xl p-6 border hairline">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 gold-text mt-0.5" />
                <div>
                  <div className="text-sm text-muted-foreground">Телефон</div>
                  <a href="tel:+74955177642" className="font-semibold">8 (495) 517-76-42</a>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-5">
                <MapPin className="w-5 h-5 gold-text mt-0.5" />
                <div>
                  <div className="text-sm text-muted-foreground">Офис</div>
                  <div className="font-semibold">ул. Трехгорный Вал, 20, Москва</div>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-5">
                <Clock className="w-5 h-5 gold-text mt-0.5" />
                <div>
                  <div className="text-sm text-muted-foreground">Часы работы</div>
                  <div className="font-semibold">Пн–Сб · 9:00–21:00</div>
                </div>
              </div>
            </div>

            <div className="surface rounded-2xl overflow-hidden border hairline">
              <iframe
                title="Кутузофф на Яндекс Картах — Москва"
                src="https://yandex.ru/map-widget/v1/?ll=37.564%2C55.764&z=16&text=ул.%20Трехгорный%20Вал%2C%2020%2C%20Москва"
                className="w-full h-[320px] border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t hairline py-8">
        <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Кутузофф · агентство недвижимости</div>
          <div>Москва · ИП Кутузов С.А.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
