import React, {useState} from "react";

function MyDemo(){
   
    const [name, setName] = useState("enter name above")
    const [answer, setAnswer] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }


    return(

        <div>
            <input id="myName" onChange={(handleNameChange)}></input>
            <button onClick={()=> setName(document.getElementById("myName").value)}>Submit name</button>
            <p>Name: {name}</p>
            <p>Answer: {answer}</p>

            <label>
                <input name="rb" type ="radio" value="Yes"checked ={answer == "Yes"}
            onChange={(e) => setAnswer(e.target.value)}/>
            Yes
            </label>
            <label>
                <input name="rb" type ="radio" value="No" checked = {answer == "No"}
             onChange={(e) => setAnswer(e.target.value)}/>
             No
             </label>
        </div>
    );
}
export default MyDemo