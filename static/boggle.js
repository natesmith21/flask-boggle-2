class BoggleGame {

    constructor(boardId, secs = 60){
        this.secs = secs;
        this.score = 0;
        this.words = new Set();
        this.board = $('#' + boardId);

    }

    async handleSubmit(e){
        e.preventDefault();
        const $word = $('.word', this.board);

        let word = $word.val();
        if (!word) return;

        const res = await axios.get('check-word', {params: {word: word}}); 
        if (res.data.result === 'not-word') {
            console.log('not word')
        } else if (res.data.result === 'not-on-board'){
            console.log('not on board')
        } else {
            this.words.add(word)
            console.log(this.words)
        }
    }
}