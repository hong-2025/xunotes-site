const XuNotesTechNotes = (() => {
  const notes = {
    zh: [
      {
        id: "windows-11-local-account",
        title: "Windows 11 新电脑跳过微软账户登录方案",
        sections: [
          {
            heading: "适用场景",
            paragraphs: [
              "新电脑首次开机进入 Windows 11 初始化设置时，系统强制要求联网并登录微软账户。",
              "如果希望改用本地账户登录，可以使用 OOBE\\BYPASSNRO 命令绕过网络强制检查。",
            ],
          },
          {
            heading: "操作步骤",
            steps: [
              {
                title: "1. 保持断网",
                paragraphs: [
                  "首次开机时：",
                  "不插网线；不连接 Wi-Fi；不输入无线网络密码。",
                  "确保电脑处于断网状态。",
                ],
              },
              {
                title: "2. 打开命令提示符",
                paragraphs: [
                  "当界面停留在“让我们为你连接到网络”或 “Let's connect you to a network”，且无法继续下一步时，按下：",
                ],
                codeBlocks: ["Shift + F10", "Fn + Shift + F10"],
                paragraphsAfter: ["笔记本电脑如果无反应，可尝试 Fn + Shift + F10。此时会弹出黑色的 CMD 命令窗口。"],
              },
              {
                title: "3. 输入绕过命令",
                paragraphs: ["在 CMD 中输入："],
                codeBlocks: ["OOBE\\BYPASSNRO"],
                paragraphsAfter: ["然后按回车。电脑会自动重启。"],
              },
              {
                title: "4. 重启后继续设置",
                paragraphs: [
                  "重启后会重新进入初始化设置流程。",
                  "再次到达联网界面时，会出现“我没有 Internet 连接”。点击后，再选择“继续执行受限设置”。",
                  "之后即可创建本地账户。",
                ],
              },
            ],
          },
          {
            heading: "注意事项",
            bullets: [
              "全程尽量保持断网。",
              "该方法主要适用于 Windows 11 首次开机 OOBE 阶段。",
              "如果已经联网并进入微软账户登录界面，也可以先断网，再尝试 Shift + F10。",
              "不同品牌电脑界面文字可能略有差异，但逻辑一致。",
              "如果 Shift + F10 无效，优先尝试 Fn + Shift + F10。",
            ],
          },
        ],
      },
    ],
    en: [
      {
        id: "windows-11-local-account",
        title: "How to Skip Microsoft Account Sign-In on a New Windows 11 PC",
        sections: [
          {
            heading: "Use Case",
            paragraphs: [
              "During the initial Windows 11 setup on a new PC, the system may require an internet connection and Microsoft account sign-in.",
              "If you want to use a local account instead, you can use the OOBE\\BYPASSNRO command to bypass the forced network check.",
            ],
          },
          {
            heading: "Steps",
            steps: [
              {
                title: "1. Stay Offline",
                paragraphs: [
                  "During the first startup:",
                  "Do not plug in an Ethernet cable; do not connect to Wi-Fi; do not enter a wireless network password.",
                  "Keep the computer offline.",
                ],
              },
              {
                title: "2. Open Command Prompt",
                paragraphs: [
                  "When the screen stays on “Let's connect you to a network” and you cannot continue, press:",
                ],
                codeBlocks: ["Shift + F10", "Fn + Shift + F10"],
                paragraphsAfter: ["If nothing happens on a laptop, try Fn + Shift + F10. A black CMD window should appear."],
              },
              {
                title: "3. Enter the Bypass Command",
                paragraphs: ["In CMD, type:"],
                codeBlocks: ["OOBE\\BYPASSNRO"],
                paragraphsAfter: ["Then press Enter. The computer will restart automatically."],
              },
              {
                title: "4. Continue Setup After Restart",
                paragraphs: [
                  "After restart, Windows will enter the setup flow again.",
                  "When you reach the network screen again, an “I don't have internet” option should appear. Click it, then choose “Continue with limited setup”.",
                  "You can then create a local account.",
                ],
              },
            ],
          },
          {
            heading: "Notes",
            bullets: [
              "Try to stay offline throughout the process.",
              "This method mainly applies to the Windows 11 OOBE first-start setup stage.",
              "If you have already connected to the internet and reached the Microsoft account sign-in screen, disconnect first and then try Shift + F10.",
              "Different PC brands may use slightly different wording, but the logic is the same.",
              "If Shift + F10 does not work, try Fn + Shift + F10 first.",
            ],
          },
        ],
      },
    ],
  };

  function all() {
    return notes[XuNotes.getLanguage()];
  }

  function find(id) {
    return all().find((note) => note.id === id) ?? all()[0];
  }

  return { all, find };
})();
