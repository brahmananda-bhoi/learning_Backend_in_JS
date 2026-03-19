import { Promise } from "mongoose"

const asyncHandler = (requestHandler) =>{
    (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next))
        .catch((err)=>next(err))
    }
}



export {asyncHandler}















// const asyncHandler = ()=>{}
// const asyncHandler = (func)=>()=>{}
// const asyncHandler = (func)=> asunc ()=>{}
//THIS IS A HIGHRER ORDER FUNCTION
// const asyncHandler = (fn)=> async (req, res, next)=>{
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message:Array.meaasge
//         })
//     }
// }