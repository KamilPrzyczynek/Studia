let text = "";
const size = 10;
for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
        text += i*j + " ";
        while(text.length < j*((size*size+"").length+1))
        {
            text += " ";
        }
    }    
    console.log(text);
    text = "";
}