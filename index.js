let jieba = require("nodejieba")
let dic = require("./dic/index")

const getRandomNum = (m, n) => {
  return Math.round(Math.random() * (m - n)) + n
}

const start = sentence => {
  console.log(" > " + sentence)
  let list = jieba.tag(sentence),
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

  console.log(str)
}

start(
  "看到你们的这些话，我浑身发抖，大热天的全身冷汗，手脚冰凉，地狱空荡荡魔鬼在人间，这个社会还能不能好了，我们女人到底要怎么活着你们才满意？"
)
