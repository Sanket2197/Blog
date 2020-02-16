const express=require('express');
const router=express.Router();
const Blog=require("../../models/Blog")

// @route    GET api/blog
// @desc     Get All Blogs
// @access   Public

router.get('/get-blogs',async (req,res)=>{
        try {
            const blogs= await Blog.find();
            res.json(blogs);
        } catch (error) {
            console.log(error);   
        }
})

// @route    POST api/blog
// @desc     Create Blog
// @access   Public

router.post('/create-blog',async (req,res)=>{
    const {blogTitle,blogDescription,user} = req.body;

    try {
        const blog=new Blog({
            blogTitle:blogTitle,
            blogDescription:blogDescription,
            user:user
        })   
        await blog.save();
        
        res.send("Blog Created");
    } 
    catch (error) {
        console.log(error);   
    }
})

// @route    PUT api/blog
// @desc     Update Blog
// @access   Public

router.put('/update-blog/:id', async (req,res)=>{
    const { blogTitle,blogDescription } = req.body;

    try {
        const filter={_id:req.params.id};
        const newData={blogTitle:blogTitle,
                        blogDescription:blogDescription};

        const blog= await Blog.findOneAndUpdate(filter,newData,{new:true});
        res.json(blog);

    } catch (error) {
        console.log(error);
    }

})

// @route    DELETE api/blog
// @desc     Delete Blog
// @access   Public

router.delete("/delete-blog/:id", async (req,res)=>{
    try{
        const filter={_id:req.params.id};
        const blog=await Blog.findOneAndDelete(filter);
        res.json(blog);
    }catch(error)
    {
        console.log(error);
    }
})


module.exports=router;