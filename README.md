# Castaway — Landing page of a podcast

**Castaway** — одностраничный лендинг (landing page) подкаста: адаптивная верстка на чистом HTML / CSS / JavaScript с dev-сервером на базе Vite. В проекте нет фреймворков — только статическая страница, разделённая на модульные CSS-файлы, и немного интерактивности на vanilla JS.

## Что на странице

| Секция | Описание |
| --- | --- |
| **Header** | Логотип, якорная навигация (`Home`, `Episodes`, `About`, `Contact`) и бургер-меню для мобильных устройств |
| **Hero (section1)** | Заголовок «Take your podcast to the next level», фото и логотипы платформ |
| **Latest episodes (section2)** | Три карточки эпизодов с описанием и кнопкой «View Episode Details», раскрывающей доп. текст |
| **About (section3)** | Блок о ведущем Jacob Paulaner (аудио-инженер, подкастер) со стрелкой-переключателем |
| **Contact (section3 bottom)** | Форма подписки: имя, e-mail, телефон с валидацией (`required`) |
| **Testimonials (section4)** | Отзывы слушателей с рейтингом в виде звёзд |
| **Footer** | Навигация, ссылки, соцсети (Instagram, Twitter, Facebook) и логотипы платформ |

## Технологии

- **HTML5** — семантическая разметка, Open Graph мета-теги;
- **CSS** — набор модульных файлов в `styles/` (reset, variables, header, секции, footer, анимации, media queries), шрифт *DM Sans* из Google Fonts и локальные шрифты в `fonts/`;
- **JavaScript (ES modules)** — `script.js`: бургер-меню, закрытие панели по крестику/клику на ссылку, раскрытие карточек эпизодов, переключение стрелки и фокус-состояния формы;
- **Vite** — dev-сервер и прод-сборка.

## Структура проекта

```
Podcast/
├── index.html        # разметка страницы
├── script.js         # интерактив (бургер-меню, карточки, форма)
├── styles/           # модульные CSS-файлы
│   ├── index.css      # точка входа (импортирует остальные)
│   ├── reset.css, variables.css, fonts.css
│   ├── header.css, section1–4.css, footer.css
│   └── animation.css, media.css
├── fonts/            # локальные шрифты
├── assets/           # изображения и SVG-иконки
├── package.json
└── README.md
```

## Быстрый старт

Требуется [Node.js](https://nodejs.org/) и [pnpm](https://pnpm.io/) (или npm/yarn).

```bash
# установка зависимостей
pnpm install

# запуск dev-сервера (http://localhost:5173)
pnpm dev

# продакшн-сборка в dist/
pnpm build

# предпросмотр собранной версии
pnpm preview
```

## Скрипты

| Команда | Назначение |
| --- | --- |
| `pnpm dev` | Запуск Vite dev-сервера с hot-reload |
| `pnpm build` | Сборка проекта в `dist/` |
| `pnpm preview` | Локальный предпросмотр продакшн-сборки |

## Адаптивность

Мобильная версия реализована через бургер-меню (`burger.svg` / `cross.svg`) и media-запросы в `styles/media.css`; отдельная сборка не используется.

## Лицензия

Учебный/портфолио-проект. Все права на исходный дизайн и материалы принадлежат их владельцам.

