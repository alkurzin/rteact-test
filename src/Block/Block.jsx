import './Block.css';
import Script from './script';
import {useState} from 'react';



const Block = () => {
    let arr = new Array();
    const [isDisplay, setIsDisplay] = useState(false);
    const [style, setStyle] = useState("test-div");

    const choice = event => {
        if(event.ctrlKey){
            if(!arr.includes(event.currentTarget.id)){
                setIsDisplay(true);
                arr.push(event.currentTarget.id);
                event.currentTarget.style.backgroundColor = "rgba(66,170,255,0.5)";        
            }else{
                event.currentTarget.style.backgroundColor = "white";
                let index = arr.indexOf(event.currentTarget.id);
                let tmp = arr[0];
                arr[0] = arr[index];
                arr[index] = tmp;
                arr.shift();
            }
        }
    };

    function update(){
        alert(arr);
    }
    
    function cancel(){
        setIsDisplay(false);
    
        arr.length = 0;
        setStyle("test-div");
        console.log("sss");
        // setIsActive(false);
    }

    return (
        <div>
            <button className="btn" onClick={() => update()}
                style={{
                    display: isDisplay ? 'inline-block' : 'none'
                }}
            >
                Редактировать
            </button>
            <button className="btn" onClick={() => cancel()}
                style={{
                    display: isDisplay ? 'inline-block' : 'none'
                }}
            >
                Отмена
            </button>
            <div className={style}  id="1" onClick={choice}>
                Div 1
            </div>
            <div className={style}  id="2" onClick={choice}>
                Div 2
            </div>
            <div className={style} id="3" onClick={choice}>
                Div 3
            </div>
        </div>
      );
};

export default Block;