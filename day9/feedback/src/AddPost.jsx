import React from 'react'

const AddPost = ({title,setTitle,desc,setDesc,handleSubmit}) => {
  return (
    <div>
<form onSubmit={handleSubmit}>
    <input type="text" name="" id="" placeholder="Title"
                            value={title}
                             onChange={(e)=>setTitle(e.target.value)}
    />
    <textarea name="" id="" placeholder='Description' 

                          value={desc}
                          onChange={(e)=>setDesc(e.target.value)}
                             
    >
        </textarea> <br></br>
    <button type='submit'> save </button>
</form>

    </div>
  )
}

export default AddPost