/*
 * @Author: your name
 * @Date: 2021-07-22 15:47:35
 * @LastEditTime: 2021-07-22 15:47:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ltsn/libs/update.js
 */

const axios = require('axios')
const compareVersions = require('compare-versions')

module.exports = async (v) => {
  // 拿到所有的 Node 版本
  const { data } = await axios
    .get('https://nodejs.org/dist/index.json')
  
  // 把目标版本的 LTS 都挑选出来
  return data.filter(node => {
    const cp = v
      ? (compareVersions(node.version, 'v' + v + '.0.0') >= 0)
      : true
    return node.lts && cp
  }).map(it => {
    // 踢出去 file 这个字段，其他的全部返回
    const { files, ...rest } = it
    return { ...rest }
  })
}