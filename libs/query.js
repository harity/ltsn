/*
 * @Author: your name
 * @Date: 2021-07-22 15:47:57
 * @LastEditTime: 2021-07-22 15:47:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ltsn/libs/query.js
 */

const Table = require('cli-table')

function query(dists) {
  const keys = Object.keys(dists[0])
  // 建立表头
  const table = new Table({
    head: keys
  })
  
  // 拼接出表格的每一行
  return dists
    .reduce((res, item) => {
      table.push(
        Object.values(item)
      )
      return res
    }, table)
    .toString()
}

module.exports = query