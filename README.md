# Bank Statement Analyzer


Це невеликий застосунок для аналізу банківських виписок у форматі CSV. Дозволяє завантажувати файл, фільтрувати транзакції, переглядати аналітику та топ-5 контрагентів за витратами.

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

2. Встановіть залежності:
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
<img width="1280" height="720" alt="bank1" src="https://github.com/user-attachments/assets/ad7a9c83-0be5-432e-9873-e0f637645fca" />
<img width="1280" height="720" alt="bank2" src="https://github.com/user-attachments/assets/2e144047-9e02-4a8f-8ba0-12ef2350d3c0" />
