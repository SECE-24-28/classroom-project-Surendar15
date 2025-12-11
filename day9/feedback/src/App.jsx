import { useState, useEffect } from "react";
import "./App.css";
import api from "./api/Post";
import Home from "./Home";
import Search from "./Search";
import AddPost from "./AddPost";
import { format } from "date-fns";

function App() {
  const [posts, setPosts] = useState([]);
  const [search,setSearch] =useState("");
  const [searchRes,setSearchRes] = useState([])
  const [title,setTitle] =useState("")
  const [desc,setDesc] =useState("")


  //to fetch intial info
  //it will load only once
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/feedback");
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);



  
  useEffect(()=>
  {
     const demo=()=>
     {
            const filtered=posts.filter((post)=> post.title?.toLowerCase().includes(search.toLowerCase()))
            setSearchRes(filtered)
     }

     demo()

  },[posts,search]
  )


  const handleSubmit=async(e)=>{
    e.preventDefault();

    const id=(posts.length)?(Number(posts[posts.length-1].id)+1):(1)
    const datetime=format(new Date(),"MMM dd,yyyy pp")

    const newObj={id:id,title:title,datetime:datetime,body:desc}
    //const newObj={id,title,datetime,desc} --> this didnt work becuz my key and value name are different if they are same means thil will work . i have body as key and the value I saved as desc , if I had saved the desc as body then that would have worked 
    try {
      await api.post("/feedback",newObj);
    } catch (error) {
      console.error("Error creating post:", error);
    }
    const newList=[...posts,newObj]
    setPosts(newList)
setTitle('')
setDesc('')


  }
  return (
    <>

    

        <Search search={search}
                setSearch={setSearch} />
                <hr />

        <AddPost title={title}
                        setTitle={setTitle}
                        desc={desc}
                        setDesc={setDesc}
                        handleSubmit={handleSubmit}
                        />

      <Home posts={searchRes}/>
    </>
  );
}

export default App;