const XuNotesSummaries = (() => {
  const summaries = {
    zh: [
      "投资：只允许一种失败：违反规则的失败。只要是按规则执行的，结果无论如何，都“无权懊悔”。",
      "投资：盈亏不需要被解释，行为才需要被解释。",
      "投资：未来什么值钱？不可再生资源，原料，如铜，核心土地，黄金。",
      "分析问题：第一性原理，大问题拆分，换个角度提问。",
      "推理：只有两种方式，归纳和演绎，但归纳可能是错的，而演绎需要前提条件的必须正确。",
      "摄影：光影效果——反射，倒影，光斑，阴影。",
      "东野圭吾：人性凑太近谁也没法看。",
      "生命体验：值得逛的公园，值得逛的博物馆，值得看发风景，值得去吃的午饭",
    ],
    en: [
      "Investing: Only one kind of failure is allowed: failure from breaking the rules. As long as the rules were followed, whatever the result is, there is no right to regret.",
      "Investing: Profit and loss do not need to be explained; behavior needs to be explained.",
      "Investing: What will be valuable in the future? Non-renewable resources, raw materials such as copper, core land, and gold.",
      "Analyzing problems: first principles, breaking big problems down, and asking from another angle.",
      "Reasoning: There are only two methods, induction and deduction. But induction may be wrong, and deduction requires its premises to be correct.",
      "Photography: light and shadow effects: reflection, mirrored reflection, bokeh, and shadow.",
      "Keigo Higashino: when human nature is viewed too closely, no one can bear to look at it.",
      "Life experience: parks worth visiting, museums worth visiting, scenery worth seeing, and lunches worth going out to eat.",
    ],
  };

  function all() {
    return summaries[XuNotes.getLanguage()];
  }

  return { all };
})();
