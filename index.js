let jieba = require("nodejieba")
let dic = require("./dic/index")

const getRandomNum = (m, n) => {
  return Math.round(Math.random() * (m - n)) + n
}

const start = sentence => {
  console.log(" > " + sentence)
  let list = jieba.tag(sentence, true),
    str = ""

  console.log(list)

  for (let i = 0; i < list.length; i++) {
    if (
      list[i] &&
      list[i]["tag"] &&
      dic[list[i]["tag"]] &&
      dic[list[i]["tag"]][list[i]["word"]] &&
      dic[list[i]["tag"]][list[i]["word"]].length
    ) {
      list[i]["word"] =
        dic[list[i]["tag"]][list[i]["word"]][
          getRandomNum(0, dic[list[i]["tag"]][list[i]["word"]].length - 1)
        ]
    }

    str = str + list[i]["word"]
  }

  if (
    list &&
    list[0] &&
    list[0]["tag"] &&
    (list[0]["tag"] == "r" || list[0]["tag"] == "m")
  ) {
    str = dic["emm"][(0, getRandomNum(0, dic["emm"].length - 1))] + str
  }

  console.log(str)
}

start("他妈的")
