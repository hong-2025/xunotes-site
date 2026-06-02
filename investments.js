const XuNotesInvestments = (() => {
  const investments = {
    zh: [
      {
        id: "victory-giant",
        name: "胜宏科技",
        code: "300476",
        status: "持有",
        tags: ["PCB", "AI"],
        summary: "关注 AI 服务器、GPU 与交换机带来的 PCB 价值量提升。",
        thesis: [
          "英伟达新一代机柜从单卡、单服务器走向整柜级系统，PCB、高多层板、HDI、UBB、交换机板等价值量可能显著提升。",
          "胜宏科技已确认参与 AI 服务器、GPU、交换机等 AI 产业链，并进入英伟达等国际客户供应链。",
          "2025 年和 2026 年第一季度业绩、现金流已经验证其 AI 链条收入兑现能力。",
        ],
      },
      {
        id: "tesla",
        name: "特斯拉",
        code: "TSLA",
        status: "持有",
        tags: ["无人驾驶", "机器人", "AI"],
        summary: "关注 FSD、具身智能与规模化生产能力。",
        thesis: [
          "无人驾驶未来有望取得成功，特斯拉的 FSD 是其中最值得关注的方案之一。",
          "无人驾驶和人形机器人都需要人工智能理解物理世界，两者的底层能力存在相通之处。",
          "特斯拉具备将技术转化为实际产品并规模化生产的能力。",
        ],
      },
      {
        id: "copper",
        name: "铜",
        code: "",
        status: "持有",
        tags: ["AI", "电力", "资源", "物理世界"],
        summary: "关注 AI 发展、电力需求与物理资源约束之间的关系。",
        thesis: [
          "AI 的发展最终会反映到物理世界的生产活动中。当生产快速增加时，资源价格可能上涨。",
          "铜是工业、电力和基础设施中非常重要且难以替代的物理资源。",
        ],
      },
    ],
    en: [
      {
        id: "victory-giant",
        name: "Victory Giant Technology",
        code: "300476",
        status: "Holding",
        tags: ["PCB", "AI"],
        summary: "Tracking PCB value growth driven by AI servers, GPUs, and switches.",
        thesis: [
          "NVIDIA's next-generation racks are evolving from individual cards and servers into rack-scale systems. This could significantly increase the value of PCBs, high-layer-count boards, HDI boards, UBBs, and switch boards.",
          "Victory Giant Technology has confirmed its participation in the AI server, GPU, and switch supply chains and has entered the supply chains of international customers including NVIDIA.",
          "Its 2025 and first-quarter 2026 results and cash flow have provided evidence that AI-related revenue is being realized.",
        ],
      },
      {
        id: "tesla",
        name: "Tesla",
        code: "TSLA",
        status: "Holding",
        tags: ["Autonomous Driving", "Robotics", "AI"],
        summary: "Tracking FSD, embodied intelligence, and scaled manufacturing capability.",
        thesis: [
          "Autonomous driving is likely to succeed over time, and Tesla's FSD is one of the solutions most worth watching.",
          "Autonomous driving and humanoid robots both require AI to understand the physical world, so their underlying capabilities overlap.",
          "Tesla has the ability to turn technology into real products and manufacture them at scale.",
        ],
      },
      {
        id: "copper",
        name: "Copper",
        code: "",
        status: "Holding",
        tags: ["AI", "Electricity", "Resources", "Physical World"],
        summary: "Tracking the relationship between AI growth, electricity demand, and physical resource constraints.",
        thesis: [
          "AI development will ultimately affect production in the physical world. When production grows rapidly, resource prices may rise.",
          "Copper is a highly important and difficult-to-replace physical resource for industry, electricity, and infrastructure.",
        ],
      },
    ],
  };

  function all() {
    return investments[XuNotes.getLanguage()];
  }

  function find(id) {
    return all().find((investment) => investment.id === id) ?? all()[0];
  }

  return { all, find };
})();
