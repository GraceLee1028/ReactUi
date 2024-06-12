import { Component } from 'react'
import './index.scss'
class MatchTwo extends Component {
  // constructor(props) {
  //   super(props)
  // }
  state = {
    form: {
      rest: 20000,
      aim: '',
      initVal: 0,
      aimCount: 0,
      aimCountTrue: 0
    },
    trueResult: [], //实际结果
    result: [], //结果
    //下注金额
    args: {
      playerMoney: 0,
      otherPlayerMoney: 0
    }
  }
  render() {
    return (
      <>
        <h2>比大小,最小1点，最大6点</h2>
        <h3>规则6点为最大，1点为最小,下注最少20元</h3>
        <h1>您当前的账户余额为：{this.state.form.rest}元</h1>
        <div className="form-item-box">
          <div className="form-item">
            <input type="number" value={this.state.form.initVal} onChange={e => this.fill(e, 'initVal')} placeholder="请您充值"></input>
            <button onClick={this.changeAimCount}>充值</button>
          </div>
          <div className="form-item">
            <h1>
              您充值后的余额为：<span>{this.state.form.aimCount}元</span>
            </h1>
          </div>
        </div>
        <input type="number" value={this.state.form.aim} onChange={e => this.fill(e, 'aim')} placeholder="请输入您当前的筹码"></input>
        <button onClick={this.start}>开始</button>
        <table>
          <tbody>
            <tr>
              <td>您下注为：</td>
              <td>{this.state.args.playerMoney}元</td>
            </tr>
            <tr>
              <td>您的对家下注为：</td>
              <td>{this.state.args.playerMoney}元</td>
            </tr>
          </tbody>
        </table>
        <h3>结果</h3>
        <table>
          <thead>
            <tr>
              <th>您的点数</th>
              <th>对家的点数</th>
              <th>结果</th>
              <th>金额</th>
              <th>剩余余额</th>
            </tr>
          </thead>
          <tbody>
            {this.state.result.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.player}</td>
                  <td>{item.other}</td>
                  <td>{item.result}</td>
                  <td>{item.money}</td>
                  <td>{item.rest}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <h3>背后的真相</h3>
        <table>
          <thead>
            <tr>
              <th>您的点数</th>
              <th>对家的点数</th>
              <th>结果</th>
              <th>金额</th>
              <th>剩余余额</th>
            </tr>
          </thead>
          <tbody>
            {this.state.trueResult.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.player}</td>
                  <td>{item.other}</td>
                  <td>{item.result}</td>
                  <td>{item.money}</td>
                  <td>{item.rest}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
  fill = (e, key = 'initVal') => {
    const money = e.target.value

    this.setState(prevState => {
      return {
        form: { ...prevState.form, [key]: money }
      }
    })
  }
  //充值
  changeAimCount = () => {
    if (this.state.form.initVal > this.state.form.rest) {
      alert('您当前账号余额不够，没有钱了')
      return
    }
    this.setState(prevState => {
      const aimCount = Number(prevState.form.initVal) + prevState.form.aimCount
      const aimCountTrue = Number(prevState.form.initVal) + prevState.form.aimCountTrue
      const rest = Number(prevState.form.rest) - prevState.form.initVal
      return {
        form: { ...prevState.form, aimCount: aimCount, aimCountTrue: aimCountTrue, rest: rest }
      }
    })
  }
  //calc the rest
  // changeAim = () => {
  //   const money = this.state.form.aim
  //   const aimCount = (this.state.form.aimCount - money).toFixed(2)
  //   this.setState(prevState => {
  //     return {
  //       form: { ...prevState.form, aimCount: aimCount },
  //       args: { otherPlayerMoney: aimCount, playerMoney: aimCount }
  //     }
  //   })
  // }
  //start game
  start = () => {
    if (this.state.form.aim < 50) {
      alert('下注最小50起步，请您重新下注')
      return
    }
    const aimCount = this.state.form.aimCount
    const aimCountTrue = this.state.form.aimCountTrue //真实余额
    if (Number(this.state.form.aim) > aimCount) {
      alert('充值余额不够，请您先充值')
      return
    }
    const max = 6
    let player = Math.floor(Math.random() * max + 1) //player
    let other = Math.floor(Math.random() * max + 1)
    let falsePlayer = player,
      falseOther = other
    if (player > other) {
      //输了做特殊处理
      if (player === 6) {
        falsePlayer = Math.floor(Math.random() * max + 1)
        falseOther = 6
      } else {
        falseOther = player + Math.floor(Math.random() * (max - other))
      }
    }
    const falseResult = falseOther < falsePlayer ? '赢' : falseOther === falsePlayer ? '平' : '输'
    const trueResult = other < player ? '赢' : other === player ? '平' : '输'
    // const rest = falseResult === '输' ? aimCount - this.state.form.aim : aimCount
    const falseMoney = falseResult === '输' ? `-${this.state.form.aim}` : falseResult === '赢' ? `+${this.state.form.aim}` : `0`
    const falseResultMoney =
      falseResult === '输'
        ? `${Number(aimCount) - this.state.form.aim}`
        : falseResult === '赢'
        ? `${Number(aimCount) + this.state.form.aim}`
        : aimCount
    const trueMoney = trueResult === '输' ? `-${this.state.form.aim}` : trueResult === '赢' ? `+${this.state.form.aim}` : `0`
    const trueResultMoney =
      trueResult === '输'
        ? `${Number(aimCountTrue) - this.state.form.aim}`
        : trueResult === '赢'
        ? `${Number(aimCountTrue) + Number(this.state.form.aim)}`
        : aimCountTrue

    this.setState(prevState => {
      return {
        form: { ...prevState.form, aimCount: falseResultMoney, aimCountTrue: trueResultMoney },
        args: { otherPlayerMoney: this.state.form.aim, playerMoney: this.state.form.aim },
        result: [
          ...prevState.result,
          { player: falsePlayer, other: falseOther, result: falseResult, money: falseMoney, rest: falseResultMoney }
        ],
        trueResult: [...prevState.trueResult, { player: player, other: other, result: trueResult, money: trueMoney, rest: trueResultMoney }]
      }
    })
  }
}

export default MatchTwo
