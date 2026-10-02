const MENU = [
  { id: "khachapuri", title: "Хачапури и пироги", items: [
    ["По-аджарски", "Лодочка из пышного теста с имеретинским сыром, желтком и кусочком сливочного масла", "550 г", 1050],
    ["По-имеретински", "Классика: тонкое тесто и много тягучего сыра внутри", "550 г", 1040],
    ["По-мегрельски", "Сыр внутри и золотистая сырная корочка сверху, 27 см", "550 г", 1070],
    ["Осетинский со шпинатом", "Дрожжевое тесто, хрустящая корочка, сыр и шпинат, 27 см", "550 г", 1040],
    ["Пеновани", "Слоёное тесто с сулугуни — хрустит и тает одновременно", "550 г", 1040],
    ["Шоти", "Грузинский хлеб из печи-тоне, к любому блюду", "400 г", 190],
  ]},
  { id: "grill", title: "Мангал", items: [
    ["Корейка свиная", "На кости, маринад с кинзой и гранатом", "260 г", 950],
    ["Шашлык из свинины", "Шея на живых углях, маринованный лук", "200 г", 870],
    ["Шашлык из куриного бедра", "Сочное бедро в аджике", "200 г", 790],
    ["Люля-кебаб из баранины", "С зирой и зеленью", "200 г", 890],
    ["Люля-кебаб из говядины", "Рубленая говядина, лук, перец", "200 г", 780],
    ["Люля-кебаб по-домашнему", "Говядина и свинина, как готовят дома", "200 г", 750],
    ["Люля-кебаб из курицы", "Нежный и лёгкий", "200 г", 720],
    ["Овощи на углях", "Баклажан, перец, томаты, лук", "150 г", 590],
  ]},
  { id: "hot", title: "Горячее", items: [
    ["Чахохбили", "Курица, томлённая в собственном соку с томатами, кавказскими специями и зеленью", "240 г", 690],
    ["Чашушули из свинины", "Острое рагу с томатами и перцем — любимец гостей", "230 г", 780],
    ["Чанахи", "Баранина, запечённая с овощами в глиняном горшочке", "250 г", 850],
    ["Остри", "Пряная говядина в остром томатном соусе", "250 г", 890],
    ["Толма", "Виноградные листья с рубленым мясом и мацони", "260 г", 840],
    ["Телятина по-кахетински", "С ткемали, эстрагоном и белым вином", "230 г", 820],
    ["Оджахури с грибами", "Жареный картофель с шампиньонами, луком и специями", "200 г", 680],
  ]},
  { id: "soups", title: "Супы", items: [
    ["Харчо", "Густой говяжий суп с рисом, ткемали и орехами", "280 г", 620],
    ["Чихиртма", "Нежный куриный бульон со взбитым яйцом и зеленью", "280 мл", 540],
    ["Чакапули с телятиной", "Телятина, тархун, зелёный ткемали", "280 г", 680],
    ["Шурпа", "Наваристый суп из баранины с овощами", "280 г", 670],
    ["Суп-лапша с курицей", "Домашняя лапша — для детей и не только", "280 г", 540],
  ]},
  { id: "salads", title: "Салаты", items: [
    ["Грузинский с грецкими орехами", "Томаты, огурцы, красный лук, ореховая заправка", "200 г", 610],
    ["Грузинский", "Спелые томаты, огурцы, кинза, ароматное масло", "200 г", 560],
    ["Азнаури", "Говядина, овощи и пряная заправка", "200 г", 660],
    ["Баклажан, томаты и сулугуни", "Тёплый салат с печёным баклажаном", "220 г", 720],
    ["Аценцили", "Курица, грибы и свежие овощи", "220 г", 680],
    ["Острый с говядиной", "Для тех, кто любит погорячее", "220 г", 690],
    ["Цезарь с курицей", "Классика в нашем исполнении", "220 г", 660],
    ["Цезарь с лососем", "С малосольным лососем", "220 г", 790],
  ]},
  { id: "starters", title: "Закуски", items: [
    ["Гебжалия", "Рулетики из сулугуни с мятой и кинзой в сливочном соусе", "150 г", 670],
    ["Баклажаны с орехами", "Рулетики с ореховой пастой и гранатом", "180 г", 720],
    ["Баклажаны с овощами", "Рулетики с овощной начинкой", "180 г", 680],
    ["Картофель по-деревенски", "", "150 г", 340],
    ["Картофель фри", "", "150 г", 340],
  ]},
  { id: "sauces", title: "Соусы", items: [
    ["Ткемали", "Кислый сливовый", "40 г", 120],
    ["Сацебели", "Томатный с зеленью", "40 г", 120],
    ["Наршараб", "Гранатовый", "40 г", 120],
    ["Аджика зелёная", "Острая, с кинзой", "40 г", 120],
    ["Аджика имеретинская", "Красная, пряная", "40 г", 120],
    ["Мацони с чесноком", "С зеленью", "40 г", 120],
  ]},
  { id: "desserts", title: "Десерты", items: [
    ["Тхилис-торти", "Фирменный тбилисский торт", "180 г", 590],
    ["Наполеон", "По семейному рецепту", "180 г", 590],
    ["Шоколадный цветок", "Стаканчик из тёмного шоколада, крем-чиз, домашний вишнёвый джем", "165 г", 560],
  ]},
  { id: "drinks", title: "Напитки", items: [
    ["Лимонад «Тархун»", "Грузинский лимонад", "500 мл", 410],
    ["Лимонад «Фейхоа»", "Грузинский лимонад", "500 мл", 410],
    ["Лимонад «Саперави»", "Грузинский лимонад", "500 мл", 410],
    ["Лимонад «Груша»", "Грузинский лимонад", "500 мл", 410],
    ["Боржоми", "Минеральная вода", "500 мл", 470],
    ["Кола", "", "500 мл", 250],
  ]},
];

const fmt = n => n.toLocaleString("ru-RU").replace(/\s/g, " ") + " ₽";
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const tabs = document.getElementById("menuTabs");
const panel = document.getElementById("menuPanel");

function renderMenu(id) {
  const cat = MENU.find(c => c.id === id);
  tabs.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", t.dataset.id === id));
  panel.innerHTML = cat.items.map(([name, desc, w, price]) => `
    <div class="dish">
      <div class="dish__row">
        <span class="dish__name">${esc(name)}</span>
        <span class="dish__dots"></span>
        <span class="dish__price">${fmt(price)}</span>
      </div>
      <p class="dish__desc"><span>${esc(desc)}</span><span class="dish__w">${w}</span></p>
    </div>`).join("");
  panel.style.animation = "none";
  panel.offsetHeight;
  panel.style.animation = "";
}

tabs.innerHTML = MENU.map(c =>
  `<button class="tab" role="tab" data-id="${c.id}">${c.title}</button>`).join("");
tabs.addEventListener("click", e => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  renderMenu(btn.dataset.id);
  btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
});
renderMenu(MENU[0].id);

// nav: solid background after scrolling past top
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-solid", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// mobile menu
const burger = document.getElementById("burger");
const links = document.getElementById("navLinks");
const setMenu = open => {
  links.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", open);
  document.body.style.overflow = open ? "hidden" : "";
};
burger.addEventListener("click", () => setMenu(!links.classList.contains("is-open")));
links.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });

// reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = (el.closest(".hero") ? i * 0.15 : 0) + "s";
  io.observe(el);
});

// booking form (demo: validates and shows confirmation, sends nothing)
const form = document.getElementById("bookingForm");
const ok = document.getElementById("formOk");
const dateInput = form.elements.date;
const today = new Date();
const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
dateInput.min = iso(today);
dateInput.value = iso(today);

form.addEventListener("submit", e => {
  e.preventDefault();
  let valid = true;
  ["name", "phone", "date", "time"].forEach(n => {
    const el = form.elements[n];
    const bad = !el.value.trim() || (n === "phone" && el.value.replace(/\D/g, "").length < 10);
    el.classList.toggle("is-invalid", bad);
    if (bad) valid = false;
  });
  if (!valid) return;
  ok.hidden = false;
  form.querySelector("button").disabled = true;
  form.querySelector("button").textContent = "Заявка отправлена";
});

// interior gallery lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const closeLightbox = () => { lightbox.hidden = true; document.body.style.overflow = ""; };
document.querySelectorAll(".gallery__item").forEach(item => item.addEventListener("click", () => {
  lightboxImg.src = item.dataset.full;
  lightboxImg.alt = item.querySelector("img").alt;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}));
lightbox.addEventListener("click", e => { if (e.target !== lightboxImg) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !lightbox.hidden) closeLightbox(); });
