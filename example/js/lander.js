// 第一版
// {
//   let number = 0

//   // render()

//   function render() {
//     let span = React.createElement('span', { className: 'blue' }, number)
//     let button1 = React.createElement('button', { className: 'add', onClick: add }, '+')
//     let button2 = React.createElement('button', { className: 'minus', onClick: minus }, '-')
//     let div = React.createElement('div', null, span, button1, button2)
//     ReactDOM.render(div, document.querySelector('#root'))
//   }

//   function add() {
//     number += 1
//     render()
//   }
//   function minus() {
//     number -= 1
//     render()
//   }
// }

// {
//   // 第二版
//   let number = 0

//   render()

//   function render() {
//     ReactDOM.render(
//       React.createElement(
//         'div',
//         null,
//         React.createElement('span', { className: 'blue' }, number),
//         React.createElement('button', { className: 'add', onClick: add }, '+'),
//         React.createElement('button', { className: 'minus', onClick: minus }, '-')
//       ),
//       document.querySelector('#root')
//     )
//   }

//   function add() {
//     number += 1
//     render()
//   }
//   function minus() {
//     number -= 1
//     render()
//   }
// }

// 第三版
// 因为上面的render函数和真实的html结构实在太像，于是抽象成函数的这部分操作react就给我们做了，我们可以在js里写html语法
// let number = 0

// render()

// function render() {
//   ReactDOM.render(
//     <div>
//       <span className="blue">{number}</span>
//       <button className="add" onClick={add}>
//         +
//       </button>
//       <button className="minus" onClick={minus}>
//         -
//       </button>
//     </div>,
//     document.querySelector('#root')
//   )
// }

// function add() {
//   number += 1
//   render()
// }
// function minus() {
//   number -= 1
//   render()
// }

let number = 0

render()

let add = () => {
  number += 1
  render()
}

let minus = () => {
  number -= 1
  render()
}



function render() {
  ReactDOM.render(
    <div>
      <span>{number}</span>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </div>,
    document.querySelector('#root')
  )
}