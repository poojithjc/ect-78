var images = ["https://image.shutterstock.com/image-vector/vector-father-son-flat-cartoon-260nw-291375758.jpg","https://i.pinimg.com/474x/87/b8/3b/87b83ba77a10a1d3313ed7872918524d--father-kind.jpg","https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX37313863.jpg","https://thumbs.dreamstime.com/z/doodle-sketch-girl-cartoon-illustration-child-thinking-doodle-sketch-girl-cartoon-illustration-child-thinking-163109967.jpg"];

var names  = ["Family Book","Diljeet Singh","Ranbir Singh","Walia Singh","Sona Singh"];
var i = 0;
function update()
{
    i++;
   var members_of_famil_member_in_array = 5
if (i > members_of_famil_member_in_array)
    {
        i = 0;
    }
var updateimage = images [i];
var updatename = names [i];
document.getElementById("family_member_image").src = updateimage;
document.getElementById("family_member_name").innerHTML = updateimage;
}