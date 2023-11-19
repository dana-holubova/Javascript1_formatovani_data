
const formatDate = ({ day, month, year }) => {

    const dateFormated = `${day.toString().padStart(2, "0")}.${month.toString().padStart(2, "0")}.${year.toString()}`

    return dateFormated;
}

document.body.innerHTML += formatDate({ day: 19, month: 11, year: 2023 });