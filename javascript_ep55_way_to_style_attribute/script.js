//inline style jb dete hai tab jake javascript ke style ke property
//mai wh style dikhengi css ki file mai jo set hoti hai wh nhi dikhati hai

//javascript mai style camele case mai hota hai

const h1 = document.querySelector('h1')

// document.querySelector('hi').style

document.querySelector('h1').style.color = 'hotpink'

document.querySelector('h1').style.backgroundColor = 'hotpink'

h1.style.color =' hotpink'
h1.style.color = 'skyblue'

const allLinks = document.querySelectorAll('a')
// allLinks.style.color = 'yellow'

// for(let i=0; i<alllinks.length; i++)
// {
//     allLinks[i].style.color ='teal';
// }

//jha bhi const se kaam chal ske to hum const hi bnana hai
for(const link of allLinks)
{
    // link.style.color ='green'
    // link.style.textDecorationLine = 'none'
    // link.style.fontWeight ='700'
    // link.style.fontFamily ='cursive'
    // link.style.fontSize ='18px'
    
    //jo bhi tag hai na unpe jo style inlne mai hai usko print krwata hai yh
    console.log(link.style.cssText)
    //isko set bhi kiya jaa skta hai

     // link.style.cssText = `
    //     color: teal;
    //     text-decoration-line: none;
    //     font-weight: 700;
    //     font-family: cursive;
    //     font-size: 18px;
    // `

    //jo bhi set kiya wh inline mai aa jayega..
    //css file mai change nhi kr skte hai html file mai sirf change kr skte hai properties ko

    link.className ='green-link'
    //agr class attribute phle se defined hai aur hume dono classname chahiye to hume dono
    //dena hoga agr ek din to phla wala override ho jayega..
    link.className = 'my-link green-link'
    //yhi uprwala same kaam krne ke liye....
    link.setAttribute ('class', 'green-link')
    link.classList.add('green-link')
    link.classList.remove('my-link')
    link.classList.toggle('my-link')

}

document.querySelector('hii').classList.add('test')

document.querySelector('hii').classList.remove('test')
//toggle ka use krke agr class peresent hai to us remove kr do aur agr peresent nhi hai to la do aur true return krega
document.querySelector('hii').classList.toggle('test')

link.classList.add('green-link')
link.classList.remove('my-link')