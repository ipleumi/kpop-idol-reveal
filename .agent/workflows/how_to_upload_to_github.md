---
description: How to upload your project to GitHub
---

1.  **Initialize Git**:
    Open your terminal in the project folder and run:
    ```bash
    git init
    ```

2.  **Add Files**:
    Stage all your files for the first commit:
    ```bash
    git add .
    ```

3.  **Commit**:
    Save your changes with a message:
    ```bash
    git commit -m "Initial commit: K-Pop Idol Reveal Game"
    ```

4.  **Create Repository on GitHub**:
    - Go to [GitHub.com](https://github.com) and log in.
    - Click the **+** icon in the top right and select **New repository**.
    - Name your repository (e.g., `kpop-idol-reveal`).
    - Click **Create repository**.

5.  **Connect to GitHub**:
    Copy the commands under "…or push an existing repository from the command line" from the GitHub page. They will look like this (replace `YOUR_USERNAME` and `REPO_NAME`):
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
    git branch -M main
    git push -u origin main
    ```

6.  **Verify**:
    Refresh your GitHub repository page to see your code!
