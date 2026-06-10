const XuNotes = (() => {
  const content = {
    zh: {
      nav: { about: "关于", exchange: "交流", language: "English" },
      home: {
        title: "记录值得反复查看的内容。",
        subtitle: "一个关于投资、技术与生活的个人空间。",
      },
      categories: {
        investment: "投资",
        technology: "技术",
        life: "生活",
        food: "美食",
        travel: "旅游",
        health: "健康",
        other: "其它",
      },
      categoryDescriptions: {
        investment: "市场观察、研究与实践记录。",
        technology: "工具、方法与项目笔记。",
        life: "日常经验与长期关注。",
        food: "餐桌、食材与味道。",
        travel: "行程、见闻与照片。",
        health: "健康习惯与资料整理。",
        other: "不属于固定分类的记录。",
      },
      categoryPage: {
        back: "返回首页",
        empty: "这个栏目正在整理中，新的内容会陆续发布。",
      },
      techNote: {
        eyebrow: "TECH NOTE",
        back: "返回技术栏目",
        meta: "知识点",
        viewDetails: "查看完整内容",
      },
      recipe: {
        eyebrow: "RECIPE",
        sectionTitle: "菜谱",
        sectionMeta: "整理常做菜和可靠来源的做法。",
        viewRecipes: "查看菜谱",
        backToFood: "返回美食栏目",
        backToRecipes: "返回菜谱",
        viewDetails: "查看完整做法",
        ingredients: "食材",
        seasonings: "配料",
        process: "制作过程",
        source: "来源",
      },
      investment: {
        eyebrow: "INVESTMENT NOTE",
        back: "返回投资栏目",
        viewDetails: "查看详细信息",
        thesis: "投资逻辑",
        placeholder: "具体内容待补充。",
        disclaimer: "本页仅为个人投资记录，不构成投资建议。",
      },
      exchange: {
        eyebrow: "EXCHANGE",
        title: "交流",
        intro: "欢迎留下你的想法。留言将匿名提交，仅站点管理员可以查看。",
        label: "留言内容",
        placeholder: "请输入留言内容",
        submit: "匿名提交",
        submitting: "正在提交...",
        success: "提交成功，感谢你的留言。",
        error: "暂时无法提交，请稍后再试。",
        note: "请勿提交密码、验证码或其他敏感信息。",
      },
      admin: {
        eyebrow: "PRIVATE",
        title: "留言管理",
        intro: "此页面不在网站导航中显示。请输入管理员口令查看留言。",
        placeholder: "管理员口令",
        load: "查看留言",
        empty: "目前没有留言。",
        error: "无法读取留言，请检查管理员口令。",
      },
      about: {
        title: "关于本站",
        body: "Xu Notes 是一个简单、长期维护的个人空间，用于保存值得反复查看的内容。",
      },
    },
    en: {
      nav: { about: "About", exchange: "Exchange", language: "中文版" },
      home: {
        title: "Notes worth revisiting.",
        subtitle: "A personal space for investing, technology, and life.",
      },
      categories: {
        investment: "Investing",
        technology: "Technology",
        life: "Life",
        food: "Food",
        travel: "Travel",
        health: "Health",
        other: "Other",
      },
      categoryDescriptions: {
        investment: "Market observations, research, and practice.",
        technology: "Notes on tools, methods, and projects.",
        life: "Everyday experience and long-term interests.",
        food: "Meals, ingredients, and flavors.",
        travel: "Journeys, observations, and photos.",
        health: "Healthy habits and useful references.",
        other: "Notes that do not fit a fixed category.",
      },
      categoryPage: {
        back: "Back to home",
        empty: "This section is being organized. New notes will be published here.",
      },
      techNote: {
        eyebrow: "TECH NOTE",
        back: "Back to technology",
        meta: "Knowledge note",
        viewDetails: "View full note",
      },
      recipe: {
        eyebrow: "RECIPE",
        sectionTitle: "Recipes",
        sectionMeta: "A collection of repeatable dishes and reliable sources.",
        viewRecipes: "View recipes",
        backToFood: "Back to food",
        backToRecipes: "Back to recipes",
        viewDetails: "View full recipe",
        ingredients: "Ingredients",
        seasonings: "Seasonings",
        process: "Process",
        source: "Source",
      },
      investment: {
        eyebrow: "INVESTMENT NOTE",
        back: "Back to investing",
        viewDetails: "View details",
        thesis: "Investment thesis",
        placeholder: "Detailed content will be added later.",
        disclaimer: "This page is a personal investment note and does not constitute investment advice.",
      },
      exchange: {
        eyebrow: "EXCHANGE",
        title: "Exchange",
        intro: "Leave a note if you would like to get in touch. Messages are submitted anonymously and are visible only to the site administrator.",
        label: "Message",
        placeholder: "Write your message here",
        submit: "Submit anonymously",
        submitting: "Submitting...",
        success: "Submitted successfully. Thank you for your message.",
        error: "Unable to submit right now. Please try again later.",
        note: "Do not submit passwords, verification codes, or other sensitive information.",
      },
      admin: {
        eyebrow: "PRIVATE",
        title: "Message inbox",
        intro: "This page is not linked from the site navigation. Enter the administrator passphrase to view messages.",
        placeholder: "Administrator passphrase",
        load: "View messages",
        empty: "There are no messages yet.",
        error: "Unable to load messages. Check the administrator passphrase.",
      },
      about: {
        title: "About this site",
        body: "Xu Notes is a simple, long-term personal space for keeping content worth revisiting.",
      },
    },
  };

  const categoryKeys = ["investment", "technology", "food", "travel", "health", "other"];

  function getLanguage() {
    return localStorage.getItem("xu-notes-language") === "en" ? "en" : "zh";
  }

  function translate(path, language = getLanguage()) {
    return path.split(".").reduce((value, key) => value?.[key], content[language]) ?? path;
  }

  function applyLanguage() {
    const language = getLanguage();
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = translate(element.dataset.i18n, language);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.placeholder = translate(element.dataset.i18nPlaceholder, language);
    });
    document.querySelectorAll("[data-language-switch]").forEach((element) => {
      element.textContent = content[language].nav.language;
    });
    document.dispatchEvent(new CustomEvent("xu-notes:language", { detail: language }));
  }

  document.addEventListener("click", (event) => {
    if (!event.target.matches("[data-language-switch]")) return;
    localStorage.setItem("xu-notes-language", getLanguage() === "zh" ? "en" : "zh");
    applyLanguage();
  });

  document.addEventListener("DOMContentLoaded", applyLanguage);

  return { applyLanguage, categoryKeys, getLanguage, translate };
})();
