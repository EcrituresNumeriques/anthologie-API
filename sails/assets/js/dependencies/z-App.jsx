let init = {
            skillz : [{dance:true,php:true,materialize:false},
            {dance:true,php:true,materialize:false},
            {dance:true,php:true,materialize:false},
            {dance:true,php:true,materialize:false},
            {dance:true,php:true,materialize:false},
            {dance:true,php:true,materialize:true},
            {dance:true,php:true,materialize:true}],
  count :0
           };


const reducer = function(state,action){
  if(action.type == "toggleMaterialize"){
    state.skillz[0].materialize = !state.skillz[0].materialize;
    state.count += action.count;
    console.log(state.skillz[0].materialize)
    return state
  }
  return state;
}

let store = Redux.createStore(reducer,init);

function Header(){
  return(
    <header> Mon header {store.getState().count}</header>
  )
}
function toggleMaterialize(val){
  console.log(!val)
}

function SuperCard(props){
  var index = store.getState().skillz[props.index];
  return(
    <p onClick={()=>{store.dispatch({type:"toggleMaterialize",count:1})}}>Supercard {props.index}</p>
  )
}
function SmallCard(props){
  var index = store.getState().skillz[props.index];
  var isMaterialize = index.materialize;
  return(
    <p onClick={()=>{store.dispatch({type:"toggleMaterialize",count:3})}}>Materialize {props.index}</p>
  )
}

function Card(props){
  var isMaterialize = props.name.materialize
  return(
    <div>
    {!isMaterialize  && <SuperCard index={props.index} />}
    {isMaterialize && <SmallCard index={props.index} />}
    </div>
  )
}
function Footer(){
  return(
  <footer>Mon footer</footer>
  )
}
function App(){
  var array = store.getState().skillz;
  return(
    <div>
      <Header/>
      {array.map((o,i) => (<Card name={o} key={i} index={i}/>))}
      <Footer />
    </div>
  )
}
function render(){
  ReactDOM.render(<App state={init}/>,document.querySelector('.app'));
}

render()
store.subscribe(render)
