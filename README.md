# MBTI 性格测试 (Premium)

一个基于荣格心理学理论、精美且感性的 MBTI 人格测试网页。

## 功能特点
- **20 题随机题库**：从 40 道精选题库中动态生成，确保测试的多样性。
- **高级视觉设计**：深色模式、流动背景、毛玻璃（Glassmorphism）效果。
- **深度人格分析**：涵盖工作、爱情、社交、生活建议及灵魂伴侣推荐。
- **极致响应式**：适配手机、平板及电脑端。

## 部署到 Tencent Cloud EdgeOne

1. 登录 [EdgeOne 控制台](https://console.cloud.tencent.com/edgeone)。
2. 选择 **Pages (边缘函数/静态网站)**。
3. 创建新项目。
4. **关联 Git** (GitHub/GitLab) 或 **直接上传** 整个文件夹。
5. 构建配置：
   - 框架预设：`无` (Static)
   - 发布目录：`.` (根目录)
6. 点击部署，获取您的加速域名。

## 自动化部署 (GitHub Actions)

项目已配置 GitHub Actions 自动部署流程。当您推送到 `main` 分支时，代码将自动构建并上传到 EdgeOne。

### 配置步骤：
1. 在 GitHub 仓库设置中，进入 **Settings > Secrets and variables > Actions**。
2. 添加以下 **Repository secrets**:
   - `EDGEONE_TOKEN`: 您的 EdgeOne Pages API Token (在 EdgeOne 控制台生成)。
   - `EDGEONE_PROJECT_NAME`: 您的 EdgeOne Pages 项目名称。

## 技术栈
- HTML5
- CSS3 (Vanilla CSS with Design Tokens)
- JavaScript (Vanilla ES6+)
