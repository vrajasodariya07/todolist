import './App.css';
import { useState } from 'react';

function App() {

  let [data1, setdata1] = useState('');
  let [ind, setind] = useState();
  let [data2, setdata2] = useState([]);
  let [demo, setdemo] = useState([]);
  let [d, setd] = useState(false);
  let [check, setcheck] = useState('');
  let [search, setsearch] = useState(false);

  let todo = () => {

    if (d) {
      let f = [...data2]
      f[ind] = data1
      setdata2(f);
      setd(false)
    }
    else {
      setdata2([...data2, { task: data1, checked: false }]);
      setdemo([...data2, { task: data1, checked: false }]);
    }
  }

  let del = (ind) => {
    var temp = data2.filter((arr, index) => {
      return index != ind;
    })
    setdata2(temp);
  }

  let edit = (ind) => {
    var demo = [...data2]
    setdata1(demo[ind])
    setind(ind)
    setd(true)
  }

  let che = (ind) => {
    let check = [...data2];
    check[ind].checked = !check[ind].checked;
    // setdata2(check)
    setdemo(check)

  }

  let com = (ind) => {
    console.log(demo)
    let c = demo.filter((val) => {
      return val.checked == true;
    })
    setdata2(c);
  }

  let inc = () => {
    let c = demo.filter((val, i) => {
      return val.checked == false;
    })
    setdata2(c);
  }

  let sea = () => {
    let temp = [];
    temp = demo.filter((ele) => {
      return ele.task == search;
    })
    setdata2(temp);
    console.log(temp);

  }

  let all = () => {
    setdata2(demo);
  }

  return (
    <>

      <div className='main'>

        <input className='input' value={data1} type="text" name="" id="" placeholder='Add Items...' onChange={(e) => { setdata1(e.target.value) }} />
        <br></br><button onClick={todo}>ADD</button>
        <input type="text" name="" id="" placeholder='Search' style={{ padding: "6.5px" }} onChange={(e) => {
          setsearch(e.target.value)
        }} />
        <button onClick={sea}>Search</button><br></br>
        <button onClick={com}>Complete</button>
        <button onClick={inc}>Incomplete</button>
        <button onClick={all}>All</button>

        <div className='ans'>
          {
            data2.map((ele, ind) => {
              return (
                <li>
                  <div className='d-flex'>
                    <div key={ind}>
                      <input type="checkbox" checked={ele.checked} name="" onClick={() => { che(ind) }} />
                      <span style={{ textDecoration: ele.checked ? "line-through" : "" }}>{ele.task}</span>
                    </div>
                    <div className='last'>
                      <input type="button" value='Delete' onClick={() => { del(ind) }} />
                      <input type="button" value='Edit' onClick={() => { edit(ind) }} />
                    </div>
                  </div>
                </li>
              )
            })
          }
        </div>

      </div>

    </>
  );
}

export default App;
