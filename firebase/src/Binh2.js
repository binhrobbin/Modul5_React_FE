import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { storage } from "./FireBase";
import "./App.css";


function App() {
    const [listImageUpload, setListImageUpload] = useState([]);
    const [imageList, setImageList] = useState([]);

    const imageListRef = ref(storage, "anh/")
    const uploadImage = async() => {
        if (listImageUpload.length === 0) return;
        listImageUpload.forEach(async element => {
            const imageRef = ref(storage, `anh/${element.name +v4()}`);
            await uploadBytes(imageRef, element);
        });
        // const url = await getDownloadURL(snapshot.ref);
        // console.log ("url: " + url)
        // setImageList((prev) => [...prev,url]);
    };

    useEffect(() => {
        // console.log(1)
        // console.log(storage)
        listAll(imageListRef).then((res)=>{
            console.log("res:" + res)
            res.items.forEach(item => {
                getDownloadURL(item).then((url) =>{
                    setImageList((prev) => [...prev,url]);
                });
            });
        });
    }, []);


    return (
        <div className="App">
            <input
                multiple
                type="file"
                onChange={(event) => {
                    for (const item of event.target.files) {
                        console.log(item)
                        setListImageUpload((prev) => [...prev,item]);
                    }
                    // setImageUpload(event.target.files)
                    // console.log(event.target.files[0])
                }}/>
            <button onClick={uploadImage}>upload Image</button>
            <br></br>
            {imageList.map((url) => {
                return (
                  <img
                    src={url}
                    alt=""
                  />
                );
              })}
        </div>
    );
}

export default App;
