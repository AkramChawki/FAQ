const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        questions.forEach(q => q.classList.remove("active"))
        question.classList.toggle("active")
}
)
}
)