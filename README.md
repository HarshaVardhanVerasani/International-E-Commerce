# International E-Commerce

## Prerequisites 📌

Before starting development, install the following **VS Code extensions** to improve your workflow:

| Extension                                                                                                       | Author               | Purpose                                       |
| --------------------------------------------------------------------------------------------------------------- | -------------------- | --------------------------------------------- |
| [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) | Street Side Software | Helps with spelling errors in code.           |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                            | Microsoft            | Enforces JavaScript/TypeScript code quality.  |
| [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)                       | Wix                  | Displays the size of imported packages.       |
| [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)                          | Prettier             | Code formatting tool.                         |
| [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)                                  | GitKraken            | Enhances Git capabilities in VS Code.         |
| [SonarQube for IDE](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)           | SonarSource          | Helps detect code smells and security issues. |
| [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)                  | Sergii N             | Highlights color codes in the editor.         |

---

## ⚠️ Important: Use Yarn Instead of npm

🚀 This project is configured to use **Yarn** as the package manager.  
❌ **npm is not supported** in this project.

Make sure you have Yarn installed globally before proceeding:

```sh
npm install --global yarn
```

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

Before running the project, install all required dependencies:

```sh
yarn install
```

### 2️⃣ Start the Development Server

To launch the development server, run:

```sh
yarn run dev
```

The application will start at **`http://localhost:3000/`** (or another available port).

---

### 🎯 Additional Notes

- Ensure you have **Node.js** installed (preferably **LTS version**).
- If you encounter issues, check if **Yarn is installed** globally using:
  ```sh
  yarn --version
  ```
- Follow proper Git workflows and **commit using meaningful messages**.
- Follow the **camelCase** naming convention for all files and variables, **except for React components (`.tsx` or `.jsx`)**, which should use **PascalCase** (e.g., `MyComponent.tsx`).
- **Install new packages properly:** Keep **main dependencies** and **dev dependencies** separate. Use:
  - `yarn add package-name` for main dependencies.
  - `yarn add package-name --dev` for development dependencies.
  - Avoid mixing both types of dependencies. Please maintain a clean and organized dependencies.
