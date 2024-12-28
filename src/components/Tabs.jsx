import { useState } from "react"

const Tabs = ()=>{
    let [activeTab,setActiveTab] = useState("tab1")

    function shoe(){
        setActiveTab("tab1");
    }
    function cricket(){
        setActiveTab("tab2");
    }
    function football(){
        setActiveTab("tab3");
    }
    return(
        <>
            <section className="bg-success py-2">
                <div className="container">
                    <div>
                        <ul className="list-unstyled d-flex gap-5 justify-content-center tabs m-0">
                            <li onClick={shoe}>Shoes</li>
                            <li onClick={cricket}>Cricket</li>
                            <li onClick={football}>Football</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mt-4">
                <div>{activeTab==="tab1" && <p>Nike shoes is the best shoes</p>}</div>
                <div>{activeTab==="tab2" && <p>Dhoni is the best cricketer in india</p>}</div>
                <div>{activeTab==="tab3" && <p>Ronaldo is the best striker in the world</p>}</div>
            </section>
        </>
    )
}

export default Tabs;