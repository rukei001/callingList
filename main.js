{
  //キャラプロフィール表示用の個別プロフィール
  const characters = [
    {
      id: "svante",
      name: "スヴァンテ",
      fullname: "Svante Glanfelt",
      image: "image/svante.JPG",
      firstperson: "僕",
      secondperson: [
        {
          name: "君",
          note: "基本",
        },
      ],
      birthplace: "Sweden",
      birthcity: "Stockholm",
      mothertongue: ["Swedish"],
      themecolor: "#234bff",
    },

    {
      id: "noah",
      name: "ノア",
      fullname: "Noah Johansen",
      image: "image/noah.a1.jpg",
      firstperson: "俺",
      secondperson: [
        {
          name: "君",
          note: "基本",
        },
        {
          name: "お前",
          note: "主に幼馴染相手",
        },
      ],
      birthplace: "Norway",
      birthcity: "Bergen",
      mothertongue: ["Norwegian"],
      themecolor: "#b854ff",
    },

    {
      id: "raine",
      name: "ライネ",
      fullname: "Raine Parviainen",
      image: "image/raine.png",
      firstperson: "ぼく",
      secondperson: [
        {
          name: "きみ",
          note: "基本",
        },
      ],
      birthplace: "Finland",
      birthcity: "Turku",
      mothertongue: ["Finnish"],
      themecolor: "#23c4ff",
    },

    {
      id: "leon",
      name: "レオン",
      fullname: "Leon Müller",
      image: "image/leon.a1.jpg",
      firstperson: "俺",
      secondperson: [
        {
          name: "君",
          note: "基本",
        },
      ],
      birthplace: "Switzerland",
      birthcity: "Lucerne",
      mothertongue: ["Swiss-German(Alemannic)"],
      themecolor: "#ff238d",
    },

    {
      id: "claire",
      name: "クレア",
      fullname: "Claire Lambert",
      image: "image/claire.png",
      firstperson: "わたし",
      secondperson: [
        {
          name: "あなた",
          note: "基本",
        },
      ],
      birthplace: "Canada",
      birthcity: "Montréal",
      mothertongue: ["Canadian French", "English"],
      themecolor: "rgb(255, 157, 203)",
    },

    {
      id: "ludvig",
      name: "ルドヴィグ",
      fullname: "Ludvig Andersen",
      image: "image/ludvig.png",
      firstperson: "俺",
      secondperson: [
        {
          name: "君",
          note: "基本",
        },
      ],
      birthplace: "Denmark",
      birthcity: "Odense",
      mothertongue: ["Danish"],
      themecolor: "hsl(350, 100%, 59%)",
    },

    {
      id: "sigrun",
      name: "シグルン",
      fullname: "Sigrún Andersen",
      image: "image/sigrun.png",
      firstperson: "僕",
      secondperson: [
        {
          name: "君",
          note: "基本",
        },
      ],
      birthplace: "Iceland",
      birthcity: "Reykjavík",
      mothertongue: ["Icelandic"],
      themecolor: "rgb(50, 25, 123)",
    },

    {
      id: "michel",
      name: "ミシェル",
      fullname: "Michel Valmont",
      image: "image/michel.tem.png",
      firstperson: "俺",
      secondperson: [
        {
          name: "君",
          note: "基本",
        },
      ],
      birthplace: "France",
      birthcity: "Paris",
      mothertongue: ["French"],
      themecolor: "rgb(163, 241, 69)",
    },

    {
      id: "elizabeth",
      name: "エリザベス",
      fullname: "Elizabeth Bennet",
      image: "image/elizabeth.png",
      firstperson: "わたくし",
      secondperson: [
        {
          name: "貴方",
          note: "基本",
        },
      ],
      birthplace: "UK / England",
      birthcity: "London",
      mothertongue: ["English(British!!!!!)"],
      themecolor: "rgb(101, 20, 112)",
    },

    {
      id: "gray",
      name: "グレイ",
      fullname: "Gray Alexander",
      image: "image/tem.png",
      firstperson: "俺",
      secondperson: [
        {
          name: "お前",
          note: "基本",
        },
      ],
      birthplace: "USA",
      birthcity: "New York",
      mothertongue: ["English(American)"],
      themecolor: "rgb(25, 98, 255)",
    },

    {
      id: "vittoria",
      name: "ヴィットーリア",
      fullname: "Vittoria Castiglione",
      image: "image/vittoria.png",
      firstperson: "ボク",
      secondperson: [
        {
          name: "キミ",
          note: "基本",
        },
      ],
      birthplace: "Italy",
      birthcity: "Rome",
      mothertongue: ["Italian"],
      themecolor: "rgb(49, 255, 180)",
    },

    {
      id: "gilbert",
      name: "ギルベルト",
      fullname: "Gilbert Eberwein",
      image: "image/tem.png",
      firstperson: "俺",
      secondperson: [
        {
          name: "君",
          note: "基本",
        },
        {
          name: "お前",
          note: "イラついてる相手へ",
        },
      ],
      birthplace: "Germany",
      birthcity: "Berlin",
      mothertongue: ["German"],
      themecolor: "rgb(251, 255, 41)",
    },

    {
      id: "azreto",
      name: "アズレート",
      fullname: "Azreto Livinsky",
      image: "image/azret.PNG",
      firstperson: "俺",
      secondperson: [
        {
          name: "お前",
          note: "基本",
        },
        {
          name: "君",
          note: "好感度高め",
        },
      ],
      birthplace: "Russia",
      birthcity: "St.Petersburg",
      mothertongue: ["Russian"],
      themecolor: "rgb(56, 68, 147)",
    },

    {
      id: "kalorina",
      name: "カロリーナ",
      fullname: "Kalorina Weismann",
      image: "image/kalo.png",
      firstperson: "あたし",
      secondperson: [
        {
          name: "あんた",
          note: "基本",
        },
      ],
      birthplace: "Austria",
      birthcity: "Vienna",
      mothertongue: ["German"],
      themecolor: "rgb(252, 187, 227)",
    },

    {
      id: "shenmei",
      name: "シェンメイ",
      fullname: "神美(Shenmei)",
      image: "image/shenmei.PNG",
      firstperson: "我",
      secondperson: [
        {
          name: "お前",
          note: "基本",
        },
      ],
      birthplace: "China",
      birthcity: "Beijing(北京)",
      mothertongue: ["Chinese(Mandarin)"],
      themecolor: "rgb(255, 100, 22)",
    },

    {
      id: "siwoo",
      name: "シウ",
      fullname: "리･시우(Lee Siwoo)",
      image: "image/tem.png",
      firstperson: "俺",
      secondperson: [
        {
          name: "君",
          note: "基本",
        },
        {
          name: "あんた",
          note: "たまに",
        },
      ],
      birthplace: "South Korea",
      birthcity: "Seoul",
      mothertongue: ["Korean"],
      themecolor: "rgb(60, 163, 232)",
    },

    {
      id: "amagi",
      name: "天城",
      fullname: "天城",
      image: "image/amagi.png",
      firstperson: "僕",
      secondperson: [
        {
          name: "あなた",
          note: "基本",
        },
      ],
      birthplace: "日本",
      birthcity: "京都",
      mothertongue: ["日本語(別に京都弁を喋らはるわけではないですねえ）"],
      themecolor: "rgb(124, 41, 163)",
    },

    {
      id: "flora",
      name: "フローラ",
      fullname: "Flora",
      image: "image/tem.png",
      firstperson: "わたくし",
      secondperson: [
        {
          name: "貴方",
          note: "基本",
        },
      ],
      birthplace: "Liechtenstein",
      birthcity: "Vaduz",
      mothertongue: ["German(Alemannic)"],
      themecolor: "rgb(203, 232, 253)",
    },

    {
      id: "veronica",
      name: "ベロニカ",
      fullname: "Veronica Ivanova",
      image: "image/veronica.png",
      firstperson: "私",
      secondperson: [
        {
          name: "あんた",
          note: "基本",
        },
      ],
      birthplace: "Belarus",
      birthcity: "Minsk",
      mothertongue: ["Belarusian", "Russian"],
      themecolor: "rgb(186, 84, 203)",
    },
  ];

  //呼称データ
  const callings = [
    {
      character1: "svante",
      character2: "noah",
      character1Calls: ["ノア"],
      character2Calls: ["スヴァンテ"],
    },

    {
      character1: "svante",
      character2: "raine",
      character1Calls: ["ライネ"],
      character2Calls: ["スヴァンテ"],
    },

    {
      character1: "svante",
      character2: "leon",
      character1Calls: ["レオンくん"],
      character2Calls: ["スヴァンテ"],
    },

    {
      character1: "noah",
      character2: "leon",
      character1Calls: ["レオンくん", "レオン"],
      character2Calls: ["ノア"],
    },

    {
      character1: "noah",
      character2: "raine",
      character1Calls: ["ライネくん", "ライネ"],
      character2Calls: ["ノアくん"],
    },

    {
      character1: "raine",
      character2: "leon",
      character1Calls: ["レオンくん"],
      character2Calls: ["ライネ"],
    },

    {
      character1: "claire",
      character2: "svante",
      character1Calls: ["スヴァンテくん"],
      character2Calls: ["クレアさん"],
    },

    {
      character1: "claire",
      character2: "noah",
      character1Calls: ["ノアくん"],
      character2Calls: ["クレアさん", "クレア"],
    },

    {
      character1: "claire",
      character2: "raine",
      character1Calls: ["ライネくん"],
      character2Calls: ["クレアさん"],
    },

    {
      character1: "claire",
      character2: "leon",
      character1Calls: ["レオンくん"],
      character2Calls: ["クレア"],
    },

    {
      character1: "ludvig",
      character2: "svante",
      character1Calls: ["スヴァンテ"],
      character2Calls: ["ルドヴィグ", "ルド"],
    },

    {
      character1: "ludvig",
      character2: "noah",
      character1Calls: ["ノア"],
      character2Calls: ["ルドヴィグ"],
    },

    {
      character1: "ludvig",
      character2: "raine",
      character1Calls: ["ライネ"],
      character2Calls: ["ルドヴィグさん"],
    },

    {
      character1: "ludvig",
      character2: "leon",
      character1Calls: ["レオン"],
      character2Calls: ["ルドヴィグ"],
    },

    {
      character1: "ludvig",
      character2: "claire",
      character1Calls: ["クレア"],
      character2Calls: ["ルドヴィグくん"],
    },

    {
      character1: "sigrun",
      character2: "ludvig",
      character1Calls: ["ルドヴィグ"],
      character2Calls: ["シグルン", "シグ"],
    },

    {
      character1: "sigrun",
      character2: "noah",
      character1Calls: ["ノア", "兄貴"],
      character2Calls: ["シグルン"],
    },

    {
      character1: "sigrun",
      character2: "raine",
      character1Calls: ["ライネ"],
      character2Calls: ["シグルンくん"],
    },

    {
      character1: "sigrun",
      character2: "svante",
      character1Calls: ["スヴァンテ"],
      character2Calls: ["シグルンくん"],
    },

    {
      character1: "sigrun",
      character2: "claire",
      character1Calls: ["クレアさん"],
      character2Calls: ["シグルンくん"],
    },

    {
      character1: "sigrun",
      character2: "leon",
      character1Calls: ["レオン"],
      character2Calls: ["シグルン"],
    },

    {
      character1: "svante",
      character2: "michel",
      character1Calls: ["ミシェル"],
      character2Calls: ["スヴァンテ"],
    },

    {
      character1: "svante",
      character2: "elizabeth",
      character1Calls: ["エリー"],
      character2Calls: ["スヴァンテ"],
    },

    {
      character1: "svante",
      character2: "gray",
      character1Calls: ["グレイくん"],
      character2Calls: ["スヴァンテ"],
    },

    {
      character1: "svante",
      character2: "vittoria",
      character1Calls: ["ヴィットーリア"],
      character2Calls: ["スヴァンテ"],
    },

    {
      character1: "svante",
      character2: "gilbert",
      character1Calls: ["ギルベルトくん", "ギル"],
      character2Calls: ["スヴァンテ"],
    },

    {
      character1: "svante",
      character2: "azreto",
      character1Calls: ["アズレートくん"],
      character2Calls: ["スヴァンテ"],
    },

    {
      character1: "svante",
      character2: "kalorina",
      character1Calls: ["カロリーナさん"],
      character2Calls: ["スヴァンテ"],
    },

    {
      character1: "svante",
      character2: "shenmei",
      character1Calls: ["シェンメイさん"],
      character2Calls: ["金髪"],
    },

    {
      character1: "svante",
      character2: "siwoo",
      character1Calls: ["シウくん"],
      character2Calls: ["スヴァンテくん"],
    },

    {
      character1: "svante",
      character2: "amagi",
      character1Calls: ["天城くん"],
      character2Calls: ["スヴァンテさん"],
    },

    {
      character1: "svante",
      character2: "flora",
      character1Calls: ["フローラさん"],
      character2Calls: ["スヴァンテさま"],
    },

    {
      character1: "svante",
      character2: "veronica",
      character1Calls: ["ベロニカさん"],
      character2Calls: ["スヴァンテ"],
    },

    {
      character1: "noah",
      character2: "michel",
      character1Calls: ["ミシェルさん"],
      character2Calls: ["ノア"],
    },

    {
      character1: "noah",
      character2: "elizabeth",
      character1Calls: ["エリー"],
      character2Calls: ["ノア"],
    },

    {
      character1: "noah",
      character2: "gray",
      character1Calls: ["グレイくん"],
      character2Calls: ["ノア"],
    },

    {
      character1: "noah",
      character2: "vittoria",
      character1Calls: ["ヴィットーリア"],
      character2Calls: ["ノア"],
    },

    {
      character1: "noah",
      character2: "gilbert",
      character1Calls: ["ギルベルトくん"],
      character2Calls: ["ノア"],
    },

    {
      character1: "noah",
      character2: "azreto",
      character1Calls: ["アズレートさん"],
      character2Calls: ["ノア"],
    },

    {
      character1: "noah",
      character2: "kalorina",
      character1Calls: ["カロリーナさん"],
      character2Calls: ["ノア"],
    },

    {
      character1: "noah",
      character2: "shenmei",
      character1Calls: ["シェンメイさん"],
      character2Calls: ["金髪"],
    },

    {
      character1: "noah",
      character2: "siwoo",
      character1Calls: ["シウくん"],
      character2Calls: ["ノアくん"],
    },

    {
      character1: "noah",
      character2: "amagi",
      character1Calls: ["天城さん"],
      character2Calls: ["ノアさん"],
    },

    {
      character1: "noah",
      character2: "flora",
      character1Calls: ["フローラちゃん"],
      character2Calls: ["ノアさま"],
    },

    {
      character1: "noah",
      character2: "veronica",
      character1Calls: ["ベロニカちゃん"],
      character2Calls: ["ノアさん"],
    },

    {
      character1: "raine",
      character2: "michel",
      character1Calls: ["ミシェルさん"],
      character2Calls: ["ライネ"],
    },

    {
      character1: "raine",
      character2: "elizabeth",
      character1Calls: ["エリザベスさん"],
      character2Calls: ["ライネ"],
    },

    {
      character1: "raine",
      character2: "gray",
      character1Calls: ["グレイくん"],
      character2Calls: ["ライネ"],
    },

    {
      character1: "raine",
      character2: "vittoria",
      character1Calls: ["ヴィリアさん"],
      character2Calls: ["ライネ"],
    },

    {
      character1: "raine",
      character2: "gilbert",
      character1Calls: ["ギルベルトさん"],
      character2Calls: ["ライネ"],
    },

    {
      character1: "raine",
      character2: "azreto",
      character1Calls: ["アズレートさん"],
      character2Calls: ["ライネ"],
    },

    {
      character1: "raine",
      character2: "kalorina",
      character1Calls: ["カロリーナさん"],
      character2Calls: ["ライネ"],
    },

    {
      character1: "raine",
      character2: "shenmei",
      character1Calls: ["シェンメイさん"],
      character2Calls: ["狙撃手"],
    },

    {
      character1: "raine",
      character2: "siwoo",
      character1Calls: ["シウくん"],
      character2Calls: ["ライネくん"],
    },

    {
      character1: "raine",
      character2: "amagi",
      character1Calls: ["天城さん"],
      character2Calls: ["ライネくん"],
    },

    {
      character1: "raine",
      character2: "flora",
      character1Calls: ["フローラさん"],
      character2Calls: ["ライネさま"],
    },

    {
      character1: "raine",
      character2: "veronica",
      character1Calls: ["ベロニカさん"],
      character2Calls: ["ライネさん"],
    },

    {
      character1: "leon",
      character2: "michel",
      character1Calls: ["ミシェル"],
      character2Calls: ["レオン"],
    },

    {
      character1: "leon",
      character2: "elizabeth",
      character1Calls: ["エリー"],
      character2Calls: ["レオン"],
    },

    {
      character1: "leon",
      character2: "gray",
      character1Calls: ["グレイ"],
      character2Calls: ["レオン"],
    },

    {
      character1: "leon",
      character2: "vittoria",
      character1Calls: ["ヴィリア"],
      character2Calls: ["レオン"],
    },

    {
      character1: "leon",
      character2: "gilbert",
      character1Calls: ["ギルベルト"],
      character2Calls: ["レオン"],
    },

    {
      character1: "leon",
      character2: "azreto",
      character1Calls: ["アズレート"],
      character2Calls: ["レオン"],
    },

    {
      character1: "leon",
      character2: "kalorina",
      character1Calls: ["カロリーナ", "カロ"],
      character2Calls: ["レオン"],
    },

    {
      character1: "leon",
      character2: "shenmei",
      character1Calls: ["シェンメイ"],
      character2Calls: ["医者"],
    },

    {
      character1: "leon",
      character2: "siwoo",
      character1Calls: ["シウ"],
      character2Calls: ["レオンくん"],
    },

    {
      character1: "leon",
      character2: "amagi",
      character1Calls: ["天城くん"],
      character2Calls: ["レオンさん"],
    },

    {
      character1: "leon",
      character2: "flora",
      character1Calls: ["フローラ"],
      character2Calls: ["レオン", "お兄さま"],
    },

    {
      character1: "leon",
      character2: "veronica",
      character1Calls: ["ベロニカ"],
      character2Calls: ["レオン"],
    },

    {
      character1: "claire",
      character2: "michel",
      character1Calls: ["ミシェル"],
      character2Calls: ["クレア"],
    },

    {
      character1: "claire",
      character2: "elizabeth",
      character1Calls: ["ベティ"],
      character2Calls: ["クレア"],
    },

    {
      character1: "claire",
      character2: "gray",
      character1Calls: ["グレイ"],
      character2Calls: ["クレア"],
    },

    {
      character1: "claire",
      character2: "vittoria",
      character1Calls: ["ヴィリアちゃん"],
      character2Calls: ["クレア"],
    },

    {
      character1: "claire",
      character2: "gilbert",
      character1Calls: ["ギルベルトくん"],
      character2Calls: ["クレア"],
    },

    {
      character1: "claire",
      character2: "azreto",
      character1Calls: ["アズレートくん"],
      character2Calls: ["クレア"],
    },

    {
      character1: "claire",
      character2: "kalorina",
      character1Calls: ["カロリーナさん"],
      character2Calls: ["クレア"],
    },

    {
      character1: "claire",
      character2: "shenmei",
      character1Calls: ["シェンメイさん"],
      character2Calls: ["クレア"],
    },

    {
      character1: "claire",
      character2: "siwoo",
      character1Calls: ["シウくん"],
      character2Calls: ["クレアさん"],
    },

    {
      character1: "claire",
      character2: "amagi",
      character1Calls: ["天城さん"],
      character2Calls: ["クレアさん"],
    },

    {
      character1: "claire",
      character2: "flora",
      character1Calls: ["フローラちゃん"],
      character2Calls: ["クレアさま"],
    },

    {
      character1: "claire",
      character2: "veronica",
      character1Calls: ["ベロニカちゃん"],
      character2Calls: ["クレア"],
    },

    // {
    //   character1: "ludvig",
    //   character2: "claire",
    //   character1Calls: ["クレア"],
    //   character2Calls: ["ルドヴィグ"],
    // },

    {
      character1: "ludvig",
      character2: "michel",
      character1Calls: ["ミシェル"],
      character2Calls: ["ルドヴィグ"],
    },

    {
      character1: "ludvig",
      character2: "elizabeth",
      character1Calls: ["エリー"],
      character2Calls: ["ルドヴィグ"],
    },

    {
      character1: "ludvig",
      character2: "gray",
      character1Calls: ["グレイ"],
      character2Calls: ["ルドヴィグ"],
    },

    {
      character1: "ludvig",
      character2: "vittoria",
      character1Calls: ["ヴィリー"],
      character2Calls: ["ルディ"],
    },

    {
      character1: "ludvig",
      character2: "gilbert",
      character1Calls: ["ギル"],
      character2Calls: ["ルドヴィグ"],
    },

    {
      character1: "ludvig",
      character2: "azreto",
      character1Calls: ["アズレート"],
      character2Calls: ["ルドヴィグ"],
    },

    {
      character1: "ludvig",
      character2: "kalorina",
      character1Calls: ["カロリーナ"],
      character2Calls: ["ルドヴィグ"],
    },

    {
      character1: "ludvig",
      character2: "shenmei",
      character1Calls: ["シェンメイ"],
      character2Calls: ["ルドヴィグ"],
    },

    {
      character1: "ludvig",
      character2: "siwoo",
      character1Calls: ["シウくん"],
      character2Calls: ["ルドヴィグくん"],
    },

    {
      character1: "ludvig",
      character2: "amagi",
      character1Calls: ["天城くん"],
      character2Calls: ["ルドヴィグさん"],
    },

    {
      character1: "ludvig",
      character2: "flora",
      character1Calls: ["フローラ"],
      character2Calls: ["ルドヴィグさま"],
    },

    {
      character1: "ludvig",
      character2: "veronica",
      character1Calls: ["ベロニカ"],
      character2Calls: ["ルドヴィグ"],
    },

    {
      character1: "sigrun",
      character2: "michel",
      character1Calls: ["ミシェル"],
      character2Calls: ["シグルン"],
    },

    {
      character1: "sigrun",
      character2: "elizabeth",
      character1Calls: ["エリザベス"],
      character2Calls: ["シグルン"],
    },

    {
      character1: "sigrun",
      character2: "gray",
      character1Calls: ["グレイ"],
      character2Calls: ["シグルン"],
    },

    {
      character1: "sigrun",
      character2: "vittoria",
      character1Calls: ["ヴィットーリア"],
      character2Calls: ["シグルン"],
    },

    {
      character1: "sigrun",
      character2: "gilbert",
      character1Calls: ["ギルベルト"],
      character2Calls: ["シグルン"],
    },

    {
      character1: "sigrun",
      character2: "azreto",
      character1Calls: ["アズレート"],
      character2Calls: ["シグルン"],
    },

    {
      character1: "sigrun",
      character2: "kalorina",
      character1Calls: ["カロリーナ"],
      character2Calls: ["シグルン"],
    },

    {
      character1: "sigrun",
      character2: "shenmei",
      character1Calls: ["シェンメイ"],
      character2Calls: ["小さいの"],
    },

    {
      character1: "sigrun",
      character2: "siwoo",
      character1Calls: ["シウ"],
      character2Calls: ["シグルンくん"],
    },

    {
      character1: "sigrun",
      character2: "amagi",
      character1Calls: ["天城"],
      character2Calls: ["シグルンくん"],
    },

    {
      character1: "sigrun",
      character2: "flora",
      character1Calls: ["フローラ"],
      character2Calls: ["シグルンさま"],
    },

    {
      character1: "sigrun",
      character2: "veronica",
      character1Calls: ["ベロニカ"],
      character2Calls: ["シグルン"],
    },

    {
      character1: "michel",
      character2: "elizabeth",
      character1Calls: ["ベティ"],
      character2Calls: ["ミシェル"],
    },

    {
      character1: "michel",
      character2: "gray",
      character1Calls: ["グレイ"],
      character2Calls: ["ミシェル"],
    },

    {
      character1: "michel",
      character2: "vittoria",
      character1Calls: ["ヴィリア"],
      character2Calls: ["ミシェル"],
    },

    {
      character1: "michel",
      character2: "gilbert",
      character1Calls: ["ギル"],
      character2Calls: ["ミシェル"],
    },

    {
      character1: "michel",
      character2: "azreto",
      character1Calls: ["アズレート"],
      character2Calls: ["ミシェルくん"],
    },

    {
      character1: "michel",
      character2: "kalorina",
      character1Calls: ["カロリーナ"],
      character2Calls: ["ミシェル"],
    },

    {
      character1: "michel",
      character2: "shenmei",
      character1Calls: ["シェンメイ"],
      character2Calls: ["ミシェル"],
    },

    {
      character1: "michel",
      character2: "siwoo",
      character1Calls: ["シウ"],
      character2Calls: ["ミシェルさん"],
    },

    {
      character1: "michel",
      character2: "amagi",
      character1Calls: ["天城"],
      character2Calls: ["ミシェルさん"],
    },

    {
      character1: "michel",
      character2: "flora",
      character1Calls: ["フローラ"],
      character2Calls: ["ミシェルさま"],
    },

    {
      character1: "michel",
      character2: "veronica",
      character1Calls: ["ベロニカ"],
      character2Calls: ["ミシェル"],
    },

    {
      character1: "elizabeth",
      character2: "gray",
      character1Calls: ["グレイ"],
      character2Calls: ["ベティ"],
    },

    {
      character1: "elizabeth",
      character2: "vittoria",
      character1Calls: ["ヴィリア"],
      character2Calls: ["エリー"],
    },

    {
      character1: "elizabeth",
      character2: "gilbert",
      character1Calls: ["ギルベルト"],
      character2Calls: ["エリザベス"],
    },

    {
      character1: "elizabeth",
      character2: "azreto",
      character1Calls: ["アズレート"],
      character2Calls: ["エリザベス"],
    },

    {
      character1: "elizabeth",
      character2: "kalorina",
      character1Calls: ["カロリーナ"],
      character2Calls: ["エリザベス"],
    },

    {
      character1: "elizabeth",
      character2: "shenmei",
      character1Calls: ["シェンメイさん"],
      character2Calls: ["エリザベス"],
    },

    {
      character1: "elizabeth",
      character2: "siwoo",
      character1Calls: ["シウさん"],
      character2Calls: ["エリザベスさん"],
    },

    {
      character1: "elizabeth",
      character2: "amagi",
      character1Calls: ["天城さん"],
      character2Calls: ["エリザベスさん"],
    },

    {
      character1: "elizabeth",
      character2: "flora",
      character1Calls: ["フローラさん"],
      character2Calls: ["エリザベスさま"],
    },

    {
      character1: "elizabeth",
      character2: "veronica",
      character1Calls: ["ベロニカさん"],
      character2Calls: ["エリザベス"],
    },

    {
      character1: "gray",
      character2: "vittoria",
      character1Calls: ["ヴィリア"],
      character2Calls: ["グレイ"],
    },

    {
      character1: "gray",
      character2: "gilbert",
      character1Calls: ["ギルベルト"],
      character2Calls: ["グレイ"],
    },

    {
      character1: "gray",
      character2: "azreto",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "gray",
      character2: "kalorina",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "gray",
      character2: "shenmei",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "gray",
      character2: "siwoo",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "gray",
      character2: "amagi",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "gray",
      character2: "flora",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "gray",
      character2: "veronica",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "vittoria",
      character2: "gilbert",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "vittoria",
      character2: "azreto",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "vittoria",
      character2: "kalorina",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "vittoria",
      character2: "shenmei",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "vittoria",
      character2: "siwoo",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "vittoria",
      character2: "amagi",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "vittoria",
      character2: "flora",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "vittoria",
      character2: "veronica",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "gilbert",
      character2: "azreto",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "gilbert",
      character2: "kalorina",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "gilbert",
      character2: "shenmei",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "gilbert",
      character2: "siwoo",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "gilbert",
      character2: "amagi",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "gilbert",
      character2: "flora",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "gilbert",
      character2: "veronica",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "azreto",
      character2: "kalorina",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "azreto",
      character2: "shenmei",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "azreto",
      character2: "siwoo",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "azreto",
      character2: "amagi",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "azreto",
      character2: "flora",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "azreto",
      character2: "veronica",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "kalorina",
      character2: "shenmei",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "kalorina",
      character2: "siwoo",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "kalorina",
      character2: "amagi",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "kalorina",
      character2: "flora",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "kalorina",
      character2: "veronica",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "shenmei",
      character2: "siwoo",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "shenmei",
      character2: "amagi",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "shenmei",
      character2: "flora",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "shenmei",
      character2: "veronica",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "siwoo",
      character2: "amagi",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "siwoo",
      character2: "flora",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "siwoo",
      character2: "veronica",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "amagi",
      character2: "flora",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "amagi",
      character2: "veronica",
      character1Calls: [""],
      character2Calls: [""],
    },

    {
      character1: "flora",
      character2: "veronica",
      character1Calls: [""],
      character2Calls: [""],
    },
  ];

  //データない呼称データのひな形書いてくれや関数
  function generateMissingCallingTemplates() {
    const templates = [];

    for (let i = 0; i < characters.length; i++) {
      for (let j = i + 1; j < characters.length; j++) {
        const character1 = characters[i];
        const character2 = characters[j];

        const existingCalling = callings.find((calling) => {
          return (
            (calling.character1 === character1.id &&
              calling.character2 === character2.id) ||
            (calling.character1 === character2.id &&
              calling.character2 === character1.id)
          );
        });

        if (!existingCalling) {
          templates.push(
            `{
  character1: "${character1.id}",
  character2: "${character2.id}",
  character1Calls: [""],
  character2Calls: [""],
},`,
          );
        }
      }
    }

    console.log(templates.join("\n\n"));
  }

  // キャラページ生成関数

  function renderCharacterPage(currentCharacterId) {
    //選択中のキャラの情報一式取ってこい！
    const currentCharacter = characters.find((character) => {
      return character.id === currentCharacterId;
    });

    //キャラテーマ色を反映させよう;
    document.documentElement.style.setProperty(
      "--character-theme",
      currentCharacter.themecolor,
    );

    //一旦ログに表示（あとでけすかも）
    console.log(currentCharacter);

    //HTMLのid profileを取得
    const profile = document.querySelector("#profile");

    //２人称表示用の文字列づくり
    let secondPersonText = "";

    currentCharacter.secondperson.forEach((secondperson, index) => {
      secondPersonText += `${secondperson.name} (${secondperson.note})`;
      if (index < currentCharacter.secondperson.length - 1) {
        secondPersonText += "　";
      }
    });

    //プロフィール欄をHTMLに表示させよう
    profile.innerHTML = `
  <p class="fullname">${currentCharacter.fullname}</p>
  <div class="profile-left">
  <img class="profile-image" src ="${currentCharacter.image}" alt ="${currentCharacter.name}">
  </div>

  <div class="profile-right">

  <p class="profile-item">
    <span class="profile-label">FIRST PERSON</span>
    <span class="profile-value">${currentCharacter.firstperson}</span>
  </p>

  <p class="profile-item">
    <span class="profile-label">SECOND PERSON</span>
    <span class="profile-value">${secondPersonText}</span>
  </p>

  <p class="profile-item">
    <span class="profile-label">BIRTHPLACE</span>
    <span class="profile-value">${currentCharacter.birthplace}</span>
  </p>

  <p class="profile-item">
    <span class="profile-label">BIRTH CITY</span>
    <span class="profile-value">${currentCharacter.birthcity}</span>
  </p>

  <p class="profile-item">
    <span class="profile-label">MOTHER TONGUE</span>
    <span class="profile-value">${currentCharacter.mothertongue.join(" / ")}</span>
  </p>
</div>
`;

    // 選択中のキャラに関連する呼称情報を取得
    const relatedCallings = callings.filter((calling) => {
      return (
        calling.character1 === currentCharacterId ||
        calling.character2 === currentCharacterId
      );
    });

    //とれた呼称情報をログ表示（あとでけす）
    console.log(relatedCallings);

    //テーブル情報取得
    const callingTable = document.querySelector("#calling-table");

    callingTable.innerHTML = "";

    //相手キャラ、呼び方、呼ばれ方の決定
    relatedCallings.forEach((calling) => {
      let otherCharacterId; //相手キャラID
      let calls; //呼び方
      let calledBy; //呼ばれ方

      if (calling.character1 === currentCharacterId) {
        otherCharacterId = calling.character2;
        calls = calling.character1Calls;
        calledBy = calling.character2Calls;
      } else {
        otherCharacterId = calling.character1;
        calls = calling.character2Calls;
        calledBy = calling.character1Calls;
      }

      //相手キャラのデータをfindで取りに行く
      const otherCharacter = characters.find((character) => {
        return character.id === otherCharacterId;
      });

      //IDミスとかでキャラが見つからなかったときにコンソールに表示してくれるよ
      if (!otherCharacter) {
  console.error("キャラが見つからない:", otherCharacterId);
  return;
}

      callingTable.insertAdjacentHTML(
        "beforeend",

        `
      <tr>
      <td>
      <div class="calling-character-cell">
      <img 
        class = "calling-character-image"
        src = "${otherCharacter.image}"
        alt = "${otherCharacter.name}">
       <button 
        class="calling-character-link"
        data-character-id="${otherCharacter.id}">
        ${otherCharacter.name}
       </button>
       </div>
       </td>

      <td>${calls.join(" / ")}</td>
       <td>${calledBy.join(" / ")}</td>
       </tr>
      `,
      );
    });

    //呼称表の相手キャラの名前クリックでページ遷移
    const callingCharacterLinks = document.querySelectorAll(
      ".calling-character-link",
    );

    callingCharacterLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const characterId = link.dataset.characterId;

        renderCharacterPage(characterId);

        document.querySelector("#profile").scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }

  function renderCharacterList() {
    const characterList = document.querySelector("#character-list");

    characterList.innerHTML = "";

    characters.forEach((character) => {
      characterList.insertAdjacentHTML(
        "beforeend",
        `
        <button
          class="character-card"
          data-character-id="${character.id}"
        >
        <img
          class="character-card-image"
          src="${character.image}"
          alt="${character.name}"
          >
          <span class="characard-name">${character.fullname}</span>
          </button>
        `,
      );
    });

    //キャラ一覧のクリック処理
    const characterCards = document.querySelectorAll(".character-card");

    characterCards.forEach((card) => {
      card.addEventListener("click", () => {
        const characterId = card.dataset.characterId;

        renderCharacterPage(characterId);

        document.querySelector("#profile").scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }

  renderCharacterPage("leon");
  renderCharacterList();
  // generateMissingCallingTemplates();
}
