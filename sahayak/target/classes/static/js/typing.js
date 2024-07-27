document.addEventListener('DOMContentLoaded', () => {
    const text = "Sahayak is more than just an app—it's a lifeline during emergencies.";
    const typedTextElement = document.getElementById('typed-text');
    
    let index = 0;
    
    function type() {
        if (index < text.length) {
            typedTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust the typing speed here
        }
        if(index == text.length){
            typedTextElement.textContent = "";
            index = 0;
            type()
        }
    }
    
    type();
});