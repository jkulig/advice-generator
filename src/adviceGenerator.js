export default () => ({
    advice: 'Roll the dice for your advice',
    id: 0,
 
    getAdvice() {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => { 
                this.advice = data.slip.advice;
                this.id = data.slip.id; 
            });
    }
})