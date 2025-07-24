import Post from '../models/Post.js'



const createPost= async (req, res) => {
  try {
    // const { title } = req.body;
    const newpost = await Post.create({ ...req.body, author:req.user._id });
   
    res.status(201).json(newpost);
  } catch (error) {
      console.error(error)
        res.status(400).json(error)
  }
}


const getPost=async (req,res)=>{
    try {
        const posts=await Post.find({author:req.user._id})
        res.json(posts)
    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }
}
export {createPost,getPost}