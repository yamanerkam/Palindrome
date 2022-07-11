const sentence = document.getElementById("str")
const button = document.getElementById("btn")
const output = document.getElementById("output")
const reset = document.querySelector(".reset")
console.log(sentence,button)



function isPalindrome(a){
    const nameStart = a
    const nameLower = a.toLowerCase()
    const nameWthoSpace =nameLower.replace(/\s/g, '')
    const splited = nameWthoSpace.split("")
    const reversed = splited.reverse();
    const nameFinal = reversed.join("")
    console.log(nameWthoSpace,nameFinal)
    sentence.value=""
    if(a==""){
        alert("invalid value")
    }
    else if(nameWthoSpace==nameFinal){
        console.log("yes")

        output.style.backgroundColor = "green";
        output.textContent=`${nameStart} is a palindrome`
    }else{
        console.log("no")
        output.style.backgroundColor = "red";
        output.textContent=`${nameStart} is not a palindrome`
    }
}



button.addEventListener("click",()=>{
    isPalindrome(sentence.value)
})

