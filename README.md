# Bank Statement Analyzer


Це невеликий застосунок для аналізу банківських виписок у форматі CSV. Дозволяє завантажувати файл, фільтрувати транзакції, переглядати аналітику та топ-5 контрагентів за витратами.

[Live](https://bank-statement-analyzer-beta.vercel.app/)

## 📝 Про рішення
Більшу частину часу я приділив логіці підрахунку "Топ-5 компаній за витратами". Для цього використав структуру **```Map```** - вона дозволила швидко згрупувати всі суми по кожному імені. Також зробив зручне завантаження файлів через drag-and-drop та швидкий пошук

## 🚀 Стек технологій
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Validation:** Zod
- **Testing:** Vitest
- **Parsing:** PapaParse

## 🛠 Як запустити проект
1. Клонуйте репозиторій:
   ```bash
   git clone https://github.com/KirillPitomets/bank-statement-analyzer.git
   ```

2. Перейдіть у папку проекту:
    ```bash
    cd bank-statement-analyzer
    ```
3. Встановіть залежності:
    ```bash 
    npm install
    ```
4. Запустіть сервер для розробки:
    ```bash
    npm run dev
    ```
5. Відкрийте http://localhost:3000 у браузері.

## 🧪 Тестування та перевірка
1. Запустіть сервер для розробки:
    ```bash
    npm run test
    ```
2. Перевірка типів та лінтинг:
    ```bash
    npx tsc --noEmit
    npm run lint
    ```
## 📸 Скриншот головної сторінки
<img width="1920" height="1080" alt="localhost_3000_ (1)" src="https://github.com/user-attachments/assets/8b82b089-f0fe-4fe5-9def-6f7d0c13a41a" />

