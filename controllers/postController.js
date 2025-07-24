import Post from '../models/Post.js'



const createPost= async (req, res) => {
  try {
     const { title, body } = req.body;
    const newPost = await Post.create({ title, body, author: req.user._id });
   
    res.status(201).json(newPost);
  } catch (error) {
      console.error(error)
        res.status(400).json(error)
  }
}

const getPost=async (req,res)=>{
    try {
        const posts = await Post.find({ author: req.user._id }).populate('author', 'name email');
    res.json(posts);
    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }
}
export {createPost,getPost}