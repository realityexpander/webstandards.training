export default class Answer {

    get answer() {
        return new Promise((resolve, reject) => {
            resolve(this.fetchFromServer());
        });
    }

    set answer(x) {
        console.log(x);
    }

    async fetchFromServer() {
        // return await fetch('http://localhost:8080/answers/resources/answers')
        return await fetch('answer.json')
            .then(response => response.json());
    }
}