const XuNotesRecipes = (() => {
  const recipes = {
    zh: [
      {
        id: "qiangguomian-suipo",
        title: "炝锅面-隋坡",
        ingredients: ["鸡蛋", "西红柿", "大葱"],
        seasonings: ["八角一个", "盐", "酱油", "面条"],
        process: [
          "西红柿切丁，打三个鸡蛋，葱切眉毛葱（稍大）。",
          "炒鸡蛋，油温略高，鸡蛋稍老一些容易出香味。",
          "鸡蛋盛出，原锅加油，把葱温油下锅，中火炒至焦黄色。葱要多，火不要大。",
          "炒西红柿，加入酱油，加开水，并倒入鸡蛋。",
          "大火烧开 3-5 分钟，加盐。保持大火滚。",
          "下入面条，熟了即可，可加水调节稀稠比例。",
        ],
        source: "B站",
      },
    ],
    en: [
      {
        id: "qiangguomian-suipo",
        title: "Qiangguo Noodles - Suipo",
        ingredients: ["Eggs", "Tomatoes", "Scallions"],
        seasonings: ["One star anise", "Salt", "Soy sauce", "Noodles"],
        process: [
          "Dice the tomatoes, beat three eggs, and cut the scallions into slightly larger slices.",
          "Scramble the eggs over slightly higher heat. Letting the eggs cook a little firmer helps bring out aroma.",
          "Remove the eggs. Add oil to the same pan, add scallions while the oil is warm, and cook over medium heat until golden brown. Use plenty of scallions and avoid high heat.",
          "Stir-fry the tomatoes, add soy sauce, add boiling water, and return the eggs to the pan.",
          "Bring to a rolling boil over high heat for 3-5 minutes, then add salt.",
          "Add the noodles and cook until done. Add water as needed to adjust thickness.",
        ],
        source: "Bilibili",
      },
    ],
  };

  function all() {
    return recipes[XuNotes.getLanguage()];
  }

  function find(id) {
    return all().find((recipe) => recipe.id === id) ?? all()[0];
  }

  return { all, find };
})();
