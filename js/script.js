let btnSubmit = document.querySelector('#btn_submit');
btnSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    submitForm();
});
const submitForm = () => {
    let userName = document.querySelector("#user_name").value;
    let apiKey = document.querySelector("#api_key").value;
    let apiSecret = document.querySelector("#api_secret").value;
}