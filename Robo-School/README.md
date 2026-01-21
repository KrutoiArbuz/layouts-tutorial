# 🤖 Robo-School

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt="SASS" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Gulp-CF4647?style=for-the-badge&logo=gulp&logoColor=white" alt="Gulp" />
</div>

## 📖 Описание

**Robo-School** - современный лендинг школы робототехники и программирования. Проект демонстрирует современные подходы к веб-разработке с использованием Gulp сборки.

## ✨ Особенности

- 🎯 **Современный дизайн** - минималистичный и функциональный интерфейс
- 📱 **Полная адаптивность** - корректное отображение на всех устройствах  
- ⚡ **Gulp сборка** - автоматизированная сборка проекта
- 🎨 **SCSS препроцессор** - удобная организация стилей
- 🔧 **Модульная архитектура** - разделение кода на компоненты
- 📦 **Оптимизация** - минификация и сжатие файлов

## 🚀 Установка и запуск

### Предварительные требования

- Node.js (версия 16 или выше)
- npm

### Установка

1. Перейдите в папку проекта:
```bash
cd Robo-School/gulp-maxgraph
```

2. Установите зависимости:
```bash
npm install
```

### Команды

```bash
# Запуск в режиме разработки (с автообновлением)
npm run dev

# Сборка для продакшена
npm run build

# Проверка стилей
npm run stylelint

# Исправление ошибок стилей
npm run style-fix

# Проверка EditorConfig
npm run code

# Создание архива проекта
npm run zip
```

## 📁 Структура проекта

```
gulp-maxgraph/
├── src/                      # Исходные файлы
│   ├── index.html           # Главная страница
│   ├── scss/                # SCSS стили
│   │   ├── main.scss       # Основной файл стилей
│   │   ├── _vars.scss      # Переменные
│   │   ├── _mixins.scss    # Миксины
│   │   └── components/     # Компоненты
│   ├── js/                  # JavaScript
│   │   ├── main.js         # Основной JS файл
│   │   └── components/     # JS компоненты
│   ├── partials/           # HTML части
│   └── img/                # Изображения
├── app/                    # Собранный проект  
├── gulp/                   # Конфигурация Gulp
│   ├── config/paths.js     # Пути файлов
│   └── tasks/              # Задачи сборки
├── gulpfile.js            # Основной файл Gulp
└── package.json           # Зависимости
```

## 🛠 Технологии

- **HTML5** - семантическая разметка
- **SCSS/Sass** - препроцессор CSS с переменными и миксинами
- **JavaScript ES6+** - современный JavaScript
- **Gulp 5** - сборщик задач
- **Babel** - транспиляция JavaScript
- **Autoprefixer** - автоматические CSS префиксы
- **Browser Sync** - автообновление браузера

## 📱 Адаптивность

Проект адаптирован для следующих разрешений:
- 📱 **Mobile**: 320px - 767px
- 📱 **Tablet**: 768px - 991px  
- 💻 **Desktop**: 992px - 1199px
- 🖥 **Large Desktop**: 1200px+

## 🎨 Компоненты

### Основные секции:
- 🏠 **Hero** - главный экран с призывом к действию
- ℹ️ **About** - информация о школе
- 🎯 **Benefits** - преимущества обучения
- 👨‍🏫 **Trainers** - команда преподавателей
- 💰 **Tariffs** - тарифные планы
- 📞 **Order** - форма заказа

### UI компоненты:
- 🔘 **Buttons** - стилизованные кнопки
- 📝 **Forms** - формы обратной связи
- 🎠 **Sliders** - карусели контента
- 📱 **Navigation** - адаптивное меню
- 💬 **Tooltips** - всплывающие подсказки

## 📊 Производительность

- ⚡ **Lighthouse Score**: 95+
- 🎯 **PageSpeed Insights**: Высокие показатели
- 📦 **Сжатие**: CSS и JS минифицированы
- 🖼 **Изображения**: Оптимизированы и конвертированы в WebP

## 📄 Лицензия

Проект использует сборку **gulp-maxgraph** от MaxGraph. 
Основной код проекта распространяется под лицензией MIT.