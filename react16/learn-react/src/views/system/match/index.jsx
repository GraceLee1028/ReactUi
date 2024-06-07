import { Component } from 'react'

class MatchTwo extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    form: {
      rest: 20000,
      aim: '',
      initVal: 0,
      aimCount: 0
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
            </tr>
          </thead>
          <tbody>
            {this.state.result.map(item => {
              return (
                <tr>
                  <td>{item.falseRandom}</td>
                  <td>{item.falseOther}</td>
                  <td>{item.result}</td>
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
            </tr>
          </thead>
          <tbody>
            {this.state.trueResult.map(item => {
              return (
                <tr>
                  <td>{item.falseRandom}</td>
                  <td>{item.falseOther}</td>
                  <td>{item.result}</td>
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
      const aimCount = prevState.form.initVal + prevState.form.aimCount
      const rest = prevState.form.rest - prevState.form.initVal
      return {
        form: { ...prevState.form, aimCount: aimCount, rest: rest }
      }
    })
  }
  //calc the rest
  changeAim = () => {
    const money = this.state.form.aim
    const aimCount = (this.state.form.aimCount - money).toFixed(2)
    this.setState(prevState => {
      return {
        form: { ...prevState.form, aimCount: aimCount },
        args: { otherPlayerMoney: aimCount, playerMoney: aimCount }
      }
    })
  }
  //start game
  start = () => {
    if (this.state.form.aim < 50) {
      alert('下注最小50起步，请您重新下注')
      return
    }
    const max = 6
    const random = Math.random() * (max + 1)
    const other = Math.random() * (max + 1)
    let falseRandom = random,
      falseOther = other
    if (random >= other) {
      if (random === 6) {
        falseOther = 6
      } else {
        falseRandom = random + Math.floor(Math.random() * (random - other))
      }
    }
    const falseResult = falseOther < falseRandom ? '赢' : falseOther === falseRandom ? '平' : '输'
    const trueResult = falseOther < falseRandom ? '赢' : falseOther === falseRandom ? '平' : '输'

    this.setState(prevState => {
      return {
        result: [...prevState.result, { player: falseRandom, other: falseOther, result: falseResult }],
        trueResult: [...prevState.trueResult, { player: random, other: other, result: trueResult }]
      }
    })
  }
}

export default MatchTwo
